'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cosminserdean/Documents/Projects/LolaPlanner/pages/_document.js?entry';


var MyDocument = function (_Document) {
	(0, _inherits3.default)(MyDocument, _Document);

	function MyDocument() {
		(0, _classCallCheck3.default)(this, MyDocument);

		return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
	}

	(0, _createClass3.default)(MyDocument, [{
		key: 'render',
		value: function render() {
			var sheet = new _styledComponents.ServerStyleSheet();
			var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			}));
			var styleTags = sheet.getStyleElement();

			return _react2.default.createElement('html', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement(_document.Head, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement('link', {
				href: 'https://fonts.googleapis.com/css?family=Lato',
				rel: 'stylesheet',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}), _react2.default.createElement('link', {
				rel: 'stylesheet',
				href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}), _react2.default.createElement('link', {
				href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
				rel: 'stylesheet',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}), _react2.default.createElement('style', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, '\n\t\t\t\t\t\tbody {\n\t\t\t\t\t\t\tfont-family: Lato, sans-serif !important;\n\t\t\t\t\t\t\tbackground: #f8f8f8;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.lnr {\n\t\t\t\t\t\t\tpadding-right: 8px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\ta {\n\tcolor: #ed174c !important;\n\tcursor: pointer !important;\n\ttext-decoration: none;\n\t}\n\ta:hover {\n\t\ttext-decoration: underline !important;\n\t}'), _react2.default.createElement('title', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, 'Lola Planner'), styleTags), _react2.default.createElement('body', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement('div', { className: 'root', __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, main), _react2.default.createElement(_document.NextScript, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			})));
		}
	}]);

	return MyDocument;
}(_document2.default);

exports.default = MyDocument;