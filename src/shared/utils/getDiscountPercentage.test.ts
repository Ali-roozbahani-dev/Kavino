import { describe, expect, test } from "vitest";
import { getDiscountPercentage } from "./getDiscountPercentage";



describe("getDiscountPercentage", () => {
  test("should return correct discount percentage", () => {
    expect(getDiscountPercentage(100000, 72000)).toBe(28);
  });

  test("should return 0 when there is no discount", () => {
    expect(getDiscountPercentage(100000, 100000)).toBe(0);
  });

  test("should return 100 when the discounted price is 0", () => {
    expect(getDiscountPercentage(100000, 0)).toBe(100);
  });
});

