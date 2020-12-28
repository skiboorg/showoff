<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <div @click="$router.push('/lk/settings')" class="user-profile-block__edit">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="3" fill="#F8F8FB"/>
          <path d="M8 20.9999H12.24C12.3716 21.0007 12.5021 20.9755 12.6239 20.9257C12.7457 20.8759 12.8566 20.8026 12.95 20.7099L19.87 13.7799L22.71 10.9999C22.8037 10.907 22.8781 10.7964 22.9289 10.6745C22.9797 10.5527 23.0058 10.422 23.0058 10.2899C23.0058 10.1579 22.9797 10.0272 22.9289 9.90536C22.8781 9.7835 22.8037 9.6729 22.71 9.57994L18.47 5.28994C18.377 5.19621 18.2664 5.12182 18.1446 5.07105C18.0227 5.02028 17.892 4.99414 17.76 4.99414C17.628 4.99414 17.4973 5.02028 17.3754 5.07105C17.2536 5.12182 17.143 5.19621 17.05 5.28994L14.23 8.11994L7.29 15.0499C7.19732 15.1434 7.12399 15.2542 7.07423 15.376C7.02446 15.4979 6.99924 15.6283 7 15.7599V19.9999C7 20.2652 7.10536 20.5195 7.29289 20.707C7.48043 20.8946 7.73478 20.9999 8 20.9999ZM17.76 7.40994L20.59 10.2399L19.17 11.6599L16.34 8.82994L17.76 7.40994ZM9 16.1699L14.93 10.2399L17.76 13.0699L11.83 18.9999H9V16.1699ZM24 22.9999H6C5.73478 22.9999 5.48043 23.1053 5.29289 23.2928C5.10536 23.4804 5 23.7347 5 23.9999C5 24.2652 5.10536 24.5195 5.29289 24.707C5.48043 24.8946 5.73478 24.9999 6 24.9999H24C24.2652 24.9999 24.5196 24.8946 24.7071 24.707C24.8946 24.5195 25 24.2652 25 23.9999C25 23.7347 24.8946 23.4804 24.7071 23.2928C24.5196 23.1053 24.2652 22.9999 24 22.9999Z" fill="#CECFDF"/>
        </svg>

      </div>
      <h3 class="user-profile-block__title">有关我的信息</h3>
      <div class="user-profile-block__info-grid">
        <p>已加入</p>
        <p>{{ new Date(this.$auth.user.date_joined).getFullYear()}}年
          {{ new Date(this.$auth.user.date_joined).getMonth()}}月
          {{ new Date(this.$auth.user.date_joined).getDay()}}</p>
      </div>
      <div class="user-profile-block__info-grid">
        <p>市</p>
        <p>{{this.$auth.user.city}}</p>
      </div>
      <div class="user-profile-block__info-grid">
        <p>国家</p>
        <p>俄罗斯联邦</p>
      </div>
      <div v-if="this.$auth.user.birthday" class="user-profile-block__info-grid">
        <p>年龄</p>
        <p>{{this.$auth.user.years}}</p>
      </div>
      <p v-if="this.$auth.user.about" class="user-profile-block__text">{{this.$auth.user.about}}</p>

    </div>
    <div v-if="this.$auth.user.interests || this.$auth.user.interests_additional" class="user-profile-block">
      <div @click="$router.push('/lk/settings')" class="user-profile-block__edit">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="3" fill="#F8F8FB"/>
          <path d="M8 20.9999H12.24C12.3716 21.0007 12.5021 20.9755 12.6239 20.9257C12.7457 20.8759 12.8566 20.8026 12.95 20.7099L19.87 13.7799L22.71 10.9999C22.8037 10.907 22.8781 10.7964 22.9289 10.6745C22.9797 10.5527 23.0058 10.422 23.0058 10.2899C23.0058 10.1579 22.9797 10.0272 22.9289 9.90536C22.8781 9.7835 22.8037 9.6729 22.71 9.57994L18.47 5.28994C18.377 5.19621 18.2664 5.12182 18.1446 5.07105C18.0227 5.02028 17.892 4.99414 17.76 4.99414C17.628 4.99414 17.4973 5.02028 17.3754 5.07105C17.2536 5.12182 17.143 5.19621 17.05 5.28994L14.23 8.11994L7.29 15.0499C7.19732 15.1434 7.12399 15.2542 7.07423 15.376C7.02446 15.4979 6.99924 15.6283 7 15.7599V19.9999C7 20.2652 7.10536 20.5195 7.29289 20.707C7.48043 20.8946 7.73478 20.9999 8 20.9999ZM17.76 7.40994L20.59 10.2399L19.17 11.6599L16.34 8.82994L17.76 7.40994ZM9 16.1699L14.93 10.2399L17.76 13.0699L11.83 18.9999H9V16.1699ZM24 22.9999H6C5.73478 22.9999 5.48043 23.1053 5.29289 23.2928C5.10536 23.4804 5 23.7347 5 23.9999C5 24.2652 5.10536 24.5195 5.29289 24.707C5.48043 24.8946 5.73478 24.9999 6 24.9999H24C24.2652 24.9999 24.5196 24.8946 24.7071 24.707C24.8946 24.5195 25 24.2652 25 23.9999C25 23.7347 24.8946 23.4804 24.7071 23.2928C24.5196 23.1053 24.2652 22.9999 24 22.9999Z" fill="#CECFDF"/>
        </svg>

      </div>
      <h3 class="user-profile-block__title">我的兴趣爱好</h3>
      <p v-if="this.$auth.user.interests" class="user-profile-block__text mb-20">{{this.$auth.user.interests}}</p>
      <p v-if="this.$auth.user.interests_additional" class="user-profile-block__text mb-20">{{this.$auth.user.interests_additional}}</p>
      <div class="user-profile-block__tags">
        <p v-if="$auth.user.tags.includes(tag.id)" class="user-profile-block__tag" v-for="tag in tags" :key="tag.id">{{tag.name}}</p>

      </div>
    </div>

    <div class="user-profile-block">

      <h3 class="user-profile-block__title">礼物历史</h3>
      <div v-if="!gift.gift.is_special_gift" class="gift-table-item" v-for="gift in sended_gift" :key="gift.id">
        <p class="gift-table-item__date">{{gift.created_at}}</p>
        <div class="gift-table-item__user">
          <img :src="gift.user.avatar" alt="">
          <div class="gift-table-item__user--name">
            <p>{{gift.user.fio}}</p>
            <p>@{{gift.user.nickname}}</p>
          </div>
        </div>
        <div class="gift-table-item__img">
          <img :src="gift.gift.image" alt="">
        </div>

        <div class="gift-table-item__price">
          <img src="/diamond.svg" alt="">
          <p>{{gift.gift.price}}</p>
        </div>

      </div>
    </div>
    <div class="user-profile-block">

      <h3 class="user-profile-block__title">女孩的服务</h3>
      <div v-if="gift.gift.is_special_gift" class="gift-table-item" v-for="gift in sended_gift" :key="gift.id">
        <p class="gift-table-item__date">{{gift.created_at}}</p>
        <div class="gift-table-item__user">
          <img :src="gift.user.avatar" alt="">
          <div class="gift-table-item__user--name">
            <p>{{gift.user.fio}}</p>
            <p>@{{gift.user.nickname}}</p>
          </div>
        </div>
        <div class="gift-table-item__img">
          {{gift.message}}
        </div>

        <div class="gift-table-item__price">
          <img src="/diamond.svg" alt="">
          <p>{{gift.gift.price}}</p>
        </div>
        <div class="gift-table-item__btn">
          <p>+</p>
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
        const user_gift = await $axios.get(`/api/v1/gift/get_user_gifts?nickname=${$auth.user.nickname}`)
        const user_sended_gift = await $axios.get(`/api/v1/gift/get_user_sended_gifts?nickname=${$auth.user.nickname}`)
        const user_tags = await $axios.get(`/api/v1/user/get_user_tags`)
        const user_gifts = user_gift.data
        const sended_gift = user_sended_gift.data
        const tags = user_tags.data

        //const posts = user_posts.data
        //console.log(posts)
        return {user_gifts,sended_gift,tags}
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
      };
    },
    watch: {
    },
    mounted() {
    },
    methods: {
    }
  }
</script>


