# 🏠 Home Appliances Store

A modern **Full-Stack Home Appliances E-commerce** application built with **Next.js** and **Django REST Framework**.

The project is currently under active development, with new features and improvements being added continuously.

---

## ✨ Features

* ✅ Feature-Based Architecture
* ✅ Responsive Design
* ✅ Custom API integration
* ✅ Product Search
* ✅ Product Filtering
* ✅ Product Sorting
* ✅ Infinite Scrolling
* ✅ Virtualized Product List
* ✅ OTP-based Authentication
* ✅ Access Token & Refresh Token Authentication
* ✅ CSRF Protection
* ✅ Protected Routes
* ✅ Automatic Access Token Refresh
* ✅ Product Reviews & Review Submission
* ✅ Server-State Shopping Cart
* ✅ API-driven Data Management

---

## 🛠️ Tech Stack

* **Next.js** — App Router
* **React**
* **TypeScript**
* **Tailwind CSS**
* **TanStack Query (React Query)** — Server State Management
* **TanStack Virtual** — Virtualized Lists
* **Zustand** — Client State Management
* **Axios** — HTTP Client & API Communication
* **shadcn/ui** — UI Components


## 🏗️ Architecture

The frontend follows a **Feature-Based Architecture**, where application functionality is organized into independent feature modules.

This approach helps keep the codebase:

* Scalable
* Maintainable
* Modular
* Easier to extend

Example project structure:

```text
src/

├── app/
├── components/
├── features/
│   ├── Auth/
│   ├── Cart/
│   ├── Home/
│   ├── Products-List/
│   ├── Product-Details/
│   ├── Reviews/
│   ├── Search/
│   └── ...
├── entities/
├── lib/
├── stores/
└── types/
```

The application also separates **server state** from **client state**:

* **TanStack Query** is used for server-side data and API state.
* **Zustand** is used for client-side state where appropriate.

---

## 🔐 Authentication & Security

The application implements an **OTP-based authentication system** using access and refresh tokens.

### Authentication Flow

* OTP-based user authentication
* Access Token & Refresh Token
* HTTP-only cookies for authentication tokens
* CSRF Token protection
* Protected routes
* Automatic access token refresh
* Authentication state management with TanStack Query
* Axios-based API communication

The backend is responsible for authentication and authorization, while the Next.js frontend handles the client-side authentication state and protected navigation.

---

## 🚀 Implemented Features

### 🏠 Home Page

* Custom API integration
* Responsive layout
* Product sections

### 🛍️ Product Listing

* Product search
* Product filtering
* Product sorting
* Infinite scrolling
* Virtualized product rendering

### 🔐 Authentication

* OTP login
* Access & Refresh Token authentication
* CSRF protection
* Protected routes
* Automatic token refresh
* Authentication state management

### 💬 Product Reviews

* Display product reviews
* Submit new reviews
* API integration for review management

### 🛒 Shopping Cart

The shopping cart is implemented as **server state** and managed using **TanStack Query**.

Implemented functionality includes:

* Fetch cart data from the server
* Add products to cart
* Update item quantities
* Remove cart items
* Synchronize cart state with the backend
* Cache and update server data using TanStack Query


## 🚧 Upcoming Features

* Wishlist
* User Profile
* Checkout Process
* Order Management
* Additional Performance Optimizations
* More E-commerce Features

---

## 🔗 Live Demo

🚧 **Coming Soon**

The live demo link will be added here once the project is deployed.

---

## 📄 License

This project is intended for **learning and portfolio purposes**.


