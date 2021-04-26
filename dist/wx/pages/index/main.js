require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mpvue_router_patch__ = __webpack_require__(21);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_mpvue_router_patch__["a" /* default */]);
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(20);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eca2e54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eca2e54", Component.options)
  } else {
    hotAPI.reload("data-v-5eca2e54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_imageView_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_SearchBar_vue__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { SearchBar: __WEBPACK_IMPORTED_MODULE_1__components_home_SearchBar_vue__["a" /* default */], ImageView: __WEBPACK_IMPORTED_MODULE_0__components_base_imageView_vue__["a" /* default */] },
  methods: {
    onSearchBarClick: function onSearchBarClick() {
      //跳转搜索页
    }
  }

});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_imageView_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08b379c7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_imageView_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08b379c7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_imageView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08b379c7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_imageView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/base/imageView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] imageView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08b379c7", Component.options)
  } else {
    hotAPI.reload("data-v-08b379c7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        src: {
            type: String,
            default: ''
        },
        mode: {
            type: String,
            default: 'widthFix'
        },
        lazyLoad: {
            type: Boolean,
            default: true
        },
        round: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: 'auto'
        }
    },
    watch: function watch(newValue, preValue) {},
    data: function data() {
        return {
            isLoading: true,
            error: false
        };
    },

    methods: {
        onClick: function onClick() {
            this.$emit('onClick');
        },
        onLoad: function onLoad() {
            this.isLoading = false;
            this.error = false;
        },
        onError: function onError() {
            this.error = true;
            this.isLoading = false;
        }
    }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "image-view"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isLoading && !_vm.error),
      expression: "!isLoading && !error"
    }],
    class: _vm.round ? 'round image' : 'image',
    style: ({
      height: _vm.height
    }),
    attrs: {
      "src": _vm.src,
      "mode": _vm.mode,
      "lazy-load": _vm.lazyLoad,
      "eventid": '0'
    },
    on: {
      "load": _vm.onLoad,
      "error": _vm.onError
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLoading || _vm.error),
      expression: "isLoading || error"
    }],
    class: _vm.round ? 'round image' : 'image',
    style: ({
      height: _vm.height
    }),
    attrs: {
      "src": "https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg",
      "mode": _vm.mode,
      "lazy-load": _vm.lazyLoad
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08b379c7", esExports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_SearchBar_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d5157740_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_SearchBar_vue__ = __webpack_require__(19);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d5157740"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_SearchBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d5157740_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_SearchBar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/home/SearchBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5157740", Component.options)
  } else {
    hotAPI.reload("data-v-d5157740", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        focus: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
            default: 50
        },
        hotSearch: {
            type: String,
            default: ''
        }

    },
    data: function data() {
        return {
            searchWord: ''
        };
    },

    methods: {
        onSearchBarClick: function onSearchBarClick() {
            this.$emit('onClick');
        },
        onClearClick: function onClearClick() {
            this.searchWord = '';
            this.$emit('onClear');
        },
        onChange: function onChange(e) {
            var value = e.mp.detail.value;

            this.$emit('onChange', value);
        },
        onConfirm: function onConfirm(e) {
            var value = e.mp.detail.value;

            this.$emit('onComfirm', value);
        },
        setValue: function setValue(v) {
            this.searchWord = v;
        },
        getValue: function getValue() {
            return this.searchWord;
        }
    }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-bar"
  }, [_c('div', {
    staticClass: "search-bar-wrapper",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.onSearchBarClick
    }
  }, [_c('van-icon', {
    staticClass: "search",
    attrs: {
      "name": "search",
      "size": "16px",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchWord),
      expression: "searchWord"
    }],
    staticClass: "search-bar-input",
    attrs: {
      "focus": _vm.focus,
      "disabled": _vm.disabled,
      "maxlength": _vm.limit,
      "placeholder": _vm.hotSearch.length === 0 ? '搜索' : _vm.hotSearch,
      "confirm-type": "search",
      "placeholder-style": "color: #ADB4BE;font-size: 15px",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.searchWord)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchWord = $event.target.value
      }, _vm.onChange],
      "confirm": _vm.onConfirm
    }
  }), _vm._v(" "), (_vm.searchWord.length > 0) ? _c('van-icon', {
    staticClass: "clear",
    attrs: {
      "name": "clear",
      "size": "16px",
      "color": "#ccc",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.onClearClick
    }
  }) : _vm._e()], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d5157740", esExports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('search-bar', {
    attrs: {
      "disabled": false,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.onSearchBarClick
    }
  }), _vm._v(" "), _c('image-view', {
    attrs: {
      "src": "https://www.youbaobao.xyz/mpvue-res/big.jpg",
      "height": "200px",
      "mode": "scaleToFill",
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5eca2e54", esExports)
  }
}

/***/ })
],[8]);