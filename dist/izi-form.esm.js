import { ValidationObserver } from 'vee-validate';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm.js';

//
var script = {
  name: 'izi-form',
  components: {
    ValidationObserver
  },
  props: {
    loading: Boolean
  },
  methods: {
    submit() {
      this.$emit('submit');
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ValidationObserver', {
    ref: "form",
    attrs: {
      "tag": "form"
    },
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.submit($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (ref) {
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

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-65c8704c_0", {
    source: ".izi-form--submit[data-v-65c8704c]:disabled{opacity:.5;pointer-events:none}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-65c8704c";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

//
var script$1 = {
  name: 'izi-input',
  components: {
    ValidationProvider
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
      validator: val => {
        return ["url", "text", "password", "email", "search", "textarea", "number", "file"].indexOf(val) !== -1;
      }
    },
    value: String
  },

  data() {
    return {
      content: null
    };
  },

  mounted() {
    this.content = this.value;
  },

  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },

    setErrors(errors) {
      this.$refs.validationProvider.setErrors(errors);
    },

    getFiles() {
      const fileInput = this.$el.querySelector('input[type="file"]');
      return fileInput ? fileInput.files : null;
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
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
      fn: function (ref) {
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
            "blur": function ($event) {
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
            "blur": function ($event) {
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
            "blur": function ($event) {
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
            "blur": function ($event) {
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
            "blur": function ($event) {
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

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
var script$2 = {
  name: 'izi-select',
  components: {
    ValidationProvider
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

  data() {
    return {
      content: null
    };
  },

  mounted() {
    this.content = this.value;
  },

  methods: {
    updateValue(e) {
      if (this.type == 'toggle') {
        this.$emit("input", this.content);
      } else if (this.type == 'checkbox') {
        this.$emit("input", [...this.content]);
      } else {
        this.$emit("input", e.target.value);
      }
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
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
      fn: function (ref) {
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

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-76d21770_0", {
    source: ".izi-input--switch.with-styles{position:relative;display:inline-block;width:4em;height:2em}.izi-input--switch.with-styles input{opacity:0;width:0;height:0}.izi-input--switch.with-styles input:checked+.izi-input--slider:before{transform:translate(calc(100% + .4em),-50%)}.izi-input--slider.with-styles{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s;border-radius:1em}.izi-input--slider.with-styles:before{position:absolute;content:\"\";height:1.5em;width:1.5em;left:.3em;top:50%;transform:translateY(-50%);background-color:#fff;transition:.4s;border-radius:50%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IziForm: __vue_component__,
  IziInput: __vue_component__$1,
  IziSelect: __vue_component__$2
});

// Import vue components

const install = function installIziForm(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__ as IziForm, __vue_component__$1 as IziInput, __vue_component__$2 as IziSelect };
