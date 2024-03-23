<template>
  <div>
    <h2>Fund List</h2>
    <div v-for="fund in funds" :key="fund.id">
      <router-link :to="{ name: 'FundDetails', params: { id: fund.id } }">
        <h3>{{ fund.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
import myfunds from './components/api/funds.json';

export default {
  data() {
    return {
      funds: myfunds, // Fund data will be fetched from API
    };
  },
};
</script>
