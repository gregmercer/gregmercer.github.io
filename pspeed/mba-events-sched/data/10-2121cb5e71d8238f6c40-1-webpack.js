(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9hOU":function(e,t,n){e.exports=n.p+"7f1c43bd7e0c6b0815c4726f70cd9acd.svg"},FZWr:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=n("17x9"),r=n.n(a),c=n("vOnD"),l=n("beH/");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=c.default.div.withConfig({displayName:"AttentionCirclereact__AttentionCircleWrapper",componentId:"ropkdn-0"})(["position:absolute;pointer-events:none;",""],(function(e){return"\n        top: ".concat(e.offsetTop||-6,"px;\n        left: ").concat(e.offsetLeft||0,"px;\n        width: ").concat(e.size||25,"px;\n        height: ").concat(e.size||25,"px;\n    ")})),m=c.default.img.withConfig({displayName:"AttentionCirclereact__AttentionCircleImage",componentId:"ropkdn-1"})(["position:absolute;left:-35%;top:-35%;width:160%;height:160%;object-fit:contain;"]),y=["kf_el_RmcnqVht68_an","el_1rNzpgNeL"];var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,e);var t,n,o,a=f(r);function r(){return s(this,r),a.apply(this,arguments)}return t=r,(n=[{key:"render",value:function(){return i.a.createElement(g,{top:this.props.offsetTop,left:this.props.offsetLeft,width:this.props.size,height:this.props.size},i.a.createElement(m,{src:(e=l.default,y.reduce((function(e,t){return e.split(t).join(t+Math.random().toString().split(".")[1])}),e))}));var e}}])&&d(t.prototype,n),o&&d(t,o),r}(o.PureComponent);_.propTypes={size:r.a.number.isRequired,offsetLeft:r.a.number,offsetTop:r.a.number},t.default=_},KZTM:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return qe}));var o,i,a,r=n("vOnD"),c=n("XzT5"),l=n("q1tI"),u=n.n(l),s=n("17x9"),d=n.n(s),p=n("yb06"),f=n.n(p),h=n("/MKj"),b=n("f+XQ"),g=n.n(b),m=n("Wbsq"),y=n.n(m),_=(n("k0mc"),n("M39V")),v=n.n(_),x=n("rQKZ"),k=n("EKef"),w=n("Sye6"),z=n("qztA"),C=n("m3+V"),S=n.n(C),R=n("sScL"),E=n("w6T9"),P=n("KamX"),O=n("xZ3h"),I=n("ubkl"),B=n("/cUP"),j=n("Pqao"),A=n("hl5+"),L=n("3NuN"),W=n("Ar8A"),N=n("f2Xr"),M=n("dcgU"),D=n("KEPE"),T=n("DvT9"),H=n("244d"),q=n("ySsV"),V=n("1+J2"),Z=n("sAei"),K=n("N0A1"),U=n("FZWr"),X=n("rHl6"),F=n("1GB4"),Y=n("yDXD"),G=n("TJ0u"),Q=n("47mp"),J=n("54Ef"),$=n("USB3"),ee=n("s3Vt"),te=n("BnKp"),ne=n("ZgL/"),oe=n("Zcty"),ie=n("2cFm"),ae=n("ctjK");function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t,n,o,i,a,r){try{var c=e[a](r),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,i)}function le(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function r(e){ce(a,o,i,r,c,"next",e)}function c(e){ce(a,o,i,r,c,"throw",e)}r(void 0)}))}}function ue(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){c=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw a}}}}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function de(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function pe(e,t,n){return t&&de(e.prototype,t),n&&de(e,n),e}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=me(e);if(t){var i=me(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return be(this,n)}}function be(e,t){return!t||"object"!==re(t)&&"function"!=typeof t?ge(e):t}function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ye=v.a.getParser(window.navigator.userAgent).isOS(v.a.OS_MAP.MacOS),_e=r.default.div.withConfig({displayName:"BlockWrapperreact__PageContainer",componentId:"ztiwk6-0"})(["pointer-events:auto;position:relative;padding-top:25px;"," ",""],(function(e){return e.additionalSpace&&"margin-top: 200px;"}),(function(e){return e.theme.id===$.default.id&&"\n        padding-top: 20px;\n    "})),ve=r.default.span.withConfig({displayName:"BlockWrapperreact__PageIndicatorIcon",componentId:"ztiwk6-1"})(["width:12px;height:6px;right:3px;top:7px;position:absolute;pointer-events:none;background:url(",") center no-repeat;background-size:contain;opacity:.3;",""],n("ijDZ"),(function(e){return e.theme.id===$.default.id&&"\n        background-image: url(".concat(n("Hpr1"),");\n        width: 8px;\n        height: 4px;\n        right: 7px;\n        top: 7px;\n    ")})),xe=r.default.div.withConfig({displayName:"BlockWrapperreact__PageIndicatorText",componentId:"ztiwk6-2"})(["position:absolute;top:0;left:-5px;cursor:pointer;font-size:11px;color:#7b7b7b;height:16px;font-weight:500;line-height:16px;padding:2px 5px;padding-right:20px;&:hover{color:#fff;","{opacity:1;}}"," "," ",""],ve,(function(e){return(e.isSelected||!e.interactive)&&"\n        color: #fff;\n\n        ".concat(ve," {\n            opacity: 1;\n        }\n    ")}),(function(e){return!e.interactive&&"\n        pointer-events: none;\n    "}),(function(e){return e.theme.id===$.default.id&&Object(r.css)(["color:",";&:hover{color:",";}",""],$.default.neutral200,$.default.neutral600,(e.isSelected||!e.interactive)&&"\n            color: ".concat($.default.neutral600,";\n        "))})),ke=r.default.div.withConfig({displayName:"BlockWrapperreact__DuplicateButton",componentId:"ztiwk6-3"})(["display:inline-block;width:14px;height:14px;margin-right:","px;cursor:pointer;vertical-align:top;background:url(",") center no-repeat;background-size:contain;opacity:.3;&:hover{opacity:1;}",""],(function(e){return e.marginRight}),n("9hOU"),(function(e){return e.theme.id===$.default.id&&Object(r.css)(["background-image:url(",");&:hover{background-image:url(",");}"],n("rVmo"),n("rVmo"))})),we=r.default.div.withConfig({displayName:"BlockWrapperreact__MagicIcon",componentId:"ztiwk6-4"})(["display:inline-block;width:18px;height:18px;margin-right:12px;margin-top:-4px;cursor:pointer;position:relative;background:url(",") center no-repeat;background-size:contain;opacity:.3;&:hover{opacity:1;}",""],n("mDUN"),(function(e){return e.theme.id===$.default.id&&Object(r.css)(["background-image:url(",");&:hover{background-image:url(",");}"],n("eD2j"),n("eD2j"))})),ze=r.default.div.withConfig({displayName:"BlockWrapperreact__DeleteButton",componentId:"ztiwk6-5"})(["display:inline-block;width:14px;height:14px;cursor:pointer;background:url(",") center no-repeat;background-size:contain;opacity:.3;&:hover{opacity:1;}",""],n("vW5L"),(function(e){return e.theme.id===$.default.id&&Object(r.css)(["background-image:url(",");&:hover{background-image:url(",");}"],n("WCP5"),n("WCP5"))})),Ce=Object(r.default)(E.default).withConfig({displayName:"BlockWrapperreact__AddPageButton",componentId:"ztiwk6-6"})(["opacity:0.01;transition:opacity 100ms ease-in;min-width:130px;&:hover{opacity:1;transition:opacity 100ms ease-in;}"]),Se=r.default.div.withConfig({displayName:"BlockWrapperreact__StyledPage",componentId:"ztiwk6-7"})([""," ",""],(function(e){return e.selected&&"\n        border: 1px solid #3195cb;\n        margin: -1px;\n    "}),(function(e){var t=e.theme;return e.selected&&t.id===$.default.id&&"\n        border-color: ".concat($.default.neutral200,";\n    ")})),Re=r.default.div.withConfig({displayName:"BlockWrapperreact__BlockHoverArea",componentId:"ztiwk6-8"})(["content:'';position:absolute;width:calc(100% + 30px);height:calc(100% - 51px);left:-15px;top:10px;&:hover{&::before{content:'';position:absolute;left:14px;top:14px;width:calc(100% - 30px);height:calc(100% - 29px);border:1px solid #3195cb;","}}"],(function(e){return e.theme.id===$.default.id&&"\n                border-color: ".concat($.default.neutral200,";\n                top: 9px;\n                height: calc(100% - 24px);\n                box-sizing: content-box;\n            ")})),Ee=Object(r.default)(E.default).withConfig({displayName:"BlockWrapperreact__WidthSlider",componentId:"ztiwk6-9"})(["display:none;height:65px;width:13px;position:absolute;background-color:#3194cb;border:1px solid #fff;top:calc(50% - 48px);z-index:1;min-width:auto;padding:0 0 0 5px;border-radius:4px;&:active{background-color:#3194cb;}&::before,&::after{content:'';position:absolute;top:21px;height:23px;width:1px;background:#fff;}&::before{left:3px;}&::after{right:3px;}",""],(function(e){return e.theme.id===$.default.id&&"\n        background-color: ".concat($.default.neutral300,";\n        outline: none;\n\n        &:hover,\n        &:active {\n            background-color: ").concat($.default.neutral400,";\n        }\n    ")})),Pe=Object(r.default)(Ee).withConfig({displayName:"BlockWrapperreact___StyledWidthSlider2",componentId:"ztiwk6-10"})(["left:-6px;"]),Oe=Object(r.default)(Ee).withConfig({displayName:"BlockWrapperreact___StyledWidthSlider",componentId:"ztiwk6-11"})(["left:-3px;"]),Ie=r.default.button.withConfig({displayName:"BlockWrapperreact__HeightSlider",componentId:"ztiwk6-12"})(["width:65px;height:13px;position:absolute;background-color:#656565;left:calc(50% - 32px);top:6px;z-index:1;cursor:ns-resize;min-width:auto;border-radius:4px;display:flex;align-items:center;justify-content:center;&:hover,&:active{background:#3194cb;}&::after{content:'';box-sizing:border-box;position:absolute;left:20px;top:4px;width:23px;height:5px;border-top:1px solid #fff;border-bottom:1px solid #fff;}",""],(function(e){return e.theme.id===$.default.id&&"\n        background-color: ".concat($.default.neutral300,";\n        outline: none;\n\n        &:hover {\n            background-color: ").concat($.default.neutral400,";\n        }\n    ")})),Be=r.default.div.withConfig({displayName:"BlockWrapperreact__Indicator",componentId:"ztiwk6-13"})(["display:none;position:absolute;font-size:11px;font-weight:500;background-color:#2d2d2d;padding:4px 0;box-shadow:0 10px 40px 0 rgba(0,0,0,.5);border-radius:4px;text-align:center;z-index:2;width:60px;",""],(function(e){return e.theme.id===$.default.id&&"\n        box-shadow: ".concat($.default.shadow.default,";\n        color: ").concat($.default.neutral600,";\n        background-color:  ").concat($.default.neutral100,";\n    ")})),je=Object(r.default)(Be).withConfig({displayName:"BlockWrapperreact__HeightIndicator",componentId:"ztiwk6-14"})(["left:50%;margin-left:-30px;bottom:30px;"]),Ae=Object(r.default)(Be).withConfig({displayName:"BlockWrapperreact__WidthIndicator",componentId:"ztiwk6-15"})(["top:calc(50% - 26px);right:14px;z-index:1;"]),Le=Object(r.default)(Ae).withConfig({displayName:"BlockWrapperreact___StyledWidthIndicator",componentId:"ztiwk6-16"})(["left:14px;"]),We=r.default.div.withConfig({displayName:"BlockWrapperreact__SelectionBorder",componentId:"ztiwk6-17"})(["display:none;position:absolute;left:-1px;top:24px;width:calc(100%);height:calc(100% - 80px);border:1px solid #3195cb;z-index:0;",""],(function(e){return e.theme.id===$.default.id&&"\n        border-color: ".concat($.default.neutral200,";\n        top: 19px;\n        height: calc(100% - 75px);\n    ")})),Ne=r.default.div.withConfig({displayName:"BlockWrapperreact__WidthResizer",componentId:"ztiwk6-18"})(["position:absolute;top:25px;width:3px;height:calc(100% - 80px);min-width:auto;cursor:ew-resize;z-index:1;&:hover{","{display:inline-block;cursor:ew-resize;}&~ ","{display:block;}}",""],Ee,We,(function(e){return e.active&&"\n        ".concat(Ee,",\n        ").concat(Ae," {\n            display: inline-block;\n            cursor: ew-resize;\n        }\n    ")})),Me=Object(r.default)(Ne).withConfig({displayName:"BlockWrapperreact___StyledWidthResizer2",componentId:"ztiwk6-19"})(["right:-3px;"]),De=Object(r.default)(Ne).withConfig({displayName:"BlockWrapperreact___StyledWidthResizer",componentId:"ztiwk6-20"})(["left:-3px;"]),Te=r.default.div.withConfig({displayName:"BlockWrapperreact__Border",componentId:"ztiwk6-21"})(["position:absolute;width:100%;height:calc(100% - ","px);top:","px;left:0;pointer-events:none;margin:-1px;border:1px solid ","80;",""],(function(e){return e.theme.id===$.default.id?"75":"80"}),(function(e){return e.theme.id===$.default.id?"20":"25"}),(function(e){return e.theme.id===$.default.id?"#e7e9ec":"#434343"}),(function(e){return e.selected&&Object(r.css)(["border:1px solid #3195cb;",""],(function(e){return e.theme.id===$.default.id&&"\n            border-color: ".concat($.default.neutral200,";\n        ")}))})),He=r.default.div.withConfig({displayName:"BlockWrapperreact__HeightResizer",componentId:"ztiwk6-22"})(["position:absolute;left:0px;bottom:30px;width:100%;height:25px;&::before{border-top:1px solid #656565;content:'';width:100%;height:0;position:absolute;bottom:12px;}"," ",""],(function(e){return e.active&&"\n        ".concat(Ie," {\n            background-color: #3194cb;\n        }\n\n        ").concat(je," {\n            display: inline-block;\n        }\n    ")}),(function(e){return e.theme.id===$.default.id&&Object(r.css)(["&::before{border-top-color:",";}",""],$.default.neutral100,e.active&&"\n            ".concat(Ie," {\n                background-color: ").concat($.default.neutral300,";\n\n                &:hover {\n                    background-color: ").concat($.default.neutral400,";\n                }\n            }\n        "))})),qe=Object(h.connect)((function(e){var t,n=e.get("undo");return{footerHeight:e.getIn(["footerSettings","showFooter"])?ie.INFOGRAPHIC_FOOTER_HEIGHT:0,elementsOutsideBlockVisible:!(null===(t=e.get("localProjectSettings"))||void 0===t||!t.elementsOutsideBlockVisible),canUndo:!n.get("undoStack").isEmpty(),canRedo:!n.get("redoStack").isEmpty()}}),(function(e){return{onZoom:function(t){e({type:A.EDITOR_ZOOM,payload:{direction:t}})},onUploadMedia:function(t){e({type:te.PREZIGRAM_UPLOAD_MEDIA,payload:t})}}}),null,{areStatesEqual:function(e,t){var n,o;return e.getIn(["footerSettings","showFooter"])===t.getIn(["footerSettings","showFooter"])&&!(null===(n=e.get("localProjectSettings"))||void 0===n||!n.elementsOutsideBlockVisible)==!(null===(o=t.get("localProjectSettings"))||void 0===o||!o.elementsOutsideBlockVisible)&&e.getIn(["undo","undoStack"]).isEmpty()===t.getIn(["undo","undoStack"]).isEmpty()&&e.getIn(["undo","redoStack"]).isEmpty()===t.getIn(["undo","redoStack"]).isEmpty()}})(o=Object(x.default)({withProps:!0})((a=i=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(n,e);var t=he(n);function n(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(o=t.call(this,e))._openAutoLayout=function(){var e=o.props.block.getKey();o.props.onSelectionChange&&o.props.onSelectionChange(F.default.createEmpty()),Object(I.openAutoLayout)(e),Object(V.logGenerateAutoLayoutWebJs)({auto_layout_generate_source:"PAGE_SETTINGS"})},o._handlePaste=function(e){g.a.paste().then((function(t){Object(W.default)(t,e,{onUploadMedia:o.props.onUploadMedia})})).catch(N.default)},o._resizeRight=function(e){o._startResize(e),Object(M.resizeRight)()},o._resizeLeft=function(e){o._startResize(e),Object(M.resizeLeft)()},o._resizeHeight=function(e){o._startResize(e),Object(M.resizeHeight)()},o._autoSize=function(){o.state.editorState.getCurrentContent().getBlocks().size>1||oe.default.dispatch({type:A.PAGE_RESIZE_AUTO,footerHeight:o.props.footerHeight,minHeight:100,minWidth:200})},o._startResize=function(e){var t,n,i,a,r,c,l=k.default.editorState;o.props.selected||o._selectPage(!1),Object(D.changeFreeLayoutSettingsTab)(1,e.target),o.initialPageSize=l.getPageSize(),o.resizeStartX=null!==(t=null==e?void 0:e.pageX)&&void 0!==t?t:null==e?void 0:null===(n=e.touches)||void 0===n?void 0:null===(i=n[0])||void 0===i?void 0:i.pageX,o.resizeStartY=null!==(a=null==e?void 0:e.pageY)&&void 0!==a?a:null==e?void 0:null===(r=e.touches)||void 0===r?void 0:null===(c=r[0])||void 0===c?void 0:c.pageY,e.stopPropagation(),document.addEventListener("mouseup",o._stopResize),document.addEventListener("touchend",o._stopResize),document.addEventListener("mousemove",o._doResize),document.addEventListener("touchmove",o._doResize),o.initialEntityPositions=void 0,Object(V.logModifyProjectWebJs)({project_id:q.default.infographicId,modify_project_action:Z.modify_project_action.PROJECT_SIZE_CHANGE})},o._setupInitialEntityPositions=function(){var e=o.state.editorState;o.initialEntityPositions={};var t,n=ue(e.getCurrentContent().getBlocks());try{for(n.s();!(t=n.n()).done;){var i,a=ue(t.value.getEntities());try{for(a.s();!(i=a.n()).done;){var r=i.value;o.initialEntityPositions[r.key]={left:r.left,top:r.top}}}catch(e){a.e(e)}finally{a.f()}}}catch(e){n.e(e)}finally{n.f()}},o._doResize=function(e){var t,n,i,a,r,c,l=o.state,u=l.editorState,s=l.resizeWidth,d=l.resizeHeight,p=o.props,f=p.scaleX,h=p.scaleY,b=null!==(t=null==e?void 0:e.pageX)&&void 0!==t?t:null==e?void 0:null===(n=e.touches)||void 0===n?void 0:null===(i=n[0])||void 0===i?void 0:i.pageX,g=null!==(a=null==e?void 0:e.pageY)&&void 0!==a?a:null==e?void 0:null===(r=e.touches)||void 0===r?void 0:null===(c=r[0])||void 0===c?void 0:c.pageY;if("number"!=typeof b||"number"!=typeof g)throw console.error("Could not parse page resize event: ",e),new Error("Could not parse page resize event");o.initialEntityPositions||o._setupInitialEntityPositions();var m=s?Math.round((b-o.resizeStartX)/f):0;"left"===s&&(m=-m);var y=d?Math.round((g-o.resizeStartY)/h):0,_=Math.min(6e3,Math.max(200,o.initialPageSize.width+m)),v=Math.min(1e4,Math.max(100,o.initialPageSize.height+y)),x={};if(e.altKey||"left"===s){var k=_-o.initialPageSize.width,w=v-o.initialPageSize.height;e.altKey&&(k/=2,w/=2);var z,C=ue(u.getCurrentContent().getBlocks());try{for(C.s();!(z=C.n()).done;){var S,R=ue(z.value.getEntities());try{for(R.s();!(S=R.n()).done;){var E=S.value;E.getCalloutKey()||(x[E.key]={left:o.initialEntityPositions[E.key].left+k,top:o.initialEntityPositions[E.key].top+w})}}catch(e){R.e(e)}finally{R.f()}}}catch(e){C.e(e)}finally{C.f()}}d&&o.previousResizeY===g&&g>o.resizeStartY+o.initialPageSize.height&&o.resizeStartY--,o.previousResizeY=g,oe.default.dispatch({type:A.PAGE_RESIZE,pageSize:{width:_,height:v},entities:x})},o._stopResize=function(){o.initialEntityPositions=void 0,Object(M.hideResize)(),document.removeEventListener("mousemove",o._doResize),document.removeEventListener("touchmove",o._doResize),document.removeEventListener("mouseup",o._stopResize),document.removeEventListener("touchend",o._stopResize)},o.handleAutoLayoutRequest=function(){if(o.state.blockActive&&n.checkForAutoLayout(o.props.block.getEntities())){var e=Object(J.getAutoLayoutService)().requestLayouts({pageId:o.props.block.getKey(),delay:1e3});o.autoLayoutRequest!==e&&(o.autoLayoutRequest=e,o.setState({autoLayoutResultAvailable:!1}),o.registerAutoLayoutRequestHandler())}else o.state.autoLayoutResultAvailable&&(o.autoLayoutRequest=void 0,o.setState({autoLayoutResultAvailable:!1}))},o.registerAutoLayoutRequestHandler=le(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.autoLayoutRequest.promise;case 2:e.sent.results.length>0&&o.setState({autoLayoutResultAvailable:!0});case 4:case"end":return e.stop()}}),e)}))),o._registerBlockHandlers=o._registerBlockHandlers.bind(ge(o)),o._duplicateBlock=o._duplicateBlock.bind(ge(o)),o.onDeleteClick=o.onDeleteClick.bind(ge(o)),o._addPage=o._addPage.bind(ge(o)),o._selectPage=o._selectPage.bind(ge(o)),o._selectPageOrShowContextMenu=o._selectPageOrShowContextMenu.bind(ge(o)),o._onContextMenuOpen=o._onContextMenuOpen.bind(ge(o)),o._deselectAll=o._deselectAll.bind(ge(o)),o._addComment=o._addComment.bind(ge(o)),o.state={autoLayoutResultAvailable:!1,blockActive:!1},o}return pe(n,null,[{key:"getStores",value:function(){return[k.default,z.default,G.default,Q.default]}},{key:"calculateState",value:function(e,t){return{transition:k.default.presentationTransition,editorState:k.default.editorState,resizeHeight:z.default.resizeHeight,resizeWidth:z.default.resizeWidth,blockActive:t&&t.block.key===G.default.activePageId}}}]),pe(n,[{key:"_menuActions",value:function(){var e=this.props,t=e.canUndo,n=e.canRedo,o=[{name:c.default.t("app.editor_context_menu.paste"),onClick:this._handlePaste,separator:!t&&!n,shortcut:ye?"⌘V":"Ctrl+V",id:"paste"},{name:c.default.t("app.editor_context_menu.zoomIn"),onClick:this.props.onZoom.bind(null,1),shortcut:ye?"⌘+":"Ctrl +",id:"zoomin"},{name:c.default.t("app.editor_context_menu.zoomOut"),onClick:this.props.onZoom.bind(null,-1),separator:!0,shortcut:ye?"⌘-":"Ctrl -",id:"zoomout"}];n&&o.splice(1,0,{name:c.default.t("app.editor_context_menu.redo"),onClick:L.redo,separator:!0,shortcut:ye?"⌘Y":"Ctrl+Y",id:"redo"}),t&&o.splice(1,0,{name:c.default.t("app.editor_context_menu.undo"),onClick:L.undo,separator:!n,shortcut:ye?"⌘Z":"Ctrl+Z",id:"undo"});var i=k.default.editorState.getCurrentContent().getBlocks().size>1;return this.props.isZoomLayout||o.push({name:c.default.t("app.editor_context_menu.duplicate"),onClick:this._duplicateBlock,shortcut:ye?"⌘D":"Ctrl+D",separator:i,id:"duplicate"}),this.props.commentingIsAvailable&&o.splice(i?o.length:o.length-1,0,{name:c.default.t("app.editor_context_menu.addComment"),onClick:this._addComment,separator:!0,id:"addComment"}),i&&o.push({name:c.default.t("app.editor_context_menu.delete"),onClick:this.onDeleteClick,shortcut:ye?"⌫":"Del",id:"delete"}),o}},{key:"_duplicateBlock",value:function(e){e.stopPropagation();var t=this.state.editorState.getCurrentContent().getBlockIndex(this.props.block.getKey());Object(P.default)(this.props.block.getKey(),t+1,{scroll:!0})}},{key:"onDeleteClick",value:function(e){e.stopPropagation();var t=this.props.block.getKey(),n=this.state.editorState.getCurrentContent().getBlocks().size,o=this.state.editorState.getCurrentContent().getBlockIndex(t)+1;Object(ee.showConfirmDialog)({title:c.default.t("app.freelayout_editor.delete_page_dialog_title",{page_number:o}),description:c.default.t("app.freelayout_editor.delete_page_dialog_description"),button:c.default.t("delete")}).then((function(){Object(R.default)([t]),o===n&&Object(O.scrollToPage)(o-2)}))}},{key:"_addPage",value:function(e){e.stopPropagation();var t=this.state.editorState.getCurrentContent().getBlockIndex(this.props.block.getKey());Object(j.insertPage)(t+1,{scroll:!0})}},{key:"_selectPage",value:function(e){var t=this.props.block.getKey(),n=w.default.currentSelection.clear().addBlocks(t);if(Object(T.updateSelectionState)(n),!this.props.isZoomLayout&&(Object(I.openPageSettings)(t),e)){var o=this.state.editorState.getCurrentContent().getBlockIndex(t);Object(O.scrollToPage)(o)}}},{key:"_selectPageOrShowContextMenu",value:function(e){if(e.preventDefault(),e.stopPropagation(),this.props.selected){var t=e.target.getBoundingClientRect();Object(B.openEditContextMenu)(this._menuActions(),{x:t.left,y:t.bottom})}else this._selectPage(!0)}},{key:"_onContextMenuOpen",value:function(e){e.preventDefault(),Object(B.openEditContextMenu)(this._menuActions(),{x:e.nativeEvent.pageX,y:e.nativeEvent.pageY})}},{key:"_stopPropagation",value:function(e){e.stopPropagation()}},{key:"_deselectAll",value:function(){Object(T.updateSelectionState)(w.default.currentSelection.clear())}},{key:"_addComment",value:function(){this.props.onAddComment(this.props.block.getKey(),null,{scaleX:this.props.scaleX,scaleY:this.props.scaleY,mouseX:K.default.positionX,mouseY:K.default.positionY,isZoomLayout:this.props.isZoomLayout})}},{key:"_registerBlockHandlers",value:function(e){this.props.isZoomLayout&&(e?ne.default.addHandler(e,"select_block",this.props.block.getKey()):this._blockRef&&ne.default.removeHandler(this._blockRef,"select_block",this.props.block.getKey()),this._blockRef=e)}},{key:"componentDidMount",value:function(){this.handleAutoLayoutRequest()}},{key:"componentDidUpdate",value:function(){this.handleAutoLayoutRequest()}},{key:"render",value:function(){var e=this.state.editorState,t=this.state.autoLayoutResultAvailable,n=e.getPageSize(),o=n.height,i=n.width,a=this.props,r=a.editable,s=a.selected,d=a.block,p=a.interactive,f=a.isZoomLayout,h=a.elementsOutsideBlockVisible,b=a.activeBlockKey,g=e.getCurrentContent().getBlockIndex(d.getKey())+1,m=e.getCurrentContent().getBlocks().size,y=d.getKey()===b&&h;return u.a.createElement(_e,{className:f&&S.a.zoomContainer||S.a.container,ref:this._registerBlockHandlers,onContextMenu:f&&this._onContextMenuOpen||void 0,additionalSpace:this.state.transition===ae.InterstateTransition},!f&&u.a.createElement(Re,null),u.a.createElement(Se,{selected:!f&&s,onContextMenu:!f&&this._onContextMenuOpen||void 0},u.a.createElement(H.default,{block:this.props.block,assets:this.props.assets,width:this.props.width,height:this.props.height,observer:this.props.observer,isZoomLayout:f},this.props.children)),!f&&y&&u.a.createElement(Te,{selected:s}),!f&&p&&this.props.editable&&u.a.createElement(u.a.Fragment,null,u.a.createElement(He,{active:s&&this.state.resizeHeight},u.a.createElement(je,null,"".concat(o," px")),u.a.createElement(Ie,{onMouseDown:this._resizeHeight,onTouchStart:this._resizeHeight,onDoubleClick:this._autoSize})),u.a.createElement(De,{active:s&&"left"===this.state.resizeWidth,onMouseDown:this._resizeLeft,onTouchStart:this._resizeLeft,onDoubleClick:this._autoSize},u.a.createElement(Le,null,"".concat(i," px")),u.a.createElement(Oe,{useButtonTag:!0})),u.a.createElement(Me,{active:s&&"right"===this.state.resizeWidth,onMouseDown:this._resizeRight,onTouchStart:this._resizeRight,onDoubleClick:this._autoSize},u.a.createElement(Ae,null,"".concat(i," px")),u.a.createElement(Pe,{useButtonTag:!0})),u.a.createElement(We,null)),u.a.createElement(xe,{isSelected:s,interactive:p,onClick:this._selectPageOrShowContextMenu,onContextMenu:this._selectPageOrShowContextMenu,onMouseDown:this._stopPropagation,onMouseUp:this._stopPropagation},!f&&c.default.t("app.freelayout_editor.page_n_of_m",{current:g,total:m}),!f&&s&&u.a.createElement(ve,null)),!f&&p&&u.a.createElement(l.Fragment,null,u.a.createElement("div",{className:S.a.pageToolbar,onMouseDown:this._stopPropagation,onMouseUp:this._stopPropagation},(t||Object(Y.autoLayoutAdminEnabled)())&&u.a.createElement("div",{className:S.a.magicToolbarButton,onClick:this._openAutoLayout},t?u.a.createElement(l.Fragment,null,u.a.createElement(U.default,{size:25,offsetTop:-6,offsetLeft:-5}),u.a.createElement(we,{title:c.default.t("app.autolayout.autoalign")})):"🚀"),u.a.createElement(ke,{onClick:this._duplicateBlock,marginRight:m>1?12:0,title:c.default.t("app.editor_context_menu.duplicate")}),m>1&&u.a.createElement(ze,{onClick:this.onDeleteClick,title:c.default.t("app.editor_context_menu.delete")})),u.a.createElement("div",{className:S.a.addPageBlock,onClick:this._deselectAll},!this.props.customFooterButton&&r&&u.a.createElement(Ce,{className:S.a.addPageButton,onClick:this._addPage,gray:!0,small:!0},c.default.t("inspector.free.add_page")),this.props.customFooterButton)))}}]),n}(l.Component),i.propTypes={selected:d.a.bool.isRequired,children:d.a.node.isRequired,block:f.a.record.isRequired,assets:d.a.shape({getURL:d.a.func.isRequired}),interactive:d.a.bool,width:d.a.number.isRequired,height:d.a.number.isRequired,scaleX:d.a.number,scaleY:d.a.number,commentingIsAvailable:d.a.bool,onAddComment:d.a.func,customFooterButton:d.a.any,editable:d.a.bool,footerHeight:d.a.number.isRequired,observer:d.a.shape({observe:d.a.func.isRequired,unobserve:d.a.func.isRequired}),onZoom:d.a.func.isRequired,onSelectionChange:d.a.func,onUploadMedia:d.a.func.isRequired,isZoomLayout:d.a.bool,elementsOutsideBlockVisible:d.a.bool,activeBlockKey:d.a.string,canUndo:d.a.bool.isRequired,canRedo:d.a.bool.isRequired},i.defaultProps={interactive:!0,elementsOutsideBlockVisible:!1},i.checkForAutoLayout=y()(X.checkForAutoLayout,{max:1}),o=a))||o)||o},"ORX/":function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,".InfographicEditor-Thumbs .gh4gFrnDfIaRgyNi2Y-Cb {\n    margin: auto 10px;\n}\n\n._1WnX5Ip9ghfhiMUEv1bl0d {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    pointer-events: auto;\n}\n\n._3pH_HfhevWzsAxiwzfCANC {\n    text-align: center;\n    position: absolute;\n    top: -3px;\n    right: 0;\n}\n\n.fNKRflHrCr8f13lc0VCS8 {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin-right: 14px;\n    cursor: pointer;\n    vertical-align: top;\n}\n\n._1ex7TrsYhTrdhNyhQHlcWm {\n    height: 30px;\n    padding-top: 25px;\n    text-align: center;\n}\n",""]),t.locals={container:"gh4gFrnDfIaRgyNi2Y-Cb",zoomContainer:"_1WnX5Ip9ghfhiMUEv1bl0d",pageToolbar:"_3pH_HfhevWzsAxiwzfCANC",magicToolbarButton:"fNKRflHrCr8f13lc0VCS8",addPageBlock:"_1ex7TrsYhTrdhNyhQHlcWm"}},WCP5:function(e,t,n){e.exports=n.p+"120cb1fa7c87d8ba94c1d830c0c0eadf.svg"},"beH/":function(e,t,n){"use strict";n.r(t),t.default="data:image/svg+xml,%3csvg viewBox='0 0 25 25' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='el_1rNzpgNeL'%3e%3cstyle%3e%40-webkit-keyframes kf_el_RmcnqVht68_an_5S_hhfRDh%7b0%25%7b-webkit-transform: translate(20.5px%2c 88.5px) scale(0.1%2c 0.1) translate(-20.5px%2c -88.5px)%3btransform: translate(20.5px%2c 88.5px) scale(0.1%2c 0.1) translate(-20.5px%2c -88.5px)%3b%7d51.11%25%7b-webkit-transform: translate(20.5px%2c 88.5px) scale(1%2c 1) translate(-20.5px%2c -88.5px)%3btransform: translate(20.5px%2c 88.5px) scale(1%2c 1) translate(-20.5px%2c -88.5px)%3b%7d100%25%7b-webkit-transform: translate(20.5px%2c 88.5px) scale(1%2c 1) translate(-20.5px%2c -88.5px)%3btransform: translate(20.5px%2c 88.5px) scale(1%2c 1) translate(-20.5px%2c -88.5px)%3b%7d%7d%40keyframes kf_el_RmcnqVht68_an_5S_hhfRDh%7b0%25%7b-webkit-transform: translate(20.5px%2c 88.5px) scale(0.1%2c 0.1) translate(-20.5px%2c -88.5px)%3btransform: translate(20.5px%2c 88.5px) scale(0.1%2c 0.1) translate(-20.5px%2c -88.5px)%3b%7d51.11%25%7b-webkit-transform: translate(20.5px%2c 88.5px) scale(1%2c 1) translate(-20.5px%2c -88.5px)%3btransform: translate(20.5px%2c 88.5px) scale(1%2c 1) translate(-20.5px%2c -88.5px)%3b%7d100%25%7b-webkit-transform: translate(20.5px%2c 88.5px) scale(1%2c 1) translate(-20.5px%2c -88.5px)%3btransform: translate(20.5px%2c 88.5px) scale(1%2c 1) translate(-20.5px%2c -88.5px)%3b%7d%7d%40-webkit-keyframes kf_el_RmcnqVht68_an__czkRQPOg%7b0%25%7bopacity: 0%3b%7d11.11%25%7bopacity: 0.5%3b%7d40%25%7bopacity: 0.5%3b%7d51.11%25%7bopacity: 0%3b%7d100%25%7bopacity: 0%3b%7d%7d%40keyframes kf_el_RmcnqVht68_an__czkRQPOg%7b0%25%7bopacity: 0%3b%7d11.11%25%7bopacity: 0.5%3b%7d40%25%7bopacity: 0.5%3b%7d51.11%25%7bopacity: 0%3b%7d100%25%7bopacity: 0%3b%7d%7d%23el_1rNzpgNeL *%7b-webkit-animation-duration: 1.5s%3banimation-duration: 1.5s%3b-webkit-animation-iteration-count: 1%3banimation-iteration-count: 1%3b-webkit-animation-timing-function: cubic-bezier(0%2c 0%2c 1%2c 1)%3banimation-timing-function: cubic-bezier(0%2c 0%2c 1%2c 1)%3b%7d%23el_lEETVgXren%7bstroke: none%3bstroke-width: 1%3bfill: none%3b%7d%23el_P31aM6_bhF%7b-webkit-transform: translate(-8px%2c -76px)%3btransform: translate(-8px%2c -76px)%3bfill: white%3b%7d%23el_RmcnqVht68%7b-webkit-animation-fill-mode: forwards%3banimation-fill-mode: forwards%3b-webkit-animation-name: kf_el_RmcnqVht68_an__czkRQPOg%3banimation-name: kf_el_RmcnqVht68_an__czkRQPOg%3b-webkit-animation-timing-function: cubic-bezier(0%2c 0%2c 0.58%2c 1)%3banimation-timing-function: cubic-bezier(0%2c 0%2c 0.58%2c 1)%3b%7d%23el_RmcnqVht68_an_5S_hhfRDh%7b-webkit-animation-fill-mode: forwards%3banimation-fill-mode: forwards%3b-webkit-animation-name: kf_el_RmcnqVht68_an_5S_hhfRDh%3banimation-name: kf_el_RmcnqVht68_an_5S_hhfRDh%3b-webkit-animation-timing-function: cubic-bezier(0.42%2c 0%2c 1%2c 1)%3banimation-timing-function: cubic-bezier(0.42%2c 0%2c 1%2c 1)%3b%7d%3c/style%3e%3cg id='el_lEETVgXren' fill-rule='evenodd'%3e%3cg id='el_P31aM6_bhF' fill-rule='nonzero'%3e%3cg id='el_RmcnqVht68_an_5S_hhfRDh' data-animator-group='true' data-animator-type='2'%3e%3cpath d='M20.5%2c96 C24.7896164%2c96 28.1923077%2c92.5973087 28.1923077%2c88.5 C28.1923077%2c84.4026913 24.7896164%2c81 20.5%2c81 C16.2103836%2c81 12.8076923%2c84.4026913 12.8076923%2c88.5 C12.8076923%2c92.5973087 16.2103836%2c96 20.5%2c96 Z M20.5%2c101 C13.5964406%2c101 8%2c95.4035594 8%2c88.5 C8%2c81.5964406 13.5964406%2c76 20.5%2c76 C27.4035594%2c76 33%2c81.5964406 33%2c88.5 C33%2c95.4035594 27.4035594%2c101 20.5%2c101 Z' id='el_RmcnqVht68'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"},dcgU:function(e,t,n){"use strict";n.r(t),n.d(t,"hideResize",(function(){return a})),n.d(t,"resizeHeight",(function(){return r})),n.d(t,"resizeRight",(function(){return c})),n.d(t,"resizeLeft",(function(){return l}));var o=n("Zcty"),i=n("hl5+");function a(){o.default.dispatch({type:i.PAGE_RESIZE_HIDE})}function r(){o.default.dispatch({type:i.PAGE_RESIZE_HEIGHT})}function c(){o.default.dispatch({type:i.PAGE_RESIZE_RIGHT})}function l(){o.default.dispatch({type:i.PAGE_RESIZE_LEFT})}},eD2j:function(e,t,n){e.exports=n.p+"bac35fb27619d8f12f946a9c9fb0ffe6.svg"},"m3+V":function(e,t,n){var o=n("ORX/");"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,i);o.locals&&(e.exports=o.locals)},mDUN:function(e,t,n){e.exports=n.p+"46bf271973a4a017b5165e14eaaba332.svg"},rVmo:function(e,t,n){e.exports=n.p+"543fadf916e31048a5aee1d7fca4519b.svg"},vW5L:function(e,t,n){e.exports=n.p+"4589f9ee6d28bba505d9296fdd851f78.svg"}}]);