import { isTrue } from "packages/extra2";
import type { ExampleType } from "../types";

export function exampleFunction(exampleObject: ExampleType) {
  console.log(exampleObject);
  return isTrue;
}
