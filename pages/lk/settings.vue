<template>
  <div  class="user-profile-tab">
    <div class="faq-items">
      <div class="faq-item" :class="{'faqItemActive':accordeon1Active}">
        <div class="faq-item__top" @click="accordeon1Active ? accordeon1Active=false : accordeon1Active=true">
          <p>通用设置</p>
          <svg  width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
            <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
          </svg>
        </div>
        <div class="faq-item__content">
          <div class="faq-item__content--inner">
            <el-form ref="form" :model="userData" label-width="120px" label-position="left">
              <el-form-item label="居住地">
                <el-input v-model="userData.city"></el-input>
              </el-form-item>
              <el-form-item label="教育">
                <el-input v-model="userData.education" placeholder="education"></el-input>
              </el-form-item>
              <el-form-item label="我的专业">
                <el-input v-model="userData.work_place" placeholder="work_place"></el-input>
              </el-form-item>
              <el-form-item label="出生日期">
                <el-date-picker v-model="userData.birthday" type="date" placeholder="birthday"
                                format="yyyy/MM/dd" value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="个人信息">
                <el-input type="textarea" :rows="2" placeholder="Please input" v-model="userData.about"></el-input>
              </el-form-item>


            </el-form>
            <div style="margin:unset" class="btn btn-l-blue" @click="updateUser">救</div>
          </div>

        </div>
      </div>
      <div class="faq-item" :class="{'faqItemActive':accordeon2Active}">
        <div class="faq-item__top" @click="accordeon2Active ? accordeon2Active=false : accordeon2Active=true">
          <p>我的兴趣</p>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="16.5" fill="white" />
            <path d="M17 21L13.5359 15L20.4641 15L17 21Z" />
          </svg>
        </div>
        <div class="faq-item__content">
          <div class="faq-item__content--inner" >

            <el-form ref="form" :model="userData" label-width="120px" label-position="left">
              <el-form-item label="兴趣标签">
                <el-select v-model="userData.tags" multiple placeholder="tags">
                  <el-option
                    v-for="item in tags"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>



              <el-form-item label="我的兴趣">
                <el-input type="textarea" :rows="2" placeholder="Please input" v-model="userData.interests"></el-input>
              </el-form-item>
              <el-form-item label="我对艺术的兴趣">
                <el-input type="textarea" :rows="2" placeholder="Please input" v-model="userData.interests_additional"></el-input>
              </el-form-item>

            </el-form>
            <div style="margin:unset" class="btn btn-l-blue" @click="updateUser">救</div>

          </div>

        </div>
      </div>
      <div class="faq-item" :class="{'faqItemActive':accordeon3Active}">
        <div class="faq-item__top" @click="accordeon3Active ? accordeon3Active=false : accordeon3Active=true">
          <p>安全设定</p>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
            <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
          </svg>
        </div>
        <div class="faq-item__content">
          <div class="faq-item__content--inner">
            <el-form ref="form" :model="userData" label-width="120px" label-position="left">

              <el-form-item label="FIO">
                 <el-input placeholder="FIO"  v-model="userData.fio"></el-input>
              </el-form-item >
              <el-form-item label="NICK">
                 <el-input placeholder="NICK"  v-model="userData.nickname"></el-input>
              </el-form-item>

              <el-form-item label="旧密码">
                <el-input v-model="userData.email"></el-input>
              </el-form-item>

              <el-form-item label="新密码">

                <el-input v-model="userData.password1" placeholder="new pass"></el-input>
              </el-form-item>
              <el-form-item label="重复新密码">
                <el-input v-model="userData.password2" placeholder="repeat pass"></el-input>
              </el-form-item>


            </el-form>
            <div style="margin:unset" class="btn btn-l-blue" @click="updateUser">救</div>
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
    async asyncData({$axios,$auth,params}){
      console.log(params)
      try{
        const user_tags = await $axios.get(`/api/v1/user/get_user_tags`)
        const tags = user_tags.data
        return {tags}
      }catch (e) {
        const err = 404
        return {err}

      }

    },

    data() {
      return {
        accordeon1Active:true,
        accordeon2Active:false,
        accordeon3Active:false,
        accordeon4Active:false,
        userData:{
          fio:this.$auth.user.fio,
          nickname:this.$auth.user.nickname,
          birthday:this.$auth.user.birthday,
          years:this.$auth.user.years,
          password1:null,
          password2:null,
          interests:this.$auth.user.interests,
          interests_additional:this.$auth.user.interests_additional,
          work_place:this.$auth.user.work_place,
          education:this.$auth.user.education,
          city:this.$auth.user.city,
          about:this.$auth.user.about,
          tags:this.$auth.user.tags,
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
      async updateUser(){
        // if (this.userData.password1 !== this.userData.password2){
        //   this.$notify({
        //     title: 'Ошибка',
        //     message: 'Пароли не совпадают',
        //     type: 'danger'
        //   });
        //   return
        // }
        let formData = new FormData()
        formData.set('userData', JSON.stringify(this.userData))



        await this.$axios({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: '/api/v1/user/update/',
          data: formData
        })
          this.notify('Успешно','Данные обновлены','success')
          this.$auth.fetchUser()

      },
    }
  }
</script>


