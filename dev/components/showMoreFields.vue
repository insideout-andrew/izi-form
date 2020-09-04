<template>
  <izi-form @submit="submit">
    <template slot="body">
      <h2>Show More Fields</h2>
      <izi-select
        type="checkbox"
        label="Do you want to show another field?*"
        name="another field"
        v-model="showMoreFields"
        :choices="[ { label: 'Yes', value: true } ]"
        description="If selected, another field will display."
      />
      <izi-input
        v-if="showMoreFields.length"
        type="textarea"
        rules="required"
        label="Another Field*"
        placeholder="Another Field"
        name="another field"
        v-model="anotherField"
        description="Now this field is required too"
      />
    </template>
  </izi-form>
</template>
<script>
import { IziForm, IziInput, IziSelect } from "@/entry";

export default {
  components: {
    IziForm,
    IziInput,
    IziSelect
  },
  data() {
    return {
      showMoreFields: [],
      anotherField: null
    };
  },
  methods: {
    submit() {
      alert(this.anotherField);
    }
  }
};
</script>