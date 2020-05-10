// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

resolveAfter2Seconds().then((a) => console.log('aaa', a))

// OR

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
}

asyncCall();


// for(var i =0; i < 10; i++) {
// cosole.log('iiiii ', i)
// asyncCall();
// }

// for(var i =0; i < 10; i++) {
// cosole.log('iiiii ', i)
// resolveAfter2Seconds().then((a) => console.log('aaa', a))
// }