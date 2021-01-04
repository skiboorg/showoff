<template>
  <div class="main-wrapper">
    <Header/>
    <ProfileBg :is_own_profile="false"/>
    <section class="user-profile-content">
      <div class="container">
        <div class="user-profile-wrapper" :class="{'hideRight':!this.$auth.loggedIn}">
          <div v-if="this.$auth.loggedIn" class="user-profile-right">
             <UserMenu :is_streamer_menu="this.$auth.user.is_streamer"
                      :class="'user-profile-menu side-menu'"
                      :show_home_link="false"
                      :show_top="true"/>
          </div>
          <div class="user-profile-left">
            <UserAbout :avatar="this.$store.getters['girl_profile/getUser'].avatar"
                       :is_own_profile="false"
                       :level="this.$store.getters['girl_profile/getUser'].level"
                       :fio="this.$store.getters['girl_profile/getUser'].fio"
                       :nickname="this.$store.getters['girl_profile/getUser'].nickname"
                       :balance="this.$store.getters['girl_profile/getUser'].balance"
                       :is_streamer="this.$store.getters['girl_profile/getUser'].is_streamer"/>

             <ProfileMenu/>



            <Nuxt />
          </div>
        </div>
      </div>
    </section>


  </div>

</template>

<script>
  import Header from '@/components/header';
  import Footer from '@/components/footer';
  import UserMenu from '@/components/UserMenu';
  import ProfileMenu from '@/components/ProfileMenu';
  import ProfileBg from '@/components/userLk/ProfileBg';
  export default {
    transition: "default",
    head: {
    title: `个人资料`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },

    data(){
      return{

      }
    },
    components:{
      Header,
      Footer,
      UserMenu,
      ProfileMenu,
      ProfileBg
    },





  }
</script>

<style>
  .page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
