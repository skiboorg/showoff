<template>
       <div  class="user-profile-tab">
              <div class="user-profile-block">

                <h3 class="user-profile-block__title">简要信息</h3>
                <div class="user-profile-block__info-grid">
                  <p>已加入</p>
                  <p>{{ new Date(this.$store.getters['girl_profile/getUser'].date_joined).getFullYear()}}年
                    {{ new Date(this.$store.getters['girl_profile/getUser'].date_joined).getMonth()}}月
                    {{ new Date(this.$store.getters['girl_profile/getUser'].date_joined).getDay()}}</p>
                </div>
                <div class="user-profile-block__info-grid">
                  <p>市</p>
                  <p>{{this.$store.getters['girl_profile/getUser'].city}}</p>
                </div>
                <div class="user-profile-block__info-grid">
                  <p>国家</p>
                  <p>俄罗斯联邦</p>
                </div>
                <div v-if="this.$store.getters['girl_profile/getUser'].birthday" class="user-profile-block__info-grid">
                  <p>年龄</p>
                  <p>{{this.$store.getters['girl_profile/getUser'].years}}</p>
                </div>
                <p v-if="this.$store.getters['girl_profile/getUser'].about" class="user-profile-block__text">{{this.$store.getters['girl_profile/getUser'].about}}</p>

              </div>
              <div v-if="this.$store.getters['girl_profile/getUser'].interests || this.$store.getters['girl_profile/getUser'].interests_additional" class="user-profile-block">

                <h3 class="user-profile-block__title">我的兴趣</h3>
                <p v-if="this.$store.getters['girl_profile/getUser'].interests" class="user-profile-block__text">{{this.$store.getters['girl_profile/getUser'].interests}}</p>
                <p v-if="this.$store.getters['girl_profile/getUser'].interests_additional" class="user-profile-block__text">{{this.$store.getters['girl_profile/getUser'].interests_additional}}</p>
              </div>
            </div>
</template>

<script>
  export default {
    layout: 'girl_profile',
    scrollToTop: false,
    auth: false,
    async fetch({store,params}){
      await store.dispatch('girl_profile/fetchGirl',params.nickname)
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


