const Calls = require('../../src/libs/calls');

jest.mock('../../src/libs/calls');

const CustomInterceptor = require('../../src/interceptors/CustomInterceptor');

let interceptor = new CustomInterceptor();

test('returns the result of the mock function', function() {
    const ACCESS_TOKEN = 'mock access token';
    const calls = new Calls();
    const spy = jest.spyOn(calls.accessToken, 'get')
        .mockImplementation(function () {
            return ACCESS_TOKEN;
        });
    
    expect(interceptor.showMockResult()).toBe('access-token to key user_id');

    spy.mockRestore();
})