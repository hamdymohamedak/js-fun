# Utility Functions

This repository contains a collection of useful JavaScript utility functions.

## removeDuplicates

```js client
let array = [1, 2, 2, 2, 3];
let filter = removeDuplicates(array);
console.log(filter); // outPut [1,2,3]
```

## TurnOffLogs

```js client
console.log("Before TurnOff Logs"); // print normally
TurnOffLogs();
console.log("After TurnOff Logs"); // that log will not print
```

## development console

```js client
Console.dev("hello world");
```

## Turn Off development console

```js client
Console.dev("hello world");
turnOffConsoleDev()
Console.dev("hello world");
```

## dedupeFetch 
```js client
const jsonData = [{ name: "Hamdy" }, { name: "Ali" }, { name: "Hamdy" }];

const filter = dedupeFetch(jsonData);

console.log(filter);
// OutPut:
// [
//   { id: 1, name: "Hamdy" },
//   { id: 2, name: "Ali" }
// ]

```