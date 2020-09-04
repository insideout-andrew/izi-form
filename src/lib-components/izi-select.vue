<template lang="pug">
  ValidationProvider.izi-input(:rules="rules" v-slot="{ errors, ariaMsg, ariaInput }" :name="name")

    template(v-if="type == 'toggle'")
      label.izi-input--label {{ label }}
      label.izi-input--switch(:class="{ 'with-styles' : !removeStyles }")
        input(type="checkbox" v-model="content" :value="true" :name="name" @change="updateValue" v-bind="ariaInput" :disabled="disabled")
        .izi-input--slider(:class="{ 'with-styles' : !removeStyles }" :style=" content ? 'background-color:' + (color ? color : '#12cc48') : ''")

    template(v-else-if="type == 'radio'")
      label.izi-input--label(v-if="label" :for="name") {{ label }}
      .izi-input--radios
        label.izi-input--radio--container(v-for="choice in choices")
          input.izi-input--radio--input(v-model="content" :value="choice.value" type="radio" :name="name" @input="updateValue" @change="updateValue" v-bind="ariaInput" :disabled="choice.disabled")
          span.izi-input--radio--label {{ choice.label }}

    template(v-else-if="type == 'checkbox'")
      label.izi-input--label(v-if="label" :for="name") {{ label }}
      .izi-input--checkboxes
        label.izi-input--checkbox--container(v-for="choice in choices")
          input.izi-input--checkbox--input(v-model="content" :value="choice.value" type="checkbox" :name="name" @input="updateValue" @change="updateValue" v-bind="ariaInput" :disabled="choice.disabled")
          span.izi-input--checkbox--label {{ choice.label }}

    template(v-else)
      label.izi-input--label(v-if="label" :for="name") {{ label }}
      select(v-model="content" :name="name" @change="updateValue" v-bind="ariaInput" :disabled="disabled")
        option(v-for="choice in choices" :value="choice.value" :disabled="choice.disabled") {{ choice.label }}   

    .izi-input--error(v-bind="ariaMsg" v-if="errors.length") {{ errors[0] }}
    .izi-input--description(v-if="description") {{ description }}
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm.js'

export default {
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
    rules: [ String, Object ],
    description: String,
    value: undefined,
    //these are just for the toggle
    removeStyles: Boolean,
    color: String
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
      if(this.type == 'toggle'){
        this.$emit("input", this.content)
      } else if(this.type == 'checkbox'){
        this.$emit("input", [...this.content])
      } else {
        this.$emit("input", e.target.value)
      }
    }
  }
};
</script>
<style lang="sass">
  .izi-input
    &--switch.with-styles
      position: relative
      display: inline-block
      width: 4em
      height: 2em
      input
        opacity: 0
        width: 0
        height: 0
        &:checked + .izi-input--slider:before
            transform: translate(calc(100% + 0.4em), -50%)
    &--slider.with-styles
      position: absolute
      cursor: pointer
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: #ccc
      transition: .4s
      border-radius: 1em
      &:before
        position: absolute
        content: ""
        height: 1.5em
        width: 1.5em
        left: 0.3em
        top: 50%
        transform: translateY(-50%)
        background-color: white
        transition: .4s
        border-radius: 50%

</style>