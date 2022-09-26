"use strict";
//============================================= basic types
// let id: number = 5;
let company = "sony";
let isPublished = true;
let x = "Hello";
x = true; // won't complain bc <any>
let age;
age = 30;
//================================================= arrays
let ids = [1, 2, 3];
let arr = [1, true, "Hello"];
//================================================== tuples
let person = [25, "kitty", true];
//== order matters for tuples
// tuple array
let employee;
employee = [
    [1, "kitty"],
    [2, "benny"],
    [3, "boo"],
];
// unions
let pid = 22;
pid = 22;
pid = "22";
//==================== enum -> define set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 45] = "Down";
    Direction1[Direction1["Left"] = 46] = "Left";
    Direction1[Direction1["Right"] = 47] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up);
// console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const meeple = {
    id: 0,
    name: "bahh",
};
//=========================================== type assertion
// force tsc to treat one type as another
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// types in fxs
function add(x, y) {
    return x + y;
}
// x & y params hv to be num, return must also be num
// console.log(add(1, 2));
function log(message) {
    console.log(message);
}
const meeple2 = {
    id: 1,
    name: "beep",
};
// usage with arrow fx
const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;
class Person {
    constructor(regId, name) {
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
    constructor(regId, name, position) {
        super(regId, name);
        this.position = position;
    }
}
// const emp = new Employee(5, "Shawty", "Dev");
// console.log(emp);
// console.log(emp.makeStaff());
//================================================ Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["cat", "dog", "hampter"]);
function getGenericArray(items) {
    return new Array().concat(items);
}
let numGenericArray = getGenericArray([1, 2, 3, 4]);
let strGenericArray = getGenericArray(["cat", "dog", "hampter"]);
