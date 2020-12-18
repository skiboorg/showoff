<template>
  <div  class="user-profile-friends-item" >
    <div @click="$router.push(`/profile/${nickname}`)" class="user-profile-friends-item__img">
      <img :src="avatar" alt="">
    </div>
    <div class="user-profile-friends-item__info">
      <p @click="$router.push(`/profile/${nickname}`)" class="user-profile-friends-item__info--name">{{fio}}</p>
      <p class="user-profile-friends-item__info--link mb-20">@{{nickname}}</p>
      <!--                      <p class="user-profile-friends-item__info&#45;&#45;yo">{{friend.years}}岁</p>-->
    </div>
    <div v-if="$auth.loggedIn" class="user-profile-friends-item__buttons">
      <div @click="friendAction(nickname)" class="user-profile-friends-item__button friend-button">
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#fff" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"/>
          <path v-if="$auth.user.own_friend_list[0].friend_list.filter(x => x.nickname === nickname).length" d="M16 11L18 13"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path v-if="$auth.user.own_friend_list[0].friend_list.filter(x => x.nickname === nickname).length" d="M22 9L18 13"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11Z" stroke="#fff" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <!--@click="sendBlankChatMessage(nickname)"-->
        <el-popover
          placement="top"
          width="260"
          v-model="messagePopoverVisible">
          <div style="text-align: right; margin: 0">
            <el-input class="mb-10" placeholder="Please input" v-model="message"></el-input>
            <el-button size="mini" type="text" class="main-color" @click="messagePopoverVisible = false">cancel</el-button>
            <el-button  type="danger" size="mini" @click="sendBlankChatMessage(nickname)">Send</el-button>
          </div>
  <div slot="reference" class="user-profile-friends-item__button">
          <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9C11.8022 9 11.6089 9.05865 11.4444 9.16853C11.28 9.27841 11.1518 9.43459 11.0761 9.61732C11.0004 9.80004 10.9806 10.0011 11.0192 10.1951C11.0578 10.3891 11.153 10.5673 11.2929 10.7071C11.4327 10.847 11.6109 10.9422 11.8049 10.9808C11.9989 11.0194 12.2 10.9996 12.3827 10.9239C12.5654 10.8482 12.7216 10.72 12.8315 10.5556C12.9414 10.3911 13 10.1978 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V15C2 15.7956 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H16.59L20.29 21.71C20.3834 21.8027 20.4943 21.876 20.6161 21.9258C20.7379 21.9755 20.8684 22.0008 21 22C21.1312 22.0034 21.2613 21.976 21.38 21.92C21.5626 21.845 21.7189 21.7176 21.8293 21.5539C21.9396 21.3901 21.999 21.1974 22 21V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 18.59L17.71 16.29C17.6166 16.1973 17.5057 16.124 17.3839 16.0742C17.2621 16.0245 17.1316 15.9992 17 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V18.59ZM8 9C7.80222 9 7.60888 9.05865 7.44443 9.16853C7.27998 9.27841 7.15181 9.43459 7.07612 9.61732C7.00043 9.80004 6.98063 10.0011 7.01921 10.1951C7.0578 10.3891 7.15304 10.5673 7.29289 10.7071C7.43275 10.847 7.61093 10.9422 7.80491 10.9808C7.99889 11.0194 8.19996 10.9996 8.38268 10.9239C8.56541 10.8482 8.72159 10.72 8.83147 10.5556C8.94135 10.3911 9 10.1978 9 10C9 9.73478 8.89464 9.48043 8.70711 9.29289C8.51957 9.10536 8.26522 9 8 9ZM16 9C15.8022 9 15.6089 9.05865 15.4444 9.16853C15.28 9.27841 15.1518 9.43459 15.0761 9.61732C15.0004 9.80004 14.9806 10.0011 15.0192 10.1951C15.0578 10.3891 15.153 10.5673 15.2929 10.7071C15.4327 10.847 15.6109 10.9422 15.8049 10.9808C15.9989 11.0194 16.2 10.9996 16.3827 10.9239C16.5654 10.8482 16.7216 10.72 16.8315 10.5556C16.9414 10.3911 17 10.1978 17 10C17 9.73478 16.8946 9.48043 16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9Z" />
        </svg>

</div>
        </el-popover>


    </div>
  </div>

</template>
<script>
  export default {
    props:['nickname','avatar','fio'],

    data() {
      return {
        messagePopoverVisible:false,
        message:null,


      };
    },

    watch: {

    },
    mounted() {

    },
    methods: {
      notify(title,message,type){
        //показать уведомление пользователю
        this.$notify({
          title: title,
          message: message,
          type: type
        });
      },
      async sendBlankChatMessage(nickname){
        await this.$axios.post('/api/v1/chat/new_message',{nickname:nickname,message:this.message})
        console.log('message send')
        this.$router.push(`/lk?chats&user=${nickname}`)
      },
      async friendAction(nickname){
        let checkFriendList = this.$auth.user.own_friend_list[0].friend_list.filter(x => x.nickname === nickname)
        console.log(checkFriendList)
        if (checkFriendList.length > 0){
          await this.$axios.post('/api/v1/friend/add_or_delete_friend_by_nickname',{nickname:nickname,action:'delete'})
          this.notify('Успешно','Пользователь удален из избранного','success')
        }else {
          await this.$axios.post('/api/v1/friend/add_or_delete_friend_by_nickname',{nickname:nickname,action:'add'})
          this.notify('Успешно','Пользователь добавлен в избранное','success')
        }
        await this.$auth.fetchUser()
      }

    }
  }
</script>


