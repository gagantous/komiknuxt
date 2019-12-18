var request1 = require('request');

module.exports = {
    _make_api_call: function (url) {
        return new Promise((resolve, reject) => {
            request1(url, (err, res, body) => {
                if (err)
                    reject(err);
                resolve(body);
            });
        });
    },
    get make_api_call() {
        return this._make_api_call;
    },
    set make_api_call(value) {
        this._make_api_call = value;
    },
}