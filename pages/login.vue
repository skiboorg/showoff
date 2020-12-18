<template>
  <div class="login-page">
    <div class="login-page__tabs">
      <el-tabs  v-model="activeTab" :stretch="true">

        <el-tab-pane label="Вход" name="loginTab">
          <el-input class="mb-10 mt-40" v-model="userData.wechatid" placeholder="ID"></el-input>
          <el-input class="mb-20" v-model="userData.password" show-password placeholder="pass"></el-input>
          <p class="btn btn-l-blue text-f-14 mb-15" @click="userLogin">Войти</p>
        </el-tab-pane>

        <el-tab-pane label="Регистрация" name="regTab">
          <el-steps   class="login-page__tabs--steps"  :active="activeStep" finish-status="success" simple>
            <el-step  title="Правила"></el-step>
            <el-step  title="Данные"></el-step>
            <el-step title="Завершение"></el-step>
          </el-steps>

          <div v-if="activeStep===0" class="">
            <h3>Правила</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid atque consequatur dolor itaque, neque quam ratione tenetur voluptates! Aspernatur ducimus error iste laborum modi obcaecati quidem saepe! Consequatur, veniam.</p>
            <el-collapse class="mb-20" v-model="activeAccordion" >
              <el-collapse-item title="Как работать на нашей платформе" name="1">
                <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
              </el-collapse-item>
              <el-collapse-item title="Монетизация" name="2">
                <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
              </el-collapse-item>
              <el-collapse-item title="Правила платформы" name="3">
                <div>Simplify the process: keep operating process simple and intuitive;</div>
                <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
              </el-collapse-item>

            </el-collapse>
             <el-checkbox class="mb-20" v-model="agree">Прочитал и согласен с <a style="text-decoration: underline;color: inherit" href="http://localhost:8000/media/p.docx">договором-офертой</a></el-checkbox>
            <p @click="activeStep+=1" :class="{'btnDisabled':!agree}" class="btn btn-l-blue">Далее</p>
          </div>

          <div v-if="activeStep===1" class="">
              <h3>Данные</h3>
            <el-input class="mb-10" v-model="registerData.fio" placeholder="ФИО"></el-input>
            <el-input class="mb-10" v-model="registerData.nickname" placeholder="Nickname"></el-input>
            <el-input class="mb-10 " v-model="registerData.wechatid" placeholder="Логин"></el-input>
            <el-input class="mb-10" v-model="registerData.email" placeholder="Email"></el-input>
            <el-input class="mb-10" v-model="registerData.password1"  placeholder="Пароль" show-password></el-input>
            <el-input class="mb-10" v-model="registerData.password2" placeholder="Пароль повтор" show-password></el-input>

            <div style="display: flex; align-items: center;justify-content: space-between">
              <p @click="activeStep-=1" class="btn btn-l-blue">Назад</p>
              <p @click="activeStep+=1" class="btn btn-l-blue">Далее</p>
            </div>
          </div>

           <div v-if="activeStep===2" class="">
             <h3>Завершение регистрации</h3>
            <p>После нажатии на кнопку "Завершить регистрацию" ваши данные будут проверены, мы с вами свяжемся и активируем вашего пользователя. После завершения регистрации не забудьте наполнить ваш профиль информацией!</p>

             <div style="display: flex; align-items: center;justify-content: space-between">
              <p @click="activeStep-=1" class="btn btn-l-blue">Назад</p>
              <p style="width: 250px" class="btn btn-l-blue text-f-14 mb-15" @click="userRegister">Завершить регистрацию</p>
            </div>
           </div>

        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>
<script>
  export default {
    layout: 'login',
    auth: false,
    data() {
      return {
        activeTab:'loginTab',
        activeAccordion: [],
        activeStep:0,
        agree:false,
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
          this.$router.push(`/`)
        } catch (error) {
          this.notify('Ошибка','Аккаунт еще не активирован или введены неверные данные','error')
        }
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


