"use strict";

var _rtts_assertEs6SrcRtts_assert = require("rtts_assert/es6/src/rtts_assert");

var doSomething = function doSomething(str, num, bool) {
  _rtts_assertEs6SrcRtts_assert.assert.argumentTypes(str, _rtts_assertEs6SrcRtts_assert.assert.type.string, num, _rtts_assertEs6SrcRtts_assert.assert.type.number, bool, _rtts_assertEs6SrcRtts_assert.assert.type.boolean);

  return new Foo();
};
