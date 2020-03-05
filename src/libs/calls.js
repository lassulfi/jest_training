function Calls() {

    this.accessToken = {
        get: function(key) {
            return 'access-token to key ' + key;
        }
    }
}

module.exports = Calls;