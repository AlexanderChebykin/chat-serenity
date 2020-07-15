exports.ids = [1];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("635356f4", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMessageForm_vue_vue_type_style_index_0_id_3e2af3e9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMessageForm_vue_vue_type_style_index_0_id_3e2af3e9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMessageForm_vue_vue_type_style_index_0_id_3e2af3e9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMessageForm_vue_vue_type_style_index_0_id_3e2af3e9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMessageForm_vue_vue_type_style_index_0_id_3e2af3e9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMessageForm_vue_vue_type_style_index_0_id_3e2af3e9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#textarea[data-v-3e2af3e9]{margin-top:50px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=d33589b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<main>","</main>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('SendMessageForm'),_vm._ssrNode(" "),_c('nuxt')],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=d33589b8&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/SendMessageForm.vue?vue&type=template&id=3e2af3e9&scoped=true&
var SendMessageFormvue_type_template_id_3e2af3e9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}}},[_c('div',[_c('b-form-textarea',{attrs:{"id":"textarea","placeholder":"Enter your message...","rows":"3","max-rows":"6"},model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v},expression:"message"}})],1),_vm._v(" "),_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("Submit")]),_vm._v(" "),_c('b-button',{attrs:{"variant":"danger"},on:{"click":_vm.logout}},[_vm._v("Logout")])],1),_vm._ssrNode(" "),_vm._l((_vm.messages),function(message,index){return _vm._ssrNode("<div data-v-3e2af3e9>","</div>",[_c('b-card',{staticClass:"mt-3",attrs:{"header":message.t +'   ' + message.login + ' send:'}},[_c('pre',{staticClass:"m-0"},[_vm._v(_vm._s(message.text))])])],1)})],2)}
var SendMessageFormvue_type_template_id_3e2af3e9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/SendMessageForm.vue?vue&type=template&id=3e2af3e9&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SendMessageForm.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SendMessageFormvue_type_script_lang_js_ = ({
  data() {
    return {
      message: '',
      messages: [],
      loading: false
    };
  },

  async mounted() {
    this.loading = true;
    setInterval(async () => {
      this.messages = await request('http://localhost:3004/messages', 'GET');
    }, 100);
    console.log(this.messages);
    this.loading = false;
  },

  computed: { ...Object(external_vuex_["mapState"])(['login'])
  },
  methods: {
    async onSubmit(evt) {
      const now = new Date();
      const month = +now.getMonth() + 1;
      const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ' ' + now.getDate() + '.' + month + '.' + now.getFullYear();
      console.log('объект', time);
      this.messages.push({
        text: this.message,
        login: this.login,
        t: time
      });
      console.log('messages', this.messages);
      await request('http://localhost:3004/messages', 'POST', {
        text: this.message,
        login: this.login,
        t: time
      });
      this.message = '';
    },

    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }

  }
});

async function request(url, method = 'GET', data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify({
        "text": data.text,
        "login": data.login,
        "t": data.t
      });
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    });
    return await response.json();
  } catch (e) {
    console.warn('Error:', e.message);
  }
}
// CONCATENATED MODULE: ./components/SendMessageForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SendMessageFormvue_type_script_lang_js_ = (SendMessageFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SendMessageForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SendMessageFormvue_type_script_lang_js_,
  SendMessageFormvue_type_template_id_3e2af3e9_scoped_true_render,
  SendMessageFormvue_type_template_id_3e2af3e9_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3e2af3e9",
  "3cf957ae"
  
)

/* harmony default export */ var SendMessageForm = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    SendMessageForm: SendMessageForm
  },
  middleware: ['auth']
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "615a1e9e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map