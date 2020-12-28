<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Как пользоваться стримами?</h3>
      <p class="mb-20">В данном разделе вы видите инструкцию по созданию и настройке своей трансляции. Если у вас возникли вопросы или вам нужна помощь - свяжитесь с нами!</p>
      <p class="mb-20">Ваш ключ трансляции: <strong>{{this.$auth.user.suid}}</strong> <el-link @click="copyToClipboard($auth.user.suid,'suid')">{{copyLinkText}}</el-link></p>
      <el-collapse v-model="activeAccordion">
        <el-collapse-item title="Как запустить трансляцию" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
          <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
        </el-collapse-item>
        <el-collapse-item title="Правила ведения трансляции" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Запланированные стримы</h3>
      <el-table :data="streams" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <p class="mb-20">Описание: {{ props.row.description }}</p>
            <img :src="props.row.image" alt="">
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Название" ></el-table-column>
        <el-table-column label="Дата" width="180">
          <template slot-scope="scope">
            <p>{{new Date(scope.row.date).toLocaleString()}}</p>
          </template>
        </el-table-column>
        <el-table-column  label="VIP?" >
          <template slot-scope="scope">
            <p>{{scope.row.is_vip? 'Да' : 'Нет'}}</p>
          </template>
        </el-table-column>
        <el-table-column  label="Приватный?" >
          <template slot-scope="scope">
            <p>{{scope.row.is_private? 'Да' : 'Нет'}}</p>
          </template>
        </el-table-column>
        <el-table-column  label="Действие" width="200">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="Удалить стрим" placement="top-start">
              <el-button type="danger" size="mini" @click="updateStream(scope.row.id,'delete')"><i class="el-icon-delete"></i></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Скопировать ссылку на стрим в буфер обмена" placement="top-start">
              <el-button type="info" size="mini" @click="copyToClipboard(scope.row.url,'stream_link')"><i class="el-icon-link"></i></el-button>
            </el-tooltip>
            <el-tooltip v-if="!scope.row.is_active" class="item" effect="dark" content="Активировить страницу со стримом" placement="top-start">
              <el-button type="success" size="mini" @click="updateStream(scope.row.id,'start')" ><i class="el-icon-video-play"></i></el-button>
            </el-tooltip>
            <el-tooltip v-else class="item" effect="dark" content="Деактивировить страницу со стримом" placement="top-start">
              <el-button type="danger" size="mini" @click="updateStream(scope.row.id,'stop')"><i class="el-icon-video-pause"></i></el-button>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="user-profile-block">

      <h3 class="user-profile-block__title">Новый стрим</h3>
      <el-input class="mb-10" v-model="newStreamData.name" placeholder="Название стрима"></el-input>
      <el-input class="mb-10" type="textarea"  :rows="4" v-model="newStreamData.description" placeholder="Описание стрима"></el-input>
      <div style="display: flex;align-items: center;justify-content: space-between" class="mb-10">
        <el-date-picker  v-model="newStreamData.date" type="datetime" placeholder="Дата и время начала"></el-date-picker>
        <div class="">
          <el-checkbox v-model="newStreamData.is_vip">Для вип</el-checkbox>
          <el-checkbox v-model="newStreamData.is_private">Приватный</el-checkbox>
        </div>
      </div>
      <div class="mb-30">
        <p class="mb-20">Изображение</p>
        <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleStreamImage">
          <div style="padding:5px; display: flex; align-items: center;justify-content: center;width: 300px;height: 200px;border: 1px dashed #cecece">
            <img style="object-fit: cover; height: 200px; width: 300px;" v-if="newStreamImgPreview" :src="newStreamImgPreview" alt="" class="avatar">
            <p v-else style="font-size: 30px">+</p>
          </div>
        </el-upload>
      </div>

      <el-button type="success" @click="addStream">Добавить</el-button>

    </div>

  </div>
</template>

<script>
  export default {
    layout: 'streamer_lk',
    scrollToTop: false,
    auth: true,
    async asyncData({$axios,$auth}){
      try{
        const user_streams = await $axios.get(`/api/v1/stream/get_streams_by_user_nickname?nickname=${$auth.user.nickname}`)
        const streams = user_streams.data
        return {streams}
      }catch (e) {
        const err = 404
        return {err}
      }
    },
    data() {
      return {
        activeAccordion:0,
        copyLinkText:'скопировать в буфер',
        newStreamImg:null,
        newStreamImgPreview:null,
        newStreamData:{
          name:null,
          description:null,
          is_vip:false,
          is_private:false,
          date:null
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
      copyToClipboard(text,type){
        if (type==='stream_link'){
          navigator.clipboard.writeText(`${window.location.origin}/stream/${text}`).then(function() {
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
        }else{
          navigator.clipboard.writeText(text).then(function() {
            console.log('Async: Copying to clipboard was successful!');

          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
          this.copyLinkText = 'скопировано'
        }


      },
      async updateStream(stream_id,action){
        await this.$axios.post(`/api/v1/stream/update_stream`,{id:stream_id,action:action})
        this.notify('Успешно','Операция успешно выполнена','success')
        this.getStreams()

      },
      async addStream(){
        if (!this.newStreamData.name || !this.newStreamData.date || !this.newStreamImg  ){
          this.notify('Ошибка','Название,дата и изображение обязательные поля','error')
          return
        }
        let formData = new FormData()
        formData.set('data', JSON.stringify(this.newStreamData))
        //formData.set('description', JSON.stringify(this.newStreamData.description))
        formData.set('image',this.newStreamImg)
        await this.$axios({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: '/api/v1/stream/add_stream',
          data: formData
        }).then((response) => {
          this.notify('Успешно','Стрим добавлен','success')
          this.getStreams()
        })
          .catch(function (error) {
            // handle error
          })
          .then(function () {
            // always executed
          });
      },
      async getStreams(){
        const response = await this.$axios.get(`/api/v1/stream/get_streams_by_user_nickname?nickname=${this.$auth.user.nickname}`)
        this.streams = response.data
      },
      handleStreamImage(res, file) {
        this.newStreamImgPreview = URL.createObjectURL(file.raw);
        this.newStreamImg = file.raw
      },
    }
  }
</script>


