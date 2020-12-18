<template>
  <section class="girls-page">
    <div class="container">
       <div class="page-top">
        <h3>相册</h3>
        <p @click="$router.push('/')"><svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-2.18557e-07 5L7.5 0.669872L7.5 9.33013L-2.18557e-07 5Z" fill="#23D2E2"/>
        </svg>
            返回专辑
        </p>
      </div>
      <div class="user-profile-friends-wrapper">
        <FriendCard v-for="streamer in streamers"
                  :key="streamer.id"
                  :nickname="streamer.nickname"
                  :avatar="streamer.avatar"
                  :fio="streamer.fio"/>
      </div>


    </div>
  </section>
</template>
<script>
  import FriendCard from '@/components/FriendCard'

  export default {
    components: {
      FriendCard

    },
    auth: false,
    async asyncData({$axios,params}){
      console.log(params)
     try{
        const get_streamers = await $axios.get(`/api/v1/user/get_streamers?at_home=false`)
        const streamers = get_streamers.data
        return {streamers}
     }catch (e) {
        const err = 404
        return {err}

     }

    },
    data(){
      return {


      }
    },

  }
</script>


