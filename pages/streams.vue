<template>
  <section class="streams-page">
    <div class="container">
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
    data(){
      return {
        streams:[
          {
          id:1,
          name:'name1',
          avatar:'http://placehold.it/300',
          stream_img:'http://placehold.it/300',
          nickname:'nick1',
          is_vip:true
        },
        {
          id:2,
          name:'name2',
          avatar:'http://placehold.it/300',
          stream_img:'http://placehold.it/300',
          nickname:'nick2',
          is_vip:false
        }]


      }
    },
    methods:{


    }
  };
</script>
