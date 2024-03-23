import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import App from './App.vue';
import FundList from './FundList.vue';
import FundDetails from './components/FundDetails.vue';
import InvestmentForm from './components/InvestmentForm.vue';
import Portfolio from './Portfolio.vue';
import './style.css';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/FundList', name: 'FundList', component: FundList },
    { path: '/FundDetails/:id', name: 'FundDetails', component: FundDetails },
    {
      path: '/InvestmentForm/:id',
      name: 'InvestmentForm',
      component: InvestmentForm,
    },
    { path: '/Portfolio', name: 'Portfolio', component: Portfolio },
  ],
});

createApp(App).use(router).mount('#app');
