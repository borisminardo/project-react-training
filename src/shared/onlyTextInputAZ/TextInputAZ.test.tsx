import TextInputAZ from "./TextInputAZ";

describe("rendering only string A-Z input", () => {
  test("check string A-Z", () => {
    expect(TextInputAZ("TEST")).toBeTruthy();
    expect(TextInputAZ("5")).toBeFalsy();
    expect(TextInputAZ("!")).toBeFalsy();
  });
});
