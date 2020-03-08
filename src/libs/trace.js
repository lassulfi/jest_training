function Trace() {

    this.trace = function(reason, message) {
        console.log(reason, message);
    }
}

const trace = new Trace();

module.exports = trace;