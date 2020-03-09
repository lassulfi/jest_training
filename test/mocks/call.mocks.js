jest.mock('../../src/libs/calls');
const $calls = require('../../src/libs/calls');
$calls.accessToken.get.mockImplementation(function () {
    return 'access-token to key user_id';
})

module.exports = $call;
