//============================================= basic types
// let id: number = 5;
let company: string = "sony";
let isPublished: boolean = true;
let x: any = "Hello";
x = true; // won't complain bc <any>
let age: number;
age = 30;

//================================================= arrays
let ids: number[] = [1, 2, 3];
let arr: any[] = [1, true, "Hello"];

//================================================== tuples
let person: [number, string, boolean] = [25, "kitty", true];
//== order matters for tuples

// tuple array
let employee: [number, string][];

employee = [
  [1, "kitty"],
  [2, "benny"],
  [3, "boo"],
];

// unions
let pid: string | number = 22;
pid = 22;
pid = "22";

//==================== enum -> define set of named constants
enum Direction1 {
  Up, // gives 0, 1, 2, 3 by default
  Down = 45, // will give 45
  Left,
  Right,
}

// console.log(Direction1.Up);
// console.log(Direction1.Down);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left", // will give left
  Right = "Right",
}

// console.log(Direction2.Left);

// Objects
// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "John",
// };

type Meeple = {
  id: number;
  name: string;
};

const meeple: Meeple = {
  id: 0,
  name: "bahh",
};

//=========================================== type assertion
// force tsc to treat one type as another
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// types in fxs
function add(x: number, y: number): number {
  return x + y;
}
// x & y params hv to be num, return must also be num
// console.log(add(1, 2));

function log(message: string | number): void {
  console.log(message);
}
// when thingy has no return val
// log("hello");

//============================================== interfaces

// general example
interface MeepleInterface {
  id: number;
  name: string;
  age?: number;
  readonly admin?: boolean;
}

const meeple2: MeepleInterface = {
  id: 1,
  name: "beep",
};

// interface used on fx
interface MathFunc {
  (x: number, y: number): number;
}

// usage with arrow fx
const addition: MathFunc = (x: number, y: number): number => x + y;
const subtraction: MathFunc = (x, y): number => x - y;

/**
 * Quirks of interfaces
 *
 * No unions
 * setting `readonly` means you can't assign/ reassign val
 */

//================================================= Classes
interface PersonInterface {
  regId: number;
  name: string;
  makeStaff(): string;
}

class Person implements PersonInterface {
  // public & modifiable by default
  regId: number;
  name: string;
  protected staff?: boolean;
  private address?: string; // only accessible within class

  constructor(regId: number, name: string) {
    this.regId = regId;
    this.name = name;
    this.staff = false;
    this.address = "some address";
  }

  makeStaff() {
    return `${this.name} is now staff`;
  }
}

// const brad = new Person(1, "Brad");
// const mike = new Person(2, "Mike");
// console.log(brad, mike);
// console.log(brad.makeStaff());

//=============================================== Subclass
class Employee extends Person {
  position: string;

  constructor(regId: number, name: string, position: string) {
    super(regId, name);
    this.position = position;
  }
}

// const emp = new Employee(5, "Shawty", "Dev");
// console.log(emp);
// console.log(emp.makeStaff());

//================================================ Generics
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["cat", "dog", "hampter"]);

function getGenericArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numGenericArray = getGenericArray<number>([1, 2, 3, 4]);
let strGenericArray = getGenericArray<string>(["cat", "dog", "hampter"]);
