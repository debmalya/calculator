ThriftUtils._thrift = new _thriftrw.Thrift({
  source: _fs2.default.readFileSync(_path2.default.join(__dirname, './jaeger-idl/thrift/jaeger.thrift'), 'ascii'),
  allowOptionalArguments: true
});

From the line readFileSync got an error ×
TypeError: _fs2.default.readFileSync is not a function

Uncaught TypeError: _fs2.default.readFileSync is not a function
    at Object.<anonymous> (thrift.js:168)
    at Object../node_modules/jaeger-client/dist/src/thrift.js (thrift.js:173)
    at __webpack_require__ (bootstrap 4d30db136281a1ed041b:678)
    at fn (bootstrap 4d30db136281a1ed041b:88)
    at Object../node_modules/jaeger-client/dist/src/reporters/remote_reporter.js (remote_reporter.js:24)
    at __webpack_require__ (bootstrap 4d30db136281a1ed041b:678)
    at fn (bootstrap 4d30db136281a1ed041b:88)
    at Object../node_modules/jaeger-client/dist/src/configuration.js (configuration.js:31)
    at __webpack_require__ (bootstrap 4d30db136281a1ed041b:678)
    at fn (bootstrap 4d30db136281a1ed041b:88)
    at Object../node_modules/jaeger-client/dist/src/index.js (index.js:3)
    at __webpack_require__ (bootstrap 4d30db136281a1ed041b:678)
    at fn (bootstrap 4d30db136281a1ed041b:88)
    at Object../src/component/App.js (App.css?0a69:26)
    at __webpack_require__ (bootstrap 4d30db136281a1ed041b:678)
    at fn (bootstrap 4d30db136281a1ed041b:88)
    at Object../src/index.js (index.css?f255:26)
    at __webpack_require__ (bootstrap 4d30db136281a1ed041b:678)
    at fn (bootstrap 4d30db136281a1ed041b:88)
    at Object.0 (operate.js:22)
    at __webpack_require__ (bootstrap 4d30db136281a1ed041b:678)
    at ./node_modules/ansi-color/lib/ansi-color.js.ANSI_CODES.off (bootstrap 4d30db136281a1ed041b:724)
    at bootstrap 4d30db136281a1ed041b:724
