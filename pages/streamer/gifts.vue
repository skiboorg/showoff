<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Подарки</h3>
      <div class="gift-table-item" v-for="gift in user_gifts" :key="gift.id">
        <p class="gift-table-item__date">{{gift.created_at}}</p>
        <div class="gift-table-item__user">
          <img :src="gift.from_user.avatar" alt="">
          <div class="gift-table-item__user--name">
            <p>{{gift.from_user.fio}}</p>
            <p>@{{gift.from_user.nickname}}</p>
          </div>
        </div>
        <div class="gift-table-item__img">
          <img :src="gift.gift.image" alt="">
        </div>

        <div class="gift-table-item__price">
          <img src="/diamond.svg" alt="">
          <p>{{gift.gift.price}}</p>
        </div>
        <div class="gift-table-item__btn">
          <p>+</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'streamer_lk',
    scrollToTop: false,
    auth: true,
    async asyncData({$axios,$auth}){
      try{
        const user_gift = await $axios.get(`/api/v1/gift/get_user_gifts?nickname=${$auth.user.nickname}`)
        const user_gifts = user_gift.data
        return {user_gifts}
      }catch (e) {
        const err = 404
        return {err}
      }
    },
    data() {
      return {
      };
    },
    watch: {
    },
    mounted() {
    },
    methods: {
    }
  }
</script>


