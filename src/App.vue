<template>
  <div id="app">
    <Title />
    <Plans />
  </div>
</template>

<script lang="ts">
import Title from "./components/Title.vue";
import Plans from "./components/Plans.vue";

export default {
  name: "App",
  components: {
    Title,
    Plans,
  },
};
</script>

<style>
/* Any global styles you want to apply */
</style>
