const Calls = require('../libs/calls');

function CustomInterceptor() {
    
    const $call = new Calls();
    
    this.showMockResult = function() {
        return $call.accessToken.get('user_id');
    }
}

module.exports = CustomInterceptor;