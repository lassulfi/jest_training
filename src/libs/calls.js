function Calls() {

    this.accessToken = {
        get: function(key) {
            return 'access-token to key ' + key;
        }
    }
}

const calls = new Calls();

module.exports = calls;