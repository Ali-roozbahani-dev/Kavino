import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useCheckoutGuard } from "./useCheckoutGuard";
import { useCart } from "@/Features/Cart/hooks/useCart";
import { useAuthGuard } from "@/Features/Auth/hooks/useAuthGuard";

const replaceMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: replaceMock }),
}));

vi.mock("@/Features/Cart/hooks/useCart", () => ({
  useCart: vi.fn(),
}));

vi.mock("@/Features/Auth/hooks/useAuthGuard", () => ({
  useAuthGuard: vi.fn(),
}));

const mockedUseCart = vi.mocked(useCart);
const mockedUseAuthGuard = vi.mocked(useAuthGuard);

type CartState = {
  data?: { items?: unknown[] };
  isLoading?: boolean;
  isError?: boolean;
};

type AuthState = {
  isLoading?: boolean;
  isAuthenticated?: boolean;
};

function setup({
  cart = {},
  auth = {},
}: { cart?: CartState; auth?: AuthState } = {}) {
  mockedUseCart.mockReturnValue({
    data: { items: [{ id: 1 }] },
    isLoading: false,
    isError: false,
    ...cart,
  } as any);

  mockedUseAuthGuard.mockReturnValue({
    isLoading: false,
    isAuthenticated: true,
    ...auth,
  } as any);

  return renderHook(() => useCheckoutGuard());
}

describe("useCheckoutGuard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("checking state (isCheckingPermission)", () => {
    it("returns true and does not redirect while auth is loading", () => {
      const { result } = setup({ auth: { isLoading: true } });

      expect(result.current.isCheckingPermission).toBe(true);
      expect(replaceMock).not.toHaveBeenCalled();
    });

    it("returns true and does not redirect when the user is not authenticated", () => {
      const { result } = setup({ auth: { isAuthenticated: false } });

      expect(result.current.isCheckingPermission).toBe(true);
      expect(replaceMock).not.toHaveBeenCalled();
    });

    it("returns true and does not redirect while the cart is loading", () => {
      const { result } = setup({ cart: { isLoading: true, data: undefined } });

      expect(result.current.isCheckingPermission).toBe(true);
      expect(replaceMock).not.toHaveBeenCalled();
    });

    it("returns true when the cart data is undefined", () => {
      const { result } = setup({ cart: { data: undefined } });

      expect(result.current.isCheckingPermission).toBe(true);
      expect(replaceMock).not.toHaveBeenCalled();
    });
  });

  describe("redirect", () => {
    it("redirects to /checkout/cart when the cart is empty", () => {
      const { result } = setup({ cart: { data: { items: [] } } });

      expect(result.current.isCheckingPermission).toBe(false);
      expect(replaceMock).toHaveBeenCalledTimes(1);
      expect(replaceMock).toHaveBeenCalledWith("/checkout/cart");
    });

    it("also redirects to /checkout/cart when items is undefined", () => {
      setup({ cart: { data: {} } });

      expect(replaceMock).toHaveBeenCalledTimes(1);
      expect(replaceMock).toHaveBeenCalledWith("/checkout/cart");
    });

    it("does not redirect when the cart has items", () => {
      const { result } = setup({
        cart: { data: { items: [{ id: 1 }, { id: 2 }] } },
      });

      expect(result.current.isCheckingPermission).toBe(false);
      expect(result.current.hasError).toBe(false);
      expect(replaceMock).not.toHaveBeenCalled();
    });
  });

  describe("cart error", () => {
    it("does not redirect when there is an error and the stale data is empty", () => {
      const { result } = setup({
        cart: { isError: true, data: { items: [] } },
      });

      expect(result.current.hasError).toBe(true);
      expect(replaceMock).not.toHaveBeenCalled();
    });

    it("sets hasError to true and does not redirect when there is an error and no data", () => {
      const { result } = setup({
        cart: { isError: true, data: undefined },
      });

      expect(result.current.hasError).toBe(true);
      expect(replaceMock).not.toHaveBeenCalled();
    });
  });

  describe("reacting to state changes", () => {
    it("redirects once loading finishes and the cart is empty", () => {
      const { rerender } = setup({ cart: { isLoading: true, data: undefined } });
      expect(replaceMock).not.toHaveBeenCalled();

      mockedUseCart.mockReturnValue({
        data: { items: [] },
        isLoading: false,
        isError: false,
      } as any);
      
      rerender();

      expect(replaceMock).toHaveBeenCalledWith("/checkout/cart");
    });
  });
});