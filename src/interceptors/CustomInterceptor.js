const $call = require('../libs/calls');
const $tracer = require('../libs/trace');

function CustomInterceptor() {
    
    this.getAccessToken = function() {
        const accessToken= $call.accessToken.get('xpto');
        $tracer.trace('Acces-Token', 'Access token retrieved!')

        return accessToken;
    }
}

module.exports = CustomInterceptor;