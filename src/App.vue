<script>
import { ref } from 'vue';
import Portfolio from './Portfolio.vue';
import FundList from './FundList.vue';

export default {
  name: 'App',
  components: {
    Portfolio,
    FundList,
  },
};
</script>

<template>
  <div id="app">
    <Portfolio />
    <FundList />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
button {
  font-weight: bold;
}
</style>
