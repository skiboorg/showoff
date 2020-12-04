<template>
  <div>
    <section class="banner" style="background: url(/banner.jpg) no-repeat center">
      <div class="banner-inner">
        <h1 class="section-title text-white text-center">来自俄罗斯的美丽女孩在我们的网站上见面并交流！</h1>
        <div class="banner-checks">
          <p class="banner-check">
            <img src="/check-mark.svg" alt="">
            闲聊
          </p>
          <p class="banner-check">
            <img src="/check-mark.svg" alt="">
            每日流
          </p>
          <p class="banner-check">
            <img src="/check-mark.svg" alt="">
            闲聊
          </p>
          <p class="banner-check">
            <img src="/check-mark.svg" alt="">
            每日流
          </p>
        </div>
        <div class="banner-btn text-center">
          <p class="btn btn-l-blue">开始聊天</p>
        </div>

        <img class="banner-decor" src="/banner-decor.png" alt="">
      </div>

    </section>
    <video autoplay>
      fg
    <source
     src="http://95.215.207.100:8080/hls/1234.m3u8"
     type="application/x-mpegURL">
</video>
    <section class="features">
      <div class="container">
        <div class="features-wrapper">
          <h3 class="section-title">您将在我 们的平台上 获得什么？</h3>
          <div class="features-items">
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img1.png" alt="">
              </div>
              <p class="features-item__title">与俄罗斯姑娘交流24/7</p>
              <p class="features-item__text">与女孩见面并交流：全天候私人聊天或社交团体中！ 交流您的思想和心情，帮助俄罗斯姑娘学习有趣的汉语和迷人的中国文化！</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img2.png" alt="">
              </div>
              <p class="features-item__title">参加视频广播</p>
              <p class="features-item__text">参与开发：我们的女孩不断为您播报各种主题！<br>
                共同学习中国语言和文化<br>
                棋盘游戏或电脑游戏<br>
                做运动和瑜伽<br>
                各种爱好：烹饪，绘画或卡拉OK</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img3.png" alt="">
              </div>
              <p class="features-item__title">与俄罗斯姑娘交流24/7</p>
              <p class="features-item__text">与女孩见面并交流：全天候私人聊天或社交团体中！ 交流您的思想和心情，帮助俄罗斯姑娘学习有趣的汉语和迷人的中国文化！</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img4.png" alt="">
              </div>
              <p class="features-item__title">与俄罗斯姑娘交流24/7</p>
              <p class="features-item__text">与女孩见面并交流：全天候私人聊天或社交团体中！ 交流您的思想和心情，帮助俄罗斯姑娘学习有趣的汉语和迷人的中国文化！</p>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="slider-girls">
      <div class="container">
        <h3 class="section-title">我们的女孩正在等你！</h3>
      </div>
      <client-only>
        <swiper class="slider-girls__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide>
            <div @click="$router.push(`/profile/${streamer.nickname}`)" class="slide" v-for="streamer in streamers" :key="streamer.id">
              <img :src="streamer.avatar" alt="">
              <p class="slide-badge badge-name">{{streamer.fio}}</p>
              <p class="slide-badge badge-link">{{streamer.nickname}}</p>
            </div>

          </swiper-slide>



        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </client-only>

    </section>
    <section class="steps">
      <div class="container">

        <div class="steps-wrapper">

          <h3 class="section-title">您将在我们的 平台上获得什么？</h3>
          <div class="steps-item">
            <p class="steps-item__num">01</p>
            <div class="steps-item__group">
              <p class="steps-item__group--top">个人资料</p>
              <p class="steps-item__group--bottom">每个女孩都填写自己的个人资料：她的兴趣，喜欢的电影和音乐类型，书籍和兴趣爱好</p>
            </div>
          </div>
          <div class="steps-item">
            <p class="steps-item__num">02</p>
            <div class="steps-item__group">
              <p class="steps-item__group--top">通讯与广播</p>
              <p class="steps-item__group--bottom">女孩为您启动广播并等待响应！ 给她的每条信息，每一份礼物和关注都很重要。 您越活跃，女孩的评价就越高</p>
            </div>
          </div>
          <div class="steps-item">
            <p class="steps-item__num">03</p>
            <div class="steps-item__group">
              <p class="steps-item__group--top">学习语言和文化</p>
              <p class="steps-item__group--bottom">在交流过程中，女孩学习汉语和中国文化，学习有关这个美丽国家的信息，并准备搬家</p>
            </div>
          </div>
          <div class="steps-item">
            <p class="steps-item__num">决<br>赛</p>
            <div class="steps-item__group">
              <p class="steps-item__group--top">计算收视率和中国之行</p>
              <p class="steps-item__group--bottom">在六个月的最后，我们将计算出评分最高的女孩，并派她们去中国学习和旅行！ 您将能够与他们见面并聊天，参加常规活动并享有独特的体验！</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="slider-streams">
      <div class="container">
        <h3 class="section-title">与女孩预定的广播</h3>
      </div>
      <client-only>
        <swiper class="slider-streams__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide>
            <div class="slide-stream slide-stream-vip" style="background: url(http://placehold.it/380x280) no-repeat center">


              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream" style="background: url(http://placehold.it/380x280) no-repeat center">
              <svg class="slide-stream__play" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style="mix-blend-mode:multiply" opacity="0.4">
                  <circle cx="49" cy="49" r="49" fill="#383845"/>
                </g>
                <path d="M71 49L38 68.0526L38 29.9474L71 49Z" fill="white"/>
              </svg>
              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream slide-stream-vip" style="background: url(http://placehold.it/380x280) no-repeat center">


              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream" style="background: url(http://placehold.it/380x280) no-repeat center">
              <svg class="slide-stream__play" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style="mix-blend-mode:multiply" opacity="0.4">
                  <circle cx="49" cy="49" r="49" fill="#383845"/>
                </g>
                <path d="M71 49L38 68.0526L38 29.9474L71 49Z" fill="white"/>
              </svg>
              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream slide-stream-vip" style="background: url(http://placehold.it/380x280) no-repeat center">


              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream" style="background: url(http://placehold.it/380x280) no-repeat center">
              <svg class="slide-stream__play" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style="mix-blend-mode:multiply" opacity="0.4">
                  <circle cx="49" cy="49" r="49" fill="#383845"/>
                </g>
                <path d="M71 49L38 68.0526L38 29.9474L71 49Z" fill="white"/>
              </svg>
              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream slide-stream-vip" style="background: url(http://placehold.it/380x280) no-repeat center">


              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream" style="background: url(http://placehold.it/380x280) no-repeat center">
              <svg class="slide-stream__play" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style="mix-blend-mode:multiply" opacity="0.4">
                  <circle cx="49" cy="49" r="49" fill="#383845"/>
                </g>
                <path d="M71 49L38 68.0526L38 29.9474L71 49Z" fill="white"/>
              </svg>
              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream slide-stream-vip" style="background: url(http://placehold.it/380x280) no-repeat center">


              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slide-stream" style="background: url(http://placehold.it/380x280) no-repeat center">
              <svg class="slide-stream__play" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style="mix-blend-mode:multiply" opacity="0.4">
                  <circle cx="49" cy="49" r="49" fill="#383845"/>
                </g>
                <path d="M71 49L38 68.0526L38 29.9474L71 49Z" fill="white"/>
              </svg>
              <p class="slide-stream__name">烹饪您最喜欢的食物</p>
              <div class="slide-stream__link">
                <img src="http://placehold.it/380x280" alt="">
                <p class="">@ ivanova</p>
              </div>
            </div>
          </swiper-slide>




        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </client-only>

    </section>
    <section class="pricing">
      <div class="container">
        <h3 class="section-title">我们的房价</h3>
        <div class="pricing-wrapper">
          <div class="pricing-item">
            <div class="pricing-item__decor decor-one">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z" stroke="#23D2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7H7.01" stroke="#23D2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="pricing-item__name price-one">每月固定费用</p>
            <p class="pricing-item__price">124.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
            </div>
            <p class="btn btn-l-blue">找出联络人</p>
          </div>
          <div class="pricing-item">
            <div class="pricing-item__decor decor-two">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4H18V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H7C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V8C2 9.06087 2.42143 10.0783 3.17157 10.8284C3.92172 11.5786 4.93913 12 6 12H7.54C8.44453 13.0091 9.66406 13.6824 11 13.91V16H10C9.20435 16 8.44129 16.3161 7.87868 16.8787C7.31607 17.4413 7 18.2044 7 19V21C7 21.2652 7.10536 21.5196 7.29289 21.7071C7.48043 21.8946 7.73478 22 8 22H16C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21V19C17 18.2044 16.6839 17.4413 16.1213 16.8787C15.5587 16.3161 14.7956 16 14 16H13V13.91C14.3359 13.6824 15.5555 13.0091 16.46 12H18C19.0609 12 20.0783 11.5786 20.8284 10.8284C21.5786 10.0783 22 9.06087 22 8V5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4ZM6 10C5.46957 10 4.96086 9.78929 4.58579 9.41421C4.21071 9.03914 4 8.53043 4 8V6H6V8C6.0022 8.68171 6.12056 9.35806 6.35 10H6ZM14 18C14.2652 18 14.5196 18.1054 14.7071 18.2929C14.8946 18.4804 15 18.7348 15 19V20H9V19C9 18.7348 9.10536 18.4804 9.29289 18.2929C9.48043 18.1054 9.73478 18 10 18H14ZM16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8V4H16V8ZM20 8C20 8.53043 19.7893 9.03914 19.4142 9.41421C19.0391 9.78929 18.5304 10 18 10H17.65C17.8794 9.35806 17.9978 8.68171 18 8V6H20V8Z" fill="white"/>
              </svg>

            </div>
            <p class="pricing-item__name price-two">VIP费是最好的</p>
            <p class="pricing-item__price">999.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
            </div>
            <p class="btn btn-l-blue">找出联络人</p>
          </div>
          <div class="pricing-item">
            <div class="pricing-item__decor decor-one">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 2L19 4M19 4L22 7L18.5 10.5L15.5 7.5M19 4L15.5 7.5M11.39 11.61C11.9064 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.0271 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3355 18.2919 11.9291 18.9012 11.4162 19.4141C10.9033 19.9271 10.294 20.3334 9.62333 20.6099C8.95271 20.8864 8.23403 21.0275 7.50866 21.025C6.7833 21.0226 6.06557 20.8767 5.39682 20.5958C4.72807 20.3148 4.1215 19.9043 3.61203 19.388C2.61016 18.3507 2.05579 16.9614 2.06832 15.5193C2.08085 14.0772 2.65928 12.6977 3.67903 11.678C4.69877 10.6583 6.07824 10.0798 7.52032 10.0673C8.96241 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5" stroke="#EC75F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <p class="pricing-item__name price-three">每月固定费用</p>
            <p class="pricing-item__price">355.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
            </div>
            <p class="btn btn-l-blue">找出联络人</p>
          </div>
        </div>
      </div>
    </section>
    <section class="why-we">
      <div class="container">
        <h3 class="section-title">我们平台的功能</h3>
        <div class="why-we-wrapper">
          <div class="why-we-item">
            <img src="/why-img-1.png" alt="">
            <p>美丽的俄罗斯 姑娘的海洋</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-2.png" alt="">
            <p>交流的机会：聊天和广播</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-3.png" alt="">
            <p>通过兴趣和 爱好互相寻找</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-4.png" alt="">
            <p>开放：在个人资 料中谈论自己</p>
          </div>
        </div>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <div class="faq-wrapper">
          <h3 class="section-title">
            有关我们 平台的问 题的答案
          </h3>
          <div class="faq-items">
            <div class="faq-item">
              <div class="faq-item__top">
                <p>如何使用我们的平台？</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
                  <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
                </svg>
              </div>
              <div class="faq-item__content">
                <div class="faq-item__content--inner">
                   <p>水晶是我们平台上的本地货币。 有了它，您可以方便快捷地向女孩赠送礼物并表现出关注的迹象，成为女孩的粉丝，为女孩自己订购女孩和商品的私人礼物，以及请求个人广播！
                  每月使用我们的平台，您将以常规价格获得300个晶体，以VIP速率获得1200个晶体。 如果您没有足够的货币，您总是可以立即从您的个人账户充值水晶的余额！</p>
                </div>

              </div>
            </div>
            <div class="faq-item faqItemActive">
              <div class="faq-item__top">
                <p>如何使用我们的平台？</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" />
                  <path d="M17 21L13.5359 15L20.4641 15L17 21Z" />
                </svg>
              </div>
              <div class="faq-item__content">
                <div class="faq-item__content--inner" >
                  <p>水晶是我们平台上的本地货币。 有了它，您可以方便快捷地向女孩赠送礼物并表现出关注的迹象，成为女孩的粉丝，为女孩自己订购女孩和商品的私人礼物，以及请求个人广播！
                  每月使用我们的平台，您将以常规价格获得300个晶体，以VIP速率获得1200个晶体。 如果您没有足够的货币，您总是可以立即从您的个人账户充值水晶的余额！</p>
                </div>

              </div>
            </div>
             <div class="faq-item">
              <div class="faq-item__top">
                <p>如何使用我们的平台？</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
                  <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
                </svg>
              </div>
              <div class="faq-item__content">
                <div class="faq-item__content--inner">
                   <p>水晶是我们平台上的本地货币。 有了它，您可以方便快捷地向女孩赠送礼物并表现出关注的迹象，成为女孩的粉丝，为女孩自己订购女孩和商品的私人礼物，以及请求个人广播！
                  每月使用我们的平台，您将以常规价格获得300个晶体，以VIP速率获得1200个晶体。 如果您没有足够的货币，您总是可以立即从您的个人账户充值水晶的余额！</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best-girls">
      <div class="container">
        <h3 class="section-title">有关我们平台的问题的答案</h3>
        <div class="best-girls-wrapper">
          <div class="best-girls-item">
            <div class="best-girls-item__num">1</div>
            <div class="best-girls-item__img">
              <img src="http://placehold.it/300" alt="">
            </div>
            <div class="best-girls-item__score">#4858</div>
            <div class="best-girls-item__name">Liza Markina</div>
            <div class="best-girls-item__link">@markina</div>

          </div>
           <div class="best-girls-item">
            <div class="best-girls-item__num">1</div>
            <div class="best-girls-item__img">
              <img src="http://placehold.it/300" alt="">
            </div>
            <div class="best-girls-item__score">#4858</div>
            <div class="best-girls-item__name">Liwerza Markina</div>
            <div class="best-girls-item__link">@markina</div>

          </div>
           <div class="best-girls-item">
            <div class="best-girls-item__num">1</div>
            <div class="best-girls-item__img">
              <img src="http://placehold.it/300" alt="">
            </div>
            <div class="best-girls-item__score">#4858</div>
            <div class="best-girls-item__name">Lirrrrza Markina</div>
            <div class="best-girls-item__link">@maghjhgjrkina</div>

          </div>
        </div>
      </div>
    </section>


  </div>

</template>

<script>
  //import SocialGroup from '@/components/SocialGroup';


  export default {
    components: {

      //SocialGroup
    },
    async asyncData({$axios,params}){
      console.log(params)
     try{
        const get_streamers = await $axios.get(`/api/v1/user/get_streamers`)
        const streamers = get_streamers.data
        return {streamers}
     }catch (e) {
        const err = 404
        return {err}

     }

    },
    data(){
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 20,
          //centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        }

      }
    },

  }
</script>



