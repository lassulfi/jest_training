// Mocks
jest.mock('../../src/libs/calls');
const $calls = require('../../src/libs/calls');
$calls.accessToken.get.mockImplementation(function() {
    return 'access-token to key user_id';
});

const CustomInterceptor = require('../../src/interceptors/CustomInterceptor');

let interceptor = new CustomInterceptor();

test('returns the result of the mock function', function() {
    expect(interceptor.getAccessToken()).toBe('access-token to key user_id');
});