"use strict";

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import themeXml from './themeXml';
// import { render } from 'react-keynote';
(0, _.render)(_react.default.createElement(_.Document, {
  title: "Example"
}, _react.default.createElement(_.Slide, null, _react.default.createElement(_.Text, {
  style: {
    width: 100,
    color: '#1efa5a',
    textAlign: 'center'
  }
}, "Hello World"))), _path.default.resolve(__dirname, '../output/example2.pptx'));