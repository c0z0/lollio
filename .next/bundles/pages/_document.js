
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports=webpackJsonp([5],{501:function(e,t,n){e.exports=n(502)},502:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),d=r(o),a=n(7),i=r(a),l=n(8),u=r(l),s=n(13),c=r(s),f=n(14),p=r(f),h=n(1),_=r(h),m=n(503),k=r(m),x=n(15),b=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=new x.ServerStyleSheet,t=e.collectStyles(_.default.createElement(m.Main,null)),n=e.getStyleElement();return _.default.createElement("html",null,_.default.createElement(m.Head,null,_.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),_.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato",rel:"stylesheet"}),_.default.createElement("link",{rel:"stylesheet",href:"https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"}),_.default.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css",rel:"stylesheet"}),_.default.createElement("style",null,"\n              body {\n                font-family: Lato, sans-serif !important;\n                background: #f8f8f8;\n              }\n              .lnr {\n                padding-right: 8px;\n              }\n\t\t\t\t\t\t\t.lnr.no-padding {\n\t\t\t\t\t\t\t\tpadding-right: 0;\n\t\t\t\t\t\t\t}\n              a {\n                color: #ed174c !important;\n                cursor: pointer !important;\n                text-decoration: none;\n              }\n              a:hover {\n                text-decoration: underline !important;\n              }\n\n              .body {\n                margin: 0;\n              }\n\n              .rdt {\n                position: relative;\n              }\n\n              .rdt input {\n                display: block;\n                border: 1px #ddd solid;\n                outline: none;\n                background: #f8f8f8;\n                border-radius: 4px;\n                padding: 10px;\n                width: 95%;\n                margin: 16px 0;\n              }\n\n              .rdtPicker {\n                display: none;\n                position: absolute;\n                width: 250px;\n                padding: 4px;\n                margin-top: 1px;\n                z-index: 99999 !important;\n                background: #fff;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n                border: 1px solid #f9f9f9;\n              }\n              .rdtOpen .rdtPicker {\n                display: block;\n              }\n              .rdtStatic .rdtPicker {\n                box-shadow: none;\n                position: static;\n              }\n\n              .rdtPicker .rdtTimeToggle {\n                text-align: center;\n              }\n\n              .rdtPicker table {\n                width: 100%;\n                margin: 0;\n              }\n              .rdtPicker td,\n              .rdtPicker th {\n                text-align: center;\n                height: 28px;\n              }\n              .rdtPicker td {\n                cursor: pointer;\n              }\n              .rdtPicker td.rdtDay:hover,\n              .rdtPicker td.rdtHour:hover,\n              .rdtPicker td.rdtMinute:hover,\n              .rdtPicker td.rdtSecond:hover,\n              .rdtPicker .rdtTimeToggle:hover {\n                background: #eeeeee;\n                cursor: pointer;\n              }\n              .rdtPicker td.rdtOld,\n              .rdtPicker td.rdtNew {\n                color: #999999;\n              }\n              .rdtPicker td.rdtToday {\n                position: relative;\n              }\n              .rdtPicker td.rdtToday:before {\n                content: '';\n                display: inline-block;\n                border-left: 2px solid transparent;\n                border-bottom: 2px solid #428bca;\n                border-top-color: rgba(0, 0, 0, 0.2);\n                position: absolute;\n                bottom: 4px;\n                right: 4px;\n              }\n              .loader,\n              .loader:after {\n                border-radius: 50%;\n                width: 1.2em;\n                height: 1.2em;\n              }\n              .loader {\n                font-size: 10px;\n                position: relative;\n                display: inline-block;\n                text-indent: -9999em;\n                border-top: 0.5em solid rgba(255, 255, 255, 0.2);\n                border-right: 0.5em solid rgba(255, 255, 255, 0.2);\n                border-bottom: 0.5em solid rgba(255, 255, 255, 0.2);\n                border-left: 0.5em solid #ffffff;\n                -webkit-transform: translateZ(0);\n                -ms-transform: translateZ(0);\n                transform: translateZ(0);\n                -webkit-animation: load8 1.1s infinite linear;\n                animation: load8 1.1s infinite linear;\n              }\n\n              .loader.pink {\n                border-top: 0.5em solid rgba(237, 23, 76, 0.2);\n                border-right: 0.5em solid rgba(237, 23, 76, 0.2);\n                border-bottom: 0.5em solid rgba(237, 23, 76, 0.2);\n                border-left: 0.5em solid #ed174c;\n              }\n              @keyframes load8 {\n                0% {\n                  transform: rotate(0deg);\n                }\n                100% {\n                  transform: rotate(360deg);\n                }\n              }\n\n              .rdtPicker td.rdtActive,\n              .rdtPicker td.rdtActive:hover {\n                background-color: #ed174c;\n                color: #fff;\n                text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n              }\n              .rdtPicker td.rdtActive.rdtToday:before {\n                border-bottom-color: #fff;\n              }\n              .rdtPicker td.rdtDisabled,\n              .rdtPicker td.rdtDisabled:hover {\n                background: none;\n                color: #999999;\n                cursor: not-allowed;\n              }\n\n              .rdtPicker td span.rdtOld {\n                color: #999999;\n              }\n              .rdtPicker td span.rdtDisabled,\n              .rdtPicker td span.rdtDisabled:hover {\n                background: none;\n                color: #999999;\n                cursor: not-allowed;\n              }\n              .rdtPicker th {\n                border-bottom: 1px solid #f9f9f9;\n              }\n              .rdtPicker .dow {\n                width: 14.2857%;\n                border-bottom: none;\n              }\n              .rdtPicker th.rdtSwitch {\n                width: 100px;\n              }\n              .rdtPicker th.rdtNext,\n              .rdtPicker th.rdtPrev {\n                font-size: 21px;\n                vertical-align: top;\n              }\n\n              .rdtPrev span,\n              .rdtNext span {\n                display: block;\n                -webkit-touch-callout: none; /* iOS Safari */\n                -webkit-user-select: none; /* Chrome/Safari/Opera */\n                -khtml-user-select: none; /* Konqueror */\n                -moz-user-select: none; /* Firefox */\n                -ms-user-select: none; /* Internet Explorer/Edge */\n                user-select: none;\n              }\n\n              .rdtPicker th.rdtDisabled,\n              .rdtPicker th.rdtDisabled:hover {\n                background: none;\n                color: #999999;\n                cursor: not-allowed;\n              }\n              .rdtPicker thead tr:first-child th {\n                cursor: pointer;\n              }\n              .rdtPicker thead tr:first-child th:hover {\n                background: #eeeeee;\n              }\n\n              .rdtPicker tfoot {\n                border-top: 1px solid #f9f9f9;\n              }\n\n              .rdtPicker button {\n                border: none;\n                background: none;\n                cursor: pointer;\n              }\n              .rdtPicker button:hover {\n                background-color: #eee;\n              }\n\n              .rdtPicker thead button {\n                width: 100%;\n                height: 100%;\n              }\n\n              td.rdtMonth,\n              td.rdtYear {\n                height: 50px;\n                width: 25%;\n                cursor: pointer;\n              }\n              td.rdtMonth:hover,\n              td.rdtYear:hover {\n                background: #eee;\n              }\n\n              .rdtCounters {\n                display: inline-block;\n              }\n\n              .rdtCounters > div {\n                float: left;\n              }\n\n              .rdtCounter {\n                height: 100px;\n              }\n\n              .rdtCounter {\n                width: 40px;\n              }\n\n              .rdtCounterSeparator {\n                line-height: 100px;\n              }\n\n              .rdtCounter .rdtBtn {\n                height: 40%;\n                line-height: 40px;\n                cursor: pointer;\n                display: block;\n\n                -webkit-touch-callout: none; /* iOS Safari */\n                -webkit-user-select: none; /* Chrome/Safari/Opera */\n                -khtml-user-select: none; /* Konqueror */\n                -moz-user-select: none; /* Firefox */\n                -ms-user-select: none; /* Internet Explorer/Edge */\n                user-select: none;\n              }\n              .rdtCounter .rdtBtn:hover {\n                background: #eee;\n              }\n              .rdtCounter .rdtCount {\n                height: 20%;\n                font-size: 1.2em;\n              }\n\n              .rdtMilli {\n                vertical-align: middle;\n                padding-left: 8px;\n                width: 48px;\n              }\n\n              .rdtMilli input {\n                width: 100%;\n                font-size: 1.2em;\n                margin-top: 37px;\n              }\n            "),_.default.createElement("title",null,"Lolly Planner"),n),_.default.createElement("body",null,_.default.createElement("div",{className:"root"},t),_.default.createElement(m.NextScript,null)))}}]),t}(k.default);t.default=b},503:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return t?"/"===e?"/index.js":e+"/index.js":e}Object.defineProperty(t,"__esModule",{value:!0}),t.NextScript=t.Main=t.Head=void 0;var d=n(51),a=r(d),i=n(12),l=r(i),u=n(7),s=r(u),c=n(8),f=r(c),p=n(13),h=r(p),_=n(14),m=r(_),k=n(1),x=r(k),b=n(21),g=r(b),y=n(504),v=r(y),P=n(505),E=r(P),T=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChildContext",value:function(){return{_documentProps:this.props}}},{key:"render",value:function(){return x.default.createElement("html",null,x.default.createElement(S,null),x.default.createElement("body",null,x.default.createElement(w,null),x.default.createElement(C,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=t();return{html:n.html,head:n.head,errorHtml:n.errorHtml,chunks:n.chunks,styles:(0,E.default)()}}}]),t}(k.Component);T.childContextTypes={_documentProps:g.default.any},t.default=T;var S=t.Head=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChunkPreloadLink",value:function(e){var t=this.context._documentProps.__NEXT_DATA__,n=t.buildStats,r=t.assetPrefix,o=t.buildId,d=n?n[e].hash:o;return x.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+d+"/"+e,as:"script"})}},{key:"getPreloadMainLinks",value:function(){return this.context._documentProps.dev?[this.getChunkPreloadLink("manifest.js"),this.getChunkPreloadLink("commons.js"),this.getChunkPreloadLink("main.js")]:[this.getChunkPreloadLink("app.js")]}},{key:"getPreloadDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix;return t.map(function(e){return x.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/webpack/chunks/"+e,as:"script"})})}},{key:"render",value:function(){var e=this.context._documentProps,t=e.head,n=e.styles,r=e.__NEXT_DATA__,d=r.pathname,a=r.buildId,i=r.assetPrefix,l=r.nextExport,u=o(d,l);return x.default.createElement("head",this.props,x.default.createElement("link",{rel:"preload",href:i+"/_next/"+a+"/page"+u,as:"script"}),x.default.createElement("link",{rel:"preload",href:i+"/_next/"+a+"/page/_error/index.js",as:"script"}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),(t||[]).map(function(e,t){return x.default.cloneElement(e,{key:t})}),n||null,this.props.children)}}]),t}(k.Component);S.contextTypes={_documentProps:g.default.any};var w=t.Main=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.context._documentProps,t=e.html,n=e.errorHtml;return x.default.createElement("div",null,x.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:t}}),x.default.createElement("div",{id:"__next-error",dangerouslySetInnerHTML:{__html:n}}))}}]),t}(k.Component);w.contextTypes={_documentProps:g.default.any};var C=t.NextScript=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChunkScript",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.context._documentProps.__NEXT_DATA__,r=n.buildStats,o=n.assetPrefix,d=n.buildId,i=r?r[e].hash:d;return x.default.createElement("script",(0,a.default)({key:e,type:"text/javascript",src:o+"/_next/"+i+"/"+e},t))}},{key:"getScripts",value:function(){return this.context._documentProps.dev?[this.getChunkScript("manifest.js"),this.getChunkScript("commons.js"),this.getChunkScript("main.js")]:[this.getChunkScript("app.js",{async:!0})]}},{key:"getDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix;return x.default.createElement("div",null,t.map(function(e){return x.default.createElement("script",{async:!0,key:e,type:"text/javascript",src:r+"/_next/webpack/chunks/"+e})}))}},{key:"render",value:function(){var e=this.context._documentProps,t=e.staticMarkup,n=e.__NEXT_DATA__,r=e.chunks,d=n.pathname,a=n.nextExport,i=n.buildId,l=n.assetPrefix,u=o(d,a);return n.chunks=r,x.default.createElement("div",null,t?null:x.default.createElement("script",{dangerouslySetInnerHTML:{__html:"\n          __NEXT_DATA__ = "+(0,v.default)(n)+"\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n        "}}),x.default.createElement("script",{async:!0,id:"__NEXT_PAGE__"+d,type:"text/javascript",src:l+"/_next/"+i+"/page"+u}),x.default.createElement("script",{async:!0,id:"__NEXT_PAGE__/_error",type:"text/javascript",src:l+"/_next/"+i+"/page/_error/index.js"}),t?null:this.getDynamicChunks(),t?null:this.getScripts())}}]),t}(k.Component);C.contextTypes={_documentProps:g.default.any}},504:function(e,t,n){"use strict";function r(e){return d[e]}function o(e){return i[e]}var d={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},a=/[&><\u2028\u2029]/g;e.exports=function(e){return JSON.stringify(e).replace(a,r)};var i={"\u2028":"\\u2028","\u2029":"\\u2029"},l=/[\u2028\u2029]/g;e.exports.sanitize=function(e){return e.replace(l,o)}},505:function(e,t,n){e.exports=n(506)},506:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=(0,f.flush)(),t=[],n=!0,r=!1,o=void 0;try{for(var d,a=(0,u.default)(e);!(n=(d=a.next()).done);n=!0){var l=(0,i.default)(d.value,2),s=l[0],p=l[1];t.push(c.default.createElement("style",{id:"__jsx-style-"+s,key:"__jsx-style-"+s,dangerouslySetInnerHTML:{__html:p}}))}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return t}function d(){var e=(0,f.flush)(),t="",n=!0,r=!1,o=void 0;try{for(var d,a=(0,u.default)(e);!(n=(d=a.next()).done);n=!0){var l=(0,i.default)(d.value,2);t+='<style id="__jsx-style-'+l[0]+'">'+l[1]+"</style>"}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return t}Object.defineProperty(t,"__esModule",{value:!0});var a=n(85),i=r(a),l=n(55),u=r(l);t.default=o,t.flushToHTML=d;var s=n(1),c=r(s),f=n(134)}},[501]);
            return { page: comp.default }
          })
        