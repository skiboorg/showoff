<template>
  <div class="user-profile-tab">
    <div class="user-profile-block">
      <div v-if="this.$auth.user.own_friend_list[0].friend_list.length > 0" class="user-profile-friends-wrapper">
        <FriendCard v-for="friend in this.$auth.user.own_friend_list[0].friend_list"
                    :key="friend.id"
                    :nickname="friend.nickname"
                    :avatar="friend.avatar"
                    :fio="friend.fio"/>
      </div>
      <p v-else>Вы не добавили не одного друга</p>
    </div>

  </div>
</template>

<script>
  export default {
    layout: 'streamer_lk',
    scrollToTop: false,
    auth: true,
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


