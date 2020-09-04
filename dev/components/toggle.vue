<template>
  <izi-form @submit="submit">
    <template slot="body">
      <h2>Toggle</h2>
      <izi-select
        type="toggle"
        label="Enable something?"
        name="enabled"
        v-model="enabled"
      />
      <izi-select
        type="toggle"
        label="Enable something else?"
        name="enabled 2"
        v-model="enabled2"
        style="font-size:0.75em"
        color="#3499cd"
        description="You can change the size of the toggle with the font-size property."
      />
    </template>
  </izi-form>
</template>
<script>
import { IziForm, IziSelect } from "@/entry";

export default {
  components: {
    IziForm,
    IziSelect
  },
  data() {
    return {
      enabled: true,
      enabled2: false,
    };
  },
  methods: {
    submit() {
      alert(`${this.enabled} ${this.enabled2}`);
    }
  }
};
</script>