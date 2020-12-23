<template>
  <section class="streams-page">
    <div class="container">
      <div class="page-top">
        <h3>相册</h3>
        <p @click="$router.push('/')"><svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-2.18557e-07 5L7.5 0.669872L7.5 9.33013L-2.18557e-07 5Z" fill="#23D2E2"/>
        </svg>
            返回专辑
        </p>
      </div>
      <div class="streams-page-wrapper">
         <StreamCard
           v-for="stream in streams"
           :key="stream.id"
           :name="stream.name"
            :avatar="stream.avatar"
            :stream_img="stream.stream_img"
            :nickname="stream.nickname" :is_vip="stream.is_vip"/>
      </div>

    </div>
  </section>
</template>

<script>
 import StreamCard from '@/components/StreamCard'
  export default {
    components: {
      StreamCard
    },
    auth: false,
     async asyncData({$axios,params}){
      console.log(params)
      try{

        const get_streams = await $axios.get(`/api/v1/stream/get_streams_for_home_page`)

        const streams = get_streams.data
        return {streams}
      }catch (e) {
        const err = 404
        return {err}
      }
    },
    data(){
      return {



      }
    },
    methods:{


    }
  };
</script>
