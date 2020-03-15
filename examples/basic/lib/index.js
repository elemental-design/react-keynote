"use strict";

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import themeXml from './themeXml';
// import { render } from 'react-keynote';
(0, _.render)(_react.default.createElement(_.Document, {
  title: "Test",
  theme: "White"
}, _react.default.createElement(_.Slide, {
  title: "Hello World"
}), _react.default.createElement(_.Slide, null, _react.default.createElement(_.Slide.Title, null, "Hello World Page 2..."), _react.default.createElement(_.Slide.Body, null, "Subtitle")), _react.default.createElement(_.Slide, null, _react.default.createElement(_.Slide.Title, null, "Hello World Page 3..."), _react.default.createElement(_.Slide.Body, null, "Hello World. This is the text body..."))));