// string

let lName: string;

lName = "Prashant";

let newName = lName.toUpperCase();

console.log(newName);

// number

let num01: number;

num01 = 467;

// boolean

let bool01: boolean;

// array

let arr: number[];

arr = [1, 4, 2, 43, 6, 45, 4, 645];

// any

let vari01: any;

// void

let vari02: void;

vari02 = undefined;

// enum

enum Direction {
  UP = 1,
  RIGHT = 2,
  DOWN = 3,
  LEFT = 4,
}

// tuples

let tupple01: [string, number, boolean];

// never

let var03: never;

// functions and it's various use

const func01 = (arg01: number, arg02: boolean, ...args: string[]): void => {
  // some logic
};

const func02 = (arg01: number, arg02: boolean, ...args: string[]): number => {
  // some logic
  return 4;
};

// arg3 is optional
const func03 = (
  arg01: number,
  arg02: boolean = true,
  args3?: number
): number => {
  // some logic
  return arg01 + (args3 ? 1 : 0) + (arg02 ? 1 : 0);
};

// generics
const getItems = <Type>(...arg01: Type[]): string => {
  return new Array(...arg01).join("");
};

const ans01 = getItems(1, 4, 4, 5, 5, 6);
const ans02 = getItems("ajskld", "dsfa", "asfsa", "gdgd");
const ans03 = getItems(true, false, null, undefined);
const ans04 = getItems(
  [1],
  [647, false, { first: true }],
  [3883, [67]],
  [34, 43, "rere", true]
);

console.log(ans01, ans02, ans03, ans04);
