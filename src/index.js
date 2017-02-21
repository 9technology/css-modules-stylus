import stylus from 'stylus';

module.exports = (css, filename) => stylus(css).set('filename', filename).render();
