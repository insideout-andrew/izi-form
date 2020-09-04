<template>
  <izi-form @submit="submit">
    <template slot="body">
      <h2>Choice Example</h2>
      <izi-select
        rules="required"
        label="Favorite Movie*"
        name="favorite movie"
        v-model="favoriteMovie"
        :choices="[ { label: 'Please select a movie', value: null, disabled: true }, { label: 'Chappie', value: 'chappie' }, { label: 'Jurrasic Park', value: 'jurasic-park' }, { label: 'Mrs. Doubtfire', value: 'mrs-doubtfire', disabled: true } ]"
        description="Please select your favorite movie from the list."
      />
      <izi-select
        type="checkbox"
        rules="required|length:2"
        label="Toppings*"
        name="toppings"
        v-model="pizzaToppings"
        :choices="[ { label: 'Pepperoni', value: 'pepperoni' }, { label: 'Banana Peppers', value: 'banana-peppers' }, { label: 'Onions', value: 'onions' },  { label: 'Kale', value: 'kale', disabled: true } ]"
        description="Select 2 toppings for your pizza."
      />
      <izi-select
        type="radio"
        rules="required"
        label="Favorite Meal*"
        name="favorite meal"
        v-model="favoriteMeal"
        :choices="[ { label: 'Breakfast', value: 'breakfast' }, { label: 'Lunch', value: 'lunch' }, { label: 'Dinner', value: 'dinner' } ]"
        description="Please select your favorite meal of the day."
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
      favoriteMovie: null,
      pizzaToppings: [],
      favoriteMeal: null
    };
  },
  methods: {
    submit() {
      console.log(this.favoriteMovie, this.pizzaToppings, this.favoriteMeal);
    }
  }
};
</script>