<template>
  <div class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">我的个人资料评分</h3>
      <p class="user-profile-block__text mb-30">个人资料评分是您在我们平台上的活动的量度！ 您采取的行动越多，您的评级就越高，您从我们这里获得的奖金和礼物就越多！</p>
      <div class="user-profile-stats">
        <div class="user-profile-stats__bar">
          <div class="user-profile-stats__bar--step progress-step1 " :class="{'progressStepActive': this.$auth.user.level >= 1  }">
            <div data-num="1" class="user-profile-stats__bar--step--top">
              <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.692 39.7342L18 42.0645L19.308 39.7342L22.0541 34.8421C29.2313 32.982 34.5 26.3173 34.5 18.4286C34.5 9.11929 27.1523 1.5 18 1.5C8.84775 1.5 1.5 9.11929 1.5 18.4286C1.5 26.3173 6.76866 32.982 13.9459 34.8421L16.692 39.7342Z"  stroke="white" stroke-width="3"/>
              </svg>
            </div>
            <svg class="user-profile-stats__bar--step--separator" width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="10" fill="white"/>
            </svg>
            <p class="user-profile-stats__bar--step--points">330</p>
            <div data-num="-15%" class="user-profile-stats__bar--step--bottom">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18.5"  stroke="white" stroke-width="3"/>
              </svg>
            </div>
          </div>
          <div class="user-profile-stats__bar--step progress-step2" :class="{'progressStepActive': this.$auth.user.level >= 2}">
            <div data-num="2" class="user-profile-stats__bar--step--top">
              <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.692 39.7342L18 42.0645L19.308 39.7342L22.0541 34.8421C29.2313 32.982 34.5 26.3173 34.5 18.4286C34.5 9.11929 27.1523 1.5 18 1.5C8.84775 1.5 1.5 9.11929 1.5 18.4286C1.5 26.3173 6.76866 32.982 13.9459 34.8421L16.692 39.7342Z"  stroke="white" stroke-width="3"/>
              </svg>
            </div>
            <svg class="user-profile-stats__bar--step--separator" width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="10" fill="white"/>
            </svg>
            <p class="user-profile-stats__bar--step--points">330</p>
            <div data-num="-25%" class="user-profile-stats__bar--step--bottom">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18.5"  stroke="white" stroke-width="3"/>
              </svg>
            </div>


          </div>
          <div class="user-profile-stats__bar--step progress-step3" :class="{'progressStepActive': this.$auth.user.level >= 3}">
            <div data-num="3" class="user-profile-stats__bar--step--top">
              <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.692 39.7342L18 42.0645L19.308 39.7342L22.0541 34.8421C29.2313 32.982 34.5 26.3173 34.5 18.4286C34.5 9.11929 27.1523 1.5 18 1.5C8.84775 1.5 1.5 9.11929 1.5 18.4286C1.5 26.3173 6.76866 32.982 13.9459 34.8421L16.692 39.7342Z"  stroke="white" stroke-width="3"/>
              </svg>
            </div>
            <svg class="user-profile-stats__bar--step--separator" width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="10" fill="white"/>
            </svg>
            <p class="user-profile-stats__bar--step--points">330</p>
            <div data-num="-35%" class="user-profile-stats__bar--step--bottom">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18.5"  stroke="white" stroke-width="3"/>
              </svg>
            </div>


          </div>
          <div class="user-profile-stats__bar--step progress-step4" :class="{'progressStepActive': this.$auth.user.level === 4}">
            <div data-num="4" class="user-profile-stats__bar--step--top">
              <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.692 39.7342L18 42.0645L19.308 39.7342L22.0541 34.8421C29.2313 32.982 34.5 26.3173 34.5 18.4286C34.5 9.11929 27.1523 1.5 18 1.5C8.84775 1.5 1.5 9.11929 1.5 18.4286C1.5 26.3173 6.76866 32.982 13.9459 34.8421L16.692 39.7342Z"  stroke="white" stroke-width="3"/>
              </svg>
            </div>
            <svg class="user-profile-stats__bar--step--separator" width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="10" fill="white"/>
            </svg>
            <p class="user-profile-stats__bar--step--points">330</p>
            <div data-num="-40%" class="user-profile-stats__bar--step--bottom">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18.5"  stroke="white" stroke-width="3"/>
              </svg>
            </div>


          </div>
          <div class="user-profile-stats__mainbar">
            <div class="user-profile-stats__progressbar" :style="'width:' + 100 / this.$auth.user.rating + '%'">
              <p>{{this.$auth.user.rating}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">评分如何变化?</h3>
      <div class="user-profile-stats-info">
        <div class="user-profile-stats-info__item">
          <p>每日注销</p>
          <p>-10</p>
        </div>
        <div class="user-profile-stats-info__item">
          <p>给女孩一个普通的礼物</p>
          <p>+25</p>
        </div>
        <div class="user-profile-stats-info__item">
          <p>给女孩大礼物</p>
          <p>+50</p>
        </div>
        <div class="user-profile-stats-info__item">
          <p>私人流与一个女孩</p>
          <p>+100</p>
        </div>
        <div class="user-profile-stats-info__item">
          <p>向女孩订购图纸</p>
          <p>+30</p>
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
    data() {
      return {
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


