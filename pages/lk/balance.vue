<template>
  <div class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">个怎么运作</h3>
      <div style="display: grid;grid-template-columns: 1fr 1fr;grid-gap: 20px">
        <img style="cursor: pointer" @click="balanceAddAmount=150,balanceDialogVisible=true" src="/card1.png" alt="">
        <img style="cursor: pointer" @click="balanceAddAmount=300,balanceDialogVisible=true" src="/card2.png" alt="">
        <img style="cursor: pointer" @click="balanceAddAmount=750,balanceDialogVisible=true" src="/card3.png" alt="">
        <img style="cursor: pointer" @click="balanceAddAmount=1500,balanceDialogVisible=true" src="/card4.png" alt="">
      </div>

    </div>
    <el-dialog
      :title="'Пополнение баланса на '+ balanceAddAmount"
      :visible.sync="balanceDialogVisible"
      width="30%" >
      <div class="text-center">
        <img src="/qr.png" alt="">
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Отмена</el-button>
    <el-button type="primary" @click="addToBalance">Пополнить</el-button>
  </span>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    layout: 'user_lk',
    scrollToTop: false,
    auth: true,
    data() {
      return {
        balanceAddAmount:0,
        balanceDialogVisible:false,
      };
    },
    watch: {
    },
    mounted() {
    },
    methods: {
      async addToBalance(){
        await this.$axios.post(`/api/v1/user/add_to_balance`,{amount:this.balanceAddAmount})
        this.balanceDialogVisible = false
        this.$auth.fetchUser()
      },
    }
  }
</script>


