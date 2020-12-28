<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Альбомы</h3>
      <client-only>
        <el-table :data="albums" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <div class="streamerAlbumTab-table-img__wrapper">
                <label for="ff" class="streamerAlbumTab-table-img__item addNewImage">
                  <input ref="uploadFile" style="display: none" id="ff" type="file" v-on:change="handleUploadNewAlbumImage(props.row.id)">
                  <i class="el-icon-plus"></i>
                </label>
                <div class="streamerAlbumTab-table-img__item" v-for="image in props.row.images" :key="image.id">
                  <p v-if="props.row.id" @click="deleteAlbumImage(props.row.id,image.id)"><i class="el-icon-close"></i></p>
                  <img  :src="image.image" >
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column  label="Обложка">
            <template slot-scope="scope">
              <img class="streamerAlbumTab-table-img__preview" :src="scope.row.image" alt="">
            </template>
          </el-table-column>
          <el-table-column prop="title" label="Название" ></el-table-column>
          <el-table-column prop="subtitle" label="Описание" ></el-table-column>
          <el-table-column  label="VIP?" >
            <template slot-scope="scope">
              <p>{{scope.row.is_vip? 'Да' : 'Нет'}}</p>
            </template>
          </el-table-column>

          <el-table-column  label="Действие" width="200">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="dark" content="Удалить альбом" placement="top-start">
                <el-button type="danger" size="mini" @click="updateAlbum(scope.row,'delete')"><i class="el-icon-delete"></i></el-button>
              </el-tooltip>


            </template>
          </el-table-column>
        </el-table>
      </client-only>

    </div>
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Новый альбом</h3>
      <p class="mb-20">Обложка</p>
      <el-upload class="avatar-uploader mb-25" action="" :show-file-list="false" :on-success="handleAlbumImage">
        <div style="padding:5px; display: flex; align-items: center;justify-content: center;width: 300px;height: 200px;border: 1px dashed #cecece">
          <img style="width: 300px;height: 200px;object-fit: cover" v-if="newAlbumImgPreview" :src="newAlbumImgPreview" alt="" class="avatar">
          <p v-else style="font-size: 30px">+</p>
        </div>
      </el-upload>
      <el-input class="mb-10" v-model="newAlbum.title" placeholder="Название альбома"></el-input>
      <el-input class="mb-10" v-model="newAlbum.subtitle" placeholder="Краткое описание"></el-input>
      <el-checkbox class="mb-10" v-model="newAlbum.is_vip">Для вип?</el-checkbox>
      <h3>Изображения</h3>
      <el-upload
        ref="imgUpload"
        action="#"
        :multiple="true"
        list-type="picture-card"
        :auto-upload="false"
        class="mb-20">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img style="width: 148px;height: 148px;object-fit: cover;" :src="file.url" alt="">
          <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview"  @click="handleAlbumImagePreview(file)" >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span v-if="!disabled"  class="el-upload-list__item-delete" @click="handleAlbumImageRemove(file,file.id)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-button type="success" @click="addAlbum">Добавить</el-button>
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
        const user_albums = await $axios.get(`/api/v1/gallery/get_galleries_by_user_nickname?nickname=${$auth.user.nickname}`)
        const albums = user_albums.data
        return {albums}
      }catch (e) {
        const err = 404
        return {err}
      }
    },
    data() {
      return {
        newAlbum:{
          title:null,
          subtitle:null,
          is_vip:false
        },
        newAlbumImg:null,
        newAlbumImgPreview:null,
        albums:[],
        disabled: false,
        dialogImageUrl: '',
        dialogVisible: false,
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
      async handleUploadNewAlbumImage(album_id){
        let images = this.albums.find(x => x.id === album_id).images
        let file = this.$refs.uploadFile.files[0]

        let formData = new FormData()
         formData.set('gallery_id',album_id)
         formData.set('image',file)
          let response = await this.$axios({
            method: 'post',
            headers:{
              'content-type': 'multipart/form-data'
            },
            url: '/api/v1/gallery/add_img_in_gallery_by_id',
            data: formData
          })
        images.push({id:response.data['new_id'],image:URL.createObjectURL(file)})

      },
      async deleteAlbumImage(album_id,image_id){
        let item_to_delete = this.albums.find(x => x.id === album_id).images.findIndex(x => x.id === image_id)
        this.albums.find(x => x.id === album_id).images.splice(item_to_delete,1)
        await this.$axios.delete(`/api/v1/gallery/delete_image_by_id/${image_id}`)
        this.notify('Успешно','Операция успешно выполнена','success')

      },
      async updateAlbum(album,action){
        await this.$axios.post(`/api/v1/gallery/update_gallery`,{album:album,action:action})
        this.notify('Успешно','Операция успешно выполнена','success')
        this.getAlbums()
      },
      async getAlbums(){
        const response = await this.$axios.get(`/api/v1/gallery/get_galleries_by_user_nickname?nickname=${this.$auth.user.nickname}`)
        this.albums = response.data
      },
      async addAlbum(){
        if (!this.newAlbum.title || !this.newAlbumImg || !this.$refs['imgUpload'].uploadFiles.length ){
          this.notify('Ошибка','Название, обложка и как минимум 1 изображение обязательны','error')
          return
        }
        let formData = new FormData()
        formData.set('data', JSON.stringify(this.newAlbum))
        //formData.set('description', JSON.stringify(this.newStreamData.description))
        formData.set('image',this.newAlbumImg)
        this.$refs['imgUpload'].uploadFiles.forEach(img => {
          formData.append("images", img.raw)
        })
        await this.$axios({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: '/api/v1/gallery/add_gallery',
          data: formData
        }).then((response) => {
          this.notify('Успешно','Альбом добавлен','success')
          this.newAlbum.title = null
          this.newAlbum.subtitle = null
          this.newAlbum.is_vip = false
          this.newAlbumImgPreview = null
          this.$refs['imgUpload'].uploadFiles = null
          this.getAlbums()
        })
          .catch(function (error) {
            // handle error
          })
          .then(function () {
            // always executed
          });
      },
      handleAlbumImage(res, file) {
        this.newAlbumImgPreview = URL.createObjectURL(file.raw);
        this.newAlbumImg = file.raw

      },
      handleAlbumImageRemove(file,i) {
        console.log(file.uid);
        console.log(this.$refs['imgUpload'].uploadFiles)
        let x=0
        for (let i of this.$refs['imgUpload'].uploadFiles){
          if (i.uid === file.uid){
            console.log(x)
            this.$refs['imgUpload'].uploadFiles.splice(x,1)
          }
          x+=1
        }
      },
      handleAlbumImagePreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    }
  }
</script>


