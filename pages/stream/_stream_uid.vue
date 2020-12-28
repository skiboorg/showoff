<template >
  <section v-loading="loading" element-loading-text="Поиск стрима" element-loading-spinner="el-icon-loading"
           element-loading-background="rgba(0, 0, 0, 0.8)" class="stream">
    <div class="container">
      <div v-if="stream.uid" class="stream-wrapper">
        <div  class="stream-left">
          <div v-if="!this.$auth.user.is_streamer" class="stream-video">

            <div class="stream-video__top">
              <div @click="$router.push(`/profile/${stream.streamer.nickname}`)" class="stream-video__top--user">
                <img :src="stream.streamer.avatar" alt="">
                <div class="stream-video__top--user--info">
                  <p>{{stream.streamer.fio}}</p>
                  <p>@{{stream.streamer.nickname}}</p>
                </div>
              </div>
              <div class="stream-video__top--stats">
                <img src="/girl_rating_icon.png" alt="">
                <div class="user-profile-about__girl-stats--item--info">
                  <p>{{stream.streamer.streamer_rating}}</p>
                  <p>广播评级</p>
                </div>
              </div>
            </div>
            <div class="stream-video__content">
              <div v-if="streamBtnActive" @click="cllick1" class="stream-video__content--play">
                <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g style="mix-blend-mode:multiply" opacity="0.6">
                    <circle cx="49" cy="49" r="49" fill="#383845"/>
                  </g>
                  <path d="M71 49L38 68.0526L38 29.9474L71 49Z" fill="white"/>
                </svg>
              </div>
              <!--              vjs-default-skin vjs-big-play-centered-->
              <video
                id="my-player"
                class="video-js ">
                <source :src="'http://95.215.207.100:8080/hls/'+stream.streamer.suid+'.m3u8'" type="application/x-mpegURL" />
                <p class="vjs-no-js">
                  To view this video please enable JavaScript, and consider upgrading to a
                  web browser that
                  <a href="http://videojs.com/html5-video-support/" target="_blank">
                    supports HTML5 video
                  </a>
                </p>
              </video>
            </div>
          </div>
          <div  v-else class="user-profile-block" style="min-height: 450px">
            <h3 class="user-profile-block__title">Донаты</h3>
            <div  class="gift-table-item stream-donate-item" v-for="donate in donates" :key="donate.id">
              <p class="gift-table-item__date">{{donate.gift_time}}</p>
              <div class="gift-table-item__user">
                <img :src="img_url+donate.gift_from_avatar" alt="">
                <div class="gift-table-item__user--name">
                  <p>{{donate.gift_from_fio}}</p>
                  <p>@{{donate.gift_from}}</p>
                </div>
              </div>
              <div class="gift-table-item__img">
                {{donate.gift_message}}
              </div>

              <div class="gift-table-item__price">
                <img src="/diamond.svg" alt="">
                <p>{{donate.gift_price}}</p>
              </div>

            </div>
          </div>
          <el-button v-if="!this.$auth.user.is_streamer" type="primary" @click="giftModal=true">openW</el-button>
          <div class="stream-best-donaters">
            <h3>捐款</h3>
            <div class="stream-best-donaters__top"></div>
            <div class="stream-best-donaters__top3">
              <div v-for="(donater,index) in top_donaters" :key="donater.id" class="stream-best-donaters__top3--item">
                <p class="stream-best-donaters__top3--item--place">{{index+1}}</p>
                <img :src="'/crown_'+index+'.png'" alt="">
                <div class="stream-best-donaters__top3--item--user">
                  <img :src="donater.from_user.avatar" alt="">
                  <p>{{donater.from_user.fio}}</p>
                </div>
                <p class="stream-best-donaters__top3--item--nickname"> <nuxt-link :to="`/profile/${donater.from_user.nickname}`">@{{donater.from_user.nickname}}</nuxt-link> </p>
                <div class="stream-best-donaters__top3--item--donate">
                  <img src="/diamond.svg" alt="">
                  <p>捐赠了{{donater.summ}}颗水晶</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="stream-right">
          <div class="stream-tabs">
            <div class="stream-tab streamTabActive">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9C11.8022 9 11.6089 9.05865 11.4444 9.16853C11.28 9.27841 11.1518 9.43459 11.0761 9.61732C11.0004 9.80004 10.9806 10.0011 11.0192 10.1951C11.0578 10.3891 11.153 10.5673 11.2929 10.7071C11.4327 10.847 11.6109 10.9422 11.8049 10.9808C11.9989 11.0194 12.2 10.9996 12.3827 10.9239C12.5654 10.8482 12.7216 10.72 12.8315 10.5556C12.9414 10.3911 13 10.1978 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9ZM19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V15C2 15.7956 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H16.59L20.29 21.71C20.3834 21.8027 20.4943 21.876 20.6161 21.9258C20.7379 21.9755 20.8684 22.0008 21 22C21.1312 22.0034 21.2613 21.976 21.38 21.92C21.5626 21.845 21.7189 21.7176 21.8293 21.5539C21.9396 21.3901 21.999 21.1974 22 21V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM20 18.59L17.71 16.29C17.6166 16.1973 17.5057 16.124 17.3839 16.0742C17.2621 16.0245 17.1316 15.9992 17 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V18.59ZM8 9C7.80222 9 7.60888 9.05865 7.44443 9.16853C7.27998 9.27841 7.15181 9.43459 7.07612 9.61732C7.00043 9.80004 6.98063 10.0011 7.01921 10.1951C7.0578 10.3891 7.15304 10.5673 7.29289 10.7071C7.43275 10.847 7.61093 10.9422 7.80491 10.9808C7.99889 11.0194 8.19996 10.9996 8.38268 10.9239C8.56541 10.8482 8.72159 10.72 8.83147 10.5556C8.94135 10.3911 9 10.1978 9 10C9 9.73478 8.89464 9.48043 8.70711 9.29289C8.51957 9.10536 8.26522 9 8 9ZM16 9C15.8022 9 15.6089 9.05865 15.4444 9.16853C15.28 9.27841 15.1518 9.43459 15.0761 9.61732C15.0004 9.80004 14.9806 10.0011 15.0192 10.1951C15.0578 10.3891 15.153 10.5673 15.2929 10.7071C15.4327 10.847 15.6109 10.9422 15.8049 10.9808C15.9989 11.0194 16.2 10.9996 16.3827 10.9239C16.5654 10.8482 16.7216 10.72 16.8315 10.5556C16.9414 10.3911 17 10.1978 17 10C17 9.73478 16.8946 9.48043 16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9Z" />
              </svg>
              <p>聊天室</p>
            </div>
            <div class="stream-tab">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3 12.22C12.8336 11.7581 13.2616 11.1869 13.5549 10.545C13.8482 9.90316 14 9.20571 14 8.5C14 7.17392 13.4732 5.90215 12.5355 4.96447C11.5979 4.02678 10.3261 3.5 9 3.5C7.67392 3.5 6.40215 4.02678 5.46447 4.96447C4.52678 5.90215 4 7.17392 4 8.5C3.99999 9.20571 4.1518 9.90316 4.44513 10.545C4.73845 11.1869 5.16642 11.7581 5.7 12.22C4.30014 12.8539 3.11247 13.8775 2.27898 15.1685C1.4455 16.4596 1.00147 17.9633 1 19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5C2.26522 20.5 2.51957 20.3946 2.70711 20.2071C2.89464 20.0196 3 19.7652 3 19.5C3 17.9087 3.63214 16.3826 4.75736 15.2574C5.88258 14.1321 7.4087 13.5 9 13.5C10.5913 13.5 12.1174 14.1321 13.2426 15.2574C14.3679 16.3826 15 17.9087 15 19.5C15 19.7652 15.1054 20.0196 15.2929 20.2071C15.4804 20.3946 15.7348 20.5 16 20.5C16.2652 20.5 16.5196 20.3946 16.7071 20.2071C16.8946 20.0196 17 19.7652 17 19.5C16.9985 17.9633 16.5545 16.4596 15.721 15.1685C14.8875 13.8775 13.6999 12.8539 12.3 12.22ZM9 11.5C8.40666 11.5 7.82664 11.3241 7.33329 10.9944C6.83994 10.6648 6.45542 10.1962 6.22836 9.64805C6.0013 9.09987 5.94189 8.49667 6.05764 7.91473C6.1734 7.33279 6.45912 6.79824 6.87868 6.37868C7.29824 5.95912 7.83279 5.6734 8.41473 5.55764C8.99667 5.44189 9.59987 5.5013 10.1481 5.72836C10.6962 5.95542 11.1648 6.33994 11.4944 6.83329C11.8241 7.32664 12 7.90666 12 8.5C12 9.29565 11.6839 10.0587 11.1213 10.6213C10.5587 11.1839 9.79565 11.5 9 11.5ZM18.74 11.82C19.38 11.0993 19.798 10.2091 19.9438 9.25634C20.0896 8.30362 19.9569 7.32907 19.5618 6.45C19.1666 5.57093 18.5258 4.8248 17.7165 4.30142C16.9071 3.77805 15.9638 3.49974 15 3.5C14.7348 3.5 14.4804 3.60536 14.2929 3.79289C14.1054 3.98043 14 4.23478 14 4.5C14 4.76522 14.1054 5.01957 14.2929 5.20711C14.4804 5.39464 14.7348 5.5 15 5.5C15.7956 5.5 16.5587 5.81607 17.1213 6.37868C17.6839 6.94129 18 7.70435 18 8.5C17.9986 9.02524 17.8593 9.5409 17.5961 9.99542C17.3328 10.4499 16.9549 10.8274 16.5 11.09C16.3517 11.1755 16.2279 11.2977 16.1404 11.4447C16.0528 11.5918 16.0045 11.7589 16 11.93C15.9958 12.0998 16.0349 12.2678 16.1137 12.4183C16.1924 12.5687 16.3081 12.6967 16.45 12.79L16.84 13.05L16.97 13.12C18.1754 13.6917 19.1923 14.596 19.901 15.7263C20.6096 16.8566 20.9805 18.1659 20.97 19.5C20.97 19.7652 21.0754 20.0196 21.2629 20.2071C21.4504 20.3946 21.7048 20.5 21.97 20.5C22.2352 20.5 22.4896 20.3946 22.6771 20.2071C22.8646 20.0196 22.97 19.7652 22.97 19.5C22.9782 17.9654 22.5938 16.4543 21.8535 15.1101C21.1131 13.7659 20.0413 12.6333 18.74 11.82Z" />
              </svg>
              <p>访客</p>
            </div>
          </div>
          <div class="stream-tab-chat">
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
      <div v-else class="stream-loading"></div>

    </div>
    <el-dialog class="stream-gift-modal"  :visible.sync="giftModal"   >
      <h3 class="user-profile-block__title">给予关注</h3>
      <p style="padding-top: 0" class="user-profile-block__text mb-20">我们可以给女孩更多的关注：如果您有任何祝贺或疑问，请送礼物！收到礼物后，女孩肯定会通过私人聊天给您写信并开始对话！</p>
      <h3 class="user-profile-block__title">选择礼物</h3>
      <el-radio-group class="user-profile-gifts mb-20" v-model="selected_gift_id">
        <el-radio-button v-if="!gift.is_special_gift" v-for="gift in all_gifts" :key="gift.id" :label="gift.id">
          <div  class="user-profile-gift" @click="selected_gift_price=gift.price" >
            <img class="user-profile-gift__img" :src="gift.image" alt="">
            <p class="user-profile-gift__name">{{gift.name}}</p>
            <p class="user-profile-gift__price"><img src="/diamond.svg" alt=""> {{gift.price}}</p>

          </div>
        </el-radio-button>
      </el-radio-group>
      <div class="user-profile-gifts__message mb-40">
        <el-input v-model="gift_message" placeholder="输入女孩的愿望或信息"></el-input>
        <a href="#" class="btn btn-l-blue" :class="{'btnDisabled':!selected_gift_id}" @click.prevent="sendGift">选择礼物</a>
      </div>
      <div class="stream-gift-modal__bottom">
        <p>捐赠工作如何 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.29 15.29C11.247 15.3375 11.2069 15.3876 11.17 15.44C11.1322 15.4957 11.1019 15.5563 11.08 15.62C11.0512 15.6767 11.0309 15.7374 11.02 15.8C11.0151 15.8666 11.0151 15.9334 11.02 16C11.0166 16.1312 11.044 16.2613 11.1 16.38C11.1449 16.5041 11.2166 16.6168 11.3099 16.7101C11.4032 16.8034 11.5159 16.8751 11.64 16.92C11.7597 16.9729 11.8891 17.0002 12.02 17.0002C12.1509 17.0002 12.2803 16.9729 12.4 16.92C12.5241 16.8751 12.6368 16.8034 12.7301 16.7101C12.8234 16.6168 12.8951 16.5041 12.94 16.38C12.9844 16.2584 13.0048 16.1294 13 16C13.0008 15.8684 12.9755 15.7379 12.9258 15.6161C12.876 15.4943 12.8027 15.3834 12.71 15.29C12.617 15.1963 12.5064 15.1219 12.3846 15.0711C12.2627 15.0203 12.132 14.9942 12 14.9942C11.868 14.9942 11.7373 15.0203 11.6154 15.0711C11.4936 15.1219 11.383 15.1963 11.29 15.29ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17316C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87103 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21446 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12 7C11.4731 6.99966 10.9553 7.13812 10.4989 7.40144C10.0425 7.66476 9.66347 8.04366 9.4 8.5C9.32765 8.61382 9.27907 8.74109 9.25718 8.87418C9.23529 9.00726 9.24054 9.14339 9.27263 9.27439C9.30472 9.40538 9.36297 9.52853 9.44389 9.63643C9.5248 9.74433 9.62671 9.83475 9.74347 9.90224C9.86024 9.96974 9.98945 10.0129 10.1233 10.0292C10.2572 10.0454 10.393 10.0345 10.5225 9.99688C10.6521 9.9593 10.7727 9.89591 10.8771 9.81052C10.9814 9.72513 11.0675 9.6195 11.13 9.5C11.2181 9.34739 11.345 9.22078 11.4977 9.13298C11.6505 9.04517 11.8238 8.9993 12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10C13 10.2652 12.8946 10.5196 12.7071 10.7071C12.5196 10.8946 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V12.82C13.6614 12.58 14.2174 12.1152 14.5708 11.5069C14.9242 10.8985 15.0525 10.1853 14.9334 9.49189C14.8143 8.79849 14.4552 8.16902 13.919 7.71351C13.3828 7.25801 12.7035 7.00546 12 7Z" fill="#CECFDF"/>
        </svg>
        </p>
        <p>在哪里查看我的交易 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.29 15.29C11.247 15.3375 11.2069 15.3876 11.17 15.44C11.1322 15.4957 11.1019 15.5563 11.08 15.62C11.0512 15.6767 11.0309 15.7374 11.02 15.8C11.0151 15.8666 11.0151 15.9334 11.02 16C11.0166 16.1312 11.044 16.2613 11.1 16.38C11.1449 16.5041 11.2166 16.6168 11.3099 16.7101C11.4032 16.8034 11.5159 16.8751 11.64 16.92C11.7597 16.9729 11.8891 17.0002 12.02 17.0002C12.1509 17.0002 12.2803 16.9729 12.4 16.92C12.5241 16.8751 12.6368 16.8034 12.7301 16.7101C12.8234 16.6168 12.8951 16.5041 12.94 16.38C12.9844 16.2584 13.0048 16.1294 13 16C13.0008 15.8684 12.9755 15.7379 12.9258 15.6161C12.876 15.4943 12.8027 15.3834 12.71 15.29C12.617 15.1963 12.5064 15.1219 12.3846 15.0711C12.2627 15.0203 12.132 14.9942 12 14.9942C11.868 14.9942 11.7373 15.0203 11.6154 15.0711C11.4936 15.1219 11.383 15.1963 11.29 15.29ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17316C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87103 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21446 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12 7C11.4731 6.99966 10.9553 7.13812 10.4989 7.40144C10.0425 7.66476 9.66347 8.04366 9.4 8.5C9.32765 8.61382 9.27907 8.74109 9.25718 8.87418C9.23529 9.00726 9.24054 9.14339 9.27263 9.27439C9.30472 9.40538 9.36297 9.52853 9.44389 9.63643C9.5248 9.74433 9.62671 9.83475 9.74347 9.90224C9.86024 9.96974 9.98945 10.0129 10.1233 10.0292C10.2572 10.0454 10.393 10.0345 10.5225 9.99688C10.6521 9.9593 10.7727 9.89591 10.8771 9.81052C10.9814 9.72513 11.0675 9.6195 11.13 9.5C11.2181 9.34739 11.345 9.22078 11.4977 9.13298C11.6505 9.04517 11.8238 8.9993 12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10C13 10.2652 12.8946 10.5196 12.7071 10.7071C12.5196 10.8946 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V12.82C13.6614 12.58 14.2174 12.1152 14.5708 11.5069C14.9242 10.8985 15.0525 10.1853 14.9334 9.49189C14.8143 8.79849 14.4552 8.16902 13.919 7.71351C13.3828 7.25801 12.7035 7.00546 12 7Z" fill="#CECFDF"/>
        </svg>
        </p>
      </div>
    </el-dialog>
  </section>
</template>

<script>
  import "video.js/dist/video-js.css";
  import videojs from "video.js";
  import "videojs-flash";
  export default {
    auth: false,
    async asyncData({$axios,context,params}){
      console.log(params.stream_uid.split('--')[1])
      try{
        const gifts = await $axios.get(`/api/v1/gift/get_all`)
        const get_stream = await $axios.get(`/api/v1/stream/get_stream_by_uid?uid=${params.stream_uid.split('--')[1]}`)
        const stream = get_stream.data
        console.log(stream.id)
        const top3_donaters = await $axios.get(`/api/v1/gift/get_user_top3_stream_donaters?stream_id=${stream.id}`)

        const all_gifts = gifts.data
        const top_donaters = top3_donaters.data
        console.log(stream,all_gifts,top_donaters)
        return {stream,all_gifts,top_donaters}
      }catch (e) {
        const err = 404
        console.log('stream error')

        return {err}
      }
    },
    data(){
      return {
        loading: true,
        giftModal: false,
        streamBtnActive:true,
        img_url:process.env.img_url,
        donates:[],
        // donates:[
        //   {id:1,gift_from: "admin06",gift_from_avatar: "/media/user/avatars/1_12_vGs7rsx.jpg",
        //   gift_from_fio: "John Doegfh1",gift_img: "/media/gifts/diamond.png",gift_message: "uu",gift_price: 50,
        //   gift_time: "13:57:00"}
        // ],
        smiles:[
          {id:1,name:'GRINNING FACE',code:'😀'},
          {id:2,name:'FACE WITH TEARS OF JOY',code:'😁'},
          {id:3,name:'SMILING FACE WITH HALO',code:'😂'},
          {id:4,name:'SMILING FACE WITH HORNS',code:'😈'},
          {id:5,name:'SMILING FACE WITH HEART-SHAPED EYES',code:'😍'},
          {id:6,name:'FACE THROWING A KISS',code:'😘'},
        ],
        newMessage:null,
        giftRecieved:null,
        messages:[],
        gift_message:null,
        selected_gift_img:null,
        selected_gift_price:null,
        selected_gift_id:null,
        top_donaters:[],

      }
    },
    watch:{
      async giftRecieved(val){
        console.log('giftRecieved',val)
        //val['gift_to'] === this.$auth.user.id ? this.$auth.fetchUser() : null
        await this.getDonaters()
        this.$notify({
          title: `Подарок от @${val['gift_from']}`,
          dangerouslyUseHTMLString: true,
          message: ` <img src="${process.env.img_url+val['gift_img']}"> - ${val['gift_message']}`
        });
        this.donates.push(val)
        if (val['gift_to'] === this.$auth.user.id){
          this.$auth.fetchUser()
          let audio = new Audio('/donate-notify.mp3');
          await audio.play();
        }


      }
    },
    created() {
      try{
        !this.stream.uid ? this.$router.push('/') : this.loading = false
        this.openChat(this.stream.chat_id)
      }catch (e) {
        console.log('error')
      }


    },
    updated() {

      //this.$nextTick(() => this.scrollToEnd());


    },
    mounted() {

      //this.getDonaters()
    },

    methods:{
      pasteSmiley(code){
        this.newMessage ? this.newMessage += ` ${code} ` : this.newMessage = `${code} `
      },
      notify(title,message,type){
        //показать уведомление пользователю
        this.$notify({
          title: title,
          message: message,
          type: type
        });
      },
      scrollToEnd: function () {
        let content = this.$refs.messagesContainer
        content.scrollTop = content.scrollHeight

      },
      async getDonaters(){
        //получаем топ3 донатера для стрима по его streamid
        const response = await this.$axios.get(`/api/v1/gift/get_user_top3_stream_donaters?stream_id=${this.stream.id}`)
        this.top_donaters = response.data

      },
      async sendGift(){
        //отправляем подарок пользователю по nickname
        if(this.$auth.user.balance < this.selected_gift_price){
          this.notify('Ошибка','Не хватает средств','error')
          this.selected_gift_id = null
          this.gift_message = null
          return
        }
        await this.$axios.post(`/api/v1/gift/send_gift_to_user`,{
          gift_id:this.selected_gift_id,
          nickname:this.stream.streamer.nickname,
          message:this.gift_message,
          stream:this.stream.id
        })
        this.notify('Успешно','Подарок отправлен','success')
        await this.$auth.fetchUser()
        this.selected_gift_id = null
        this.gift_message = null
        this.giftModal = false
        //this.getDonaters()


      },
      async openChat(chat_id){
        try{
          this.socket.close()
        }catch (e) {
          console.log('not connected')
        }
        this.socket = new WebSocket(`${process.env.ws_url}/ws/chat/${chat_id}`)
        this.socket.onmessage = (res) =>{
          console.log('socket data',JSON.parse(res.data))
          let socketData  = JSON.parse(res.data)
          let data = JSON.parse(res.data)['message']
          console.log('DATA',data)
          if (socketData['type'] === 'message'){
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
          if(socketData['type'] === 'gift'){
            console.log('GIFT To id',socketData['gift_to'])
            console.log('Streamer id',this.$auth.user.id)

            this.giftRecieved = socketData

          }

          //this.scrollToEnd()

        }
        const response = await this.$axios.get(`/api/v1/chat/get_chat_messages?chat_id=${chat_id}`)
        console.log(response.data)
        this.messages = response.data
        this.scrollToEnd()

      },
      async sendChatMessage(){
        const rex = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/ug;
        const updated = this.newMessage.replace(rex, match => `<span class="chat-emoji">&#x${match.codePointAt(0).toString(16)};</span>`);

        //await this.$axios.post(`/api/v1/chat/add/${this.current_chat_id}`,{message:updated})

        let formData = new FormData()
        formData.set('message', JSON.stringify(this.newMessage))


        await this.$axios({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: `/api/v1/chat/add/${this.stream.chat_id}`,
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

      },
      cllick1: function() {
        this.streamBtnActive = false
        var thisp = this;
        let options = {

          height: "360",

          fluid:true,
          playbackRates: [0.5, 1, 1.5, 2, 2.5],
          // sources: [
          //   {
          //     type: "rtmp/mp4",
          //     src: "rtmp://95.215.207.100/show/1234"
          //   }
          // ],
          techOrder: ["html5"],
          autoplay: true,
          controls: true,
          poster:
            "http://placehold.it/1920x1080"
        };
        var player = videojs("my-player", options);
        console.log(player);
        player.ready(function() {
          this.play();
        });
        player.on("ended", function() {
          console.log("ended");
        });
        player.on("pause", function() {
          console.log("pause");
        });
        player.on("timeupdate", function() {
          var currentTime = this.currentTime();
          // console.log(thisp.progressLast, currentTime, "视频进度");
          // if (currentTime == thisp.progressLast && currentTime != 0) {
          //   player.pause();
          //   player.load();
          //   player.play();
          //   // player.ready(function() {
          //   //   player.load();
          //   //   player.play();
          //   // });
          // } else {
          //   thisp.progressLast = currentTime;
          // }
        });
        player.on("error", function() {
          console.log("error");
        });
        player.on("waiting", function() {
          console.log("waiting");
        });
        player.on("emptied", function() {
          console.log("emptied");
        });
        this.player = player;
      },

    }
  };
</script>
