<template>
  <div v-for="user in users" :key="users.id">
    <h2>Portfolio</h2>
    <h3>{{ user.name }}</h3>
    <p>Total Number Invest: {{ user.totalNoInvest }}</p>
  </div>
</template>

<script>
import myusers from './components/api/users.json';

export default {
  data() {
    return {
      users: myusers, // User data will be fetched from API
    };
  },
};
</script>
