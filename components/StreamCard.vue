<template>
        <div @click="$router.push(`/stream/${url}`)" class="slide-stream" :class="{'slide-stream-vip':is_vip}"
             :style="'background: url(' + stream_img + ') no-repeat center'">
              <p class="slide-stream__name">{{name}}</p>
              <div class="slide-stream__link">
                <img :src="avatar" alt="">
                <p class="">{{nickname}}</p>
              </div>
            </div>

</template>
<script>
  export default {
    props:['name','avatar','stream_img','nickname','is_vip','url'],

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


