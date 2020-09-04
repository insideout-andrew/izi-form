<template>
  <izi-form @submit="submit" :loading="loading">
    <div slot="loading">Customizable loader displays and button disables while loading...</div>
    <template slot="body">
      <h2>File Validation</h2>
      <izi-input
        type="file"
        ref="fileInput"
        rules="required|mimes:image/*"
        label="File Upload*"
        name="image"
        description="Please upload an image"
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
      console.log(this.$refs.fileInput.getFiles());
    }
  }
};
</script>