function Calls() {

    this.accessToken = {
        get: function (key) {
            return 'access-token to key ' + key;
        }
    };

    this.app = {
        getExtraInfo: function () {
            return {
                get: function (key) {
                    return 'Extra Info for key ' + key
                }
            }
        }
    };
}

const calls = new Calls();

module.exports = calls;