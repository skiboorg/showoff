<template>
  <div class="user-profile-tab">


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


