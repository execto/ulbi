import { classNames } from "./classNames";

describe("classNames function unit tests", () => {
  test("classNames with first argument", () => {
    expect(classNames("class", {}, [])).toBe("class");
  });

  test("classNames with mods", () => {
    const expected = "class class1";
    expect(classNames("class", { class1: true }, [])).toBe(expected);
  });

  test("classNames with mods and falsy value", () => {
    const expected = "class class2";
    expect(classNames("class", { class1: false, class2: true }, [])).toBe(
      expected
    );
  });

  test("classNames with additional classes", () => {
    const expected = "class class3 class4 class2";
    expect(
      classNames("class", { class1: false, class2: true }, ["class3", "class4"])
    ).toBe(expected);
  });

  test("classNames with additional classes contains undefined", () => {
    const expected = "class class4 class2";
    expect(
      classNames("class", { class1: false, class2: true }, [
        undefined,
        "class4",
      ])
    ).toBe(expected);
  });

  test("classNames with first arg as empty string", () => {
    const expected = "class4 class2";
    expect(
      classNames("", { class1: false, class2: true }, [undefined, "class4"])
    ).toBe(expected);
  });
});
