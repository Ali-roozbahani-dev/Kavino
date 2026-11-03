# 🏠 mohana_shop — Home Appliances Store

A modern **Home Appliances E-commerce** storefront built with **Next.js 16** and **React 19**, backed by a **Django REST Framework** API.

The UI is fully **Persian (RTL)** and uses the Vazirmatn font. The project is under active development.

> **Demo project.** mohana_shop is a portfolio / skills-showcase project. Product data and prices are sample content, and no real sales or financial transactions take place. A one-time disclaimer dialog is shown to first-time visitors.

---

## ✨ Features

* ✅ Feature-based project organization
* ✅ Responsive, RTL-first design
* ✅ Home page with hero, category, brand and special-offer sliders
* ✅ Product search, filtering and sorting
* ✅ Infinite scrolling with a virtualized product list
* ✅ Product details page (gallery, purchase box, tabs, reviews)
* ✅ Product reviews — list, summary, load more and submission
* ✅ OTP-based authentication with access/refresh tokens in cookies
* ✅ CSRF protection and automatic access-token refresh
* ✅ Protected routes
* ✅ Server-state shopping cart
* ✅ Two-step checkout (cart → address, shipping & coupon)
* ✅ Favorites
* ✅ User profile: personal information, addresses, orders, reviews and favorites
* ✅ Cross-tab synchronization of auth, cart and favorites via the Broadcast Channel API
* ✅ SEO: dynamic metadata and product JSON-LD
* ✅ Dockerized production build (Next.js standalone output)

---

## 🛠️ Tech Stack

| Area | Technology |
| --- | --- |
| Framework | **Next.js 16** (App Router), **React 19**, **TypeScript** |
| Styling | **Tailwind CSS 4**, **shadcn/ui** (Radix UI), `tw-animate-css`, `motion` |
| Server state | **TanStack Query** |
| Client state | **Zustand** |
| Lists | **TanStack Virtual** |
| Forms & validation | **React Hook Form**, **Zod**, `input-otp` |
| HTTP | **Axios** (CSRF + token-refresh interceptors) |
| Sliders / UI extras | **Swiper**, **Sonner** (toasts), **Lucide** & React Icons |
| Security | `isomorphic-dompurify` for sanitizing HTML content |
| Cross-tab sync | **Broadcast Channel API** |
| Testing | **Vitest**, **Testing Library**, **jsdom** |
| Linting | **ESLint 9** with a custom `no-deep-import` rule and `import/no-cycle` |

---

## 🏗️ Architecture

The code is organized by **feature**. Each feature module owns its API calls, hooks, UI and (when needed) its store, and exposes a public surface through its `index.ts`.

```text
src/
├── app/            # Next.js App Router (route groups, layouts, error/not-found pages)
├── Features/       # Feature modules
│   ├── Address/
│   ├── Auth/
│   ├── Cart/
│   ├── Checkout/
│   ├── Favorites/
│   ├── Home/
│   ├── Product_Details/
│   ├── Products/           # Filter, Products_List, Search
│   └── User_Profile/
├── entities/       # Shared domain models, types and query keys (Product, Cart, Order, ...)
├── shared/         # Cross-feature hooks, utils, axios instance, layout (Header/Footer)
├── providers/      # React Query provider and session-sync providers
├── components/ui/  # shadcn/ui components
├── ui/             # Project-level UI primitives and dialogs
└── proxy.ts        # Route protection (Next.js 16 proxy convention)
```

### State management

* **TanStack Query** — all server state (products, cart, auth user, addresses, orders, reviews, ...).
* **Zustand** — client-only state, e.g. the checkout selections (`address_id`, `shipping_method_id`, `coupon_code`).
* **Broadcast Channel API** — keeps important changes in sync across open browser tabs.

### Import boundaries

An ESLint rule (`local/no-deep-import`) forces consumers to import from a module's public `index.ts` instead of reaching into its internals, and `import/no-cycle` guards against circular dependencies.

---

## 🔐 Authentication & Security

Authentication is OTP-based and handled by the Django backend (`djangorestframework-simplejwt` with cookie-based auth).

* The backend sets `access_token` and `refresh_token` as cookies.
* **CSRF:** the client fetches a CSRF cookie from `/api/auth/csrf/` once and sends it in the `X-CSRFToken` header on every request.
* **Automatic refresh:** the Axios response interceptor reacts to a `401` by calling `/api/auth/refresh/` and retrying the original request once. Concurrent `401`s share a single in-flight refresh request.
* **Route protection** (`src/proxy.ts`): the proxy only checks for the presence of a session cookie and redirects. It does **not** refresh tokens — all refreshing happens client-side in the Axios interceptor.

| Routes | Behavior |
| --- | --- |
| `/Login`, `/LoginWithOtp` | Redirect to `/` if the user already has a session |
| `/checkout/shipping` | Redirect to `/Login` if there is no session |
| `/profile` and sub-routes | Redirect to `/` if there is no session |

Checkout routes are additionally guarded on the client by the `useCheckoutGuard` hook, which combines checkout-store hydration with the cart query state.

---

## 🔄 Cross-Tab State Synchronization

Auth, cart and favorites each have a Broadcast Channel listener, wired up globally through `SessionSyncProviders`:

* Logging in or out in one tab updates the auth state in the other open tabs.
* Cart and favorites changes are propagated across tabs, and their caches are reset/refetched on login and logout.

---

## 🧭 Routes

| Route | Description |
| --- | --- |
| `/` | Home |
| `/product/[slug]` | Product details |
| `/category/[...slugs]` | Category product list |
| `/brand/[slug]` | Brand product list |
| `/search/[searchValue]` | Search results |
| `/Login`, `/LoginWithOtp` | Authentication |
| `/checkout/cart` | Shopping cart (step 1) |
| `/checkout/shipping` | Address, shipping method, coupon & summary (step 2) |
| `/profile` | Dashboard and personal information |
| `/profile/orders` | Orders list and order details |
| `/profile/addresses` | Address management |
| `/profile/favorites` | Favorite products |
| `/profile/comments` | The user's reviews |

---

## 🛒 Cart & Checkout

* **Cart** is server state managed with TanStack Query: fetch, add, update quantity and remove items.
* **Checkout** is a two-step flow: `/checkout/cart` → `/checkout/shipping`.
* On the shipping step the user selects an address, a shipping method and optionally applies a coupon. These selections live in a Zustand store (`checkoutStore`) and are submitted to the backend through the checkout update endpoint; the resulting order summary is shown in a dialog.
* There is no real payment gateway — see the demo note above.

---

## 🚀 Getting Started

### Prerequisites

* Node.js 20.9 or newer
* The Django backend running locally (default: `http://localhost:8000`)

### Installation

```bash
npm install
npm run dev
```

The app is available at [http://localhost:3000](http://localhost:3000).

### Environment variables

The browser never talks to the backend directly. It calls relative `/api/...` and `/media/...` paths, and Next.js proxies them to the backend using `rewrites` in `next.config.ts`.

| Variable | Used for |
| --- | --- |
| `BACKEND_INTERNAL_URL` | Backend address, read **server-side at runtime** (takes priority) |
| `NEXT_PUBLIC_API_URL` | Fallback backend address — `.env.development` sets it to `http://localhost:8000` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used for `metadataBase` and canonical/OG tags |

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest in watch mode |
| `npm run test:run` | Run the tests once |
| `npm run test:ui` | Open the Vitest UI |

---

## 🧪 Testing

Unit and component tests run with **Vitest** and **Testing Library** (jsdom). Current tests cover the checkout route guard, the favorite toggle, the infinite-scroll observer and the discount-percentage helper.

---

## 🐳 Docker & Deployment

The project ships with a multi-stage `Dockerfile` that produces a small production image:

* Next.js **standalone** output — no full `node_modules` or source code in the final image
* Runs as a **non-root** user and listens on internal port **3000**
* Includes a container **healthcheck**
* The backend URL is resolved at **runtime**, so the same image works in any environment

```bash
docker build -t kaveh-shop-frontend:latest .

docker run --rm -p 3000:3000 \
  -e BACKEND_INTERNAL_URL=http://host.docker.internal:8000 \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  kaveh-shop-frontend:latest
```

The frontend is designed to run next to Django and Nginx via the backend project's Docker Compose setup. See [`README.docker.md`](./README.docker.md) (in Persian) for the full guide, including Docker Compose and Nginx notes.

---

## 🚧 Upcoming

* Additional performance optimizations
* Broader unit and integration test coverage

---

## 🔗 Live Demo

🚧 **Coming Soon**

The live demo link will be added here once the project is deployed.

---

## 📄 License

This project is intended for **learning and portfolio purposes**.



