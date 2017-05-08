# css-modules-stylus

[![Build Status](https://travis-ci.org/9technology/css-modules-stylus.svg?branch=master)](https://travis-ci.org/9technology/css-modules-stylus) [![Coverage Status](https://coveralls.io/repos/github/9technology/css-modules-stylus/badge.svg?branch=master)](https://coveralls.io/github/9technology/css-modules-stylus?branch=master)

Stylus preprocessor for CSS Modules required via [css-modules-require-hook](https://github.com/css-modules/css-modules-require-hook) or [babel-plugin-css-modules-transform](https://github.com/michalkvasnicak/babel-plugin-css-modules-transform).

## Usage
---

```js
import hook from 'css-modules-require-hook';
import stylus from 'css-modules-stylus';

hook({
    preprocessCss: stylus
});
```

### Stylus Options

Passing options to stylus can be done by creating a default stylus instance using `.defaults()`.

```js
import { defaults as stylus } from 'css-modules-stylus';

hook({
    preprocessCss: stylus({
        use: [ plugin() ]
    })
});
```

### Babel Plugin

_.babelrc_

```json
{
    "plugins": [
        ["css-modules-transform", {
            "preprocessCss": "css-modules-stylus"
        }]
    ]
}
```

## API
---

#### `cssModulesStylus(contents, filename)`
- `contents` _String_ The contents of the stylus file.
- `filename` _String_ The filename of the stylus file.

#### `.defaults([options])`
- `options` _Object_ Stylus [Renderer options](https://github.com/stylus/stylus/blob/0.54.5/lib/renderer.js#L36-L44).

## License
---

[BSD-3-Clause](LICENSE)

Copyright (c) 2017 [9Technology](https://github.com/9technology)
