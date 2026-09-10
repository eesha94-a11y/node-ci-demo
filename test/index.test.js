const add = require("../index");

test("adds 5 + 10", () => {
    expect(add(5, 10)).toBe(15);
});
