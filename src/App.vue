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
  <div class="row" id="app">
    <div class="sidebar">
      <FundList />
    </div>

    <div class="main">
      <Portfolio />
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<style>
button {
  font-weight: bold;
}
</style>
