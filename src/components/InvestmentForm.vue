<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"> {{ fund.name }} Investment </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <p>Current Net Asset Value (NAV): ${{ fund.NAV }} per unit</p>
          <label>Amount: $ </label>
          <input type="number" v-model="amount" />
          <div></div>
          <label>Units: </label>
          <input type="number" v-model="units" />
        </slot>
      </section>

      <footer class="modal-footer">
        <button type="button" class="btn-ok" @click="invest()">Invest</button>
        <button type="button" class="btn-cancel" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import myfunds from './api/funds.json';
import myusers from './api/users.json';

export default {
  data() {
    return {
      amount: 0,
      units: 0,
      userId: myusers.find((item) => item.id == 12345),
      user: [],
      fund: myfunds.find((item) => item.id == this.$route.params.id),
    };
  },
  computed: {
    result: function () {
      return (
        parseInt(this.amount) + parseInt(this.units * this.userId.totalNoInvest)
      );
    },
  },
  methods: {
    addUser: (user) => {
      this.users.push(user);
    },
    deleteUserByToken: (token) => {
      var user = this.findByToken(token);
      if (user != 'undefined') {
        this.users.$remove(user);
      } else {
        //
      }
    },
    findByToken: (token) => {
      this.users.find((usr) => {
        return usr.token === token;
      });
    },
    invest() {
      this.user.push({
        id: this.userId.id,
        name: this.userId.name,
        totalNoInvest: this.result,
      });
      console.log(this.userId);
      console.log(this.result);
      this.created();
    },
    created() {
      const data = JSON.stringify(this.user);
      window.localStorage.setItem('user', data);
      console.log(JSON.parse(window.localStorage.getItem('user')));
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>
