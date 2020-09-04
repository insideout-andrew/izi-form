<template>
  <izi-form @submit="submit">
    <template slot="body">
      <h2>Password Confirmation</h2>
      <izi-input
        type="password"
        rules="required|min:6"
        label="Password*"
        placeholder="Password"
        name="password"
        v-model="password"
        description="Your password must be at least 6 characters"
      />
      <izi-input
        type="password"
        rules="required|confirmed:password"
        label="Confirm Password*"
        placeholder="Confirm Password"
        name="confirm password"
        v-model="passwordConfirmation"
        description="Please reenter your password"
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
      password: null,
      passwordConfirmation: null
    };
  },
  methods: {
    submit() {
      alert(`Passwords match!`);
    }
  }
};
</script>