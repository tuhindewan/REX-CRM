/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullscreenMode": function() { return /* binding */ FullscreenMode; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






function _createSuper(Derived) { return function () { var Super = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */

var FullscreenMode = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FullscreenMode, _Component);

  var _super = _createSuper(FullscreenMode);

  function FullscreenMode() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullscreenMode);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FullscreenMode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isSticky = false;
      this.sync(); // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
      // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
      // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
      // a consequence of the FullscreenMode setup

      if (document.body.classList.contains('sticky-menu')) {
        this.isSticky = true;
        document.body.classList.remove('sticky-menu');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isSticky) {
        document.body.classList.add('sticky-menu');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isActive !== prevProps.isActive) {
        this.sync();
      }
    }
  }, {
    key: "sync",
    value: function sync() {
      var isActive = this.props.isActive;

      if (isActive) {
        document.body.classList.add('is-fullscreen-mode');
      } else {
        document.body.classList.remove('is-fullscreen-mode');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FullscreenMode;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Component);
/* harmony default export */ __webpack_exports__["default"] = (FullscreenMode);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function useHTMLClass(className) {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var element = document && document.querySelector("html:not(.".concat(className, ")"));

    if (!element) {
      return;
    }

    element.classList.toggle(className);
    return function () {
      element.classList.toggle(className);
    };
  }, [className]);
}

function InterfaceSkeleton(_ref) {
  var footer = _ref.footer,
      header = _ref.header,
      sidebar = _ref.sidebar,
      leftSidebar = _ref.leftSidebar,
      content = _ref.content,
      actions = _ref.actions,
      labels = _ref.labels,
      className = _ref.className;
  useHTMLClass('interface-interface-skeleton__html-container');
  var defaultLabels = {
    /* translators: accessibility text for the top bar landmark region. */
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Header'),

    /* translators: accessibility text for the content landmark region. */
    body: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content'),

    /* translators: accessibility text for the left sidebar landmark region. */
    leftSidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Left sidebar'),

    /* translators: accessibility text for the settings landmark region. */
    sidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Settings'),

    /* translators: accessibility text for the publish landmark region. */
    actions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Publish'),

    /* translators: accessibility text for the footer landmark region. */
    footer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Footer')
  };

  var mergedLabels = _objectSpread({}, defaultLabels, {}, labels);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'interface-interface-skeleton')
  }, !!header && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__header",
    role: "region",
    "aria-label": mergedLabels.header,
    tabIndex: "-1"
  }, header), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__body"
  }, !!leftSidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__left-sidebar",
    role: "region",
    "aria-label": mergedLabels.leftSidebar,
    tabIndex: "-1"
  }, leftSidebar), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__content",
    role: "region",
    "aria-label": mergedLabels.body,
    tabIndex: "-1"
  }, content), !!sidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__sidebar",
    role: "region",
    "aria-label": mergedLabels.sidebar,
    tabIndex: "-1"
  }, sidebar), !!actions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__actions",
    role: "region",
    "aria-label": mergedLabels.actions,
    tabIndex: "-1"
  }, actions)), !!footer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "interface-interface-skeleton__footer",
    role: "region",
    "aria-label": mergedLabels.footer,
    tabIndex: "-1"
  }, footer));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.navigateRegions)(InterfaceSkeleton));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/components/Icons/CrossIcon.jsx":
/*!********************************************!*\
  !*** ./src/components/Icons/CrossIcon.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CrossIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function CrossIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "14",
    height: "13",
    viewBox: "0 0 14 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.5 1L1.5 12",
    stroke: "#A7A8B3",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1.5 1L12.5 12",
    stroke: "#A7A8B3",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
}

/***/ }),

/***/ "./src/components/Icons/MinusIcon.jsx":
/*!********************************************!*\
  !*** ./src/components/Icons/MinusIcon.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MinusIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function MinusIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "14",
    height: "2",
    viewBox: "0 0 14 2",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1.75 1H12.25",
    stroke: "#A7A8B3",
    "stroke-width": "1.7",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
}

/***/ }),

/***/ "./src/components/Icons/PlusIcon.jsx":
/*!*******************************************!*\
  !*** ./src/components/Icons/PlusIcon.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PlusIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function PlusIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_816_4898)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 3.75V14.25",
    stroke: "#A7A8B3",
    "stroke-width": "1.6",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3.75 9H14.25",
    stroke: "#A7A8B3",
    "stroke-width": "1.6",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_816_4898"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "18",
    height: "18",
    fill: "white"
  }))));
}

/***/ }),

/***/ "./src/components/Icons/QuestionIcon.jsx":
/*!***********************************************!*\
  !*** ./src/components/Icons/QuestionIcon.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ QuestionIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function QuestionIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "13",
    height: "14",
    fill: "none",
    viewBox: "0 0 13 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "13",
    height: "13",
    y: ".339",
    fill: "#686F7F",
    rx: "6.5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#fff",
    stroke: "#fff",
    "stroke-width": ".2",
    d: "M6.38 8.437h-.005a.492.492 0 01-.487-.497l.002-.245c0-.014 0-.029.002-.043.068-.715.543-1.154.925-1.506.13-.12.252-.233.356-.35.127-.144.312-.438.118-.792-.224-.41-.77-.525-1.194-.428-.443.101-.607.48-.665.696a.492.492 0 01-.95-.254c.196-.733.704-1.243 1.395-1.401.93-.212 1.866.163 2.277.915.342.625.248 1.36-.245 1.916-.137.154-.283.29-.425.42-.353.326-.574.544-.611.859l-.002.222a.491.491 0 01-.491.488zm-.001 1.474a.49.49 0 01-.347-.839.509.509 0 01.693 0 .488.488 0 01.146.348c0 .13-.052.255-.143.349a.502.502 0 01-.35.142z"
  }));
}

/***/ }),

/***/ "./src/components/Icons/SettingsIcon.jsx":
/*!***********************************************!*\
  !*** ./src/components/Icons/SettingsIcon.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SettingsIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function SettingsIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "21",
    fill: "none",
    viewBox: "0 0 20 21",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#A7A8B3",
    "clip-path": "url(#clip0_1443_4874)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2.458 7.522h.08a.584.584 0 00.54-.375.578.578 0 00-.125-.631l-.057-.057a1.836 1.836 0 010-2.592l.944-.943a1.834 1.834 0 012.591 0l.057.056A.598.598 0 007.5 2.56v-.08A1.834 1.834 0 019.332.647h1.335A1.834 1.834 0 0112.5 2.48v.08a.597.597 0 001.009.418l.053-.057a1.834 1.834 0 012.592 0l.947.944a1.836 1.836 0 010 2.592l-.057.056a.584.584 0 00-.115.647.577.577 0 00.534.362h.08a1.834 1.834 0 011.832 1.833v1.335a1.834 1.834 0 01-1.832 1.832h-.08a.584.584 0 00-.54.375.579.579 0 00.125.631l.056.057a1.836 1.836 0 010 2.592l-.943.943a1.834 1.834 0 01-2.592 0l-.057-.056a.586.586 0 00-.647-.116.576.576 0 00-.362.533v.08a1.834 1.834 0 01-1.835 1.836H9.332A1.834 1.834 0 017.5 17.565v-.08a.598.598 0 00-1.009-.418l-.057.056a1.834 1.834 0 01-2.59 0l-.945-.943a1.836 1.836 0 010-2.591l.057-.057a.585.585 0 00.115-.647.578.578 0 00-.534-.363h-.08A1.834 1.834 0 01.625 10.69V9.355a1.834 1.834 0 011.833-1.833zm-.583 3.168a.583.583 0 00.583.582h.08a1.848 1.848 0 011.301 3.143l-.056.057a.584.584 0 000 .824l.945.943a.582.582 0 00.823 0l.056-.057a1.849 1.849 0 013.143 1.302v.08a.583.583 0 00.582.583h1.335a.583.583 0 00.583-.582v-.08a1.844 1.844 0 013.143-1.302l.056.057a.583.583 0 00.824 0l.944-.943a.584.584 0 000-.825l-.057-.057a1.847 1.847 0 011.302-3.143h.08a.583.583 0 00.583-.582V9.355a.583.583 0 00-.582-.583h-.08A1.848 1.848 0 0116.16 5.63l.056-.057a.583.583 0 000-.824l-.944-.944a.582.582 0 00-.824 0l-.056.057A1.848 1.848 0 0111.25 2.56v-.08a.583.583 0 00-.582-.583H9.332a.583.583 0 00-.583.583v.08a1.848 1.848 0 01-3.143 1.302l-.056-.057a.582.582 0 00-.824 0l-.944.944a.583.583 0 000 .824l.057.057a1.848 1.848 0 01-1.302 3.142h-.08a.583.583 0 00-.583.583v1.335z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10 5.647a4.375 4.375 0 110 8.75 4.375 4.375 0 010-8.75zm0 7.5a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_1443_4874"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z",
    transform: "matrix(-1 0 0 1 20 .022)"
  }))));
}

/***/ }),

/***/ "./src/components/block-editor/index.js":
/*!**********************************************!*\
  !*** ./src/components/block-editor/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/format-library */ "@wordpress/format-library");
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_format_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar */ "./src/components/sidebar/index.js");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__);

/**
 * WordPress dependencies
 */
 // This shouldn't be necessary







/**
 * Internal dependencies
 */



function BlockEditor(_ref) {
  let {
    settings: _settings
  } = _ref;
  const location = window.location.hash;
  var locationArray = location.split('/');
  const lastIndex = locationArray.at(-1);
  const id = lastIndex.replace("#", '');
  const [blocks, updateBlocks] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    createInfoNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core/notices');
  const canUserCreateMedia = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const _canUserCreateMedia = select('core').canUser('create', 'media');
    return _canUserCreateMedia || _canUserCreateMedia !== false;
  }, []);
  const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!canUserCreateMedia) {
      return _settings;
    }
    return {
      ..._settings,
      mediaUpload(_ref2) {
        let {
          onError,
          ...rest
        } = _ref2;
        (0,_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__.uploadMedia)({
          wpAllowedMimeTypes: _settings.allowedMimeTypes,
          onError: _ref3 => {
            let {
              message
            } = _ref3;
            return onError(message);
          },
          ...rest
        });
      }
    };
  }, [canUserCreateMedia, _settings]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getFormData = async () => {
      if (id) {
        const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`);
        const resJson = await res.json();
        if (200 === resJson.code) {
          window.localStorage.setItem('getmrmblocks', resJson.data.form_body);
          const storedBlocks = window.localStorage.getItem('getmrmblocks');
          if (storedBlocks !== null && storedBlocks !== void 0 && storedBlocks.length) {
            handleUpdateBlocks(() => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.parse)(storedBlocks));
            // createInfoNotice( 'Blocks loaded', {
            // 	type: 'snackbar',
            // 	isDismissible: true,
            // } );
          }
        } else {
          window.localStorage.setItem('getmrmblocks', '');
        }
      } else {
        window.localStorage.setItem('getmrmblocks', '');
      }
    };
    getFormData();
  }, []);

  /**
   * Wrapper for updating blocks. Required as `onInput` callback passed to
   * `BlockEditorProvider` is now called with more than 1 argument. Therefore
   * attempting to setState directly via `updateBlocks` will trigger an error
   * in React.
   */
  function handleUpdateBlocks(blocks) {
    updateBlocks(blocks);
  }
  function handlePersistBlocks(newBlocks) {
    updateBlocks(newBlocks);
    window.localStorage.setItem('getmrmblocks', (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.serialize)(newBlocks));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "get-mrm-block-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__.ShortcutProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockEditorProvider, {
    value: blocks,
    onInput: handleUpdateBlocks,
    onChange: handlePersistBlocks,
    settings: settings
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"].InspectorFill, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockInspector, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-styles-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockEditorKeyboardShortcuts, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.WritingFlow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ObserveTyping, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockList, {
    className: "get-mrm-block-editor__block-list"
  })))))));
}
/* harmony default export */ __webpack_exports__["default"] = (BlockEditor);

/***/ }),

/***/ "./src/components/email-field-block/attributes.js":
/*!********************************************************!*\
  !*** ./src/components/email-field-block/attributes.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const attributes = {
  formLayout: {
    type: 'string',
    default: ''
  },
  firstName: {
    type: 'boolean',
    default: false
  },
  firstNameLabel: {
    type: 'string',
    default: 'First Name'
  },
  firstNamePlaceholder: {
    type: 'string',
    default: 'First Name'
  },
  isRequiredName: {
    type: 'boolean',
    default: false
  },
  lastName: {
    type: 'boolean',
    default: false
  },
  lastNameLabel: {
    type: 'string',
    default: 'Last Name'
  },
  lastNamePlaceholder: {
    type: 'string',
    default: 'Last Name'
  },
  isRequiredLastName: {
    type: 'boolean',
    default: false
  },
  emailLabel: {
    type: 'string',
    default: 'Email'
  },
  emailPlaceholder: {
    type: 'string',
    default: 'Email'
  },
  phone: {
    type: 'boolean',
    default: false
  },
  phoneLabel: {
    type: 'string',
    default: 'Phone'
  },
  phonePlaceholder: {
    type: 'string',
    default: 'Phone'
  },
  isRequiredPhone: {
    type: 'boolean',
    default: false
  },
  websiteUrl: {
    type: 'boolean',
    default: false
  },
  websiteUrlLabel: {
    type: 'string',
    default: 'Website Url'
  },
  websiteUrlPlaceholder: {
    type: 'string',
    default: 'Website Url'
  },
  isRequiredWebsiteUrl: {
    type: 'boolean',
    default: false
  },
  message: {
    type: 'boolean',
    default: false
  },
  messageLabel: {
    type: 'string',
    default: 'Message'
  },
  messagePlaceholder: {
    type: 'string',
    default: 'Write your message here...'
  },
  isRequiredMessage: {
    type: 'boolean',
    default: false
  },
  acceptance_checkbox: {
    type: 'boolean',
    default: false
  },
  acceptanceCheckboxText: {
    type: 'string',
    default: 'I have read and agree the Terms & Condition.'
  },
  isRequiredAcceptance: {
    type: 'boolean',
    default: false
  },
  registration_checkbox: {
    type: 'boolean',
    default: false
  },
  data_to_checkout: {
    type: 'boolean',
    default: false
  },
  registration_permission: {
    type: 'boolean',
    default: false
  },
  registrationPermissionCheckboxText: {
    type: 'string',
    default: 'I agree to be registered as a subscriber.'
  },
  inputFieldIcon: {
    type: 'boolean',
    default: true
  },
  fieldLabel: {
    type: 'boolean',
    default: false
  },
  requiredMark: {
    type: 'boolean',
    default: true
  },
  enable_recaptcha: {
    type: 'boolean',
    default: false
  },
  recaptcha_site_key: {
    type: 'string',
    default: ''
  },
  recaptcha_secret_key: {
    type: 'string',
    default: ''
  },
  recapcha_token: {
    type: 'string',
    default: ''
  },
  rowSpacing: {
    type: 'number',
    default: 12
  },
  labelTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group > label'
    }]
  },
  labelColor: {
    type: 'string',
    default: '#363B4E'
  },
  labelSpacing: {
    type: 'number',
    default: 7
  },
  inputTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group input[type=text], .wpfnl-optin-form .wpfnl-optin-form-group input[type=email]'
    }]
  },
  device: {
    type: 'string',
    default: 'md'
  },
  inputTextColor: {
    type: 'string',
    default: '#7A8B9A'
  },
  inputBgColor: {
    type: 'string',
    default: '#ffffff'
  },
  inputBorderRadius: {
    type: 'number',
    default: 5
  },
  inputPaddingTop: {
    type: 'integer',
    default: 11
  },
  inputPaddingRight: {
    type: 'integer',
    default: 40
  },
  inputPaddingBottom: {
    type: 'integer',
    default: 11
  },
  inputPaddingLeft: {
    type: 'integer',
    default: 14
  },
  inputBorderStyle: {
    type: 'string',
    default: 'solid'
  },
  inputBorderWidth: {
    type: 'number',
    default: 1
  },
  inputBorderColor: {
    type: 'string',
    default: '#DFE1E8'
  },
  buttonTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group .btn-default'
    }]
  },
  buttonTextColor: {
    type: 'string',
    default: ''
  },
  buttonBgColor: {
    type: 'string',
    default: ''
  },
  buttonHvrTextColor: {
    type: 'string',
    default: ''
  },
  buttonHvrBgColor: {
    type: 'string',
    default: ''
  },
  buttonBorderRadius: {
    type: 'number',
    default: 5
  },
  buttonPaddingTop: {
    type: 'integer',
    default: 12
  },
  buttonPaddingRight: {
    type: 'integer',
    default: 20
  },
  buttonPaddingBottom: {
    type: 'integer',
    default: 13
  },
  buttonPaddingLeft: {
    type: 'integer',
    default: 20
  },
  buttonBorderStyle: {
    type: 'string',
    default: 'none'
  },
  buttonBorderWidth: {
    type: 'number',
    default: 1
  },
  buttonBorderColor: {
    type: 'string',
    default: ''
  },
  buttonHvrBorderColor: {
    type: 'string',
    default: ''
  },
  buttonText: {
    type: 'string',
    default: 'Submit'
  },
  buttonAlign: {
    type: 'string',
    default: 'center'
  },
  postAction: {
    type: 'string',
    default: 'notification'
  },
  notification: {
    type: 'string',
    default: ''
  },
  redirect_action: {
    type: 'string',
    default: 'next_step'
  },
  redirect_url: {
    type: 'string',
    default: ''
  },
  adminEmail: {
    type: 'string',
    default: ''
  },
  emailSubject: {
    type: 'string',
    default: ''
  },
  customFieldTitle: {
    type: '',
    default: 'New Field'
  },
  customFieldSlug: {
    type: '',
    default: 'Field Slug'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/email-field-block/block.js":
/*!***************************************************!*\
  !*** ./src/components/email-field-block/block.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */




const {
  RawHTML,
  Component,
  useEffect
} = wp.element;
const {
  RichText
} = wp.blockEditor;

/**
 * Internal dependencies
 */

const mrmEmailField = _ref => {
  let {
    attributes: {
      formLayout,
      requiredMark,
      inputBgColor,
      inputTextColor,
      inputBorderRadius,
      emailLabel,
      emailPlaceholder,
      inputPaddingTop,
      inputPaddingRight,
      inputPaddingBottom,
      inputPaddingLeft,
      inputBorderStyle,
      inputBorderWidth,
      inputBorderColor,
      rowSpacing,
      labelColor,
      labelSpacing
    }
  } = _ref;
  let layout = formLayout;
  let fieldSpacing = {
    marginBottom: rowSpacing + 'px'
  };
  let labelStyle = {
    color: labelColor,
    marginBottom: labelSpacing + 'px'
  };
  let checkboxLabelColor = {
    color: labelColor
  };
  let inputStyle = {
    backgroundColor: inputBgColor,
    color: inputTextColor,
    borderRadius: inputBorderRadius + 'px',
    paddingTop: inputPaddingTop + 'px',
    paddingRight: inputPaddingRight + 'px',
    paddingBottom: inputPaddingBottom + 'px',
    paddingLeft: inputPaddingLeft + 'px',
    borderStyle: inputBorderStyle,
    borderWidth: inputBorderWidth + 'px',
    borderColor: inputBorderColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm mrm-email-form mrm-gutenberg-email-form-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `mrm-email-form-wrapper ${layout}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-email-form-group email",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrm-email",
    style: labelStyle
  }, emailLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(emailLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email', 'mrm'), requiredMark && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "email",
    name: "email",
    id: "mrm-email",
    placeholder: emailPlaceholder,
    required: true,
    style: inputStyle,
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
  })))))));
};
mrmEmailField.propTypes = {
  attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (mrmEmailField);

/***/ }),

/***/ "./src/components/email-field-block/edit.js":
/*!**************************************************!*\
  !*** ./src/components/email-field-block/edit.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const {
  withSelect,
  withDispatch,
  useSelect,
  useDispatch
} = wp.data;
const {
  Component,
  RawHTML,
  useEffect,
  useState
} = wp.element;
const {
  compose
} = wp.compose;
const {
  TextControl,
  SelectControl,
  RangeControl,
  TextareaControl,
  Button,
  Panel,
  ToggleControl,
  FormToggle,
  PanelBody,
  RadioGroup,
  RadioControl,
  Radio
} = wp.components;
const {
  InspectorControls,
  ColorPalette,
  RichText,
  useBlockProps,
  BlockControls,
  BlockAlignmentToolbar
} = wp.blockEditor;
const {
  useEntityProp
} = wp.coreData;
/**
 * Internal dependencies
 */

class Editor extends Component {
  static propTypes = {
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
  };
  onChangeOBProps = (key, value) => {
    this.props.setAttributes({
      adminEmail: {
        ...this.props.attributes.adminEmail,
        [key]: value
      }
    });
  };
  onChangeAttribute = (key, value) => {
    this.props.setAttributes({
      ...this.props.attributes,
      [key]: value
    });
  };
  onChangePadding = (type, attribute, value) => {
    this.props.setAttributes({
      [attribute]: value
    });
  };
  onChangeLayout = value => {
    this.props.setAttributes({
      formLayout: value
    });
  };
  formFields = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      firstName = attributes.firstName,
      firstNameLabel = attributes.firstNameLabel,
      firstNamePlaceholder = attributes.firstNamePlaceholder,
      isRequiredName = attributes.isRequiredName,
      lastName = attributes.lastName,
      lastNameLabel = attributes.lastNameLabel,
      lastNamePlaceholder = attributes.lastNamePlaceholder,
      isRequiredLastName = attributes.isRequiredLastName,
      emailLabel = attributes.emailLabel,
      emailPlaceholder = attributes.emailPlaceholder,
      phone = attributes.phone,
      phoneLabel = attributes.phoneLabel,
      phonePlaceholder = attributes.phonePlaceholder,
      isRequiredPhone = attributes.isRequiredPhone,
      requiredMark = attributes.requiredMark;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Email",
      className: "inner-pannel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Email Label",
      value: emailLabel,
      onChange: state => this.props.setAttributes({
        emailLabel: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Email Placeholder Text",
      value: emailPlaceholder,
      onChange: state => this.props.setAttributes({
        emailPlaceholder: state
      })
    }));
  };
  formStyle = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      labelTypography = attributes.labelTypography,
      device = attributes.device;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Form Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Row Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.rowSpacing,
      onChange: rowSpacing => this.onChangeAttribute('rowSpacing', rowSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: labelColor => this.onChangeAttribute('labelColor', labelColor),
      value: attributes.labelColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute('labelSpacing', labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }));
  };
  inputFieldStyle = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      inputTypography = attributes.inputTypography,
      device = attributes.device;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Input Field Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Text Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputTextColor => this.onChangeAttribute('inputTextColor', inputTextColor),
      value: attributes.inputTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBgColor => this.onChangeAttribute('inputBgColor', inputBgColor),
      value: attributes.inputBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderRadius,
      onChange: radius => this.onChangeAttribute('inputBorderRadius', radius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.inputBorderStyle,
      onChange: inputBorderStyle => this.onChangeAttribute('inputBorderStyle', inputBorderStyle),
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'solid',
        label: 'Solid'
      }, {
        value: 'Dashed',
        label: 'dashed'
      }, {
        value: 'Dotted',
        label: 'dotted'
      }, {
        value: 'Double',
        label: 'double'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderWidth,
      onChange: border => this.onChangeAttribute('inputBorderWidth', border),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBorderColor => this.onChangeAttribute('inputBorderColor', inputBorderColor),
      value: attributes.inputBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, this.formFields(), this.formStyle(), this.inputFieldStyle())));
  };
  render() {
    const {
      attributes: {
        emailLabel,
        emailPlaceholder,
        requiredMark,
        inputBgColor,
        inputTextColor,
        inputBorderRadius,
        inputPaddingTop,
        inputPaddingRight,
        inputPaddingBottom,
        inputPaddingLeft,
        inputBorderStyle,
        inputBorderWidth,
        inputBorderColor,
        rowSpacing,
        labelColor,
        labelSpacing
      }
    } = this.props;
    let fieldSpacing = {
      marginBottom: rowSpacing + 'px'
    };
    let labelStyle = {
      color: labelColor,
      marginBottom: labelSpacing + 'px'
    };
    let checkboxLabelColor = {
      color: labelColor
    };
    let inputStyle = {
      backgroundColor: inputBgColor,
      color: inputTextColor,
      borderRadius: inputBorderRadius + 'px',
      paddingTop: inputPaddingTop + 'px',
      paddingRight: inputPaddingRight + 'px',
      paddingBottom: inputPaddingBottom + 'px',
      paddingLeft: inputPaddingLeft + 'px',
      borderStyle: inputBorderStyle,
      borderWidth: inputBorderWidth + 'px',
      borderColor: inputBorderColor
    };

    // display the map selector
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm mrm-email-form mrm-gutenberg-email-form-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mrm-mrm-form-wrapper ${this.props.attributes.formLayout}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-mrm-form-group email",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-email",
      style: labelStyle
    }, emailLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(emailLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email', 'mrm'), requiredMark && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "email",
      name: "email",
      id: "mrm-email",
      placeholder: emailPlaceholder,
      required: true,
      style: inputStyle,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
    })))))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (compose([])(Editor));

/***/ }),

/***/ "./src/components/email-field-block/icon.js":
/*!**************************************************!*\
  !*** ./src/components/email-field-block/icon.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.pricing = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  id: "Layer_1",
  enableBackground: "new 0 0 48 48",
  height: "512",
  viewBox: "0 0 48 48",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m40.2 47.5h-32.4c-1 0-1.8-.8-1.8-1.8v-40.6c0-1 .8-1.8 1.8-1.8h32.4c1 0 1.8.8 1.8 1.8v40.5c0 1.1-.8 1.9-1.8 1.9zm-30.6-3.7h28.7v-36.8h-28.7z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m15.6 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m24 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c.1 1.1-.7 1.9-1.8 1.9z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 21.7h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8s-.8 1.8-1.9 1.8z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 32.8h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8 0 .9-.8 1.8-1.9 1.8z"
})))));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/components/first-name-block/attributes.js":
/*!*******************************************************!*\
  !*** ./src/components/first-name-block/attributes.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const attributes = {
  formLayout: {
    type: 'string',
    default: ''
  },
  firstName: {
    type: 'boolean',
    default: false
  },
  firstNameLabel: {
    type: 'string',
    default: 'First Name'
  },
  firstNamePlaceholder: {
    type: 'string',
    default: 'First Name'
  },
  isRequiredName: {
    type: 'boolean',
    default: false
  },
  inputFieldIcon: {
    type: 'boolean',
    default: true
  },
  fieldLabel: {
    type: 'boolean',
    default: false
  },
  requiredMark: {
    type: 'boolean',
    default: true
  },
  rowSpacing: {
    type: 'number',
    default: 12
  },
  labelTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group > label'
    }]
  },
  labelColor: {
    type: 'string',
    default: '#363B4E'
  },
  labelSpacing: {
    type: 'number',
    default: 7
  },
  inputTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group input[type=text], .wpfnl-optin-form .wpfnl-optin-form-group input[type=email]'
    }]
  },
  device: {
    type: 'string',
    default: 'md'
  },
  inputTextColor: {
    type: 'string',
    default: '#7A8B9A'
  },
  inputBgColor: {
    type: 'string',
    default: '#ffffff'
  },
  inputBorderRadius: {
    type: 'number',
    default: 5
  },
  inputPaddingTop: {
    type: 'integer',
    default: 11
  },
  inputPaddingRight: {
    type: 'integer',
    default: 40
  },
  inputPaddingBottom: {
    type: 'integer',
    default: 11
  },
  inputPaddingLeft: {
    type: 'integer',
    default: 14
  },
  inputBorderStyle: {
    type: 'string',
    default: 'solid'
  },
  inputBorderWidth: {
    type: 'number',
    default: 1
  },
  inputBorderColor: {
    type: 'string',
    default: '#DFE1E8'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/first-name-block/block.js":
/*!**************************************************!*\
  !*** ./src/components/first-name-block/block.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */




const {
  RawHTML,
  Component,
  useEffect
} = wp.element;
const {
  RichText
} = wp.blockEditor;

/**
 * Internal dependencies
 */

const mrmFirstName = _ref => {
  let {
    attributes: {
      formLayout,
      firstNameLabel,
      firstNamePlaceholder,
      isRequiredName,
      fieldLabel,
      requiredMark,
      inputBgColor,
      inputTextColor,
      inputBorderRadius,
      inputPaddingTop,
      inputPaddingRight,
      inputPaddingBottom,
      inputPaddingLeft,
      inputBorderStyle,
      inputBorderWidth,
      inputBorderColor,
      rowSpacing,
      labelColor,
      labelSpacing
    }
  } = _ref;
  let layout = formLayout;
  let fieldSpacing = {
    marginBottom: rowSpacing + 'px'
  };
  let labelStyle = {
    color: labelColor,
    marginBottom: labelSpacing + 'px'
  };
  let checkboxLabelColor = {
    color: labelColor
  };
  let inputStyle = {
    backgroundColor: inputBgColor,
    color: inputTextColor,
    borderRadius: inputBorderRadius + 'px',
    paddingTop: inputPaddingTop + 'px',
    paddingRight: inputPaddingRight + 'px',
    paddingBottom: inputPaddingBottom + 'px',
    paddingLeft: inputPaddingLeft + 'px',
    borderStyle: inputBorderStyle,
    borderWidth: inputBorderWidth + 'px',
    borderColor: inputBorderColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm mrm-optin-form mrm-gutenberg-optin-form-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `mrm-optin-form-wrapper ${layout}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-optin-form-group first-name",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrm-first-name",
    style: labelStyle
  }, firstNameLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(firstNameLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('First Name', 'mrm'), requiredMark && isRequiredName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "first_name",
    id: "mrm-first-name",
    placeholder: firstNamePlaceholder,
    required: isRequiredName,
    style: inputStyle
  })))))));
};
mrmFirstName.propTypes = {
  attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (mrmFirstName);

/***/ }),

/***/ "./src/components/first-name-block/edit.js":
/*!*************************************************!*\
  !*** ./src/components/first-name-block/edit.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const {
  withSelect,
  withDispatch,
  useSelect,
  useDispatch
} = wp.data;
const {
  Component,
  RawHTML,
  useEffect,
  useState
} = wp.element;
const {
  compose
} = wp.compose;
const {
  TextControl,
  SelectControl,
  RangeControl,
  TextareaControl,
  Button,
  Panel,
  ToggleControl,
  FormToggle,
  PanelBody,
  RadioGroup,
  RadioControl,
  Radio
} = wp.components;
const {
  InspectorControls,
  ColorPalette,
  RichText,
  useBlockProps,
  BlockControls,
  BlockAlignmentToolbar
} = wp.blockEditor;
const {
  useEntityProp
} = wp.coreData;
/**
 * Internal dependencies
 */

class Editor extends Component {
  static propTypes = {
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
  };
  onChangeAttribute = (key, value) => {
    this.props.setAttributes({
      ...this.props.attributes,
      [key]: value
    });
  };
  onChangePadding = (type, attribute, value) => {
    this.props.setAttributes({
      [attribute]: value
    });
  };
  formFields = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      firstName = attributes.firstName,
      firstNameLabel = attributes.firstNameLabel,
      firstNamePlaceholder = attributes.firstNamePlaceholder,
      isRequiredName = attributes.isRequiredName;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "First Name",
      className: "inner-pannel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "First Name Label",
      value: firstNameLabel,
      onChange: state => this.props.setAttributes({
        firstNameLabel: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "First Name Placeholder",
      value: firstNamePlaceholder,
      onChange: state => this.props.setAttributes({
        firstNamePlaceholder: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Is Required First Name",
      checked: isRequiredName,
      onChange: state => setAttributes({
        isRequiredName: state
      })
    }));
  };
  formStyle = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      labelTypography = attributes.labelTypography,
      device = attributes.device;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Form Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Row Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.rowSpacing,
      onChange: rowSpacing => this.onChangeAttribute('rowSpacing', rowSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: labelColor => this.onChangeAttribute('labelColor', labelColor),
      value: attributes.labelColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute('labelSpacing', labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }));
  };
  inputFieldStyle = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      inputTypography = attributes.inputTypography,
      device = attributes.device;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Input Field Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Text Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputTextColor => this.onChangeAttribute('inputTextColor', inputTextColor),
      value: attributes.inputTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBgColor => this.onChangeAttribute('inputBgColor', inputBgColor),
      value: attributes.inputBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderRadius,
      onChange: radius => this.onChangeAttribute('inputBorderRadius', radius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.inputBorderStyle,
      onChange: inputBorderStyle => this.onChangeAttribute('inputBorderStyle', inputBorderStyle),
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'solid',
        label: 'Solid'
      }, {
        value: 'Dashed',
        label: 'dashed'
      }, {
        value: 'Dotted',
        label: 'dotted'
      }, {
        value: 'Double',
        label: 'double'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderWidth,
      onChange: border => this.onChangeAttribute('inputBorderWidth', border),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBorderColor => this.onChangeAttribute('inputBorderColor', inputBorderColor),
      value: attributes.inputBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, this.formFields(), this.formStyle(), this.inputFieldStyle())));
  };
  render() {
    const {
      attributes: {
        firstNameLabel,
        firstNamePlaceholder,
        isRequiredName,
        fieldLabel,
        requiredMark,
        buttonAlign,
        inputBgColor,
        inputTextColor,
        inputBorderRadius,
        inputPaddingTop,
        inputPaddingRight,
        inputPaddingBottom,
        inputPaddingLeft,
        inputBorderStyle,
        inputBorderWidth,
        inputBorderColor,
        rowSpacing,
        labelColor,
        labelSpacing
      }
    } = this.props;
    let fieldSpacing = {
      marginBottom: rowSpacing + 'px'
    };
    let labelStyle = {
      color: labelColor,
      marginBottom: labelSpacing + 'px'
    };
    let checkboxLabelColor = {
      color: labelColor
    };
    let inputStyle = {
      backgroundColor: inputBgColor,
      color: inputTextColor,
      borderRadius: inputBorderRadius + 'px',
      paddingTop: inputPaddingTop + 'px',
      paddingRight: inputPaddingRight + 'px',
      paddingBottom: inputPaddingBottom + 'px',
      paddingLeft: inputPaddingLeft + 'px',
      borderStyle: inputBorderStyle,
      borderWidth: inputBorderWidth + 'px',
      borderColor: inputBorderColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm mrm-optin-form mrm-gutenberg-optin-form-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-mrm-form-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-mrm-form-group first-name",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-first-name",
      style: labelStyle
    }, firstNameLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(firstNameLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('First Name', 'mrm'), requiredMark && isRequiredName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "first_name",
      id: "mrm-first-name",
      placeholder: firstNamePlaceholder,
      required: isRequiredName,
      style: inputStyle
    })))))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (compose([])(Editor));

/***/ }),

/***/ "./src/components/first-name-block/icon.js":
/*!*************************************************!*\
  !*** ./src/components/first-name-block/icon.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.pricing = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  id: "Layer_1",
  enableBackground: "new 0 0 48 48",
  height: "512",
  viewBox: "0 0 48 48",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m40.2 47.5h-32.4c-1 0-1.8-.8-1.8-1.8v-40.6c0-1 .8-1.8 1.8-1.8h32.4c1 0 1.8.8 1.8 1.8v40.5c0 1.1-.8 1.9-1.8 1.9zm-30.6-3.7h28.7v-36.8h-28.7z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m15.6 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m24 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c.1 1.1-.7 1.9-1.8 1.9z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 21.7h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8s-.8 1.8-1.9 1.8z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 32.8h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8 0 .9-.8 1.8-1.9 1.8z"
})))));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

function Header() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-from-builder-header",
    role: "region",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form Header.', 'mrm'),
    tabIndex: "-1"
  });
}

/***/ }),

/***/ "./src/components/last-name-block/attributes.js":
/*!******************************************************!*\
  !*** ./src/components/last-name-block/attributes.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const attributes = {
  formLayout: {
    type: 'string',
    default: ''
  },
  firstName: {
    type: 'boolean',
    default: false
  },
  firstNameLabel: {
    type: 'string',
    default: 'First Name'
  },
  firstNamePlaceholder: {
    type: 'string',
    default: 'First Name'
  },
  isRequiredName: {
    type: 'boolean',
    default: false
  },
  lastName: {
    type: 'boolean',
    default: false
  },
  lastNameLabel: {
    type: 'string',
    default: 'Last Name'
  },
  lastNamePlaceholder: {
    type: 'string',
    default: 'Last Name'
  },
  isRequiredLastName: {
    type: 'boolean',
    default: false
  },
  emailLabel: {
    type: 'string',
    default: 'Email'
  },
  emailPlaceholder: {
    type: 'string',
    default: 'Email'
  },
  phone: {
    type: 'boolean',
    default: false
  },
  phoneLabel: {
    type: 'string',
    default: 'Phone'
  },
  phonePlaceholder: {
    type: 'string',
    default: 'Phone'
  },
  isRequiredPhone: {
    type: 'boolean',
    default: false
  },
  websiteUrl: {
    type: 'boolean',
    default: false
  },
  websiteUrlLabel: {
    type: 'string',
    default: 'Website Url'
  },
  websiteUrlPlaceholder: {
    type: 'string',
    default: 'Website Url'
  },
  isRequiredWebsiteUrl: {
    type: 'boolean',
    default: false
  },
  message: {
    type: 'boolean',
    default: false
  },
  messageLabel: {
    type: 'string',
    default: 'Message'
  },
  messagePlaceholder: {
    type: 'string',
    default: 'Write your message here...'
  },
  isRequiredMessage: {
    type: 'boolean',
    default: false
  },
  acceptance_checkbox: {
    type: 'boolean',
    default: false
  },
  acceptanceCheckboxText: {
    type: 'string',
    default: 'I have read and agree the Terms & Condition.'
  },
  isRequiredAcceptance: {
    type: 'boolean',
    default: false
  },
  registration_checkbox: {
    type: 'boolean',
    default: false
  },
  data_to_checkout: {
    type: 'boolean',
    default: false
  },
  registration_permission: {
    type: 'boolean',
    default: false
  },
  registrationPermissionCheckboxText: {
    type: 'string',
    default: 'I agree to be registered as a subscriber.'
  },
  inputFieldIcon: {
    type: 'boolean',
    default: true
  },
  fieldLabel: {
    type: 'boolean',
    default: false
  },
  requiredMark: {
    type: 'boolean',
    default: true
  },
  enable_recaptcha: {
    type: 'boolean',
    default: false
  },
  recaptcha_site_key: {
    type: 'string',
    default: ''
  },
  recaptcha_secret_key: {
    type: 'string',
    default: ''
  },
  recapcha_token: {
    type: 'string',
    default: ''
  },
  rowSpacing: {
    type: 'number',
    default: 12
  },
  labelTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group > label'
    }]
  },
  labelColor: {
    type: 'string',
    default: '#363B4E'
  },
  labelSpacing: {
    type: 'number',
    default: 7
  },
  inputTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group input[type=text], .wpfnl-optin-form .wpfnl-optin-form-group input[type=email]'
    }]
  },
  device: {
    type: 'string',
    default: 'md'
  },
  inputTextColor: {
    type: 'string',
    default: '#7A8B9A'
  },
  inputBgColor: {
    type: 'string',
    default: '#ffffff'
  },
  inputBorderRadius: {
    type: 'number',
    default: 5
  },
  inputPaddingTop: {
    type: 'integer',
    default: 11
  },
  inputPaddingRight: {
    type: 'integer',
    default: 40
  },
  inputPaddingBottom: {
    type: 'integer',
    default: 11
  },
  inputPaddingLeft: {
    type: 'integer',
    default: 14
  },
  inputBorderStyle: {
    type: 'string',
    default: 'solid'
  },
  inputBorderWidth: {
    type: 'number',
    default: 1
  },
  inputBorderColor: {
    type: 'string',
    default: '#DFE1E8'
  },
  buttonTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group .btn-default'
    }]
  },
  buttonTextColor: {
    type: 'string',
    default: ''
  },
  buttonBgColor: {
    type: 'string',
    default: ''
  },
  buttonHvrTextColor: {
    type: 'string',
    default: ''
  },
  buttonHvrBgColor: {
    type: 'string',
    default: ''
  },
  buttonBorderRadius: {
    type: 'number',
    default: 5
  },
  buttonPaddingTop: {
    type: 'integer',
    default: 12
  },
  buttonPaddingRight: {
    type: 'integer',
    default: 20
  },
  buttonPaddingBottom: {
    type: 'integer',
    default: 13
  },
  buttonPaddingLeft: {
    type: 'integer',
    default: 20
  },
  buttonBorderStyle: {
    type: 'string',
    default: 'none'
  },
  buttonBorderWidth: {
    type: 'number',
    default: 1
  },
  buttonBorderColor: {
    type: 'string',
    default: ''
  },
  buttonHvrBorderColor: {
    type: 'string',
    default: ''
  },
  buttonText: {
    type: 'string',
    default: 'Submit'
  },
  buttonAlign: {
    type: 'string',
    default: 'center'
  },
  postAction: {
    type: 'string',
    default: 'notification'
  },
  notification: {
    type: 'string',
    default: ''
  },
  redirect_action: {
    type: 'string',
    default: 'next_step'
  },
  redirect_url: {
    type: 'string',
    default: ''
  },
  adminEmail: {
    type: 'string',
    default: ''
  },
  emailSubject: {
    type: 'string',
    default: ''
  },
  customFieldTitle: {
    type: '',
    default: 'New Field'
  },
  customFieldSlug: {
    type: '',
    default: 'Field Slug'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/last-name-block/block.js":
/*!*************************************************!*\
  !*** ./src/components/last-name-block/block.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */




const {
  RawHTML,
  Component,
  useEffect
} = wp.element;
const {
  RichText
} = wp.blockEditor;

/**
 * Internal dependencies
 */

const mrmLastName = _ref => {
  let {
    attributes: {
      formLayout,
      lastNameLabel,
      lastNamePlaceholder,
      isRequiredLastName,
      fieldLabel,
      requiredMark,
      inputBgColor,
      inputTextColor,
      inputBorderRadius,
      inputPaddingTop,
      inputPaddingRight,
      inputPaddingBottom,
      inputPaddingLeft,
      inputBorderStyle,
      inputBorderWidth,
      inputBorderColor,
      rowSpacing,
      labelColor,
      labelSpacing
    }
  } = _ref;
  let layout = formLayout;
  let fieldSpacing = {
    marginBottom: rowSpacing + 'px'
  };
  let labelStyle = {
    color: labelColor,
    marginBottom: labelSpacing + 'px'
  };
  let checkboxLabelColor = {
    color: labelColor
  };
  let inputStyle = {
    backgroundColor: inputBgColor,
    color: inputTextColor,
    borderRadius: inputBorderRadius + 'px',
    paddingTop: inputPaddingTop + 'px',
    paddingRight: inputPaddingRight + 'px',
    paddingBottom: inputPaddingBottom + 'px',
    paddingLeft: inputPaddingLeft + 'px',
    borderStyle: inputBorderStyle,
    borderWidth: inputBorderWidth + 'px',
    borderColor: inputBorderColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm mrm-gutenberg-last-name-form-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `mrm-last-form-wrapper ${layout}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-optin-form-group last-name",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpfnl-optin-form-group last-name",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "wpfnl-last-name",
    style: labelStyle
  }, lastNameLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(lastNameLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Last Name', 'wpfnl'), requiredMark && isRequiredLastName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "last_name",
    id: "wpfnl-last-name",
    placeholder: lastNamePlaceholder,
    required: isRequiredLastName,
    style: inputStyle
  }))))))));
};
mrmLastName.propTypes = {
  attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (mrmLastName);

/***/ }),

/***/ "./src/components/last-name-block/edit.js":
/*!************************************************!*\
  !*** ./src/components/last-name-block/edit.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const {
  withSelect,
  withDispatch,
  useSelect,
  useDispatch
} = wp.data;
const {
  Component,
  RawHTML,
  useEffect,
  useState
} = wp.element;
const {
  compose
} = wp.compose;
const {
  TextControl,
  SelectControl,
  RangeControl,
  TextareaControl,
  Button,
  Panel,
  ToggleControl,
  FormToggle,
  PanelBody,
  RadioGroup,
  RadioControl,
  Radio
} = wp.components;
const {
  InspectorControls,
  ColorPalette,
  RichText,
  useBlockProps,
  BlockControls,
  BlockAlignmentToolbar
} = wp.blockEditor;
const {
  useEntityProp
} = wp.coreData;
/**
 * Internal dependencies
 */

class Editor extends Component {
  static propTypes = {
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
  };
  onChangeOBProps = (key, value) => {
    this.props.setAttributes({
      adminEmail: {
        ...this.props.attributes.adminEmail,
        [key]: value
      }
    });
    setTimeout(() => {
      this.loadCheckoutMarkup();
    }, 0);
  };
  onChangeAttribute = (key, value) => {
    this.props.setAttributes({
      ...this.props.attributes,
      [key]: value
    });
  };
  onChangePadding = (type, attribute, value) => {
    this.props.setAttributes({
      [attribute]: value
    });
  };
  onChangeLayout = value => {
    this.props.setAttributes({
      formLayout: value
    });
  };
  formFields = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      lastNameLabel = attributes.lastNameLabel,
      lastNamePlaceholder = attributes.lastNamePlaceholder,
      isRequiredLastName = attributes.isRequiredLastName;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Last Name",
      className: "inner-pannel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Last Name Label",
      value: lastNameLabel,
      onChange: state => this.props.setAttributes({
        lastNameLabel: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Last Name Placeholder Text",
      value: lastNamePlaceholder,
      onChange: state => this.props.setAttributes({
        lastNamePlaceholder: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Is Required Last Name",
      checked: isRequiredLastName,
      onChange: state => setAttributes({
        isRequiredLastName: state
      })
    }));
  };
  formStyle = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      labelTypography = attributes.labelTypography,
      device = attributes.device;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Form Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Row Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.rowSpacing,
      onChange: rowSpacing => this.onChangeAttribute('rowSpacing', rowSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: labelColor => this.onChangeAttribute('labelColor', labelColor),
      value: attributes.labelColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute('labelSpacing', labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }));
  };
  inputFieldStyle = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Input Field Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Text Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputTextColor => this.onChangeAttribute('inputTextColor', inputTextColor),
      value: attributes.inputTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBgColor => this.onChangeAttribute('inputBgColor', inputBgColor),
      value: attributes.inputBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderRadius,
      onChange: radius => this.onChangeAttribute('inputBorderRadius', radius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.inputBorderStyle,
      onChange: inputBorderStyle => this.onChangeAttribute('inputBorderStyle', inputBorderStyle),
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'solid',
        label: 'Solid'
      }, {
        value: 'Dashed',
        label: 'dashed'
      }, {
        value: 'Dotted',
        label: 'dotted'
      }, {
        value: 'Double',
        label: 'double'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderWidth,
      onChange: border => this.onChangeAttribute('inputBorderWidth', border),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBorderColor => this.onChangeAttribute('inputBorderColor', inputBorderColor),
      value: attributes.inputBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, this.formFields(), this.formStyle(), this.inputFieldStyle())));
  };
  render() {
    const {
      attributes: {
        lastNameLabel,
        lastNamePlaceholder,
        isRequiredLastName,
        requiredMark,
        inputBgColor,
        inputTextColor,
        inputBorderRadius,
        inputPaddingTop,
        inputPaddingRight,
        inputPaddingBottom,
        inputPaddingLeft,
        inputBorderStyle,
        inputBorderWidth,
        inputBorderColor,
        rowSpacing,
        labelColor,
        labelSpacing
      }
    } = this.props;
    let fieldSpacing = {
      marginBottom: rowSpacing + 'px'
    };
    let labelStyle = {
      color: labelColor,
      marginBottom: labelSpacing + 'px'
    };
    let checkboxLabelColor = {
      color: labelColor
    };
    let inputStyle = {
      backgroundColor: inputBgColor,
      color: inputTextColor,
      borderRadius: inputBorderRadius + 'px',
      paddingTop: inputPaddingTop + 'px',
      paddingRight: inputPaddingRight + 'px',
      paddingBottom: inputPaddingBottom + 'px',
      paddingLeft: inputPaddingLeft + 'px',
      borderStyle: inputBorderStyle,
      borderWidth: inputBorderWidth + 'px',
      borderColor: inputBorderColor
    };

    // display the map selector
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm mrm-gutenberg-last-name-form-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mrm-mrm-form-wrapper ${this.props.attributes.formLayout}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-mrm-form-group last-name",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-last-name",
      style: labelStyle
    }, lastNameLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(lastNameLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Last Name', 'mrm'), requiredMark && isRequiredLastName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "last_name",
      id: "mrm-last-name",
      placeholder: lastNamePlaceholder,
      required: isRequiredLastName,
      style: inputStyle
    })))))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (compose([])(Editor));

/***/ }),

/***/ "./src/components/last-name-block/icon.js":
/*!************************************************!*\
  !*** ./src/components/last-name-block/icon.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.pricing = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  id: "Layer_1",
  enableBackground: "new 0 0 48 48",
  height: "512",
  viewBox: "0 0 48 48",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m40.2 47.5h-32.4c-1 0-1.8-.8-1.8-1.8v-40.6c0-1 .8-1.8 1.8-1.8h32.4c1 0 1.8.8 1.8 1.8v40.5c0 1.1-.8 1.9-1.8 1.9zm-30.6-3.7h28.7v-36.8h-28.7z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m15.6 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m24 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c.1 1.1-.7 1.9-1.8 1.9z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 21.7h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8s-.8 1.8-1.9 1.8z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 32.8h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8 0 .9-.8 1.8-1.9 1.8z"
})))));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/components/mrm-button-block/attributes.js":
/*!*******************************************************!*\
  !*** ./src/components/mrm-button-block/attributes.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const attributes = {
  formLayout: {
    type: 'string',
    default: ''
  },
  firstName: {
    type: 'boolean',
    default: false
  },
  firstNameLabel: {
    type: 'string',
    default: 'First Name'
  },
  firstNamePlaceholder: {
    type: 'string',
    default: 'First Name'
  },
  isRequiredName: {
    type: 'boolean',
    default: false
  },
  lastName: {
    type: 'boolean',
    default: false
  },
  lastNameLabel: {
    type: 'string',
    default: 'Last Name'
  },
  lastNamePlaceholder: {
    type: 'string',
    default: 'Last Name'
  },
  isRequiredLastName: {
    type: 'boolean',
    default: false
  },
  emailLabel: {
    type: 'string',
    default: 'Email'
  },
  emailPlaceholder: {
    type: 'string',
    default: 'Email'
  },
  phone: {
    type: 'boolean',
    default: false
  },
  phoneLabel: {
    type: 'string',
    default: 'Phone'
  },
  phonePlaceholder: {
    type: 'string',
    default: 'Phone'
  },
  isRequiredPhone: {
    type: 'boolean',
    default: false
  },
  websiteUrl: {
    type: 'boolean',
    default: false
  },
  websiteUrlLabel: {
    type: 'string',
    default: 'Website Url'
  },
  websiteUrlPlaceholder: {
    type: 'string',
    default: 'Website Url'
  },
  isRequiredWebsiteUrl: {
    type: 'boolean',
    default: false
  },
  message: {
    type: 'boolean',
    default: false
  },
  messageLabel: {
    type: 'string',
    default: 'Message'
  },
  messagePlaceholder: {
    type: 'string',
    default: 'Write your message here...'
  },
  isRequiredMessage: {
    type: 'boolean',
    default: false
  },
  acceptance_checkbox: {
    type: 'boolean',
    default: false
  },
  acceptanceCheckboxText: {
    type: 'string',
    default: 'I have read and agree the Terms & Condition.'
  },
  isRequiredAcceptance: {
    type: 'boolean',
    default: false
  },
  registration_checkbox: {
    type: 'boolean',
    default: false
  },
  data_to_checkout: {
    type: 'boolean',
    default: false
  },
  registration_permission: {
    type: 'boolean',
    default: false
  },
  registrationPermissionCheckboxText: {
    type: 'string',
    default: 'I agree to be registered as a subscriber.'
  },
  inputFieldIcon: {
    type: 'boolean',
    default: true
  },
  fieldLabel: {
    type: 'boolean',
    default: false
  },
  requiredMark: {
    type: 'boolean',
    default: true
  },
  enable_recaptcha: {
    type: 'boolean',
    default: false
  },
  recaptcha_site_key: {
    type: 'string',
    default: ''
  },
  recaptcha_secret_key: {
    type: 'string',
    default: ''
  },
  recapcha_token: {
    type: 'string',
    default: ''
  },
  rowSpacing: {
    type: 'number',
    default: 12
  },
  labelTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group > label'
    }]
  },
  labelColor: {
    type: 'string',
    default: '#363B4E'
  },
  labelSpacing: {
    type: 'number',
    default: 7
  },
  inputTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group input[type=text], .wpfnl-optin-form .wpfnl-optin-form-group input[type=email]'
    }]
  },
  device: {
    type: 'string',
    default: 'md'
  },
  inputTextColor: {
    type: 'string',
    default: '#7A8B9A'
  },
  inputBgColor: {
    type: 'string',
    default: '#ffffff'
  },
  inputBorderRadius: {
    type: 'number',
    default: 5
  },
  inputPaddingTop: {
    type: 'integer',
    default: 11
  },
  inputPaddingRight: {
    type: 'integer',
    default: 40
  },
  inputPaddingBottom: {
    type: 'integer',
    default: 11
  },
  inputPaddingLeft: {
    type: 'integer',
    default: 14
  },
  inputBorderStyle: {
    type: 'string',
    default: 'solid'
  },
  inputBorderWidth: {
    type: 'number',
    default: 1
  },
  inputBorderColor: {
    type: 'string',
    default: '#DFE1E8'
  },
  buttonTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group .btn-default'
    }]
  },
  buttonTextColor: {
    type: 'string',
    default: ''
  },
  buttonBgColor: {
    type: 'string',
    default: ''
  },
  buttonHvrTextColor: {
    type: 'string',
    default: ''
  },
  buttonHvrBgColor: {
    type: 'string',
    default: ''
  },
  buttonBorderRadius: {
    type: 'number',
    default: 5
  },
  buttonPaddingTop: {
    type: 'integer',
    default: 12
  },
  buttonPaddingRight: {
    type: 'integer',
    default: 20
  },
  buttonPaddingBottom: {
    type: 'integer',
    default: 13
  },
  buttonPaddingLeft: {
    type: 'integer',
    default: 20
  },
  buttonBorderStyle: {
    type: 'string',
    default: 'none'
  },
  buttonBorderWidth: {
    type: 'number',
    default: 1
  },
  buttonBorderColor: {
    type: 'string',
    default: ''
  },
  buttonHvrBorderColor: {
    type: 'string',
    default: ''
  },
  buttonText: {
    type: 'string',
    default: 'Submit'
  },
  buttonAlign: {
    type: 'string',
    default: 'center'
  },
  postAction: {
    type: 'string',
    default: 'notification'
  },
  notification: {
    type: 'string',
    default: ''
  },
  redirect_action: {
    type: 'string',
    default: 'next_step'
  },
  redirect_url: {
    type: 'string',
    default: ''
  },
  adminEmail: {
    type: 'string',
    default: ''
  },
  emailSubject: {
    type: 'string',
    default: ''
  },
  customFieldTitle: {
    type: '',
    default: 'New Field'
  },
  customFieldSlug: {
    type: '',
    default: 'Field Slug'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/mrm-button-block/block.js":
/*!**************************************************!*\
  !*** ./src/components/mrm-button-block/block.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */




const {
  RawHTML,
  Component,
  useEffect
} = wp.element;
const {
  RichText
} = wp.blockEditor;

/**
 * Internal dependencies
 */

const mrmButton = _ref => {
  let {
    attributes: {
      formLayout,
      buttonText,
      rowSpacing,
      buttonTextColor,
      buttonBgColor,
      buttonBorderRadius,
      buttonPaddingTop,
      buttonPaddingRight,
      buttonPaddingBottom,
      buttonPaddingLeft,
      buttonBorderStyle,
      buttonBorderWidth,
      buttonBorderColor
    }
  } = _ref;
  let layout = formLayout;
  let fieldSpacing = {
    marginBottom: rowSpacing + 'px'
  };
  let buttonStyle = {
    backgroundColor: buttonBgColor,
    color: buttonTextColor + ' !important',
    borderRadius: buttonBorderRadius + 'px',
    paddingTop: buttonPaddingTop + 'px',
    paddingRight: buttonPaddingRight + 'px',
    paddingBottom: buttonPaddingBottom + 'px',
    paddingLeft: buttonPaddingLeft + 'px',
    borderStyle: buttonBorderStyle,
    borderWidth: buttonBorderWidth + 'px',
    borderColor: buttonBorderColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm mrm-gutenberg-mrm-form-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group submit",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    className: "mrm-submit-button",
    tagName: "button",
    type: "submit",
    style: buttonStyle,
    value: buttonText
  })))));
};
mrmButton.propTypes = {
  attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (mrmButton);

/***/ }),

/***/ "./src/components/mrm-button-block/edit.js":
/*!*************************************************!*\
  !*** ./src/components/mrm-button-block/edit.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const {
  withSelect,
  withDispatch,
  useSelect,
  useDispatch
} = wp.data;
const {
  Component,
  RawHTML,
  useEffect,
  useState
} = wp.element;
const {
  compose
} = wp.compose;
const {
  TextControl,
  SelectControl,
  RangeControl,
  TextareaControl,
  Button,
  Panel,
  ToggleControl,
  FormToggle,
  PanelBody,
  RadioGroup,
  RadioControl,
  Radio
} = wp.components;
const {
  InspectorControls,
  ColorPalette,
  RichText,
  useBlockProps,
  BlockControls,
  BlockAlignmentToolbar
} = wp.blockEditor;
const {
  useEntityProp
} = wp.coreData;
/**
 * Internal dependencies
 */

class Editor extends Component {
  static propTypes = {
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
  };
  onChangeAttribute = (key, value) => {
    this.props.setAttributes({
      ...this.props.attributes,
      [key]: value
    });
  };
  onChangePadding = (type, attribute, value) => {
    this.props.setAttributes({
      [attribute]: value
    });
  };
  buttonText = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Button Text",
      className: "inner-pannel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Button Text",
      value: attributes.buttonText,
      onChange: state => setAttributes({
        buttonText: state
      })
    }));
  };
  buttonStyle = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Button Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Text Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: buttonTextColor => this.onChangeAttribute('buttonTextColor', buttonTextColor),
      value: attributes.buttonTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: buttonBgColor => this.onChangeAttribute('buttonBgColor', buttonBgColor),
      value: attributes.buttonBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.buttonBorderRadius,
      onChange: btnRadius => this.onChangeAttribute('buttonBorderRadius', btnRadius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.buttonBorderStyle,
      onChange: buttonBorderStyle => this.onChangeAttribute('buttonBorderStyle', buttonBorderStyle),
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'solid',
        label: 'Solid'
      }, {
        value: 'Dashed',
        label: 'dashed'
      }, {
        value: 'Dotted',
        label: 'dotted'
      }, {
        value: 'Double',
        label: 'double'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.buttonBorderWidth,
      onChange: btnBorder => this.onChangeAttribute('buttonBorderWidth', btnBorder),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: buttonBorderColor => this.onChangeAttribute('buttonBorderColor', buttonBorderColor),
      value: attributes.buttonBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, this.buttonText(), this.buttonStyle())));
  };
  render() {
    const {
      attributes: {
        buttonText,
        buttonAlign,
        rowSpacing,
        buttonTextColor,
        buttonBgColor,
        buttonBorderRadius,
        buttonPaddingTop,
        buttonPaddingRight,
        buttonPaddingBottom,
        buttonPaddingLeft,
        buttonBorderStyle,
        buttonBorderWidth,
        buttonBorderColor
      }
    } = this.props;
    let fieldSpacing = {
      marginBottom: rowSpacing + 'px'
    };
    let buttonStyle = {
      backgroundColor: buttonBgColor,
      color: buttonTextColor,
      borderRadius: buttonBorderRadius + 'px',
      paddingTop: buttonPaddingTop + 'px',
      paddingRight: buttonPaddingRight + 'px',
      paddingBottom: buttonPaddingBottom + 'px',
      paddingLeft: buttonPaddingLeft + 'px',
      borderStyle: buttonBorderStyle,
      borderWidth: buttonBorderWidth + 'px',
      borderColor: buttonBorderColor
    };

    // display the map selector
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm mrm-gutenberg-mrm-form-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-mrm-form-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-mrm-form-group submit",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAlignmentToolbar, {
      value: buttonAlign,
      onChange: newAlign => this.props.setAttributes({
        buttonAlign: newAlign
      }),
      controls: ["left", "center", "right"]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      className: "mrm-submit-button",
      tagName: "button",
      type: "button",
      value: buttonText,
      style: buttonStyle,
      onChange: content => this.props.setAttributes({
        buttonText: content
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Submit', 'mrm')
    })))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (compose([])(Editor));

/***/ }),

/***/ "./src/components/mrm-button-block/icon.js":
/*!*************************************************!*\
  !*** ./src/components/mrm-button-block/icon.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.pricing = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  id: "Layer_1",
  enableBackground: "new 0 0 48 48",
  height: "512",
  viewBox: "0 0 48 48",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m40.2 47.5h-32.4c-1 0-1.8-.8-1.8-1.8v-40.6c0-1 .8-1.8 1.8-1.8h32.4c1 0 1.8.8 1.8 1.8v40.5c0 1.1-.8 1.9-1.8 1.9zm-30.6-3.7h28.7v-36.8h-28.7z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m15.6 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m24 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c.1 1.1-.7 1.9-1.8 1.9z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 21.7h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8s-.8 1.8-1.9 1.8z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 32.8h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8 0 .9-.8 1.8-1.9 1.8z"
})))));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/components/mrm-custom-field/attributes.js":
/*!*******************************************************!*\
  !*** ./src/components/mrm-custom-field/attributes.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const attributes = {
  field_type: {
    type: 'string',
    default: 'text'
  },
  field_name: {
    type: 'string',
    default: ''
  },
  field_label: {
    type: 'string',
    default: ''
  },
  field_require: {
    type: 'boolean',
    default: false
  },
  create_button: {
    type: 'boolean',
    default: true
  },
  field_slug: {
    type: 'string',
    default: ''
  },
  selectOption: {
    type: 'array',
    default: [
      // {
      //     value: '',
      //     label: '--Select--'
      // },
    ]
  },
  select_option_name: {
    type: 'string',
    default: ''
  },
  select_option_name_slug: {
    type: 'string',
    default: ''
  },
  radioOption: {
    type: 'array',
    default: []
  },
  radio_option_name: {
    type: 'string',
    default: ''
  },
  formLayout: {
    type: 'string',
    default: ''
  },
  firstName: {
    type: 'boolean',
    default: false
  },
  firstNameLabel: {
    type: 'string',
    default: 'First Name'
  },
  firstNamePlaceholder: {
    type: 'string',
    default: 'First Name'
  },
  isRequiredName: {
    type: 'boolean',
    default: false
  },
  inputFieldIcon: {
    type: 'boolean',
    default: true
  },
  fieldLabel: {
    type: 'boolean',
    default: false
  },
  requiredMark: {
    type: 'boolean',
    default: true
  },
  rowSpacing: {
    type: 'number',
    default: 12
  },
  labelTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group > label'
    }]
  },
  labelColor: {
    type: 'string',
    default: '#363B4E'
  },
  labelSpacing: {
    type: 'number',
    default: 7
  },
  inputTypography: {
    type: 'object',
    default: {},
    style: [{
      selector: '.wpfnl-optin-form .wpfnl-optin-form-group input[type=text], .wpfnl-optin-form .wpfnl-optin-form-group input[type=email]'
    }]
  },
  device: {
    type: 'string',
    default: 'md'
  },
  inputTextColor: {
    type: 'string',
    default: '#7A8B9A'
  },
  inputBgColor: {
    type: 'string',
    default: '#ffffff'
  },
  inputBorderRadius: {
    type: 'number',
    default: 5
  },
  inputPaddingTop: {
    type: 'integer',
    default: 11
  },
  inputPaddingRight: {
    type: 'integer',
    default: 40
  },
  inputPaddingBottom: {
    type: 'integer',
    default: 11
  },
  inputPaddingLeft: {
    type: 'integer',
    default: 14
  },
  inputBorderStyle: {
    type: 'string',
    default: 'solid'
  },
  inputBorderWidth: {
    type: 'number',
    default: 1
  },
  inputBorderColor: {
    type: 'string',
    default: '#DFE1E8'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/mrm-custom-field/block.js":
/*!**************************************************!*\
  !*** ./src/components/mrm-custom-field/block.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

/**
 * External dependencies
 */




const {
  RawHTML,
  Component,
  useEffect
} = wp.element;
const {
  RichText
} = wp.blockEditor;

/**
 * Internal dependencies
 */

const mrmCustomField = _ref => {
  let {
    attributes: {
      field_type,
      field_name,
      field_label,
      field_require,
      selectOption,
      select_option_name_slug,
      radioOption,
      field_slug,
      rowSpacing,
      labelColor,
      labelSpacing,
      inputBgColor,
      inputTextColor,
      inputBorderRadius,
      inputPaddingTop,
      inputPaddingRight,
      inputPaddingBottom,
      inputPaddingLeft,
      inputBorderStyle,
      inputBorderWidth,
      inputBorderColor
    }
  } = _ref;
  let fieldSpacing = {
    marginBottom: rowSpacing + 'px'
  };
  let labelStyle = {
    color: labelColor,
    marginBottom: labelSpacing + 'px'
  };
  let checkboxLabelColor = {
    color: labelColor
  };
  let inputStyle = {
    backgroundColor: inputBgColor,
    color: inputTextColor,
    borderRadius: inputBorderRadius + 'px',
    paddingTop: inputPaddingTop + 'px',
    paddingRight: inputPaddingRight + 'px',
    paddingBottom: inputPaddingBottom + 'px',
    paddingLeft: inputPaddingLeft + 'px',
    borderStyle: inputBorderStyle,
    borderWidth: inputBorderWidth + 'px',
    borderColor: inputBorderColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm mrm-gutenberg-form-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-wrapper"
  }, field_type == 'text' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group text",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrm-email",
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : '', field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: field_name,
    id: field_name,
    placeholder: field_name,
    required: field_require,
    style: inputStyle
  })))), field_type == 'textarea' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-input-group",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_slug,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    id: field_slug,
    name: field_slug,
    placeholder: field_name,
    required: field_require,
    rows: "4",
    cols: "50",
    style: inputStyle
  })), field_type == 'date' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group date",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrm-date",
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : '', field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "date",
    name: field_name,
    id: field_name,
    placeholder: field_name,
    required: field_require,
    style: inputStyle
  })))), field_type == 'radio' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group radio"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `mrm-${field_label}`,
    className: "mrm-radio-group"
  }, radioOption.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      id: option.value,
      name: option.value,
      required: field_require,
      style: inputStyle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: field_slug,
      style: labelStyle
    }, option.label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(option.label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")));
  }))), field_type == 'checkbox' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `mrm-${field_label}`,
    className: "mrm-checkbox-group",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: field_slug,
    name: field_slug,
    required: field_require,
    style: inputStyle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_slug,
    style: checkboxLabelColor
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*"))), field_type == 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `mrm-${field_label}`,
    className: "mrm-input-group",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_slug,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: field_slug,
    id: field_slug,
    style: inputStyle
  }, selectOption.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: option.value
    }, option.label);
  })))))));
};
mrmCustomField.propTypes = {
  attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (mrmCustomField);

/***/ }),

/***/ "./src/components/mrm-custom-field/edit.js":
/*!*************************************************!*\
  !*** ./src/components/mrm-custom-field/edit.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const {
  withSelect,
  withDispatch,
  useSelect,
  useDispatch
} = wp.data;
const {
  Component,
  RawHTML,
  useEffect,
  useState
} = wp.element;
const {
  compose
} = wp.compose;
const {
  TextControl,
  SelectControl,
  RangeControl,
  TextareaControl,
  Button,
  Panel,
  ToggleControl,
  FormToggle,
  PanelBody,
  RadioGroup,
  RadioControl,
  Radio
} = wp.components;
const {
  InspectorControls,
  ColorPalette,
  RichText,
  useBlockProps,
  BlockControls,
  BlockAlignmentToolbar
} = wp.blockEditor;
const {
  useEntityProp
} = wp.coreData;
/**
 * Internal dependencies
 */

class Editor extends Component {
  static propTypes = {
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
  };
  onChangeAttribute = (key, value) => {
    this.props.setAttributes({
      ...this.props.attributes,
      [key]: value
    });
  };
  onChangePadding = (type, attribute, value) => {
    this.props.setAttributes({
      [attribute]: value
    });
  };
  selectOptionList = () => {};
  addNewRadioOption = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    const slug_name = this.makeSlug(attributes.field_name);
    let defaultOption = {
      value: slug_name,
      label: 'label'
    };
    if ('radio' === attributes.field_type) {
      attributes.radioOption.push(defaultOption);
      setAttributes(attributes.radioOption);
    }
  };
  customFields = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Custom Field",
      className: "inner-pannel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Field Type",
      value: attributes.field_type,
      onChange: select_type => this.onChangeAttribute('field_type', select_type),
      options: [{
        value: 'text',
        label: 'Text'
      }, {
        value: 'textarea',
        label: 'Text Area'
      }, {
        value: 'radio',
        label: 'Radio Button'
      }, {
        value: 'checkbox',
        label: 'Checkbox'
      }, {
        value: 'select',
        label: 'Select'
      }, {
        value: 'date',
        label: 'Date'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Field Name",
      value: attributes.field_name,
      onChange: state => setAttributes({
        field_name: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: " Field Label",
      value: attributes.field_label,
      onChange: state => setAttributes({
        field_label: state
      })
    }), attributes.field_type == 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Option Name"
      // value={ attributes.select_option_name }
      ,
      onChange: state => setAttributes({
        select_option_name: state
      })
    }), attributes.field_type == 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        this.addNewOption();
      },
      className: "components-button is-primary is-default mrm-action-button",
      role: "button"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add New Option')), attributes.field_type == 'select' && attributes.selectOption.map((option, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        value: option.value
        // onChange={ (state ) => setAttributes({ value: state }) }
        ,
        onChange: val => this.onChangeOptionField(option, val, index)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        key: `mrm-delete-button-${index}`,
        onClick: val => this.deleteOption(option, val, index),
        className: "button  mrm-action-button",
        title: "Delete Option",
        role: "button"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('x')));
    }), attributes.field_type == 'radio' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        this.addNewRadioOption();
      },
      className: "components-button is-primary is-default mrm-action-button",
      role: "button"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add New')), attributes.field_type == 'radio' && attributes.radioOption.map((option, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        value: option.label
        // onChange={ (state ) => setAttributes({ value: state }) }
        ,
        onChange: val => this.onChangeRadioLabelField(option, val, index)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        key: `mrm-delete-button-${index}`,
        onClick: val => this.deleteRadioButtonOption(option, val, index),
        className: "button  mrm-action-button",
        title: "Delete Option",
        role: "button"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('x')));
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Require",
      checked: attributes.field_require,
      onChange: state => setAttributes({
        field_require: state
      })
    }));
  };
  onChangeRadioValueField = (option, val, index) => {
    const {
      setAttributes,
      attributes: {
        radioOption
      }
    } = this.props;
    option.value = val;
    const modifiedOption = radioOption.map((value, thisIndex) => {
      if (index === thisIndex) {
        value = {
          ...radioOption[index],
          ...option
        };
      }
      return value;
    });
    setAttributes({
      radioOption: modifiedOption
    });
  };
  onChangeRadioLabelField = (option, val, index) => {
    const {
      setAttributes,
      attributes: {
        radioOption
      }
    } = this.props;
    option.label = val;
    const modifiedOption = radioOption.map((value, thisIndex) => {
      if (index === thisIndex) {
        value = {
          ...radioOption[index],
          ...option
        };
      }
      return value;
    });
    setAttributes({
      radioOption: modifiedOption
    });
  };
  onChangeOptionField = (option, val, index) => {
    const {
      setAttributes,
      attributes: {
        selectOption
      }
    } = this.props;
    option.label = val;
    option.value = val;
    const modifiedOption = selectOption.map((value, thisIndex) => {
      if (index === thisIndex) {
        value = {
          ...selectOption[index],
          ...option
        };
      }
      return value;
    });
    setAttributes({
      selectOption: modifiedOption
    });
  };
  deleteOption = (option, val, index) => {
    const {
      setAttributes,
      attributes
    } = this.props;
    if (index > -1) {
      // only splice array when item is found
      attributes.selectOption.splice(index, 1); // 2nd parameter means remove one item only
      setAttributes(attributes.selectOption);
    }
  };
  deleteRadioButtonOption = (option, val, index) => {
    const {
      setAttributes,
      attributes
    } = this.props;
    if (index > -1) {
      // only splice array when item is found
      attributes.radioOption.splice(index, 1); // 2nd parameter means remove one item only
      setAttributes(attributes.radioOption);
    }
  };
  addNewOption = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    const slug_name = this.makeSlug(attributes.select_option_name);
    let defaultOption = {
      value: slug_name,
      label: attributes.select_option_name
    };
    if ('select' === attributes.field_type) {
      attributes.selectOption.push(defaultOption);
      setAttributes(attributes.selectOption);
    }
  };
  formStyle = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Form Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Row Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.rowSpacing,
      onChange: rowSpacing => this.onChangeAttribute('rowSpacing', rowSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: labelColor => this.onChangeAttribute('labelColor', labelColor),
      value: attributes.labelColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute('labelSpacing', labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }));
  };
  inputFieldStyle = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      inputTypography = attributes.inputTypography,
      device = attributes.device;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Input Field Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Text Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputTextColor => this.onChangeAttribute('inputTextColor', inputTextColor),
      value: attributes.inputTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBgColor => this.onChangeAttribute('inputBgColor', inputBgColor),
      value: attributes.inputBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderRadius,
      onChange: radius => this.onChangeAttribute('inputBorderRadius', radius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.inputBorderStyle,
      onChange: inputBorderStyle => this.onChangeAttribute('inputBorderStyle', inputBorderStyle),
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'solid',
        label: 'Solid'
      }, {
        value: 'Dashed',
        label: 'dashed'
      }, {
        value: 'Dotted',
        label: 'dotted'
      }, {
        value: 'Double',
        label: 'double'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderWidth,
      onChange: border => this.onChangeAttribute('inputBorderWidth', border),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBorderColor => this.onChangeAttribute('inputBorderColor', inputBorderColor),
      value: attributes.inputBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, this.customFields(), this.formStyle(), this.inputFieldStyle())));
  };
  /**
   * Render Text Field
   * @param attributes
   * @returns {JSX.Element}
   */
  renderTextField = attributes => {
    const slug_name = this.makeSlug(attributes.field_name);
    this.props.setAttributes({
      field_slug: slug_name
    });
    let fieldSpacing = {
      marginBottom: attributes.rowSpacing + 'px'
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + 'px'
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + 'px',
      paddingTop: attributes.inputPaddingTop + 'px',
      paddingRight: attributes.inputPaddingRight + 'px',
      paddingBottom: attributes.inputPaddingBottom + 'px',
      paddingLeft: attributes.inputPaddingLeft + 'px',
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + 'px',
      borderColor: attributes.inputBorderColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-text-field",
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: attributes.field_slug,
      id: attributes.field_slug,
      placeholder: attributes.field_name,
      required: attributes.field_require,
      style: inputStyle
    })))));
  };
  /**
   * Render Textarea Field
   * @param attributes
   * @returns {JSX.Element}
   */
  renderTextareaField = attributes => {
    const slug_name = this.makeSlug(attributes.field_name);
    this.props.setAttributes({
      field_slug: slug_name
    });
    let fieldSpacing = {
      marginBottom: attributes.rowSpacing + 'px'
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + 'px'
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + 'px',
      paddingTop: attributes.inputPaddingTop + 'px',
      paddingRight: attributes.inputPaddingRight + 'px',
      paddingBottom: attributes.inputPaddingBottom + 'px',
      paddingLeft: attributes.inputPaddingLeft + 'px',
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + 'px',
      borderColor: attributes.inputBorderColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-input-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      id: attributes.field_slug,
      name: attributes.field_slug,
      placeholder: attributes.field_name,
      required: attributes.field_require,
      rows: "4",
      cols: "50",
      style: inputStyle
    })));
  };
  /**
   * Render Textarea Field
   * @param attributes
   * @returns {JSX.Element}
   */
  renderDateField = attributes => {
    const slug_name = this.makeSlug(attributes.field_name);
    this.props.setAttributes({
      field_slug: slug_name
    });
    let fieldSpacing = {
      marginBottom: attributes.rowSpacing + 'px'
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + 'px'
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + 'px',
      paddingTop: attributes.inputPaddingTop + 'px',
      paddingRight: attributes.inputPaddingRight + 'px',
      paddingBottom: attributes.inputPaddingBottom + 'px',
      paddingLeft: attributes.inputPaddingLeft + 'px',
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + 'px',
      borderColor: attributes.inputBorderColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-input-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "date",
      id: attributes.field_slug,
      name: attributes.field_slug,
      required: attributes.field_require,
      style: inputStyle
    })));
  };
  /**
   * Render Select Field
   * @param attributes
   * @returns {JSX.Element}
   */
  renderSelectField = attributes => {
    const slug_name = this.makeSlug(attributes.field_name);
    this.props.setAttributes({
      field_slug: slug_name
    });
    let fieldSpacing = {
      marginBottom: attributes.rowSpacing + 'px'
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + 'px'
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + 'px',
      paddingTop: attributes.inputPaddingTop + 'px',
      paddingRight: attributes.inputPaddingRight + 'px',
      paddingBottom: attributes.inputPaddingBottom + 'px',
      paddingLeft: attributes.inputPaddingLeft + 'px',
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + 'px',
      borderColor: attributes.inputBorderColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-input-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      name: attributes.field_slug,
      id: attributes.field_slug,
      style: inputStyle
    }, attributes.selectOption.map((value, index) => {
      return this.renderSelectOption(value, index);
    }))));
  };

  /**
   * Render Select Option
   * @param option
   * @param index
   * @returns {JSX.Element}
   */
  renderSelectOption = (option, index) => {
    const {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: option.value
    }, option.label));
  };
  renderCheckboxField = attributes => {
    const slug_name = this.makeSlug(attributes.field_name);
    this.props.setAttributes({
      field_slug: slug_name
    });
    let fieldSpacing = {
      marginBottom: attributes.rowSpacing + 'px'
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + 'px'
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + 'px',
      paddingTop: attributes.inputPaddingTop + 'px',
      paddingRight: attributes.inputPaddingRight + 'px',
      paddingBottom: attributes.inputPaddingBottom + 'px',
      paddingLeft: attributes.inputPaddingLeft + 'px',
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + 'px',
      borderColor: attributes.inputBorderColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-checkbox-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: attributes.field_slug,
      name: attributes.field_slug,
      required: attributes.field_require,
      style: inputStyle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: checkboxLabelColor
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*"))));
  };
  renderRadioOption = (option, index) => {
    const {
      attributes,
      setAttributes
    } = this.props;
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + 'px'
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + 'px',
      paddingTop: attributes.inputPaddingTop + 'px',
      paddingRight: attributes.inputPaddingRight + 'px',
      paddingBottom: attributes.inputPaddingBottom + 'px',
      paddingLeft: attributes.inputPaddingLeft + 'px',
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + 'px',
      borderColor: attributes.inputBorderColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      id: option.value,
      name: option.value,
      required: attributes.field_require,
      style: inputStyle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, option.label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(option.label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")));
  };
  renderRadioField = attributes => {
    const slug_name = this.makeSlug(attributes.field_name);
    this.props.setAttributes({
      field_slug: slug_name
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-input-group mrm-radio-group"
    }, attributes.radioOption.map((option, index) => {
      return this.renderRadioOption(option, index);
    })));
  };
  /**
   * Make Slug when render text
   * @param values
   * @returns {string}
   */
  makeSlug = values => {
    const slug = values.toLowerCase().replace(/[\W_]+/g, "-");
    return slug;
  };
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), attributes.field_type == 'text' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderTextField(attributes)), attributes.field_type == 'textarea' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderTextareaField(attributes)), attributes.field_type == 'date' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderDateField(attributes)), attributes.field_type == 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderSelectField(attributes)), attributes.field_type == 'checkbox' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderCheckboxField(attributes)), attributes.field_type == 'radio' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderRadioField(attributes)));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (compose([])(Editor));

/***/ }),

/***/ "./src/components/mrm-custom-field/icon.js":
/*!*************************************************!*\
  !*** ./src/components/mrm-custom-field/icon.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.pricing = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  id: "Layer_1",
  enableBackground: "new 0 0 48 48",
  height: "512",
  viewBox: "0 0 48 48",
  width: "512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m40.2 47.5h-32.4c-1 0-1.8-.8-1.8-1.8v-40.6c0-1 .8-1.8 1.8-1.8h32.4c1 0 1.8.8 1.8 1.8v40.5c0 1.1-.8 1.9-1.8 1.9zm-30.6-3.7h28.7v-36.8h-28.7z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m15.6 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m24 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c0 1.1-.8 1.9-1.8 1.9z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 9.4c-1 0-1.8-.8-1.8-1.8v-5.3c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v5.2c.1 1.1-.7 1.9-1.8 1.9z"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 21.7h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8s-.8 1.8-1.9 1.8z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.4 32.8h-16.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h16.9c1 0 1.8.8 1.8 1.8 0 .9-.8 1.8-1.9 1.8z"
})))));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/components/notices/index.js":
/*!*****************************************!*\
  !*** ./src/components/notices/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Notices; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


function Notices() {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select('core/notices').getNotices().filter(notice => notice.type === 'snackbar'), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('core/notices');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SnackbarList, {
    className: "edit-site-notices",
    notices: notices,
    onRemove: removeNotice
  });
}

/***/ }),

/***/ "./src/components/sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/CrossIcon */ "./src/components/Icons/CrossIcon.jsx");
/* harmony import */ var _Icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/SettingsIcon */ "./src/components/Icons/SettingsIcon.jsx");
/* harmony import */ var _Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/QuestionIcon */ "./src/components/Icons/QuestionIcon.jsx");
/* harmony import */ var _Icons_MinusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icons/MinusIcon */ "./src/components/Icons/MinusIcon.jsx");
/* harmony import */ var _Icons_PlusIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/PlusIcon */ "./src/components/Icons/PlusIcon.jsx");

/**
 * WordPress dependencies
 */








const {
  TextControl,
  SelectControl,
  RangeControl,
  TextareaControl,
  Button,
  Dropdown,
  Panel,
  PanelBody,
  RadioGroup,
  RadioControl,
  ToggleControl,
  Radio,
  DateTimePicker,
  DatePicker
} = wp.components;
const {
  Component,
  RawHTML,
  useEffect,
  useState
} = wp.element;
const {
  InspectorControls,
  ColorPalette,
  MediaUpload,
  PanelColorSettings,
  withColors,
  useBlockProps
} = wp.blockEditor;
const {
  Slot: InspectorSlot,
  Fill: InspectorFill
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.createSlotFill)("MRMBlockEditorSidebarInspector");
function Sidebar() {
  const [tabState, setTabState] = useState("same-page");
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [samePageMessage, setSamePageMessage] = useState("");
  const [settingData, setSettingData] = useState({
    settings: {
      confirmation_type: {
        same_page: {
          message_to_show: "",
          after_form_submission: ""
        },
        to_a_page: {
          page: "",
          redirection_message: ""
        },
        to_a_custom_url: {
          custom_url: "",
          custom_redirection_message: ""
        }
      },
      form_layout: "",
      schedule: {
        form_scheduling: false,
        submission_start: {
          date: "",
          time: ""
        }
      },
      restriction: {
        max_entries: false,
        max_number: "",
        max_type: ""
      }
    }
  });
  let currentDate = new Date();
  const toggleTab = index => {
    setTabState(index);
  };

  //-----counter increment-------
  function counterIncrement() {
    setCount(function (prevCount) {
      return prevCount += 1;
    });
  }

  //-----counter decrement-------
  function counterDecrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return prevCount -= 1;
      } else {
        return prevCount = 0;
      }
    });
  }

  //   const updateSetting = (index) => (e) => {
  //     const updatedSetting = settingData.map((item, i) => {
  //       if (index === i) {
  //         return { ...item, [e.target.name]: e.target.value };
  //       } else {
  //         return item;
  //       }
  //     });
  //     setSettingData(updatedSetting);
  //   };

  const handleConfirmationType = index => {
    toggleTab(index);
    if ("same_page" === index) {
      setSettingData({
        settings: {
          confirmation_type: {
            same_page: {
              message_to_show: "static"
            }
          }
        }
      });
    }
  };
  let submissionType = "hide-form";
  let labelAlign = "center";
  let maxEntries = false;
  let formScheduling = false;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-builder-sidebar",
    role: "region",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("MRM Block Editor advanced settings."),
    tabIndex: "-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, {
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Inspector")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorSlot, {
    bubblesVirtually: true
  })), console.log(settingData), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, {
    className: "settings-pannel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-panel__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), "Settings"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "close-pannel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Confirmation Settings",
    className: "confirmation-settings",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannelbody-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannel-single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Confirmation Type", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Where do you want to send the user after form confirmation?"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannel-tab-nav"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tabState === "same-page" ? "tab-nav-item active" : "tab-nav-item",
    onChange: e => handleConfirmationType("same-page")
  }, "Same Page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tabState === "page" ? "tab-nav-item active" : "tab-nav-item",
    onChange: e => handleConfirmationType("page")
  }, "To a page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tabState === "custom-url" ? "tab-nav-item active" : "tab-nav-item",
    onChange: e => handleConfirmationType("custom-url")
  }, "To a custom URL")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannel-tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tabState === "same-page" ? "single-tab-content same-page-tab-content active" : "single-tab-content same-page-tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Message to show", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "What message you want to show to the use?"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    name: "message_to_show"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "After Form Submission", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
    selected: submissionType,
    options: [{
      label: "Hide Form",
      value: "hide-form"
    }, {
      label: "Reset Form",
      value: "reset-form"
    }],
    onChange: state => this.props.setAttributes({
      submissionType: state
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tabState === "page" ? "single-tab-content same-page-tab-content active" : "single-tab-content same-page-tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Message to show", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: "",
    options: [{
      value: "",
      label: "Select option"
    }, {
      value: "",
      label: "Select option"
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Redirection Message", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    value: ""
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tabState === "custom-url" ? "single-tab-content same-page-tab-content active" : "single-tab-content same-page-tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Custom URL", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    value: "",
    onChange: handleConfirmationType
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Redirection Message", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    value: ""
  }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Form Layout",
    className: "form-layout-settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannelbody-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Label Alignment", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
    selected: labelAlign,
    options: [{
      label: "Left",
      value: "left"
    }, {
      label: "Center",
      value: "center"
    }, {
      label: "Right",
      value: "right"
    }],
    onChange: state => this.props.setAttributes({
      labelAlign: state
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Schedule",
    className: "schedule-settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannelbody-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings inline-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Form Scheduling", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    checked: formScheduling,
    onChange: state => setAttributes({
      formScheduling: state
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Submission Starts", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DateTimePicker, {
    currentDate: date,
    onChange: newDate => setDate(newDate),
    is12Hour: true,
    __nextRemoveHelpButton: true,
    __nextRemoveResetButton: true
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Restrictions",
    className: "restrictions-settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannelbody-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings inline-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Maximum Number of Entries", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "lorem ipsum dollar sit amet"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    checked: maxEntries,
    onChange: state => setAttributes({
      maxEntries: state
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Submission Starts "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "submission-counter-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "counter-increment",
    onClick: counterDecrement
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_MinusIcon__WEBPACK_IMPORTED_MODULE_7__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    min: "1",
    value: count
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "counter-decrement",
    onClick: counterIncrement
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_PlusIcon__WEBPACK_IMPORTED_MODULE_8__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: "",
    options: [{
      value: "",
      label: "Select option"
    }, {
      value: "",
      label: "Select option"
    }]
  })))))));
}
Sidebar.InspectorFill = InspectorFill;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js");
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js");
/* harmony import */ var _components_notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notices */ "./src/components/notices/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar/index.js");
/* harmony import */ var _components_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block-editor */ "./src/components/block-editor/index.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function Editor(_ref) {
  let {
    settings
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-editor-builder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isActive: false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SlotFillProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DropZoneProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FocusReturnProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_7__["default"], {
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null),
    sidebar: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_notices__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_block_editor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      settings: settings
    }))
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover.Slot, null)))));
}
/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/block-library":
/*!**************************************!*\
  !*** external ["wp","blockLibrary"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockLibrary"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/format-library":
/*!***************************************!*\
  !*** external ["wp","formatLibrary"] ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["formatLibrary"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keyboard-shortcuts":
/*!*******************************************!*\
  !*** external ["wp","keyboardShortcuts"] ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["keyboardShortcuts"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ "./src/editor.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _components_email_field_block_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/email-field-block/icon */ "./src/components/email-field-block/icon.js");
/* harmony import */ var _components_email_field_block_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/email-field-block/attributes */ "./src/components/email-field-block/attributes.js");
/* harmony import */ var _components_email_field_block_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/email-field-block/edit */ "./src/components/email-field-block/edit.js");
/* harmony import */ var _components_email_field_block_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/email-field-block/block */ "./src/components/email-field-block/block.js");
/* harmony import */ var _components_first_name_block_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/first-name-block/block */ "./src/components/first-name-block/block.js");
/* harmony import */ var _components_first_name_block_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/first-name-block/icon */ "./src/components/first-name-block/icon.js");
/* harmony import */ var _components_first_name_block_attributes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/first-name-block/attributes */ "./src/components/first-name-block/attributes.js");
/* harmony import */ var _components_first_name_block_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/first-name-block/edit */ "./src/components/first-name-block/edit.js");
/* harmony import */ var _components_last_name_block_block__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/last-name-block/block */ "./src/components/last-name-block/block.js");
/* harmony import */ var _components_last_name_block_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/last-name-block/icon */ "./src/components/last-name-block/icon.js");
/* harmony import */ var _components_last_name_block_attributes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/last-name-block/attributes */ "./src/components/last-name-block/attributes.js");
/* harmony import */ var _components_last_name_block_edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/last-name-block/edit */ "./src/components/last-name-block/edit.js");
/* harmony import */ var _components_mrm_button_block_block__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mrm-button-block/block */ "./src/components/mrm-button-block/block.js");
/* harmony import */ var _components_mrm_button_block_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/mrm-button-block/icon */ "./src/components/mrm-button-block/icon.js");
/* harmony import */ var _components_mrm_button_block_attributes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/mrm-button-block/attributes */ "./src/components/mrm-button-block/attributes.js");
/* harmony import */ var _components_mrm_button_block_edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/mrm-button-block/edit */ "./src/components/mrm-button-block/edit.js");
/* harmony import */ var _components_mrm_custom_field_block__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/mrm-custom-field/block */ "./src/components/mrm-custom-field/block.js");
/* harmony import */ var _components_mrm_custom_field_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mrm-custom-field/icon */ "./src/components/mrm-custom-field/icon.js");
/* harmony import */ var _components_mrm_custom_field_attributes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/mrm-custom-field/attributes */ "./src/components/mrm-custom-field/attributes.js");
/* harmony import */ var _components_mrm_custom_field_edit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/mrm-custom-field/edit */ "./src/components/mrm-custom-field/edit.js");





const {
  registerBlockType
} = wp.blocks;
const {
  __
} = wp.i18n;

//Email




// Firstname




//last Name




//Button




// Custom Field




_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  const settings = window.getmrmsetting || {};
  (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__.registerCoreBlocks)();
  registerBlockType("mrmformfield/email-field-block", {
    title: __("Email Field", "mrm"),
    category: "common",
    icon: _components_email_field_block_icon__WEBPACK_IMPORTED_MODULE_5__["default"].pricing,
    supports: {
      align: ["left", "right", "center"]
    },
    attributes: _components_email_field_block_attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
    edit: _components_email_field_block_edit__WEBPACK_IMPORTED_MODULE_7__["default"],
    save: _components_email_field_block_block__WEBPACK_IMPORTED_MODULE_8__["default"]
  });
  registerBlockType("mrmformfield/first-name-block", {
    title: __("First Name", "mrm"),
    category: "common",
    icon: _components_first_name_block_icon__WEBPACK_IMPORTED_MODULE_10__["default"].pricing,
    supports: {
      align: ["left", "right", "center"]
    },
    attributes: _components_first_name_block_attributes__WEBPACK_IMPORTED_MODULE_11__["default"],
    edit: _components_first_name_block_edit__WEBPACK_IMPORTED_MODULE_12__["default"],
    save: _components_first_name_block_block__WEBPACK_IMPORTED_MODULE_9__["default"]
  });
  registerBlockType("mrmformfield/last-name-block", {
    title: __("Last Name", "mrm"),
    category: "common",
    icon: _components_last_name_block_icon__WEBPACK_IMPORTED_MODULE_14__["default"].pricing,
    supports: {
      align: ["left", "right", "center"]
    },
    attributes: _components_last_name_block_attributes__WEBPACK_IMPORTED_MODULE_15__["default"],
    edit: _components_last_name_block_edit__WEBPACK_IMPORTED_MODULE_16__["default"],
    save: _components_last_name_block_block__WEBPACK_IMPORTED_MODULE_13__["default"]
  });
  registerBlockType("mrmformfield/mrm-button-block", {
    title: __("MRM Button", "mrm"),
    category: "common",
    icon: _components_mrm_button_block_icon__WEBPACK_IMPORTED_MODULE_18__["default"].pricing,
    supports: {
      align: ["left", "right", "center"]
    },
    attributes: _components_mrm_button_block_attributes__WEBPACK_IMPORTED_MODULE_19__["default"],
    edit: _components_mrm_button_block_edit__WEBPACK_IMPORTED_MODULE_20__["default"],
    save: _components_mrm_button_block_block__WEBPACK_IMPORTED_MODULE_17__["default"]
  });
  registerBlockType("mrmformfield/mrm-custom-field", {
    title: __("MRM Custom Field", "mrm"),
    category: "common",
    icon: _components_mrm_custom_field_icon__WEBPACK_IMPORTED_MODULE_22__["default"].pricing,
    supports: {
      align: ["left", "right", "center"]
    },
    attributes: _components_mrm_custom_field_attributes__WEBPACK_IMPORTED_MODULE_23__["default"],
    edit: _components_mrm_custom_field_edit__WEBPACK_IMPORTED_MODULE_24__["default"],
    save: _components_mrm_custom_field_block__WEBPACK_IMPORTED_MODULE_21__["default"]
  });
  const el = document.getElementById("mrm-block-editor");
  if (el !== null) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      settings: settings
    }), el);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map