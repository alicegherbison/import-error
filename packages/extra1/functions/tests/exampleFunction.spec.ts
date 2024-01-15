import { exampleFunction } from "../exampleFunction";
import { expect } from "chai";

it("isTrue", () => {
  expect(exampleFunction({ stringField: "test", booleanField: false })).to.be.true;
});
