<template lang="pug">
  ValidationProvider.izi-input(:rules="rules" v-slot="{ errors, ariaMsg, ariaInput, validate }" ref="validationProvider" :name="name")
    label.izi-input--label(v-if="label" :for="name") {{ label }}

    textarea.izi-input--input(v-if="type == 'textarea'" v-model="content" :type="type" @input="updateValue" @change="updateValue" @blur="$emit('blur')" v-bind="ariaInput" rows="4" :name="name" :placeholder="placeholder" :id="name" :disabled="disabled")

    input.izi-input--input(v-else-if="type == 'file'" type="file" @change="validate" @blur="$emit('blur')" v-bind="ariaInput" :name="name" :placeholder="placeholder" :id="name" :disabled="disabled")

    input.izi-input--input(v-else v-model="content" :type="type" @input="updateValue" @change="updateValue" @blur="$emit('blur')" v-bind="ariaInput" :name="name" :placeholder="placeholder" :id="name" :disabled="disabled")

    span.izi-input--error(v-bind="ariaMsg" v-if="errors.length") {{ errors[0] }}
    span.izi-input--description(v-if="description") {{ description }}
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm.js'

export default {
  name: 'izi-input',
  components: {
    ValidationProvider
  },
  props: {
    label: String,
    rules: [ String, Object ],
    name: String,
    placeholder: String,
    description: String,
    disabled: Boolean,
    type: {
      type: String,
      default: "text",
      validator: val => {
        return (
          ["url", "text", "password", "email", "search", "textarea", "number", "file"].indexOf(val) !== -1
        );
      }
    },
    value: String
  },
  data(){
    return {
      content: null
    }
  },
  mounted(){
    this.content = this.value
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value)
    },
    setErrors(errors){
      this.$refs.validationProvider.setErrors(errors)
    },
    getFiles(){
      const fileInput = this.$el.querySelector('input[type="file"]')
      return fileInput ? fileInput.files : null
    }
  }
};
</script>