// Callback Functions 
/** 
  * A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. 
  * A function that accepts other functions as arguments is called a higher-order function, 
  * which contains the logic for when the callback function gets executed. 
  * It’s the combination of these two that allow us to extend our functionality.
  * JavaScript Callback Functions can be used synchronously or asynchronously.
  * https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript/
*/

// Eample 0-A
function print(callback) {
    callback();
}

// Example 0-B
const message = function () {
    console.log("This message is shown after 3 seconds");
}
setTimeout(message, 3000);

// Example 0-C (Pass any function or direct function as parameter)
// Passing Direct Function
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
doHomework('math', function () {
    alert('Finished my homework');
});
// OR
// Passing Function
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished() {
    alert('Finished my homework');
}
doHomework('math', alertFinished);

// Example 1
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);

// Example 2
function createQuote(quote, callback) {
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
}
function logQuote(quote) {
    console.log(quote);
}
createQuote("eat your vegetables!", logQuote); // 1
// Result in console:
// Like I always say, eat your vegetables!

//Why use Callback functions?
// Let’s take a look at an example that simulates a request to a server:
function serverRequest(query, callback) {
    setTimeout(function () {
        var response = query + "full!";
        callback(response);
    }, 5000);
}
function getResults(results) {
    console.log("Response from the server: " + results);
}
serverRequest("The glass is half ", getResults);
// Result in console after 5 second delay:
// Response from the server: The glass is half full!Î


// Let play with some real Example
/**
 * Github provide some public APIs (https://developer.github.com/v3/)
 * Get user releated public data: https://api.github.com/users/uqutub
 * Here are the possible ways to make an API call:
 * XMLHttpRequest
 * fetch
 * Axios
 * jQuery
 * Code: https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b
*/
/**
 * XMLHttpRequest
 * Before ES 6 comes out, the only way to make an HTTP request in JavaScript was XMLHttpRequest.
    It is a built-in browser object that allows us to make HTTP requests in JavaScript.
    JSONPlaceholder (https://jsonplaceholder.typicode.com/) is a free online REST API that you can use whenever you need some fake data.
*/
// API Call Example
// Its not Dynamic
const request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/uqutub");
request.send();
request.onload = () => {
    console.log('request: ', request);
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`Error: ${request.status} ${request.statusText}`);
    }
}

// Lets Make it Dynamic
const callAPI = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = () => { callback(request, successHandler, errorHandler); }
}
const successHandler = (req) => { console.log('Success: ', JSON.parse(req.response)); }
const errorHandler = (req) => { console.log(`Error: ${req.status} ${req.statusText}`); }
const responseHandler = (req, success, error) => {
    (req.status === 200) ? success(req) : error(req);
}
// Call API Function 
callAPI("https://api.github.com/users/uqutub", responseHandler);    // using github API
callAPI("https://jsonplaceholder.typicode.com/todos/1", responseHandler);   // using jsonplaceholder API