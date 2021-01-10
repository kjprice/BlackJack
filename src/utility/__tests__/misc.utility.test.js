import { numToDecimalPlace } from "../misc.utility";

describe("Misc Utilities", () => {
  it("should set number to a specific decimal place", () => {
    const f = numToDecimalPlace;
    expect(f(1.1111, 2)).toEqual(1.11);
    expect(f(1, 2)).toEqual(1.0);
  });
});
