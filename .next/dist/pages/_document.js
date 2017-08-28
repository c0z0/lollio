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
			}, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}), _react2.default.createElement('link', {
				href: 'https://fonts.googleapis.com/css?family=Lato',
				rel: 'stylesheet',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}), _react2.default.createElement('link', {
				rel: 'stylesheet',
				href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}), _react2.default.createElement('link', {
				href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css',
				rel: 'stylesheet',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}), _react2.default.createElement('style', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, '\n\t\t\t\t\t\tbody {\n\t\t\t\t\t\t\tfont-family: Lato, sans-serif !important;\n\t\t\t\t\t\t\tbackground: #f8f8f8;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.lnr {\n\t\t\t\t\t\t\tpadding-right: 8px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\ta {\n\t\t\t\t\t\t\tcolor: #ed174c !important;\n\t\t\t\t\t\t\tcursor: pointer !important;\n\t\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\ta:hover {\n\t\t\t\t\t\t\ttext-decoration: underline !important;\n\t\t\t\t\t\t}\n\t\n\t\t\t/*!\n\t\t* https://github.com/YouCanBookMe/react-datetime\n\t\t*/\n\t\t\t\t\t\t.body {\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\n\t\t.rdt {\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.rdt input {\n\t\t\tdisplay: block;\n\t\t\tborder: 1px #ddd solid;\n\t\t\toutline: none;\n\t\t\tbackground: #f8f8f8;\n\t\t\tborder-radius: 4px;\n\t\t\tpadding: 10px;\n\t\t\twidth: 95%;\n\t\t\tmargin: 16px 0;\n\t\t}\n\n\t\t.rdtPicker {\n\t\t\tdisplay: none;\n\t\t\tposition: absolute;\n\t\t\twidth: 250px;\n\t\t\tpadding: 4px;\n\t\t\tmargin-top: 1px;\n\t\t\tz-index: 99999 !important;\n\t\t\tbackground: #fff;\n\t\t\tbox-shadow: 0 1px 3px rgba(0,0,0,.1);\n\t\t\tborder: 1px solid #f9f9f9;\n\t\t}\n\t\t.rdtOpen .rdtPicker {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.rdtStatic .rdtPicker {\n\t\t\tbox-shadow: none;\n\t\t\tposition: static;\n\t\t}\n\n\t\t.rdtPicker .rdtTimeToggle {\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t.rdtPicker table {\n\t\t\twidth: 100%;\n\t\t\tmargin: 0;\n\t\t}\n\t\t.rdtPicker td,\n\t\t.rdtPicker th {\n\t\t\ttext-align: center;\n\t\t\theight: 28px;\n\t\t}\n\t\t.rdtPicker td {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.rdtPicker td.rdtDay:hover,\n\t\t.rdtPicker td.rdtHour:hover,\n\t\t.rdtPicker td.rdtMinute:hover,\n\t\t.rdtPicker td.rdtSecond:hover,\n\t\t.rdtPicker .rdtTimeToggle:hover {\n\t\t\tbackground: #eeeeee;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.rdtPicker td.rdtOld,\n\t\t.rdtPicker td.rdtNew {\n\t\t\tcolor: #999999;\n\t\t}\n\t\t.rdtPicker td.rdtToday {\n\t\t\tposition: relative;\n\t\t}\n\t\t.rdtPicker td.rdtToday:before {\n\t\t\tcontent: \'\';\n\t\t\tdisplay: inline-block;\n\t\t\tborder-left: 2px solid transparent;\n\t\t\tborder-bottom: 2px solid #428bca;\n\t\t\tborder-top-color: rgba(0, 0, 0, 0.2);\n\t\t\tposition: absolute;\n\t\t\tbottom: 4px;\n\t\t\tright: 4px;\n\t\t}\n\t\t.loader,\n\t\t.loader:after {\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 1.2em;\n\t\t\theight: 1.2em;\n\t\t}\n\t\t.loader {\n\t\t\tfont-size: 10px;\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\ttext-indent: -9999em;\n\t\t\tborder-top: .5em solid rgba(255, 255, 255, 0.2);\n\t\t\tborder-right: .5em solid rgba(255, 255, 255, 0.2);\n\t\t\tborder-bottom: .5em solid rgba(255, 255, 255, 0.2);\n\t\t\tborder-left: .5em solid #ffffff;\n\t\t\t-webkit-transform: translateZ(0);\n\t\t\t-ms-transform: translateZ(0);\n\t\t\ttransform: translateZ(0);\n\t\t\t-webkit-animation: load8 1.1s infinite linear;\n\t\t\tanimation: load8 1.1s infinite linear;\n\t\t}\n\n\t\t.loader.pink {\n\t\t\tborder-top: .5em solid rgba(237, 23, 76, 0.2);\n\t\t\tborder-right: .5em solid rgba(237, 23, 76, 0.2);\n\t\t\tborder-bottom: .5em solid rgba(237, 23, 76, 0.2);\n\t\t\tborder-left: .5em solid #ed174c;\n\t\t}\n\t\t@keyframes load8 {\n\t\t\t0% {\n\t\t\t\ttransform: rotate(0deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\ttransform: rotate(360deg);\n\t\t\t}\n\t\t}\n\t\t\n\n\t\t.rdtPicker td.rdtActive,\n\t\t.rdtPicker td.rdtActive:hover {\n\t\t\tbackground-color: #ed174c;\n\t\t\tcolor: #fff;\n\t\t\ttext-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n\t\t}\n\t\t.rdtPicker td.rdtActive.rdtToday:before {\n\t\t\tborder-bottom-color: #fff;\n\t\t}\n\t\t.rdtPicker td.rdtDisabled,\n\t\t.rdtPicker td.rdtDisabled:hover {\n\t\t\tbackground: none;\n\t\t\tcolor: #999999;\n\t\t\tcursor: not-allowed;\n\t\t}\n\n\t\t.rdtPicker td span.rdtOld {\n\t\t\tcolor: #999999;\n\t\t}\n\t\t.rdtPicker td span.rdtDisabled,\n\t\t.rdtPicker td span.rdtDisabled:hover {\n\t\t\tbackground: none;\n\t\t\tcolor: #999999;\n\t\t\tcursor: not-allowed;\n\t\t}\n\t\t.rdtPicker th {\n\t\t\tborder-bottom: 1px solid #f9f9f9;\n\t\t}\n\t\t.rdtPicker .dow {\n\t\t\twidth: 14.2857%;\n\t\t\tborder-bottom: none;\n\t\t}\n\t\t.rdtPicker th.rdtSwitch {\n\t\t\twidth: 100px;\n\t\t}\n\t\t.rdtPicker th.rdtNext,\n\t\t.rdtPicker th.rdtPrev {\n\t\t\tfont-size: 21px;\n\t\t\tvertical-align: top;\n\t\t}\n\n\t\t.rdtPrev span,\n\t\t.rdtNext span {\n\t\t\tdisplay: block;\n\t\t\t-webkit-touch-callout: none; /* iOS Safari */\n\t\t\t-webkit-user-select: none;   /* Chrome/Safari/Opera */\n\t\t\t-khtml-user-select: none;    /* Konqueror */\n\t\t\t-moz-user-select: none;      /* Firefox */\n\t\t\t-ms-user-select: none;       /* Internet Explorer/Edge */\n\t\t\tuser-select: none;\n\t\t}\n\n\t\t.rdtPicker th.rdtDisabled,\n\t\t.rdtPicker th.rdtDisabled:hover {\n\t\t\tbackground: none;\n\t\t\tcolor: #999999;\n\t\t\tcursor: not-allowed;\n\t\t}\n\t\t.rdtPicker thead tr:first-child th {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.rdtPicker thead tr:first-child th:hover {\n\t\t\tbackground: #eeeeee;\n\t\t}\n\n\t\t.rdtPicker tfoot {\n\t\t\tborder-top: 1px solid #f9f9f9;\n\t\t}\n\n\t\t.rdtPicker button {\n\t\t\tborder: none;\n\t\t\tbackground: none;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.rdtPicker button:hover {\n\t\t\tbackground-color: #eee;\n\t\t}\n\n\t\t.rdtPicker thead button {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\n\t\ttd.rdtMonth,\n\t\ttd.rdtYear {\n\t\t\theight: 50px;\n\t\t\twidth: 25%;\n\t\t\tcursor: pointer;\n\t\t}\n\t\ttd.rdtMonth:hover,\n\t\ttd.rdtYear:hover {\n\t\t\tbackground: #eee;\n\t\t}\n\n\t\t.rdtCounters {\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.rdtCounters > div {\n\t\t\tfloat: left;\n\t\t}\n\n\t\t.rdtCounter {\n\t\t\theight: 100px;\n\t\t}\n\n\t\t.rdtCounter {\n\t\t\twidth: 40px;\n\t\t}\n\n\t\t.rdtCounterSeparator {\n\t\t\tline-height: 100px;\n\t\t}\n\n\t\t.rdtCounter .rdtBtn {\n\t\t\theight: 40%;\n\t\t\tline-height: 40px;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: block;\n\n\t\t\t-webkit-touch-callout: none; /* iOS Safari */\n\t\t\t-webkit-user-select: none;   /* Chrome/Safari/Opera */\n\t\t\t-khtml-user-select: none;    /* Konqueror */\n\t\t\t-moz-user-select: none;      /* Firefox */\n\t\t\t-ms-user-select: none;       /* Internet Explorer/Edge */\n\t\t\tuser-select: none;\n\t\t}\n\t\t.rdtCounter .rdtBtn:hover {\n\t\t\tbackground: #eee;\n\t\t}\n\t\t.rdtCounter .rdtCount {\n\t\t\theight: 20%;\n\t\t\tfont-size: 1.2em;\n\t\t}\n\n\t\t.rdtMilli {\n\t\t\tvertical-align: middle;\n\t\t\tpadding-left: 8px;\n\t\t\twidth: 48px;\n\t\t}\n\n\t\t.rdtMilli input {\n\t\t\twidth: 100%;\n\t\t\tfont-size: 1.2em;\n\t\t\tmargin-top: 37px;\n\t\t}\n\t'), _react2.default.createElement('title', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 313
				}
			}, 'Lola Planner'), styleTags), _react2.default.createElement('body', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 317
				}
			}, _react2.default.createElement('div', { className: 'root', __source: {
					fileName: _jsxFileName,
					lineNumber: 318
				}
			}, main), _react2.default.createElement(_document.NextScript, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 322
				}
			})));
		}
	}]);

	return MyDocument;
}(_document2.default);

exports.default = MyDocument;