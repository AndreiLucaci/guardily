const assert = require("assert");
const guard = require("../dist/Guard");

describe("guard tests", () => {
  it("should throw null error - argumentNotNull", () => {
    const testFunc = p => {
      guard.Guard.argumentNotNull(p, "p");
    };

    assert.throws(() => testFunc(null));
  });

  it("should throw undefined error - argumentNotUndefined", () => {
    const testFunc = p => {
      guard.Guard.argumentNotUndefined(p, "p");
    };

    assert.throws(() => testFunc(undefined));
  });

  it("should not throw null error - argumentNotNull", () => {
    const testFunc = p => {
      guard.Guard.argumentNotNull(p, "p");
    };

    assert.doesNotThrow(() => testFunc("asdf"));
  });

  it("should not throw undefined error  - argumentNotUndefined", () => {
    const testFunc = p => {
      guard.Guard.argumentNotUndefined(p, "p");
    };

    assert.doesNotThrow(() => testFunc("asdf"));
  });

  it("should throw null error - argumentNotValid", () => {
    const testFunc = p => {
      guard.Guard.argumentNotValid(p, "p");
    };

    assert.throws(() => testFunc(null));
  });

  it("should throw undefined error - argumentNotValid", () => {
    const testFunc = p => {
      guard.Guard.argumentNotValid(p, "p");
    };

    assert.throws(() => testFunc(undefined));
  });

  it("should not throw null error - argumentNotValid", () => {
    const testFunc = p => {
      guard.Guard.argumentNotValid(p, "p");
    };

    assert.doesNotThrow(() => testFunc("asdf"));
  });

  it("should not throw undefined error - argumentNotValid", () => {
    const testFunc = p => {
      guard.Guard.argumentNotValid(p, "p");
    };

    assert.doesNotThrow(() => testFunc("asdf"));
  });

  it("should throw empty error - object - argumentEmpty", () => {
    const testFunc = p => {
      guard.Guard.argumentEmpty(p, "p");
    };

    assert.throws(() => testFunc({}));
  });

  it("should not throw empty error - object - argumentEmpty", () => {
    const testFunc = p => {
      guard.Guard.argumentEmpty(p, "p");
    };

    assert.doesNotThrow(() => testFunc({ a: "a" }));
  });

  it("should throw empty error - array - argumentEmpty", () => {
    const testFunc = p => {
      guard.Guard.argumentEmpty(p, "p");
    };

    assert.throws(() => testFunc([]));
  });

  it("should not throw empty error - array - argumentEmpty", () => {
    const testFunc = p => {
      guard.Guard.argumentEmpty(p, "p");
    };

    assert.doesNotThrow(() => testFunc([1]));
  });

  it("should throw empty error - string - argumentEmpty", () => {
    const testFunc = p => {
      guard.Guard.argumentEmpty(p, "p");
    };

    assert.throws(() => testFunc(""));
  });

  it("should not throw empty error - string - argumentEmpty", () => {
    const testFunc = p => {
      guard.Guard.argumentEmpty(p, "p");
    };

    assert.doesNotThrow(() => testFunc("a"));
  });
});
