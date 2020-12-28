export const state = () => ({
  user: null
})


export const mutations = {
     setUser(state, user) {
      console.log(state)
       state.user = user
  }
}

export const actions = {
  async fetchGirl({commit},nickname){
    console.log('store girl_profile',this.state.girl_profile)
      if (!this.state.girl_profile.user || this.state.girl_profile.user.nickname !==nickname){
         const girl_info = await this.$axios.get(`/api/v1/user/get_user_info_by_nickname?nickname=${nickname}`)
      commit('setUser',girl_info.data)
      console.log('store girl_profile',this.state.girl_profile)
      }

  }
}

export const getters = {
  getUser: (state) => state.user
}

