<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Личные данные</h3>
      <el-form :label-position="'right'" label-width="100px" :model="userData">
        <el-form-item label="ФИО">
          <el-input v-model="userData.fio"></el-input>
        </el-form-item>
        <el-form-item label="Ник">
          <el-input v-model="userData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="Город">
          <el-input v-model="userData.city" placeholder="Город"></el-input>
        </el-form-item>
        <el-form-item label="Образование">
          <el-input v-model="userData.education" placeholder="Образование"></el-input>
        </el-form-item>
        <el-form-item label="Профессия">
          <el-input v-model="userData.work_place" placeholder="Профессия"></el-input>
        </el-form-item>
        <el-form-item label="Д.Р.">
          <el-date-picker v-model="userData.birthday" type="date" placeholder="День рождения"
                          format="yyyy/MM/dd" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Обо мне">
          <el-input type="textarea" :rows="2" placeholder="Обо мне" v-model="userData.about"></el-input>
        </el-form-item>
        <el-form-item label="Интересы">
          <el-input type="textarea" :rows="2" placeholder="Интересы" v-model="userData.interests"></el-input>
        </el-form-item>
        <el-form-item label="Искусство">
          <el-input type="textarea" :rows="2" placeholder="Искусство" v-model="userData.interests_additional"></el-input>
        </el-form-item>
      </el-form>
      <p class="btn btn-l-blue" @click="updateUser">Сохранить</p>


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
        }).then((response) => {
          this.notify('Успешно','Данные обновлены','success')
          this.$auth.fetchUser()
        })
          .catch(function (error) {
            // handle error
          })
          .then(function () {
            // always executed
          });
      },
    }
  }
</script>


