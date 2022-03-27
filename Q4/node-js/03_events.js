const EventEmitter = require('events');
const emitter = new EventEmitter();

// What is Class....
// Class: HUMAN (BLUE PRINT)
// OBJECT: JHON (ACTUAL OBJECT)


// Register a Listener
emitter.on('messageLogged', function (arg) {
    console.log('Listener Called', arg);
});


// Raise Event...
emitter.emit('messageLogged', {id: 1, url: 'http://myUrl'});        // EMIT: Making a noise, produce - signalling

