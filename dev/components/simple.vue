<template>
  <izi-form @submit="submit">
    <template slot="body">
      <h2>Simple Example</h2>
      <izi-input
        rules="required"
        label="First Name*"
        placeholder="Jane"
        name="first name"
        v-model="firstName"
        description="Please enter your first name"
      />
      <izi-input
        rules="required"
        label="Last Name*"
        placeholder="Doe"
        name="last name"
        v-model="lastName"
        description="Please enter your last name"
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
      firstName: null,
      lastName: null
    };
  },
  methods: {
    submit() {
      alert(`${this.firstName} ${this.lastName}`);
    }
  }
};
</script>