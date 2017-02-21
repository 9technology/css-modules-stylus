import stylus from 'stylus';

module.exports = (contents, filename) => stylus(contents).set('filename', filename).render();
