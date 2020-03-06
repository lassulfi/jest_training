const $call = require('../libs/calls');

function CustomInterceptor() {
    
    this.getAccessToken = function() {
        const accessToken= $call.accessToken.get('xpto');

        return accessToken;
    }
}

module.exports = CustomInterceptor;