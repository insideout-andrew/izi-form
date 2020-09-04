<template>
  <izi-form @submit="submit" :loading="loading">
    <div
      slot="loading"
      class="custom-loader"
    >Customizable loading slot (and button disables while loading)</div>
    <template slot="body">
      <h2>Customizable Loader and Submit</h2>
      <izi-input
        ref="emailInput"
        rules="required|email"
        label="Email*"
        placeholder="Email"
        name="email"
        v-model="email"
        description="Please enter your email"
      />
    </template>
    <button
      slot="submit"
      slot-scope="{ invalid }"
      :disabled="loading || invalid"
    >Customizable Submit button</button>
  </izi-form>
</template>
<script>
import { IziForm, IziInput } from "@/entry";

export default {
  components: {
    IziForm,
    IziInput
  },
  data() {
    return {
      email: null,
      loading: false
    };
  },
  methods: {
    submit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$refs.emailInput.setErrors(["That email isn't cool enough"]);
      }, 2000);
    }
  }
};
</script>

<style scoped lang="sass">
  .custom-loader
    position: absolute
    z-index: 99
    background: rgba(244,100,100,0.75)
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    height: 100%
    top: 0
    left: 0
    text-align: center
    padding: 1em
</style>