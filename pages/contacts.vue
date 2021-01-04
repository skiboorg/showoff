<template>
  <section class="streams-page">
    <div class="container">
      <div class="page-top">
        <h3>反馈</h3>
        <p @click="$router.push('/')"><svg width="8" height="10" viewBox="0 0 8 10" fill="#C1343D" xmlns="http://www.w3.org/2000/svg">
          <path d="M-2.18557e-07 5L7.5 0.669872L7.5 9.33013L-2.18557e-07 5Z" fill="#C1343D"/>
        </svg>
          返回专辑
        </p>
      </div>
      <div class="contacts-wrapper">
        <div class="contacts-left user-profile-block">
          <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad est ex facilis, itaque necessitatibus pariatur unde. Deserunt dicta dolorum eligendi id laudantium nisi quaerat, quia temporibus totam? Dolore et, repellendus?</p>
          <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad est ex facilis, itaque necessitatibus pariatur unde. Deserunt dicta dolorum eligendi id laudantium nisi quaerat, quia temporibus totam? Dolore et, repellendus?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad est ex facilis, itaque necessitatibus pariatur unde. Deserunt dicta dolorum eligendi id laudantium nisi quaerat, quia temporibus totam? Dolore et, repellendus?</p>

        </div>
        <div class="contacts-right user-profile-block">
          <el-form ref="form" :rules="rules" :model="formData" label-width="120px" label-position="right">
            <el-form-item label="您的姓名" prop="name">
              <el-input v-model="formData.name" placeholder="请填写您的姓名"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="formData.email" placeholder="请输入您常用的电子邮箱"></el-input>
            </el-form-item>
            <el-form-item label="选择消息类型" >
              <el-select v-model="value" placeholder="选择消息类型">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="您的姓名" >
              <el-input v-model="formData.name" placeholder="请填写您的姓名"></el-input>
            </el-form-item>
            <el-form-item label="您的留言文字">
              <el-input type="textarea" :rows="5" placeholder="您的留言文字" v-model="formData.text"></el-input>
            </el-form-item>


          </el-form>
          <div class="text-center">
            <div class="btn btn-l-blue" @click="sendForm">反馈</div>
          </div>


        </div>

      </div>


    </div>
  </section>
</template>

<script>

export default {

  auth: false,
  data(){
    return {
       options: [{
          value: 'Option1',
          label: '技术问题'
        }, {
          value: 'Option2',
          label: '有关门户操作的问题'
        }, {
          value: 'Option3',
          label: '把招工广告'
        }, {
          value: 'Option4',
          label: '希望发展和新服务'
        }],
        value: '',
      formData:{
        name:null,
        email:null,
        phone:null,
        text:null
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        email:[
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ]

      }
    }
  },
  methods:{
    async sendForm(){
      const response = await this.$axios.post(`/api/v1/feedback/add_feedback`,this.formData)
      console.log(response)
    }


  }
};
</script>
