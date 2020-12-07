<template>
  <div id="top">
    <div class="page-fixed">
      <div class="page-fixed__info-btn">
        <p @click="aboutModal=true">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 37.3332C8.87446 37.3332 0.666626 29.1253 0.666626 18.9998C0.666626 8.87434 8.87446 0.666504 19 0.666504C29.1255 0.666504 37.3333 8.87434 37.3333 18.9998C37.3333 29.1253 29.1255 37.3332 19 37.3332ZM19 33.6665C22.8898 33.6665 26.6203 32.1213 29.3709 29.3707C32.1214 26.6202 33.6666 22.8897 33.6666 18.9998C33.6666 15.11 32.1214 11.3795 29.3709 8.62894C26.6203 5.8784 22.8898 4.33317 19 4.33317C15.1101 4.33317 11.3796 5.8784 8.62906 8.62894C5.87853 11.3795 4.33329 15.11 4.33329 18.9998C4.33329 22.8897 5.87853 26.6202 8.62906 29.3707C11.3796 32.1213 15.1101 33.6665 19 33.6665ZM19 15.3332C19.4862 15.3332 19.9525 15.5263 20.2963 15.8701C20.6401 16.214 20.8333 16.6803 20.8333 17.1665V26.3332C20.8333 26.8194 20.6401 27.2857 20.2963 27.6295C19.9525 27.9734 19.4862 28.1665 19 28.1665C18.5137 28.1665 18.0474 27.9734 17.7036 27.6295C17.3598 27.2857 17.1666 26.8194 17.1666 26.3332V17.1665C17.1666 16.6803 17.3598 16.214 17.7036 15.8701C18.0474 15.5263 18.5137 15.3332 19 15.3332ZM19 13.4998C18.5137 13.4998 18.0474 13.3067 17.7036 12.9629C17.3598 12.6191 17.1666 12.1527 17.1666 11.6665C17.1666 11.1803 17.3598 10.714 17.7036 10.3701C18.0474 10.0263 18.5137 9.83317 19 9.83317C19.4862 9.83317 19.9525 10.0263 20.2963 10.3701C20.6401 10.714 20.8333 11.1803 20.8333 11.6665C20.8333 12.1527 20.6401 12.6191 20.2963 12.9629C19.9525 13.3067 19.4862 13.4998 19 13.4998Z" fill="#3E3F5E"/>
          </svg>
          <span>关于我们</span>
        </p>
        <p>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5052 27.5C17.5052 27.1717 17.5699 26.8466 17.6955 26.5433C17.8211 26.24 18.0053 25.9644 18.2374 25.7322C18.4696 25.5001 18.7452 25.3159 19.0485 25.1903C19.3518 25.0647 19.6769 25 20.0052 25C20.3335 25 20.6586 25.0647 20.9619 25.1903C21.2652 25.3159 21.5408 25.5001 21.773 25.7322C22.0051 25.9644 22.1893 26.24 22.3149 26.5433C22.4405 26.8466 22.5052 27.1717 22.5052 27.5C22.5052 28.163 22.2418 28.7989 21.773 29.2678C21.3041 29.7366 20.6682 30 20.0052 30C19.3422 30 18.7063 29.7366 18.2374 29.2678C17.7686 28.7989 17.5052 28.163 17.5052 27.5V27.5ZM20.1252 24C20.9652 24 21.3852 23.4 21.5102 22.4325C21.6102 21.0975 22.0052 20.395 23.6277 19.2825C25.3102 18.095 26.2502 16.5575 26.2502 14.3175C26.2502 11.005 23.9502 8.75 20.5952 8.75C18.0452 8.75 16.1152 9.98 15.3452 11.975C15.1119 12.5199 14.9944 13.1073 15.0002 13.7C15.0002 14.6825 15.5077 15.3 16.3627 15.3C17.0427 15.3 17.5002 14.9325 17.7727 14.025C18.1677 12.545 19.0852 11.7375 20.4577 11.7375C21.9827 11.7375 23.0327 12.8525 23.0327 14.4475C23.0327 15.855 22.5127 16.66 20.9777 17.76C19.4302 18.8425 18.6627 20.045 18.6627 21.86V22.1375C18.6627 23.2075 19.1827 24 20.1252 24Z" fill="#585858"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6813 6.28049L23.3788 3.92049L25.1663 2.17549L26.7213 3.76799L28.9463 3.74049C29.9095 3.72909 30.8651 3.91038 31.7572 4.27371C32.6492 4.63703 33.4596 5.17506 34.1407 5.85614C34.8218 6.53722 35.3598 7.3476 35.7231 8.23964C36.0864 9.13168 36.2677 10.0874 36.2563 11.0505L36.2313 13.2755L37.8213 14.8305C38.51 15.5034 39.0572 16.3072 39.4308 17.1946C39.8044 18.082 39.9968 19.0351 39.9968 19.998C39.9968 20.9608 39.8044 21.914 39.4308 22.8014C39.0572 23.6888 38.51 24.4926 37.8213 25.1655L36.2288 26.7205L36.2563 28.9455C36.2677 29.9086 36.0864 30.8643 35.7231 31.7563C35.3598 32.6484 34.8218 33.4588 34.1407 34.1398C33.4596 34.8209 32.6492 35.3589 31.7572 35.7223C30.8651 36.0856 29.9095 36.2669 28.9463 36.2555L26.7213 36.2305L25.1663 37.8205C24.4934 38.5091 23.6896 39.0563 22.8022 39.4299C21.9148 39.8035 20.9617 39.996 19.9988 39.996C19.036 39.996 18.0829 39.8035 17.1955 39.4299C16.3081 39.0563 15.5043 38.5091 14.8313 37.8205L13.2763 36.228L11.0513 36.2555C10.0882 36.2669 9.13254 36.0856 8.2405 35.7223C7.34846 35.3589 6.53807 34.8209 5.85699 34.1398C5.17591 33.4588 4.63789 32.6484 4.27456 31.7563C3.91124 30.8643 3.72994 29.9086 3.74134 28.9455L3.76634 26.7205L2.17634 25.1655C1.48769 24.4926 0.940494 23.6888 0.5669 22.8014C0.193306 21.914 0.000854492 20.9608 0.000854492 19.998C0.000854492 19.0351 0.193306 18.082 0.5669 17.1946C0.940494 16.3072 1.48769 15.5034 2.17634 14.8305L3.76884 13.2755L3.74134 11.0505C3.72994 10.0874 3.91124 9.13168 4.27456 8.23964C4.63789 7.3476 5.17591 6.53722 5.85699 5.85614C6.53807 5.17506 7.34846 4.63703 8.2405 4.27371C9.13254 3.91038 10.0882 3.72909 11.0513 3.74049L13.2763 3.76549L14.8313 2.17549C15.5043 1.48684 16.3081 0.93964 17.1955 0.566046C18.0829 0.192452 19.036 0 19.9988 0C20.9617 0 21.9148 0.192452 22.8022 0.566046C23.6896 0.93964 24.4934 1.48684 25.1663 2.17549L23.3788 3.92049C22.9387 3.46995 22.413 3.11195 21.8326 2.86753C21.2521 2.6231 20.6287 2.49719 19.9988 2.49719C19.369 2.49719 18.7456 2.6231 18.1651 2.86753C17.5847 3.11195 17.0589 3.46995 16.6188 3.92049L14.3188 6.28049L11.0188 6.24049C10.3893 6.23345 9.76467 6.3523 9.1817 6.59006C8.59872 6.82781 8.06914 7.17968 7.62407 7.62499C7.17899 8.07029 6.8274 8.60006 6.58995 9.18316C6.3525 9.76626 6.23397 10.3909 6.24134 11.0205L6.28134 14.3155L3.92134 16.618C3.47081 17.0581 3.11281 17.5838 2.86838 18.1643C2.62396 18.7447 2.49804 19.3682 2.49804 19.998C2.49804 20.6278 2.62396 21.2513 2.86838 21.8317C3.11281 22.4122 3.47081 22.9379 3.92134 23.378L6.28134 25.678L6.24134 28.978C6.2343 29.6075 6.35315 30.2322 6.59091 30.8151C6.82867 31.3981 7.18053 31.9277 7.62584 32.3728C8.07115 32.8178 8.60091 33.1694 9.18402 33.4069C9.76712 33.6443 10.3918 33.7629 11.0213 33.7555L14.3163 33.7155L16.6188 36.0755C17.0589 36.526 17.5847 36.884 18.1651 37.1284C18.7456 37.3729 19.369 37.4988 19.9988 37.4988C20.6287 37.4988 21.2521 37.3729 21.8326 37.1284C22.413 36.884 22.9387 36.526 23.3788 36.0755L25.6788 33.7155L28.9788 33.7555C29.6084 33.7625 30.233 33.6437 30.816 33.4059C31.399 33.1682 31.9285 32.8163 32.3736 32.371C32.8187 31.9257 33.1703 31.3959 33.4077 30.8128C33.6452 30.2297 33.7637 29.605 33.7563 28.9755L33.7163 25.6805L36.0763 23.378C36.5269 22.9379 36.8849 22.4122 37.1293 21.8317C37.3737 21.2513 37.4996 20.6278 37.4996 19.998C37.4996 19.3682 37.3737 18.7447 37.1293 18.1643C36.8849 17.5838 36.5269 17.0581 36.0763 16.618L33.7163 14.318L33.7563 11.018C33.7634 10.3884 33.6445 9.76382 33.4068 9.18084C33.169 8.59787 32.8172 8.06829 32.3718 7.62321C31.9265 7.17814 31.3968 6.82655 30.8137 6.58909C30.2306 6.35164 29.6059 6.23312 28.9763 6.24049L25.6813 6.28049V6.28049Z" fill="#585858"/>
          </svg>
          <span>关于我们</span>
        </p>
        <p>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 34.9993H6.66663C6.2246 34.9993 5.80067 34.8238 5.48811 34.5112C5.17555 34.1986 4.99996 33.7747 4.99996 33.3327V26.666C4.99996 26.224 4.82436 25.8001 4.5118 25.4875C4.19924 25.1749 3.77532 24.9993 3.33329 24.9993C2.89126 24.9993 2.46734 25.1749 2.15478 25.4875C1.84222 25.8001 1.66663 26.224 1.66663 26.666V33.3327C1.66663 34.6588 2.19341 35.9305 3.13109 36.8682C4.06877 37.8059 5.34054 38.3327 6.66663 38.3327H13.3333C13.7753 38.3327 14.1992 38.1571 14.5118 37.8445C14.8244 37.532 15 37.108 15 36.666C15 36.224 14.8244 35.8001 14.5118 35.4875C14.1992 35.1749 13.7753 34.9993 13.3333 34.9993V34.9993ZM36.6666 24.9993C36.2246 24.9993 35.8007 25.1749 35.4881 25.4875C35.1755 25.8001 35 26.224 35 26.666V33.3327C35 33.7747 34.8244 34.1986 34.5118 34.5112C34.1992 34.8238 33.7753 34.9993 33.3333 34.9993H26.6666C26.2246 34.9993 25.8007 35.1749 25.4881 35.4875C25.1756 35.8001 25 36.224 25 36.666C25 37.108 25.1756 37.532 25.4881 37.8445C25.8007 38.1571 26.2246 38.3327 26.6666 38.3327H33.3333C34.6594 38.3327 35.9311 37.8059 36.8688 36.8682C37.8065 35.9305 38.3333 34.6588 38.3333 33.3327V26.666C38.3333 26.224 38.1577 25.8001 37.8451 25.4875C37.5326 25.1749 37.1086 24.9993 36.6666 24.9993ZM33.3333 1.66602H26.6666C26.2246 1.66602 25.8007 1.84161 25.4881 2.15417C25.1756 2.46673 25 2.89065 25 3.33268C25 3.77471 25.1756 4.19863 25.4881 4.51119C25.8007 4.82375 26.2246 4.99935 26.6666 4.99935H33.3333C33.7753 4.99935 34.1992 5.17494 34.5118 5.4875C34.8244 5.80006 35 6.22399 35 6.66602V13.3327C35 13.7747 35.1755 14.1986 35.4881 14.5112C35.8007 14.8238 36.2246 14.9993 36.6666 14.9993C37.1086 14.9993 37.5326 14.8238 37.8451 14.5112C38.1577 14.1986 38.3333 13.7747 38.3333 13.3327V6.66602C38.3333 5.33993 37.8065 4.06816 36.8688 3.13048C35.9311 2.1928 34.6594 1.66602 33.3333 1.66602V1.66602ZM3.33329 14.9993C3.77532 14.9993 4.19924 14.8238 4.5118 14.5112C4.82436 14.1986 4.99996 13.7747 4.99996 13.3327V6.66602C4.99996 6.22399 5.17555 5.80006 5.48811 5.4875C5.80067 5.17494 6.2246 4.99935 6.66663 4.99935H13.3333C13.7753 4.99935 14.1992 4.82375 14.5118 4.51119C14.8244 4.19863 15 3.77471 15 3.33268C15 2.89065 14.8244 2.46673 14.5118 2.15417C14.1992 1.84161 13.7753 1.66602 13.3333 1.66602H6.66663C5.34054 1.66602 4.06877 2.1928 3.13109 3.13048C2.19341 4.06816 1.66663 5.33993 1.66663 6.66602V13.3327C1.66663 13.7747 1.84222 14.1986 2.15478 14.5112C2.46734 14.8238 2.89126 14.9993 3.33329 14.9993ZM16.6666 8.33268H9.99996C9.55793 8.33268 9.13401 8.50828 8.82145 8.82084C8.50889 9.1334 8.33329 9.55732 8.33329 9.99935V16.666C8.33329 17.108 8.50889 17.532 8.82145 17.8445C9.13401 18.1571 9.55793 18.3327 9.99996 18.3327H16.6666C17.1087 18.3327 17.5326 18.1571 17.8451 17.8445C18.1577 17.532 18.3333 17.108 18.3333 16.666V9.99935C18.3333 9.55732 18.1577 9.1334 17.8451 8.82084C17.5326 8.50828 17.1087 8.33268 16.6666 8.33268ZM15 14.9993H11.6666V11.666H15V14.9993ZM23.3333 18.3327H30C30.442 18.3327 30.8659 18.1571 31.1785 17.8445C31.491 17.532 31.6666 17.108 31.6666 16.666V9.99935C31.6666 9.55732 31.491 9.1334 31.1785 8.82084C30.8659 8.50828 30.442 8.33268 30 8.33268H23.3333C22.8913 8.33268 22.4673 8.50828 22.1548 8.82084C21.8422 9.1334 21.6666 9.55732 21.6666 9.99935V16.666C21.6666 17.108 21.8422 17.532 22.1548 17.8445C22.4673 18.1571 22.8913 18.3327 23.3333 18.3327ZM25 11.666H28.3333V14.9993H25V11.666ZM16.6666 21.666H9.99996C9.55793 21.666 9.13401 21.8416 8.82145 22.1542C8.50889 22.4667 8.33329 22.8907 8.33329 23.3327V29.9993C8.33329 30.4414 8.50889 30.8653 8.82145 31.1779C9.13401 31.4904 9.55793 31.666 9.99996 31.666H16.6666C17.1087 31.666 17.5326 31.4904 17.8451 31.1779C18.1577 30.8653 18.3333 30.4414 18.3333 29.9993V23.3327C18.3333 22.8907 18.1577 22.4667 17.8451 22.1542C17.5326 21.8416 17.1087 21.666 16.6666 21.666ZM15 28.3327H11.6666V24.9993H15V28.3327ZM23.3333 26.666C23.7753 26.666 24.1992 26.4904 24.5118 26.1779C24.8244 25.8653 25 25.4414 25 24.9993C25.442 24.9993 25.8659 24.8238 26.1785 24.5112C26.491 24.1986 26.6666 23.7747 26.6666 23.3327C26.6666 22.8907 26.491 22.4667 26.1785 22.1542C25.8659 21.8416 25.442 21.666 25 21.666H23.3333C22.8913 21.666 22.4673 21.8416 22.1548 22.1542C21.8422 22.4667 21.6666 22.8907 21.6666 23.3327V24.9993C21.6666 25.4414 21.8422 25.8653 22.1548 26.1779C22.4673 26.4904 22.8913 26.666 23.3333 26.666ZM30 21.666C29.5579 21.666 29.134 21.8416 28.8214 22.1542C28.5089 22.4667 28.3333 22.8907 28.3333 23.3327V28.3327C27.8913 28.3327 27.4673 28.5083 27.1548 28.8208C26.8422 29.1334 26.6666 29.5573 26.6666 29.9993C26.6666 30.4414 26.8422 30.8653 27.1548 31.1779C27.4673 31.4904 27.8913 31.666 28.3333 31.666H30C30.442 31.666 30.8659 31.4904 31.1785 31.1779C31.491 30.8653 31.6666 30.4414 31.6666 29.9993V23.3327C31.6666 22.8907 31.491 22.4667 31.1785 22.1542C30.8659 21.8416 30.442 21.666 30 21.666ZM23.3333 28.3327C23.0037 28.3327 22.6814 28.4304 22.4073 28.6136C22.1333 28.7967 21.9196 29.057 21.7935 29.3615C21.6673 29.6661 21.6343 30.0012 21.6986 30.3245C21.763 30.6478 21.9217 30.9448 22.1548 31.1779C22.3879 31.4109 22.6848 31.5697 23.0081 31.634C23.3314 31.6983 23.6666 31.6653 23.9711 31.5391C24.2756 31.413 24.5359 31.1994 24.7191 30.9253C24.9022 30.6512 25 30.329 25 29.9993C25 29.5573 24.8244 29.1334 24.5118 28.8208C24.1992 28.5083 23.7753 28.3327 23.3333 28.3327Z" fill="#585858"/>
          </svg>

          <span>关于我们</span>
        </p>

      </div>
      <a href="#top">
        <div  class="page-fixed__top-btn">
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3633 14.7104L14.3708 0.889623C14.2624 0.764563 14.1284 0.664265 13.9778 0.595526C13.8273 0.526786 13.6637 0.491211 13.4982 0.491211C13.3327 0.491211 13.1691 0.526786 13.0186 0.595526C12.868 0.664265 12.734 0.764563 12.6256 0.889623L0.636717 14.7104C0.600489 14.7521 0.576999 14.8033 0.569045 14.8579C0.561091 14.9125 0.569008 14.9683 0.591853 15.0186C0.614698 15.0688 0.651508 15.1115 0.697899 15.1414C0.74429 15.1713 0.798307 15.1873 0.853514 15.1874H3.78027C3.94648 15.1874 4.10547 15.1151 4.21748 14.9886L12.127 5.87234V26.2187C12.127 26.3777 12.257 26.5078 12.416 26.5078H14.584C14.743 26.5078 14.873 26.3777 14.873 26.2187V5.87234L22.7825 14.9886C22.8909 15.1151 23.0499 15.1874 23.2197 15.1874H26.1465C26.3922 15.1874 26.5259 14.8983 26.3633 14.7104Z" fill="#3E3F5E"/>
          </svg>
        </div>
      </a>
    </div>
    <section class="banner" style="background: url(/banner.png) no-repeat center">
      <div style="display: none" class="banner-inner">
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
        <h3 class="section-title"> <nuxt-link to="/girls">我们的女孩正在等你！</nuxt-link> </h3>
      </div>
      <client-only>
        <swiper class="slider-girls__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide v-for="streamer in streamers" :key="streamer.id">
            <GirlCard :nickname="streamer.nickname" :avatar="streamer.avatar" :fio="streamer.fio"/>
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
        <h3 class="section-title"><nuxt-link to="/streams">与女孩预定的广播</nuxt-link> </h3>
      </div>
      <client-only>
        <swiper class="slider-streams__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide v-for="stream in streams"
           :key="stream.id">
            <StreamCard :name="stream.name"
                        :avatar="stream.avatar"
                        :stream_img="stream.stream_img"
                        :nickname="stream.nickname" :is_vip="stream.is_vip"/>
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
            <div class="faq-item" :class="{'faqItemActive':accordeon1Active}">
              <div class="faq-item__top" @click="accordeon1Active ? accordeon1Active=false : accordeon1Active=true">
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
            <div class="faq-item" :class="{'faqItemActive':accordeon2Active}">
              <div class="faq-item__top" @click="accordeon2Active ? accordeon2Active=false : accordeon2Active=true">
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
            <div class="faq-item" :class="{'faqItemActive':accordeon3Active}">
              <div class="faq-item__top" @click="accordeon3Active ? accordeon3Active=false : accordeon3Active=true">
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
            <div class="faq-item" :class="{'faqItemActive':accordeon4Active}">
              <div class="faq-item__top" @click="accordeon4Active ? accordeon4Active=false : accordeon4Active=true">
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
    <el-dialog  :visible.sync="aboutModal">
      <div class="banner-info-block">
        <div class="banner-info-block__top">

          <img class="banner-info-block__top--img" src="/lip.webp" alt="">

          <div class="banner-info-block__top--name">
            <p>Li pin hin</p>
            <p>creator QR SOCIAL</p>
          </div>
        </div>
        <div class="banner-info-block__content mb-20">
          <p class="section-subheader mb-10">我的传记</p>
          <p>我叫李品欣，1970年出生于湖北省十堰市。 1996年，我毕业于中国国家研究所俄罗斯和独联体文化与语言研究学院。 1998年，我第一次去俄罗斯出差，并于2001年返回，然后成为该国的常客！
            在过去的六个月到两年的时间里，我一直进行了9次以上的商务旅行，并设法研究了这个国家和人民！
            俄罗斯人对我们的文化和语言非常感兴趣，其中许多人希望交流和了解我们！唯一的障碍是俄罗斯的生活水平低下。</p>
        </div>
        <div class="banner-info-block__content">
          <p class="section-subheader mb-10">该门户网站背后的想法</p>
          <p class="mb-40">几年来，我一直在思考如何在我们这边的人与俄罗斯人之间建立桥梁和联系，并提出了一个这样的交流和相识的场所！
            许多俄罗斯姑娘都梦想着移居中国并嫁给中国男人，所以我决定在这个网站上将双方的机会结合起来！
            试试看，一定要写下您对我们门户网站的意见！ 我们会考虑您的每条评论，并不断完善和填充我们的网站！</p>
          <p class="btn btn-l-blue" @click="aboutModal=false">写一条消息</p>
        </div>
      </div>
    </el-dialog>

  </div>

</template>

<script>
  import GirlCard from '@/components/GirlCard'
  import StreamCard from '@/components/StreamCard'
  export default {
    components: {
      GirlCard,
      StreamCard
    },
    async asyncData({$axios,params}){
      console.log(params)
      try{
        const get_streamers = await $axios.get(`/api/v1/user/get_streamers?at_home=true`)
        const streamers = get_streamers.data
        return {streamers}
      }catch (e) {
        const err = 404
        return {err}

      }

    },
    data(){
      return {
        aboutModal:false,
        accordeon1Active:false,
        accordeon2Active:false,
        accordeon3Active:false,
        accordeon4Active:false,
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 20,
          //centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        },
        streams:[
          {
          id:1,
          name:'name1',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534484107755570/4.png',
          nickname:'nick1',
          is_vip:true
        },
        {
          id:2,
          name:'name22',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534485839478845/66.png',
          nickname:'nick23',
          is_vip:false
        },
          {
          id:3,
          name:'name2',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534487030923274/71.png',
          nickname:'nick233',
          is_vip:true
        },
           {
          id:4,
          name:'name2',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534587518451772/51.png',
          nickname:'nick22',
          is_vip:true
        },
          {
          id:5,
          name:'name1',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534484107755570/4.png',
          nickname:'nick1',
          is_vip:true
        },
        {
          id:6,
          name:'name22',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534485839478845/66.png',
          nickname:'nick23',
          is_vip:false
        },
          {
          id:7,
          name:'name2',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534487030923274/71.png',
          nickname:'nick233',
          is_vip:true
        },
           {
          id:8,
          name:'name2',
          avatar:'http://185.51.246.40:8000/media/gifts/Frame2.png',
          stream_img:'https://cdn.discordapp.com/attachments/525021707027873822/785534587518451772/51.png',
          nickname:'nick22',
          is_vip:true
        },

        ]

      }
    },

  }
</script>



