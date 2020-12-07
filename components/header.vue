<template>
  <header class="header" >
    <div class="header-wrapper">
      <div class="header-logo">
        <nuxt-link to="/"><img src="/logo.png" alt=""></nuxt-link>
      </div>
      <div class="header-nav">
        <ul>
          <li><nuxt-link to="/">我们的女孩</nuxt-link></li>
          <li><nuxt-link to="/">社会团体</nuxt-link></li>
          <li><nuxt-link to="/">我们的广播</nuxt-link></li>
          <li @click="logOut">EXIT</li>
        </ul>
      </div>
      <div v-if="this.$auth.loggedIn" class="header-btn">
        <div class="header-btn__balance">
          <div class="header-btn__balance--img">
            <img src="/diamond.svg" alt="">
          </div>
          <p>{{this.$auth.user.balance}}</p>
        </div>
        <div class="header-btn__notify">
          <div class="header-btn__notify--img">
            <div class="header-btn__notify--img--num"><p>2</p></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
        </div>
        <div @click="$router.push('/lk')" class="header-btn__user">
          <img :src="this.$auth.user.avatar" alt="">
          <div class="header-btn__user--name">
            <p>{{this.$auth.user.fio.length > 5 ? this.$auth.user.fio.slice(0,5) + '...' : this.$auth.user.fio }}</p>
            <p>@{{this.$auth.user.nickname}}</p>
          </div>
          <div class="header-btn__user--arrow">
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L0.535898 6.52533e-07L7.4641 4.68497e-08L4 6Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div v-else class="header-btn">
        <div @click="activeTab = 'loginTab',authModal=true" class="header-btn__login">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7105 12.7101C16.6909 11.9388 17.4065 10.881 17.7577 9.68407C18.109 8.48709 18.0784 7.21039 17.6703 6.03159C17.2621 4.85279 16.4967 3.83052 15.4806 3.10698C14.4644 2.38344 13.2479 1.99463 12.0005 1.99463C10.753 1.99463 9.5366 2.38344 8.52041 3.10698C7.50423 3.83052 6.73883 4.85279 6.3307 6.03159C5.92257 7.21039 5.892 8.48709 6.24325 9.68407C6.59449 10.881 7.31009 11.9388 8.29048 12.7101C6.61056 13.3832 5.14477 14.4995 4.04938 15.94C2.95398 17.3806 2.27005 19.0914 2.07048 20.8901C2.05604 21.0214 2.0676 21.1543 2.10451 21.2812C2.14142 21.408 2.20295 21.5264 2.2856 21.6294C2.4525 21.8376 2.69527 21.971 2.96049 22.0001C3.2257 22.0293 3.49164 21.9519 3.69981 21.785C3.90798 21.6181 4.04131 21.3753 4.07049 21.1101C4.29007 19.1553 5.22217 17.3499 6.6887 16.0389C8.15524 14.7279 10.0534 14.0032 12.0205 14.0032C13.9876 14.0032 15.8857 14.7279 17.3523 16.0389C18.8188 17.3499 19.7509 19.1553 19.9705 21.1101C19.9977 21.3558 20.1149 21.5828 20.2996 21.7471C20.4843 21.9115 20.7233 22.0016 20.9705 22.0001H21.0805C21.3426 21.97 21.5822 21.8374 21.747 21.6314C21.9119 21.4253 21.9886 21.1625 21.9605 20.9001C21.76 19.0963 21.0724 17.3811 19.9713 15.9383C18.8703 14.4955 17.3974 13.3796 15.7105 12.7101ZM12.0005 12.0001C11.2094 12.0001 10.436 11.7655 9.7782 11.326C9.12041 10.8865 8.60772 10.2618 8.30497 9.53086C8.00222 8.79995 7.923 7.99569 8.07734 7.21976C8.23168 6.44384 8.61265 5.73111 9.17206 5.1717C9.73147 4.61229 10.4442 4.23132 11.2201 4.07698C11.996 3.92264 12.8003 4.00186 13.5312 4.30461C14.2621 4.60736 14.8868 5.12005 15.3264 5.77784C15.7659 6.43564 16.0005 7.209 16.0005 8.00012C16.0005 9.06099 15.5791 10.0784 14.8289 10.8286C14.0788 11.5787 13.0614 12.0001 12.0005 12.0001Z" fill="white"/>
          </svg>
          <p>授权</p>
        </div>
      </div>
    </div>
    <el-dialog class="authModal" :visible.sync="authModal"  >
      <el-tabs  v-model="activeTab" :stretch="true">
        <el-tab-pane label="登录帐号" name="loginTab">
          <el-input class="mb-10 mt-40" v-model="userData.wechatid" placeholder="id"></el-input>
          <el-input class="mb-20" v-model="userData.password" show-password placeholder="pass"></el-input>
          <div class="authModal-group mb-20">
            <el-checkbox class="text-f-14" v-model="userData.agree">让我签名</el-checkbox>
            <p class="text-f-14 text-l-green c-pointer" >忘记密码了?</p>
          </div>
          <p class="btn btn-l-blue text-f-14 mb-15" @click="userLogin">登录</p>
          <p class="text-center text-f-14">没有帐号? <span class="text-l-green c-pointer">登入</span></p>
        </el-tab-pane>
        <el-tab-pane label="报到" name="regTab">
          <p class="text-center mb-15">付款后，您的注册确认信将发送到您的邮件中。付款时，请在付款说明中注明您的昵称和姓名</p>
          <div v-if="register_step===1">
            <el-input class="mb-10" v-model="registerData.fio" placeholder="fio"></el-input>
            <el-input class="mb-10 " v-model="registerData.wechatid" placeholder="wechatid"></el-input>
            <el-input class="mb-10" v-model="registerData.email" placeholder="email"></el-input>
            <el-input class="mb-10" v-model="registerData.password1" placeholder="password1" show-password></el-input>
            <el-input class="mb-10" v-model="registerData.password2" placeholder="password2" show-password></el-input>
            <el-checkbox class="text-f-14 mb-20" v-model="registerData.agree">让我签名</el-checkbox>
            <p class="btn btn-l-blue text-f-14 mb-15" @click="register_step=2">进一步</p>
            <p class="text-center text-f-14">已经有一个帐户? <span class="text-l-green c-pointer">进来</span></p>
          </div>
          <div v-if="register_step===2">
            <el-input class="mb-20 mt-40" v-model="registerData.nickname" placeholder="nickname"></el-input>
            <div class="authModal-group">
              <div class="">
                <p class="text-f-14 text-grey mb-20">选择关税</p>
                <div class="authModal-group__radio">
                  <el-radio class="mb-40 text-f-14" v-model="registerData.subscribe_type" label="1">1个月费用 <span class="text-l-green">175¥</span></el-radio>
                  <el-radio class="mb-40 text-f-14" v-model="registerData.subscribe_type" label="2">6个月费用 <span class="text-l-green">350¥</span></el-radio>
                  <el-radio v-model="registerData.subscribe_type" label="3">12个月费用 <span class="text-l-green">700¥</span></el-radio>
                </div>
              </div>
              <div class="">
                <p class="mb-15">付款后，您的注册确认信将发送到您的邮件</p>
                <img src="/qr.png" alt="">
              </div>

            </div>
            <p class="btn btn-l-blue text-f-14 mb-15" @click="userRegister">在网站上注册</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

  </header>
</template>

<script>
  export default {
    data() {
      return {
        authModal:false,
        activeTab:'loginTab',
        logInDialogVisible:false,
        registerDialogVisible:false,
        register_step:1,
        userData:{
          email:null,
          password:null,
          agree:null,
        },
        registerData:{
          nickname:null,
          email:null,
          wechatid:null,
          password1:null,
          password2:null,
          agree:null,
          subscribe_type:'1',
        },
      };
    },
    watch: {

    },
    mounted() {
      console.log('this.$auth.user',this.$auth.user)
      if(this.$auth.user){
        this.socket = new WebSocket(process.env.ws_url+'/ws/user/online/')
        this.socket.onopen = () => {
          console.log('ws connected')
          this.socket.send(JSON.stringify({'user_id':this.$auth.user.id,'message':'user online'}))
        }
        this.socket.onmessage = (res) =>{
          let data = JSON.parse(res.data)
          console.log('socket.onmessage', data)
        }
      }
    },
    methods: {
      notify(title,message,type){
        this.$notify({
          title: title,
          message: message,
          type: type
        });
      },
      async userLogin() {
        console.log('dsfd')
        try {
          let response = await this.$auth.loginWith('local', { data: this.userData })
          console.log(response)
          this.authModal=false
        } catch (error) {
          this.notify('Ошибка','Проверьте введеные данные','error')
        }
      },
      logOut(){
        this.socket.send(JSON.stringify({'logout_id':this.$auth.user.id}))
        this.$auth.logout()
      },
      async userRegister(){
        let response =  this.$axios.post('/auth/users/', {
          email:this.registerData.email,
          password:this.registerData.password2,
          fio:this.registerData.fio,
          wechatid:this.registerData.wechatid,
          nickname:this.registerData.nickname,
        })
        console.log(response)
      }

    }
  }
</script>


