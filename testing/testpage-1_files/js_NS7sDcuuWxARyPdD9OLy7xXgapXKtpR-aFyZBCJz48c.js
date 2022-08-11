"use strict";var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1;s.configurable=!0;if("value" in s)s.writable=!0;Object.defineProperty(e,s.key,s)}};return function(t,s,i){if(s)e(t.prototype,s);if(i)e(t,i);return t}}();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}};function _possibleConstructorReturn(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")};return t&&(typeof t==="object"||typeof t==="function")?t:e};function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)};e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}(function(e,t){var s=function(e){_inherits(s,e);function s(e){_classCallCheck(this,s);var t=_possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));t.state={dismissed:t.alertWasDismissed(e.dismissalIgnoreBefore),showOnThisPage:t.shouldShowOnThisPage(e.showOnPages,e.negateShowOnPages)};t.dismissAlert=t.dismissAlert.bind(t);t.alertWasDismissed=t.alertWasDismissed.bind(t);t.shouldShowOnThisPage=t.shouldShowOnThisPage.bind(t);return t};_createClass(s,[{key:"componentDidUpdate",value:function(e){if(this.props.dismissalIgnoreBefore!==e.dismissalIgnoreBefore||this.props.showOnPages!==e.showOnPages||this.props.negateShowOnPages!==e.negateShowOnPages){this.setState({dismissed:this.alertWasDismissed(this.props.dismissalIgnoreBefore),showOnThisPage:this.shouldShowOnThisPage(this.props.showOnPages,this.props.negateShowOnPages)})}}},{key:"shouldShowOnThisPage",value:function(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;if(n.length===0){return!0};var s=!1,r=window.location.pathname;for(var i=0;i<n.length;i++){var a=t.path.baseUrl.slice(0,-1),e=a+n[i];if(e.charAt(e.length-1)==="*"){if(r.startsWith(e.substring(0,e.length-1))){s=!0;break}}
else if(e===r){s=!0;break}};return o?!s:s}},{key:"alertWasDismissed",value:function(e){if(!("alert-dismissed-"+this.props.uuid in window.localStorage)){return!1};var t=Number(window.localStorage.getItem("alert-dismissed-"+this.props.uuid));if(t<e){return!1};return!0}},{key:"dismissAlert",value:function(){window.localStorage.setItem("alert-dismissed-"+this.props.uuid,String(Math.round(new Date().getTime()/1000)));this.setState({dismissed:!0,showOnThisPage:this.state.showOnThisPage})}},{key:"render",value:function(){if(this.props.dismissible&&this.state.dismissed){return null};if(!this.state.showOnThisPage){return null};var e="sitewide-alert alert";if(this.props.styleClass!==""){e+=" "+this.props.styleClass};return React.createElement("div",{className:e,role:"alert"},React.createElement("div",{className:"container"},React.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.message}}),React.createElement("div",{className:"sitewide-alert__close"},this.props.dismissible&&React.createElement("button",{className:"close",onClick:this.dismissAlert,"aria-label":"Close alert message"},React.createElement("span",{"aria-hidden":"true"},"\xD7")))))}}]);return s}(React.Component),i=function(e){_inherits(i,e);function i(e){_classCallCheck(this,i);var t=_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));t.state={error:null,isLoaded:!1,sitewideAlerts:[]};return t};_createClass(i,[{key:"componentDidMount",value:function(){var e=this;this.getAlerts();this.interval=setInterval(function(){e.getAlerts()},t.sitewideAlert.refreshInterval<1000?1000:t.sitewideAlert.refreshInterval)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"getAlerts",value:function(){var e=this;fetch(window.location.origin+t.path.baseUrl+t.path.pathPrefix+"sitewide_alert/load").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,sitewideAlerts:t.sitewideAlerts})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,i=e.isLoaded,n=e.sitewideAlerts;if(t){console.log("Unable to to load alerts.");return React.createElement("div",null)}
else if(!i){return React.createElement("div",null)}
else{return React.createElement("div",null,n.map(function(e){return React.createElement(s,{key:e.uuid,uuid:e.uuid,message:e.message,styleClass:e.styleClass,dismissible:e.dismissible,dismissalIgnoreBefore:e.dismissalIgnoreBefore,showOnPages:e.showOnPages,negateShowOnPages:e.negateShowOnPages})}))}}}]);return i}(React.Component);e.behaviors.sitewide_alert_init={attach:function(e,t){ReactDOM.render(React.createElement(i,null),document.getElementById("sitewide-alert"))}}})(Drupal,drupalSettings);;