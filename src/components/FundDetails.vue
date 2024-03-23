<template>
  <div v-if="fund">
    <h2>Fund Detail</h2>
    <h3>{{ fund.name }}</h3>
    <p>{{ fund.description }}</p>
    <p>Type: {{ fund.type }}</p>
    <p>Performance History: {{ fund.history }}</p>
    <p>Current Net Asset Value (NAV): ${{ fund.NAV }} per unit</p>
    <button @click="showModal(fund.id)">Invest</button>
    <InvestmentForm v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import myfunds from './api/funds.json';
import InvestmentForm from './InvestmentForm.vue';

export default {
  components: {
    InvestmentForm,
  },
  data() {
    return {
      isModalVisible: false,
      id: this.$route.params.id,
      fund: myfunds.find((item) => item.id == this.$route.params.id), // Fund data will be fetched from API
    };
  },
  methods: {
    showModal(fundId) {
      this.selectedId = fundId;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
