// Mocks
const $calls = require('../mocks/call.mocks');
const $tracer = require('../mocks/trace.mocks');

const CustomInterceptor = require('../../src/interceptors/CustomInterceptor');

let interceptor = new CustomInterceptor();

test('returns the result of the mock function', function() {
    expect(interceptor.getAccessToken()).toBe('access-token to key user_id');
});