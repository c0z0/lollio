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

var _jsxFileName = '/Users/cosmin.serdean/Documents/Projects/LolaPlanner/pages/_document.js?entry';


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
      }, '\n              body {\n                font-family: Lato, sans-serif !important;\n                background: #f8f8f8;\n              }\n              .lnr {\n                padding-right: 8px;\n              }\n\t\t\t\t\t\t\t.lnr.no-padding {\n\t\t\t\t\t\t\t\tpadding-right: 0;\n\t\t\t\t\t\t\t}\n              a {\n                color: #ed174c !important;\n                cursor: pointer !important;\n                text-decoration: none;\n              }\n              a:hover {\n                text-decoration: underline !important;\n              }\n\n              .body {\n                margin: 0;\n              }\n\n              .rdt {\n                position: relative;\n              }\n\n              .rdt input {\n                display: block;\n                border: 1px #ddd solid;\n                outline: none;\n                background: #f8f8f8;\n                border-radius: 4px;\n                padding: 10px;\n                width: 95%;\n                margin: 16px 0;\n              }\n\n              .rdtPicker {\n                display: none;\n                position: absolute;\n                width: 250px;\n                padding: 4px;\n                margin-top: 1px;\n                z-index: 99999 !important;\n                background: #fff;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n                border: 1px solid #f9f9f9;\n              }\n              .rdtOpen .rdtPicker {\n                display: block;\n              }\n              .rdtStatic .rdtPicker {\n                box-shadow: none;\n                position: static;\n              }\n\n              .rdtPicker .rdtTimeToggle {\n                text-align: center;\n              }\n\n              .rdtPicker table {\n                width: 100%;\n                margin: 0;\n              }\n              .rdtPicker td,\n              .rdtPicker th {\n                text-align: center;\n                height: 28px;\n              }\n              .rdtPicker td {\n                cursor: pointer;\n              }\n              .rdtPicker td.rdtDay:hover,\n              .rdtPicker td.rdtHour:hover,\n              .rdtPicker td.rdtMinute:hover,\n              .rdtPicker td.rdtSecond:hover,\n              .rdtPicker .rdtTimeToggle:hover {\n                background: #eeeeee;\n                cursor: pointer;\n              }\n              .rdtPicker td.rdtOld,\n              .rdtPicker td.rdtNew {\n                color: #999999;\n              }\n              .rdtPicker td.rdtToday {\n                position: relative;\n              }\n              .rdtPicker td.rdtToday:before {\n                content: \'\';\n                display: inline-block;\n                border-left: 2px solid transparent;\n                border-bottom: 2px solid #428bca;\n                border-top-color: rgba(0, 0, 0, 0.2);\n                position: absolute;\n                bottom: 4px;\n                right: 4px;\n              }\n              .loader,\n              .loader:after {\n                border-radius: 50%;\n                width: 1.2em;\n                height: 1.2em;\n              }\n              .loader {\n                font-size: 10px;\n                position: relative;\n                display: inline-block;\n                text-indent: -9999em;\n                border-top: 0.5em solid rgba(255, 255, 255, 0.2);\n                border-right: 0.5em solid rgba(255, 255, 255, 0.2);\n                border-bottom: 0.5em solid rgba(255, 255, 255, 0.2);\n                border-left: 0.5em solid #ffffff;\n                -webkit-transform: translateZ(0);\n                -ms-transform: translateZ(0);\n                transform: translateZ(0);\n                -webkit-animation: load8 1.1s infinite linear;\n                animation: load8 1.1s infinite linear;\n              }\n\n              .loader.pink {\n                border-top: 0.5em solid rgba(237, 23, 76, 0.2);\n                border-right: 0.5em solid rgba(237, 23, 76, 0.2);\n                border-bottom: 0.5em solid rgba(237, 23, 76, 0.2);\n                border-left: 0.5em solid #ed174c;\n              }\n              @keyframes load8 {\n                0% {\n                  transform: rotate(0deg);\n                }\n                100% {\n                  transform: rotate(360deg);\n                }\n              }\n\n              .rdtPicker td.rdtActive,\n              .rdtPicker td.rdtActive:hover {\n                background-color: #ed174c;\n                color: #fff;\n                text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n              }\n              .rdtPicker td.rdtActive.rdtToday:before {\n                border-bottom-color: #fff;\n              }\n              .rdtPicker td.rdtDisabled,\n              .rdtPicker td.rdtDisabled:hover {\n                background: none;\n                color: #999999;\n                cursor: not-allowed;\n              }\n\n              .rdtPicker td span.rdtOld {\n                color: #999999;\n              }\n              .rdtPicker td span.rdtDisabled,\n              .rdtPicker td span.rdtDisabled:hover {\n                background: none;\n                color: #999999;\n                cursor: not-allowed;\n              }\n              .rdtPicker th {\n                border-bottom: 1px solid #f9f9f9;\n              }\n              .rdtPicker .dow {\n                width: 14.2857%;\n                border-bottom: none;\n              }\n              .rdtPicker th.rdtSwitch {\n                width: 100px;\n              }\n              .rdtPicker th.rdtNext,\n              .rdtPicker th.rdtPrev {\n                font-size: 21px;\n                vertical-align: top;\n              }\n\n              .rdtPrev span,\n              .rdtNext span {\n                display: block;\n                -webkit-touch-callout: none; /* iOS Safari */\n                -webkit-user-select: none; /* Chrome/Safari/Opera */\n                -khtml-user-select: none; /* Konqueror */\n                -moz-user-select: none; /* Firefox */\n                -ms-user-select: none; /* Internet Explorer/Edge */\n                user-select: none;\n              }\n\n              .rdtPicker th.rdtDisabled,\n              .rdtPicker th.rdtDisabled:hover {\n                background: none;\n                color: #999999;\n                cursor: not-allowed;\n              }\n              .rdtPicker thead tr:first-child th {\n                cursor: pointer;\n              }\n              .rdtPicker thead tr:first-child th:hover {\n                background: #eeeeee;\n              }\n\n              .rdtPicker tfoot {\n                border-top: 1px solid #f9f9f9;\n              }\n\n              .rdtPicker button {\n                border: none;\n                background: none;\n                cursor: pointer;\n              }\n              .rdtPicker button:hover {\n                background-color: #eee;\n              }\n\n              .rdtPicker thead button {\n                width: 100%;\n                height: 100%;\n              }\n\n              td.rdtMonth,\n              td.rdtYear {\n                height: 50px;\n                width: 25%;\n                cursor: pointer;\n              }\n              td.rdtMonth:hover,\n              td.rdtYear:hover {\n                background: #eee;\n              }\n\n              .rdtCounters {\n                display: inline-block;\n              }\n\n              .rdtCounters > div {\n                float: left;\n              }\n\n              .rdtCounter {\n                height: 100px;\n              }\n\n              .rdtCounter {\n                width: 40px;\n              }\n\n              .rdtCounterSeparator {\n                line-height: 100px;\n              }\n\n              .rdtCounter .rdtBtn {\n                height: 40%;\n                line-height: 40px;\n                cursor: pointer;\n                display: block;\n\n                -webkit-touch-callout: none; /* iOS Safari */\n                -webkit-user-select: none; /* Chrome/Safari/Opera */\n                -khtml-user-select: none; /* Konqueror */\n                -moz-user-select: none; /* Firefox */\n                -ms-user-select: none; /* Internet Explorer/Edge */\n                user-select: none;\n              }\n              .rdtCounter .rdtBtn:hover {\n                background: #eee;\n              }\n              .rdtCounter .rdtCount {\n                height: 20%;\n                font-size: 1.2em;\n              }\n\n              .rdtMilli {\n                vertical-align: middle;\n                padding-left: 8px;\n                width: 48px;\n              }\n\n              .rdtMilli input {\n                width: 100%;\n                font-size: 1.2em;\n                margin-top: 37px;\n              }\n            '), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, 'Lolly Planner'), styleTags), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, _react2.default.createElement('div', { className: 'root', __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, main), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;