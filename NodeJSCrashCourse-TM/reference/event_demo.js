const EventEmitter = require('events');

//Creating an emitter class
class Myemitter extends EventEmitter {}

// Init object
const myEmitter = new Myemitter();

// Event listen
myEmitter.on('event', () => console.log('Event fired.'));

// Init event
myEmitter.emit('event');
