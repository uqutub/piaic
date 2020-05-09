// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
}

asyncCall();