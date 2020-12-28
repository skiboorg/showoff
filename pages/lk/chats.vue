<template>
  <div  class="user-profile-tab">
    <div class="user-profile-chat">
        <div class="user-profile-chat__wrapper">
          <div class="user-profile-chat__left">
            <div class="chat-users ">
              <div
                @click="openChat(chat.id)"
                v-for="chat in chats" :key="chat.id" >
                <div v-if="$auth.user.nickname === chat.starter.nickname" class="chat-user"
                     :class="{'chatSelected':chat.chat_opened}">
                  <div class="chat-user__img" :class="{'chatUserOnline':chat.opponent.is_online}">
                    <img :src="chat.opponent.avatar" alt="">
                  </div>
                  <div class="chat-user__user">
                    <p>{{chat.opponent.fio}}</p>
                    <p>@ {{chat.opponent.nickname}}</p>
                  </div>
                </div>
                <div v-else class="chat-user" :class="{'chatSelected':chat.chat_opened}">
                  <div class="chat-user__img" :class="{'chatUserOnline':chat.starter.is_online,'userVIP':chat.starter.is_vip}">
                    <img :src="chat.starter.avatar" alt="">
                  </div>
                  <div class="chat-user__user">
                    <p>{{chat.starter.fio}}</p>
                    <p>@ {{chat.starter.nickname}}</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <div class="user-profile-chat__right">
            <div ref="messagesContainer" class="chat-messages">
              <div class="chat-message"
                   :class="{'own-message':message.user.id === $auth.user.id}"
                   v-for="message in messages" :key="message.id" >

                <div  class="chat-message__avatar"><img  :src="message.user.avatar" alt=""></div>
                <div class="chat-message__text">
                  <p v-html="message.message"></p>
                  <img v-if="message.image" :src="message.image" alt="">
                  <span class="chat-message__text--datetime">{{new Date(message.createdAt).toLocaleDateString()}} {{new Date(message.createdAt).toLocaleTimeString()}}</span>
                </div>
              </div>
            </div>
            <div class="chat-new-message ">
              <div class="chat-new-message__attach">
                <el-upload action="" :show-file-list="false" :on-success="handleChatImgSuccess">


                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1101 15.39L8.23008 19.27C8.00059 19.5004 7.72787 19.6832 7.42756 19.8079C7.12725 19.9326 6.80527 19.9969 6.48008 19.9969C6.15489 19.9969 5.83291 19.9326 5.5326 19.8079C5.23229 19.6832 4.95957 19.5004 4.73008 19.27C4.49848 19.0412 4.3146 18.7686 4.1891 18.4682C4.0636 18.1678 3.99898 17.8455 3.99898 17.52C3.99898 17.1944 4.0636 16.8721 4.1891 16.5717C4.3146 16.2713 4.49848 15.9988 4.73008 15.77L8.61008 11.89C8.79838 11.7017 8.90417 11.4463 8.90417 11.18C8.90417 10.9137 8.79838 10.6583 8.61008 10.47C8.42178 10.2817 8.16638 10.1759 7.90008 10.1759C7.63378 10.1759 7.37838 10.2817 7.19008 10.47L3.31008 14.36C2.52844 15.2108 2.1057 16.3306 2.13016 17.4857C2.15461 18.6408 2.62436 19.7418 3.44131 20.5587C4.25826 21.3757 5.35924 21.8454 6.51433 21.8699C7.66941 21.8943 8.78929 21.4716 9.64008 20.69L13.5301 16.81C13.7184 16.6217 13.8242 16.3663 13.8242 16.1C13.8242 15.8337 13.7184 15.5783 13.5301 15.39C13.3418 15.2017 13.0864 15.0959 12.8201 15.0959C12.5538 15.0959 12.2984 15.2017 12.1101 15.39ZM8.83008 15.17C8.92352 15.2626 9.03434 15.336 9.15617 15.3857C9.27801 15.4355 9.40847 15.4607 9.54008 15.46C9.67169 15.4607 9.80215 15.4355 9.92399 15.3857C10.0458 15.336 10.1566 15.2626 10.2501 15.17L15.1701 10.25C15.3584 10.0617 15.4642 9.80626 15.4642 9.53996C15.4642 9.27366 15.3584 9.01826 15.1701 8.82996C14.9818 8.64165 14.7264 8.53587 14.4601 8.53587C14.1938 8.53587 13.9384 8.64165 13.7501 8.82996L8.83008 13.75C8.73635 13.8429 8.66196 13.9535 8.61119 14.0754C8.56042 14.1972 8.53428 14.3279 8.53428 14.46C8.53428 14.592 8.56042 14.7227 8.61119 14.8445C8.66196 14.9664 8.73635 15.077 8.83008 15.17ZM21.0001 18H20.0001V17C20.0001 16.7347 19.8947 16.4804 19.7072 16.2929C19.5197 16.1053 19.2653 16 19.0001 16C18.7349 16 18.4805 16.1053 18.293 16.2929C18.1054 16.4804 18.0001 16.7347 18.0001 17V18H17.0001C16.7349 18 16.4805 18.1053 16.293 18.2929C16.1054 18.4804 16.0001 18.7347 16.0001 19C16.0001 19.2652 16.1054 19.5195 16.293 19.7071C16.4805 19.8946 16.7349 20 17.0001 20H18.0001V21C18.0001 21.2652 18.1054 21.5195 18.293 21.7071C18.4805 21.8946 18.7349 22 19.0001 22C19.2653 22 19.5197 21.8946 19.7072 21.7071C19.8947 21.5195 20.0001 21.2652 20.0001 21V20H21.0001C21.2653 20 21.5197 19.8946 21.7072 19.7071C21.8947 19.5195 22.0001 19.2652 22.0001 19C22.0001 18.7347 21.8947 18.4804 21.7072 18.2929C21.5197 18.1053 21.2653 18 21.0001 18ZM16.8101 13.53L20.6901 9.63996C21.4717 8.78916 21.8945 7.66929 21.87 6.51421C21.8456 5.35912 21.3758 4.25814 20.5588 3.44119C19.7419 2.62424 18.6409 2.15449 17.4858 2.13003C16.3307 2.10558 15.2109 2.52831 14.3601 3.30996L10.4701 7.18996C10.3768 7.2832 10.3029 7.39389 10.2524 7.51571C10.202 7.63753 10.176 7.7681 10.176 7.89996C10.176 8.03182 10.202 8.16239 10.2524 8.28421C10.3029 8.40603 10.3768 8.51672 10.4701 8.60996C10.5633 8.7032 10.674 8.77716 10.7958 8.82762C10.9177 8.87808 11.0482 8.90405 11.1801 8.90405C11.3119 8.90405 11.4425 8.87808 11.5643 8.82762C11.6862 8.77716 11.7968 8.7032 11.8901 8.60996L15.7701 4.72996C15.9996 4.49956 16.2723 4.31675 16.5726 4.19201C16.8729 4.06727 17.1949 4.00306 17.5201 4.00306C17.8453 4.00306 18.1673 4.06727 18.4676 4.19201C18.7679 4.31675 19.0406 4.49956 19.2701 4.72996C19.5017 4.95877 19.6856 5.23127 19.8111 5.53167C19.9366 5.83207 20.0012 6.1544 20.0012 6.47996C20.0012 6.80552 19.9366 7.12785 19.8111 7.42825C19.6856 7.72865 19.5017 8.00115 19.2701 8.22996L15.3901 12.11C15.2964 12.2029 15.222 12.3135 15.1712 12.4354C15.1204 12.5572 15.0943 12.6879 15.0943 12.82C15.0943 12.952 15.1204 13.0827 15.1712 13.2045C15.222 13.3264 15.2964 13.437 15.3901 13.53C15.483 13.6237 15.5936 13.6981 15.7155 13.7489C15.8374 13.7996 15.9681 13.8258 16.1001 13.8258C16.2321 13.8258 16.3628 13.7996 16.4847 13.7489C16.6065 13.6981 16.7171 13.6237 16.8101 13.53Z" />
                  </svg>
                </el-upload>
              </div>


              <div v-if="chatImgPreview" class="chat-new-message__img-preview">
                <img :src="chatImgPreview" alt="">
              </div>

              <el-input ref="newMessage" class="chat-new-message__input"
                        placeholder="new message"
                        v-model="newMessage">
              </el-input>
              <div class="chat-new-message__input--smiles">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.36 14.23C13.6915 14.769 12.8587 15.0629 12 15.0629C11.1413 15.0629 10.3085 14.769 9.64 14.23C9.43579 14.0603 9.17251 13.9786 8.90808 14.003C8.64365 14.0274 8.39974 14.1558 8.23 14.36C8.06027 14.5642 7.9786 14.8275 8.00298 15.0919C8.02736 15.3563 8.15579 15.6003 8.36 15.77C9.38134 16.6226 10.6696 17.0896 12 17.0896C13.3304 17.0896 14.6187 16.6226 15.64 15.77C15.8442 15.6003 15.9726 15.3563 15.997 15.0919C16.0214 14.8275 15.9397 14.5642 15.77 14.36C15.686 14.2589 15.5828 14.1753 15.4665 14.1141C15.3501 14.0528 15.2229 14.0151 15.0919 14.003C14.8275 13.9786 14.5642 14.0603 14.36 14.23ZM9 11C9.19779 11 9.39113 10.9414 9.55557 10.8315C9.72002 10.7216 9.8482 10.5654 9.92388 10.3827C9.99957 10.2 10.0194 9.99889 9.98079 9.80491C9.9422 9.61093 9.84696 9.43275 9.70711 9.29289C9.56726 9.15304 9.38908 9.0578 9.19509 9.01921C9.00111 8.98063 8.80005 9.00043 8.61732 9.07612C8.43459 9.15181 8.27842 9.27998 8.16853 9.44443C8.05865 9.60888 8 9.80222 8 10C8 10.2652 8.10536 10.5196 8.2929 10.7071C8.48043 10.8946 8.73479 11 9 11ZM15 9C14.8022 9 14.6089 9.05865 14.4444 9.16853C14.28 9.27841 14.1518 9.43459 14.0761 9.61732C14.0004 9.80004 13.9806 10.0011 14.0192 10.1951C14.0578 10.3891 14.153 10.5673 14.2929 10.7071C14.4328 10.847 14.6109 10.9422 14.8049 10.9808C14.9989 11.0194 15.2 10.9996 15.3827 10.9239C15.5654 10.8482 15.7216 10.72 15.8315 10.5556C15.9414 10.3911 16 10.1978 16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" />
                </svg>
                <div class="chat-new-message__input--smiles--list">
                  <p class="smiley-icon" v-for="smiley in smiles"
                     :key="smiley.id" v-html="smiley.code" @click="pasteSmiley(smiley.code)"></p>
                </div>
              </div>
              <div @click="sendChatMessage" class="chat-new-message__input--send" :class="{'elementDisabled':!newMessage}">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.15 2.86001C20.768 2.47057 20.2835 2.19723 19.7526 2.07158C19.2217 1.94594 18.6661 1.97313 18.15 2.15001L4.00005 6.88001C3.42936 7.06681 2.93074 7.42616 2.573 7.90845C2.21527 8.39073 2.01607 8.97218 2.0029 9.57251C1.98973 10.1728 2.16324 10.7625 2.49948 11.26C2.83572 11.7575 3.31811 12.1384 3.88005 12.35L9.12005 14.35C9.23937 14.3956 9.34801 14.4654 9.43919 14.5548C9.53038 14.6443 9.60216 14.7516 9.65005 14.87L11.65 20.12C11.8536 20.674 12.2231 21.1518 12.708 21.4882C13.193 21.8246 13.7698 22.0033 14.36 22H14.43C15.0311 21.9891 15.6136 21.7903 16.096 21.4317C16.5784 21.073 16.9365 20.5724 17.1201 20L21.85 5.83001C22.0221 5.31895 22.0477 4.76995 21.924 4.2451C21.8003 3.72024 21.5322 3.24046 21.15 2.86001ZM20 5.20001L15.22 19.38C15.1645 19.5595 15.0531 19.7165 14.9019 19.828C14.7508 19.9396 14.5679 19.9999 14.38 20C14.1933 20.0031 14.01 19.9492 13.8546 19.8456C13.6992 19.742 13.579 19.5936 13.51 19.42L11.51 14.17C11.3651 13.7885 11.1414 13.4418 10.8537 13.1524C10.566 12.863 10.2207 12.6373 9.84005 12.49L4.59005 10.49C4.41294 10.4251 4.2607 10.3062 4.15483 10.1501C4.04896 9.99399 3.99482 9.80856 4.00005 9.62001C4.0002 9.43215 4.06047 9.24928 4.17202 9.09813C4.28358 8.94699 4.44058 8.83551 4.62005 8.78001L18.8 4.05001C18.9629 3.98366 19.1414 3.96588 19.3141 3.99883C19.4868 4.03179 19.6462 4.11406 19.7731 4.2357C19.9001 4.35734 19.989 4.51314 20.0293 4.68427C20.0696 4.8554 20.0594 5.03453 20 5.20001Z" />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>

  export default {
    layout: 'user_lk',
    scrollToTop: false,
    auth: true,
    async asyncData({$axios}){
        const user_chats = await $axios.get(`/api/v1/chat/all`)
        const chats = user_chats.data
        return {chats}
    },
    data(){
      return {
        smiles:[
          {id:1,name:'GRINNING FACE',code:'😀'},
          {id:2,name:'FACE WITH TEARS OF JOY',code:'😁'},
          {id:3,name:'SMILING FACE WITH HALO',code:'😂'},
          {id:4,name:'SMILING FACE WITH HORNS',code:'😈'},
          {id:5,name:'SMILING FACE WITH HEART-SHAPED EYES',code:'😍'},
          {id:6,name:'FACE THROWING A KISS',code:'😘'},
        ],
        user_from_url:null,
        current_chat_id:null,
        newMessage:null,
        chatImg:null,
        chatImgPreview:null,
        chats:[],
        socket:null,
        messages:[],
      }
    },
    mounted: function () {
      this.$nextTick(function () {
          //открываем чат по nickname, если он содержится в урле после #
          let uri = window.location.href.split('#');
          this.user_from_url = uri[1]
          console.log('user_from_url',this.user_from_url)
          if (this.user_from_url){
          this.openChat(this.chats.filter(x => x.opponent.nickname === this.user_from_url)[0].id)
        }

      })
    },
    updated() {
        this.$nextTick(() => this.scrollToEnd());

    },
    methods:{
      async openChat(chat_id){
        try{
          this.socket.close()
        }catch (e) {
          console.log('not connected')
        }
        this.socket = new WebSocket(`${process.env.ws_url}/ws/chat/${chat_id}`)
        this.socket.onmessage = (res) =>{
          //console.log('message in chat',JSON.parse(res.data))
          let data = JSON.parse(res.data)['message']
          //console.log('DATA',data)
          if(data.chat === this.current_chat_id){

            const rex = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/ug;
            const updated = data.message.replace(rex, match => `<span class="chat-emoji">&#x${match.codePointAt(0).toString(16)};</span>`);
            console.log(updated)
            this.messages.push(
              {
                id:data.id,
                message: updated,//data.message,
                image: data.image ? process.env.img_url+data.image : null,//data.message,
                createdAt: Date.now(),
                user:{
                  id:data.user.id,
                  avatar: data.user.avatar ? process.env.img_url+data.user.avatar : '/no-avatar.svg',
                }
              }
            )
          }

        }
        const response = await this.$axios.get(`/api/v1/chat/get_chat_messages?chat_id=${chat_id}`)
        console.log(response.data)
        this.messages = response.data
        for (let i of this.chats){i.chat_opened = false}
        this.chats.filter(x => x.id === chat_id)[0].chat_opened = true
        this.current_chat_id = chat_id
      },
      async getChats(){
        const responce  = await this.$axios.get('/api/v1/chat/all')
        console.log(responce.data)
        this.chats = responce.data
        console.log('this.user_from_url',this.user_from_url)

      },
      async sendChatMessage(){
        const rex = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/ug;
        const updated = this.newMessage.replace(rex, match => `<span class="chat-emoji">&#x${match.codePointAt(0).toString(16)};</span>`);

        //await this.$axios.post(`/api/v1/chat/add/${this.current_chat_id}`,{message:updated})

        let formData = new FormData()
        formData.set('message', JSON.stringify(this.newMessage))
        formData.set('image',this.chatImg)

        await this.$axios({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: `/api/v1/chat/add/${this.current_chat_id}`,
          data: formData
        }).then((response) => {
          console.log('chat message response',response)
        })
          .catch(function (error) {
            // handle error
          })
          .then(function () {
            // always executed
          });


        //console.log(this.messages)
        // this.messages.push(
        //   {
        //     message: this.newMessage,
        //     user:{
        //       id:this.$auth.user.id,
        //       avatar:this.$auth.user.avatar,
        //     }
        //   }
        // )
        this.newMessage = null
        this.chatImgPreview = null
        this.chatImg = null
      },
      handleChatImgSuccess(res, file) {
        this.chatImgPreview = URL.createObjectURL(file.raw);
        this.chatImg = file.raw
      },
      pasteSmiley(code){
        this.newMessage ? this.newMessage += ` ${code} ` : this.newMessage = `${code} `
      },
      notify(title,message,type){
        this.$notify({
          title: title,
          message: message,
          type: type
        });
      },
      scrollToEnd: function () {
        let content = this.$refs.messagesContainer;
        content.scrollTop = content.scrollHeight
      },
    }

  }
</script>


