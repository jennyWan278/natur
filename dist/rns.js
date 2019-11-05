"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React),hoistStatics=_interopDefault(require("hoist-non-react-statics"));function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(r,!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var hasOwn=Object.prototype.hasOwnProperty,isObj=function(e){return"object"===_typeof(e)&&null!==e&&e.constructor===Object},isFn=function(e){return"function"==typeof e},isFnObj=function(e){return!!isObj(e)&&Object.keys(e).every((function(t){return isFn(e[t])}))},isMapsObj=function(e){return!!isObj(e)&&Object.keys(e).every((function(t){return isFn(e[t])||e[t].constructor===Array}))},isPromise=function(e){return e&&"function"==typeof e.then},isStoreModule=function(e){return!!(isObj(e)&&isObj(e.state)&&isFnObj(e.actions))&&!(e.maps&&!isMapsObj(e.maps))},ObjChangedKeys=function(e,t){if(!isObj(t)||!isObj(e)||e===t)return{updatedKeys:[],keyHasChanged:!1};var r=[],n=!1;for(var o in e)hasOwn.call(e,o)&&(hasOwn.call(t,o)||(n=!0,r.push(o)),hasOwn.call(t,o)&&e[o]!==t[o]&&r.push(o));for(var a in t)hasOwn.call(t,a)&&(hasOwn.call(e,a)||(r.push(a),n=!0));return{updatedKeys:r,keyHasChanged:n}};function compose(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function is(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function isEqualWithDepthLimit(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(is(e,t))return!0;if("object"!==_typeof(e)||null===e||"object"!==_typeof(t)||null===t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var i=0;i<o.length;i++)if(!hasOwn.call(t,o[i])||!is(e[o[i]],t[o[i]]))return"object"===_typeof(e[o[i]])&&"object"===_typeof(t[a[i]])&&n<r&&isEqualWithDepthLimit(e[o[i]],t[a[i]],r,n+1);return!0}var getValueFromObjByKeyPath=function(e,t){for(var r=t.replace(/\[/g,".").replace(/\]/g,"").split("."),n=e,o=0;o<r.length;o++)try{n=n[r[o]]}catch(e){return}return n},arrayIsEqual=function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0},MapCache=function(){function e(t,r){var n=this;if(_classCallCheck(this,e),this.type="function",this.mapDepends=[],this.depCache=[],this.dependKeys={},this.shouldCheckDependsCache=!0,this.hasComparedDep=!1,this.firstRun=!0,this.getState=t,"function"==typeof r)this.type="function",this.map=r;else{this.type="array";var o=r.slice();this.map=o.pop(),o.forEach((function(e){return n.mapDepends.push(n.createGetDepByKeyPath(e))}))}}return _createClass(e,[{key:"createGetDepByKeyPath",value:function(t){return"string"==typeof t?function(r){return e.getValueFromState(r,t)}:t}},{key:"shouldCheckCache",value:function(){this.shouldCheckDependsCache=!0,this.hasComparedDep=!1}},{key:"addDependKey",value:function(e){this.dependKeys[e]||"function"!==this.type||(this.dependKeys[e]=!0,this.mapDepends.push(this.createGetDepByKeyPath(e)))}},{key:"getDepsValue",value:function(){var e=this;return this.mapDepends.map((function(t){return t(e.getState())}))}},{key:"hasDepChanged",value:function(){if(this.shouldCheckDependsCache&&!this.hasComparedDep){var e=this.getDepsValue(),t=!arrayIsEqual(this.depCache,e);return this.firstRun&&(t=!0),t&&(this.depCache=e),this.shouldCheckDependsCache=!1,this.hasComparedDep=!0,t}return!1}},{key:"getValue",value:function(){return this.hasDepChanged()&&("function"===this.type?(e.runningMap=this,this.value=this.map(this.getState()),e.runningMap=void 0,this.firstRun&&(this.depCache=this.getDepsValue())):this.value=this.map.apply(this,_toConsumableArray(this.depCache))),this.firstRun&&(this.firstRun=!1),this.value}},{key:"destroy",value:function(){this.map=function(){},this.mapDepends=[],this.depCache=[],this.getState=function(){return{}},this.dependKeys={}}}],[{key:"resetMapDepParser",value:function(){e.getValueFromState=getValueFromObjByKeyPath}},{key:"setMapDepParser",value:function(t){e.getValueFromState=t}}]),e}();MapCache.getValueFromState=getValueFromObjByKeyPath;var currentStoreInstance,promiseMiddleware=function(){return function(e){return function(t){return isPromise(t.state)?t.state.then((function(r){return e(_objectSpread2({},t,{state:r}))})):e(t)}}},filterNonObjectMiddleware=function(){return function(e){return function(t){return isObj(t.state)?e(t):t.state}}},proxySign="$$proxy_sign_"+Math.random().toString(36).slice(2),addProxySign=function(e){return Object.defineProperty(e,proxySign,{value:!0})},createStore=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=_objectSpread2({},n),i={},u=r,s={},c=[].concat(_toConsumableArray(o),[promiseMiddleware,filterNonObjectMiddleware]),l={},f={},p={},d={},h={},y={},b={},g=function(e,t){var r;return a[e]?(r=_objectSpread2({},t,{state:a[e]}),delete a[e]):r=_objectSpread2({},t),r},m=function(e){return!!i[e]},v=function(e){if(!m(e))throw new Error("module: ".concat(e," is not valid!"))},_=function(e){return delete l[e]},j=function(e){return delete f[e]},O=function(e){delete p[e],delete d[e],h[e].forEach((function(e){return e.destroy()})),delete h[e]},S=function(e){h[e].forEach((function(e){return e.shouldCheckCache()}))},C=function(e){return delete y[e]},P=function(e){C(e),j(e),O(e),_(e)},w=function(){return e||(e=_toConsumableArray(new Set([].concat(_toConsumableArray(Object.keys(i)),_toConsumableArray(Object.keys(u)))))),e},M=function(e){return Array.isArray(s[e])&&s[e].forEach((function(e){return e()}))},D=function(e,t){if(t===f[e])return t;var r=ObjChangedKeys(i[e].state,t);return b[e]||(b[e]=r.keyHasChanged),0===r.updatedKeys.length?f[e]:(t[proxySign]&&(t=_objectSpread2({},t)),i[e].state=t,r.keyHasChanged&&(C(e),A(e)),S(e),M(e),f[e])},k=function(t,r){if(!isStoreModule(r))throw new Error("storeModule is illegal!");var n=m(t);return i=_objectSpread2({},i,_defineProperty({},t,g(t,r))),n?P(t):e=void 0,d[t]||(d[t]={},h[t]=[]),M(t),currentStoreInstance},E=function(t){delete i[t],delete u[t],e=void 0,P(t)},L=function(e){return E(e),M(e),currentStoreInstance},A=function(e){var t=i[e].state,r=b[e],n=void 0===r||!r;if(f[e]&&n)return f[e];var o={},a=function(r){t.hasOwnProperty(r)&&Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:function(){return MapCache.runningMap&&MapCache.runningMap.addDependKey(r),i[e].state[r]}})};for(var u in t)a(u);return addProxySign(o),f[e]=o,b[e]=!1,o},I=function(e){var t=i[e].maps;if(void 0!==t){if(p[e])return p[e];var r={},n=function(n){t.hasOwnProperty(n)&&Object.defineProperty(r,n,{enumerable:!0,configurable:!0,get:function(){return void 0===d[e][n]&&(d[e][n]=new MapCache((function(){return f[e]}),t[n]),h[e].push(d[e][n])),d[e][n].getValue()}})};for(var o in t)n(o);return addProxySign(r),p[e]=r,r}},R=function(e){if(l[e])return l[e];var t=_objectSpread2({},i[e].actions),r=N(e);return Object.keys(t).forEach((function(e){return t[e]=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return r.apply(void 0,[e].concat(n))}})),l[e]=t,t},x=function(e){if(v(e),y[e])return y[e];var t={state:A(e),actions:R(e),maps:I(e)};return y[e]=t,t},K=function(e){return v(e),i[e]},H=function(e){if(u[e])return u[e];throw new Error("getLazyModule: ".concat(e," is not exist"))},N=function(e){v(e);var t=function(t){var r=t.state;return D(e,r)},r={setState:t,getState:function(){return f[e]}},n=c.map((function(e){return e(r)})),o=compose.apply(void 0,_toConsumableArray(n))(t);return function(t){var r,n;v(e);for(var a=i[e],u=arguments.length,s=new Array(u>1?u-1:0),c=1;c<u;c++)s[c-1]=arguments[c];return n=(r=a.actions)[t].apply(r,s),o({moduleName:e,actionName:t,state:n})}},T=function(e,t){return s[e]||(s[e]=[]),s[e].push(t),function(){return s[e]=s[e].filter((function(e){return t!==e}))}},W=function(){Object.keys(i).forEach(E),a={},u={},s={},e=void 0,c=[]},F=function(){currentStoreInstance&&currentStoreInstance.destory(),Object.keys(t).forEach((function(e){k(e,t[e])}))};return F(),currentStoreInstance={getAllModuleName:w,getModule:x,removeModule:L,getOriginModule:K,getLazyModule:H,setModule:k,hasModule:m,subscribe:T,destory:W}},getStoreInstance=function(){return currentStoreInstance},Loading=function(){return null},createLoadModulesPromise=function(e,t){return e.map((function(e){return t.getLazyModule(e)()}))},connect=function(e,t,r){var n=function(n){function o(e,t){var n;_classCallCheck(this,o),(n=_possibleConstructorReturn(this,_getPrototypeOf(o).call(this,e,t))).injectModules={},n.unsubStore=function(){},n.state={storeStateChange:{},modulesHasLoaded:!1};var a=n.init(),i=a.store,u=a.integralModulesName;n.store=i,n.integralModulesName=u;var s=u.filter((function(e){return!i.hasModule(e)}));return n.unLoadedModules=s,n.state.modulesHasLoaded=!s.length,n.setStoreStateChanged=n.setStoreStateChanged.bind(_assertThisInitialized(n)),n.LoadingComponent=r||Loading,n}return _inherits(o,React__default.Component),_createClass(o,[{key:"setStoreStateChanged",value:function(){this.setState({storeStateChange:{}})}},{key:"componentDidMount",value:function(){var e=this,t=this.store,r=this.integralModulesName,n=this.unLoadedModules,o=this.setStoreStateChanged,a=this.state.modulesHasLoaded,i=r.map((function(e){return t.subscribe(e,o)}));if(this.unsubStore=function(){return i.forEach((function(e){return e()}))},!a){var u=createLoadModulesPromise(n,t);Promise.all(u).then((function(r){r.forEach((function(e,r){return t.setModule(n[r],e)})),e.setState({modulesHasLoaded:!0})})).catch((function(t){e.setState({modulesHasLoaded:!1})}))}}},{key:"componentWillUnmount",value:function(){this.unsubStore(),this.unsubStore=function(){}}},{key:"shouldComponentUpdate",value:function(e,t){var r=!isEqualWithDepthLimit(this.props,e,3),n=t.modulesHasLoaded!==this.state.modulesHasLoaded||t.storeStateChange!==this.state.storeStateChange;return r||n}},{key:"init",value:function(){var t=getStoreInstance();if(void 0===t)throw new Error("\n 请先创建store实例！\n Please create a store instance first.");var r=t.getAllModuleName();return{store:t,integralModulesName:e.filter((function(e){var t=r.includes(e);return t||console.warn("inject: ".concat(e," module is not exits!")),t}))}}},{key:"render",value:function(){var r=this.props,n=r.forwardedRef,o=_objectWithoutProperties(r,["forwardedRef"]),a=Object.assign({},o,{ref:n});if(!this.integralModulesName.length)return console.warn("modules: ".concat(e.join()," is not exits!")),console.warn("".concat(e.join()," 模块不存在!")),React__default.createElement(t,a);if(this.state.modulesHasLoaded){var i=this.store,u=this.integralModulesName;this.injectModules=u.reduce((function(e,t){return e[t]=i.getModule(t),e}),{})}Object.assign(a,this.injectModules);var s=React__default.createElement(t,a);return this.state.modulesHasLoaded?s:React__default.createElement(this.LoadingComponent,null)}}]),o}(),o=n;return React__default.forwardRef&&(o=React__default.forwardRef((function(e,t){return React__default.createElement(n,_extends({},e,{forwardedRef:t}))}))),hoistStatics(o,t)},Inject=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e,r){return connect(t,e,r)}};Inject.setLoadingComponent=function(e){return Loading=e};var createLoadModulesPromise$1=function(e,t){return e.map((function(e){return t.getLazyModule(e)()}))};function useInject(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0===t.length)throw new Error("useInject: moduleNames param is required!");var n=_slicedToArray(React.useState(t),2),o=n[0],a=n[1];isEqualWithDepthLimit(t.slice().sort(),o.slice().sort(),1)||a(t);var i=getStoreInstance(),u=i.getAllModuleName(),s=o.filter((function(e){return!u.includes(e)}));if(s.length)return console.error("useInject: ".concat(s.join()," module is not exits!")),[];var c=_slicedToArray(React.useState({}),2),l=(c[0],c[1]),f=o.filter((function(e){return!i.hasModule(e)})),p=!!f.length,d=React.useCallback((function(){return l({})}),[l]);return React.useEffect((function(){var e=o.map((function(e){return i.subscribe(e,d)}));return function(){return e.forEach((function(e){return e()}))}}),[o]),React.useEffect((function(){if(p){var e=createLoadModulesPromise$1(f,i);Promise.all(e).then((function(e){e.forEach((function(e,t){return i.setModule(f[t],e)})),l({})})).catch((function(e){l({})}))}}),[p]),p?(console.log("store module is loading."),[]):o.reduce((function(e,t){return e.push(i.getModule(t)),e}),[])}var setMapDepParser=MapCache.setMapDepParser,resetMapDepParser=MapCache.resetMapDepParser;exports.createStore=createStore,exports.inject=Inject,exports.resetMapDepParser=resetMapDepParser,exports.setMapDepParser=setMapDepParser,exports.useInject=useInject;
