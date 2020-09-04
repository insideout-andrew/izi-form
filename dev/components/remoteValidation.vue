<template>
  <izi-form @submit="submit" :loading="loading">
    <template slot="body">
      <h2>Remote Validation</h2>
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