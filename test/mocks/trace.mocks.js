jest.mock('../../src/libs/trace');
const tracer = require('../../src/libs/trace');

tracer.trace.mockImplementation(function() {
    console.log('Tracer mocked')
})

module.exports = tracer;
