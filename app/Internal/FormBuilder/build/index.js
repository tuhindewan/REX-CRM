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
  const defaultData = '<!-- wp:mrmformfield/email-field-block -->\n' + '<div class="mrm-form-group email" style="margin-bottom:12px"><label for="mrm-email" style="color:#363B4E;margin-bottom:7px"></label><div class="input-wrapper"><input type="email" name="email" id="mrm-email" placeholder="Email" required style="background-color:#ffffff;color:#7A8B9A;border-radius:5px;padding-top:11px;padding-right:14px;padding-bottom:11px;padding-left:14px;border-style:solid;border-width:1px;border-color:#DFE1E8" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"/></div></div>\n' + '<!-- /wp:mrmformfield/email-field-block -->\n' + '\n' + '<!-- wp:mrmformfield/mrm-button-block -->\n' + '<div class="mrm-form-group submit" style="margin-bottom:12px;text-align:left"><button class="mrm-submit-button mintmrm-btn" type="submit" style="background-color:;color:;border-radius:5px;padding:15px 20px;line-height:1;letter-spacing:0;border-style:none;font-size:15px;border-width:0;border-color:;width:%">Submit</button></div>\n' + '<!-- /wp:mrmformfield/mrm-button-block -->';
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
        const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/get-form-body/${id}`);
        const resJson = await res.json();
        if (200 === resJson.code) {
          var _resJson$data$;
          window.localStorage.setItem('getmrmblocks', resJson === null || resJson === void 0 ? void 0 : (_resJson$data$ = resJson.data[0]) === null || _resJson$data$ === void 0 ? void 0 : _resJson$data$.form_body);
          const storedBlocks = window.localStorage.getItem('getmrmblocks');
          if (storedBlocks !== null && storedBlocks !== void 0 && storedBlocks.length) {
            handleUpdateBlocks(() => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.parse)(storedBlocks));
          }
        } else {
          handleUpdateBlocks(() => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.parse)(defaultData));
          window.localStorage.setItem('getmrmblocks', defaultData);
        }
      } else {
        handleUpdateBlocks(() => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.parse)(defaultData));
        window.localStorage.setItem('getmrmblocks', defaultData);
      }
    };
    getFormData();
  }, []);
  const SettingPlanelShowHide = () => {
    if ("show" === localStorage.settingsPannel) {
      const el = document.getElementsByClassName("getdave-sbe-block-editor");
      el[0].classList.remove("show-settings-pannel");
      localStorage.setItem("settingsPannel", "hide");
    }
  };

  /**
   * Wrapper for updating blocks. Required as `onInput` callback passed to
   * `BlockEditorProvider` is now called with more than 1 argument. Therefore
   * attempting to setState directly via `updateBlocks` will trigger an error
   * in React.
   */
  function handleUpdateBlocks(blocks) {
    updateBlocks(blocks);
  }
  function handleUpdateBlocksByOnInput(blocks) {
    updateBlocks(blocks);
    window.localStorage.setItem('getmrmblocks', (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.serialize)(blocks));
  }
  function handlePersistBlocks(newBlocks) {
    updateBlocks(newBlocks);
    window.localStorage.setItem('getmrmblocks', (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.serialize)(newBlocks));
    window.localStorage.setItem('getmrmblocks', (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.serialize)(newBlocks));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "get-mrm-block-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_8__.ShortcutProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockEditorProvider, {
    value: blocks,
    onInput: handleUpdateBlocksByOnInput,
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

/***/ "./src/components/components/ButtonGroup.js":
/*!**************************************************!*\
  !*** ./src/components/components/ButtonGroup.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_buttonGroup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/buttonGroup.scss */ "./src/components/components/assets/css/buttonGroup.scss");
/* harmony import */ var _Device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Device */ "./src/components/components/Device.js");



const {
  useState
} = wp.element;
const {
  Button,
  ButtonGroup
} = wp.components;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  let {
    label,
    options,
    value,
    onChange,
    additionalClass,
    responsive,
    device: activeDevice,
    onDeviceChange
  } = _ref;
  const [device, setDevice] = useState('md');
  let responsiveDevice = responsive ? activeDevice ? activeDevice : device : window.mrmTypographyDevice;
  const getValue = () => value ? responsive ? value[responsiveDevice] || '' : value : '';
  const onButtonClick = val => onChange(responsive ? Object.assign({}, value, {
    [responsiveDevice]: val
  }) : val);
  const updateDevice = newDevice => {
    if (typeof activeDevice !== 'undefined') onChange({
      ...value,
      device: newDevice
    });
    setDevice(newDevice);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'mrmTypography-field-group-btn mrmTypography-field ' + (responsive ? 'mrmTypography-responsive' : 'mrmTypography-d-flex')
  }, responsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrmTypography-d-flex mrmTypography-align-center mrmTypography-mb-10"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", label, " "), responsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Device__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: responsiveDevice,
    commonResponsiveDevice: device,
    className: "mrmTypography-ml-10",
    onChange: val => {
      device && onDeviceChange ? onDeviceChange(val) : updateDevice(val);
    }
  })), !responsive && label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", label, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
    className: "mrmTypography-field-child mrmTypography-d-flex"
  }, options.map(_ref2 => {
    let [title, option] = _ref2;
    const activeBtn = option === getValue() ? 'qubley-active-group-btn' : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      className: `qubley-group-button ${activeBtn}${additionalClass ? ` ${additionalClass}` : ''}`,
      onClick: () => onButtonClick(option)
    }, title);
  })));
}

/***/ }),

/***/ "./src/components/components/Device.js":
/*!*********************************************!*\
  !*** ./src/components/components/Device.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  Tooltip
} = wp.components;
class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: typeof props.device !== 'undefined' && props.device !== '' ? props.device : 'md'
    };
  }
  componentDidMount() {
    if (typeof this.props.device !== 'undefined' && this.props.device !== '') {
      window.mrmTypographyDevice = this.props.device;
    }
  }
  setSettings(value) {
    window.mrmTypographyDevice = value;
    this.setState({
      current: value
    });
    this.props.onChange(value);
  }
  render() {
    const {
      current
    } = this.state;
    const {
      device,
      className,
      commonResponsiveDevice
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mrmTypography-device ${className ? className : ''}`
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Device);

/***/ }),

/***/ "./src/components/components/Range.js":
/*!********************************************!*\
  !*** ./src/components/components/Range.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_range_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/range.scss */ "./src/components/components/assets/css/range.scss");
/* harmony import */ var _Device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Device */ "./src/components/components/Device.js");




const {
  Component
} = wp.element;
class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      device: 'md'
    };
  }
  _filterValue(type) {
    const {
      value,
      responsive
    } = this.props;
    if (type == 'unit') {
      return value ? value.unit || 'px' : 'px';
    } else {
      return value ? responsive ? value[window.mrmTypographyDevice] || '' : value : '';
    }
  }
  setSettings(val, type) {
    const {
      min,
      max,
      unit,
      value,
      onChange,
      responsive
    } = this.props;
    let newValue = {};
    if (typeof value === 'object' && Object.keys(value).length > 0) {
      newValue = JSON.parse(JSON.stringify(value));
    }
    if (unit && !newValue.hasOwnProperty('unit')) {
      newValue.unit = 'px';
    }
    if (type === 'unit' && responsive) {
      newValue.unit = val;
    } else {
      newValue = responsive ? Object.assign(newValue, value, {
        [window.mrmTypographyDevice]: val
      }) : val;
      newValue = min ? newValue < min ? min : newValue : newValue < 0 ? 0 : newValue;
      newValue = max ? newValue > max ? max : newValue : newValue > 1000 ? 1000 : newValue;
    }
    onChange(newValue);
    this.setState({
      current: newValue
    });
  }
  _minMax(type) {
    let unit = this._filterValue('unit');
    return this.props[type] && this.props[type] != 0 ? unit == 'em' ? Math.round(this.props[type] / 16) : this.props[type] : 0;
  }
  _steps() {
    let unit = this._filterValue('unit');
    return unit == 'em' ? .001 : this.props.step || 1;
  }
  updateDevice(updatedDevice) {
    let {
      value,
      onChange,
      device
    } = this.props;
    if (typeof device !== 'undefined') {
      onChange({
        ...value,
        device: updatedDevice
      });
    }
    this.setState({
      device: updatedDevice
    });
  }
  render() {
    const {
      unit,
      label,
      responsive,
      device,
      onDeviceChange,
      disabled = false
    } = this.props;
    let responsiveDevice = responsive ? device ? device : this.state.device : window.mrmTypographyDevice;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'mrmTypography-field-range mrmTypography-field ' + (responsive ? 'mrmTypography-responsive' : '')
    }, (label || unit || responsive) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-d-flex mrmTypography-align-center mrmTypography-mb-10"
    }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
      htmlFor: 'input'
    }, label)), responsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Device__WEBPACK_IMPORTED_MODULE_3__["default"], {
      device: responsiveDevice,
      commonResponsiveDevice: device,
      className: "mrmTypography-ml-10",
      onChange: val => {
        device && onDeviceChange ? onDeviceChange(val) : this.updateDevice(val);
      }
    }), unit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-unit-btn-group mrmTypography-ml-auto"
    }, (typeof unit == 'object' ? unit : ['px', 'em', '%']).map(value => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: this.props.value && value == this.props.value.unit ? 'active' : '',
      onClick: () => {
        this.setSettings(value, 'unit');
        // console.log(this._filterValue())
        // this.setSettings(this._filterValue(), 'range');
      }
    }, value)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-field-child"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
      type: "range",
      min: this._minMax('min'),
      max: this._minMax('max'),
      value: this._filterValue(),
      step: this._steps(),
      disabled: disabled,
      onChange: e => this.setSettings(this._filterValue() == e.target.value ? '' : e.target.value, 'range')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: "number",
      step: this._steps(),
      onChange: v => this.setSettings(v.target.value, 'range'),
      value: this._filterValue() + (this.props.suffix ? this.props.suffix : ''),
      disabled: disabled
    }, this.props.suffix && {
      disabled: true
    })))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Range);

/***/ }),

/***/ "./src/components/components/Toggle.js":
/*!*********************************************!*\
  !*** ./src/components/components/Toggle.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_toggle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/toggle.scss */ "./src/components/components/assets/css/toggle.scss");
/* harmony import */ var _Device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Device */ "./src/components/components/Device.js");



const {
  Component,
  Fragment
} = wp.element;
const {
  ToggleControl
} = wp.components;
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this._filterValue()
    };
  }
  _filterValue() {
    return this.props.value ? this.props.responsive ? this.props.value[window.mrmTypographyDevice] || '' : this.props.value : '';
  }
  setSettings(val) {
    const {
      value,
      responsive,
      onChange
    } = this.props;
    let final = responsive ? Object.assign({}, value, {
      [window.mrmTypographyDevice]: val
    }) : val;
    onChange(final);
    this.setState({
      current: val
    });
  }
  render() {
    const {
      label,
      customClassName,
      responsive,
      device,
      onDeviceChange
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'mrmTypography-field-toggle mrmTypography-field' + (this.props.responsive ? ' mrmTypography-responsive' : '') + (customClassName ? ` ${customClassName}` : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label && label, responsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, device ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Device__WEBPACK_IMPORTED_MODULE_2__["default"], {
      device: device,
      commonResponsiveDevice: device,
      className: "mrmTypography-ml-10",
      onChange: val => onDeviceChange(val)
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Device__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: val => this.setState({
        current: val
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      checked: this._filterValue(),
      onChange: val => this.setSettings(val)
    }));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ "./src/components/components/Typography.js":
/*!*************************************************!*\
  !*** ./src/components/components/Typography.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_typography_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/typography.scss */ "./src/components/components/assets/css/typography.scss");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Range */ "./src/components/components/Range.js");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toggle */ "./src/components/components/Toggle.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons */ "./src/components/components/assets/icons.js");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonGroup */ "./src/components/components/ButtonGroup.js");
/* harmony import */ var _assets_FontList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/FontList */ "./src/components/components/assets/FontList.js");



const {
  __
} = wp.i18n;






const {
  Component,
  Fragment
} = wp.element;
const {
  Dropdown,
  Tooltip,
  SelectControl
} = wp.components;
const {
  createHigherOrderComponent
} = wp.compose;
class Typography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFontFamily: false,
      filterText: '',
      changeType: '',
      showFontFamiles: false,
      showFontWeights: false
    };
  }
  async componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside = event => {
    const {
      showFontFamiles,
      showFontWeights
    } = this.state;
    if (showFontFamiles) {
      const mrmTypographyFontFamilyWrapper = this.refs.mrmTypographyFontFamilyWrapper;
      const mrmTypographySelectedFontFamily = this.refs.wpfnlSelectedFontFamily;
      if (mrmTypographyFontFamilyWrapper && !mrmTypographyFontFamilyWrapper.contains(event.target)) {
        mrmTypographySelectedFontFamily && !mrmTypographySelectedFontFamily.contains(event.target) && this.setState({
          showFontFamiles: false
        });
      }
    } else if (showFontWeights) {
      const mrmTypographyFontWeightWrapper = this.refs.mrmTypographyFontWeightWrapper;
      const mrmTypographySelectedFontWeight = this.refs.mrmTypographySelectedFontWeight;
      if (mrmTypographyFontWeightWrapper && !mrmTypographyFontWeightWrapper.contains(event.target)) {
        mrmTypographySelectedFontWeight && !mrmTypographySelectedFontWeight.contains(event.target) && this.setState({
          showFontWeights: false
        });
      }
    }
  };
  _getWeight() {
    const {
      value
    } = this.props;
    if (value && value.family) {
      return _assets_FontList__WEBPACK_IMPORTED_MODULE_8__["default"].filter(o => {
        return o.n == value.family;
      })[0].v;
    } else {
      return [100, 200, 300, 400, 500, 600, 700, 800, 900];
    }
  }
  setSettings(type, val) {
    let prevValue = this.props.value;
    if (val == 'default' || val == 'Default') {
      if (type == 'family') {
        delete prevValue.family;
        delete prevValue.type;
      } else if (type == 'weight') {
        delete prevValue.weight;
      }
      this.props.onChange(Object.assign({}, prevValue));
    } else {
      if (type == 'family' && val) {
        val = {
          [type]: val,
          type: _assets_FontList__WEBPACK_IMPORTED_MODULE_8__["default"].filter(o => {
            return o.n == val;
          })[0].f
        };
      } else {
        val = {
          [type]: val,
          ...(type === 'globalSource' && {
            activeSource: 'global'
          })
        };
      }
      this.props.onChange(Object.assign({}, prevValue, val));
    }
  }
  findArrayIndex = font => {
    let index = 0;
    let mrmTypographyFonts = JSON.parse(localStorage.getItem('mrmTypographyFonts'));
    while (index < 10) {
      if (mrmTypographyFonts[index].n == font) {
        break;
      }
      index++;
    }
    return index;
  };
  handleTypographyChange(val) {
    this.setSettings('family', val);
    let mrmTypographyFonts = JSON.parse(localStorage.getItem('mrmTypographyFonts'));
    let selectedFont = _assets_FontList__WEBPACK_IMPORTED_MODULE_8__["default"].filter(font => font.n == val);
    if (mrmTypographyFonts) {
      let oldFont = mrmTypographyFonts.filter(font => font.n == val).length > 0;
      if (oldFont) {
        let index = this.findArrayIndex(val);
        mrmTypographyFonts.splice(index, 1);
        mrmTypographyFonts.unshift(...selectedFont);
      } else {
        mrmTypographyFonts.unshift(...selectedFont);
        mrmTypographyFonts.length > 10 && mrmTypographyFonts.pop();
      }
    } else {
      mrmTypographyFonts = [...selectedFont];
    }
    localStorage.setItem('mrmTypographyFonts', JSON.stringify(mrmTypographyFonts));
  }
  render() {
    const {
      value,
      label,
      device,
      globalSource,
      globalSettings,
      onDeviceChange,
      globalTypoOptions,
      globalTypoValues
    } = this.props;
    const {
      filterText,
      showFontFamiles,
      showFontWeights
    } = this.state;
    let mrmTypographyFonts = JSON.parse(localStorage.getItem('mrmTypographyFonts'));
    let filteredFontList = [],
      newFontList = _assets_FontList__WEBPACK_IMPORTED_MODULE_8__["default"];
    if (mrmTypographyFonts) {
      filteredFontList = _assets_FontList__WEBPACK_IMPORTED_MODULE_8__["default"].filter(font => !mrmTypographyFonts.filter(mrmTypographyFont => mrmTypographyFont.n == font.n || font.n == 'Default').length > 0);
      newFontList = [{
        n: 'Default',
        f: 'default',
        v: []
      }, ...mrmTypographyFonts, ...filteredFontList];
    }
    if (filterText.length >= 2) {
      newFontList = newFontList.filter(item => item.n.toLowerCase().search(filterText.toLowerCase()) !== -1);
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-field mrmTypography-field-typography"
    }, !globalSettings && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: value.openTypography,
      label: label || __('Typography'),
      onChange: val => this.setSettings('openTypography', val)
    }), (value && value.openTypography == 1 || globalSettings) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, !globalSettings && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: __(''),
      options: [[__('Button Font'), 'custom']],
      value: "custom",
      onChange: newSource => {
        if (newSource === 'custom') {
          if (typeof value.globalSource === 'undefined' || typeof value.activeSource === 'undefined') {
            this.props.onChange({
              ...value,
              activeSource: newSource
            });
          } else if (typeof value.globalSource !== 'undefined' && value.globalSource !== 'none') {
            this.props.onChange({
              ...globalTypoValues[value.globalSource - 1],
              activeSource: newSource,
              globalSource: value.globalSource,
              blockDefaultValues: value.blockDefaultValues
            });
          } else if (typeof value.globalSource !== 'undefined' && value.globalSource === 'none') {
            this.props.onChange({
              openTypography: true,
              globalSource: 'none',
              activeSource: 'custom',
              ...value.blockDefaultValues,
              blockDefaultValues: value.blockDefaultValues
            });
          }
        } else {
          let tempBlockDefaults;
          const newValue = {
            openTypography: true,
            activeSource: 'global',
            globalSource: typeof value.globalSource === 'undefined' ? 'none' : value.globalSource,
            blockDefaultValues: value.blockDefaultValues
          };
          if ((typeof value.activeSource === 'undefined' || value.activeSource === 'custom') && (value.globalSource === 'none' || typeof value.globalSource === 'undefined')) {
            tempBlockDefaults = JSON.parse(JSON.stringify(value));
            delete tempBlockDefaults.activeSource;
            delete tempBlockDefaults.globalSource;
            delete tempBlockDefaults.blockDefaultValues;
            newValue.blockDefaultValues = tempBlockDefaults;
          }
          this.props.onChange(newValue);
        }
      }
    }), value.activeSource === 'global' && !globalSettings ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: "Size",
      value: typeof value.globalSource !== 'undefined' ? value.globalSource : 'none',
      options: globalTypoOptions,
      onChange: newValue => {
        if (newValue === 'none' && value.globalSource !== 'none') {
          const temp = {
            openTypography: true,
            activeSource: 'global',
            globalSource: newValue,
            blockDefaultValues: value.blockDefaultValues
          };
          this.props.onChange(temp);
        } else {
          this.setSettings('globalSource', newValue);
        }
      }
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-field-group mrmTypography-65-35"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-field mrmTypography-field-font-family"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, __('Font Family')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-font-family-picker",
      ref: "wpfnlSelectedFontFamily",
      onClick: () => {
        this.setState({
          showFontFamiles: !showFontFamiles
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "mrmTypography-font-family-search-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
      type: "text",
      className: `mrmTypography-font-family-search${!showFontFamiles ? ' selected-font-family' : ''}`,
      placeholder: __(showFontFamiles ? 'Search' : value && value.family || 'Select'),
      value: filterText,
      onChange: e => this.setState({
        filterText: e.target.value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "mrmTypography-font-select-icon"
    }, "   ", showFontFamiles ? (_assets_icons__WEBPACK_IMPORTED_MODULE_6___default().arrow_up) : (_assets_icons__WEBPACK_IMPORTED_MODULE_6___default().arrow_down), "  ")))), showFontFamiles && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-font-family-option-wrapper",
      ref: "mrmTypographyFontFamilyWrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-font-family-options"
    }, newFontList.length > 0 ? newFontList.map((font, index) => {
      let isActiveFont = false;
      if (value && font.n == value.family) {
        isActiveFont = true;
      }
      let fontClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        ['mrmTypography-font-family-option']: !isActiveFont
      }, {
        ['mrmTypography-active-font-family']: isActiveFont
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: fontClasses,
        key: `mrmTypography-font-family-${index}`,
        onClick: () => {
          this.setState({
            showFontFamiles: false,
            filterText: ''
          });
          font.n == 'Default' ? this.setSettings('family', 'default') : this.handleTypographyChange(font.n);
        }
      }, font.n);
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: `mrmTypography-font-family-option no-match`,
      onClick: () => this.setState({
        showFontFamiles: false,
        filterText: ''
      })
    }, "  No matched font  "))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-field mrmTypography-field-font-weight"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, __('Weight')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-font-weight-picker-wrapper",
      ref: "mrmTypographySelectedFontWeight",
      onClick: () => this.setState({
        showFontWeights: !showFontWeights
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-font-weight-picker"
    }, "  ", value && value.weight || 'Select', "   "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "mrmTypography-font-select-icon"
    }, "   ", showFontWeights ? (_assets_icons__WEBPACK_IMPORTED_MODULE_6___default().arrow_up) : (_assets_icons__WEBPACK_IMPORTED_MODULE_6___default().arrow_down), "  "))), showFontWeights && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-font-weight-wrapper",
      ref: "mrmTypographyFontWeightWrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "mrmTypography-font-family-weights"
    }, ['Default', ...this._getWeight()].map((font, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: `${font == value.weight ? 'mrmTypography-active-font-weight' : 'mrmTypography-font-weight-option'}`,
        key: `mrmTypography-font-weights-${index}`,
        onClick: () => {
          this.setState({
            showFontWeights: false
          });
          this.setSettings('weight', font);
        }
      }, font);
    })))))));
  }
}
function withGLobalTypography() {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createHigherOrderComponent(OriginalComponent => {
    return class WrappedComponent extends Component {
      constructor() {
        super(...arguments);
        this.setState = this.setState.bind(this);
        this.state = initialState;
      }
      render() {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(OriginalComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, this.state, {
          setState: this.setState
        }));
      }
    };
  }, 'withGLobalTypography');
}
/* harmony default export */ __webpack_exports__["default"] = (withGLobalTypography()(Typography));

/***/ }),

/***/ "./src/components/components/assets/FontList.js":
/*!******************************************************!*\
  !*** ./src/components/components/assets/FontList.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  n: "Default",
  v: [],
  f: "default"
}, {
  n: "Cursive",
  v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  f: "cursive"
}, {
  n: "Fantasy",
  v: [],
  f: "fantasy"
}, {
  n: "Monospace",
  v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  f: "monospace"
}, {
  n: "Arial",
  f: "sans-serif",
  v: [100, 200, 300, 400, 500, 600, 700, 800, 900]
}]);

// export default [
//   {
//     n: "Default",
//     v: [],
//     f: "default",
//   },
//   {
//     n: "Arial",
//     f: "sans-serif",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   },
//   {
//     n: "Tahoma",
//     f: "sans-serif",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   },
//   {
//     n: "Verdana",
//     f: "sans-serif",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   },
//   {
//     n: "Helvetica",
//     f: "sans-serif",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   },
//   {
//     n: "Times New Roman",
//     f: "sans-serif",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   },
//   {
//     n: "Trebuchet MS",
//     f: "sans-serif",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   },
//   {
//     n: "Georgia",
//     f: "sans-serif",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   },

//   {
//     n: "ABeeZee",
//     v: [400, "400i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Abel",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Abhaya Libre",
//     v: [400, 500, 600, 700, 800],
//     f: "serif",
//   },
//   {
//     n: "Abril Fatface",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Aclonica",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Acme",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Actor",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Adamina",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Advent Pro",
//     v: [100, 200, 300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Aguafina Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Akronim",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Aladin",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Alata",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Alatsi",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Aldrich",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Alef",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Alegreya",
//     v: [400, "400i", 500, "500i", 700, "700i", 800, "800i", 900, "900i"],
//     f: "serif",
//   },
//   {
//     n: "Alegreya SC",
//     v: [400, "400i", 500, "500i", 700, "700i", 800, "800i", 900, "900i"],
//     f: "serif",
//   },
//   {
//     n: "Alegreya Sans",
//     v: [
//       100,
//       "100i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Alegreya Sans SC",
//     v: [
//       100,
//       "100i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Aleo",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Alex Brush",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Alfa Slab One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Alice",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Alike",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Alike Angular",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Allan",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Allerta",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Allerta Stencil",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Allura",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Almarai",
//     v: [300, 400, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Almendra",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Almendra Display",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Almendra SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Amarante",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Amaranth",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Amatic SC",
//     v: [400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Amethysta",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Amiko",
//     v: [400, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Amiri",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Amita",
//     v: [400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Anaheim",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Andada",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Andika",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Angkor",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Annie Use Your Telescope",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Anonymous Pro",
//     v: [400, "400i", 700, "700i"],
//     f: "monospace",
//   },
//   {
//     n: "Antic",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Antic Didone",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Antic Slab",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Anton",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Arapey",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Arbutus",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Arbutus Slab",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Architects Daughter",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Archivo",
//     v: [400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Archivo Black",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Archivo Narrow",
//     v: [400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Aref Ruqaa",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Arima Madurai",
//     v: [100, 200, 300, 400, 500, 700, 800, 900],
//     f: "display",
//   },
//   {
//     n: "Arimo",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Arizonia",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Armata",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Arsenal",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Artifika",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Arvo",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Arya",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Asap",
//     v: [400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Asap Condensed",
//     v: [400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Asar",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Asset",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Assistant",
//     v: [200, 300, 400, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Astloch",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Asul",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Athiti",
//     v: [200, 300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Atma",
//     v: [300, 400, 500, 600, 700],
//     f: "display",
//   },
//   {
//     n: "Atomic Age",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Aubrey",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Audiowide",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Autour One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Average",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Average Sans",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Averia Gruesa Libre",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Averia Libre",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "Averia Sans Libre",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "Averia Serif Libre",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "B612",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "B612 Mono",
//     v: [400, "400i", 700, "700i"],
//     f: "monospace",
//   },
//   {
//     n: "Bad Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Bahiana",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bahianita",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bai Jamjuree",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Baloo 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Baloo Bhai 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Baloo Bhaina 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Baloo Chettan 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Baloo Da 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Baloo Paaji 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Baloo Tamma 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Baloo Tammudu 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Baloo Thambi 2",
//     v: [400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Balsamiq Sans",
//     v: [400, "400i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "Balthazar",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Bangers",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Barlow",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Barlow Condensed",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Barlow Semi Condensed",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Barriecito",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Barrio",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Basic",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Baskervville",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Battambang",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Baumans",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bayon",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Be Vietnam",
//     v: [
//       100,
//       "100i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Bebas Neue",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Belgrano",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Bellefair",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Belleza",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Bellota",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "Bellota Text",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "BenchNine",
//     v: [300, 400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Bentham",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Berkshire Swash",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Beth Ellen",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Bevan",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Big Shoulders Display",
//     v: [100, 300, 400, 500, 600, 700, 800, 900],
//     f: "display",
//   },
//   {
//     n: "Big Shoulders Text",
//     v: [100, 300, 400, 500, 600, 700, 800, 900],
//     f: "display",
//   },
//   {
//     n: "Bigelow Rules",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bigshot One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bilbo",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Bilbo Swash Caps",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "BioRhyme",
//     v: [200, 300, 400, 700, 800],
//     f: "serif",
//   },
//   {
//     n: "BioRhyme Expanded",
//     v: [200, 300, 400, 700, 800],
//     f: "serif",
//   },
//   {
//     n: "Biryani",
//     v: [200, 300, 400, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Bitter",
//     v: [400, "400i", 700],
//     f: "serif",
//   },
//   {
//     n: "Black And White Picture",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Black Han Sans",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Black Ops One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Blinker",
//     v: [100, 200, 300, 400, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Bokor",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bonbon",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Boogaloo",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bowlby One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bowlby One SC",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Brawler",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Bree Serif",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Bubblegum Sans",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bubbler One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Buda",
//     v: [300],
//     f: "display",
//   },
//   {
//     n: "Buenard",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Bungee",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bungee Hairline",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bungee Inline",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bungee Outline",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Bungee Shade",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Butcherman",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Butterfly Kids",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Cabin",
//     v: [400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Cabin Condensed",
//     v: [400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Cabin Sketch",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Caesar Dressing",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Cagliostro",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Cairo",
//     v: [200, 300, 400, 600, 700, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Caladea",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Calistoga",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Calligraffitti",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Cambay",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Cambo",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Candal",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Cantarell",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Cantata One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Cantora One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Capriola",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Cardo",
//     v: [400, "400i", 700],
//     f: "serif",
//   },
//   {
//     n: "Carme",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Carrois Gothic",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Carrois Gothic SC",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Carter One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Catamaran",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Caudex",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Caveat",
//     v: [400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Caveat Brush",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Cedarville Cursive",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Ceviche One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Chakra Petch",
//     v: [300, "300i", 400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Changa",
//     v: [200, 300, 400, 500, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Changa One",
//     v: [400, "400i"],
//     f: "display",
//   },
//   {
//     n: "Chango",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Charm",
//     v: [400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Charmonman",
//     v: [400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Chathura",
//     v: [100, 300, 400, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Chau Philomene One",
//     v: [400, "400i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Chela One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Chelsea Market",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Chenla",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Cherry Cream Soda",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Cherry Swash",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Chewy",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Chicle",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Chilanka",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Chivo",
//     v: [300, "300i", 400, "400i", 700, "700i", 900, "900i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Chonburi",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Cinzel",
//     v: [400, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Cinzel Decorative",
//     v: [400, 700, 900],
//     f: "display",
//   },
//   {
//     n: "Clicker Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Coda",
//     v: [400, 800],
//     f: "display",
//   },
//   {
//     n: "Coda Caption",
//     v: [800],
//     f: "sans-serif",
//   },
//   {
//     n: "Codystar",
//     v: [300, 400],
//     f: "display",
//   },
//   {
//     n: "Coiny",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Combo",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Comfortaa",
//     v: [300, 400, 500, 600, 700],
//     f: "display",
//   },
//   {
//     n: "Comic Neue",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "handwriting",
//   },
//   {
//     n: "Coming Soon",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Concert One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Condiment",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Content",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Contrail One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Convergence",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Cookie",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Copse",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Corben",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Cormorant",
//     v: [300, "300i", 400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Cormorant Garamond",
//     v: [300, "300i", 400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Cormorant Infant",
//     v: [300, "300i", 400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Cormorant SC",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Cormorant Unicase",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Cormorant Upright",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Courgette",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Courier Prime",
//     v: [400, "400i", 700, "700i"],
//     f: "monospace",
//   },
//   {
//     n: "Cousine",
//     v: [400, "400i", 700, "700i"],
//     f: "monospace",
//   },
//   {
//     n: "Coustard",
//     v: [400, 900],
//     f: "serif",
//   },
//   {
//     n: "Covered By Your Grace",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Crafty Girls",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Creepster",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Crete Round",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Crimson Pro",
//     v: [
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Crimson Text",
//     v: [400, "400i", 600, "600i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Croissant One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Crushed",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Cuprum",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Cute Font",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Cutive",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Cutive Mono",
//     v: [400],
//     f: "monospace",
//   },
//   {
//     n: "DM Mono",
//     v: [300, "300i", 400, "400i", 500, "500i"],
//     f: "monospace",
//   },
//   {
//     n: "DM Sans",
//     v: [400, "400i", 500, "500i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "DM Serif Display",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "DM Serif Text",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Damion",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Dancing Script",
//     v: [400, 500, 600, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Dangrek",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Darker Grotesque",
//     v: [300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "David Libre",
//     v: [400, 500, 700],
//     f: "serif",
//   },
//   {
//     n: "Dawning of a New Day",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Days One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Dekko",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Delius",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Delius Swash Caps",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Delius Unicase",
//     v: [400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Della Respira",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Denk One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Devonshire",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Dhurjati",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Didact Gothic",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Diplomata",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Diplomata SC",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Do Hyeon",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Dokdo",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Domine",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Donegal One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Doppio One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Dorsa",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Dosis",
//     v: [200, 300, 400, 500, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Dr Sugiyama",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Duru Sans",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Dynalight",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "EB Garamond",
//     v: [400, 500, 600, 700, 800, "400i", "500i", "600i", "700i", "800i"],
//     f: "serif",
//   },
//   {
//     n: "Eagle Lake",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "East Sea Dokdo",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Eater",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Economica",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Eczar",
//     v: [400, 500, 600, 700, 800],
//     f: "serif",
//   },
//   {
//     n: "El Messiri",
//     v: [400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Electrolize",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Elsie",
//     v: [400, 900],
//     f: "display",
//   },
//   {
//     n: "Elsie Swash Caps",
//     v: [400, 900],
//     f: "display",
//   },
//   {
//     n: "Emblema One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Emilys Candy",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Encode Sans",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Encode Sans Condensed",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Encode Sans Expanded",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Encode Sans Semi Condensed",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Encode Sans Semi Expanded",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Engagement",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Englebert",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Enriqueta",
//     v: [400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Epilogue",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Erica One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Esteban",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Euphoria Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Ewert",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Exo",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Exo 2",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Expletus Sans",
//     v: [400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "Fahkwang",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Fanwood Text",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Farro",
//     v: [300, 400, 500, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Farsan",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fascinate",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fascinate Inline",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Faster One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fasthand",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Fauna One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Faustina",
//     v: [400, 500, 600, 700, "400i", "500i", "600i", "700i"],
//     f: "serif",
//   },
//   {
//     n: "Federant",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Federo",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Felipa",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Fenix",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Finger Paint",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fira Code",
//     v: [300, 400, 500, 600, 700],
//     f: "monospace",
//   },
//   {
//     n: "Fira Mono",
//     v: [400, 500, 700],
//     f: "monospace",
//   },
//   {
//     n: "Fira Sans",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Fira Sans Condensed",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Fira Sans Extra Condensed",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Fjalla One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Fjord One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Flamenco",
//     v: [300, 400],
//     f: "display",
//   },
//   {
//     n: "Flavors",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fondamento",
//     v: [400, "400i"],
//     f: "handwriting",
//   },
//   {
//     n: "Fontdiner Swanky",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Forum",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Francois One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Frank Ruhl Libre",
//     v: [300, 400, 500, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Freckle Face",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fredericka the Great",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fredoka One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Freehand",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fresca",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Frijole",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fruktur",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Fugaz One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "GFS Didot",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "GFS Neohellenic",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Gabriela",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Gaegu",
//     v: [300, 400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Gafata",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Galada",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Galdeano",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Galindo",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Gamja Flower",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Gayathri",
//     v: [100, 400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Gelasio",
//     v: [400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Gentium Basic",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Gentium Book Basic",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Geo",
//     v: [400, "400i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Geostar",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Geostar Fill",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Germania One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Gidugu",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Gilda Display",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Girassol",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Give You Glory",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Glass Antiqua",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Glegoo",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Gloria Hallelujah",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Goblin One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Gochi Hand",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Gorditas",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Gothic A1",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Gotu",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Goudy Bookletter 1911",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Graduate",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Grand Hotel",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Gravitas One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Great Vibes",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Grenze",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Grenze Gotisch",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "display",
//   },
//   {
//     n: "Griffy",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Gruppo",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Gudea",
//     v: [400, "400i", 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Gugi",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Gupter",
//     v: [400, 500, 700],
//     f: "serif",
//   },
//   {
//     n: "Gurajada",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Habibi",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Halant",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Hammersmith One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Hanalei",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Hanalei Fill",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Handlee",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Hanuman",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Happy Monkey",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Harmattan",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Headland One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Heebo",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Henny Penny",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Hepta Slab",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "serif",
//   },
//   {
//     n: "Herr Von Muellerhoff",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Hi Melody",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Hind",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Hind Guntur",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Hind Madurai",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Hind Siliguri",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Hind Vadodara",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Holtwood One SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Homemade Apple",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Homenaje",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "IBM Plex Mono",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "monospace",
//   },
//   {
//     n: "IBM Plex Sans",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "IBM Plex Sans Condensed",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "IBM Plex Serif",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "IM Fell DW Pica",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "IM Fell DW Pica SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "IM Fell Double Pica",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "IM Fell Double Pica SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "IM Fell English",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "IM Fell English SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "IM Fell French Canon",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "IM Fell French Canon SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "IM Fell Great Primer",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "IM Fell Great Primer SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Ibarra Real Nova",
//     v: [400, "400i", 600, "600i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Iceberg",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Iceland",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Imprima",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Inconsolata",
//     v: [200, 300, 400, 500, 600, 700, 800, 900],
//     f: "monospace",
//   },
//   {
//     n: "Inder",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Indie Flower",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Inika",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Inknut Antiqua",
//     v: [300, 400, 500, 600, 700, 800, 900],
//     f: "serif",
//   },
//   {
//     n: "Inria Sans",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Inria Serif",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Inter",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Irish Grover",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Istok Web",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Italiana",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Italianno",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Itim",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Jacques Francois",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Jacques Francois Shadow",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Jaldi",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Jim Nightshade",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Jockey One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Jolly Lodger",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Jomhuria",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Jomolhari",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Josefin Sans",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Josefin Slab",
//     v: [100, "100i", 300, "300i", 400, "400i", 600, "600i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Jost",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Joti One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Jua",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Judson",
//     v: [400, "400i", 700],
//     f: "serif",
//   },
//   {
//     n: "Julee",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Julius Sans One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Junge",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Jura",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Just Another Hand",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Just Me Again Down Here",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "K2D",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Kadwa",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Kalam",
//     v: [300, 400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Kameron",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Kanit",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Kantumruy",
//     v: [300, 400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Karla",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Karma",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Katibeh",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kaushan Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Kavivanar",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Kavoon",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kdam Thmor",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Keania One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kelly Slab",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kenia",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Khand",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Khmer",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Khula",
//     v: [300, 400, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Kirang Haerang",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kite One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Knewave",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "KoHo",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Kodchasan",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Kosugi",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Kosugi Maru",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Kotta One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Koulen",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kranky",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kreon",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Kristi",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Krona One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Krub",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Kulim Park",
//     v: [200, "200i", 300, "300i", 400, "400i", 600, "600i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Kumar One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kumar One Outline",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Kurale",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "La Belle Aurore",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Lacquer",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Laila",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Lakki Reddy",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Lalezar",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Lancelot",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Lateef",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Lato",
//     v: [100, "100i", 300, "300i", 400, "400i", 700, "700i", 900, "900i"],
//     f: "sans-serif",
//   },
//   {
//     n: "League Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Leckerli One",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Ledger",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Lekton",
//     v: [400, "400i", 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Lemon",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Lemonada",
//     v: [300, 400, 500, 600, 700],
//     f: "display",
//   },
//   {
//     n: "Lexend Deca",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Lexend Exa",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Lexend Giga",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Lexend Mega",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Lexend Peta",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Lexend Tera",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Lexend Zetta",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Libre Barcode 128",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Libre Barcode 128 Text",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Libre Barcode 39",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Libre Barcode 39 Extended",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Libre Barcode 39 Extended Text",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Libre Barcode 39 Text",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Libre Baskerville",
//     v: [400, "400i", 700],
//     f: "serif",
//   },
//   {
//     n: "Libre Caslon Display",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Libre Caslon Text",
//     v: [400, "400i", 700],
//     f: "serif",
//   },
//   {
//     n: "Libre Franklin",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Life Savers",
//     v: [400, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Lilita One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Lily Script One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Limelight",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Linden Hill",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Literata",
//     v: [400, 500, 600, 700, "400i", "500i", "600i", "700i"],
//     f: "serif",
//   },
//   {
//     n: "Liu Jian Mao Cao",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Livvic",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Lobster",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Lobster Two",
//     v: [400, "400i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "Londrina Outline",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Londrina Shadow",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Londrina Sketch",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Londrina Solid",
//     v: [100, 300, 400, 900],
//     f: "display",
//   },
//   {
//     n: "Long Cang",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Lora",
//     v: [400, 500, 600, 700, "400i", "500i", "600i", "700i"],
//     f: "serif",
//   },
//   {
//     n: "Love Ya Like A Sister",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Loved by the King",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Lovers Quarrel",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Luckiest Guy",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Lusitana",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Lustria",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "M PLUS 1p",
//     v: [100, 300, 400, 500, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "M PLUS Rounded 1c",
//     v: [100, 300, 400, 500, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Ma Shan Zheng",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Macondo",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Macondo Swash Caps",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Mada",
//     v: [200, 300, 400, 500, 600, 700, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Magra",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Maiden Orange",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Maitree",
//     v: [200, 300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Major Mono Display",
//     v: [400],
//     f: "monospace",
//   },
//   {
//     n: "Mako",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Mali",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "handwriting",
//   },
//   {
//     n: "Mallanna",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Mandali",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Manjari",
//     v: [100, 400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Manrope",
//     v: [200, 300, 400, 500, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Mansalva",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Manuale",
//     v: [400, 500, 600, 700, "400i", "500i", "600i", "700i"],
//     f: "serif",
//   },
//   {
//     n: "Marcellus",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Marcellus SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Marck Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Margarine",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Markazi Text",
//     v: [400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Marko One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Marmelad",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Martel",
//     v: [200, 300, 400, 600, 700, 800, 900],
//     f: "serif",
//   },
//   {
//     n: "Martel Sans",
//     v: [200, 300, 400, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Marvel",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Mate",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Mate SC",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Maven Pro",
//     v: [400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "McLaren",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Meddon",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "MedievalSharp",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Medula One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Meera Inimai",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Megrim",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Meie Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Merienda",
//     v: [400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Merienda One",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Merriweather",
//     v: [300, "300i", 400, "400i", 700, "700i", 900, "900i"],
//     f: "serif",
//   },
//   {
//     n: "Merriweather Sans",
//     v: [300, "300i", 400, "400i", 700, "700i", 800, "800i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Metal",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Metal Mania",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Metamorphous",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Metrophobic",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Michroma",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Milonga",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Miltonian",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Miltonian Tattoo",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Mina",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Miniver",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Miriam Libre",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Mirza",
//     v: [400, 500, 600, 700],
//     f: "display",
//   },
//   {
//     n: "Miss Fajardose",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Mitr",
//     v: [200, 300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Modak",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Modern Antiqua",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Mogra",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Molengo",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Molle",
//     v: ["400i"],
//     f: "handwriting",
//   },
//   {
//     n: "Monda",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Monofett",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Monoton",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Monsieur La Doulaise",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Montaga",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Montez",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Montserrat",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Montserrat Alternates",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Montserrat Subrayada",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Moul",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Moulpali",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Mountains of Christmas",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Mouse Memoirs",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Mr Bedfort",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Mr Dafoe",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Mr De Haviland",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Mrs Saint Delafield",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Mrs Sheppards",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Mukta",
//     v: [200, 300, 400, 500, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Mukta Mahee",
//     v: [200, 300, 400, 500, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Mukta Malar",
//     v: [200, 300, 400, 500, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Mukta Vaani",
//     v: [200, 300, 400, 500, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Mulish",
//     v: [
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "MuseoModerno",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "display",
//   },
//   {
//     n: "Mystery Quest",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "NTR",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Nanum Brush Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Nanum Gothic",
//     v: [400, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Nanum Gothic Coding",
//     v: [400, 700],
//     f: "monospace",
//   },
//   {
//     n: "Nanum Myeongjo",
//     v: [400, 700, 800],
//     f: "serif",
//   },
//   {
//     n: "Nanum Pen Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Neucha",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Neuton",
//     v: [200, 300, 400, "400i", 700, 800],
//     f: "serif",
//   },
//   {
//     n: "New Rocker",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "News Cycle",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Niconne",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Niramit",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Nixie One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Nobile",
//     v: [400, "400i", 500, "500i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Nokora",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Norican",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Nosifer",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Notable",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Nothing You Could Do",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Noticia Text",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Noto Sans",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Noto Sans HK",
//     v: [100, 300, 400, 500, 700, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Noto Sans JP",
//     v: [100, 300, 400, 500, 700, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Noto Sans KR",
//     v: [100, 300, 400, 500, 700, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Noto Sans SC",
//     v: [100, 300, 400, 500, 700, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Noto Sans TC",
//     v: [100, 300, 400, 500, 700, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Noto Serif",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Noto Serif JP",
//     v: [200, 300, 400, 500, 600, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Noto Serif KR",
//     v: [200, 300, 400, 500, 600, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Noto Serif SC",
//     v: [200, 300, 400, 500, 600, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Noto Serif TC",
//     v: [200, 300, 400, 500, 600, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Nova Cut",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Nova Flat",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Nova Mono",
//     v: [400],
//     f: "monospace",
//   },
//   {
//     n: "Nova Oval",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Nova Round",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Nova Script",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Nova Slim",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Nova Square",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Numans",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Nunito",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Nunito Sans",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Odibee Sans",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Odor Mean Chey",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Offside",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Old Standard TT",
//     v: [400, "400i", 700],
//     f: "serif",
//   },
//   {
//     n: "Oldenburg",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Oleo Script",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Oleo Script Swash Caps",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Open Sans",
//     v: [300, "300i", 400, "400i", 600, "600i", 700, "700i", 800, "800i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Open Sans Condensed",
//     v: [300, "300i", 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Oranienbaum",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Orbitron",
//     v: [400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Oregano",
//     v: [400, "400i"],
//     f: "display",
//   },
//   {
//     n: "Orienta",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Original Surfer",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Oswald",
//     v: [200, 300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Over the Rainbow",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Overlock",
//     v: [400, "400i", 700, "700i", 900, "900i"],
//     f: "display",
//   },
//   {
//     n: "Overlock SC",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Overpass",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Overpass Mono",
//     v: [300, 400, 600, 700],
//     f: "monospace",
//   },
//   {
//     n: "Ovo",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Oxanium",
//     v: [200, 300, 400, 500, 600, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Oxygen",
//     v: [300, 400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Oxygen Mono",
//     v: [400],
//     f: "monospace",
//   },
//   {
//     n: "PT Mono",
//     v: [400],
//     f: "monospace",
//   },
//   {
//     n: "PT Sans",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "PT Sans Caption",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "PT Sans Narrow",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "PT Serif",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "PT Serif Caption",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Pacifico",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Padauk",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Palanquin",
//     v: [100, 200, 300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Palanquin Dark",
//     v: [400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Pangolin",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Paprika",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Parisienne",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Passero One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Passion One",
//     v: [400, 700, 900],
//     f: "display",
//   },
//   {
//     n: "Pathway Gothic One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Patrick Hand",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Patrick Hand SC",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Pattaya",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Patua One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Pavanam",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Paytone One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Peddana",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Peralta",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Permanent Marker",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Petit Formal Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Petrona",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Philosopher",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Piedra",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Pinyon Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Pirata One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Plaster",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Play",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Playball",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Playfair Display",
//     v: [
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Playfair Display SC",
//     v: [400, "400i", 700, "700i", 900, "900i"],
//     f: "serif",
//   },
//   {
//     n: "Podkova",
//     v: [400, 500, 600, 700, 800],
//     f: "serif",
//   },
//   {
//     n: "Poiret One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Poller One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Poly",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Pompiere",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Pontano Sans",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Poor Story",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Poppins",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Port Lligat Sans",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Port Lligat Slab",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Pragati Narrow",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Prata",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Preahvihear",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Press Start 2P",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Pridi",
//     v: [200, 300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Princess Sofia",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Prociono",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Prompt",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Prosto One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Proza Libre",
//     v: [400, "400i", 500, "500i", 600, "600i", 700, "700i", 800, "800i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Public Sans",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Puritan",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Purple Purse",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Quando",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Quantico",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Quattrocento",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Quattrocento Sans",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Questrial",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Quicksand",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Quintessential",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Qwigley",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Racing Sans One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Radley",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Rajdhani",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Rakkas",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Raleway",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Raleway Dots",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Ramabhadra",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Ramaraja",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Rambla",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Rammetto One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Ranchers",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Rancho",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Ranga",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Rasa",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "Rationale",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Ravi Prakash",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Red Hat Display",
//     v: [400, "400i", 500, "500i", 700, "700i", 900, "900i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Red Hat Text",
//     v: [400, "400i", 500, "500i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Red Rose",
//     v: [300, 400, 700],
//     f: "display",
//   },
//   {
//     n: "Redressed",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Reem Kufi",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Reenie Beanie",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Revalia",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Rhodium Libre",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Ribeye",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Ribeye Marrow",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Righteous",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Risque",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Roboto",
//     v: [
//       100,
//       "100i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       700,
//       "700i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Roboto Condensed",
//     v: [300, "300i", 400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Roboto Mono",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//     ],
//     f: "monospace",
//   },
//   {
//     n: "Roboto Slab",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "serif",
//   },
//   {
//     n: "Rochester",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Rock Salt",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Rokkitt",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "serif",
//   },
//   {
//     n: "Romanesco",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Ropa Sans",
//     v: [400, "400i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Rosario",
//     v: [300, 400, 500, 600, 700, "300i", "400i", "500i", "600i", "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Rosarivo",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Rouge Script",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Rowdies",
//     v: [300, 400, 700],
//     f: "display",
//   },
//   {
//     n: "Rozha One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Rubik",
//     v: [300, "300i", 400, "400i", 500, "500i", 700, "700i", 900, "900i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Rubik Mono One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Ruda",
//     v: [400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Rufina",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Ruge Boogie",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Ruluko",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Rum Raisin",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Ruslan Display",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Russo One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Ruthie",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Rye",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sacramento",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Sahitya",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Sail",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Saira",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Saira Condensed",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Saira Extra Condensed",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Saira Semi Condensed",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Saira Stencil One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Salsa",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sanchez",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Sancreek",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sansita",
//     v: [400, "400i", 700, "700i", 800, "800i", 900, "900i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Sarabun",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Sarala",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Sarina",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sarpanch",
//     v: [400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Satisfy",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Sawarabi Gothic",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Sawarabi Mincho",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Scada",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Scheherazade",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Schoolbell",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Scope One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Seaweed Script",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Secular One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Sedgwick Ave",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Sedgwick Ave Display",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Sen",
//     v: [400, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Sevillana",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Seymour One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Shadows Into Light",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Shadows Into Light Two",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Shanti",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Share",
//     v: [400, "400i", 700, "700i"],
//     f: "display",
//   },
//   {
//     n: "Share Tech",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Share Tech Mono",
//     v: [400],
//     f: "monospace",
//   },
//   {
//     n: "Shojumaru",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Short Stack",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Shrikhand",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Siemreap",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sigmar One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Signika",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Signika Negative",
//     v: [300, 400, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Simonetta",
//     v: [400, "400i", 900, "900i"],
//     f: "display",
//   },
//   {
//     n: "Single Day",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sintony",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Sirin Stencil",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Six Caps",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Skranji",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Slabo 13px",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Slabo 27px",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Slackey",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Smokum",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Smythe",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sniglet",
//     v: [400, 800],
//     f: "display",
//   },
//   {
//     n: "Snippet",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Snowburst One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sofadi One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sofia",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Solway",
//     v: [300, 400, 500, 700, 800],
//     f: "serif",
//   },
//   {
//     n: "Song Myung",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Sonsie One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sora",
//     v: [100, 200, 300, 400, 500, 600, 700, 800],
//     f: "sans-serif",
//   },
//   {
//     n: "Sorts Mill Goudy",
//     v: [400, "400i"],
//     f: "serif",
//   },
//   {
//     n: "Source Code Pro",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       900,
//       "900i",
//     ],
//     f: "monospace",
//   },
//   {
//     n: "Source Sans Pro",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       600,
//       "600i",
//       700,
//       "700i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Source Serif Pro",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       600,
//       "600i",
//       700,
//       "700i",
//       900,
//       "900i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Space Mono",
//     v: [400, "400i", 700, "700i"],
//     f: "monospace",
//   },
//   {
//     n: "Spartan",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Special Elite",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Spectral",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Spectral SC",
//     v: [
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Spicy Rice",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Spinnaker",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Spirax",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Squada One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sree Krushnadevaraya",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Sriracha",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Srisakdi",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Staatliches",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Stalemate",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Stalinist One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Stardos Stencil",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Stint Ultra Condensed",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Stint Ultra Expanded",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Stoke",
//     v: [300, 400],
//     f: "serif",
//   },
//   {
//     n: "Strait",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Stylish",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Sue Ellen Francisco",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Suez One",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Sulphur Point",
//     v: [300, 400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Sumana",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Sunflower",
//     v: [300, 500, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Sunshiney",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Supermercado One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Sura",
//     v: [400, 700],
//     f: "serif",
//   },
//   {
//     n: "Suranna",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Suravaram",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Suwannaphum",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Swanky and Moo Moo",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Syncopate",
//     v: [400, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Tajawal",
//     v: [200, 300, 400, 500, 700, 800, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Tangerine",
//     v: [400, 700],
//     f: "handwriting",
//   },
//   {
//     n: "Taprom",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Tauri",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Taviraj",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Teko",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Telex",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Tenali Ramakrishna",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Tenor Sans",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Text Me One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Thasadith",
//     v: [400, "400i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "The Girl Next Door",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Tienne",
//     v: [400, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Tillana",
//     v: [400, 500, 600, 700, 800],
//     f: "handwriting",
//   },
//   {
//     n: "Timmana",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Tinos",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Titan One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Titillium Web",
//     v: [200, "200i", 300, "300i", 400, "400i", 600, "600i", 700, "700i", 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Tomorrow",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Trade Winds",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Trirong",
//     v: [
//       100,
//       "100i",
//       200,
//       "200i",
//       300,
//       "300i",
//       400,
//       "400i",
//       500,
//       "500i",
//       600,
//       "600i",
//       700,
//       "700i",
//       800,
//       "800i",
//       900,
//       "900i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Trocchi",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Trochut",
//     v: [400, "400i", 700],
//     f: "display",
//   },
//   {
//     n: "Trykker",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Tulpen One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Turret Road",
//     v: [200, 300, 400, 500, 700, 800],
//     f: "display",
//   },
//   {
//     n: "Ubuntu",
//     v: [300, "300i", 400, "400i", 500, "500i", 700, "700i"],
//     f: "sans-serif",
//   },
//   {
//     n: "Ubuntu Condensed",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Ubuntu Mono",
//     v: [400, "400i", 700, "700i"],
//     f: "monospace",
//   },
//   {
//     n: "Ultra",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Uncial Antiqua",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Underdog",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Unica One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "UnifrakturCook",
//     v: [700],
//     f: "display",
//   },
//   {
//     n: "UnifrakturMaguntia",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Unkempt",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Unlock",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Unna",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "VT323",
//     v: [400],
//     f: "monospace",
//   },
//   {
//     n: "Vampiro One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Varela",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Varela Round",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Varta",
//     v: [300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Vast Shadow",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Vesper Libre",
//     v: [400, 500, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Viaoda Libre",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Vibes",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Vibur",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Vidaloka",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Viga",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Voces",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Volkhov",
//     v: [400, "400i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Vollkorn",
//     v: [
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "serif",
//   },
//   {
//     n: "Vollkorn SC",
//     v: [400, 600, 700, 900],
//     f: "serif",
//   },
//   {
//     n: "Voltaire",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Waiting for the Sunrise",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Wallpoet",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Walter Turncoat",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Warnes",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Wellfleet",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Wendy One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Wire One",
//     v: [400],
//     f: "sans-serif",
//   },
//   {
//     n: "Work Sans",
//     v: [
//       100,
//       200,
//       300,
//       400,
//       500,
//       600,
//       700,
//       800,
//       900,
//       "100i",
//       "200i",
//       "300i",
//       "400i",
//       "500i",
//       "600i",
//       "700i",
//       "800i",
//       "900i",
//     ],
//     f: "sans-serif",
//   },
//   {
//     n: "Yanone Kaffeesatz",
//     v: [200, 300, 400, 500, 600, 700],
//     f: "sans-serif",
//   },
//   {
//     n: "Yantramanav",
//     v: [100, 300, 400, 500, 700, 900],
//     f: "sans-serif",
//   },
//   {
//     n: "Yatra One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Yellowtail",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Yeon Sung",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Yeseva One",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "Yesteryear",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Yrsa",
//     v: [300, 400, 500, 600, 700],
//     f: "serif",
//   },
//   {
//     n: "ZCOOL KuaiLe",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "ZCOOL QingKe HuangYou",
//     v: [400],
//     f: "display",
//   },
//   {
//     n: "ZCOOL XiaoWei",
//     v: [400],
//     f: "serif",
//   },
//   {
//     n: "Zeyada",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Zhi Mang Xing",
//     v: [400],
//     f: "handwriting",
//   },
//   {
//     n: "Zilla Slab",
//     v: [300, "300i", 400, "400i", 500, "500i", 600, "600i", 700, "700i"],
//     f: "serif",
//   },
//   {
//     n: "Zilla Slab Highlight",
//     v: [400, 700],
//     f: "display",
//   },
//   {
//     n: "Fantasy",
//     v: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//     f: "fantasy",
//   },
// ];

/***/ }),

/***/ "./src/components/components/assets/icons.js":
/*!***************************************************!*\
  !*** ./src/components/components/assets/icons.js ***!
  \***************************************************/
/***/ (function() {

// const { __ } = wp.i18n;
// const icons = {};
// const img_path = mrmTypography_admin.plugin + 'assets/img/blocks';
//
// icons.mrmTypography = <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 8c0-2.2-.8-4-2.3-5.5-1.5-1.5-3.4-2.3-5.5-2.3s-4 .8-5.5 2.3c-1.5 1.5-2.3 3.3-2.3 5.5s.8 4 2.3 5.5c1.5 1.5 3.3 2.3 5.5 2.3.9 0 1.8-.1 2.6-.4l-2.2-2.3c-.1-.1-.3-.2-.4-.2-1.4 0-2.5-.5-3.4-1.4-1-.9-1.4-2.1-1.4-3.5s.5-2.6 1.4-3.5c.9-.9 2-1.4 3.4-1.4s2.5.5 3.4 1.4c.9.9 1.4 2.1 1.4 3.5 0 .7-.1 1.4-.4 2-.2.5-.8.6-1.2.2-1.1-1.1-2.8-1.2-4-.2l2.5 2.6 2.1 2.2c.9.9 2.4 1 3.4.1l.3-.3-1.3-1.3c-.2-.2-.2-.4 0-.6 1-1.3 1.6-2.9 1.6-4.7z" /></svg>;
//
// icons.solid = <svg xmlns="http://www.w3.org/2000/svg" width="19" height="2"><switch><g><path d="M0 0h19v2H0z" /></g></switch></svg>;
// icons.dot = <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="18" height="2"><switch><g><g><g transform="translate(-1378 -121)"><g transform="translate(1229 110)"><g transform="translate(149 11)"><circle class="st0" cx="1" cy="1" r="1" /><circle class="st0" cx="17" cy="1" r="1" /><circle class="st0" cx="5" cy="1" r="1" /><circle class="st0" cx="13" cy="1" r="1" /><circle class="st0" cx="9" cy="1" r="1" /></g></g></g></g></g></switch></svg>;
// icons.dash = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="2"><switch><g><path d="M18 2h-2V0h2v2zm-4 0h-2V0h2v2zm-4 0H8V0h2v2zM6 2H4V0h2v2zM2 2H0V0h2v2z" /></g></switch></svg>;
// icons.wave = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="4"><switch><g><path d="M8 3.5c-.8 0-1.7-.3-2.5-.9C4 1.5 2.4 1.5.7 2.6c-.2.1-.5.1-.7-.2-.1-.2-.1-.5.2-.7 2-1.3 4-1.3 5.8 0 1.5 1 2.8 1 4.2-.2 1.6-1.4 3.4-1.4 5.3 0 1.5 1.1 3.1 1.2 4.7.1.2-.1.5-.1.7.1.1.2.1.5-.1.7-2 1.3-3.9 1.3-5.8-.1-1.5-1.1-2.9-1.1-4.1 0C9.9 3.1 9 3.5 8 3.5z" /></g></switch></svg>;
//
// icons.vertical_top = <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1)" fill="none"><rect class="mrmTypography-svg-fill" x="4" y="4" width="6" height="12" rx="1" /><path class="mrmTypography-svg-stroke" d="M0 1h14" stroke-width="2" stroke-linecap="square" /></g></svg>;
// icons.vertical_middle = <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none"><g transform="translate(1 1)"><rect class="mrmTypography-svg-fill" x="4" width="6" height="14" rx="1" /><path d="M0 7h2" class="mrmTypography-svg-stroke" stroke-width="2" stroke-linecap="square" /></g><path d="M13 8h2" class="mrmTypography-svg-stroke" stroke-width="2" stroke-linecap="square" /></g></svg>;
// icons.vertical_bottom = <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1)" fill="none"><rect class="mrmTypography-svg-fill" x="4" width="6" height="12" rx="1" /><path d="M0 15h14" class="mrmTypography-svg-stroke" stroke-width="2" stroke-linecap="square" /></g></svg>;
//
// icons.icon_classic = <img src={`${img_path}/icon/classic.svg`} alt={__('Classic')} />;
// icons.icon_fill = <img src={`${img_path}/icon/fill.svg`} alt={__('Fill')} />;
// icons.icon_line = <img src={`${img_path}/icon/outline.svg`} alt={__('Underline')} />;
//
// icons.btn_fill = <img src={`${img_path}/button/fill.svg`} alt={__('Fill')} />;
// icons.btn_outline = <img src={`${img_path}/button/outline.svg`} alt={__('Outline')} />;
//
// icons.pie_fill = <img src={`${img_path}/pieprogress/fill.svg`} alt={__('Fill')} />;
// icons.pie_outline = <img src={`${img_path}/pieprogress/outline.svg`} alt={__('Outline')} />;
// icons.pie_outline_fill = <img src={`${img_path}/pieprogress/outline-fill.svg`} alt={__('Outline Fill')} />;
//
// icons.corner_square = <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h10.967v10.763" stroke-width="2" className="mrmTypography-svg-stroke" fill="none" /></svg>;
// icons.corner_rounded = <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h6.967c2.209 0 4 1.791 4 4v6.763" stroke-width="2" className="mrmTypography-svg-stroke" fill="none" /></svg>;
// icons.corner_round = <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h1.967c4.971 0 9 4.029 9 9v1.763" stroke-width="2" className="mrmTypography-svg-stroke" fill="none" /></svg>;
//
// icons.tab_tabs = <img src={`${img_path}/tab/tabs.svg`} alt={__('Tabs')} />;
// icons.tab_pills = <img src={`${img_path}/tab/pills.svg`} alt={__('Pills')} />;
// icons.tab_underline = <img src={`${img_path}/tab/underline.svg`} alt={__('Underline')} />;
//
// icons.verticaltabs_1 = <img src={`${img_path}/verticaltabs/layout-1.svg`} alt={__('Layout 1')} />;
// icons.verticaltabs_2 = <img src={`${img_path}/verticaltabs/layout-2.svg`} alt={__('Layout 2')} />;
// icons.verticaltabs_3 = <img src={`${img_path}/verticaltabs/layout-3.svg`} alt={__('Layout 3')} />;
//
// icons.social_normal = <img src={`${img_path}//socialicon/normal.svg`} alt={__('Normal')} />;
// icons.social_fill = <img src={`${img_path}//socialicon/fill.svg`} alt={__('Fill')} />;
//
// icons.accordion_fill = <img src={`${img_path}/accordion/fill.svg`} alt={__('Fill')} />;
// icons.accordion_classic = <img src={`${img_path}/accordion/classic.svg`} alt={__('Classic')} />;
//
// icons.infobox_1 = <img src={`${img_path}/infobox/1.svg`} alt={__('Layout 1')} />;
// icons.infobox_2 = <img src={`${img_path}/infobox/2.svg`} alt={__('Layout 2')} />;
// icons.infobox_3 = <img src={`${img_path}/infobox/3.svg`} alt={__('Layout 3')} />;
// icons.infobox_4 = <img src={`${img_path}/infobox/4.svg`} alt={__('Layout 4')} />;
//
// icons.testimonial_1 = <img src={`${img_path}/testimonial/1.svg`} alt={__('Testimonial 1')} />;
// icons.testimonial_2 = <img src={`${img_path}/testimonial/2.svg`} alt={__('Testimonial 2')} />;
// icons.testimonial_3 = <img src={`${img_path}/testimonial/3.svg`} alt={__('Testimonial 3')} />;
// icons.avatar_left = <img src={`${img_path}/testimonial/avatars/1.svg`} alt={__('Avatar Left')} />;
// icons.avatar_right = <img src={`${img_path}/testimonial/avatars/2.svg`} alt={__('Avatar Right')} />;
// icons.avatar_top = <img src={`${img_path}/testimonial/avatars/3.svg`} alt={__('Avatar Top')} />;
// icons.avatar_bottom = <img src={`${img_path}/testimonial/avatars/4.svg`} alt={__('Avatar Bottom')} />;
//
// icons.team_1 = <img src={`${img_path}/team/1.svg`} alt={__('Layout 1')} />;
// icons.team_2 = <img src={`${img_path}/team/2.svg`} alt={__('Layout 2')} />;
// icons.team_3 = <img src={`${img_path}/team/3.svg`} alt={__('Layout 3')} />;
//
// icons.list_fill = <img src={`${img_path}/list/1.svg`} alt={__('Fill')} />;
// icons.list_classic = <img src={`${img_path}/list/2.svg`} alt={__('Classic')} />;
//
// icons.form_classic = <img src={`${img_path}/form/classic.svg`} alt={__('Classic')} />;
// icons.form_material = <img src={`${img_path}/form/material.svg`} alt={__('Material')} />;
//
// icons.videopopup_fill = <img src={`${img_path}/videopopup/fill.svg`} alt={__('Fill')} />;
// icons.videopopup_classic = <img src={`${img_path}/videopopup/classic.svg`} alt={__('Classic')} />;
//
// icons.postgrid_1 = <img src={`${img_path}/postgrid/1.svg`} alt={__('Layout 1')} />;
// icons.postgrid_2 = <img src={`${img_path}/postgrid/2.svg`} alt={__('Layout 2')} />;
// icons.postgrid_3 = <img src={`${img_path}/postgrid/pro1.svg`} alt={__('Layout 3')} />;
// icons.postgrid_4 = <img src={`${img_path}/postgrid/pro2.svg`} alt={__('Layout 4')} />;
// icons.postgrid_5 = <img src={`${img_path}/postgrid/pro3.svg`} alt={__('Layout 4')} />;
// icons.postgrid_design_1 = <img src={`${img_path}/postgrid/11.svg`} alt={__('Design 1')} />;
// icons.postgrid_design_2 = <img src={`${img_path}/postgrid/12.svg`} alt={__('Design 2')} />;
// icons.postgrid_design_3 = <img src={`${img_path}/postgrid/13.svg`} alt={__('Design 3')} />;
// icons.postgrid_design_4 = <img src={`${img_path}/postgrid/14.svg`} alt={__('Design 4')} />;
// icons.postgrid_design_5 = <img src={`${img_path}/postgrid/15.svg`} alt={__('Design 5')} />;
// icons.postgrid_design_6 = <img src={`${img_path}/postgrid/16.svg`} alt={__('Design 6')} />;
//
//
// icons.h1 = <svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><g className="mrmTypography-svg-fill" fill-rule="nonzero"><path d="M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z" /><path d="M16.809 13h-1.147v-4.609c0-.55.013-.986.039-1.309l-.276.259c-.109.094-.474.394-1.096.898l-.576-.728 2.1-1.65h.957v7.139z" /></g></svg>;
// icons.h2 = <svg width="19" height="13" viewBox="0 0 19 13" xmlns="http://www.w3.org/2000/svg"><g className="mrmTypography-svg-fill" fill-rule="nonzero"><path d="M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z" /><path d="M18.278 13h-4.839v-.869l1.841-1.851c.544-.557.904-.951 1.082-1.184.177-.233.307-.452.388-.657.081-.205.122-.425.122-.659 0-.322-.097-.576-.291-.762-.194-.186-.461-.278-.803-.278-.273 0-.538.05-.793.151-.256.101-.551.283-.886.547l-.62-.757c.397-.335.783-.573 1.157-.713s.773-.21 1.196-.21c.664 0 1.196.173 1.597.52.4.347.601.813.601 1.399 0 .322-.058.628-.173.918-.116.29-.293.588-.532.896-.239.308-.637.723-1.194 1.248l-1.24 1.201v.049h3.389v1.011z" /></g></svg>;
// icons.h3 = <svg width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><g className="mrmTypography-svg-fill" fill-rule="nonzero"><path d="M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z" /><path d="M18.01 7.502c0 .452-.132.829-.396 1.13-.264.301-.635.504-1.113.608v.039c.573.072 1.003.25 1.289.535.286.285.43.663.43 1.135 0 .687-.243 1.217-.728 1.589-.485.373-1.175.559-2.07.559-.791 0-1.458-.129-2.002-.386v-1.021c.303.15.623.265.962.347.339.081.664.122.977.122.553 0 .967-.103 1.24-.308.273-.205.41-.522.41-.952 0-.381-.151-.661-.454-.84-.303-.179-.778-.269-1.426-.269h-.62v-.933h.63c1.139 0 1.709-.394 1.709-1.182 0-.306-.099-.542-.298-.708-.199-.166-.492-.249-.879-.249-.27 0-.531.038-.781.115-.251.076-.547.225-.889.447l-.562-.801c.654-.482 1.414-.723 2.28-.723.719 0 1.281.155 1.685.464.404.309.605.736.605 1.279z" /></g></svg>;
// icons.h4 = <svg width="19" height="13" viewBox="0 0 19 13" xmlns="http://www.w3.org/2000/svg"><g className="mrmTypography-svg-fill" fill-rule="nonzero"><path d="M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z" /><path d="M18.532 11.442h-.962v1.558h-1.118v-1.558h-3.262v-.884l3.262-4.717h1.118v4.648h.962v.952zm-2.08-.952v-1.792c0-.638.016-1.16.049-1.567h-.039c-.091.215-.234.475-.43.781l-1.772 2.578h2.192z" /></g></svg>;
// icons.h5 = <svg width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><g className="mrmTypography-svg-fill" fill-rule="nonzero"><path d="M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z" /><path d="M15.861 8.542c.719 0 1.289.19 1.709.571.42.381.63.9.63 1.558 0 .762-.238 1.357-.715 1.785-.477.428-1.155.642-2.034.642-.798 0-1.424-.129-1.88-.386v-1.04c.264.15.566.265.908.347.342.081.659.122.952.122.518 0 .911-.116 1.182-.347.27-.231.405-.57.405-1.016 0-.853-.544-1.279-1.631-1.279-.153 0-.342.015-.566.046-.225.031-.422.066-.591.105l-.513-.303.273-3.486h3.711v1.021h-2.7l-.161 1.768.417-.068c.164-.026.365-.039.603-.039z" /></g></svg>;
// icons.h6 = <svg width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><g className="mrmTypography-svg-fill" fill-rule="nonzero"><path d="M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z" /><path d="M13.459 9.958c0-2.793 1.138-4.189 3.413-4.189.358 0 .661.028.908.083v.957c-.247-.072-.534-.107-.859-.107-.765 0-1.34.205-1.724.615-.384.41-.592 1.068-.625 1.973h.059c.153-.264.368-.468.645-.613.277-.145.602-.217.977-.217.648 0 1.152.199 1.514.596.361.397.542.936.542 1.616 0 .749-.209 1.34-.627 1.775-.418.435-.989.652-1.711.652-.511 0-.955-.123-1.333-.369s-.668-.604-.872-1.074c-.203-.47-.305-1.036-.305-1.697zm2.49 2.192c.394 0 .697-.127.911-.381.213-.254.32-.617.32-1.089 0-.41-.1-.732-.3-.967-.2-.234-.5-.352-.901-.352-.247 0-.475.053-.684.159-.208.106-.373.251-.493.435s-.181.372-.181.564c0 .459.125.846.374 1.16.249.314.567.471.955.471z" /></g></svg>;
// icons.p = <svg width="20px" height="20px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z" /></svg>
// icons.span = <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20px" height="20px" /><g><path d="M9 6l-4 4 4 4-1 2-6-6 6-6zm2 8l4-4-4-4 1-2 6 6-6 6z" /></g></svg>
// icons.div = <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20px" height="20px" /><g><path d="M9 6l-4 4 4 4-1 2-6-6 6-6zm2 8l4-4-4-4 1-2 6 6-6 6z" /></g></svg>
//
// icons.pricing = {
// 	1: <img src={`${img_path}/pricing/1.svg`} alt={__('Layout 1')} />,
// 	2: <img src={`${img_path}/pricing/2.svg`} alt={__('Layout 2')} />,
// 	3: <img src={`${img_path}/pricing/3.svg`} alt={__('Layout 3')} />,
// 	4: <img src={`${img_path}/pricing/4.svg`} alt={__('Layout 4')} />,
// 	5: <img src={`${img_path}/pricing/5.svg`} alt={__('Layout 5')} />,
// 	6: <img src={`${img_path}/pricing/6.svg`} alt={__('Layout 6')} />
// }
//
// icons.pricing.badge = {
// 	1: <img src={`${img_path}/pricing/badges/1.svg`} alt={__('Badge 1')} />,
// 	2: <img src={`${img_path}/pricing/badges/2.svg`} alt={__('Badge 2')} />,
// 	3: <img src={`${img_path}/pricing/badges/3.svg`} alt={__('Badge 3')} />,
// 	4: <img src={`${img_path}/pricing/badges/4.svg`} alt={__('Badge 4')} />,
// 	5: <img src={`${img_path}/pricing/badges/5.svg`} alt={__('Badge 5')} />,
// 	6: <img src={`${img_path}/pricing/badges/6.svg`} alt={__('Badge 6')} />,
// }
//
// icons.image = {
// 	simple: <img src={`${img_path}/image/simple.svg`} alt={__('Simple')} />,
// 	blurb: <img src={`${img_path}/image/blurb.svg`} alt={__('Blurb')} />
// }
//
// icons.copy = <svg width="20px" height="15px" viewBox="0 0 1792 1792" class="dashicon" xmlns="http://www.w3.org/2000/svg"><path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" /></svg>
// icons.paste = <svg width="20px" height="15px" viewBox="0 0 1792 1792" class="dashicon" xmlns="http://www.w3.org/2000/svg"><path d="M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zm256-1440v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm256 672h299l-299-299v299zm512 128v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z" /></svg>
//
// icons.spacing = {
// 	top: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#CACCCE" d="M0 3h2v16h-2z" /><path fill="#CACCCE" d="M20 3h2v16h-2z" /><path fill="#2184F9" d="M3 0h16v2h-16z" /><path fill="#CACCCE" d="M3 20h16v2h-16z" /></g></svg>,
// 	right: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#CACCCE" d="M0 3h2v16h-2z" /><path fill="#2184F9" d="M20 3h2v16h-2z" /><path fill="#CACCCE" d="M3 0h16v2h-16z" /><path fill="#CACCCE" d="M3 20h16v2h-16z" /></g></svg>,
// 	bottom: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#CACCCE" d="M0 3h2v16h-2z" /><path fill="#CACCCE" d="M20 3h2v16h-2z" /><path fill="#CACCCE" d="M3 0h16v2h-16z" /><path fill="#2184F9" d="M3 20h16v2h-16z" /></g></svg>,
// 	left: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#2184F9" d="M0 3h2v16h-2z" /><path fill="#CACCCE" d="M20 3h2v16h-2z" /><path fill="#CACCCE" d="M3 0h16v2h-16z" /><path fill="#CACCCE" d="M3 20h16v2h-16z" /></g></svg>
// }
//
// icons.border = {
// 	top: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#CACCCE" d="M0 3h2v16h-2z" /><path fill="#CACCCE" d="M20 3h2v16h-2z" /><path fill="#2184F9" d="M3 0h16v2h-16z" /><path fill="#CACCCE" d="M3 20h16v2h-16z" /></g></svg>,
// 	right: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#CACCCE" d="M0 3h2v16h-2z" /><path fill="#2184F9" d="M20 3h2v16h-2z" /><path fill="#CACCCE" d="M3 0h16v2h-16z" /><path fill="#CACCCE" d="M3 20h16v2h-16z" /></g></svg>,
// 	bottom: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#CACCCE" d="M0 3h2v16h-2z" /><path fill="#CACCCE" d="M20 3h2v16h-2z" /><path fill="#CACCCE" d="M3 0h16v2h-16z" /><path fill="#2184F9" d="M3 20h16v2h-16z" /></g></svg>,
// 	left: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path fill="#2184F9" d="M0 3h2v16h-2z" /><path fill="#CACCCE" d="M20 3h2v16h-2z" /><path fill="#CACCCE" d="M3 0h16v2h-16z" /><path fill="#CACCCE" d="M3 20h16v2h-16z" /></g></svg>
// }
//
// icons.borderRadius = {
// 	topLeft: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M1.88 0c-1.038 0-1.88.842-1.88 1.88v6.71h1.88v-5.77c0-.519.421-.94.94-.94h5.77v-1.88h-6.71z" id="Path" fill="#2184F9" /><path d="M13.41 0v1.88h5.77c.519 0 .94.421.94.94v5.77h1.88v-6.71c0-1.038-.842-1.88-1.88-1.88h-6.71zM1.88 13.41h-1.88v6.71c0 1.038.842 1.88 1.88 1.88h6.71v-1.88h-5.77c-.519 0-.94-.421-.94-.94v-5.77zM13.41 20.12v1.88h6.71c1.038 0 1.88-.842 1.88-1.88v-6.71h-1.88v5.77c0 .519-.421.94-.94.94h-5.77z" fill="#CACCCE" /></g></svg>,
// 	topRight: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M1.88 0c-1.038 0-1.88.842-1.88 1.88v6.71h1.88v-5.77c0-.519.421-.94.94-.94h5.77v-1.88h-6.71z" id="Path" fill="#CACCCE" /><path d="M13.41 0v1.88h5.77c.519 0 .94.421.94.94v5.77h1.88v-6.71c0-1.038-.842-1.88-1.88-1.88h-6.71z" id="Path" fill="#2184F9" /><path d="M1.88 13.41h-1.88v6.71c0 1.038.842 1.88 1.88 1.88h6.71v-1.88h-5.77c-.519 0-.94-.421-.94-.94v-5.77zM13.41 20.12v1.88h6.71c1.038 0 1.88-.842 1.88-1.88v-6.71h-1.88v5.77c0 .519-.421.94-.94.94h-5.77z" fill="#CACCCE" /></g></svg>,
// 	bottomRight: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M1.88 0c-1.038 0-1.88.842-1.88 1.88v6.71h1.88v-5.77c0-.519.421-.94.94-.94h5.77v-1.88h-6.71zM13.41 0v1.88h5.77c.519 0 .94.421.94.94v5.77h1.88v-6.71c0-1.038-.842-1.88-1.88-1.88h-6.71zM1.88 13.41h-1.88v6.71c0 1.038.842 1.88 1.88 1.88h6.71v-1.88h-5.77c-.519 0-.94-.421-.94-.94v-5.77z" id="Path" fill="#CACCCE" /><path d="M13.41 20.12v1.88h6.71c1.038 0 1.88-.842 1.88-1.88v-6.71h-1.88v5.77c0 .519-.421.94-.94.94h-5.77z" fill="#2184F9" /></g></svg>,
// 	bottomLeft: <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M1.88 0c-1.038 0-1.88.842-1.88 1.88v6.71h1.88v-5.77c0-.519.421-.94.94-.94h5.77v-1.88h-6.71zM13.41 0v1.88h5.77c.519 0 .94.421.94.94v5.77h1.88v-6.71c0-1.038-.842-1.88-1.88-1.88h-6.71z" id="Path" fill="#CACCCE" /><path d="M1.88 13.41h-1.88v6.71c0 1.038.842 1.88 1.88 1.88h6.71v-1.88h-5.77c-.519 0-.94-.421-.94-.94v-5.77z" id="Path" fill="#2184F9" /><path d="M13.41 20.12v1.88h6.71c1.038 0 1.88-.842 1.88-1.88v-6.71h-1.88v5.77c0 .519-.421.94-.94.94h-5.77z" fill="#CACCCE" /></g></svg>
// }
//
// icons.inlineColorIcon = <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-editor-textcolor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M13.23 15h1.9L11 4H9L5 15h1.88l1.07-3h4.18zm-1.53-4.54H8.51L10 5.6z"></path></svg>
// icons.highlighterIcon = <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-admin-customizer" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 20 20"><path d="M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24-.61.3-5.76 3.47-7.67 5.57-.86.96-2.06 3.79-1.09 4.82.92.98 3.96-.17 4.79-1 2.06-2.06 5.21-7.17 5.5-7.79zM1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64.93-.65 2.22-.62 3.08.29.63.67.8 2.57-.16 3.46-1.57 1.45-4 1.55-6.15.89z"></path></svg>
// icons.upperCaseIcon = <svg viewBox="0 0 20 20" height="25" width="25" xmlns="http://www.w3.org/2000/svg" ><mask id="a" fill="#fff"><path d="m20 20h-20v-20h20z" fill="#fff" fill-rule="evenodd" /></mask><path d="m2 3v2.5h4.16666667v10.5h2.5v-10.5h4.16666663v-2.5zm16 4.5h-7.5v2.5h2.5v6h2.5v-6h2.5z" mask="url(#a)" /></svg>
//
// icons.arrow_down = <svg width="18" height="18" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" /></svg>
// icons.arrow_up = <svg width="18" height="18" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z" /></svg>
//
//
// icons.circleThin = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 12 14">
// 	<path d="M6 2q-1.016 0-1.941 0.398t-1.594 1.066-1.066 1.594-0.398 1.941 0.398 1.941 1.066 1.594 1.594 1.066 1.941 0.398 1.941-0.398 1.594-1.066 1.066-1.594 0.398-1.941-0.398-1.941-1.066-1.594-1.594-1.066-1.941-0.398zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"></path>
// </svg>
// icons.circleDot = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 12 14" fill="#2184f9">
// 	<path d="M8 7q0 0.828-0.586 1.414t-1.414 0.586-1.414-0.586-0.586-1.414 0.586-1.414 1.414-0.586 1.414 0.586 0.586 1.414zM6 2.75q-1.156 0-2.133 0.57t-1.547 1.547-0.57 2.133 0.57 2.133 1.547 1.547 2.133 0.57 2.133-0.57 1.547-1.547 0.57-2.133-0.57-2.133-1.547-1.547-2.133-0.57zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"></path>
// </svg>;
// icons.ellipsis_v = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="3" height="15" viewBox="0 0 3 14">
// 	<path d="M3 9.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531zM3 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531zM3 1.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531z"></path>
// </svg>;
// icons.ellipsis_h = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="11" height="15" viewBox="0 0 11 14">
// 	<path d="M3 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531zM7 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531zM11 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531z"></path>
// </svg>;
// icons.left = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="13" height="15" viewBox="0 0 13 14">
// 	<path d="M12 7v1q0 0.414-0.254 0.707t-0.66 0.293h-5.5l2.289 2.297q0.297 0.281 0.297 0.703t-0.297 0.703l-0.586 0.594q-0.289 0.289-0.703 0.289-0.406 0-0.711-0.289l-5.086-5.094q-0.289-0.289-0.289-0.703 0-0.406 0.289-0.711l5.086-5.078q0.297-0.297 0.711-0.297 0.406 0 0.703 0.297l0.586 0.578q0.297 0.297 0.297 0.711t-0.297 0.711l-2.289 2.289h5.5q0.406 0 0.66 0.293t0.254 0.707z"></path>
// </svg>;
// icons.plus = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="14" height="30" fill="#9b9b9b" viewBox="0 0 11 14">
// 	<path d="M11 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-3.25v3.25q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-3.25h-3.25q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h3.25v-3.25q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531v3.25h3.25q0.312 0 0.531 0.219t0.219 0.531z"></path>
// </svg>;
// icons.plus_circle = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="12" height="14" viewBox="0 0 12 14">
// 	<path d="M9.5 7.5v-1q0-0.203-0.148-0.352t-0.352-0.148h-2v-2q0-0.203-0.148-0.352t-0.352-0.148h-1q-0.203 0-0.352 0.148t-0.148 0.352v2h-2q-0.203 0-0.352 0.148t-0.148 0.352v1q0 0.203 0.148 0.352t0.352 0.148h2v2q0 0.203 0.148 0.352t0.352 0.148h1q0.203 0 0.352-0.148t0.148-0.352v-2h2q0.203 0 0.352-0.148t0.148-0.352zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"></path>
// </svg>
// ;
// icons.delete = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="13" height="15" viewBox="0 0 13 15" fill="#F7F7F7">
// 	<path d="M9.5 7.5v-1q0-0.203-0.148-0.352t-0.352-0.148h-2v-2q0-0.203-0.148-0.352t-0.352-0.148h-1q-0.203 0-0.352 0.148t-0.148 0.352v2h-2q-0.203 0-0.352 0.148t-0.148 0.352v1q0 0.203 0.148 0.352t0.352 0.148h2v2q0 0.203 0.148 0.352t0.352 0.148h1q0.203 0 0.352-0.148t0.148-0.352v-2h2q0.203 0 0.352-0.148t0.148-0.352zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"></path>
// </svg>
// ;
// icons.addColor=<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
// 	<g fill="#CDCDCD" fill-rule="evenodd">
// 		<rect x="6.957" width="2.087" height="16" rx="1.043"/>
// 		<path d="M15.652 8a1.09 1.09 0 01-1.09 1.09H1.438a1.09 1.09 0 110-2.18H14.56c.603 0 1.091.488 1.091 1.09z"/>
// 	</g>
// </svg>;
//
// export default icons;

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
    type: "string",
    default: ""
  },
  firstName: {
    type: "boolean",
    default: false
  },
  firstNameLabel: {
    type: "string",
    default: "First Name"
  },
  firstNamePlaceholder: {
    type: "string",
    default: "First Name"
  },
  isRequiredName: {
    type: "boolean",
    default: false
  },
  lastName: {
    type: "boolean",
    default: false
  },
  lastNameLabel: {
    type: "string",
    default: "Last Name"
  },
  lastNamePlaceholder: {
    type: "string",
    default: "Last Name"
  },
  isRequiredLastName: {
    type: "boolean",
    default: false
  },
  typography: {
    type: "object",
    default: {},
    style: [{
      selector: "mrm-form-group.submit .mrm-submit-button"
    }]
  },
  emailLabel: {
    type: "string",
    default: ""
  },
  emailPlaceholder: {
    type: "string",
    default: "Email"
  },
  phone: {
    type: "boolean",
    default: false
  },
  phoneLabel: {
    type: "string",
    default: "Phone"
  },
  phonePlaceholder: {
    type: "string",
    default: "Phone"
  },
  isRequiredPhone: {
    type: "boolean",
    default: false
  },
  websiteUrl: {
    type: "boolean",
    default: false
  },
  websiteUrlLabel: {
    type: "string",
    default: "Website Url"
  },
  websiteUrlPlaceholder: {
    type: "string",
    default: "Website Url"
  },
  isRequiredWebsiteUrl: {
    type: "boolean",
    default: false
  },
  message: {
    type: "boolean",
    default: false
  },
  messageLabel: {
    type: "string",
    default: "Message"
  },
  messagePlaceholder: {
    type: "string",
    default: "Write your message here..."
  },
  isRequiredMessage: {
    type: "boolean",
    default: false
  },
  acceptance_checkbox: {
    type: "boolean",
    default: false
  },
  acceptanceCheckboxText: {
    type: "string",
    default: "I have read and agree the Terms & Condition."
  },
  isRequiredAcceptance: {
    type: "boolean",
    default: false
  },
  registration_checkbox: {
    type: "boolean",
    default: false
  },
  data_to_checkout: {
    type: "boolean",
    default: false
  },
  registration_permission: {
    type: "boolean",
    default: false
  },
  registrationPermissionCheckboxText: {
    type: "string",
    default: "I agree to be registered as a subscriber."
  },
  inputFieldIcon: {
    type: "boolean",
    default: true
  },
  fieldLabel: {
    type: "boolean",
    default: false
  },
  requiredMark: {
    type: "boolean",
    default: true
  },
  enable_recaptcha: {
    type: "boolean",
    default: false
  },
  recaptcha_site_key: {
    type: "string",
    default: ""
  },
  recaptcha_secret_key: {
    type: "string",
    default: ""
  },
  recapcha_token: {
    type: "string",
    default: ""
  },
  rowSpacing: {
    type: "number",
    default: 12
  },
  labelTypography: {
    type: "object",
    default: {},
    style: [{
      selector: ".wpfnl-optin-form .wpfnl-optin-form-group > label"
    }]
  },
  labelColor: {
    type: "string",
    default: "#363B4E"
  },
  labelSpacing: {
    type: "number",
    default: 7
  },
  inputTypography: {
    type: "object",
    default: {},
    style: [{
      selector: ".wpfnl-optin-form .wpfnl-optin-form-group input[type=text], .wpfnl-optin-form .wpfnl-optin-form-group input[type=email]"
    }]
  },
  device: {
    type: "string",
    default: "md"
  },
  inputTextColor: {
    type: "string",
    default: "#7A8B9A"
  },
  inputBgColor: {
    type: "string",
    default: "#ffffff"
  },
  inputBorderRadius: {
    type: "number",
    default: 5
  },
  inputPaddingTop: {
    type: "integer",
    default: 11
  },
  inputPaddingRight: {
    type: "integer",
    default: 14
  },
  inputPaddingBottom: {
    type: "integer",
    default: 11
  },
  inputPaddingLeft: {
    type: "integer",
    default: 14
  },
  inputBorderStyle: {
    type: "string",
    default: "solid"
  },
  inputBorderWidth: {
    type: "number",
    default: 1
  },
  inputBorderColor: {
    type: "string",
    default: "#DFE1E8"
  },
  buttonTypography: {
    type: "object",
    default: {},
    style: [{
      selector: ".wpfnl-optin-form .wpfnl-optin-form-group .btn-default"
    }]
  },
  buttonTextColor: {
    type: "string",
    default: ""
  },
  buttonBgColor: {
    type: "string",
    default: ""
  },
  buttonHvrTextColor: {
    type: "string",
    default: ""
  },
  buttonHvrBgColor: {
    type: "string",
    default: ""
  },
  buttonBorderRadius: {
    type: "number",
    default: 5
  },
  buttonPaddingTop: {
    type: "integer",
    default: 12
  },
  buttonPaddingRight: {
    type: "integer",
    default: 20
  },
  buttonPaddingBottom: {
    type: "integer",
    default: 13
  },
  buttonPaddingLeft: {
    type: "integer",
    default: 20
  },
  buttonBorderStyle: {
    type: "string",
    default: "none"
  },
  buttonBorderWidth: {
    type: "number",
    default: 1
  },
  buttonBorderColor: {
    type: "string",
    default: ""
  },
  buttonHvrBorderColor: {
    type: "string",
    default: ""
  },
  buttonText: {
    type: "string",
    default: "Submit"
  },
  buttonAlign: {
    type: "string",
    default: "center"
  },
  postAction: {
    type: "string",
    default: "notification"
  },
  notification: {
    type: "string",
    default: ""
  },
  redirect_action: {
    type: "string",
    default: "next_step"
  },
  redirect_url: {
    type: "string",
    default: ""
  },
  adminEmail: {
    type: "string",
    default: ""
  },
  emailSubject: {
    type: "string",
    default: ""
  },
  customFieldTitle: {
    type: "",
    default: "New Field"
  },
  customFieldSlug: {
    type: "",
    default: "Field Slug"
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
      labelSpacing,
      inputTypography,
      labelTypography,
      Typography
    }
  } = _ref;
  let layout = formLayout;
  let fieldSpacing = {
    marginBottom: rowSpacing + "px"
  };
  let labelStyle = {
    color: labelColor,
    marginBottom: labelSpacing + "px",
    fontWeight: labelTypography.weight,
    fontFamily: labelTypography.family
  };
  let checkboxLabelColor = {
    color: labelColor
  };
  let inputStyle = {
    backgroundColor: inputBgColor,
    color: inputTextColor,
    borderRadius: inputBorderRadius + "px",
    paddingTop: inputPaddingTop + "px",
    paddingRight: inputPaddingRight + "px",
    paddingBottom: inputPaddingBottom + "px",
    paddingLeft: inputPaddingLeft + "px",
    borderStyle: inputBorderStyle,
    borderWidth: inputBorderWidth + "px",
    borderColor: inputBorderColor,
    fontWeight: inputTypography.weight,
    fontFamily: inputTypography.family
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group email",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrm-email",
    style: labelStyle
  }, emailLabel, emailLabel != "" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Typography */ "./src/components/components/Typography.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






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
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
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
      title: "Label Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Row Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.rowSpacing,
      onChange: rowSpacing => this.onChangeAttribute("rowSpacing", rowSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: labelColor => this.onChangeAttribute("labelColor", labelColor),
      value: attributes.labelColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute("labelSpacing", labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: labelTypography,
      onChange: value => setAttributes({
        labelTypography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
      onChange: inputTextColor => this.onChangeAttribute("inputTextColor", inputTextColor),
      value: attributes.inputTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBgColor => this.onChangeAttribute("inputBgColor", inputBgColor),
      value: attributes.inputBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderRadius,
      onChange: radius => this.onChangeAttribute("inputBorderRadius", radius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.inputBorderStyle,
      onChange: inputBorderStyle => this.onChangeAttribute("inputBorderStyle", inputBorderStyle),
      options: [{
        value: "none",
        label: "None"
      }, {
        value: "solid",
        label: "Solid"
      }, {
        value: "Dashed",
        label: "dashed"
      }, {
        value: "Dotted",
        label: "dotted"
      }, {
        value: "Double",
        label: "double"
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderWidth,
      onChange: border => this.onChangeAttribute("inputBorderWidth", border),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBorderColor => this.onChangeAttribute("inputBorderColor", inputBorderColor),
      value: attributes.inputBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: inputTypography,
      onChange: value => setAttributes({
        inputTypography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
        labelSpacing,
        typography,
        inputTypography,
        labelTypography
      }
    } = this.props;
    let fieldSpacing = {
      marginBottom: rowSpacing + "px"
    };
    let labelStyle = {
      color: labelColor,
      marginBottom: labelSpacing + "px",
      fontWeight: labelTypography.weight,
      fontFamily: labelTypography.family
    };
    let checkboxLabelColor = {
      color: labelColor
    };
    let inputStyle = {
      backgroundColor: inputBgColor,
      color: inputTextColor,
      borderRadius: inputBorderRadius + "px",
      paddingTop: inputPaddingTop + "px",
      paddingRight: inputPaddingRight + "px",
      paddingBottom: inputPaddingBottom + "px",
      paddingLeft: inputPaddingLeft + "px",
      borderStyle: inputBorderStyle,
      borderWidth: inputBorderWidth + "px",
      borderColor: inputBorderColor,
      fontWeight: inputTypography.weight,
      fontFamily: inputTypography.family
    };

    // display the map selector
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-form-group email",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-email",
      style: labelStyle
    }, emailLabel, emailLabel != "" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
    type: "string",
    default: ""
  },
  firstName: {
    type: "boolean",
    default: false
  },
  firstNameLabel: {
    type: "string",
    default: ""
  },
  firstNamePlaceholder: {
    type: "string",
    default: "First Name"
  },
  isRequiredName: {
    type: "boolean",
    default: false
  },
  inputFieldIcon: {
    type: "boolean",
    default: true
  },
  fieldLabel: {
    type: "boolean",
    default: false
  },
  requiredMark: {
    type: "boolean",
    default: true
  },
  rowSpacing: {
    type: "number",
    default: 12
  },
  labelTypography: {
    type: "object",
    default: {},
    style: [{
      selector: ".wpfnl-optin-form .wpfnl-optin-form-group > label"
    }]
  },
  labelColor: {
    type: "string",
    default: "#363B4E"
  },
  labelSpacing: {
    type: "number",
    default: 7
  },
  inputTypography: {
    type: "object",
    default: {},
    style: [{
      selector: ".wpfnl-optin-form .wpfnl-optin-form-group input[type=text], .wpfnl-optin-form .wpfnl-optin-form-group input[type=email]"
    }]
  },
  device: {
    type: "string",
    default: "md"
  },
  inputTextColor: {
    type: "string",
    default: "#7A8B9A"
  },
  inputBgColor: {
    type: "string",
    default: "#ffffff"
  },
  inputBorderRadius: {
    type: "number",
    default: 5
  },
  inputPaddingTop: {
    type: "integer",
    default: 11
  },
  inputPaddingRight: {
    type: "integer",
    default: 14
  },
  inputPaddingBottom: {
    type: "integer",
    default: 11
  },
  inputPaddingLeft: {
    type: "integer",
    default: 14
  },
  inputBorderStyle: {
    type: "string",
    default: "solid"
  },
  inputBorderWidth: {
    type: "number",
    default: 1
  },
  inputBorderColor: {
    type: "string",
    default: "#DFE1E8"
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
      labelSpacing,
      labelTypography,
      inputTypography,
      Typography
    }
  } = _ref;
  let layout = formLayout;
  let fieldSpacing = {
    marginBottom: rowSpacing + "px"
  };
  let labelStyle = {
    color: labelColor,
    marginBottom: labelSpacing + "px",
    fontWeight: labelTypography.weight,
    fontFamily: labelTypography.family
  };
  let checkboxLabelColor = {
    color: labelColor
  };
  let inputStyle = {
    backgroundColor: inputBgColor,
    color: inputTextColor,
    borderRadius: inputBorderRadius + "px",
    paddingTop: inputPaddingTop + "px",
    paddingRight: inputPaddingRight + "px",
    paddingBottom: inputPaddingBottom + "px",
    paddingLeft: inputPaddingLeft + "px",
    borderStyle: inputBorderStyle,
    borderWidth: inputBorderWidth + "px",
    borderColor: inputBorderColor,
    fontWeight: inputTypography.weight,
    fontFamily: inputTypography.family
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group first-name",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrm-first-name",
    style: labelStyle
  }, firstNameLabel, requiredMark && isRequiredName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Typography */ "./src/components/components/Typography.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






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
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
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
      title: "Label Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Row Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.rowSpacing,
      onChange: rowSpacing => this.onChangeAttribute("rowSpacing", rowSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: labelColor => this.onChangeAttribute("labelColor", labelColor),
      value: attributes.labelColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute("labelSpacing", labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: labelTypography,
      onChange: value => setAttributes({
        labelTypography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
      onChange: inputTextColor => this.onChangeAttribute("inputTextColor", inputTextColor),
      value: attributes.inputTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBgColor => this.onChangeAttribute("inputBgColor", inputBgColor),
      value: attributes.inputBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderRadius,
      onChange: radius => this.onChangeAttribute("inputBorderRadius", radius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.inputBorderStyle,
      onChange: inputBorderStyle => this.onChangeAttribute("inputBorderStyle", inputBorderStyle),
      options: [{
        value: "none",
        label: "None"
      }, {
        value: "solid",
        label: "Solid"
      }, {
        value: "Dashed",
        label: "dashed"
      }, {
        value: "Dotted",
        label: "dotted"
      }, {
        value: "Double",
        label: "double"
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderWidth,
      onChange: border => this.onChangeAttribute("inputBorderWidth", border),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBorderColor => this.onChangeAttribute("inputBorderColor", inputBorderColor),
      value: attributes.inputBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: inputTypography,
      onChange: value => setAttributes({
        inputTypography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
        labelSpacing,
        inputTypography,
        labelTypography,
        Typography
      }
    } = this.props;
    let fieldSpacing = {
      marginBottom: rowSpacing + "px"
    };
    let labelStyle = {
      color: labelColor,
      marginBottom: labelSpacing + "px",
      fontWeight: labelTypography.weight,
      fontFamily: labelTypography.family
    };
    let checkboxLabelColor = {
      color: labelColor
    };
    let inputStyle = {
      backgroundColor: inputBgColor,
      color: inputTextColor,
      borderRadius: inputBorderRadius + "px",
      paddingTop: inputPaddingTop + "px",
      paddingRight: inputPaddingRight + "px",
      paddingBottom: inputPaddingBottom + "px",
      paddingLeft: inputPaddingLeft + "px",
      borderStyle: inputBorderStyle,
      borderWidth: inputBorderWidth + "px",
      borderColor: inputBorderColor,
      fontWeight: inputTypography.weight,
      fontFamily: inputTypography.family
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-form-group first-name",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-first-name",
      style: labelStyle
    }, firstNameLabel, requiredMark && isRequiredName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
    default: ''
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
      labelSpacing,
      labelTypography,
      inputTypography,
      Typography
    }
  } = _ref;
  let layout = formLayout;
  let fieldSpacing = {
    marginBottom: rowSpacing + "px"
  };
  let labelStyle = {
    color: labelColor,
    marginBottom: labelSpacing + "px",
    fontWeight: labelTypography.weight,
    fontFamily: labelTypography.family
  };
  let checkboxLabelColor = {
    color: labelColor
  };
  let inputStyle = {
    backgroundColor: inputBgColor,
    color: inputTextColor,
    borderRadius: inputBorderRadius + "px",
    paddingTop: inputPaddingTop + "px",
    paddingRight: inputPaddingRight + "px",
    paddingBottom: inputPaddingBottom + "px",
    paddingLeft: inputPaddingLeft + "px",
    borderStyle: inputBorderStyle,
    borderWidth: inputBorderWidth + "px",
    borderColor: inputBorderColor,
    fontWeight: inputTypography.weight,
    fontFamily: inputTypography.family
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group last-name",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "wpfnl-last-name",
    style: labelStyle
  }, lastNameLabel, requiredMark && isRequiredLastName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Typography */ "./src/components/components/Typography.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






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
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
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
      title: "Label Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Row Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.rowSpacing,
      onChange: rowSpacing => this.onChangeAttribute("rowSpacing", rowSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: labelColor => this.onChangeAttribute("labelColor", labelColor),
      value: attributes.labelColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute("labelSpacing", labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: labelTypography,
      onChange: value => setAttributes({
        labelTypography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
      onChange: inputTextColor => this.onChangeAttribute("inputTextColor", inputTextColor),
      value: attributes.inputTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBgColor => this.onChangeAttribute("inputBgColor", inputBgColor),
      value: attributes.inputBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderRadius,
      onChange: radius => this.onChangeAttribute("inputBorderRadius", radius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.inputBorderStyle,
      onChange: inputBorderStyle => this.onChangeAttribute("inputBorderStyle", inputBorderStyle),
      options: [{
        value: "none",
        label: "None"
      }, {
        value: "solid",
        label: "Solid"
      }, {
        value: "Dashed",
        label: "dashed"
      }, {
        value: "Dotted",
        label: "dotted"
      }, {
        value: "Double",
        label: "double"
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderWidth,
      onChange: border => this.onChangeAttribute("inputBorderWidth", border),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBorderColor => this.onChangeAttribute("inputBorderColor", inputBorderColor),
      value: attributes.inputBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: inputTypography,
      onChange: value => setAttributes({
        inputTypography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
        labelSpacing,
        labelTypography,
        inputTypography,
        Typography
      }
    } = this.props;
    let fieldSpacing = {
      marginBottom: rowSpacing + "px"
    };
    let labelStyle = {
      color: labelColor,
      marginBottom: labelSpacing + "px",
      fontWeight: labelTypography.weight,
      fontFamily: labelTypography.family
    };
    let checkboxLabelColor = {
      color: labelColor
    };
    let inputStyle = {
      backgroundColor: inputBgColor,
      color: inputTextColor,
      borderRadius: inputBorderRadius + "px",
      paddingTop: inputPaddingTop + "px",
      paddingRight: inputPaddingRight + "px",
      paddingBottom: inputPaddingBottom + "px",
      paddingLeft: inputPaddingLeft + "px",
      borderStyle: inputBorderStyle,
      borderWidth: inputBorderWidth + "px",
      borderColor: inputBorderColor,
      fontWeight: inputTypography.weight,
      fontFamily: inputTypography.family
    };

    // display the map selector
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-form-group last-name",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "mrm-last-name",
      style: labelStyle
    }, lastNameLabel, requiredMark && isRequiredLastName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
    default: 2
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
  },
  outline: {
    type: "string",
    default: "fill"
  },
  buttonWidth: {
    type: 'number',
    default: ''
  },
  typography: {
    type: 'object',
    default: {},
    style: [{
      selector: 'mrm-form-group.submit .mrm-submit-button'
    }]
  },
  buttonFontSize: {
    type: 'number',
    default: 15
  },
  buttonFontSizeUnit: {
    type: 'string',
    default: 'px'
  },
  paddingTopBottom: {
    type: "number",
    default: 15
  },
  paddingLeftRight: {
    type: "number",
    default: 20
  },
  lineHeight: {
    type: "number",
    default: 1
  },
  letterSpacing: {
    type: "number",
    default: 0
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
      buttonBorderColor,
      outline,
      buttonWidth,
      typography,
      buttonFontSize,
      lineHeight,
      letterSpacing,
      paddingTopBottom,
      paddingLeftRight
    }
  } = _ref;
  let layout = formLayout;
  let fieldSpacing = {
    marginBottom: rowSpacing + 'px',
    textAlign: buttonAlign
  };
  let buttonStyle = {
    // backgroundColor: buttonBgColor,
    backgroundColor: outline === 'fill' ? buttonBgColor : 'transparent',
    color: buttonTextColor,
    borderRadius: buttonBorderRadius + 'px',
    padding: "" + paddingTopBottom + "px " + paddingLeftRight + "px",
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    borderStyle: buttonBorderStyle,
    fontWeight: typography.weight,
    fontFamily: typography.family,
    fontSize: buttonFontSize,
    // textAlign: buttonAlign,
    // borderWidth:  buttonBorderWidth+'px',
    borderWidth: outline === 'fill' ? '0' : buttonBorderWidth + 'px',
    borderColor: buttonBorderColor,
    width: buttonWidth + "%"
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components/Typography */ "./src/components/components/Typography.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






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
  Radio,
  FontSizePicker
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
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
  };
  onChangeAttribute = (key, value) => {
    this.props.setAttributes({
      ...this.props.attributes,
      [key]: value
    });
  };
  onChangeOutlineStyle = (outline, onChangeOutlineStyle) => {
    this.props.setAttributes({
      outline: onChangeOutlineStyle,
      buttonBorderStyle: 'solid',
      buttonTextColor: "#573bff",
      buttonBorderColor: "#573bff"
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
    let typography = attributes.typography,
      device = attributes.device;
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
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Button Outline Style', 'mrm'),
      value: attributes.outline,
      onChange: outline_style => this.onChangeOutlineStyle('outline', outline_style),
      options: [{
        value: "fill",
        label: "Fill"
      }, {
        value: "outline",
        label: "Outline"
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Button Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.buttonWidth,
      onChange: buttonWidth => this.onChangeAttribute('buttonWidth', buttonWidth),
      allowReset: true,
      min: 0,
      max: 100,
      step: 10
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
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Padding Top & Bottom', 'wpfnl'),
      value: attributes.paddingTopBottom,
      onChange: btn_padding_top_bottom => setAttributes({
        paddingTopBottom: btn_padding_top_bottom
      }),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Padding Left & Right', 'mrm'),
      value: attributes.paddingLeftRight,
      onChange: btn_padding_left_right => setAttributes({
        paddingLeftRight: btn_padding_left_right
      }),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Line Height', 'mrm'),
      value: attributes.lineHeight,
      onChange: btn_lineHeight => setAttributes({
        lineHeight: btn_lineHeight
      }),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Letter Spacing', 'mrm'),
      value: attributes.letterSpacing,
      onChange: btn_letterSpacing => setAttributes({
        letterSpacing: btn_letterSpacing
      }),
      allowReset: true,
      min: 0,
      max: 20,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Font size"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.buttonFontSize,
      onChange: btnBorder => this.onChangeAttribute('buttonFontSize', btnBorder),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: typography,
      onChange: value => setAttributes({
        typography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
        buttonBorderStyle,
        buttonBorderWidth,
        buttonBorderColor,
        outline,
        buttonWidth,
        typography,
        buttonFontSize,
        lineHeight,
        letterSpacing,
        paddingTopBottom,
        paddingLeftRight
      }
    } = this.props;
    let fieldSpacing = {
      marginBottom: rowSpacing + 'px',
      textAlign: buttonAlign
    };
    let buttonStyle = {
      // backgroundColor: buttonBgColor,
      backgroundColor: outline === 'fill' ? buttonBgColor : 'transparent',
      color: buttonTextColor,
      borderRadius: buttonBorderRadius + 'px',
      padding: "" + paddingTopBottom + "px " + paddingLeftRight + "px",
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      borderStyle: buttonBorderStyle,
      fontWeight: typography.weight,
      fontFamily: typography.family,
      fontSize: buttonFontSize,
      // textAlign: buttonAlign,
      // borderWidth:  buttonBorderWidth+'px',
      borderWidth: outline === 'fill' ? '0' : buttonBorderWidth + 'px',
      borderColor: buttonBorderColor,
      width: buttonWidth + "%"
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
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Submit', 'mrm')
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
  custom_text_placeholder: {
    type: 'string',
    default: ''
  },
  custom_textarea_placeholder: {
    type: 'string',
    default: 'Type here...'
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
      custom_text_placeholder,
      custom_textarea_placeholder,
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
      inputBorderColor,
      inputTypography,
      labelTypography
    }
  } = _ref;
  let fieldSpacing = {
    marginBottom: rowSpacing + "px"
  };
  let labelStyle = {
    color: labelColor,
    marginBottom: labelSpacing + "px",
    fontWeight: labelTypography.weight,
    fontFamily: labelTypography.family
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
    borderRadius: inputBorderRadius + "px",
    paddingTop: inputPaddingTop + "px",
    paddingRight: inputPaddingRight + "px",
    paddingBottom: inputPaddingBottom + "px",
    paddingLeft: inputPaddingLeft + "px",
    borderStyle: inputBorderStyle,
    borderWidth: inputBorderWidth + "px",
    borderColor: inputBorderColor,
    fontWeight: inputTypography.weight,
    fontFamily: inputTypography.family
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, field_type == "text" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group text",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_name,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, "mrm") : "", field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: field_name,
    id: field_name,
    placeholder: custom_text_placeholder,
    required: field_require,
    style: inputStyle
  }))), field_type == "textarea" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group textarea",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_slug,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("", "mrm"), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    id: field_slug,
    name: field_slug,
    placeholder: custom_textarea_placeholder,
    required: field_require,
    rows: "4",
    cols: "50",
    style: inputStyle
  }))), field_type == "date" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-group date",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_name,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, "mrm") : "", field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
  }))), field_type == "radio" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `mrm-${field_label}`,
    className: "mrm-form-group radio"
  }, radioOption.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrm-radio-group mintmrm-radiobtn",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      key: index,
      type: "radio",
      id: option.label,
      name: field_slug,
      required: field_require
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: option.label,
      style: radioLabelColor
    }, option.label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(option.label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("", "mrm"), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")));
  })), field_type == "checkbox" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("", "mrm"), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")))), field_type == "select" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `mrm-${field_label}`,
    className: "mrm-form-group select",
    style: fieldSpacing
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: field_slug,
    style: labelStyle
  }, field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(field_label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("", "mrm"), field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "required-mark"
  }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: field_slug,
    id: field_slug,
    style: inputStyle
  }, selectOption.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index,
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components/Typography */ "./src/components/components/Typography.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






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
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired),
    isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
    setAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
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
      label: "Label" + "-" + attributes.radio_option_count
    };
    if ("radio" === attributes.field_type) {
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
      onChange: select_type => this.onChangeAttribute("field_type", select_type),
      options: [{
        value: "text",
        label: "Text"
      }, {
        value: "textarea",
        label: "Text Area"
      }, {
        value: "radio",
        label: "Radio Button"
      }, {
        value: "checkbox",
        label: "Checkbox"
      }, {
        value: "select",
        label: "Select"
      }, {
        value: "date",
        label: "Date"
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
      label: "Field Name",
      value: attributes.field_name,
      onChange: state => setAttributes({
        field_name: state
      })
    }), attributes.field_type != "radio" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
      label: " Field Label",
      value: attributes.field_label,
      onChange: state => setAttributes({
        field_label: state
      })
    }), attributes.field_type == "textarea" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
      label: " Placeholder Text",
      value: attributes.custom_textarea_placeholder,
      onChange: state => setAttributes({
        custom_textarea_placeholder: state
      })
    }), attributes.field_type == "text" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      className: "mrm-inline-label",
      label: " Placeholder Text",
      value: attributes.custom_text_placeholder,
      onChange: state => setAttributes({
        custom_text_placeholder: state
      })
    }), attributes.field_type == "select" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
    })), attributes.field_type == "radio" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
      value: "option" + "-" + attributes.select_option_count,
      label: "Option" + "-" + attributes.select_option_count
    };
    if ("select" === attributes.field_type) {
      attributes.selectOption.push(defaultOption);
      setAttributes(attributes.selectOption);
    }
  };
  formStyle = () => {
    let {
        attributes,
        setAttributes
      } = this.props,
      labelTypography = attributes.labelTypography,
      device = attributes.device;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Label Style",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Row Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.rowSpacing,
      onChange: rowSpacing => this.onChangeAttribute("rowSpacing", rowSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: labelColor => this.onChangeAttribute("labelColor", labelColor),
      value: attributes.labelColor
    }), "radio" !== attributes.field_type && "checkbox" !== attributes.field_type && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Label Spacing"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.labelSpacing,
      onChange: labelSpacing => this.onChangeAttribute("labelSpacing", labelSpacing),
      allowReset: true,
      min: 0,
      max: 50,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: labelTypography,
      onChange: value => setAttributes({
        labelTypography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
      onChange: inputTextColor => this.onChangeAttribute("inputTextColor", inputTextColor),
      value: attributes.inputTextColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBgColor => this.onChangeAttribute("inputBgColor", inputBgColor),
      value: attributes.inputBgColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      className: "mrm-hr"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderRadius,
      onChange: radius => this.onChangeAttribute("inputBorderRadius", radius),
      allowReset: true,
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Style"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      value: attributes.inputBorderStyle,
      onChange: inputBorderStyle => this.onChangeAttribute("inputBorderStyle", inputBorderStyle),
      options: [{
        value: "none",
        label: "None"
      }, {
        value: "solid",
        label: "Solid"
      }, {
        value: "Dashed",
        label: "dashed"
      }, {
        value: "Dotted",
        label: "dotted"
      }, {
        value: "Double",
        label: "double"
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      value: attributes.inputBorderWidth,
      onChange: border => this.onChangeAttribute("inputBorderWidth", border),
      allowReset: true,
      min: 0,
      max: 5,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "blocks-base-control__label"
    }, "Border Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      onChange: inputBorderColor => this.onChangeAttribute("inputBorderColor", inputBorderColor),
      value: attributes.inputBorderColor
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_components_Typography__WEBPACK_IMPORTED_MODULE_3__["default"]
    // label={__('Typography')}
    , {
      value: inputTypography,
      onChange: value => setAttributes({
        inputTypography: value
      }),
      disableLineHeight: true,
      device: device,
      onDeviceChange: value => setAttributes({
        device: value
      })
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
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, this.customFields(), this.formStyle(), "radio" !== attributes.field_type && "checkbox" !== attributes.field_type && this.inputFieldStyle())));
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
      marginBottom: attributes.rowSpacing + "px"
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + "px",
      fontWeight: attributes.labelTypography.weight,
      fontFamily: attributes.labelTypography.family
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + "px",
      paddingTop: attributes.inputPaddingTop + "px",
      paddingRight: attributes.inputPaddingRight + "px",
      paddingBottom: attributes.inputPaddingBottom + "px",
      paddingLeft: attributes.inputPaddingLeft + "px",
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + "px",
      borderColor: attributes.inputBorderColor,
      fontWeight: attributes.inputTypography.weight,
      fontFamily: attributes.inputTypography.family
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-form-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(attributes.field_label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("", "mrm"), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: attributes.field_slug,
      id: attributes.field_slug,
      placeholder: attributes.custom_text_placeholder,
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
      marginBottom: attributes.rowSpacing + "px"
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + "px",
      fontWeight: attributes.labelTypography.weight,
      fontFamily: attributes.labelTypography.family
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + "px",
      paddingTop: attributes.inputPaddingTop + "px",
      paddingRight: attributes.inputPaddingRight + "px",
      paddingBottom: attributes.inputPaddingBottom + "px",
      paddingLeft: attributes.inputPaddingLeft + "px",
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + "px",
      borderColor: attributes.inputBorderColor,
      fontWeight: attributes.inputTypography.weight,
      fontFamily: attributes.inputTypography.family
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-form-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(attributes.field_label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("", "mrm"), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "required-mark"
    }, "*")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      id: attributes.field_slug,
      name: attributes.field_slug,
      placeholder: attributes.custom_textarea_placeholder,
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
      marginBottom: attributes.rowSpacing + "px"
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + "px",
      fontWeight: attributes.labelTypography.weight,
      fontFamily: attributes.labelTypography.family
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + "px",
      paddingTop: attributes.inputPaddingTop + "px",
      paddingRight: attributes.inputPaddingRight + "px",
      paddingBottom: attributes.inputPaddingBottom + "px",
      paddingLeft: attributes.inputPaddingLeft + "px",
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + "px",
      borderColor: attributes.inputBorderColor,
      fontWeight: attributes.inputTypography.weight,
      fontFamily: attributes.inputTypography.family
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-form-group",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(attributes.field_label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("", "mrm"), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
      marginBottom: attributes.rowSpacing + "px"
    };
    let labelStyle = {
      color: attributes.labelColor,
      marginBottom: attributes.labelSpacing + "px",
      fontWeight: attributes.labelTypography.weight,
      fontFamily: attributes.labelTypography.family
    };
    let checkboxLabelColor = {
      color: attributes.labelColor
    };
    let inputStyle = {
      backgroundColor: attributes.inputBgColor,
      color: attributes.inputTextColor,
      borderRadius: attributes.inputBorderRadius + "px",
      paddingTop: attributes.inputPaddingTop + "px",
      paddingRight: attributes.inputPaddingRight + "px",
      paddingBottom: attributes.inputPaddingBottom + "px",
      paddingLeft: attributes.inputPaddingLeft + "px",
      borderStyle: attributes.inputBorderStyle,
      borderWidth: attributes.inputBorderWidth + "px",
      borderColor: attributes.inputBorderColor,
      fontWeight: attributes.inputTypography.weight,
      fontFamily: attributes.inputTypography.family
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: `mrm-${attributes.field_label}`,
      className: "mrm-form-group select",
      style: fieldSpacing
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: attributes.field_slug,
      style: labelStyle
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(attributes.field_label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("", "mrm"), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
      marginBottom: attributes.rowSpacing + "px"
    };

    // let labelStyle = {
    //     color:  attributes.labelColor,
    //     marginBottom:  attributes.labelSpacing+'px',
    // }

    let checkboxLabelColor = {
      color: attributes.labelColor,
      fontWeight: attributes.labelTypography.weight,
      fontFamily: attributes.labelTypography.family
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
    }, attributes.field_label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(attributes.field_label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("", "mrm"), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
      marginBottom: attributes.rowSpacing + "px"
    };
    let labelStyle = {
      color: attributes.labelColor,
      fontWeight: attributes.labelTypography.weight,
      fontFamily: attributes.labelTypography.family
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
      key: index,
      htmlFor: option.label,
      style: labelStyle
    }, option.label ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(option.label, "mrm") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("", "mrm"), attributes.field_require && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getInspectorControls(), attributes.field_type == "text" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderTextField(attributes)), attributes.field_type == "textarea" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderTextareaField(attributes)), attributes.field_type == "date" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderDateField(attributes)), attributes.field_type == "select" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderSelectField(attributes)), attributes.field_type == "checkbox" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderCheckboxField(attributes)), attributes.field_type == "radio" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, this.renderRadioField(attributes)));
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router/index.js");
/* harmony import */ var _Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/CrossIcon */ "./src/components/Icons/CrossIcon.jsx");
/* harmony import */ var _Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/QuestionIcon */ "./src/components/Icons/QuestionIcon.jsx");
/* harmony import */ var _Icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/SettingsIcon */ "./src/components/Icons/SettingsIcon.jsx");

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
  DatePicker,
  TabPanel,
  ColorPicker
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
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)("MRMBlockEditorSidebarInspector");
function Sidebar() {
  const [tabState, setTabState] = useState("same-page");
  const [count, setCount] = useState(0);

  // preparing settings data for backend as JSON
  const [settingData, setSettingData] = useState({
    settings: {
      confirmation_type: {
        selected_confirmation_type: "",
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
      form_layout: {
        form_placement: "",
        form_animation: "",
        close_button_color: "",
        close_background_color: ""
      },
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

  /* @settings variables */

  // confirmation tabs
  const [selectedConfirmationType, setSelectedConfirmationType] = useState("");
  // confirmation type "Same Page"
  const [messageToShow, setMessageToShow] = useState("");
  const [afterFormSubmission, setAfterFormSubmission] = useState("hide-form");
  // confirmation type "To A Page"
  const [page, setPage] = useState("");
  const [redirectionMessage, setRedirectionMessage] = useState("");
  // confirmation type "Custom URL"
  const [customURL, setCustomURL] = useState("");
  const [customRedirectionMessage, setCustomRedirectionMessage] = useState("");

  // form position and animation
  const [formPosition, setFormPosition] = useState("default");
  const [formAnimation, setFormAnimation] = useState("none");
  const [closeButtonColor, setCloseButtonColor] = useState("#000");
  const [closeBackgroundColor, setCloseBackgroundColor] = useState("#fff");

  // form scheduling
  const [formScheduling, setFormScheduling] = useState(false);
  const [date, setDate] = useState(new Date());
  const [submissionStartDate, setSubmissionStartDate] = useState("");
  const [submissionStartTime, setSubmissionStartTime] = useState("");

  // form restriction
  const [maxEntries, setMaxEntries] = useState(false);
  const [maxNumber, setMaxNumber] = useState();
  const [maxType, setMaxType] = useState();

  // hook
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)();

  // get id from URL
  const [id, setId] = useState(window.location.hash.slice(15));

  // it's a copy of main settingData
  const [prevSetting, setPrevSetting] = useState({});

  // confirmation tab
  const [currentTab, setCurrentTab] = useState("same-page");
  const [pageData, setPageData] = useState([]);
  const [pageOptions, setPageOptions] = useState([]);
  const [pageId, setPageId] = useState();
  const [selectedPageId, setSelectedPageId] = useState();
  const [refresh, setRefresh] = useState(false);
  const toggleRefresh = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    if (id) {
      const getFormData = async () => {
        const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/get-form-settings/${id}`);
        const resJson = await res.json();
        if (200 === resJson.code) {
          var _resJson$data, _resJson$data$meta_fi, _resJson$data2, _resJson$data2$meta_f;
          setSettingData(JSON.parse((_resJson$data = resJson.data) === null || _resJson$data === void 0 ? void 0 : (_resJson$data$meta_fi = _resJson$data.meta_fields) === null || _resJson$data$meta_fi === void 0 ? void 0 : _resJson$data$meta_fi.settings));
          setPrevSetting(JSON.parse((_resJson$data2 = resJson.data) === null || _resJson$data2 === void 0 ? void 0 : (_resJson$data2$meta_f = _resJson$data2.meta_fields) === null || _resJson$data2$meta_f === void 0 ? void 0 : _resJson$data2$meta_f.settings));
        }
      };
      getFormData();
      const getPageData = async () => {
        const res = await fetch(`${window.MRM_Vars.api_base_url}wp/v2/pages`);
        const resJson = await res.json();
        if (200 == res.status) {
          setPageData(resJson);
          toggleRefresh();
        }
      };
      getPageData();
    }
  }, []);
  const [isValidUrl, setIsValidUrl] = useState(true);
  function validURL(str) {
    var pattern = new RegExp("^(https?:\\/\\/)?" +
    // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
    // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" +
    // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
    // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" +
    // query string
    "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
    setIsValidUrl(!!pattern.test(str));
    return !!pattern.test(str);
  }
  useEffect(() => {
    var _prevSetting$settings, _prevSetting$settings2, _prevSetting$settings7, _prevSetting$settings8, _prevSetting$settings9, _prevSetting$settings13, _prevSetting$settings14, _prevSetting$settings15, _prevSetting$settings19, _prevSetting$settings20, _prevSetting$settings21, _prevSetting$settings25, _prevSetting$settings26, _prevSetting$settings27, _prevSetting$settings31, _prevSetting$settings32, _prevSetting$settings33, _prevSetting$settings40, _prevSetting$settings41, _prevSetting$settings42, _prevSetting$settings46, _prevSetting$settings47, _prevSetting$settings50, _prevSetting$settings51, _prevSetting$settings54, _prevSetting$settings55, _prevSetting$settings58, _prevSetting$settings59;
    // set selected confiramation type
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings = prevSetting.settings) !== null && _prevSetting$settings !== void 0 && (_prevSetting$settings2 = _prevSetting$settings.confirmation_type) !== null && _prevSetting$settings2 !== void 0 && _prevSetting$settings2.selected_confirmation_type) {
      var _prevSetting$settings3, _prevSetting$settings4, _prevSetting$settings5, _prevSetting$settings6;
      setTabState(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings3 = prevSetting.settings) === null || _prevSetting$settings3 === void 0 ? void 0 : (_prevSetting$settings4 = _prevSetting$settings3.confirmation_type) === null || _prevSetting$settings4 === void 0 ? void 0 : _prevSetting$settings4.selected_confirmation_type);
      setSelectedConfirmationType(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings5 = prevSetting.settings) === null || _prevSetting$settings5 === void 0 ? void 0 : (_prevSetting$settings6 = _prevSetting$settings5.confirmation_type) === null || _prevSetting$settings6 === void 0 ? void 0 : _prevSetting$settings6.selected_confirmation_type);
    } else {
      setSelectedConfirmationType("same-page");
    }

    // set "Message to show" in same page tab
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings7 = prevSetting.settings) !== null && _prevSetting$settings7 !== void 0 && (_prevSetting$settings8 = _prevSetting$settings7.confirmation_type) !== null && _prevSetting$settings8 !== void 0 && (_prevSetting$settings9 = _prevSetting$settings8.same_page) !== null && _prevSetting$settings9 !== void 0 && _prevSetting$settings9.message_to_show) {
      var _prevSetting$settings10, _prevSetting$settings11, _prevSetting$settings12;
      setMessageToShow(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings10 = prevSetting.settings) === null || _prevSetting$settings10 === void 0 ? void 0 : (_prevSetting$settings11 = _prevSetting$settings10.confirmation_type) === null || _prevSetting$settings11 === void 0 ? void 0 : (_prevSetting$settings12 = _prevSetting$settings11.same_page) === null || _prevSetting$settings12 === void 0 ? void 0 : _prevSetting$settings12.message_to_show);
    } else {
      setMessageToShow("Form submitted succesfully.");
    }

    // set "After form submission" in same page tab
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings13 = prevSetting.settings) !== null && _prevSetting$settings13 !== void 0 && (_prevSetting$settings14 = _prevSetting$settings13.confirmation_type) !== null && _prevSetting$settings14 !== void 0 && (_prevSetting$settings15 = _prevSetting$settings14.same_page) !== null && _prevSetting$settings15 !== void 0 && _prevSetting$settings15.after_form_submission) {
      var _prevSetting$settings16, _prevSetting$settings17, _prevSetting$settings18;
      setAfterFormSubmission(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings16 = prevSetting.settings) === null || _prevSetting$settings16 === void 0 ? void 0 : (_prevSetting$settings17 = _prevSetting$settings16.confirmation_type) === null || _prevSetting$settings17 === void 0 ? void 0 : (_prevSetting$settings18 = _prevSetting$settings17.same_page) === null || _prevSetting$settings18 === void 0 ? void 0 : _prevSetting$settings18.after_form_submission);
    } else {
      setAfterFormSubmission("none");
    }

    // set "Page" for "to a page" tab
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings19 = prevSetting.settings) !== null && _prevSetting$settings19 !== void 0 && (_prevSetting$settings20 = _prevSetting$settings19.confirmation_type) !== null && _prevSetting$settings20 !== void 0 && (_prevSetting$settings21 = _prevSetting$settings20.to_a_page) !== null && _prevSetting$settings21 !== void 0 && _prevSetting$settings21.page) {
      var _prevSetting$settings22, _prevSetting$settings23, _prevSetting$settings24;
      setSelectedPageId(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings22 = prevSetting.settings) === null || _prevSetting$settings22 === void 0 ? void 0 : (_prevSetting$settings23 = _prevSetting$settings22.confirmation_type) === null || _prevSetting$settings23 === void 0 ? void 0 : (_prevSetting$settings24 = _prevSetting$settings23.to_a_page) === null || _prevSetting$settings24 === void 0 ? void 0 : _prevSetting$settings24.page);
    } else {
      setSelectedPageId("");
    }

    // set "Redirection message" for "to a page" tab
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings25 = prevSetting.settings) !== null && _prevSetting$settings25 !== void 0 && (_prevSetting$settings26 = _prevSetting$settings25.confirmation_type) !== null && _prevSetting$settings26 !== void 0 && (_prevSetting$settings27 = _prevSetting$settings26.to_a_page) !== null && _prevSetting$settings27 !== void 0 && _prevSetting$settings27.redirection_message) {
      var _prevSetting$settings28, _prevSetting$settings29, _prevSetting$settings30;
      setRedirectionMessage(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings28 = prevSetting.settings) === null || _prevSetting$settings28 === void 0 ? void 0 : (_prevSetting$settings29 = _prevSetting$settings28.confirmation_type) === null || _prevSetting$settings29 === void 0 ? void 0 : (_prevSetting$settings30 = _prevSetting$settings29.to_a_page) === null || _prevSetting$settings30 === void 0 ? void 0 : _prevSetting$settings30.redirection_message);
    } else {
      setRedirectionMessage("Welcome to this page. Form Submitted Successfully!");
    }

    // set custom url for "to a custom url" tab
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings31 = prevSetting.settings) !== null && _prevSetting$settings31 !== void 0 && (_prevSetting$settings32 = _prevSetting$settings31.confirmation_type) !== null && _prevSetting$settings32 !== void 0 && (_prevSetting$settings33 = _prevSetting$settings32.to_a_custom_url) !== null && _prevSetting$settings33 !== void 0 && _prevSetting$settings33.custom_url) {
      var _prevSetting$settings34, _prevSetting$settings35, _prevSetting$settings36, _prevSetting$settings37, _prevSetting$settings38, _prevSetting$settings39;
      setCustomURL(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings34 = prevSetting.settings) === null || _prevSetting$settings34 === void 0 ? void 0 : (_prevSetting$settings35 = _prevSetting$settings34.confirmation_type) === null || _prevSetting$settings35 === void 0 ? void 0 : (_prevSetting$settings36 = _prevSetting$settings35.to_a_custom_url) === null || _prevSetting$settings36 === void 0 ? void 0 : _prevSetting$settings36.custom_url);
      setIsValidUrl(validURL(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings37 = prevSetting.settings) === null || _prevSetting$settings37 === void 0 ? void 0 : (_prevSetting$settings38 = _prevSetting$settings37.confirmation_type) === null || _prevSetting$settings38 === void 0 ? void 0 : (_prevSetting$settings39 = _prevSetting$settings38.to_a_custom_url) === null || _prevSetting$settings39 === void 0 ? void 0 : _prevSetting$settings39.custom_url));
    } else {
      setCustomURL("https://");
    }

    // set message for a "to a custom url" tab
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings40 = prevSetting.settings) !== null && _prevSetting$settings40 !== void 0 && (_prevSetting$settings41 = _prevSetting$settings40.confirmation_type) !== null && _prevSetting$settings41 !== void 0 && (_prevSetting$settings42 = _prevSetting$settings41.to_a_custom_url) !== null && _prevSetting$settings42 !== void 0 && _prevSetting$settings42.custom_redirection_message) {
      var _prevSetting$settings43, _prevSetting$settings44, _prevSetting$settings45;
      setCustomRedirectionMessage(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings43 = prevSetting.settings) === null || _prevSetting$settings43 === void 0 ? void 0 : (_prevSetting$settings44 = _prevSetting$settings43.confirmation_type) === null || _prevSetting$settings44 === void 0 ? void 0 : (_prevSetting$settings45 = _prevSetting$settings44.to_a_custom_url) === null || _prevSetting$settings45 === void 0 ? void 0 : _prevSetting$settings45.custom_redirection_message);
    } else {
      setCustomRedirectionMessage("You are redirected to a new url.");
    }

    // set form layout position
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings46 = prevSetting.settings) !== null && _prevSetting$settings46 !== void 0 && (_prevSetting$settings47 = _prevSetting$settings46.form_layout) !== null && _prevSetting$settings47 !== void 0 && _prevSetting$settings47.form_position) {
      var _prevSetting$settings48, _prevSetting$settings49;
      setFormPosition(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings48 = prevSetting.settings) === null || _prevSetting$settings48 === void 0 ? void 0 : (_prevSetting$settings49 = _prevSetting$settings48.form_layout) === null || _prevSetting$settings49 === void 0 ? void 0 : _prevSetting$settings49.form_position);
    } else {
      setFormPosition("default");
    }

    //set form layout animation
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings50 = prevSetting.settings) !== null && _prevSetting$settings50 !== void 0 && (_prevSetting$settings51 = _prevSetting$settings50.form_layout) !== null && _prevSetting$settings51 !== void 0 && _prevSetting$settings51.form_animation) {
      var _prevSetting$settings52, _prevSetting$settings53;
      setFormAnimation(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings52 = prevSetting.settings) === null || _prevSetting$settings52 === void 0 ? void 0 : (_prevSetting$settings53 = _prevSetting$settings52.form_layout) === null || _prevSetting$settings53 === void 0 ? void 0 : _prevSetting$settings53.form_animation);
    } else {
      setFormAnimation("none");
    }

    //set form close button color
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings54 = prevSetting.settings) !== null && _prevSetting$settings54 !== void 0 && (_prevSetting$settings55 = _prevSetting$settings54.form_layout) !== null && _prevSetting$settings55 !== void 0 && _prevSetting$settings55.close_button_color) {
      var _prevSetting$settings56, _prevSetting$settings57;
      setCloseButtonColor(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings56 = prevSetting.settings) === null || _prevSetting$settings56 === void 0 ? void 0 : (_prevSetting$settings57 = _prevSetting$settings56.form_layout) === null || _prevSetting$settings57 === void 0 ? void 0 : _prevSetting$settings57.close_button_color);
    } else {
      setCloseButtonColor("#000");
    }

    //set form close button background color
    if (prevSetting !== null && prevSetting !== void 0 && (_prevSetting$settings58 = prevSetting.settings) !== null && _prevSetting$settings58 !== void 0 && (_prevSetting$settings59 = _prevSetting$settings58.form_layout) !== null && _prevSetting$settings59 !== void 0 && _prevSetting$settings59.close_background_color) {
      var _prevSetting$settings60, _prevSetting$settings61;
      setCloseBackgroundColor(prevSetting === null || prevSetting === void 0 ? void 0 : (_prevSetting$settings60 = prevSetting.settings) === null || _prevSetting$settings60 === void 0 ? void 0 : (_prevSetting$settings61 = _prevSetting$settings60.form_layout) === null || _prevSetting$settings61 === void 0 ? void 0 : _prevSetting$settings61.close_background_color);
    } else {
      setCloseBackgroundColor("#fff");
    }
  }, [prevSetting]);
  useEffect(async () => {
    if ("same-page" === currentTab) {
      setSettingData({
        settings: {
          confirmation_type: {
            selected_confirmation_type: "same-page",
            same_page: {
              message_to_show: messageToShow,
              after_form_submission: afterFormSubmission
            }
          },
          form_layout: {
            form_position: formPosition,
            form_animation: formAnimation,
            close_button_color: closeButtonColor,
            close_background_color: closeBackgroundColor
          },
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
            selected_confirmation_type: "page",
            to_a_page: {
              page: selectedPageId,
              redirection_message: redirectionMessage
            }
          },
          form_layout: {
            form_position: formPosition,
            form_animation: formAnimation,
            close_button_color: closeButtonColor,
            close_background_color: closeBackgroundColor
          },
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
            selected_confirmation_type: "custom-url",
            to_a_custom_url: {
              custom_url: customURL,
              custom_redirection_message: customRedirectionMessage
            }
          },
          form_layout: {
            form_position: formPosition,
            form_animation: formAnimation,
            close_button_color: closeButtonColor,
            close_background_color: closeBackgroundColor
          },
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
  }, [selectedConfirmationType, messageToShow, afterFormSubmission, selectedPageId, redirectionMessage, customURL, customRedirectionMessage, formPosition, formAnimation, closeButtonColor, closeBackgroundColor, formScheduling, submissionStartDate, submissionStartTime, maxEntries, count, maxType, currentTab]);
  useEffect(() => {
    localStorage.setItem("getsettings", JSON.stringify(settingData));
  }, [settingData]);
  let currentDate = new Date();
  const toggleTab = index => {
    setTabState(index);
  };
  const handlePageChange = state => {
    setSelectedPageId(state);
  };
  useEffect(() => {
    const optionArray = [];
    pageData === null || pageData === void 0 ? void 0 : pageData.map(page => {
      optionArray.push({
        value: page.id,
        label: page.id + " - " + page.title.rendered
      });
    });
    setPageOptions(optionArray);
  }, [pageData]);

  //-------settings pannel open function-------
  const showSettingsPannel = event => {
    localStorage.setItem("settingsPannel", "hide");
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
  const handleCustomURL = e => {
    setCustomURL(e);
    validURL(e);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrm-form-builder-sidebar",
    role: "region",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("MRM Block Editor advanced settings."),
    tabIndex: "-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, {
    className: "settings-pannel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-panel__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_SettingsIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null), "Settings")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Where do you want to send the user after form confirmation?"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannel-tab-nav"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tabState === "same-page" ? "tab-nav-item active" : "tab-nav-item",
    onClick: () => handleConfirmationType("same-page")
  }, "Same Page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tabState === "page" ? "tab-nav-item active" : "tab-nav-item",
    onClick: () => handleConfirmationType("page")
  }, "To A Page"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: tabState === "custom-url" ? "tab-nav-item active" : "tab-nav-item",
    onClick: () => handleConfirmationType("custom-url")
  }, "To A Custom URL")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pannel-tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tabState === "same-page" ? "single-tab-content same-page-tab-content active" : "single-tab-content same-page-tab-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Message to show", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "What message you want to show to the user?"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    name: "message_to_show",
    defaultValue: messageToShow,
    onChange: e => setMessageToShow(e)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "After Form Submission", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Define behaviour of the form after submission"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Which page you want to redirect after the submitted the form?"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: selectedPageId,
    options: pageOptions,
    onChange: state => handlePageChange(state)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Redirection Message", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "What is the message after redirection of a page?"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Enter a custom URL to redirect"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    name: "custom-url",
    value: customURL,
    onChange: e => handleCustomURL(e)
  }), !isValidUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "validation-warning"
  }, "**Warning : Your URL is not in a valid format**")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Redirection Message", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Reidrectional message for custom URL"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Animation to show up your form"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
    selected: formPosition,
    options: [{
      label: "Default",
      value: "default"
    }, {
      label: "Pop Up",
      value: "popup"
    }, {
      label: "Fly Ins",
      value: "flyins"
    }, {
      label: "Fixed on top",
      value: "fixed-on-top"
    }, {
      label: "Fixed on bottom",
      value: "fixed-on-bottom"
    }],
    onChange: state => setFormPosition(state)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Close Button Color",
    className: "form-layout-settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Close Icon", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Choose a color for the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null), " icon for form"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
    color: closeButtonColor,
    onChange: setCloseButtonColor,
    enableAlpha: true,
    defaultValue: closeButtonColor
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
    color: closeButtonColor,
    onChange: setCloseButtonColor,
    enableAlpha: true,
    defaultValue: closeButtonColor
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "settings-label"
  }, "Background", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mintmrm-tooltip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Choose a color for the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_CrossIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null), " icon Background"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
    color: closeBackgroundColor,
    onChange: setCloseBackgroundColor,
    enableAlpha: true,
    defaultValue: closeBackgroundColor
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
    color: closeBackgroundColor,
    onChange: setCloseBackgroundColor,
    enableAlpha: true,
    defaultValue: closeBackgroundColor
  }))))), "default" !== formPosition && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icons_QuestionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Type of animation to show your form"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: formAnimation,
    options: [{
      label: "None",
      value: "none"
    }, {
      label: "Fade In",
      value: "fade-in"
    }, {
      label: "Slide In Up",
      value: "slide-in-up"
    }],
    onChange: state => setFormAnimation(state)
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorSlot, {
    bubblesVirtually: true
  }))));
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

/***/ "./src/components/components/assets/css/buttonGroup.scss":
/*!***************************************************************!*\
  !*** ./src/components/components/assets/css/buttonGroup.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/components/assets/css/range.scss":
/*!*********************************************************!*\
  !*** ./src/components/components/assets/css/range.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/components/assets/css/toggle.scss":
/*!**********************************************************!*\
  !*** ./src/components/components/assets/css/toggle.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/components/assets/css/typography.scss":
/*!**************************************************************!*\
  !*** ./src/components/components/assets/css/typography.scss ***!
  \**************************************************************/
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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
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
    // supports: {
    //   align: ["left", "right", "center"],
    // },
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
}();
/******/ })()
;
//# sourceMappingURL=index.js.map