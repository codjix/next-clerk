/**
 * ### Get the values of an object/array as a union type.
 *
 * @example
 * type Example = { a: "A1", b: "B2", c: "C3" };
 * type Values = ValueOf<Example>; // "A1" | "B2" | "C3"
 *
 * @example
 * type Example = ["A1", "B2", "C3"];
 * type Values = ValueOf<Example>; // "A1" | "B2" | "C3"
 */
export type ValueOf<T extends Record<any, any>> = T[number];

/**
 * ### Get Specific values of an object/array as a union type.
 *
 * @example
 * type Example = { a: "A1", b: "B2", c: "C3" };
 * type Values = PickValue<Example, "a" | "b">; // "A1" | "B2"
 *
 * @example
 * type Example = ["A1", "B2", "C3"];
 * type Values = PickValue<Example, 0 | 1>; // "A1" | "B2"
 */
export type PickValue<Type extends Record<any, any>, Key extends keyof Type> = Type[Key];

/**
 * ### Prettify a type to clear its compositions.
 *
 * @example
 * type Example1 = { example1: string; }
 * type Example2 = { example2: boolean; }
 * type Result1 = Example1 & Example2; // Example1 & Example2
 * type Result2 = Prettify<Example1 & Example2>; // { example1: string; example2: boolean; }
 */
export type Prettify<T> = {
  [k in keyof T]: T[k];
} & {};
