import stylus from 'stylus';

const defaults = opts => (contents, filename) => stylus(contents, {
    filename,
    ...opts,
}).render();

module.exports = defaults();
module.exports.defaults = defaults;
