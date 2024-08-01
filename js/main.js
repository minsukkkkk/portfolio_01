$(function () { // 문서준비 이벤트(삭제x)

  //header
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 300) {
      $("#header").addClass("fix");
    } else {
      $("#header").removeClass("fix")
    }
  });

  //depth2
  $(".depth2,.depth2_bg,.mgnb_wrap,.mdepth2").hide();
  $(".gnb>li").mouseenter(function () {
    $(".depth2, .depth2_bg").stop().fadeIn();
  });
  $(".gnb>li").mouseleave(function () {
    $(".depth2, .depth2_bg").stop().fadeOut();
  });

  // 모바일 2차 메뉴
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
    $(".mgnb").animate({
      "right": "0"
    });
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".mgnb").animate({
      "right": "-100%"
    });
  });

  $(".mgnb > ul >li").click(function () {
    $(this).find(".mdepth2").slideDown();
    $(this).siblings().find(".mdepth2").slideUp();
  });

  // main-visual
  const mb = new Swiper(".mb", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    speed: 1000, // 슬라이드 넘어갈때 속도 ms 
    pagination: { //슬라이드 갯수(하단 불릿기호) -태그 추가
      el: ".swiper-pagination",
      type: "fraction", //"bullet(하단점)", "fraction"하단(숫자), "progressbar"
      clickable: true, // false(기본값)클릭가능여부
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".swiper-button-next", //다음
      prevEl: ".swiper-button-prev", //이전
    },

  });
  $(".mb_play").hide();
  $(".mb_pause").click(function () {
    mb.autoplay.stop();
    $(".mb_play").show();
    $(".mb_pause").hide();
  });
  $(".mb_play").click(function () {
    mb.autoplay.start();
    $(".mb_play").hide();
    $(".mb_pause").show();
  });

  // 티웨어 브랜드
  // $(".b1").click(function () {
  //   $(".i1").show().siblings().hide();
  // });
  // $(".b2").click(function () {
  //   $(".i2").show().siblings().hide();
  // });
  // $(".b3").click(function () {
  //   $(".i3").show().siblings().hide();
  // });
  // $(".b4").click(function () {
  //   $(".i4").show().siblings().hide();
  // });

  $(".menu_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let idx = $(this).index();
    $(".menu_box > li").eq(idx).addClass("active").siblings().removeClass("active");
  });
  // index 번호를 찾을때 사용
  // eq 번호를 부여할때 사용



  // best_menu
  const best_list01 = new Swiper(".best_list01", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".best_list01 .swiper-button-next", //다음
      prevEl: ".best_list01 .swiper-button-prev", //이전
    },
    slidesPerView: 1, //모바일에서 보이는개수
    breakpoints: {
      768: {  //768px 이상에서
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: { // 1200px 이상에서 
        slidesPerView: 3,
      },
    },
  });
  // best_menu
  const best_list02 = new Swiper(".best_list02", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".best_list02 .swiper-button-next", //다음
      prevEl: ".best_list02 .swiper-button-prev", //이전
    },
    slidesPerView: 1, //모바일에서 보이는개수
    breakpoints: {
      768: {  //768px 이상에서
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: { // 1200px 이상에서 
        slidesPerView: 3,
      },
    },
  });
  // best_menu
  const best_list03 = new Swiper(".best_list03", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".best_list03 .swiper-button-next", //다음
      prevEl: ".best_list03 .swiper-button-prev", //이전
    },
    slidesPerView: 1, //모바일에서 보이는개수
    breakpoints: {
      768: {  //768px 이상에서
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: { // 1200px 이상에서 
        slidesPerView: 3,
      },
    },
  });
  // best_menu
  const best_list04 = new Swiper(".best_list04", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".best_list04 .swiper-button-next", //다음
      prevEl: ".best_list04 .swiper-button-prev", //이전
    },
    slidesPerView: 1, //모바일에서 보이는개수
    breakpoints: {
      768: {  //768px 이상에서
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: { // 1200px 이상에서 
        slidesPerView: 3,
      },
    },
  });
  // best_menu
  const best_list05 = new Swiper(".best_list05", {
    loop: true,
    autoplay: {
      delay: 3000, //2500=2.5초, 슬라이드 대기 시간
      disableOnInteraction: false,
    },
    navigation: { // 방향버튼 - 태그추가
      nextEl: ".best_list05 .swiper-button-next", //다음
      prevEl: ".best_list05 .swiper-button-prev", //이전
    },
    slidesPerView: 1, //모바일에서 보이는개수
    breakpoints: {
      768: {  //768px 이상에서
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: { // 1200px 이상에서 
        slidesPerView: 3,
      },
    },
  });

}); // 문서준비 이벤트 종료(삭제x)