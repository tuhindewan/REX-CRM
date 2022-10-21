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
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar */ "./src/components/sidebar/index.jsx");
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
    default: 14
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
    className: "mrm-form-group email",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrm-email",
    style: labelStyle
  }, emailLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(emailLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email', 'mrm'), requiredMark && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "email",
    name: "email",
    id: "mrm-email",
    placeholder: emailPlaceholder,
    required: true,
    style: inputStyle,
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
  }))));
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
      emailLabel = attributes.emailLabel,
      emailPlaceholder = attributes.emailPlaceholder;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Email",
      className: "inner-pannel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
      label: "Email Label",
      value: emailLabel,
      onChange: state => this.props.setAttributes({
        emailLabel: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
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
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper",
      className: "mrm-block-control-wrapper"
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
      className: "mrm-form-group email",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-email",
      style: labelStyle
    }, emailLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(emailLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email', 'mrm'), requiredMark && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "email",
      name: "email",
      id: "mrm-email",
      placeholder: emailPlaceholder,
      required: true,
      style: inputStyle,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
    }))));
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
icons.EmailField = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.0714 0H1.92857C1.41708 0 0.926543 0.203188 0.564866 0.564866C0.203188 0.926543 0 1.41708 0 1.92857V16.0714C0 16.5829 0.203188 17.0735 0.564866 17.4351C0.926543 17.7968 1.41708 18 1.92857 18H16.0714C16.5829 18 17.0735 17.7968 17.4351 17.4351C17.7968 17.0735 18 16.5829 18 16.0714V1.92857C18 1.41708 17.7968 0.926543 17.4351 0.564866C17.0735 0.203188 16.5829 0 16.0714 0ZM16.7143 16.0714C16.7143 16.2419 16.6466 16.4054 16.526 16.526C16.4054 16.6466 16.2419 16.7143 16.0714 16.7143H1.92857C1.75808 16.7143 1.59456 16.6466 1.474 16.526C1.35344 16.4054 1.28571 16.2419 1.28571 16.0714V5.14286H16.7143V16.0714ZM16.7143 3.85714H1.28571V1.92857C1.28571 1.75808 1.35344 1.59456 1.474 1.474C1.59456 1.35344 1.75808 1.28571 1.92857 1.28571H16.0714C16.2419 1.28571 16.4054 1.35344 16.526 1.474C16.6466 1.59456 16.7143 1.75808 16.7143 1.92857V3.85714Z",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3.2154 1.92871H2.57254C2.40205 1.92871 2.23854 1.99644 2.11798 2.117C1.99742 2.23756 1.92969 2.40107 1.92969 2.57157C1.92969 2.74206 1.99742 2.90558 2.11798 3.02614C2.23854 3.1467 2.40205 3.21443 2.57254 3.21443H3.2154C3.3859 3.21443 3.54941 3.1467 3.66997 3.02614C3.79053 2.90558 3.85826 2.74206 3.85826 2.57157C3.85826 2.40107 3.79053 2.23756 3.66997 2.117C3.54941 1.99644 3.3859 1.92871 3.2154 1.92871Z",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5.78571 1.92871H5.14286C4.97236 1.92871 4.80885 1.99644 4.68829 2.117C4.56773 2.23756 4.5 2.40107 4.5 2.57157C4.5 2.74206 4.56773 2.90558 4.68829 3.02614C4.80885 3.1467 4.97236 3.21443 5.14286 3.21443H5.78571C5.95621 3.21443 6.11972 3.1467 6.24028 3.02614C6.36084 2.90558 6.42857 2.74206 6.42857 2.57157C6.42857 2.40107 6.36084 2.23756 6.24028 2.117C6.11972 1.99644 5.95621 1.92871 5.78571 1.92871Z",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3.85603 10.2859H14.1417C14.4827 10.2859 14.8098 10.1504 15.0509 9.90928C15.292 9.66816 15.4275 9.34113 15.4275 9.00014V7.71443C15.4275 7.37343 15.292 7.04641 15.0509 6.80529C14.8098 6.56417 14.4827 6.42871 14.1417 6.42871H3.85603C3.51503 6.42871 3.18801 6.56417 2.94689 6.80529C2.70577 7.04641 2.57031 7.37343 2.57031 7.71443V9.00014C2.57031 9.34113 2.70577 9.66816 2.94689 9.90928C3.18801 10.1504 3.51503 10.2859 3.85603 10.2859ZM3.85603 7.71443H14.1417V9.00014H3.85603V7.71443Z",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.5 11.5713H10.9286C10.4171 11.5713 9.92654 11.7745 9.56487 12.1362C9.20319 12.4978 9 12.9884 9 13.4999C9 14.0113 9.20319 14.5019 9.56487 14.8636C9.92654 15.2252 10.4171 15.4284 10.9286 15.4284H13.5C14.0115 15.4284 14.502 15.2252 14.8637 14.8636C15.2254 14.5019 15.4286 14.0113 15.4286 13.4999C15.4286 12.9884 15.2254 12.4978 14.8637 12.1362C14.502 11.7745 14.0115 11.5713 13.5 11.5713ZM13.5 14.1427H10.9286C10.7581 14.1427 10.5946 14.075 10.474 13.9544C10.3534 13.8339 10.2857 13.6704 10.2857 13.4999C10.2857 13.3294 10.3534 13.1659 10.474 13.0453C10.5946 12.9247 10.7581 12.857 10.9286 12.857H13.5C13.6705 12.857 13.834 12.9247 13.9546 13.0453C14.0751 13.1659 14.1429 13.3294 14.1429 13.4999C14.1429 13.6704 14.0751 13.8339 13.9546 13.9544C13.834 14.075 13.6705 14.1427 13.5 14.1427Z",
  fill: "#2D3149"
}));
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
    default: 14
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
    className: "mrm-form-group first-name",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrm-first-name",
    style: labelStyle
  }, firstNameLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(firstNameLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('First Name', 'mrm'), requiredMark && isRequiredName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "first_name",
    id: "mrm-first-name",
    placeholder: firstNamePlaceholder,
    required: isRequiredName,
    style: inputStyle
  }))));
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
      className: "mrm-inline-label",
      label: "First Name Label",
      value: firstNameLabel,
      onChange: state => this.props.setAttributes({
        firstNameLabel: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
      label: "First Name Placeholder",
      value: firstNamePlaceholder,
      onChange: state => this.props.setAttributes({
        firstNamePlaceholder: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      className: "mrm-switcher-block",
      label: "Mark First Name As Required",
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
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper",
      className: "mrm-block-control-wrapper"
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
      className: "mrm-form-group first-name",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-first-name",
      style: labelStyle
    }, firstNameLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(firstNameLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('First Name', 'mrm'), requiredMark && isRequiredName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "first_name",
      id: "mrm-first-name",
      placeholder: firstNamePlaceholder,
      required: isRequiredName,
      style: inputStyle
    }))));
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
icons.firstName = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "26",
  height: "20",
  viewBox: "0 0 26 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22.7934 1H3.21124C2.4665 1.00071 1.75246 1.29688 1.22584 1.8235C0.699225 2.35011 0.403059 3.06415 0.402344 3.8089V16.1911C0.403059 16.9358 0.699225 17.6499 1.22584 18.1765C1.75246 18.7031 2.4665 18.9993 3.21124 19H22.7934C23.5382 18.9993 24.2522 18.7031 24.7788 18.1765C25.3055 17.6499 25.6016 16.9358 25.6023 16.1911V3.8089C25.6016 3.06415 25.3055 2.35011 24.7788 1.8235C24.2522 1.29688 23.5382 1.00071 22.7934 1V1ZM23.8023 16.1911C23.8021 16.4586 23.6957 16.7151 23.5066 16.9042C23.3174 17.0934 23.0609 17.1998 22.7934 17.2H3.21124C2.94374 17.1998 2.68726 17.0934 2.49811 16.9042C2.30895 16.7151 2.20258 16.4586 2.20234 16.1911V3.8089C2.20258 3.5414 2.30895 3.28492 2.49811 3.09576C2.68726 2.90661 2.94374 2.80024 3.21124 2.8H22.7934C23.0609 2.80024 23.3174 2.90661 23.5066 3.09576C23.6957 3.28492 23.8021 3.5414 23.8023 3.8089V16.1911Z",
  fill: "#2D3149",
  stroke: "white",
  "stroke-width": "0.3"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "5",
  y: "5.5",
  width: "16",
  height: "1.4",
  rx: "0.7",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "5.65",
  y: "9.65",
  width: "14.7",
  height: "4.2",
  rx: "1.35",
  stroke: "#2D3149",
  "stroke-width": "1.3"
}));
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
    default: 14
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
    className: "mrm-form-group last-name",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "wpfnl-last-name",
    style: labelStyle
  }, lastNameLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(lastNameLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Last Name', 'wpfnl'), requiredMark && isRequiredLastName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "last_name",
    id: "wpfnl-last-name",
    placeholder: lastNamePlaceholder,
    required: isRequiredLastName,
    style: inputStyle
  }))));
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
      className: "mrm-inline-label",
      label: "Last Name Label",
      value: lastNameLabel,
      onChange: state => this.props.setAttributes({
        lastNameLabel: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
      label: "Last Name Placeholder Text",
      value: lastNamePlaceholder,
      onChange: state => this.props.setAttributes({
        lastNamePlaceholder: state
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      className: "mrm-switcher-block",
      label: "Mark Last Name As Required",
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
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper",
      className: "mrm-block-control-wrapper"
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
      className: "mrm-form-group last-name",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-last-name",
      style: labelStyle
    }, lastNameLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(lastNameLabel, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Last Name', 'mrm'), requiredMark && isRequiredLastName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "last_name",
      id: "mrm-last-name",
      placeholder: lastNamePlaceholder,
      required: isRequiredLastName,
      style: inputStyle
    }))));
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
icons.lastName = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "26",
  height: "20",
  viewBox: "0 0 26 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22.7934 1H3.21124C2.4665 1.00071 1.75246 1.29688 1.22584 1.8235C0.699225 2.35011 0.403059 3.06415 0.402344 3.8089V16.1911C0.403059 16.9358 0.699225 17.6499 1.22584 18.1765C1.75246 18.7031 2.4665 18.9993 3.21124 19H22.7934C23.5382 18.9993 24.2522 18.7031 24.7788 18.1765C25.3055 17.6499 25.6016 16.9358 25.6023 16.1911V3.8089C25.6016 3.06415 25.3055 2.35011 24.7788 1.8235C24.2522 1.29688 23.5382 1.00071 22.7934 1V1ZM23.8023 16.1911C23.8021 16.4586 23.6957 16.7151 23.5066 16.9042C23.3174 17.0934 23.0609 17.1998 22.7934 17.2H3.21124C2.94374 17.1998 2.68726 17.0934 2.49811 16.9042C2.30895 16.7151 2.20258 16.4586 2.20234 16.1911V3.8089C2.20258 3.5414 2.30895 3.28492 2.49811 3.09576C2.68726 2.90661 2.94374 2.80024 3.21124 2.8H22.7934C23.0609 2.80024 23.3174 2.90661 23.5066 3.09576C23.6957 3.28492 23.8021 3.5414 23.8023 3.8089V16.1911Z",
  fill: "#2D3149",
  stroke: "white",
  "stroke-width": "0.3"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "5",
  y: "5.5",
  width: "10",
  height: "1.4",
  rx: "0.7",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "5.65",
  y: "9.65",
  width: "14.7",
  height: "4.2",
  rx: "1.35",
  stroke: "#2D3149",
  "stroke-width": "1.3"
}));
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
    default: 'left'
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
      buttonAlign,
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
    className: "mrm-form-group submit",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    className: "mrm-submit-button mintmrm-btn",
    tagName: "button",
    type: "submit",
    style: buttonStyle,
    value: buttonText
  })));
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
      className: "mrm-inline-label",
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
    }));
  };
  getInspectorControls = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper",
      className: "mrm-block-control-wrapper"
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
      className: "mrm-form-group submit",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAlignmentToolbar, {
      value: buttonAlign,
      onChange: newAlign => this.props.setAttributes({
        buttonAlign: newAlign
      }),
      controls: ["left", "center", "right"]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      className: "mrm-submit-button mintmrm-btn",
      tagName: "button",
      type: "button",
      value: buttonText,
      style: buttonStyle,
      onChange: content => this.props.setAttributes({
        buttonText: content
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Submit', 'mrm')
    })));
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
icons.Button = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_1876_4496)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.3219 10.0868L11.2483 8.92378V5.25C11.2483 4.00775 10.241 3 8.99896 3C7.75693 3 6.74962 4.00775 6.74962 5.25V11.7275L6.08969 11.0683C5.21241 10.1894 3.78704 10.191 2.90796 11.0683C2.03068 11.9471 2.03068 13.3709 2.90796 14.25L6.65803 18.0001H15.2631L16.4687 11.9707C16.6305 11.1621 16.1142 10.314 15.3219 10.0868ZM14.0334 16.5H7.27977L3.96867 13.1893C3.67705 12.8979 3.67639 12.4218 3.96867 12.1288C4.26161 11.8357 4.73771 11.8357 5.02999 12.1288L8.25043 15.3486V5.24996C8.25022 4.83529 8.58411 4.50003 8.99878 4.50003C9.41345 4.50003 9.74871 4.83529 9.74871 5.24996V10.0559L15.0216 11.5619L14.0334 16.5Z",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.2499 0H3.75007C1.67871 0 0 1.67871 0 3.74985C0 5.82122 1.67871 7.49993 3.75007 7.49993H5.24993V5.99985H3.75007C2.50919 5.99985 1.50007 4.99074 1.50007 3.74985C1.50007 2.50919 2.50919 1.49985 3.75007 1.49985H14.2499C15.4908 1.49985 16.4999 2.50919 16.4999 3.74985C16.4999 4.99074 15.4908 5.99985 14.2499 5.99985H12.7501V7.49993H14.2499C16.3213 7.49993 18 5.82122 18 3.74985C18 1.67871 16.3213 0 14.2499 0Z",
  fill: "#2D3149"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_1876_4496"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "18",
  height: "18",
  fill: "white"
}))));
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
    default: [{
      value: 'none',
      label: '--Select--'
    }]
  },
  select_option_count: {
    type: 'number',
    default: 2
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
    default: [{
      label: 'Label',
      value: ''
    }]
  },
  radio_option_count: {
    type: 'number',
    default: 2
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
    default: 14
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
 * Make Slug when render text
 * @param values
 * @returns {string}
 */

const makeSlug = values => {
  const slug = values.toLowerCase().replace(/[\W_]+/g, "-");
  return slug;
};
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
  let radioLabelColor = {
    color: labelColor
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, field_type == 'text' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group text",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_name,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : '', field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: field_name,
    id: field_name,
    placeholder: field_name,
    required: field_require,
    style: inputStyle
  }))), field_type == 'textarea' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group textarea",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_slug,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    id: field_slug,
    name: field_slug,
    placeholder: field_name,
    required: field_require,
    rows: "4",
    cols: "50",
    style: inputStyle
  }))), field_type == 'date' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group date",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_name,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : '', field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "date",
    name: field_name,
    id: field_name,
    placeholder: field_name,
    required: field_require,
    style: inputStyle
  }))), field_type == 'radio' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `mrm-${field_label}`,
    className: "mrm-form-group radio"
  }, radioOption.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-radio-group mintmrm-radiobtn",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      id: option.label,
      name: field_slug,
      required: field_require
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: option.label,
      style: radioLabelColor
    }, option.label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(option.label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")));
  })), field_type == 'checkbox' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group checkbox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `mrm-${field_label}`,
    className: "mrm-checkbox-group mintmrm-checkbox",
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
  }, "*")))), field_type == 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `mrm-${field_label}`,
    className: "mrm-form-group select",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_slug,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: field_slug,
    id: field_slug,
    style: inputStyle
  }, selectOption.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: makeSlug(option.value)
    }, option.label);
  })))));
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
  addNewRadioOption = count => {
    let {
      attributes,
      setAttributes
    } = this.props;
    const slug_name = this.makeSlug(attributes.field_name);
    setAttributes({
      radio_option_count: attributes.radio_option_count + 1
    });
    let defaultOption = {
      value: slug_name,
      label: 'Label' + '-' + attributes.radio_option_count
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
      className: "mrm-inline-label",
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
      className: "mrm-inline-label",
      label: "Field Name",
      value: attributes.field_name,
      onChange: state => setAttributes({
        field_name: state
      })
    }), attributes.field_type != 'radio' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
      label: " Field Label",
      value: attributes.field_label,
      onChange: state => setAttributes({
        field_label: state
      })
    }), attributes.field_type == 'select' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "select-option-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "add-option-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Add New Option"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        this.addNewOption();
      },
      className: "add-option-button",
      role: "button",
      title: "Add New Option"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "14",
      height: "14",
      fill: "none",
      viewBox: "0 0 14 14",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "#44af5c",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.008 1v12M1 7h12"
    })))), attributes.selectOption.map((option, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "single-option-field"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        value: option.value
        // onChange={ (state ) => setAttributes({ value: state }) }
        ,
        onChange: val => this.onChangeOptionField(option, val, index)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        key: `mrm-delete-button-${index}`,
        onClick: val => this.deleteOption(option, val, index),
        className: "delete-option-button",
        title: "Delete Option",
        role: "button"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "18",
        height: "18",
        fill: "none",
        viewBox: "0 0 22 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        stroke: "#aa646b",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "clip-path": "url(#clip0_54_11724)"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M16.5 5.5l-11 11m0-11l11 11"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
        id: "clip0_54_11724"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "#fff",
        d: "M0 0h22v22H0z"
      }))))));
    })), attributes.field_type == 'radio' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "radio-option-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "add-option-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Add New Option"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: count => {
        this.addNewRadioOption(count);
      },
      className: "add-option-button",
      role: "button",
      title: "Add New Option"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "14",
      height: "14",
      fill: "none",
      viewBox: "0 0 14 14",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      stroke: "#44af5c",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.008 1v12M1 7h12"
    })))), attributes.radioOption.map((option, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "single-option-field"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        value: option.label
        // onChange={ (state ) => setAttributes({ value: state }) }
        ,
        onChange: val => this.onChangeRadioLabelField(option, val, index)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        key: `mrm-delete-button-${index}`,
        onClick: val => this.deleteRadioButtonOption(option, val, index),
        className: "delete-option-button",
        title: "Delete Option",
        role: "button"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "18",
        height: "18",
        fill: "none",
        viewBox: "0 0 22 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
        stroke: "#aa646b",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "clip-path": "url(#clip0_54_11724)"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M16.5 5.5l-11 11m0-11l11 11"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
        id: "clip0_54_11724"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "#fff",
        d: "M0 0h22v22H0z"
      }))))));
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      className: "mrm-switcher-block",
      label: "Mark As Required",
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
      delete attributes.selectOption[index];
      // attributes.selectOption.splice(index,1); // 2nd parameter means remove one item only
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
      delete attributes.radioOption[index];
      // attributes.radioOption.splice(index,1); // 2nd parameter means remove one item only
      setAttributes(attributes.radioOption);
    }
  };
  addNewOption = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    setAttributes({
      select_option_count: attributes.select_option_count + 1
    });
    let defaultOption = {
      value: 'option' + '-' + attributes.select_option_count,
      label: 'Option' + '-' + attributes.select_option_count
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
    }), 'radio' !== attributes.field_type && 'checkbox' !== attributes.field_type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute('labelSpacing', labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    })));
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
    }));
  };
  getInspectorControls = () => {
    let {
      attributes,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "mrm-mrm-form-inspector-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "mrm-block-inspected-inspector-control-wrapper",
      className: "mrm-block-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, this.customFields(), this.formStyle(), 'radio' !== attributes.field_type && 'checkbox' !== attributes.field_type && this.inputFieldStyle())));
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
      className: "mrm-form-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: attributes.field_slug,
      id: attributes.field_slug,
      placeholder: attributes.field_name,
      required: attributes.field_require,
      style: inputStyle
    }))));
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
      className: "mrm-form-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      id: attributes.field_slug,
      name: attributes.field_slug,
      placeholder: attributes.field_name,
      required: attributes.field_require,
      rows: "4",
      cols: "50",
      style: inputStyle
    }))));
  };

  /**
   * Render Date Field
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
      className: "mrm-form-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "date",
      id: attributes.field_slug,
      name: attributes.field_slug,
      required: attributes.field_require,
      style: inputStyle
    }))));
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
      className: "mrm-form-group select",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      name: attributes.field_slug,
      id: attributes.field_slug,
      style: inputStyle
    }, attributes.selectOption.map((value, index) => {
      return this.renderSelectOption(value, index);
    })))));
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
    const slug_name = this.makeSlug(option.value);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: slug_name
    }, option.label));
  };

  /**
   * Render checkbox field
   * @returns {JSX.Element}
   */
  renderCheckboxField = attributes => {
    const slug_name = this.makeSlug(attributes.field_name);
    this.props.setAttributes({
      field_slug: slug_name
    });
    let fieldSpacing = {
      marginBottom: attributes.rowSpacing + 'px'
    };

    // let labelStyle = {
    //     color:  attributes.labelColor,
    //     marginBottom:  attributes.labelSpacing+'px',
    // }

    let checkboxLabelColor = {
      color: attributes.labelColor
    };

    // let inputStyle = {
    //     backgroundColor: attributes.inputBgColor,
    //     color:  attributes.inputTextColor,
    //     borderRadius:  attributes.inputBorderRadius+'px',
    //     paddingTop:  attributes.inputPaddingTop+'px',
    //     paddingRight:  attributes.inputPaddingRight+'px',
    //     paddingBottom:  attributes.inputPaddingBottom+'px',
    //     paddingLeft:  attributes.inputPaddingLeft+'px',
    //     borderStyle:  attributes.inputBorderStyle,
    //     borderWidth:  attributes.inputBorderWidth+'px',
    //     borderColor:  attributes.inputBorderColor,
    // }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-checkbox-group mintmrm-checkbox",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: attributes.field_slug,
      name: attributes.field_slug,
      required: attributes.field_require
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: checkboxLabelColor
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(attributes.field_label, 'mrm') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('', 'mrm'), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*"))));
  };
  renderRadioOption = (option, index, field_slug) => {
    const {
      attributes,
      setAttributes
    } = this.props;
    let fieldSpacing = {
      //color:  attributes.labelColor,
      marginBottom: attributes.rowSpacing + 'px'
    };
    let labelStyle = {
      color: attributes.labelColor
      //marginBottom:  attributes.labelSpacing+'px',
    };

    // let inputStyle = {
    //     backgroundColor: attributes.inputBgColor,
    //     color:  attributes.inputTextColor,
    //     borderRadius:  attributes.inputBorderRadius+'px',
    //     paddingTop:  attributes.inputPaddingTop+'px',
    //     paddingRight:  attributes.inputPaddingRight+'px',
    //     paddingBottom:  attributes.inputPaddingBottom+'px',
    //     paddingLeft:  attributes.inputPaddingLeft+'px',
    //     borderStyle:  attributes.inputBorderStyle,
    //     borderWidth:  attributes.inputBorderWidth+'px',
    //     borderColor:  attributes.inputBorderColor,
    // }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-radio-group mintmrm-radiobtn",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      id: option.label,
      name: field_slug,
      required: attributes.field_require
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: option.label,
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
      className: "mrm-form-group radio"
    }, attributes.radioOption.map((option, index) => {
      return this.renderRadioOption(option, index, this.props.attributes.field_slug);
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
icons.CustomField = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "19",
  height: "20",
  viewBox: "0 0 19 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3.64397 4.99985H10.7868C10.9762 4.99985 11.1579 4.92459 11.2918 4.79064C11.4258 4.65669 11.501 4.47501 11.501 4.28557C11.501 4.09613 11.4258 3.91445 11.2918 3.7805C11.1579 3.64654 10.9762 3.57129 10.7868 3.57129H3.64397C3.45453 3.57129 3.27285 3.64654 3.13889 3.7805C3.00494 3.91445 2.92969 4.09613 2.92969 4.28557C2.92969 4.47501 3.00494 4.65669 3.13889 4.79064C3.27285 4.92459 3.45453 4.99985 3.64397 4.99985Z",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3.64397 7.85727H10.7868C10.9762 7.85727 11.1579 7.78201 11.2918 7.64806C11.4258 7.51411 11.501 7.33243 11.501 7.14299C11.501 6.95355 11.4258 6.77187 11.2918 6.63792C11.1579 6.50397 10.9762 6.42871 10.7868 6.42871H3.64397C3.45453 6.42871 3.27285 6.50397 3.13889 6.63792C3.00494 6.77187 2.92969 6.95355 2.92969 7.14299C2.92969 7.33243 3.00494 7.51411 3.13889 7.64806C3.27285 7.78201 3.45453 7.85727 3.64397 7.85727Z",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6.50108 9.28516H3.64397C3.45453 9.28516 3.27285 9.36041 3.13889 9.49436C3.00494 9.62832 2.92969 9.81 2.92969 9.99943C2.92969 10.1889 3.00494 10.3706 3.13889 10.5045C3.27285 10.6385 3.45453 10.7137 3.64397 10.7137H6.50108C6.69052 10.7137 6.8722 10.6385 7.00615 10.5045C7.1401 10.3706 7.21536 10.1889 7.21536 9.99943C7.21536 9.81 7.1401 9.62832 7.00615 9.49436C6.8722 9.36041 6.69052 9.28516 6.50108 9.28516Z",
  fill: "#2D3149"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.6455 8.15278C18.6462 7.87134 18.5912 7.59254 18.4836 7.3325C18.3759 7.07246 18.2178 6.83634 18.0183 6.63779C17.61 6.24817 17.0673 6.03079 16.503 6.03079C15.9386 6.03079 15.3959 6.24817 14.9876 6.63779L14.3598 7.26564V2.14284C14.3598 1.57452 14.134 1.02948 13.7322 0.627622C13.3303 0.225762 12.7853 0 12.217 0H2.21705C1.64874 0 1.1037 0.225762 0.701841 0.627622C0.299981 1.02948 0.0742188 1.57452 0.0742188 2.14284V17.857C0.0742188 18.4253 0.299981 18.9703 0.701841 19.3722C1.1037 19.774 1.64874 19.9998 2.21705 19.9998H12.217C12.7853 19.9998 13.3303 19.774 13.7322 19.3722C14.134 18.9703 14.3598 18.4253 14.3598 17.857V13.3256L18.0176 9.66848C18.2174 9.46998 18.3758 9.23378 18.4835 8.97359C18.5913 8.7134 18.6464 8.4344 18.6455 8.15278V8.15278ZM12.9312 17.857C12.9312 18.0464 12.856 18.2281 12.722 18.362C12.5881 18.496 12.4064 18.5712 12.217 18.5712H2.21705C2.02762 18.5712 1.84594 18.496 1.71198 18.362C1.57803 18.2281 1.50278 18.0464 1.50278 17.857V2.14284C1.50278 1.9534 1.57803 1.77172 1.71198 1.63776C1.84594 1.50381 2.02762 1.42856 2.21705 1.42856H12.217C12.4064 1.42856 12.5881 1.50381 12.722 1.63776C12.856 1.77172 12.9312 1.9534 12.9312 2.14284V8.6942L8.25914 13.3656C8.16141 13.4634 8.09416 13.5874 8.06557 13.7227L7.52843 16.2806C7.50642 16.3846 7.50791 16.4922 7.5328 16.5956C7.55768 16.699 7.60533 16.7955 7.67227 16.8781C7.73921 16.9607 7.82375 17.0273 7.91972 17.0731C8.01569 17.1189 8.12067 17.1426 8.22699 17.1427C8.27642 17.1426 8.32571 17.1376 8.37414 17.1277L10.932 16.5898C11.0674 16.5613 11.1916 16.4938 11.2891 16.3956L12.9319 14.7527L12.9312 17.857ZM17.0076 8.65777L10.4313 15.2356L9.15198 15.5041L9.42055 14.2256L15.9983 7.64778C16.1342 7.51743 16.3151 7.44465 16.5033 7.44465C16.6916 7.44465 16.8725 7.51743 17.0083 7.64778C17.1422 7.78173 17.2175 7.96337 17.2175 8.15278C17.2175 8.34218 17.1422 8.52382 17.0083 8.65777H17.0076Z",
  fill: "#2D3149"
}));
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

/***/ "./src/components/sidebar/index.jsx":
/*!******************************************!*\
  !*** ./src/components/sidebar/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/CrossIcon */ "./src/components/Icons/CrossIcon.jsx");
/* harmony import */ var _Icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/SettingsIcon */ "./src/components/Icons/SettingsIcon.jsx");
/* harmony import */ var _Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/QuestionIcon */ "./src/components/Icons/QuestionIcon.jsx");
/* harmony import */ var _Icons_MinusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icons/MinusIcon */ "./src/components/Icons/MinusIcon.jsx");
/* harmony import */ var _Icons_PlusIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/PlusIcon */ "./src/components/Icons/PlusIcon.jsx");
/* harmony import */ var _src_components_Form_FormEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/components/Form/FormEditor */ "../../../src/components/Form/FormEditor.jsx");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__);

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

  //settings variables
  const [messageToShow, setMessageToShow] = useState("");
  const [afterFormSubmission, setAfterFormSubmission] = useState("hide-form");
  const [page, setPage] = useState("");
  const [redirectionMessage, setRedirectionMessage] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [customRedirectionMessage, setCustomRedirectionMessage] = useState("");
  const [formLayout, setFormLayout] = useState("below-pages");
  const [formScheduling, setFormScheduling] = useState(false);
  const [date, setDate] = useState(new Date());
  const [submissionStartDate, setSubmissionStartDate] = useState("");
  const [submissionStartTime, setSubmissionStartTime] = useState("");
  const [maxEntries, setMaxEntries] = useState(false);
  const [maxNumber, setMaxNumber] = useState();
  const [maxType, setMaxType] = useState();
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const [id, setId] = useState(window.location.hash.slice(15));
  const [formData, setFormData] = useState({});
  const [prevSetting, setPrevSetting] = useState({});
  const [currentTab, setCurrentTab] = useState("same-page");
  const [pageData, setPageData] = useState([]);
  const [pageOptions, setPageOptions] = useState([]);
  useEffect(() => {
    if (id) {
      const getFormData = async () => {
        const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`);
        const resJson = await res.json();
        if (200 === resJson.code) {
          var _resJson$data, _resJson$data$meta_fi, _resJson$data2, _resJson$data2$meta_f;
          setFormData(resJson.data);
          setSettingData(JSON.parse((_resJson$data = resJson.data) === null || _resJson$data === void 0 ? void 0 : (_resJson$data$meta_fi = _resJson$data.meta_fields) === null || _resJson$data$meta_fi === void 0 ? void 0 : _resJson$data$meta_fi.settings));
          setPrevSetting(JSON.parse((_resJson$data2 = resJson.data) === null || _resJson$data2 === void 0 ? void 0 : (_resJson$data2$meta_f = _resJson$data2.meta_fields) === null || _resJson$data2$meta_f === void 0 ? void 0 : _resJson$data2$meta_f.settings));
        }
      };
      getFormData();
    }
  }, []);
  useEffect(() => {
    var _prevSetting$settings, _prevSetting$settings2, _prevSetting$settings3, _prevSetting$settings4, _prevSetting$settings5, _prevSetting$settings6, _settingData$settings, _settingData$settings2, _settingData$settings3, _settingData$settings4, _settingData$settings5, _settingData$settings6, _settingData$settings7, _settingData$settings8, _settingData$settings9, _settingData$settings10;
    setMessageToShow(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings = prevSetting.settings) === null || _prevSetting$settings === void 0 ? void 0 : (_prevSetting$settings2 = _prevSetting$settings.confirmation_type) === null || _prevSetting$settings2 === void 0 ? void 0 : (_prevSetting$settings3 = _prevSetting$settings2.same_page) === null || _prevSetting$settings3 === void 0 ? void 0 : _prevSetting$settings3.message_to_show);
    setAfterFormSubmission(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings4 = prevSetting.settings) === null || _prevSetting$settings4 === void 0 ? void 0 : (_prevSetting$settings5 = _prevSetting$settings4.confirmation_type) === null || _prevSetting$settings5 === void 0 ? void 0 : (_prevSetting$settings6 = _prevSetting$settings5.same_page) === null || _prevSetting$settings6 === void 0 ? void 0 : _prevSetting$settings6.after_form_submission);
    setRedirectionMessage(settingData === null || settingData === void 0 ? void 0 : (_settingData$settings = settingData.settings) === null || _settingData$settings === void 0 ? void 0 : (_settingData$settings2 = _settingData$settings.confirmation_type) === null || _settingData$settings2 === void 0 ? void 0 : (_settingData$settings3 = _settingData$settings2.to_a_page) === null || _settingData$settings3 === void 0 ? void 0 : _settingData$settings3.redirection_message);
    setCustomURL(settingData === null || settingData === void 0 ? void 0 : (_settingData$settings4 = settingData.settings) === null || _settingData$settings4 === void 0 ? void 0 : (_settingData$settings5 = _settingData$settings4.confirmation_type) === null || _settingData$settings5 === void 0 ? void 0 : (_settingData$settings6 = _settingData$settings5.to_a_custom_url) === null || _settingData$settings6 === void 0 ? void 0 : _settingData$settings6.custom_url);
    setCustomRedirectionMessage(settingData === null || settingData === void 0 ? void 0 : (_settingData$settings7 = settingData.settings) === null || _settingData$settings7 === void 0 ? void 0 : (_settingData$settings8 = _settingData$settings7.confirmation_type) === null || _settingData$settings8 === void 0 ? void 0 : (_settingData$settings9 = _settingData$settings8.to_a_custom_url) === null || _settingData$settings9 === void 0 ? void 0 : _settingData$settings9.custom_redirection_message);
    setFormLayout(settingData === null || settingData === void 0 ? void 0 : (_settingData$settings10 = settingData.settings) === null || _settingData$settings10 === void 0 ? void 0 : _settingData$settings10.form_layout);
  }, [prevSetting]);
  useEffect(async () => {
    if ("same-page" === currentTab) {
      setSettingData({
        settings: {
          confirmation_type: {
            same_page: {
              message_to_show: messageToShow,
              after_form_submission: afterFormSubmission
            }
          },
          form_layout: formLayout,
          schedule: {
            form_scheduling: formScheduling,
            submission_start: {
              date: submissionStartDate,
              time: submissionStartTime
            }
          },
          restriction: {
            max_entries: maxEntries,
            max_number: count,
            max_type: ""
          }
        }
      });
    } else if ("page" === currentTab) {
      setSettingData({
        settings: {
          confirmation_type: {
            to_a_page: {
              page: page,
              redirection_message: redirectionMessage
            }
          },
          form_layout: formLayout,
          schedule: {
            form_scheduling: formScheduling,
            submission_start: {
              date: submissionStartDate,
              time: submissionStartTime
            }
          },
          restriction: {
            max_entries: maxEntries,
            max_number: count,
            max_type: ""
          }
        }
      });
    } else if ("custom-url" === currentTab) {
      setSettingData({
        settings: {
          confirmation_type: {
            to_a_custom_url: {
              custom_url: customURL,
              custom_redirection_message: customRedirectionMessage
            }
          },
          form_layout: formLayout,
          schedule: {
            form_scheduling: formScheduling,
            submission_start: {
              date: submissionStartDate,
              time: submissionStartTime
            }
          },
          restriction: {
            max_entries: maxEntries,
            max_number: count,
            max_type: ""
          }
        }
      });
    }
  }, [messageToShow, afterFormSubmission, page, redirectionMessage, customURL, formLayout, formScheduling, submissionStartDate, submissionStartTime, maxEntries, count, maxType]);
  useEffect(() => {
    localStorage.setItem("getsettings", JSON.stringify(settingData));
  }, [settingData]);
  let currentDate = new Date();
  const toggleTab = index => {
    console.log(index);
    setTabState(index);
    if ("page" === index) {
      const getPageData = async () => {
        const res = await fetch(`${window.MRM_Vars.api_base_url}wp/v2/pages`);
        const resJson = await res.json();
        if (200 == res.status) {
          setPageData(resJson);
        }
      };
      getPageData();
    }
  };
  const [pageId, setPageId] = useState();
  const handlePageChange = state => {
    console.log(state);
  };
  useEffect(() => {
    const optionArray = [];
    pageData === null || pageData === void 0 ? void 0 : pageData.map(page => {
      optionArray.push({
        value: page.id,
        label: page.title.rendered
      });
    });
    setPageOptions(optionArray);
  }, [pageData]);

  //-------settings pannel open function-------
  const showSettingsPannel = event => {
    const el = document.getElementsByClassName("getdave-sbe-block-editor");
    el[0].classList.remove("show-settings-pannel");
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
  const handleConfirmationType = index => {
    setCurrentTab(index);
    toggleTab(index);
  };
  let submissionType = "hide-form";
  let labelAlign = "center";
  const dateTimeSplitter = () => {
    const convertedDate = JSON.stringify(date);
    setSubmissionStartDate(convertedDate.slice(1, 11));
    setSubmissionStartTime(convertedDate.slice(12, 20));
  };
  useEffect(() => {
    dateTimeSplitter();
  }, [date]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, console.log(pageOptions), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-builder-sidebar",
    role: "region",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("MRM Block Editor advanced settings."),
    tabIndex: "-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, {
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Inspector")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorSlot, {
    bubblesVirtually: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, {
    className: "settings-pannel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-panel__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), "Settings"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "close-pannel",
    onClick: showSettingsPannel
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
    onClick: () => handleConfirmationType("same-page")
  }, "Same Page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tabState === "page" ? "tab-nav-item active" : "tab-nav-item",
    onClick: () => handleConfirmationType("page")
  }, "To a page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tabState === "custom-url" ? "tab-nav-item active" : "tab-nav-item",
    onClick: () => handleConfirmationType("custom-url")
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
    name: "message_to_show",
    defaultValue: messageToShow,
    onChange: e => setMessageToShow(e)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "After Form Submission", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Define behaviour of the form after submission"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
    selected: afterFormSubmission,
    options: [{
      label: "None",
      value: "none"
    }, {
      label: "Hide Form",
      value: "hide_form"
    }, {
      label: "Reset Form",
      value: "reset_form"
    }],
    onChange: state => setAfterFormSubmission(state)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tabState === "page" ? "single-tab-content same-page-tab-content active" : "single-tab-content same-page-tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Select a page", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Which page you want to redirect after the submitted the form?"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: pageId,
    options: pageOptions,
    onChange: state => handlePageChange(state)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Redirection Message", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "What is the message after redirection of a page?"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    name: "redirection_message",
    defaultValue: redirectionMessage,
    onChange: e => setRedirectionMessage(e)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tabState === "custom-url" ? "single-tab-content same-page-tab-content active" : "single-tab-content same-page-tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Custom URL", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Enter a custom URL to redirect"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    name: "custom-url",
    defaultValue: customURL,
    onChange: e => setCustomURL(e)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Redirection Message", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Reidrectional message for custom URL"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    name: "custom-redirection-message",
    defaultValue: customRedirectionMessage,
    onChange: e => setCustomRedirectionMessage(e)
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
  }, "Form Placement", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Animation to show up your form"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
    selected: formLayout,
    options: [{
      label: "Default",
      value: "below-pages"
    }, {
      label: "Pop Up",
      value: "popup"
    }, {
      label: "Fly Ins",
      value: "flyins"
    }, {
      label: "Fixed Bar",
      value: "fixed-bar"
    }],
    onChange: state => setFormLayout(state)
  })))), 'below-pages' !== formLayout && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Form Animation",
    className: "form-animation-settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannelbody-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Animation Type", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Animation to show up your form"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    options: [{
      label: "Fade In",
      value: "fade-in"
    }, {
      label: "Slide In",
      value: "slide-in"
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
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar/index.jsx");
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    icon: _components_email_field_block_icon__WEBPACK_IMPORTED_MODULE_5__["default"].EmailField,
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
    icon: _components_first_name_block_icon__WEBPACK_IMPORTED_MODULE_10__["default"].firstName,
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
    icon: _components_last_name_block_icon__WEBPACK_IMPORTED_MODULE_14__["default"].lastName,
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
    icon: _components_mrm_button_block_icon__WEBPACK_IMPORTED_MODULE_18__["default"].Button,
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
    icon: _components_mrm_custom_field_icon__WEBPACK_IMPORTED_MODULE_22__["default"].CustomField,
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

/***/ }),

/***/ "../../../src/components/AlertPopup.jsx":
/*!**********************************************!*\
  !*** ../../../src/components/AlertPopup.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AlertPopup; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/CrossIcon */ "../../../src/components/Icons/CrossIcon.jsx");
/* harmony import */ var _Icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/Delete */ "../../../src/components/Icons/Delete.jsx");




function AlertPopup(props) {
  const [deleteClass, setDeleteClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onCancel = () => {
    setDeleteClass(true);
    props.onShowAlert("none");
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: deleteClass ? "mintmrm-delete-alert-wrapper" : "mintmrm-delete-alert-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mintmrm-delete-confirmation"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "delete-confirmation-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "No item selected"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cross-icon",
    onClick: onCancel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "delete-confirmation-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_Delete__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Please select at least one item to bulk action.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "mintmrm-delete-confirm-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn-default cancel",
    onClick: onCancel
  }, "Ok")))));
}

/***/ }),

/***/ "../../../src/components/Campaign/CampaignCustomSelect.jsx":
/*!*****************************************************************!*\
  !*** ../../../src/components/Campaign/CampaignCustomSelect.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CampaignCustomSelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/List */ "../../../src/services/List.jsx");
/* harmony import */ var _services_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Tag */ "../../../src/services/Tag.jsx");
/* harmony import */ var _Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/CrossIcon */ "../../../src/components/Icons/CrossIcon.jsx");
/* harmony import */ var _Icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/Search */ "../../../src/components/Icons/Search.jsx");
/* harmony import */ var _OptionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OptionList */ "../../../src/components/Campaign/OptionList.jsx");







function CampaignCustomSelect(props) {
  var _props$recipientTags3, _props$recipientTags4, _props$recipientTags5, _props$recipientLists3, _props$recipientLists4, _props$recipientLists5;
  const [activeTag, setActiveTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [activeList, setActiveList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [lists, setLists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [searchTag, setSearchTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [searchList, setSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const filteredTags = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (searchTag) {
      return tags.filter(item => item.title.toLowerCase().indexOf(searchTag.toLocaleLowerCase()) > -1);
    }
    return tags;
  }, [searchTag, tags]);
  const filteredLists = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (searchList) {
      return lists.filter(item => item.title.toLowerCase().indexOf(searchList.toLocaleLowerCase()) > -1);
    }
    return lists;
  }, [searchList, lists]);
  const showTag = () => {
    setActiveTag(true);
    setActiveList(false);
  };
  const showList = () => {
    setActiveTag(false);
    setActiveList(true);
  };

  // const deleteItem = (id) => {
  //   const updatedListItem = checkList.filter((item, index) => {
  //     return index != id;
  //   });
  //   const updatedTagItem = checktag.filter((item, index) => {
  //     return index != id;
  //   });
  //   setCheckList(updatedListItem);
  //   setChecktag(updatedTagItem);
  // };

  const deleteSelectedTag = (e, id) => {
    var _props$recipientTags;
    const index = (_props$recipientTags = props.recipientTags) === null || _props$recipientTags === void 0 ? void 0 : _props$recipientTags.findIndex(item => item.id == id);

    // already in selected list so remove it from the array
    if (index >= 0) {
      props.setRecipientTags(props.recipientTags.filter(item => item.id != id));
    }
  };
  const deleteSelectedList = (e, id) => {
    var _props$recipientLists;
    const index = (_props$recipientLists = props.recipientLists) === null || _props$recipientLists === void 0 ? void 0 : _props$recipientLists.findIndex(item => item.id == id);

    // already in selected list so remove it from the array
    if (index >= 0) {
      props.setRecipientLists(props.recipientLists.filter(item => item.id != id));
    }
  };
  const deleteAllTag = () => {
    props.setRecipientTags([]);
  };
  const deleteAllList = () => {
    props.setRecipientLists([]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Get lists
    (0,_services_List__WEBPACK_IMPORTED_MODULE_2__.getLists)().then(results => {
      setLists(results.data);
    });
    // Get tags
    (0,_services_Tag__WEBPACK_IMPORTED_MODULE_3__.getTags)().then(results => {
      setTags(results.data);
    });
  }, []);
  const checkIfSelectedList = id => {
    var _props$recipientLists2;
    const checkedList = ((_props$recipientLists2 = props.recipientLists) === null || _props$recipientLists2 === void 0 ? void 0 : _props$recipientLists2.findIndex(item => item.id == id)) >= 0;
    return checkedList;
  };
  const checkIfSelectedTag = id => {
    var _props$recipientTags2;
    const checkedTag = ((_props$recipientTags2 = props.recipientTags) === null || _props$recipientTags2 === void 0 ? void 0 : _props$recipientTags2.findIndex(item => item.id == id)) >= 0;
    return checkedTag;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: props.dropDown ? "recipient-dropdown" : "recipient-dropdown inactive"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dropdown-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: activeTag ? "tab-button active tag-btn" : "tab-button tag-btn",
    onClick: showTag
  }, "Tag"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: activeList ? "tab-button active list-btn" : "tab-button list-btn",
    onClick: showList
  }, "List")), activeTag ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "options-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ((_props$recipientTags3 = props.recipientTags) === null || _props$recipientTags3 === void 0 ? void 0 : _props$recipientTags3.length) != 0 ? "selected-items" : "selected-items inactive"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items"
  }, (_props$recipientTags4 = props.recipientTags) === null || _props$recipientTags4 === void 0 ? void 0 : _props$recipientTags4.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      key: index
    }, item.title, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cross-icon",
      onClick: e => deleteSelectedTag(e, item.id)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: ((_props$recipientTags5 = props.recipientTags) === null || _props$recipientTags5 === void 0 ? void 0 : _props$recipientTags5.length) == 0 ? "clear-btn inactive" : "clear-btn",
    onClick: deleteAllTag
  }, "Clear")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dropdown-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "searchbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "pos-relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_Search__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "recipient-input",
    type: "search",
    placeholder: "Search tag",
    value: searchTag,
    onChange: e => setSearchTag(e.target.value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "checkbox-options"
  }, (filteredTags === null || filteredTags === void 0 ? void 0 : filteredTags.length) > 0 && filteredTags.map((item, index) => {
    let checkedTag = checkIfSelectedTag(item.id);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: checkedTag ? "single-column mrm-custom-select-single-column-selected" : "single-column"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_OptionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selected: props.recipientTags,
      setSelected: props.setRecipientTags,
      allowMultiple: true,
      id: item.id,
      title: item.title,
      checked: checkedTag
    }));
  }), (filteredTags === null || filteredTags === void 0 ? void 0 : filteredTags.length) == 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "no-item-found"
  }, "No item found") : null))) : null, activeList ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "options-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ((_props$recipientLists3 = props.recipientLists) === null || _props$recipientLists3 === void 0 ? void 0 : _props$recipientLists3.length) != 0 ? "selected-items" : "selected-items inactive"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items"
  }, (_props$recipientLists4 = props.recipientLists) === null || _props$recipientLists4 === void 0 ? void 0 : _props$recipientLists4.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      key: index
    }, item.title, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cross-icon",
      onClick: e => deleteSelectedList(e, item.id)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: ((_props$recipientLists5 = props.recipientLists) === null || _props$recipientLists5 === void 0 ? void 0 : _props$recipientLists5.length) == 0 ? "clear-btn inactive" : "clear-btn",
    onClick: deleteAllList
  }, "Clear")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dropdown-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "searchbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "pos-relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_Search__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "recipient-input",
    type: "search",
    placeholder: "Search tag",
    onChange: e => setSearchList(e.target.value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "checkbox-options option-section"
  }, (filteredLists === null || filteredLists === void 0 ? void 0 : filteredLists.length) > 0 && filteredLists.map((item, index) => {
    let checkedList = checkIfSelectedList(item.id);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: checkedList ? "single-column mrm-custom-select-single-column-selected" : "single-column"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_OptionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selected: props.recipientLists,
      setSelected: props.setRecipientLists,
      allowMultiple: true,
      id: item.id,
      title: item.title,
      checked: checkedList
    }));
  }), (filteredLists === null || filteredLists === void 0 ? void 0 : filteredLists.length) == 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "no-item-found"
  }, "No item found") : null))) : null));
}

/***/ }),

/***/ "../../../src/components/Campaign/OptionList.jsx":
/*!*******************************************************!*\
  !*** ../../../src/components/Campaign/OptionList.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OptionList; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function OptionList(props) {
  const {
    selected,
    setSelected,
    allowMultiple = true
  } = props;

  // const handleChange = (e) => {
  //   let updatedList = [...checkItem];
  //   if (e.target.checked) {
  //     updatedList = [...checkItem, e.target.value];
  //     // setCheckItem([...checkItem, e.target.value]);
  //   } else {
  //     updatedList.splice(checkItem.indexOf(e.target.value), 1);
  //   }
  //   setCheckItem(updatedList);
  //   // console.log(updatedList);
  // };

  const handleSelectOne = e => {
    e.stopPropagation();
    let value = e.target.value ? e.target.value : e.target.dataset.customValue;
    let id = e.target.id ? e.target.id : e.target.dataset.customId;
    const index = selected.findIndex(item => item.id == id);

    // already in selected list so remove it from the array
    if (allowMultiple) {
      if (index >= 0) {
        setSelected(selected.filter(item => item.id != id));
      } else {
        // add id to the array
        setSelected([...selected, {
          id: id,
          title: value
        }]);
      }
    } else {
      if (index >= 0) setSelected([]);else setSelected([{
        id: id,
        title: value
      }]);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "mintmrm-checkbox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: props.id,
    id: props.id,
    value: props.title,
    onChange: handleSelectOne,
    checked: props.checked
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: props.id,
    className: "mrm-custom-select-label"
  }, props.title));
}

/***/ }),

/***/ "../../../src/components/CustomSelect/index.jsx":
/*!******************************************************!*\
  !*** ../../../src/components/CustomSelect/index.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomSelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useGlobalStore */ "../../../src/hooks/useGlobalStore.js");
/* harmony import */ var _Icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/Search */ "../../../src/components/Icons/Search.jsx");
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadingIndicator */ "../../../src/components/LoadingIndicator/index.jsx");





function CustomSelect(props) {
  // global state reference for whether to hide all dropdown
  const hideAllCustomSelect = (0,_hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalStore)(state => state.hideAllCustomSelect);
  // global state reference for which dropdown is currently active
  const activeCustomSelect = (0,_hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalStore)(state => state.activeCustomSelect);
  const {
    selected,
    setSelected,
    options = null,
    endpoint = "/lists",
    page = 1,
    perPage = 15,
    placeholder = "Lists",
    name = "list",
    // used inside the new button of
    listTitle = "CHOOSE LIST",
    listTitleOnNotFound = "No Data Found",
    searchPlaceHolder = "Search...",
    allowMultiple = true,
    showSearchBar = true,
    showListTitle = true,
    showSelectedInside = true,
    allowNewCreate = true
  } = props;
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const customSelectUUID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Math.random());

  // store retrieved
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  // search input value is stored here
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  // search query, search query only updates when there are more than 3 characters typed
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  // loading or not
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  // function used for either showing or hiding the dropdown
  function toggleActive(event) {
    event.stopPropagation();
    _hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalStore.setState({
      hideAllCustomSelect: false,
      activeCustomSelect: activeCustomSelect == customSelectUUID.current ? null : customSelectUUID.current
    });
  }

  // helper function to set the search query only when there are at least 3 characters or more
  function handleSearch(e) {
    e.stopPropagation();
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
    if (value.length >= 1) setQuery(`&search=${value}`);else setQuery("");
  }

  // handler for one single item click for both list item and checkbox rendering
  const handleSelectOne = e => {
    e.stopPropagation();
    // since this function is handling input for both checkboxes and li elements
    // there might be either id and value for input checkboxes
    // or custom ID and custom Value dataset attribute for li elements
    let value = e.target.value ? e.target.value : e.target.dataset.customValue;
    let id = e.target.id ? e.target.id : e.target.dataset.customId;
    const index = selected === null || selected === void 0 ? void 0 : selected.findIndex(item => item.id == id);

    // already in selected list so remove it from the array
    if (allowMultiple) {
      if (index >= 0) {
        setSelected(selected.filter(item => item.id != id));
      } else {
        // add id to the array
        setSelected([...selected, {
          id: id,
          title: value
        }]);
      }
    } else {
      if (index >= 0) setSelected([]);else setSelected([{
        id: id,
        title: value
      }]);
    }
  };

  // function used for checking whether the current item is selected or not
  const checkIfSelected = id => {
    const checked = (selected === null || selected === void 0 ? void 0 : selected.findIndex(item => item.id == id)) >= 0;
    return checked;
  };
  const deleteSelected = (e, id) => {
    const index = selected === null || selected === void 0 ? void 0 : selected.findIndex(item => item.id == id);

    // already in selected list so remove it from the array
    if (allowMultiple) {
      if (index >= 0) {
        setSelected(selected.filter(item => item.id != id));
      }
    } else {
      if (index >= 0) setSelected([]);
    }
  };

  // at first page load get all the available lists
  // keep fetching lists whenever user types something in the search bar
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function getItems() {
      setLoading(true);
      const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1${endpoint}?&page=${page}&per-page=${perPage}${query}`);
      const resJson = await res.json();
      if (resJson.code == 200) {
        setItems(resJson.data.data);
        setLoading(false);
      } else {
        console.log(resJson);
      }
    }
    if (!options) getItems();
  }, [query]);

  // Handle new list or tag creation
  const addNewItem = async () => {
    let res = null;
    let body = {
      title: search,
      slug: search.toLowerCase().replace(/[\W_]+/g, "-")
    };
    try {
      // create contact
      setLoading(true);
      res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1${endpoint}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const resJson = await res.json();
      if (resJson.code == 201) {
        setSearch("");
        setQuery("");
        setSelected([...selected, {
          id: resJson.data,
          title: body.title
        }]);
      } else {
        window.alert(resJson.message);
      }
    } catch (e) {} finally {
      setLoading(false);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-custom-select-container",
    key: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: activeCustomSelect == customSelectUUID.current && !hideAllCustomSelect ? "mrm-custom-select-btn show" : "mrm-custom-select-btn",
    onClick: toggleActive,
    ref: buttonRef
  }, placeholder), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: activeCustomSelect == customSelectUUID.current && !hideAllCustomSelect ? "mintmrm-dropdown mrm-custom-select-dropdown show" : "mintmrm-dropdown mrm-custom-select-dropdown",
    onClick: e => {
      e.stopPropagation();
    }
  }, showSearchBar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "searchbar",
    key: "hello"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "pos-relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_Search__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "search",
    name: "column-search",
    placeholder: searchPlaceHolder,
    value: search,
    onChange: handleSearch
  }))), showListTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "list-title",
    key: "world"
  }, !loading ? items !== null && items !== void 0 && items.length && !options == 0 ? listTitleOnNotFound : listTitle : null), options && options.map((item, index) => {
    let checked = checkIfSelected(item.id);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: checked ? "single-column mrm-custom-select-single-column-selected" : "single-column",
      "data-custom-id": item.id,
      "data-custom-value": item.title,
      onClick: handleSelectOne
    }, item.title);
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dropdown-options"
  }, (items === null || items === void 0 ? void 0 : items.length) > 0 && !options && !loading && items.map((item, index) => {
    let checked = checkIfSelected(item.id);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: checked ? "single-column mrm-custom-select-single-column-selected" : "single-column"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "mintmrm-checkbox"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      name: item.id,
      id: item.id,
      value: item.title,
      onChange: handleSelectOne,
      checked: checked
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: item.id,
      className: "mrm-custom-select-label"
    }, item.title)));
  })), (items === null || items === void 0 ? void 0 : items.length) == 0 && allowNewCreate && !loading && !options && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "mrm-custom-select-add-btn",
    onClick: addNewItem
  }, `+ Add new ${name} "${search}"`)), loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "table"
  }))));
}

/***/ }),

/***/ "../../../src/components/Form/DesktopView.jsx":
/*!****************************************************!*\
  !*** ../../../src/components/Form/DesktopView.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DesktopView = props => {
  const {
    blockData
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "resposive-preview-desktop"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-preview-inner",
    dangerouslySetInnerHTML: {
      __html: blockData
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (DesktopView);

/***/ }),

/***/ "../../../src/components/Form/FormEditor.jsx":
/*!***************************************************!*\
  !*** ../../../src/components/Form/FormEditor.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/index.js");
/* harmony import */ var _InputItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InputItem */ "../../../src/components/InputItem/index.jsx");
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CustomSelect */ "../../../src/components/CustomSelect/index.jsx");
/* harmony import */ var _Selectbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Selectbox */ "../../../src/components/Selectbox/index.jsx");
/* harmony import */ var _services_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/List */ "../../../src/services/List.jsx");
/* harmony import */ var _services_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/Tag */ "../../../src/services/Tag.jsx");
/* harmony import */ var _Campaign_CampaignCustomSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Campaign/CampaignCustomSelect */ "../../../src/components/Campaign/CampaignCustomSelect.jsx");
/* harmony import */ var _Icons_ComputerIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icons/ComputerIcon */ "../../../src/components/Icons/ComputerIcon.jsx");
/* harmony import */ var _Icons_DoubleAngleLeftIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Icons/DoubleAngleLeftIcon */ "../../../src/components/Icons/DoubleAngleLeftIcon.jsx");
/* harmony import */ var _Icons_MobileIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Icons/MobileIcon */ "../../../src/components/Icons/MobileIcon.jsx");
/* harmony import */ var _Icons_ThreeDotIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Icons/ThreeDotIcon */ "../../../src/components/Icons/ThreeDotIcon.jsx");
/* harmony import */ var _Icons_SettingIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Icons/SettingIcon */ "../../../src/components/Icons/SettingIcon.jsx");
/* harmony import */ var _Icons_DownArrowIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Icons/DownArrowIcon */ "../../../src/components/Icons/DownArrowIcon.jsx");
/* harmony import */ var _Icons_UpArrowIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Icons/UpArrowIcon */ "../../../src/components/Icons/UpArrowIcon.jsx");
/* harmony import */ var _MobileView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MobileView */ "../../../src/components/Form/MobileView.jsx");
/* harmony import */ var _DesktopView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DesktopView */ "../../../src/components/Form/DesktopView.jsx");
/* harmony import */ var _Icons_EditIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Icons/EditIcon */ "../../../src/components/Icons/EditIcon.jsx");
/* harmony import */ var _ListenForOutsideClicks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ListenForOutsideClicks */ "../../../src/components/ListenForOutsideClicks.jsx");
/* harmony import */ var _AlertPopup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../AlertPopup */ "../../../src/components/AlertPopup.jsx");
/* harmony import */ var _SuccessfulNotification__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../SuccessfulNotification */ "../../../src/components/SuccessfulNotification.jsx");
/* harmony import */ var _WarningNotification__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../WarningNotification */ "../../../src/components/WarningNotification.jsx");

























const FormEditor = props => {
  const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("editor");

  // lists
  const [lists, setLists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  // tags
  const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [selectedLists, setSelectedLists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [moreOption, setMoreOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [listDropdown, setListDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [settingsPannel, setSettingsPannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)();
  const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(params.id);
  const [blockData, setBlockData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [showPreview, setShowPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showNotification, setShowNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("none");
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [showAlert, setShowAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("none");
  const [savedSuccess, setSaveSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [recipientLists, setRecipientLists] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [recipientTags, setRecipientTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [dropDown, setDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [groupIds, setGroupIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [saveLoader, setsaveLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useNavigate)();
  const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [listening, setListening] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((0,_ListenForOutsideClicks__WEBPACK_IMPORTED_MODULE_18__["default"])(listening, setListening, menuRef, setDropDown));
  const toggleEnable = () => {
    setEnable(!enable);
  };

  // Hide alert popup after click on ok
  const onShowAlert = async status => {
    setShowAlert(status);
  };

  // Fetch lists & tags
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Get lists
    (0,_services_List__WEBPACK_IMPORTED_MODULE_5__.getLists)().then(results => {
      results.data.map(function () {
        setLists(results.data);
      });
    });

    // Get tags
    (0,_services_Tag__WEBPACK_IMPORTED_MODULE_6__.getTags)().then(results => {
      setTags(results.data);
    });
  }, []);
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getFormData = async () => {
      const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`);
      const resJson = await res.json();
      if (200 === resJson.code) {
        setFormData(resJson.data);
      }
    };
    if (id) {
      getFormData();
    }
    reload();
  }, []);
  const reload = () => {
    let hashCount = 0;
    const loc = window.location.hash;
    for (let i = 0; i < loc.length; i++) {
      if (loc[i] === "#") {
        hashCount = hashCount + 1;
      }
    }
    if (1 === hashCount) {
      window.location = window.location + "#";
      window.location.reload();
    }
  };
  const [toggleDropdown, setToggleDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleChange = event => {
    event.persist();
    const {
      name,
      value
    } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const onSelect = (e, name) => {
    const updatedOptions = [...e.target.options].filter(option => option.selected).map(x => x.value);
    setFormData(prevState => ({
      ...prevState,
      [name]: updatedOptions
    }));
  };
  const onRemove = (e, name) => {
    let unselectedItem = e.params.data.id;
    setFormData(prevState => ({
      ...prevState,
      [name]: prevState[name].filter(x => x !== unselectedItem)
    }));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const lists = recipientLists.filter(list => list.id > 0).map(list => list.id);
    const tags = recipientTags.filter(tag => tag.id > 0).map(tag => tag.id);
    const group_ids = lists.concat(tags);
    setFormData(prevState => ({
      ...prevState,
      group_ids: group_ids
    }));
    setGroupIds(group_ids);
  }, [recipientLists, recipientTags]);
  const saveFormAsDraft = async () => {
    const storedBlocks = window.localStorage.getItem("getmrmblocks");
    const settingData = window.localStorage.getItem("getsettings");
    setsaveLoader(true);
    const post_data = {
      title: formData === null || formData === void 0 ? void 0 : formData.title,
      form_body: storedBlocks,
      group_ids: groupIds,
      status: 0,
      meta_fields: {
        settings: settingData
      }
    };
    if (id == undefined) {
      const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(post_data)
      });
      const responseData = await res.json();
      setShowNotification("block");
      setMessage(responseData === null || responseData === void 0 ? void 0 : responseData.message);
      if (201 === (responseData === null || responseData === void 0 ? void 0 : responseData.code)) {
        setSaveSuccess(true);
        setsaveLoader(false);
        setId(responseData === null || responseData === void 0 ? void 0 : responseData.data);
      } else if (200 === (responseData === null || responseData === void 0 ? void 0 : responseData.code)) {
        setSaveSuccess(false);
        setsaveLoader(false);
      }
      const timer = setTimeout(() => {
        setShowNotification("none");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(post_data)
      });
      const responseData = await res.json();
      setShowNotification("block");
      setMessage(responseData === null || responseData === void 0 ? void 0 : responseData.message);
      if (201 === (responseData === null || responseData === void 0 ? void 0 : responseData.code)) {
        setSaveSuccess(true);
        setsaveLoader(false);
      } else if (200 === (responseData === null || responseData === void 0 ? void 0 : responseData.code)) {
        setSaveSuccess(false);
        setsaveLoader(false);
      }
      const timer = setTimeout(() => {
        setShowNotification("none");
      }, 3000);
      return () => clearTimeout(timer);
    }
  };
  const saveForm = async () => {
    const storedBlocks = window.localStorage.getItem("getmrmblocks");
    const settingData = window.localStorage.getItem("getsettings");
    setsaveLoader(true);
    const post_data = {
      title: formData === null || formData === void 0 ? void 0 : formData.title,
      form_body: storedBlocks,
      group_ids: groupIds,
      status: 1,
      meta_fields: {
        settings: settingData
      }
    };
    if (id == undefined) {
      const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(post_data)
      });
      const responseData = await res.json();
      setShowNotification("block");
      setMessage(responseData === null || responseData === void 0 ? void 0 : responseData.message);
      if (201 === (responseData === null || responseData === void 0 ? void 0 : responseData.code)) {
        setSaveSuccess(true);
        setsaveLoader(false);
        setId(responseData === null || responseData === void 0 ? void 0 : responseData.data);
      } else if (200 === (responseData === null || responseData === void 0 ? void 0 : responseData.code)) {
        setSaveSuccess(false);
        setsaveLoader(false);
      }
      const timer = setTimeout(() => {
        setShowNotification("none");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(post_data)
      });
      const responseData = await res.json();
      setShowNotification("block");
      setMessage(responseData === null || responseData === void 0 ? void 0 : responseData.message);
      if (201 === (responseData === null || responseData === void 0 ? void 0 : responseData.code)) {
        setSaveSuccess(true);
        setsaveLoader(false);
      } else if (200 === (responseData === null || responseData === void 0 ? void 0 : responseData.code)) {
        setSaveSuccess(false);
        setsaveLoader(false);
      }
      const timer = setTimeout(() => {
        setShowNotification("none");
      }, 3000);
      return () => clearTimeout(timer);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (id) {
      navigate(`/form-builder/${id}`);
    } else {
      navigate(`/form-builder/`);
    }
  }, [id]);
  const [positionName, setPositionName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const handleFormPosition = (param, name) => {
    setFormData(prevState => ({
      ...prevState,
      form_position: param
    }));
    setPositionName(name);
    setToggleDropdown(false);
  };

  //-------show more option click function-------
  const clickShowOption = () => {
    setMoreOption(current => !current);
  };

  //-------list click function-------
  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  //-------settings pannel open function-------
  const showSettingsPannel = () => {
    setSettingsPannel(current => !current);
  };
  const handlePreview = view => {
    setPreview(view);
    const block = window.localStorage.getItem("getmrmblocks");
    setBlockData(block);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-editor-page"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-editor-topbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "topbar-left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Link, {
    to: "/forms/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "back-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_DoubleAngleLeftIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "responsive-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "editor" === preview ? "edit-view active" : "edit-view",
    onClick: e => handlePreview("editor")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_EditIcon__WEBPACK_IMPORTED_MODULE_17__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "desktop" === preview ? "desktop-view active" : "desktop-view",
    onClick: e => handlePreview("desktop")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_ComputerIcon__WEBPACK_IMPORTED_MODULE_8__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "mobile" === preview ? "mobile-view active" : "mobile-view",
    onClick: e => handlePreview("mobile")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_MobileIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "topbar-right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: moreOption ? "three-dot-btn show" : "three-dot-btn",
    onClick: clickShowOption
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_ThreeDotIcon__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "mintmrm-dropdown"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    onClick: saveFormAsDraft
  }, "Save as Draft"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "mintmrm-btn settings",
    onClick: showSettingsPannel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_SettingIcon__WEBPACK_IMPORTED_MODULE_12__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: saveLoader ? "mintmrm-btn enable show-loader" : "mintmrm-btn enable",
    onClick: saveForm
  }, id ? "Update" : "Publish", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-loader"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-editor-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-editor-title-area"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_InputItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Title",
    name: "title",
    handleChange: handleChange,
    value: formData === null || formData === void 0 ? void 0 : formData.title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "list-label"
  }, "Assign To"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-content",
    ref: menuRef
  }, recipientLists.length == 0 && recipientTags.length == 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "all-recipients",
    onClick: showDropDown
  }, "All Subscriber", dropDown ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_UpArrowIcon__WEBPACK_IMPORTED_MODULE_14__["default"], null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_DownArrowIcon__WEBPACK_IMPORTED_MODULE_13__["default"], null)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "all-recipients selected show",
    onClick: showDropDown
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "tags"
  }, recipientTags.length, " Tags"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "from"
  }, "and"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "lists"
  }, recipientLists.length, " Lists."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "recipients"
  }, recipientLists.length + recipientTags.length, " Groups"), dropDown ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_UpArrowIcon__WEBPACK_IMPORTED_MODULE_14__["default"], null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_DownArrowIcon__WEBPACK_IMPORTED_MODULE_13__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Campaign_CampaignCustomSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
    dropDown: dropDown,
    setRecipientTags: setRecipientTags,
    recipientTags: recipientTags,
    setRecipientLists: setRecipientLists,
    recipientLists: recipientLists
  })))), preview === "mobile" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MobileView__WEBPACK_IMPORTED_MODULE_15__["default"], {
    blockData: blockData
  }) : preview === "desktop" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DesktopView__WEBPACK_IMPORTED_MODULE_16__["default"], {
    blockData: blockData
  })) : "", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "mrm-block-editor",
    className: settingsPannel ? "getdave-sbe-block-editor block-editor show-settings-pannel" : "getdave-sbe-block-editor block-editor",
    style: {
      display: preview === "editor" ? "block" : "none"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mintmrm-container",
    style: {
      display: showAlert
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AlertPopup__WEBPACK_IMPORTED_MODULE_19__["default"], {
    showAlert: showAlert,
    onShowAlert: onShowAlert
  })), savedSuccess && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SuccessfulNotification__WEBPACK_IMPORTED_MODULE_20__["default"], {
    display: showNotification,
    message: message
  }), !savedSuccess && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WarningNotification__WEBPACK_IMPORTED_MODULE_21__["default"], {
    display: showNotification,
    message: message
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (FormEditor);

/***/ }),

/***/ "../../../src/components/Form/MobileView.jsx":
/*!***************************************************!*\
  !*** ../../../src/components/Form/MobileView.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const MobileView = props => {
  const {
    blockData
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "resposive-preview-mobile"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-preview-inner",
    dangerouslySetInnerHTML: {
      __html: blockData
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (MobileView);

/***/ }),

/***/ "../../../src/components/Icons/ComputerIcon.jsx":
/*!******************************************************!*\
  !*** ../../../src/components/Icons/ComputerIcon.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ComputerIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function ComputerIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_540_2530)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.6667 3.33334H3.33333C2.8731 3.33334 2.5 3.70644 2.5 4.16668V12.5C2.5 12.9602 2.8731 13.3333 3.33333 13.3333H16.6667C17.1269 13.3333 17.5 12.9602 17.5 12.5V4.16668C17.5 3.70644 17.1269 3.33334 16.6667 3.33334Z",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.83594 16.6665H14.1693",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.5 13.3333V16.6667",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.5 13.3333V16.6667",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_540_2530"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "20",
    height: "20",
    fill: "white"
  }))));
}

/***/ }),

/***/ "../../../src/components/Icons/CrossIcon.jsx":
/*!***************************************************!*\
  !*** ../../../src/components/Icons/CrossIcon.jsx ***!
  \***************************************************/
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
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0.947952 9.99458C0.70278 10.009 0.461663 9.92654 0.275444 9.7646C-0.0918148 9.39086 -0.0918148 8.78724 0.275444 8.41349L8.31722 0.278102C8.6992 -0.0834918 9.29859 -0.063391 9.65603 0.323036C9.97924 0.672481 9.99808 1.20959 9.70013 1.58131L1.61098 9.7646C1.42716 9.92421 1.18991 10.0065 0.947952 9.99458Z",
    fill: "white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.9795 9.99483C8.73102 9.99375 8.49286 9.89398 8.31644 9.71695L0.274636 1.58153C-0.0656111 1.17957 -0.0193528 0.574655 0.377976 0.230418C0.732602 -0.0768058 1.2556 -0.0768058 1.6102 0.230418L9.69935 8.36581C10.0812 8.7275 10.101 9.3339 9.74346 9.72023C9.72924 9.7356 9.71454 9.75046 9.69935 9.76485C9.50128 9.9391 9.24061 10.0224 8.9795 9.99483Z",
    fill: "white"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/Delete.jsx":
/*!************************************************!*\
  !*** ../../../src/components/Icons/Delete.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Delete; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Delete() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 3.75H13.5V3C13.5 2.40326 13.2629 1.83097 12.841 1.40901C12.419 0.987053 11.8467 0.75 11.25 0.75H6.75C6.15326 0.75 5.58097 0.987053 5.15901 1.40901C4.73705 1.83097 4.5 2.40326 4.5 3V3.75H3C2.80109 3.75 2.61032 3.82902 2.46967 3.96967C2.32902 4.11032 2.25 4.30109 2.25 4.5C2.25 4.69891 2.32902 4.88968 2.46967 5.03033C2.61032 5.17098 2.80109 5.25 3 5.25V13.5C3 13.9925 3.097 14.4801 3.28545 14.9351C3.47391 15.39 3.75013 15.8034 4.09835 16.1517C4.80161 16.8549 5.75544 17.25 6.75 17.25H11.25C11.7425 17.25 12.2301 17.153 12.6851 16.9645C13.14 16.7761 13.5534 16.4999 13.9017 16.1517C14.2499 15.8034 14.5261 15.39 14.7145 14.9351C14.903 14.4801 15 13.9925 15 13.5V5.25C15.1989 5.25 15.3897 5.17098 15.5303 5.03033C15.671 4.88968 15.75 4.69891 15.75 4.5C15.75 4.30109 15.671 4.11032 15.5303 3.96967C15.3897 3.82902 15.1989 3.75 15 3.75ZM6 3C6 2.80109 6.07902 2.61032 6.21967 2.46967C6.36032 2.32902 6.55109 2.25 6.75 2.25H11.25C11.4489 2.25 11.6397 2.32902 11.7803 2.46967C11.921 2.61032 12 2.80109 12 3V3.75H6V3ZM13.5 13.5C13.5 14.0967 13.2629 14.669 12.841 15.091C12.419 15.5129 11.8467 15.75 11.25 15.75H6.75C6.15326 15.75 5.58097 15.5129 5.15901 15.091C4.73705 14.669 4.5 14.0967 4.5 13.5V5.25H13.5V13.5Z",
    fill: "#686F7F"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.5 7.5C7.30109 7.5 7.11032 7.57902 6.96967 7.71967C6.82902 7.86032 6.75 8.05109 6.75 8.25V12.75C6.75 12.9489 6.82902 13.1397 6.96967 13.2803C7.11032 13.421 7.30109 13.5 7.5 13.5C7.69891 13.5 7.88968 13.421 8.03033 13.2803C8.17098 13.1397 8.25 12.9489 8.25 12.75V8.25C8.25 8.05109 8.17098 7.86032 8.03033 7.71967C7.88968 7.57902 7.69891 7.5 7.5 7.5Z",
    fill: "#686F7F"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.5 7.5C10.3011 7.5 10.1103 7.57902 9.96967 7.71967C9.82902 7.86032 9.75 8.05109 9.75 8.25V12.75C9.75 12.9489 9.82902 13.1397 9.96967 13.2803C10.1103 13.421 10.3011 13.5 10.5 13.5C10.6989 13.5 10.8897 13.421 11.0303 13.2803C11.171 13.1397 11.25 12.9489 11.25 12.75V8.25C11.25 8.05109 11.171 7.86032 11.0303 7.71967C10.8897 7.57902 10.6989 7.5 10.5 7.5Z",
    fill: "#686F7F"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/DoubleAngleLeftIcon.jsx":
/*!*************************************************************!*\
  !*** ../../../src/components/Icons/DoubleAngleLeftIcon.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DoubleAngleLeftIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function DoubleAngleLeftIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.79981 1.34961L0.799805 6.34406L5.79981 11.3385",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.7998 1.34961L6.7998 6.34406L11.7998 11.3385",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/DownArrowIcon.jsx":
/*!*******************************************************!*\
  !*** ../../../src/components/Icons/DownArrowIcon.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DownArrowIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function DownArrowIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.5035 0.1575C11.4801 0.110303 11.444 0.0705586 11.3993 0.0427353C11.3546 0.014912 11.303 0.00011231 11.2503 0H0.750331C0.697666 0.00011231 0.646076 0.014912 0.60136 0.0427353C0.556644 0.0705586 0.520575 0.110303 0.497206 0.1575C0.474023 0.204856 0.464713 0.257805 0.470353 0.310229C0.475994 0.362653 0.496354 0.41241 0.529081 0.45375L5.77908 7.20375C5.80518 7.2376 5.8387 7.26501 5.87706 7.28387C5.91541 7.30273 5.95759 7.31254 6.00033 7.31254C6.04308 7.31254 6.08525 7.30273 6.12361 7.28387C6.16196 7.26501 6.19548 7.2376 6.22158 7.20375L11.4716 0.45375C11.5043 0.41241 11.5247 0.362653 11.5303 0.310229C11.5359 0.257805 11.5266 0.204856 11.5035 0.1575Z",
    fill: "#A7A8B3"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/EditIcon.jsx":
/*!**************************************************!*\
  !*** ../../../src/components/Icons/EditIcon.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function EditIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.4084 2.59181C14.7091 1.89391 13.7615 1.50195 12.7735 1.50195C11.7855 1.50195 10.8379 1.89391 10.1386 2.59181L8.73546 3.99499L2.42143 10.3093C2.30665 10.4239 2.23224 10.5728 2.20941 10.7334L1.50756 15.6443C1.49234 15.7507 1.50016 15.8591 1.5305 15.9622C1.56083 16.0653 1.61297 16.1607 1.68338 16.2419C1.75379 16.3231 1.84083 16.3882 1.9386 16.4328C2.03637 16.4774 2.14259 16.5005 2.25006 16.5005C2.28559 16.5006 2.32108 16.498 2.35626 16.493L7.26756 15.7915C7.42812 15.7683 7.57686 15.6938 7.69161 15.5791L15.4091 7.86229C15.7552 7.51624 16.0298 7.10541 16.2171 6.65326C16.4044 6.2011 16.5008 5.71647 16.5008 5.22705C16.5008 4.73763 16.4044 4.253 16.2171 3.80084C16.0298 3.34868 15.7552 2.93785 15.4091 2.59181H15.4084ZM6.80758 14.3421L3.13408 14.8665L3.65908 11.1933L9.26593 5.58604L12.415 8.73484L6.80758 14.3421ZM14.3476 6.80179L13.4753 7.67434L10.3261 4.52539L11.1991 3.65231C11.6233 3.24753 12.1872 3.02169 12.7735 3.02169C13.3598 3.02169 13.9237 3.24753 14.3479 3.65231C14.7654 4.07002 14.9999 4.63645 14.9999 5.22705C14.9999 5.81765 14.7654 6.38408 14.3479 6.80179H14.3476Z",
    fill: "#686F7F"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/MobileIcon.jsx":
/*!****************************************************!*\
  !*** ../../../src/components/Icons/MobileIcon.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MobileIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function MobileIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "21",
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.3359 3.40332H6.66927C6.20903 3.40332 5.83594 3.77683 5.83594 4.23758V15.9172C5.83594 16.378 6.20903 16.7515 6.66927 16.7515H13.3359C13.7962 16.7515 14.1693 16.378 14.1693 15.9172V4.23758C14.1693 3.77683 13.7962 3.40332 13.3359 3.40332Z",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.16406 4.2373H10.8307",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10 14.249V14.2574",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/Search.jsx":
/*!************************************************!*\
  !*** ../../../src/components/Icons/Search.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Search() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "15",
    height: "16",
    viewBox: "0 0 15 16",
    fill: "none",
    className: "search-icon",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.75 2.4233C3.8505 2.4233 1.5 4.70257 1.5 7.5142C1.5 10.3258 3.8505 12.6051 6.75 12.6051C9.64949 12.6051 12 10.3258 12 7.5142C12 4.70257 9.64949 2.4233 6.75 2.4233ZM0 7.5142C0 3.89925 3.02208 0.96875 6.75 0.96875C10.4779 0.96875 13.5 3.89925 13.5 7.5142C13.5 11.1292 10.4779 14.0597 6.75 14.0597C3.02208 14.0597 0 11.1292 0 7.5142Z",
    fill: "#686F7F"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10.7197 11.3634C11.0126 11.0794 11.4874 11.0794 11.7803 11.3634L14.7803 14.2725C15.0732 14.5565 15.0732 15.017 14.7803 15.301C14.4874 15.585 14.0126 15.585 13.7197 15.301L10.7197 12.3919C10.4268 12.1079 10.4268 11.6474 10.7197 11.3634Z",
    fill: "#686F7F"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/SettingIcon.jsx":
/*!*****************************************************!*\
  !*** ../../../src/components/Icons/SettingIcon.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SettingIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function SettingIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "21",
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.18115 7.89619C8.72109 7.53421 9.35587 7.34102 10.0052 7.34102C10.876 7.34102 11.7111 7.68807 12.3268 8.30589C12.9426 8.92371 13.2885 9.76169 13.2885 10.6355C13.2885 11.2871 13.096 11.9241 12.7352 12.4659C12.3744 13.0076 11.8616 13.4299 11.2616 13.6792C10.6617 13.9285 10.0016 13.9938 9.3647 13.8667C8.72782 13.7396 8.14279 13.4258 7.6836 12.9651C7.22441 12.5044 6.91167 11.9173 6.78497 11.2782C6.65827 10.6391 6.7233 9.9767 6.97183 9.37469C7.22036 8.77269 7.64121 8.25817 8.18115 7.89619ZM9.05142 12.0674C9.33373 12.2567 9.66565 12.3577 10.0052 12.3577C10.4606 12.3577 10.8972 12.1762 11.2191 11.8532C11.5411 11.5302 11.7219 11.0922 11.7219 10.6355C11.7219 10.2949 11.6212 9.96195 11.4326 9.67873C11.244 9.39551 10.9759 9.17474 10.6622 9.04437C10.3485 8.914 10.0033 8.87988 9.67027 8.94635C9.33724 9.01282 9.03135 9.17687 8.79129 9.41774C8.55122 9.65861 8.38775 9.96548 8.32152 10.2995C8.2553 10.6336 8.28928 10.9798 8.41919 11.2945C8.5491 11.6092 8.76911 11.8782 9.05142 12.0674Z",
    fill: "#6F7075",
    stroke: "white",
    "stroke-width": "0.1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mask", {
    id: "path-2-inside-1_3026_18708",
    fill: "white"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.1026 9.56523C19.0511 9.1894 18.8737 8.84233 18.5996 8.58099C18.3255 8.31966 17.971 8.15961 17.5943 8.12711L16.4026 8.01841L17.1693 7.09032C17.4082 6.80239 17.5438 6.44232 17.5543 6.06783C17.5649 5.69335 17.4499 5.32615 17.2276 5.02511C16.7703 4.42407 16.235 3.887 15.6359 3.42812C15.3359 3.20513 14.9699 3.08969 14.5967 3.1003C14.2234 3.11091 13.8646 3.24697 13.5776 3.48665L12.6526 4.25588L12.5443 3.06023C12.5101 2.67598 12.3446 2.3154 12.0758 2.03958C11.807 1.76377 11.4514 1.58969 11.0693 1.54686C10.3606 1.46355 9.64463 1.46355 8.93594 1.54686C8.56772 1.59674 8.22668 1.76865 7.96699 2.03527C7.7073 2.30189 7.54385 2.64793 7.5026 3.01842L7.3526 4.21407L6.4276 3.44484C6.14063 3.20516 5.78176 3.06911 5.40852 3.05849C5.03529 3.04788 4.66931 3.16332 4.36927 3.38632C3.77024 3.84519 3.23495 4.38227 2.7776 4.9833C2.55536 5.28434 2.4403 5.65154 2.45087 6.02603C2.46145 6.40051 2.59705 6.76059 2.83594 7.04851L3.6026 7.97661L2.41094 8.12711C2.02797 8.16137 1.66859 8.32743 1.39369 8.59715C1.1188 8.86687 0.945301 9.22365 0.902604 9.60704C0.813715 10.3177 0.813715 11.0368 0.902604 11.7475C0.945301 12.1309 1.1188 12.4877 1.39369 12.7574C1.66859 13.0271 2.02797 13.1932 2.41094 13.2274L3.6026 13.3361L2.83594 14.2224C2.59705 14.5103 2.46145 14.8704 2.45087 15.2449C2.4403 15.6194 2.55536 15.9866 2.7776 16.2876C3.23495 16.8887 3.77024 17.4257 4.36927 17.8846C4.66931 18.1076 5.03529 18.223 5.40852 18.2124C5.78176 18.2018 6.14063 18.0658 6.4276 17.8261L7.3526 17.0569L7.5026 18.2525C7.53675 18.6367 7.70226 18.9973 7.97108 19.2731C8.2399 19.549 8.5955 19.723 8.9776 19.7659C9.68594 19.8551 10.4026 19.8551 11.1109 19.7659C11.493 19.723 11.8486 19.549 12.1175 19.2731C12.3863 18.9973 12.5518 18.6367 12.5859 18.2525L12.6943 17.0569L13.6193 17.8261C13.9062 18.0658 14.2651 18.2018 14.6384 18.2124C15.0116 18.223 15.3776 18.1076 15.6776 17.8846C16.2766 17.4257 16.8119 16.8887 17.2693 16.2876C17.4915 15.9866 17.6066 15.6194 17.596 15.2449C17.5854 14.8704 17.4498 14.5103 17.2109 14.2224L16.4443 13.2943L17.6359 13.1856C18.0189 13.1514 18.3783 12.9853 18.6532 12.7156C18.9281 12.4459 19.1016 12.0891 19.1443 11.7057C19.2332 10.995 19.2332 10.2759 19.1443 9.56523H19.1026ZM17.4359 11.5217L15.4359 11.6973C15.2787 11.7113 15.1286 11.7698 15.0032 11.866C14.8778 11.9622 14.7822 12.0922 14.7276 12.2408C14.658 12.4415 14.5744 12.6371 14.4776 12.8261C14.4051 12.9721 14.3767 13.1361 14.396 13.298C14.4152 13.46 14.4813 13.6127 14.5859 13.7375L15.9026 15.2676C15.5342 15.7444 15.1088 16.1741 14.6359 16.5468L13.0859 15.2425C12.9616 15.1375 12.8094 15.0712 12.648 15.0519C12.4866 15.0326 12.3231 15.061 12.1776 15.1338C11.9892 15.2309 11.7943 15.3147 11.5943 15.3846C11.4462 15.4394 11.3166 15.5353 11.2207 15.6612C11.1248 15.787 11.0665 15.9375 11.0526 16.0953L10.8693 18.1104C10.2856 18.1856 9.69465 18.1856 9.11094 18.1104L8.93594 16.1037C8.92202 15.9459 8.86371 15.7953 8.76782 15.6695C8.67192 15.5437 8.54238 15.4478 8.39427 15.393C8.19424 15.3231 7.99933 15.2393 7.81094 15.1421C7.69413 15.0853 7.56572 15.0567 7.43594 15.0585C7.24123 15.0581 7.05253 15.1262 6.9026 15.2508L5.38594 16.5635C4.91067 16.1939 4.48246 15.7671 4.11094 15.2926L5.41094 13.7375C5.51561 13.6127 5.58163 13.46 5.60088 13.298C5.62013 13.1361 5.59176 12.9721 5.51927 12.8261C5.42246 12.6371 5.33893 12.4415 5.26927 12.2408C5.21463 12.0922 5.11905 11.9622 4.99365 11.866C4.86825 11.7698 4.71819 11.7113 4.56094 11.6973L2.5526 11.5134C2.51934 11.2219 2.50264 10.9288 2.5026 10.6355C2.50156 10.339 2.52105 10.0429 2.56094 9.74918L4.56094 9.57359C4.71819 9.55962 4.86825 9.50112 4.99365 9.40491C5.11905 9.30869 5.21463 9.17872 5.26927 9.03012C5.33893 8.82942 5.42246 8.63385 5.51927 8.44483C5.59176 8.29887 5.62013 8.13483 5.60088 7.9729C5.58163 7.81097 5.51561 7.65822 5.41094 7.53346L4.09427 6.00337C4.46268 5.52651 4.88809 5.09687 5.36094 4.7241L6.91094 6.02845C7.03528 6.13347 7.18752 6.19972 7.34891 6.21903C7.5103 6.23834 7.6738 6.20988 7.81927 6.13715C8.00766 6.04001 8.20258 5.9562 8.4026 5.88631C8.55071 5.83149 8.68025 5.73559 8.77615 5.60977C8.87205 5.48395 8.93035 5.33338 8.94427 5.17561L9.16927 3.16056C9.75298 3.08533 10.3439 3.08533 10.9276 3.16056L11.1026 5.16725C11.1165 5.32502 11.1748 5.47559 11.2707 5.60141C11.3666 5.72723 11.4962 5.82313 11.6443 5.87795C11.8443 5.94784 12.0392 6.03165 12.2276 6.12878C12.3731 6.20152 12.5366 6.22998 12.698 6.21067C12.8594 6.19135 13.0116 6.12511 13.1359 6.02009L14.6609 4.69902C15.1362 5.06867 15.5644 5.4955 15.9359 5.96992L14.5943 7.53346C14.4896 7.65822 14.4236 7.81097 14.4043 7.9729C14.3851 8.13483 14.4134 8.29887 14.4859 8.44483C14.5827 8.63385 14.6663 8.82942 14.7359 9.03012C14.7906 9.17872 14.8862 9.30869 15.0116 9.40491C15.137 9.50112 15.287 9.55962 15.4443 9.57359L17.4526 9.75754C17.4859 10.049 17.5026 10.3421 17.5026 10.6355C17.5037 10.9319 17.4842 11.228 17.4443 11.5217H17.4359Z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.1026 9.56523C19.0511 9.1894 18.8737 8.84233 18.5996 8.58099C18.3255 8.31966 17.971 8.15961 17.5943 8.12711L16.4026 8.01841L17.1693 7.09032C17.4082 6.80239 17.5438 6.44232 17.5543 6.06783C17.5649 5.69335 17.4499 5.32615 17.2276 5.02511C16.7703 4.42407 16.235 3.887 15.6359 3.42812C15.3359 3.20513 14.9699 3.08969 14.5967 3.1003C14.2234 3.11091 13.8646 3.24697 13.5776 3.48665L12.6526 4.25588L12.5443 3.06023C12.5101 2.67598 12.3446 2.3154 12.0758 2.03958C11.807 1.76377 11.4514 1.58969 11.0693 1.54686C10.3606 1.46355 9.64463 1.46355 8.93594 1.54686C8.56772 1.59674 8.22668 1.76865 7.96699 2.03527C7.7073 2.30189 7.54385 2.64793 7.5026 3.01842L7.3526 4.21407L6.4276 3.44484C6.14063 3.20516 5.78176 3.06911 5.40852 3.05849C5.03529 3.04788 4.66931 3.16332 4.36927 3.38632C3.77024 3.84519 3.23495 4.38227 2.7776 4.9833C2.55536 5.28434 2.4403 5.65154 2.45087 6.02603C2.46145 6.40051 2.59705 6.76059 2.83594 7.04851L3.6026 7.97661L2.41094 8.12711C2.02797 8.16137 1.66859 8.32743 1.39369 8.59715C1.1188 8.86687 0.945301 9.22365 0.902604 9.60704C0.813715 10.3177 0.813715 11.0368 0.902604 11.7475C0.945301 12.1309 1.1188 12.4877 1.39369 12.7574C1.66859 13.0271 2.02797 13.1932 2.41094 13.2274L3.6026 13.3361L2.83594 14.2224C2.59705 14.5103 2.46145 14.8704 2.45087 15.2449C2.4403 15.6194 2.55536 15.9866 2.7776 16.2876C3.23495 16.8887 3.77024 17.4257 4.36927 17.8846C4.66931 18.1076 5.03529 18.223 5.40852 18.2124C5.78176 18.2018 6.14063 18.0658 6.4276 17.8261L7.3526 17.0569L7.5026 18.2525C7.53675 18.6367 7.70226 18.9973 7.97108 19.2731C8.2399 19.549 8.5955 19.723 8.9776 19.7659C9.68594 19.8551 10.4026 19.8551 11.1109 19.7659C11.493 19.723 11.8486 19.549 12.1175 19.2731C12.3863 18.9973 12.5518 18.6367 12.5859 18.2525L12.6943 17.0569L13.6193 17.8261C13.9062 18.0658 14.2651 18.2018 14.6384 18.2124C15.0116 18.223 15.3776 18.1076 15.6776 17.8846C16.2766 17.4257 16.8119 16.8887 17.2693 16.2876C17.4915 15.9866 17.6066 15.6194 17.596 15.2449C17.5854 14.8704 17.4498 14.5103 17.2109 14.2224L16.4443 13.2943L17.6359 13.1856C18.0189 13.1514 18.3783 12.9853 18.6532 12.7156C18.9281 12.4459 19.1016 12.0891 19.1443 11.7057C19.2332 10.995 19.2332 10.2759 19.1443 9.56523H19.1026ZM17.4359 11.5217L15.4359 11.6973C15.2787 11.7113 15.1286 11.7698 15.0032 11.866C14.8778 11.9622 14.7822 12.0922 14.7276 12.2408C14.658 12.4415 14.5744 12.6371 14.4776 12.8261C14.4051 12.9721 14.3767 13.1361 14.396 13.298C14.4152 13.46 14.4813 13.6127 14.5859 13.7375L15.9026 15.2676C15.5342 15.7444 15.1088 16.1741 14.6359 16.5468L13.0859 15.2425C12.9616 15.1375 12.8094 15.0712 12.648 15.0519C12.4866 15.0326 12.3231 15.061 12.1776 15.1338C11.9892 15.2309 11.7943 15.3147 11.5943 15.3846C11.4462 15.4394 11.3166 15.5353 11.2207 15.6612C11.1248 15.787 11.0665 15.9375 11.0526 16.0953L10.8693 18.1104C10.2856 18.1856 9.69465 18.1856 9.11094 18.1104L8.93594 16.1037C8.92202 15.9459 8.86371 15.7953 8.76782 15.6695C8.67192 15.5437 8.54238 15.4478 8.39427 15.393C8.19424 15.3231 7.99933 15.2393 7.81094 15.1421C7.69413 15.0853 7.56572 15.0567 7.43594 15.0585C7.24123 15.0581 7.05253 15.1262 6.9026 15.2508L5.38594 16.5635C4.91067 16.1939 4.48246 15.7671 4.11094 15.2926L5.41094 13.7375C5.51561 13.6127 5.58163 13.46 5.60088 13.298C5.62013 13.1361 5.59176 12.9721 5.51927 12.8261C5.42246 12.6371 5.33893 12.4415 5.26927 12.2408C5.21463 12.0922 5.11905 11.9622 4.99365 11.866C4.86825 11.7698 4.71819 11.7113 4.56094 11.6973L2.5526 11.5134C2.51934 11.2219 2.50264 10.9288 2.5026 10.6355C2.50156 10.339 2.52105 10.0429 2.56094 9.74918L4.56094 9.57359C4.71819 9.55962 4.86825 9.50112 4.99365 9.40491C5.11905 9.30869 5.21463 9.17872 5.26927 9.03012C5.33893 8.82942 5.42246 8.63385 5.51927 8.44483C5.59176 8.29887 5.62013 8.13483 5.60088 7.9729C5.58163 7.81097 5.51561 7.65822 5.41094 7.53346L4.09427 6.00337C4.46268 5.52651 4.88809 5.09687 5.36094 4.7241L6.91094 6.02845C7.03528 6.13347 7.18752 6.19972 7.34891 6.21903C7.5103 6.23834 7.6738 6.20988 7.81927 6.13715C8.00766 6.04001 8.20258 5.9562 8.4026 5.88631C8.55071 5.83149 8.68025 5.73559 8.77615 5.60977C8.87205 5.48395 8.93035 5.33338 8.94427 5.17561L9.16927 3.16056C9.75298 3.08533 10.3439 3.08533 10.9276 3.16056L11.1026 5.16725C11.1165 5.32502 11.1748 5.47559 11.2707 5.60141C11.3666 5.72723 11.4962 5.82313 11.6443 5.87795C11.8443 5.94784 12.0392 6.03165 12.2276 6.12878C12.3731 6.20152 12.5366 6.22998 12.698 6.21067C12.8594 6.19135 13.0116 6.12511 13.1359 6.02009L14.6609 4.69902C15.1362 5.06867 15.5644 5.4955 15.9359 5.96992L14.5943 7.53346C14.4896 7.65822 14.4236 7.81097 14.4043 7.9729C14.3851 8.13483 14.4134 8.29887 14.4859 8.44483C14.5827 8.63385 14.6663 8.82942 14.7359 9.03012C14.7906 9.17872 14.8862 9.30869 15.0116 9.40491C15.137 9.50112 15.287 9.55962 15.4443 9.57359L17.4526 9.75754C17.4859 10.049 17.5026 10.3421 17.5026 10.6355C17.5037 10.9319 17.4842 11.228 17.4443 11.5217H17.4359Z",
    fill: "#6F7075",
    stroke: "white",
    "stroke-width": "0.2",
    mask: "url(#path-2-inside-1_3026_18708)"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/SuccessfulIcon.jsx":
/*!********************************************************!*\
  !*** ../../../src/components/Icons/SuccessfulIcon.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SuccessfulIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function SuccessfulIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13 0C5.82969 0 0 5.82969 0 13C0 20.1703 5.82969 26 13 26C20.1703 26 26 20.1703 26 13C26 5.82969 20.1703 0 13 0Z",
    fill: "#4BAE4F"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.2871 8.61787C19.602 8.93271 19.602 9.45068 19.2871 9.76553L11.6699 17.3827C11.5125 17.5401 11.3043 17.6214 11.0961 17.6214C10.8879 17.6214 10.6797 17.5401 10.5223 17.3827L6.71367 13.5741C6.39883 13.2593 6.39883 12.7413 6.71367 12.4265C7.02852 12.1116 7.54648 12.1116 7.86133 12.4265L11.0961 15.6612L18.1395 8.61787C18.4543 8.29795 18.9723 8.29795 19.2871 8.61787Z",
    fill: "white"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/ThreeDotIcon.jsx":
/*!******************************************************!*\
  !*** ../../../src/components/Icons/ThreeDotIcon.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ThreeDotIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function ThreeDotIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_772_1606)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.16732 10.8327C4.62756 10.8327 5.00065 10.4596 5.00065 9.99935C5.00065 9.53911 4.62756 9.16602 4.16732 9.16602C3.70708 9.16602 3.33398 9.53911 3.33398 9.99935C3.33398 10.4596 3.70708 10.8327 4.16732 10.8327Z",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.99935 10.8327C10.4596 10.8327 10.8327 10.4596 10.8327 9.99935C10.8327 9.53911 10.4596 9.16602 9.99935 9.16602C9.53911 9.16602 9.16602 9.53911 9.16602 9.99935C9.16602 10.4596 9.53911 10.8327 9.99935 10.8327Z",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.8333 10.8327C16.2936 10.8327 16.6667 10.4596 16.6667 9.99935C16.6667 9.53911 16.2936 9.16602 15.8333 9.16602C15.3731 9.16602 15 9.53911 15 9.99935C15 10.4596 15.3731 10.8327 15.8333 10.8327Z",
    stroke: "#686F7F",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })));
}

/***/ }),

/***/ "../../../src/components/Icons/UpArrowIcon.jsx":
/*!*****************************************************!*\
  !*** ../../../src/components/Icons/UpArrowIcon.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpArrowIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function UpArrowIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0.496544 7.8425C0.519912 7.8897 0.555981 7.92944 0.600697 7.95726C0.645412 7.98509 0.697003 7.99989 0.749669 8L11.2497 8C11.3023 7.99989 11.3539 7.98509 11.3986 7.95726C11.4434 7.92944 11.4794 7.8897 11.5028 7.8425C11.526 7.79514 11.5353 7.74219 11.5296 7.68977C11.524 7.63735 11.5036 7.58759 11.4709 7.54625L6.22092 0.79625C6.19482 0.762399 6.1613 0.734988 6.12294 0.716127C6.08459 0.697266 6.04241 0.687458 5.99967 0.687458C5.95693 0.687458 5.91475 0.697266 5.87639 0.716127C5.83804 0.734988 5.80452 0.762399 5.77842 0.79625L0.528419 7.54625C0.495691 7.58759 0.475331 7.63735 0.46969 7.68977C0.46405 7.74219 0.47336 7.79514 0.496544 7.8425Z",
    fill: "#A7A8B3"
  }));
}

/***/ }),

/***/ "../../../src/components/Icons/WarningIcon.jsx":
/*!*****************************************************!*\
  !*** ../../../src/components/Icons/WarningIcon.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WarningIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function WarningIcon() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M26 13C26 20.1797 20.1797 26 13 26C5.82029 26 0 20.1797 0 13C0 5.82029 5.82029 0 13 0C20.1797 0 26 5.82029 26 13ZM14.625 19.5C14.625 20.3975 13.8975 21.125 13 21.125C12.1025 21.125 11.375 20.3975 11.375 19.5C11.375 18.6025 12.1025 17.875 13 17.875C13.8975 17.875 14.625 18.6025 14.625 19.5ZM13 4.875C12.1025 4.875 11.375 5.60254 11.375 6.5V13C11.375 13.8975 12.1025 14.625 13 14.625C13.8975 14.625 14.625 13.8975 14.625 13V6.5C14.625 5.60254 13.8975 4.875 13 4.875Z",
    fill: "#EC5956"
  }));
}

/***/ }),

/***/ "../../../src/components/InputItem/index.jsx":
/*!***************************************************!*\
  !*** ../../../src/components/InputItem/index.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InputItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "../../../src/components/InputItem/style.css");


function InputItem(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group contact-input-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "",
    "aria-required": true
  }, props.label, props.isRequired ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "*") : null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: props.type ? props.type : "text",
    name: props.name,
    onChange: props.handleChange,
    defaultValue: props.value
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: props !== null && props !== void 0 && props.error ? "error-message show" : "error-message"
  }, props === null || props === void 0 ? void 0 : props.error));
}

/***/ }),

/***/ "../../../src/components/ListenForOutsideClicks.jsx":
/*!**********************************************************!*\
  !*** ../../../src/components/ListenForOutsideClicks.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ListenForOutsideClicks; }
/* harmony export */ });
function ListenForOutsideClicks(listening, setListening, menuRef, setIsOpen) {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach(type => {
      document.addEventListener(`click`, evt => {
        const cur = menuRef.current;
        const node = evt.target;
        if (cur !== null && cur !== void 0 && cur.contains(node)) return;
        setIsOpen(false);
      });
    });
  };
}

/***/ }),

/***/ "../../../src/components/LoadingIndicator/index.jsx":
/*!**********************************************************!*\
  !*** ../../../src/components/LoadingIndicator/index.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoadingIndicator; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function LoadingIndicator(props) {
  const {
    type = "default"
  } = props;
  if ("default" == type) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-circle shimmer-circle-md shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-40 shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-60 shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-80 shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"
    }));
  }
  if ("table" == type) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-60 shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "shimmer-line shimmer-line-br shimmer-line-80 shimmer-animate"
    }));
  }
}

/***/ }),

/***/ "../../../src/components/Selectbox/index.jsx":
/*!***************************************************!*\
  !*** ../../../src/components/Selectbox/index.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Selectbox; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2 */ "../../../node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "../../../src/components/Selectbox/style.css");





function Selectbox(props) {
  const [myValue, setMyValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  // const [selected, setSelected] = useState("false");
  // const selected = optionState === option.value ? "selected" : "false";
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setMyValue(props.value);
    // Init select2
    let element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".mintmrm-" + props.name + "-selectbox");
    element.css("color", "red");
    element.select2({
      dropdownParent: jquery__WEBPACK_IMPORTED_MODULE_1___default()("." + props.name + "-select2-result"),
      placeholder: props.placeholder,
      tags: props.tags
    });
    element.on("select2:select", function (e) {
      props.onSelect(e, props.name, props.arg1); // here arg1 is any extra information that is passed to the calling component
    });

    element.on("select2:unselect", function (e) {
      props.onRemove(e, props.name);
    });
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-group mintmrm-select2-selectbox " + props.name + "-selectbox"
  }, props.label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, props.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: props.name,
    className: "mintmrm-" + props.name + "-selectbox",
    multiple: props.multiple,
    "data-placeholder": props.placeholder,
    defaultValue: myValue
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null), props.options.map((option, key) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: key,
    value: option.id
  }, option.title))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "select2-result " + props.name + "-select2-result"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "error-message"
  }, props === null || props === void 0 ? void 0 : props.error)));
}

/***/ }),

/***/ "../../../src/components/SuccessfulNotification.jsx":
/*!**********************************************************!*\
  !*** ../../../src/components/SuccessfulNotification.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SuccessfulNotification; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/CrossIcon */ "../../../src/components/Icons/CrossIcon.jsx");
/* harmony import */ var _Icons_SuccessfulIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/SuccessfulIcon */ "../../../src/components/Icons/SuccessfulIcon.jsx");




function SuccessfulNotification(props) {
  const [cancelBtn, setCancelBtn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onCancel = () => {
    setCancelBtn(true);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: props.display
    },
    className: cancelBtn ? "successful-notification" : "successful-notification"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "alert-toast"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "alert-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "successfull-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_SuccessfulIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, props.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cross-icon",
    onClick: onCancel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
}

/***/ }),

/***/ "../../../src/components/WarningNotification.jsx":
/*!*******************************************************!*\
  !*** ../../../src/components/WarningNotification.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WarningNotification; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/CrossIcon */ "../../../src/components/Icons/CrossIcon.jsx");
/* harmony import */ var _Icons_WarningIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/WarningIcon */ "../../../src/components/Icons/WarningIcon.jsx");




function WarningNotification(props) {
  const [cancelBtn, setCancelBtn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const onCancel = () => {
    setCancelBtn(true);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: props.display
    },
    className: cancelBtn ? "warn-notification" : "warn-notification"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "alert-toast"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "alert-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "successfull-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_WarningIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, props.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cross-icon",
    onClick: onCancel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
}

/***/ }),

/***/ "../../../src/hooks/useGlobalStore.js":
/*!********************************************!*\
  !*** ../../../src/hooks/useGlobalStore.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGlobalStore": function() { return /* binding */ useGlobalStore; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ "../../../node_modules/zustand/esm/index.js");


const useGlobalStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__["default"])(set => ({
  triggerStep: {
    triggerCondition: "true",
    triggerOption: {}
  },
  condition: [{
    key: "country",
    comparison: "includes",
    value: "dhaka"
  }, [{
    key: "country",
    comparison: "includes",
    value: "dhaka"
  }], {}],
  delay: "",
  sendEmail: "",
  lastStepNodeID: 0,
  navbarMarkup: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null),
  hideGlobalNav: false,
  hideAllCustomSelect: false,
  activeCustomSelect: null,
  counterRefresh: false
}));

/***/ }),

/***/ "../../../src/services/List.jsx":
/*!**************************************!*\
  !*** ../../../src/services/List.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteMultipleListsItems": function() { return /* binding */ deleteMultipleListsItems; },
/* harmony export */   "deleteSingleList": function() { return /* binding */ deleteSingleList; },
/* harmony export */   "getLists": function() { return /* binding */ getLists; }
/* harmony export */ });
// Return Lists from the database
async function getLists() {
  return fetch(window.MRM_Vars.api_base_url + "mrm/v1/lists/").then(response => {
    if (response.ok) {
      return response.json();
    }
  }).then(data => {
    if (200 === data.code) {
      return data.data;
    }
  });
}

// List delete request
async function deleteSingleList(id) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/lists/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

// Multiple lists delete request
async function deleteMultipleListsItems(selected) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/lists/`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      list_ids: selected
    })
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

/***/ }),

/***/ "../../../src/services/Tag.jsx":
/*!*************************************!*\
  !*** ../../../src/services/Tag.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteMultipleTagsItems": function() { return /* binding */ deleteMultipleTagsItems; },
/* harmony export */   "deleteSingleTag": function() { return /* binding */ deleteSingleTag; },
/* harmony export */   "getTags": function() { return /* binding */ getTags; }
/* harmony export */ });
//Return tags from tha database
async function getTags() {
  return fetch(window.MRM_Vars.api_base_url + "mrm/v1/tags/").then(response => {
    if (response.ok) {
      return response.json();
    }
  }).then(data => {
    if (200 == data.code) {
      return data.data;
    }
  });
}

// Tag delete request
async function deleteSingleTag(id) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/tags/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

// Multiple tags delete request
async function deleteMultipleTagsItems(selected) {
  return await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/tags/`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      tag_ids: selected
    })
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

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

/***/ "../../../src/components/InputItem/style.css":
/*!***************************************************!*\
  !*** ../../../src/components/InputItem/style.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../src/components/Selectbox/style.css":
/*!***************************************************!*\
  !*** ../../../src/components/Selectbox/style.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "../../../node_modules/history/index.js":
/*!**********************************************!*\
  !*** ../../../node_modules/history/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; },
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createPath": function() { return /* binding */ createPath; },
/* harmony export */   "parsePath": function() { return /* binding */ parsePath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../../node_modules/@babel/runtime/helpers/esm/extends.js");


/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

var readOnly =  true ? function (obj) {
  return Object.freeze(obj);
} : 0;

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== 'undefined') console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

var BeforeUnloadEventType = 'beforeunload';
var HashChangeEventType = 'hashchange';
var PopStateEventType = 'popstate';
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$window = _options.window,
      window = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation[0],
          nextLocation = _getIndexAndLocation[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

          if (delta) {
            // Revert the POP
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better what
          // is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;

  var _getIndexAndLocation2 = getIndexAndLocation(),
      index = _getIndexAndLocation2[0],
      location = _getIndexAndLocation2[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  } // state defaults to `null` because `window.history.state` does


  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation3 = getIndexAndLocation();

    index = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr[0],
          url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
      } catch (error) {
        // They are going to lose state here, but there is no real
        // way to warn them about it since the page will refresh...
        window.location.assign(url);
      }

      applyTx(nextAction);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr2[0],
          url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options2 = options,
      _options2$window = _options2.window,
      window = _options2$window === void 0 ? document.defaultView : _options2$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _parsePath = parsePath(window.location.hash.substr(1)),
        _parsePath$pathname = _parsePath.pathname,
        pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname,
        _parsePath$search = _parsePath.search,
        search = _parsePath$search === void 0 ? '' : _parsePath$search,
        _parsePath$hash = _parsePath.hash,
        hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;

    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation4 = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation4[0],
          nextLocation = _getIndexAndLocation4[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

          if (delta) {
            // Revert the POP
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better
          // what is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
  // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event

  window.addEventListener(HashChangeEventType, function () {
    var _getIndexAndLocation5 = getIndexAndLocation(),
        nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.


    if (createPath(nextLocation) !== createPath(location)) {
      handlePop();
    }
  });
  var action = Action.Pop;

  var _getIndexAndLocation6 = getIndexAndLocation(),
      index = _getIndexAndLocation6[0],
      location = _getIndexAndLocation6[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function getBaseHref() {
    var base = document.querySelector('base');
    var href = '';

    if (base && base.getAttribute('href')) {
      var url = window.location.href;
      var hashIndex = url.indexOf('#');
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href;
  }

  function createHref(to) {
    return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation7 = getIndexAndLocation();

    index = _getIndexAndLocation7[0];
    location = _getIndexAndLocation7[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

     true ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr3[0],
          url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
      } catch (error) {
        // They are going to lose state here, but there is no real
        // way to warn them about it since the page will refresh...
        window.location.assign(url);
      }

      applyTx(nextAction);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

     true ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr4[0],
          url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options3 = options,
      _options3$initialEntr = _options3.initialEntries,
      initialEntries = _options3$initialEntr === void 0 ? ['/'] : _options3$initialEntr,
      initialIndex = _options3.initialIndex;
  var entries = initialEntries.map(function (entry) {
    var location = readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: createKey()
    }, typeof entry === 'string' ? parsePath(entry) : entry));
     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")") : 0;
    return location;
  });
  var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
  var action = Action.Pop;
  var location = entries[index];
  var listeners = createEvents();
  var blockers = createEvents();

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      search: '',
      hash: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction, nextLocation) {
    action = nextAction;
    location = nextLocation;
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      applyTx(nextAction, nextLocation);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      entries[index] = nextLocation;
      applyTx(nextAction, nextLocation);
    }
  }

  function go(delta) {
    var nextIndex = clamp(index + delta, 0, entries.length - 1);
    var nextAction = Action.Pop;
    var nextLocation = entries[nextIndex];

    function retry() {
      go(delta);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      index = nextIndex;
      applyTx(nextAction, nextLocation);
    }
  }

  var history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      return blockers.push(blocker);
    }
  };
  return history;
} ////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}

function promptBeforeUnload(event) {
  // Cancel the event.
  event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.

  event.returnValue = '';
}

function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },

    push: function push(fn) {
      handlers.push(fn);
      return function () {
        handlers = handlers.filter(function (handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function (fn) {
        return fn && fn(arg);
      });
    }
  };
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */


function createPath(_ref) {
  var _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? '' : _ref$search,
      _ref$hash = _ref.hash,
      hash = _ref$hash === void 0 ? '' : _ref$hash;
  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */

function parsePath(path) {
  var parsedPath = {};

  if (path) {
    var hashIndex = path.indexOf('#');

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    var searchIndex = path.indexOf('?');

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../node_modules/react-router-dom/index.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/react-router-dom/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserRouter": function() { return /* binding */ BrowserRouter; },
/* harmony export */   "HashRouter": function() { return /* binding */ HashRouter; },
/* harmony export */   "Link": function() { return /* binding */ Link; },
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.MemoryRouter; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "Navigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Navigate; },
/* harmony export */   "NavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Action; },
/* harmony export */   "Outlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Outlet; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Router; },
/* harmony export */   "Routes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Routes; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_RouteContext; },
/* harmony export */   "createPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createPath; },
/* harmony export */   "createRoutesFromChildren": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createRoutesFromChildren; },
/* harmony export */   "createSearchParams": function() { return /* binding */ createSearchParams; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath; },
/* harmony export */   "matchRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.parsePath; },
/* harmony export */   "renderMatches": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.renderMatches; },
/* harmony export */   "resolvePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath; },
/* harmony export */   "unstable_HistoryRouter": function() { return /* binding */ HistoryRouter; },
/* harmony export */   "useHref": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useHref; },
/* harmony export */   "useInRouterContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useInRouterContext; },
/* harmony export */   "useLinkClickHandler": function() { return /* binding */ useLinkClickHandler; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation; },
/* harmony export */   "useMatch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useMatch; },
/* harmony export */   "useNavigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate; },
/* harmony export */   "useNavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutletContext; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useParams; },
/* harmony export */   "useResolvedPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath; },
/* harmony export */   "useRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRoutes; },
/* harmony export */   "useSearchParams": function() { return /* binding */ useSearchParams; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "../../../node_modules/history/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "../../../node_modules/react-router/index.js");
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHref)(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (true) {
  Link.displayName = "Link";
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
});

if (true) {
  NavLink.displayName = "NavLink";
} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   true ? warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : 0;
  let defaultSearchParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(createSearchParams(defaultInit));
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let searchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  let setSearchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../node_modules/react-router/index.js":
/*!***************************************************!*\
  !*** ../../../node_modules/react-router/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": function() { return /* binding */ MemoryRouter; },
/* harmony export */   "Navigate": function() { return /* binding */ Navigate; },
/* harmony export */   "NavigationType": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.Action; },
/* harmony export */   "Outlet": function() { return /* binding */ Outlet; },
/* harmony export */   "Route": function() { return /* binding */ Route; },
/* harmony export */   "Router": function() { return /* binding */ Router; },
/* harmony export */   "Routes": function() { return /* binding */ Routes; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* binding */ LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* binding */ NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* binding */ RouteContext; },
/* harmony export */   "createPath": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.createPath; },
/* harmony export */   "createRoutesFromChildren": function() { return /* binding */ createRoutesFromChildren; },
/* harmony export */   "generatePath": function() { return /* binding */ generatePath; },
/* harmony export */   "matchPath": function() { return /* binding */ matchPath; },
/* harmony export */   "matchRoutes": function() { return /* binding */ matchRoutes; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ history__WEBPACK_IMPORTED_MODULE_0__.parsePath; },
/* harmony export */   "renderMatches": function() { return /* binding */ renderMatches; },
/* harmony export */   "resolvePath": function() { return /* binding */ resolvePath; },
/* harmony export */   "useHref": function() { return /* binding */ useHref; },
/* harmony export */   "useInRouterContext": function() { return /* binding */ useInRouterContext; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; },
/* harmony export */   "useMatch": function() { return /* binding */ useMatch; },
/* harmony export */   "useNavigate": function() { return /* binding */ useNavigate; },
/* harmony export */   "useNavigationType": function() { return /* binding */ useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* binding */ useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* binding */ useOutletContext; },
/* harmony export */   "useParams": function() { return /* binding */ useParams; },
/* harmony export */   "useResolvedPath": function() { return /* binding */ useResolvedPath; },
/* harmony export */   "useRoutes": function() { return /* binding */ useRoutes; }
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "../../../node_modules/history/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




const NavigationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);

if (true) {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);

if (true) {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  outlet: null,
  matches: []
});

if (true) {
  RouteContext.displayName = "Route";
}

function invariant(cond, message) {
  if (!cond) throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     true ? warning(false, message) : 0;
  }
}

/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/docs/en/v6/api#generatepath
 */
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }

  return path.replace(/:(\w+)/g, (_, key) => {
    !(params[key] != null) ?  true ? invariant(false, "Missing \":" + key + "\" param") : 0 : void 0;
    return params[key];
  }).replace(/\/*\*$/, _ => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
}
/**
 * A RouteMatch contains info about how a route matched a URL.
 */

/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ?  true ? invariant(false, "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.") : 0 : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      !(route.index !== true) ?  true ? invariant(false, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\".")) : 0 : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */


/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

   true ? warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\".")) : 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else {
    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
     true ? warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ").")) : 0;
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */


function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  let from;

  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }

  return path;
}
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }

  let nextChar = pathname.charAt(basename.length);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(basename.length) || "/";
}
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */

function useHref(to) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;

  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */

function useInRouterContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */

function useLocation() {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype
 */

function useNavigationType() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext).navigationType;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */

function useMatch(pattern) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    pathname
  } = useLocation();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */
function useNavigate() {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext);
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  let activeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/docs/en/v6/api#useoutletcontext
 */

function useOutletContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */

function useOutlet(context) {
  let outlet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useparams
 */

function useParams() {
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */

function useResolvedPath(to) {
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    matches: parentMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (true) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0 : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (true) {
     true ? warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : 0;
     true ? warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.") : 0;
  }

  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) return null;
  return matches.reduceRight((outlet, match, index) => {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(RouteContext.Provider, {
      children: match.route.element !== undefined ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */
function MemoryRouter(_ref) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({
      initialEntries,
      initialIndex
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/docs/en/v6/api#navigate
 */
function Navigate(_ref2) {
  let {
    to,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ?  true ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
   true ? warning(!(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
  let navigate = useNavigate();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    navigate(to, {
      replace,
      state
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */
function Route(_props) {
    true ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : 0 ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = history__WEBPACK_IMPORTED_MODULE_0__.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ?  true ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : 0 : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = (0,history__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
   true ? warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */

function createRoutesFromChildren(children) {
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, element => {
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === react__WEBPACK_IMPORTED_MODULE_1__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }

    !(element.type === Route) ?  true ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0 : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../node_modules/select2/dist/js/select2.js":
/*!********************************************************!*\
  !*** ../../../node_modules/select2/dist/js/select2.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Select2 4.1.0-rc.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m];

      DecoratedClass.prototype[superMethod] =
        SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {};

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id with a prefix.
    // If an id already exists, it simply returns it with a prefix.

    var select2Id = element.getAttribute('data-select2-id');

    if (select2Id != null) {
      return select2Id;
    }

    // If element has id, use it.
    if (element.id) {
      select2Id = 'select2-data-' + element.id;
    } else {
      select2Id = 'select2-data-' + (++id).toString() +
        '-' + Utils.generateChars(4);
    }

    element.setAttribute('data-select2-id', select2Id);

    return select2Id;
  };

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id]) {
      Utils.__cache[id] = {};
    }

    Utils.__cache[id][name] = value;
  };

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      }
      return $(element).data(name); // Fallback to HTML5 data attribs.
    } else {
      return Utils.__cache[id];
    }
  };

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id] != null) {
      delete Utils.__cache[id];
    }

    element.removeAttribute('data-select2-id');
  };

  Utils.copyNonInternalCssClasses = function (dest, src) {
    var classes;

    var destinationClasses = dest.getAttribute('class').trim().split(/\s+/);

    destinationClasses = destinationClasses.filter(function (clazz) {
      // Save all Select2 classes
      return clazz.indexOf('select2-') === 0;
    });

    var sourceClasses = src.getAttribute('class').trim().split(/\s+/);

    sourceClasses = sourceClasses.filter(function (clazz) {
      // Only copy non-Select2 classes
      return clazz.indexOf('select2-') !== 0;
    });

    var replacements = destinationClasses.concat(sourceClasses);

    dest.setAttribute('class', replacements.join(' '));
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option--selectable');

    var $selected = $options.filter('.select2-results__option--selected');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = selected.map(function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option--selectable');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && selectedIds.indexOf(id) > -1)) {
          this.classList.add('select2-results__option--selected');
          $option.attr('aria-selected', 'true');
        } else {
          this.classList.remove('select2-results__option--selected');
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.classList.add('select2-results__option');
    option.classList.add('select2-results__option--selectable');

    var attrs = {
      'role': 'option'
    };

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      attrs['aria-disabled'] = 'true';

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--disabled');
    }

    if (data.id == null) {
      option.classList.remove('select2-results__option--selectable');
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--group');
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested',
        'role': 'none'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    Utils.StoreData(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = Utils.GetData($highlighted[0], 'data');

      if ($highlighted.hasClass('select2-results__option--selected')) {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element[0].classList.add('select2-results__option--highlighted');
      params.element[0].setAttribute('aria-selected', 'true');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option--selectable',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.hasClass('select2-results__option--selected')) {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option--selectable',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted')
          .attr('aria-selected', 'false');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('.select2-results__option--selectable');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);
    this.$selection.attr('aria-controls', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
      }
    });
  };

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title'); // clear tooltip on empty
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered.attr('title', title);
    } else {
      $rendered.removeAttr('title');
    }
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';
    this.$selection.find('.select2-selection__rendered').attr('id', id);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0], 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );

    this.$selection.on(
      'keydown',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        evt.stopPropagation();
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title');
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<button type="button" class="select2-selection__choice__remove" ' +
        'tabindex="-1">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '<span class="select2-selection__choice__display"></span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    var selectionIdPrefix = this.$selection.find('.select2-selection__rendered')
      .attr('id') + '-choice-';

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';

      if (selection.id) {
        selectionId += selection.id;
      } else {
        selectionId += Utils.generateChars(4);
      }

      $selection.find('.select2-selection__choice__display')
        .append(formatted)
        .attr('id', selectionId);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
      }

      var removeItem = this.options.get('translations').get('removeItem');

      var $remove = $selection.find('.select2-selection__choice__remove');

      $remove.attr('title', removeItem());
      $remove.attr('aria-label', removeItem());
      $remove.attr('aria-describedby', selectionId);

      Utils.StoreData($selection[0], 'data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    $rendered.append($selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[

], function () {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder[0].classList.add('select2-selection__placeholder');
    $placeholder[0].classList.remove('select2-selection__choice');

    var placeholderTitle = placeholder.title ||
      placeholder.text ||
      $placeholder.text();

    this.$selection.find('.select2-selection__rendered').attr(
      'title',
      placeholderTitle
    );

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = Utils.GetData($clear[0], 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
    };
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
    }

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
    }

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    this.$selection.find('.select2-selection__clear').remove();
    this.$selection[0].classList.remove('select2-selection--clearable');

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var selectionId = this.$selection.find('.select2-selection__rendered')
      .attr('id');

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<button type="button" class="select2-selection__clear" tabindex="-1">' +
        '<span aria-hidden="true">&times;</span>' +
      '</button>'
    );
    $remove.attr('title', removeAll());
    $remove.attr('aria-label', removeAll());
    $remove.attr('aria-describedby', selectionId);
    Utils.StoreData($remove[0], 'data', data);

    this.$selection.prepend($remove);
    this.$selection[0].classList.add('select2-selection--clearable');
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var searchLabel = this.options.get('translations').get('search');
    var $search = $(
      '<span class="select2-search select2-search--inline">' +
        '<textarea class="select2-search__field"'+
        ' type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' +
        '</textarea>' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('textarea');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    var $rendered = decorated.call(this);

    this._transferTabIndex();
    $rendered.append(this.$searchContainer);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';
    var selectionId = container.id + '-container';

    decorated.call(this, container, $container);

    self.$search.attr('aria-describedby', selectionId);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.resizeSearch();
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$selection
          .find('.select2-selection__choice').last();

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    this.$selection.on('click', '.select2-search--inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '100%';

    if (this.$search.attr('placeholder') === '') {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/selectionCss',[
  '../utils'
], function (Utils) {
  function SelectionCSS () { }

  SelectionCSS.prototype.render = function (decorated) {
    var $selection = decorated.call(this);

    var selectionCssClass = this.options.get('selectionCssClass') || '';

    if (selectionCssClass.indexOf(':all:') !== -1) {
      selectionCssClass = selectionCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
    }

    $selection.addClass(selectionCssClass);

    return $selection;
  };

  return SelectionCSS;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if (relayEvents.indexOf(name) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if (preventableEvents.indexOf(name) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u0152': 'OE',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u0153': 'oe',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03CE': '\u03C9',
    '\u03C2': '\u03C3',
    '\u2019': '\''
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var self = this;

    var data = Array.prototype.map.call(
      this.$element[0].querySelectorAll(':checked'),
      function (selectedElement) {
        return self.item($(selectedElement));
      }
    );

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if (
      data.element != null && data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if (val.indexOf(id) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if (
      data.element != null &&
      data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && val.indexOf(id) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      if (
        this.tagName.toLowerCase() !== 'option' &&
        this.tagName.toLowerCase() !== 'optgroup'
      ) {
        return;
      }

      var $option = $(this);

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    this.$element.append($options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $(option);
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = Utils.GetData($option[0], 'data');

    if (data != null) {
      return data;
    }

    var option = $option[0];

    if (option.tagName.toLowerCase() === 'option') {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if (option.tagName.toLowerCase() === 'optgroup') {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    Utils.StoreData($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  };

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if (existingIds.indexOf(item.id) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        $option.append($children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if (typeof this._request.abort === 'function') {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !Array.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ('status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if (Array.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', 'true');

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    if (params.term == null) {
      return null;
    }

    var term = params.term.trim();

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if (separators.indexOf(termChar) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
      });
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }

        if (successCallback) {
          successCallback();
        }
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery'
], function ($) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);
    var searchLabel = this.options.get('translations').get('search');

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer[0].classList.remove('select2-search--hide');
        } else {
          self.$searchContainer[0].classList.add('select2-search--hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  };

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0]
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
    }

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
    }
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown[0].classList.remove('select2');
    $dropdown[0].classList.add('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
    }

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    this._containerResultsHandlersBound = true;
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown[0].classList
      .contains('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown[0].classList
      .contains('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = {
      top: 0,
      left: 0
    };

    if (
      $.contains(document.body, $offsetParent[0]) ||
      $offsetParent[0].isConnected
      ) {
      parentOffset = $offsetParent.offset();
    }

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown[0].classList.remove('select2-dropdown--below');
      this.$dropdown[0].classList.remove('select2-dropdown--above');
      this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);

      this.$container[0].classList.remove('select2-container--below');
      this.$container[0].classList.remove('select2-container--above');
      this.$container[0].classList.add('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
], function (Utils) {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = Utils.GetData($highlightedResults[0], 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/dropdown/dropdownCss',[
  '../utils'
], function (Utils) {
  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
    }

    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/dropdown/tagsSearchHighlight',[
  '../utils'
], function (Utils) {
  function TagsSearchHighlight () { }

  TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
    var $options = this.$results
    .find(
      '.select2-results__option--selectable' +
      ':not(.select2-results__option--selected)'
    );

    if ($options.length > 0) {
      var $firstOption = $options.first();
      var data = Utils.GetData($firstOption[0], 'data');
      var firstElement = data.element;

      if (firstElement && firstElement.getAttribute) {
        if (firstElement.getAttribute('data-select2-tag') === 'true') {
          $firstOption.trigger('mouseenter');

          return;
        }
      }
    }

    decorated.call(this);
  };

  return TagsSearchHighlight;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    },
    removeAllItems: function () {
      return 'Remove all items';
    },
    removeItem: function () {
      return 'Remove item';
    },
    search: function() {
      return 'Search';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/selectionCss',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',
  './dropdown/dropdownCss',
  './dropdown/tagsSearchHighlight',

  './i18n/en'
], function ($,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, SelectionCSS, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
             DropdownCSS, TagsSearchHighlight,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }

      if (options.tags) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          TagsSearchHighlight
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (options.dropdownCssClass != null) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (options.selectionCssClass != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [];

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l];

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
      }
    }

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if (params.term == null || params.term.trim() === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdLanguageBase: './i18n/',
      autocomplete: 'off',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: {},
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang]').prop('lang');

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  };

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [];
    }

    if ($.isEmptyObject(language)) {
      return [];
    }

    if ($.isPlainObject(language)) {
      return [language];
    }

    var languages;

    if (!Array.isArray(language)) {
      languages = [language];
    } else {
      languages = language;
    }

    var resolvedLanguages = [];

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l]);

      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l].split('-');
        var baseLanguage = languageParts[0];

        resolvedLanguages.push(baseLanguage);
      }
    }

    return resolvedLanguages;
  };

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l];

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
            }
          }
        }
      } else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
      } else {
        languageData = language;
      }

      translations.extend(languageData);
    }

    return translations;
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'jquery',
  './defaults',
  './utils'
], function ($, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
    }

    this.options = Defaults.apply(this.options);
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.autocomplete == null && $e.prop('autocomplete')) {
      this.options.autocomplete = $e.prop('autocomplete');
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if (Utils.GetData($e[0], 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
      Utils.StoreData($e[0], 'tags', true);
    }

    if (Utils.GetData($e[0], 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
    }

    var dataset = {};

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }

    // Pre-load all of the attributes which are prefixed with `data-`
    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
      var attributeName = $e[0].attributes[attr].name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after `data-`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0], dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName] = dataValue;
      }
    }

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, dataset);
    }

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if (excludedData.indexOf(key) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0], 'select2') != null) {
      Utils.GetData($element[0], 'select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element[0].classList.add('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0]);

      return computedStyle.width;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    this._observer = new window.MutationObserver(function (mutations) {
      self._syncA();
      self._syncS(mutations);
    });
    this._observer.observe(this.$element[0], {
      attributes: true,
      childList: true,
      subtree: false
    });
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if (nonRelayEvents.indexOf(name) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container[0].classList.add('select2-container--open');
    });

    this.on('close', function () {
      self.$container[0].classList.remove('select2-container--open');
    });

    this.on('enable', function () {
      self.$container[0].classList.remove('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container[0].classList.add('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container[0].classList.remove('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
        } else if (key === KEYS.ENTER || key === KEYS.TAB) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._isChangeMutation = function (mutations) {
    var self = this;

    if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          return true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      return true;
    } else if (Array.isArray(mutations)) {
      return mutations.some(function (mutation) {
        return self._isChangeMutation(mutation);
      });
    }

    return false;
  };

  Select2.prototype._syncSubtree = function (mutations) {
    var changed = this._isChangeMutation(mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    if (this.isDisabled()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', { originalEvent : evt });
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  Select2.prototype.isOpen = function () {
    return this.$container[0].classList.contains('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container[0].classList.contains('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container[0].classList.add('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if (Array.isArray(newVal)) {
      newVal = newVal.map(function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('input').trigger('change');
  };

  Select2.prototype.destroy = function () {
    Utils.RemoveData(this.$container[0]);
    this.$container.remove();

    this._observer.disconnect();
    this._observer = null;

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element[0].classList.remove('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0]);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container[0].classList
      .add('select2-container--' + this.options.get('theme'));

    Utils.StoreData($container[0], 'element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if (thisMethods.indexOf(options) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));


/***/ }),

/***/ "../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!*****************************************************************************************************!*\
  !*** ../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js":
/*!*******************************************************************************************************************!*\
  !*** ../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");
var shim = __webpack_require__(/*! use-sync-external-store/shim */ "../../../node_modules/use-sync-external-store/shim/index.js");

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = shim.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "../../../node_modules/use-sync-external-store/shim/index.js":
/*!*******************************************************************!*\
  !*** ../../../node_modules/use-sync-external-store/shim/index.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "../../../node_modules/use-sync-external-store/shim/with-selector.js":
/*!***************************************************************************!*\
  !*** ../../../node_modules/use-sync-external-store/shim/with-selector.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.development.js */ "../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js");
}


/***/ }),

/***/ "../../../node_modules/zustand/esm/index.js":
/*!**************************************************!*\
  !*** ../../../node_modules/zustand/esm/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": function() { return /* reexport safe */ zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "default": function() { return /* binding */ create$1; },
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ "../../../node_modules/zustand/esm/vanilla.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ "../../../node_modules/use-sync-external-store/shim/with-selector.js");






const { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__;
function useStore(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = typeof createState === "function" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"])(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var create$1 = create;




/***/ }),

/***/ "../../../node_modules/zustand/esm/vanilla.js":
/*!****************************************************!*\
  !*** ../../../node_modules/zustand/esm/vanilla.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStore; }
/* harmony export */ });
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(
    setState,
    getState,
    api
  );
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;




/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["jQuery"];

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

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*******************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkformbuilder"] = self["webpackChunkformbuilder"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map