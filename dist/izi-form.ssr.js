'use strict';Object.defineProperty(exports,'__esModule',{value:true});var veeValidate=require('vee-validate'),veeValidate_full_esm_js=require('vee-validate/dist/vee-validate.full.esm.js');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
var script = {
  name: 'izi-form',
  components: {
    ValidationObserver: veeValidate.ValidationObserver
  },
  props: {
    loading: Boolean
  },
  methods: {
    submit: function submit() {
      this.$emit('submit');
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ValidationObserver', {
    ref: "form",
    attrs: {
      "tag": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.submit($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var invalid = ref.invalid;
        return [_vm.loading ? _vm._t("loading", [_c('div', {
          staticClass: "izi-form--loading"
        }, [_vm._v("Loading...")])]) : _vm._e(), _vm._t("body"), _c('div', {
          staticClass: "izi-input"
        }, [_vm._t("submit", [_c('button', {
          staticClass: "izi-form--submit",
          attrs: {
            "disabled": invalid || _vm.loading
          }
        }, [_vm._v("Submit")])], {
          "invalid": invalid
        })], 2)];
      }
    }], null, true)
  });
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-65c8704c_0", {
    source: ".izi-form--submit[data-v-65c8704c]:disabled{opacity:.5;pointer-events:none}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-65c8704c";
/* module identifier */

var __vue_module_identifier__ = "data-v-65c8704c";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);//
var script$1 = {
  name: 'izi-input',
  components: {
    ValidationProvider: veeValidate_full_esm_js.ValidationProvider
  },
  props: {
    label: String,
    rules: [String, Object],
    name: String,
    placeholder: String,
    description: String,
    disabled: Boolean,
    type: {
      type: String,
      default: "text",
      validator: function validator(val) {
        return ["url", "text", "password", "email", "search", "textarea", "number", "file"].indexOf(val) !== -1;
      }
    },
    value: String
  },
  data: function data() {
    return {
      content: null
    };
  },
  mounted: function mounted() {
    this.content = this.value;
  },
  methods: {
    updateValue: function updateValue(e) {
      this.$emit("input", e.target.value);
    },
    setErrors: function setErrors(errors) {
      this.$refs.validationProvider.setErrors(errors);
    },
    getFiles: function getFiles() {
      var fileInput = this.$el.querySelector('input[type="file"]');
      return fileInput ? fileInput.files : null;
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ValidationProvider', {
    ref: "validationProvider",
    staticClass: "izi-input",
    attrs: {
      "rules": _vm.rules,
      "name": _vm.name
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var errors = ref.errors;
        var ariaMsg = ref.ariaMsg;
        var ariaInput = ref.ariaInput;
        var validate = ref.validate;
        return [_vm.label ? _c('label', {
          staticClass: "izi-input--label",
          attrs: {
            "for": _vm.name
          }
        }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm.type == 'textarea' ? _c('textarea', _vm._b({
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.content,
            expression: "content"
          }],
          staticClass: "izi-input--input",
          attrs: {
            "type": _vm.type,
            "rows": "4",
            "name": _vm.name,
            "placeholder": _vm.placeholder,
            "id": _vm.name,
            "disabled": _vm.disabled
          },
          domProps: {
            "value": _vm.content
          },
          on: {
            "input": [function ($event) {
              if ($event.target.composing) {
                return;
              }

              _vm.content = $event.target.value;
            }, _vm.updateValue],
            "change": _vm.updateValue,
            "blur": function blur($event) {
              return _vm.$emit('blur');
            }
          }
        }, 'textarea', ariaInput, false)) : _vm.type == 'file' ? _c('input', _vm._b({
          staticClass: "izi-input--input",
          attrs: {
            "type": "file",
            "name": _vm.name,
            "placeholder": _vm.placeholder,
            "id": _vm.name,
            "disabled": _vm.disabled
          },
          on: {
            "change": validate,
            "blur": function blur($event) {
              return _vm.$emit('blur');
            }
          }
        }, 'input', ariaInput, false)) : _vm.type === 'checkbox' ? _c('input', _vm._b({
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.content,
            expression: "content"
          }],
          staticClass: "izi-input--input",
          attrs: {
            "name": _vm.name,
            "placeholder": _vm.placeholder,
            "id": _vm.name,
            "disabled": _vm.disabled,
            "type": "checkbox"
          },
          domProps: {
            "checked": Array.isArray(_vm.content) ? _vm._i(_vm.content, null) > -1 : _vm.content
          },
          on: {
            "input": _vm.updateValue,
            "change": [function ($event) {
              var $$a = _vm.content,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false;

              if (Array.isArray($$a)) {
                var $$v = null,
                    $$i = _vm._i($$a, $$v);

                if ($$el.checked) {
                  $$i < 0 && (_vm.content = $$a.concat([$$v]));
                } else {
                  $$i > -1 && (_vm.content = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.content = $$c;
              }
            }, _vm.updateValue],
            "blur": function blur($event) {
              return _vm.$emit('blur');
            }
          }
        }, 'input', ariaInput, false)) : _vm.type === 'radio' ? _c('input', _vm._b({
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.content,
            expression: "content"
          }],
          staticClass: "izi-input--input",
          attrs: {
            "name": _vm.name,
            "placeholder": _vm.placeholder,
            "id": _vm.name,
            "disabled": _vm.disabled,
            "type": "radio"
          },
          domProps: {
            "checked": _vm._q(_vm.content, null)
          },
          on: {
            "input": _vm.updateValue,
            "change": [function ($event) {
              _vm.content = null;
            }, _vm.updateValue],
            "blur": function blur($event) {
              return _vm.$emit('blur');
            }
          }
        }, 'input', ariaInput, false)) : _c('input', _vm._b({
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.content,
            expression: "content"
          }],
          staticClass: "izi-input--input",
          attrs: {
            "name": _vm.name,
            "placeholder": _vm.placeholder,
            "id": _vm.name,
            "disabled": _vm.disabled,
            "type": _vm.type
          },
          domProps: {
            "value": _vm.content
          },
          on: {
            "input": [function ($event) {
              if ($event.target.composing) {
                return;
              }

              _vm.content = $event.target.value;
            }, _vm.updateValue],
            "change": _vm.updateValue,
            "blur": function blur($event) {
              return _vm.$emit('blur');
            }
          }
        }, 'input', ariaInput, false)), errors.length ? _c('span', _vm._b({
          staticClass: "izi-input--error"
        }, 'span', ariaMsg, false), [_vm._v(_vm._s(errors[0]))]) : _vm._e(), _vm.description ? _c('span', {
          staticClass: "izi-input--description"
        }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()];
      }
    }])
  });
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-65716359";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);var script$2 = {
  name: 'izi-select',
  components: {
    ValidationProvider: veeValidate_full_esm_js.ValidationProvider
  },
  props: {
    label: String,
    type: String,
    name: String,
    choices: Array,
    disabled: Boolean,
    rules: [String, Object],
    description: String,
    value: undefined,
    //these are just for the toggle
    removeStyles: Boolean,
    color: String
  },
  data: function data() {
    return {
      content: null
    };
  },
  mounted: function mounted() {
    this.content = this.value;
  },
  methods: {
    updateValue: function updateValue(e) {
      if (this.type == 'toggle') {
        this.$emit("input", this.content);
      } else if (this.type == 'checkbox') {
        this.$emit("input", _toConsumableArray(this.content));
      } else {
        this.$emit("input", e.target.value);
      }
    }
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ValidationProvider', {
    staticClass: "izi-input",
    attrs: {
      "rules": _vm.rules,
      "name": _vm.name
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var errors = ref.errors;
        var ariaMsg = ref.ariaMsg;
        var ariaInput = ref.ariaInput;
        return [_vm.type == 'toggle' ? [_c('label', {
          staticClass: "izi-input--label"
        }, [_vm._v(_vm._s(_vm.label))]), _c('label', {
          staticClass: "izi-input--switch",
          class: {
            'with-styles': !_vm.removeStyles
          }
        }, [_c('input', _vm._b({
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.content,
            expression: "content"
          }],
          attrs: {
            "type": "checkbox",
            "name": _vm.name,
            "disabled": _vm.disabled
          },
          domProps: {
            "value": true,
            "checked": Array.isArray(_vm.content) ? _vm._i(_vm.content, true) > -1 : _vm.content
          },
          on: {
            "change": [function ($event) {
              var $$a = _vm.content,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false;

              if (Array.isArray($$a)) {
                var $$v = true,
                    $$i = _vm._i($$a, $$v);

                if ($$el.checked) {
                  $$i < 0 && (_vm.content = $$a.concat([$$v]));
                } else {
                  $$i > -1 && (_vm.content = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.content = $$c;
              }
            }, _vm.updateValue]
          }
        }, 'input', ariaInput, false)), _c('div', {
          staticClass: "izi-input--slider",
          class: {
            'with-styles': !_vm.removeStyles
          },
          style: _vm.content ? 'background-color:' + (_vm.color ? _vm.color : '#12cc48') : ''
        })])] : _vm.type == 'radio' ? [_vm.label ? _c('label', {
          staticClass: "izi-input--label",
          attrs: {
            "for": _vm.name
          }
        }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _c('div', {
          staticClass: "izi-input--radios"
        }, _vm._l(_vm.choices, function (choice) {
          return _c('label', {
            staticClass: "izi-input--radio--container"
          }, [_c('input', _vm._b({
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.content,
              expression: "content"
            }],
            staticClass: "izi-input--radio--input",
            attrs: {
              "type": "radio",
              "name": _vm.name,
              "disabled": choice.disabled
            },
            domProps: {
              "value": choice.value,
              "checked": _vm._q(_vm.content, choice.value)
            },
            on: {
              "input": _vm.updateValue,
              "change": [function ($event) {
                _vm.content = choice.value;
              }, _vm.updateValue]
            }
          }, 'input', ariaInput, false)), _c('span', {
            staticClass: "izi-input--radio--label"
          }, [_vm._v(_vm._s(choice.label))])]);
        }), 0)] : _vm.type == 'checkbox' ? [_vm.label ? _c('label', {
          staticClass: "izi-input--label",
          attrs: {
            "for": _vm.name
          }
        }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _c('div', {
          staticClass: "izi-input--checkboxes"
        }, _vm._l(_vm.choices, function (choice) {
          return _c('label', {
            staticClass: "izi-input--checkbox--container"
          }, [_c('input', _vm._b({
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.content,
              expression: "content"
            }],
            staticClass: "izi-input--checkbox--input",
            attrs: {
              "type": "checkbox",
              "name": _vm.name,
              "disabled": choice.disabled
            },
            domProps: {
              "value": choice.value,
              "checked": Array.isArray(_vm.content) ? _vm._i(_vm.content, choice.value) > -1 : _vm.content
            },
            on: {
              "input": _vm.updateValue,
              "change": [function ($event) {
                var $$a = _vm.content,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false;

                if (Array.isArray($$a)) {
                  var $$v = choice.value,
                      $$i = _vm._i($$a, $$v);

                  if ($$el.checked) {
                    $$i < 0 && (_vm.content = $$a.concat([$$v]));
                  } else {
                    $$i > -1 && (_vm.content = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                  }
                } else {
                  _vm.content = $$c;
                }
              }, _vm.updateValue]
            }
          }, 'input', ariaInput, false)), _c('span', {
            staticClass: "izi-input--checkbox--label"
          }, [_vm._v(_vm._s(choice.label))])]);
        }), 0)] : [_vm.label ? _c('label', {
          staticClass: "izi-input--label",
          attrs: {
            "for": _vm.name
          }
        }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _c('select', _vm._b({
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.content,
            expression: "content"
          }],
          attrs: {
            "name": _vm.name,
            "disabled": _vm.disabled
          },
          on: {
            "change": [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.content = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, _vm.updateValue]
          }
        }, 'select', ariaInput, false), _vm._l(_vm.choices, function (choice) {
          return _c('option', {
            attrs: {
              "disabled": choice.disabled
            },
            domProps: {
              "value": choice.value
            }
          }, [_vm._v(_vm._s(choice.label) + "   ")]);
        }), 0)], errors.length ? _c('div', _vm._b({
          staticClass: "izi-input--error"
        }, 'div', ariaMsg, false), [_vm._v(_vm._s(errors[0]))]) : _vm._e(), _vm.description ? _c('div', {
          staticClass: "izi-input--description"
        }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()];
      }
    }])
  });
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-76d21770_0", {
    source: ".izi-input--switch.with-styles{position:relative;display:inline-block;width:4em;height:2em}.izi-input--switch.with-styles input{opacity:0;width:0;height:0}.izi-input--switch.with-styles input:checked+.izi-input--slider:before{transform:translate(calc(100% + .4em),-50%)}.izi-input--slider.with-styles{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s;border-radius:1em}.izi-input--slider.with-styles:before{position:absolute;content:\"\";height:1.5em;width:1.5em;left:.3em;top:50%;transform:translateY(-50%);background-color:#fff;transition:.4s;border-radius:50%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-76d21770";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,IziForm: __vue_component__,IziInput: __vue_component__$1,IziSelect: __vue_component__$2});var install = function installIziForm(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.IziForm=__vue_component__;exports.IziInput=__vue_component__$1;exports.IziSelect=__vue_component__$2;exports.default=plugin;