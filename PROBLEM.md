ThriftUtils._thrift = new _thriftrw.Thrift({
  source: _fs2.default.readFileSync(_path2.default.join(__dirname, './jaeger-idl/thrift/jaeger.thrift'), 'ascii'),
  allowOptionalArguments: true
});

From the line readFileSync got an error ×
TypeError: _fs2.default.readFileSync is not a function
