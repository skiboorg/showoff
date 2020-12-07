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
    data(){
      return {
        streams:[
          {
          id:1,
          name:'name1',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534484107755570/4.png',
          nickname:'nick1',
          is_vip:true
        },
        {
          id:2,
          name:'name22',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534485839478845/66.png',
          nickname:'nick23',
          is_vip:false
        },
          {
          id:3,
          name:'name2',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534487030923274/71.png',
          nickname:'nick233',
          is_vip:true
        },
           {
          id:4,
          name:'name2',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534587518451772/51.png',
          nickname:'nick22',
          is_vip:true
        },
          {
          id:5,
          name:'name1',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534484107755570/4.png',
          nickname:'nick1',
          is_vip:true
        },
        {
          id:6,
          name:'name22',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534485839478845/66.png',
          nickname:'nick23',
          is_vip:false
        },
          {
          id:7,
          name:'name2',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534487030923274/71.png',
          nickname:'nick233',
          is_vip:true
        },
           {
          id:8,
          name:'name2',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534587518451772/51.png',
          nickname:'nick22',
          is_vip:true
        },

        ]


      }
    },
    methods:{


    }
  };
</script>
