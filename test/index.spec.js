import test from 'ava';
import proxy from 'proxyquire';
import sinon from 'sinon';

const sandbox = sinon.sandbox.create();

const raw = '*\n\tbackground: red;';
const compiled = '* { background: red; }';

const render = sandbox.stub().returns(compiled);
const stylus = sandbox.stub().returns({ render });

const preprocessor = proxy('../src', {
    stylus,
});

test.beforeEach(() => sandbox.reset());

test('calls stylus with given css', (t) => {
    preprocessor(raw);
    t.truthy(stylus.calledWith(raw));
});

test('calls set with (filename, arg[1])', (t) => {
    preprocessor(raw, 'foo.styl');
    t.truthy(stylus.calledWith(
        raw,
        sinon.match({
            filename: 'foo.styl',
        }),
    ));
});

test('calls stylus render', (t) => {
    preprocessor();
    t.truthy(render.called);
});

test('returns the rendered css', (t) => {
    t.is(preprocessor(), compiled);
});
