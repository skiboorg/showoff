<template>
     <div @click="$router.push(`/profile/${nickname}`)" class="slide" >
              <img :src="avatar" alt="">
              <p class="slide-badge badge-name">{{fio}}</p>
              <p class="slide-badge badge-link">{{nickname}}</p>
            </div>

</template>
<script>
  export default {
    props:['nickname','avatar','fio'],

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


