// FavoriteToggle.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteToggle from "./FavoriteToggle";

// ---------- Mocks ----------
const pushMock = vi.fn();
let pathnameMock = "/products/10";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
  usePathname: () => pathnameMock,
}));

const useAuthMock = vi.fn();
vi.mock("../../Auth", () => ({
  useAuth: () => useAuthMock(),
}));

const useFavoritesIdMock = vi.fn();
vi.mock("./hooks/useFavoritesId", () => ({
  useFavoritesId: (opts: unknown) => useFavoritesIdMock(opts),
}));

const addMock = vi.fn();
const useAddFavoriteMock = vi.fn();
vi.mock("./hooks/useAddFavorite", () => ({
  useAddFavorite: () => useAddFavoriteMock(),
}));

const removeMock = vi.fn();
const useDeleteFavoriteMock = vi.fn();
vi.mock("./hooks/useDeleteFavorite", () => ({
  useDeleteFavorite: () => useDeleteFavoriteMock(),
}));

const toastErrorMock = vi.fn();
vi.mock("sonner", () => ({
  toast: { error: (msg: string) => toastErrorMock(msg) },
}));

vi.mock("lucide-react", () => ({
  Bookmark: ({ className }: { className?: string }) => (
    <svg data-testid="bookmark-icon" className={className} />
  ),
}));

// ---------- Helpers ----------
const setup = (overrides: {
  auth?: Partial<{ data: unknown; isPending: boolean; error: unknown }>;
  favorites?: Partial<{ data: unknown; isPending: boolean; error: unknown }>;
  add?: Partial<{ isPending: boolean }>;
  remove?: Partial<{ isPending: boolean }>;
} = {}) => {
  useAuthMock.mockReturnValue({
    data: { id: 1 },
    isPending: false,
    error: null,
    ...overrides.auth,
  });
  useFavoritesIdMock.mockReturnValue({
    data: [],
    isPending: false,
    error: null,
    ...overrides.favorites,
  });
  useAddFavoriteMock.mockReturnValue({
    mutate: addMock,
    isPending: false,
    ...overrides.add,
  });
  useDeleteFavoriteMock.mockReturnValue({
    mutate: removeMock,
    isPending: false,
    ...overrides.remove,
  });

  return render(<FavoriteToggle id={10} />);
};

const getButton = () => screen.getByRole("button");

// ---------- Tests ----------
describe("FavoriteToggle", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    pathnameMock = "/products/10";
  });

  describe("rendering", () => {
    it("renders a button with type=button", () => {
      setup();
      expect(getButton()).toHaveAttribute("type", "button");
    });

    it("when the product is not in favorites: aria-pressed=false and the icon has no theme color", () => {
      setup({ favorites: { data: [{ id: 1, product_id: 99 }] } });

      expect(getButton()).toHaveAttribute("aria-pressed", "false");
      const icon = screen.getByTestId("bookmark-icon");
      expect(icon).toHaveClass("text-primary-text");
      expect(icon).not.toHaveClass("fill-theme");
    });

    it("when product_id equals id: aria-pressed=true and the icon is filled", () => {
      setup({ favorites: { data: [{ id: 5, product_id: 10 }] } });

      expect(getButton()).toHaveAttribute("aria-pressed", "true");
      const icon = screen.getByTestId("bookmark-icon");
      expect(icon).toHaveClass("fill-theme", "text-theme");
    });

    it("also detects a favorite when only i.id equals id", () => {
      setup({ favorites: { data: [{ id: 10, product_id: 777 }] } });
      expect(getButton()).toHaveAttribute("aria-pressed", "true");
    });

    it("enables the favorites query only when the user is logged in", () => {
      setup({ auth: { data: { id: 1 } } });
      expect(useFavoritesIdMock).toHaveBeenCalledWith({ enabled: true });
    });

    it("passes enabled=false to useFavoritesId for a guest user", () => {
      setup({ auth: { data: null } });
      expect(useFavoritesIdMock).toHaveBeenCalledWith({ enabled: false });
    });
  });

  describe("disabled state", () => {
    it("the button is enabled in the normal state", () => {
      setup();
      expect(getButton()).toBeEnabled();
    });

    it("is disabled while auth is loading", () => {
      setup({ auth: { data: undefined, isPending: true } });
      expect(getButton()).toBeDisabled();
    });

    it("is disabled when the user is logged in and favorites are loading", () => {
      setup({ favorites: { data: undefined, isPending: true } });
      expect(getButton()).toBeDisabled();
    });

    it("for a guest user, a pending favorites query does not disable the button", () => {
      setup({
        auth: { data: null, isPending: false },
        favorites: { data: undefined, isPending: true },
      });
      expect(getButton()).toBeEnabled();
    });

    it("is disabled while adding (isAdding)", () => {
      setup({ add: { isPending: true } });
      expect(getButton()).toBeDisabled();
    });

    it("is disabled while removing (isRemoving)", () => {
      setup({ remove: { isPending: true } });
      expect(getButton()).toBeDisabled();
    });

    it("is disabled when favorites has an error", () => {
      setup({ favorites: { error: new Error("fail") } });
      expect(getButton()).toBeDisabled();
    });

    it("is disabled when auth has an error", () => {
      setup({ auth: { error: new Error("fail") } });
      expect(getButton()).toBeDisabled();
    });
  });

  describe("click behavior", () => {
    it("redirects a guest user to the login page with an encoded callbackUrl", async () => {
      pathnameMock = "/products/10?x=1&y=فارسی";
      const user = userEvent.setup();
      setup({ auth: { data: null } });

      await user.click(getButton());

      expect(pushMock).toHaveBeenCalledTimes(1);
      expect(pushMock).toHaveBeenCalledWith(
        `/Login?callbackUrl=${encodeURIComponent(pathnameMock)}`
      );
      expect(addMock).not.toHaveBeenCalled();
      expect(removeMock).not.toHaveBeenCalled();
    });

    it("logged-in user, product not favorited: calls add with product_id", async () => {
      const user = userEvent.setup();
      setup({ favorites: { data: [] } });

      await user.click(getButton());

      expect(addMock).toHaveBeenCalledTimes(1);
      expect(addMock).toHaveBeenCalledWith({ product_id: 10 });
      expect(removeMock).not.toHaveBeenCalled();
      expect(pushMock).not.toHaveBeenCalled();
    });

    it("favorited product: calls remove with the favorite item's id (not the product id)", async () => {
      const user = userEvent.setup();
      setup({ favorites: { data: [{ id: 55, product_id: 10 }] } });

      await user.click(getButton());

      expect(removeMock).toHaveBeenCalledTimes(1);
      expect(removeMock).toHaveBeenCalledWith(55);
      expect(addMock).not.toHaveBeenCalled();
    });

    it("clicking while the button is disabled triggers no action", async () => {
      const user = userEvent.setup();
      setup({ add: { isPending: true } });

      await user.click(getButton());

      expect(addMock).not.toHaveBeenCalled();
      expect(removeMock).not.toHaveBeenCalled();
      expect(pushMock).not.toHaveBeenCalled();
    });
  });

  describe("error toast", () => {
    it("does not show a toast when there is no error", () => {
      setup();
      expect(toastErrorMock).not.toHaveBeenCalled();
    });

    it("shows an error message on an auth error", () => {
      setup({ auth: { error: new Error("auth") } });
      expect(toastErrorMock).toHaveBeenCalledWith("خطا در برقراری ارتباط");
    });

    it("shows an error message on a favorites error", () => {
      setup({ favorites: { error: new Error("fav") } });
      expect(toastErrorMock).toHaveBeenCalledWith("خطا در برقراری ارتباط");
    });

    it("does not show the toast again on a rerender when the error hasn't changed", () => {
      const error = new Error("fav");
      const { rerender } = setup({ favorites: { error } });
      expect(toastErrorMock).toHaveBeenCalledTimes(1);

      rerender(<FavoriteToggle id={10} />);
      expect(toastErrorMock).toHaveBeenCalledTimes(1);
    });
  });
});