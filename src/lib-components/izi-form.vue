<template lang="pug">
  ValidationObserver(v-slot="{ invalid }" tag="form" @submit.prevent="submit" ref="form")
    slot(name="loading" v-if="loading")
      .izi-form--loading Loading...
    slot(name="body")
    .izi-input
      slot(name="submit" :invalid="invalid")
        button.izi-form--submit(:disabled="invalid || loading") Submit
</template>

<script>
  import { ValidationObserver } from 'vee-validate'

  export default {
    name: 'izi-form',
    components: {
      ValidationObserver
    },
    props: {
      loading: Boolean
    },
    methods: {
      submit(){
        this.$emit('submit')
      }
    }
  }
</script>

<style lang='sass' scoped>
  .izi-form--submit
    &:disabled
      opacity: 0.5
      pointer-events: none

  //-/deep/ .izi-input
    display: block
    &--label
      display: block
      margin-bottom: 0.2em
    &--input
      width: 100%
      disla
    &--error
      color: darkred
      margin-top: 0.2em
    &--radio--container
      display: flex
      align-items: center
      & + .izi-input--radio--container
        margin-top: 0.5em
    &--radio--input
      margin-right: 0.5em
    & + .izi-input
      margin-top: 1em
</style>