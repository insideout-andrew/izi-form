<template>
  <div>
    <simple/>
    <selectExample/>
    <toggle/>
    <morefields/>
    <remote/>
    <custom/>
    <passwordExample/>
    <fileValidation/>
  </div>
</template>

<script>
import simple from "./components/simple.vue";
import { default as selectExample } from "./components/select.vue";
import { default as morefields } from "./components/showMoreFields.vue";
import { default as custom } from "./components/customizablePieces.vue";
import { default as passwordExample } from "./components/password.vue";
import { default as remote } from "./components/remoteValidation.vue";
import { default as fileValidation } from "./components/fileValidation.vue";
import { default as toggle } from "./components/toggle.vue";

export default {
  components: {
    simple,
    selectExample,
    passwordExample,
    remote,
    fileValidation,
    morefields,
    custom,
    toggle
  }
};
</script>

<style lang="sass">
  $black: #242424
  $gray: #373737
  $white: #cecece
  * 
    box-sizing: border-box
  body
    font-family: Helvetica
    background: $black
    color: $white
    padding: 1em
  form
    background: $gray
    padding: 0.5em 1em 1em 1em
    border-radius: 0.25em
    max-width: 300px
    position: relative
    & + form
      margin-top: 1em
  input[type="text"],
  input[type="number"],
  input[type="email"],
  input[type="url"],
  input[type="password"],
  select,
  textarea,
  button
    appearance: none
    width: 100%
    border: 1px solid
    padding: 0.5em 1em
    border-radius: 0.25em
    color: #cecece
    background: transparent
  button
    transition: 250ms
    cursor: pointer
    width: auto
    &:disabled
      cursor: no-drop
      opacity: .5
    &:hover
      background: $white
      color: $gray
  .izi-input
    display: block
    & + .izi-input
      margin-top: 1em
    &--label,
    &--error,
    &--description,
    &--radio--container,
    &--checkbox--container
      display: block
    &--label
      font-weight: bold
      margin-bottom: 0.5em
    &--error
      background: #cc2332
      margin-top: 0.5em
      padding: 0.5em
    &--description
      font-size: 0.75em
      margin-top: 0.5em
  .izi-form--loading
      position: absolute
      z-index: 99
      background: rgba(200,200,200,0.25)
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      height: 100%
      top: 0
      left: 0
</style>