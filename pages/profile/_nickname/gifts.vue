<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">给予关注</h3>
      <p class="user-profile-block__text mb-20">我们可以给女孩更多的关注：如果您有任何祝贺或疑问，请送礼物！收到礼物后，女孩肯定会通过私人聊天给您写信并开始对话！</p>
      <el-radio-group class="user-profile-gifts mb-20" v-model="selected_gift_id">
        <el-radio-button v-if="!gift.is_special_gift" v-for="gift in all_gifts" :key="gift.id" :label="gift.id">
          <div  class="user-profile-gift" @click="selected_gift_price=gift.price" >
            <img class="user-profile-gift__img" :src="gift.image" alt="">
            <p class="user-profile-gift__name">{{gift.name}}</p>
            <p class="user-profile-gift__price"><img src="/diamond.svg" alt=""> {{gift.price}}</p>
          </div>
        </el-radio-button>
      </el-radio-group>
      <div class="user-profile-gifts__message">
        <el-input v-model="gift_message" placeholder="输入女孩的愿望或信息"></el-input>
        <a href="#" class="btn btn-l-blue" :class="{'btnDisabled':!selected_gift_id}" @click.prevent="sendGift">选择礼物</a>
      </div>
    </div>
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">给予关注</h3>
      <p class="user-profile-block__text mb-20">我们可以给女孩更多的关注：如果您有任何祝贺或疑问，请送礼物！收到礼物后，女孩肯定会通过私人聊天给您写信并始对话！</p>
      <el-radio-group class="user-profile-special-gifts mb-20" v-model="selected_gift_id">
        <el-radio class="user-profile-special-gift"
                  :disabled="gift.is_for_vip && !$auth.user.is_vip"
                  v-if="gift.is_special_gift"
                  v-for="gift in all_gifts"
                  :key="gift.id"
                  :label="gift.id">
          <div class="user-profile-special-gift__inner" >
            <p class="user-profile-gift__name">{{gift.name}}</p>
            <div class="user-profile-gift__tooltip">
              <el-tooltip :content="gift.description" placement="left" effect="light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.29 15.29C11.247 15.3375 11.2069 15.3876 11.17 15.44C11.1322 15.4957 11.1019 15.5563 11.08 15.62C11.0512 15.6767 11.0309 15.7374 11.02 15.8C11.0151 15.8666 11.0151 15.9334 11.02 16C11.0166 16.1312 11.044 16.2613 11.1 16.38C11.1449 16.5041 11.2166 16.6168 11.3099 16.7101C11.4032 16.8034 11.5159 16.8751 11.64 16.92C11.7597 16.9729 11.8891 17.0002 12.02 17.0002C12.1509 17.0002 12.2803 16.9729 12.4 16.92C12.5241 16.8751 12.6368 16.8034 12.7301 16.7101C12.8234 16.6168 12.8951 16.5041 12.94 16.38C12.9844 16.2584 13.0048 16.1294 13 16C13.0008 15.8684 12.9755 15.7379 12.9258 15.6161C12.876 15.4943 12.8027 15.3834 12.71 15.29C12.617 15.1963 12.5064 15.1219 12.3846 15.0711C12.2627 15.0203 12.132 14.9942 12 14.9942C11.868 14.9942 11.7373 15.0203 11.6154 15.0711C11.4936 15.1219 11.383 15.1963 11.29 15.29ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17316C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87103 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21446 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12 7C11.4731 6.99966 10.9553 7.13812 10.4989 7.40144C10.0425 7.66476 9.66347 8.04366 9.4 8.5C9.32765 8.61382 9.27907 8.74109 9.25718 8.87418C9.23529 9.00726 9.24054 9.14339 9.27263 9.27439C9.30472 9.40538 9.36297 9.52853 9.44389 9.63643C9.5248 9.74433 9.62671 9.83475 9.74347 9.90224C9.86024 9.96974 9.98945 10.0129 10.1233 10.0292C10.2572 10.0454 10.393 10.0345 10.5225 9.99688C10.6521 9.9593 10.7727 9.89591 10.8771 9.81052C10.9814 9.72513 11.0675 9.6195 11.13 9.5C11.2181 9.34739 11.345 9.22078 11.4977 9.13298C11.6505 9.04517 11.8238 8.9993 12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10C13 10.2652 12.8946 10.5196 12.7071 10.7071C12.5196 10.8946 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V12.82C13.6614 12.58 14.2174 12.1152 14.5708 11.5069C14.9242 10.8985 15.0525 10.1853 14.9334 9.49189C14.8143 8.79849 14.4552 8.16902 13.919 7.71351C13.3828 7.25801 12.7035 7.00546 12 7Z" />
                </svg>
              </el-tooltip>
              <div v-if="$auth.user.is_vip" >
                <p  class="user-profile-gift__price"><img src="/diamond.svg" alt=""> {{gift.price}}</p>
              </div>
              <div v-else>
                <p v-if="!gift.is_for_vip" class="user-profile-gift__price"><img src="/diamond.svg" alt=""> {{gift.price}}</p>
                <p v-else class="user-profile-gift__price"><svg width="71" height="18" viewBox="0 0 71 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 9.79962C6.28451 9.79962 6.07785 9.88391 5.92548 10.0339C5.7731 10.184 5.6875 10.3875 5.6875 10.5997V12.9998C5.6875 13.212 5.7731 13.4155 5.92548 13.5655C6.07785 13.7155 6.28451 13.7998 6.5 13.7998C6.71549 13.7998 6.92215 13.7155 7.07452 13.5655C7.2269 13.4155 7.3125 13.212 7.3125 12.9998V10.5997C7.3125 10.3875 7.2269 10.184 7.07452 10.0339C6.92215 9.88391 6.71549 9.79962 6.5 9.79962ZM10.5625 6.59945H4.0625V4.99937C4.06132 4.52429 4.20334 4.05956 4.47059 3.66402C4.73783 3.26848 5.11828 2.95993 5.56374 2.77746C6.0092 2.59498 6.49965 2.54678 6.97295 2.63896C7.44625 2.73114 7.88113 2.95955 8.2225 3.29528C8.52796 3.60255 8.74644 3.98317 8.85625 4.39933C8.88292 4.50125 8.92972 4.59699 8.99397 4.68109C9.05823 4.76519 9.13867 4.83601 9.23072 4.8895C9.32276 4.94299 9.42461 4.9781 9.53044 4.99283C9.63626 5.00757 9.744 5.00163 9.8475 4.97536C9.951 4.9491 10.0482 4.90302 10.1336 4.83975C10.2191 4.77649 10.291 4.69727 10.3453 4.60664C10.3996 4.516 10.4353 4.41572 10.4502 4.31152C10.4652 4.20731 10.4592 4.10122 10.4325 3.99931C10.2474 3.30712 9.88027 2.67519 9.36812 2.16722C8.79952 1.60908 8.07571 1.22936 7.28809 1.07599C6.50047 0.922631 5.68436 1.00251 4.94281 1.30554C4.20126 1.60856 3.56753 2.12116 3.12163 2.77859C2.67573 3.43602 2.43767 4.2088 2.4375 4.99937V6.59945C1.79103 6.59945 1.17105 6.85232 0.713927 7.30243C0.256807 7.75254 0 8.36302 0 8.99958V14.5999C0 15.2364 0.256807 15.8469 0.713927 16.297C1.17105 16.7471 1.79103 17 2.4375 17H10.5625C11.209 17 11.829 16.7471 12.2861 16.297C12.7432 15.8469 13 15.2364 13 14.5999V8.99958C13 8.36302 12.7432 7.75254 12.2861 7.30243C11.829 6.85232 11.209 6.59945 10.5625 6.59945ZM11.375 14.5999C11.375 14.8121 11.2894 15.0156 11.137 15.1656C10.9847 15.3156 10.778 15.3999 10.5625 15.3999H2.4375C2.22201 15.3999 2.01535 15.3156 1.86298 15.1656C1.7106 15.0156 1.625 14.8121 1.625 14.5999V8.99958C1.625 8.78739 1.7106 8.5839 1.86298 8.43386C2.01535 8.28382 2.22201 8.19953 2.4375 8.19953H10.5625C10.778 8.19953 10.9847 8.28382 11.137 8.43386C11.2894 8.5839 11.375 8.78739 11.375 8.99958V14.5999Z" fill="#CECFDF"/>
                  <path d="M26.0928 14.6787H25.1221V6.98145H28.417C27.7334 6.63053 27.027 6.27962 26.2979 5.92871L26.8584 5.27246C27.5739 5.61882 28.2461 5.94922 28.875 6.26367L31.3154 4.98535H24.9033V4.11035H33.1201V5.02637L29.8184 6.74219C29.9779 6.82422 30.1328 6.90397 30.2832 6.98145H33.2158V13.1611C33.2158 14.2002 32.7373 14.7197 31.7803 14.7197C31.3063 14.7197 30.7913 14.7061 30.2354 14.6787C30.1898 14.3324 30.1214 13.9814 30.0303 13.626C30.6045 13.6898 31.0967 13.7217 31.5068 13.7217C31.999 13.7217 32.2451 13.4847 32.2451 13.0107V12.3408H29.6338V14.4736H28.6631V12.3408H26.0928V14.6787ZM26.2432 15.4307L29.6475 15.4854L34.2002 15.376C34.0999 15.6768 33.9723 16.0368 33.8174 16.4561L29.292 16.4834L26.0381 16.4014C24.4886 16.3831 23.404 15.8499 22.7842 14.8018C22.4105 15.1481 21.8636 15.7588 21.1436 16.6338L20.583 15.499C21.3896 14.7197 21.973 14.1615 22.333 13.8242V9.22363H20.7061V8.21191H23.3857V14.0566C23.9463 14.9635 24.8988 15.4215 26.2432 15.4307ZM22.292 3.61816C22.7568 4.18327 23.3949 5.0446 24.2061 6.20215L23.2354 6.88574C22.4971 5.72819 21.891 4.83496 21.417 4.20605L22.292 3.61816ZM32.2451 7.85645H29.6338V9.22363H32.2451V7.85645ZM29.6338 11.4658H32.2451V10.0986H29.6338V11.4658ZM26.0928 9.22363H28.6631V7.85645H26.0928V9.22363ZM26.0928 11.4658H28.6631V10.0986H26.0928V11.4658ZM34.7334 9.94824H48.1455V11.083H34.7334V9.94824ZM42.7861 12.4639L43.5928 11.7256C45.1969 13.1839 46.6553 14.5693 47.9678 15.8818L46.9834 16.7842C45.68 15.335 44.2809 13.8949 42.7861 12.4639ZM39.1357 11.6982L40.0928 12.3955C38.7074 14.0635 37.2627 15.5446 35.7588 16.8389C35.5309 16.5837 35.2939 16.333 35.0479 16.0869L34.9248 15.9639C36.4925 14.7243 37.8962 13.3024 39.1357 11.6982ZM43.7705 8.62207C44.846 6.98145 45.7438 5.42741 46.4639 3.95996L47.5576 4.46582C46.7008 6.0791 45.7666 7.66048 44.7549 9.20996L43.7705 8.62207ZM39.7646 3.74121L40.8447 3.41309C41.4736 5.12663 42.0251 6.73991 42.499 8.25293L41.3096 8.6084C40.863 6.91309 40.348 5.29069 39.7646 3.74121ZM35.4854 4.79395L36.4697 4.24707C37.3083 5.66895 38.0967 7.11361 38.835 8.58105L37.7275 9.16895C36.9801 7.55566 36.2327 6.09733 35.4854 4.79395ZM57.7637 4.41113L53.874 15H52.3564L48.542 4.41113H50.0596L52.9102 12.6895C53.0059 12.9629 53.0765 13.2796 53.1221 13.6396H53.1562C53.1927 13.3252 53.2725 13.0039 53.3955 12.6758L56.3008 4.41113H57.7637ZM60.6279 4.41113V15H59.2607V4.41113H60.6279ZM64.7432 11.042V15H63.376V4.41113H66.3838C67.5277 4.41113 68.4141 4.68685 69.043 5.23828C69.6764 5.78971 69.9932 6.57812 69.9932 7.60352C69.9932 8.64258 69.624 9.48568 68.8857 10.1328C68.1475 10.7754 67.2246 11.0785 66.1172 11.042H64.7432ZM64.7432 5.61426V9.83887H66.0078C66.8418 9.83887 67.4753 9.65202 67.9082 9.27832C68.3411 8.90007 68.5576 8.36003 68.5576 7.6582C68.5576 6.29557 67.751 5.61426 66.1377 5.61426H64.7432Z" fill="#CECFDF"/>
                </svg>
                </p>
              </div>
            </div>
          </div>
        </el-radio>
      </el-radio-group>
      <div class="user-profile-gifts__message">
        <el-input v-model="gift_message" placeholder="输入女孩的愿望或信息"></el-input>
        <a href="#" class="btn btn-l-blue" :class="{'btnDisabled':!gift_message}" @click.prevent="sendGift">选择礼物</a>
      </div>
    </div>
    <div class="stream-best-donaters">
      <h3>捐款</h3>
      <div class="stream-best-donaters__top"></div>
      <div class="stream-best-donaters__top3">
        <div v-for="(donater,index) in top_donaters" :key="donater.id" class="stream-best-donaters__top3--item">
          <p class="stream-best-donaters__top3--item--place">1</p>
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
</template>

<script>
  export default {
    layout: 'girl_profile',
    scrollToTop: false,
    auth: false,
    async fetch({store,params}){
      await store.dispatch('girl_profile/fetchGirl',params.nickname)
    },
    async asyncData({$axios,params}){
      const response_all_gifts = await $axios.get(`/api/v1/gift/get_all`)
      const response_girl_gifts = await $axios.get(`/api/v1/gift/get_user_gifts?nickname=${params.nickname}`)
      const response_donaters = await $axios.get(`/api/v1/gift/get_user_top3_donaters?nickname=${params.nickname}`)
      const user_gifts = response_girl_gifts.data
      const top_donaters = response_donaters.data
      const all_gifts = response_all_gifts.data
      return {user_gifts,top_donaters,all_gifts}
    },
    data() {
      return {
        giftDialogVisible:false,

        gift_message:null,
        selected_gift_img:null,
        selected_gift_price:null,
        selected_gift_id:null,
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
      async getGifts(){
        //получаем все подарки пользователя по nickname
        const response = await this.$axios.get(`/api/v1/gift/get_user_gifts?nickname=${this.$route.params.nickname}`)
        this.user_gifts = response.data
      },
      async getDonaters(){
        //получаем топ3 донатера для пользователя по его nickname
        const response = await this.$axios.get(`/api/v1/gift/get_user_top3_donaters?nickname=${this.$route.params.nickname}`)
        this.top_donaters = response.data
      },
      async sendGift(){
        //отправляем подарок пользователю по nickname
        console.log('user.balance',this.$auth.user.balance)
        console.log('gift_price',this.selected_gift_price)
        if(this.$auth.user.balance < this.selected_gift_price){
          this.notify('Ошибка','Не хватает средств','error')
          this.selected_gift_id = null
          this.gift_message = null
          return
        }
        await this.$axios.post(`/api/v1/gift/send_gift_to_user`,{
          gift_id:this.selected_gift_id,
          nickname:this.$route.params.nickname,
          message:this.gift_message,
          stream:false
        })
        this.notify('Успешно','Подарок отправлен','success')
        await this.$auth.fetchUser()
        this.selected_gift_id = null
        this.gift_message = null
        await this.getGifts()
        await this.getDonaters()

      },
    }
  }
</script>


