import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
            rel="stylesheet"
          />
          <style>
            {`

              @import url('https://fonts.googleapis.com/css?family=Lato');
              body {
                font-family: Lato, sans-serif !important;
                background: #f8f8f8;
              }
              .lnr {
                padding-right: 8px;
              }
							.lnr.no-padding {
								padding-right: 0;
							}
              a {
                color: #ed174c !important;
                cursor: pointer !important;
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline !important;
              }

              .body {
                margin: 0;
              }

              .rdt {
                position: relative;
              }

              .rdt input {
                display: block;
                border: 1px #ddd solid;
                outline: none;
                background: #f8f8f8;
                border-radius: 4px;
                padding: 10px;
                width: 95%;
                margin: 16px 0;
              }

              .rdtPicker {
                display: none;
                position: absolute;
                width: 250px;
                padding: 4px;
                margin-top: 1px;
                z-index: 99999 !important;
                background: #fff;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                border: 1px solid #f9f9f9;
              }
              .rdtOpen .rdtPicker {
                display: block;
              }
              .rdtStatic .rdtPicker {
                box-shadow: none;
                position: static;
              }

              .rdtPicker .rdtTimeToggle {
                text-align: center;
              }

              .rdtPicker table {
                width: 100%;
                margin: 0;
              }
              .rdtPicker td,
              .rdtPicker th {
                text-align: center;
                height: 28px;
              }
              .rdtPicker td {
                cursor: pointer;
              }
              .rdtPicker td.rdtDay:hover,
              .rdtPicker td.rdtHour:hover,
              .rdtPicker td.rdtMinute:hover,
              .rdtPicker td.rdtSecond:hover,
              .rdtPicker .rdtTimeToggle:hover {
                background: #eeeeee;
                cursor: pointer;
              }
              .rdtPicker td.rdtOld,
              .rdtPicker td.rdtNew {
                color: #999999;
              }
              .rdtPicker td.rdtToday {
                position: relative;
              }
              .rdtPicker td.rdtToday:before {
                content: '';
                display: inline-block;
                border-left: 2px solid transparent;
                border-bottom: 2px solid #428bca;
                border-top-color: rgba(0, 0, 0, 0.2);
                position: absolute;
                bottom: 4px;
                right: 4px;
              }
              .loader,
              .loader:after {
                border-radius: 50%;
                width: 1.2em;
                height: 1.2em;
              }
              .loader {
                font-size: 10px;
                position: relative;
                display: inline-block;
                text-indent: -9999em;
                border-top: 0.5em solid rgba(255, 255, 255, 0.2);
                border-right: 0.5em solid rgba(255, 255, 255, 0.2);
                border-bottom: 0.5em solid rgba(255, 255, 255, 0.2);
                border-left: 0.5em solid #ffffff;
                -webkit-transform: translateZ(0);
                -ms-transform: translateZ(0);
                transform: translateZ(0);
                -webkit-animation: load8 1.1s infinite linear;
                animation: load8 1.1s infinite linear;
              }

              .loader.pink {
                border-top: 0.5em solid rgba(237, 23, 76, 0.2);
                border-right: 0.5em solid rgba(237, 23, 76, 0.2);
                border-bottom: 0.5em solid rgba(237, 23, 76, 0.2);
                border-left: 0.5em solid #ed174c;
              }
              @keyframes load8 {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }

              .rdtPicker td.rdtActive,
              .rdtPicker td.rdtActive:hover {
                background-color: #ed174c;
                color: #fff;
                text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
              }
              .rdtPicker td.rdtActive.rdtToday:before {
                border-bottom-color: #fff;
              }
              .rdtPicker td.rdtDisabled,
              .rdtPicker td.rdtDisabled:hover {
                background: none;
                color: #999999;
                cursor: not-allowed;
              }

              .rdtPicker td span.rdtOld {
                color: #999999;
              }
              .rdtPicker td span.rdtDisabled,
              .rdtPicker td span.rdtDisabled:hover {
                background: none;
                color: #999999;
                cursor: not-allowed;
              }
              .rdtPicker th {
                border-bottom: 1px solid #f9f9f9;
              }
              .rdtPicker .dow {
                width: 14.2857%;
                border-bottom: none;
              }
              .rdtPicker th.rdtSwitch {
                width: 100px;
              }
              .rdtPicker th.rdtNext,
              .rdtPicker th.rdtPrev {
                font-size: 21px;
                vertical-align: top;
              }

              .rdtPrev span,
              .rdtNext span {
                display: block;
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Chrome/Safari/Opera */
                -khtml-user-select: none; /* Konqueror */
                -moz-user-select: none; /* Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none;
              }

              .rdtPicker th.rdtDisabled,
              .rdtPicker th.rdtDisabled:hover {
                background: none;
                color: #999999;
                cursor: not-allowed;
              }
              .rdtPicker thead tr:first-child th {
                cursor: pointer;
              }
              .rdtPicker thead tr:first-child th:hover {
                background: #eeeeee;
              }

              .rdtPicker tfoot {
                border-top: 1px solid #f9f9f9;
              }

              .rdtPicker button {
                border: none;
                background: none;
                cursor: pointer;
              }
              .rdtPicker button:hover {
                background-color: #eee;
              }

              .rdtPicker thead button {
                width: 100%;
                height: 100%;
              }

              td.rdtMonth,
              td.rdtYear {
                height: 50px;
                width: 25%;
                cursor: pointer;
              }
              td.rdtMonth:hover,
              td.rdtYear:hover {
                background: #eee;
              }

              .rdtCounters {
                display: inline-block;
              }

              .rdtCounters > div {
                float: left;
              }

              .rdtCounter {
                height: 100px;
              }

              .rdtCounter {
                width: 40px;
              }

              .rdtCounterSeparator {
                line-height: 100px;
              }

              .rdtCounter .rdtBtn {
                height: 40%;
                line-height: 40px;
                cursor: pointer;
                display: block;

                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Chrome/Safari/Opera */
                -khtml-user-select: none; /* Konqueror */
                -moz-user-select: none; /* Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none;
              }
              .rdtCounter .rdtBtn:hover {
                background: #eee;
              }
              .rdtCounter .rdtCount {
                height: 20%;
                font-size: 1.2em;
              }

              .rdtMilli {
                vertical-align: middle;
                padding-left: 8px;
                width: 48px;
              }

              .rdtMilli input {
                width: 100%;
                font-size: 1.2em;
                margin-top: 37px;
              }
            `}
          </style>
          <title>Lolly Planner</title>
          {styleTags}
        </Head>

        <body>
          <div className="root">{main}</div>

          <NextScript />
        </body>
      </html>
    )
  }
}
