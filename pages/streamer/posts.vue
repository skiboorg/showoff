<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Опубликованные посты</h3>

      <el-table :data="posts" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <p class="font-bold mb-10">Содержание:</p>
            <p class="mb-20">{{ props.row.text }}</p>
            <hr>
            <p class="font-bold mb-10">Комментарии:</p>
            <div class="user-profile-post--preview" v-for="(comment,index) in props.row.comments" :key="comment.id">
              <div class="user-profile-post--preview__inner">
                <p>{{index+1}}</p>
                <img :src="comment.owner.avatar" alt="">
              <p>{{comment.owner.fio}}</p>
              <p>{{comment.owner.nickname}}</p>
              </div>
              <p class="user-profile-post--preview__text">
                <span><i class="el-icon-close"></i></span>
                {{comment.text}}</p>
            </div>

          </template>
        </el-table-column>
        <el-table-column  label="Обложка">
            <template slot-scope="scope">
              <img class="streamerAlbumTab-table-img__preview" :src="scope.row.image" alt="">
            </template>
          </el-table-column>

        <el-table-column label="Дата" width="180">
          <template slot-scope="scope">
            <p>{{new Date(scope.row.created_at).toLocaleString()}}</p>
          </template>
        </el-table-column>
        <el-table-column  label="Комментариев" >
          <template slot-scope="scope">
            <p>{{scope.row.comments_count}}</p>
          </template>
        </el-table-column>
        <el-table-column  label="Лайков" >
          <template slot-scope="scope">
            <p>{{scope.row.likes.length}}</p>
          </template>
        </el-table-column>
        <el-table-column  label="Действие" >
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="Удалить пост" placement="top-start">
              <el-button type="danger" size="mini" ><i class="el-icon-delete"></i></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Добавить пост</h3>
      <p class="mb-20">Изображение к посту</p>
      <el-upload class="avatar-uploader mb-20" action="" :show-file-list="false" :on-success="handlePostImage">
        <div style="padding:5px; display: flex; align-items: center;justify-content: center;width: 300px;height: 200px;border: 1px dashed #cecece">
          <img v-if="newPost.image" :src="newPost.image" alt="" class="avatar">
          <p v-else style="font-size: 30px">+</p>
        </div>
      </el-upload>
      <el-input class="mb-20"  type="textarea" :rows="4"  placeholder="Содержание" v-model="newPost.text">
      </el-input>

    <el-button type="primary" @click="addNewPost">Добавить</el-button>

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
        const user_posts = await $axios.get(`/api/v1/post/get_posts_by_user_nickname?nickname=${$auth.user.nickname}`)
        const posts = user_posts.data
        return {posts}
      }catch (e) {
        const err = 404
        return {err}
      }
    },
    data() {
      return {
        newPost:{
          text:null,
          image:null
        },
        newPostImage:null,
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
      async getPosts(){
        const response = await this.$axios.get(`/api/v1/post/get_posts_by_user_nickname?nickname=${this.$auth.user.nickname}`)
        this.posts = response.data
      },
      async addNewPost(){
        let formData = new FormData()
        formData.set('text', JSON.stringify(this.newPost.text))
        formData.set('image',this.newPostImage)
        await this.$axios({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: '/api/v1/post/add_post',
          data: formData
        }).then((response) => {
          this.notify('Успешно','Пост добавлен','success')
          this.getPosts()
        })
          .catch(function (error) {
            // handle error
          })
          .then(function () {
            // always executed
          });
      },
      handlePostImage(res, file) {
        this.newPost.image = URL.createObjectURL(file.raw);
        this.newPostImage = file.raw

      },
    }
  }
</script>


