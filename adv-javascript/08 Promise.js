/**
 * A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 4 possible states:
 * Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
 * Rejected: onRejected() will be called (e.g., reject() was called)
 * Pending: not yet fulfilled or rejected
 * Settled - Has fulfilled or rejected
 * https://javascript.info/promise-basics
*/

// Our wait(3000) call will wait 3000ms (3 seconds), and then log 'Hello!'. 
// All spec-compatible promises define a .then() method which you use to pass handlers which can take the resolved or rejected value.
const wait = time => new Promise((resolve) => setTimeout(resolve, time));
wait(3000).then(() => console.log('Hello!')); // 'Hello!'

// Syntax
// new Promise((reslove, reject)=> {

// })