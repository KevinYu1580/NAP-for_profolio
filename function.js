// ----------menu---------
$(".topNav_mobile .menu, .menu_lightBox_pc").click(function () {
    $('.nap_menu, .menu_lightBox_pc').toggleClass("nap_menu_open");
  });
  
  // ----------like_Btn---------
  
  // 寵物卡片
  $('.napBtn_likeBtn').click(function(event){
    event.stopPropagation()
    $(this).toggleClass('likeBtn_activated');
    $(this).find('#white').toggle();
  })
  
  
  // 留言區
  // 因為卡片有三層(cardWrap & 卡片本身(以迴圈產生) & likeBtn), 為防止冒泡事件, 所以交流區卡片 & 貼文光箱內的likeBtn點擊事件方開寫
  $('.comtCard_wrap').on('click', '.napBtn_likeBtn_comt' ,function(e){
    e.stopPropagation()
    $(this).find('#napActivate').toggle()
  })
  $('.napBtn_likeBtn_comt').on('click',function(e){
    e.stopPropagation()
    $(this).find('#napActivate').toggle()
  })
  
  
  // ----------switch---------
  
  // --兩格
  const backmask_two = $('.napSwitch_two .backmask');
  const switch_two_num1 = $('.napSwitch_two .num1');
  const switch_two_num2 = $('.napSwitch_two .num2');
  
  
  $(switch_two_num1).click(function(){
    console.log('this',$(this));
    $(this).prev().css('left', '0%');
    $(this).css('color', 'var(--white)');
    $(this).next().css('color', 'var(--black_600)');
  });
  
  $(switch_two_num2).click(function(){
    $(this).prev().prev().css('left', '50%');
    $(this).prev().css('color', 'var(--black_600)');
    $(this).css('color', 'var(--white)');
  });
  
  
  // --三格
  const backmask_three = $('.napSwitch_three .backmask');
  const switch_three_num1 = $('.napSwitch_three .num1');
  const switch_three_num2 = $('.napSwitch_three .num2');
  const switch_three_num3 = $('.napSwitch_three .num3');
  
  $('.napSwitch_three .num1').click(function(){
    $(backmask_three).css('left', '0%');
    $(switch_three_num1).css('color', 'var(--white)');
    $(switch_three_num2).css('color', 'var(--black_600)');
    $(switch_three_num3).css('color', 'var(--black_600)');
  });
  
  $('.napSwitch_three .num2').click(function(){
    $(backmask_three).css('left', '33.333333%');
    $(switch_three_num2).css('color', 'var(--white)');
    $(switch_three_num1).css('color', 'var(--black_600)');
    $(switch_three_num3).css('color', 'var(--black_600)');
  });
  
  $('.napSwitch_three .num3').click(function(){
    $(backmask_three).css('left', '66.666666%');
    $(switch_three_num3).css('color', 'var(--white)');
    $(switch_three_num1).css('color', 'var(--black_600)');
    $(switch_three_num2).css('color', 'var(--black_600)');
  });
  
  
  // --------頁數選擇器PC---------
  
  $('.page_slec .page_indic').click(function(){
    $('.page_slec .page_indic').css('background-color', 'var(--white)');
    $('.page_slec .napPage').css('color','var(--primaryColor_dark)');
  
  
    $(this).css('background-color', 'var(--primaryColor_dark)');
    $(this).find('span').css('color', '#ffffff')
  })
  
  // ----首頁aniCover 視覺特效----


const first_page = $(".first_page");
const first_page_top = first_page.offset().top;
const first_page_height = first_page.height();
const aniCover = $(".aniCover");
const ani_anchor = $('.ani_anchor')


// 只有頁面寬度 >= 992時才觸發電腦版首頁視覺特效
$(window).scroll(function(){
    if(document.body.clientWidth >= 992){
        coverAni();
    }
    else{
        return
    }
})

function coverAni() {
    const window_top = $(window).scrollTop();

  // 控制aniCover遮罩的大小

  if (window_top > first_page_height / 3) {
    $(".aniCover_mask").css("-webkit-mask-size", "auto 180vh");
    if (window_top > (first_page_height / 3) * 2) {
      $(".aniCover_mask").css("-webkit-mask-size", "auto 300vh");
      if (window_top > first_page_height) {
        $(".aniCover_mask").css("-webkit-mask-size", "auto 800vh");
      }
    }
  } else {
    $(".aniCover_mask").css("-webkit-mask-size", "auto 80vh");
  }

  // 控制aniCover遮罩內文字方塊opacity & 文字顏色
  if (window_top > first_page_height) {
    $(".aniCover_mask .textWrap > span span").css(
      "color",
      "var(--primaryColor_tint)"
    );
  } else {
    $(".aniCover_mask .textWrap > span span").css("color", "var(--white)");
  }

  if (window_top > first_page_height * 2) {
    $(".aniCover_mask .textWrap").fadeOut(600);
  } else {
    $(".aniCover_mask .textWrap").fadeIn(600);
  }

  // ani_anchor位移控制 & aniCover寬度控制
  if(window_top >= first_page_height * 2){
    $(aniCover).css('width', '55%')
    $(ani_anchor).css('z-index', '998')

    if(window_top >= first_page_height * 4){
        $(ani_anchor).css({
            'position' : 'absolute',
            'top' : '400vh'
        })
    }
    else{
        $(ani_anchor).css({
            'position' : 'fixed',
            'top' : '0'
        })
    }
  }
  else {
    $(aniCover).css('width', '100%')
    $(ani_anchor).css('z-index', '1000')
  }

  // firstPage的位移控制

  if (window_top >= first_page_height * 3) {
    first_page.css({
      position: "fixed",
      top: "0",
    });
    $('.first_page .content_wrap').css('opacity', '1')

    if (window_top >= first_page_height * 4) {
        first_page.css({
          position: "absolute",
          top: "400vh",
        });
      }
      else{
        first_page.css({
            position: "fixed",
            top: "0",
          });
      }
  }
  else{
    first_page.css({
        position: "absolute",
        top: "300vh",
    });
    $('.first_page .content_wrap').css('opacity', '0')
  }
}
// --------hand環抱特效

$(window).scroll(() => {
  const windowTop = $(window).scrollTop();
  const hand = $(".home_info .hand");
  const handLeft = $(".home_info .hand .left");
  const handRIght = $(".home_info .hand .right");

  const handTop = hand.offset().top - windowTop;

  //   pc
  if (document.body.clientWidth >= 992) {
    if (handTop <= (window.innerHeight / 5) * 2) {
      handLeft.css("transform", "none");
      handRIght.css("transform", "translateY(2%)");
    } else {
      handLeft.css("transform", "rotate(20deg) translateX(-50%)");
      handRIght.css(
        "transform",
        "translateY(2%) rotate(-20deg) translateX(50%)"
      );
    }
  }
  // mb
  if (document.body.clientWidth < 992) {
    if (handTop <= (window.innerHeight / 5) * 4) {
      handLeft.css(
		"transform", "translateX(-14%)");
      handRIght.css(
		"transform", "translateX(14%) translateY(2%)");
    } else {
      handLeft.css(
		"transform", "rotate(20deg) translateX(-50%)");
      handRIght.css(
        "transform"," translateY(3%) rotate(-20deg) translateX(50%)"
      );
    }
  }
});

// --------explain區塊   數字跳轉
const changeNum3 = $('.explain .changeNum3').offset().top
const screenBaseLine = screen.availHeight

// 位置與開始動畫設定
let isRandoming = false;
$(window).scroll(function(){
    if((changeNum3 - $(window).scrollTop()) < (screenBaseLine * 0.8)){
      console.log()
      if(!isRandoming){
        isRandoming = true;
        runRandom();
      }
    }
    else{
      isRandoming = false;
    }
})

// 開始跑亂數 & 停止function
function runRandom(){
  let runRandom = window.setInterval(function(){
    let changingNum = Math.random().toString().substring(2,8)
    $('.explain .sec3 .changeNum3').html(`${changingNum}`)
  }, 60);
setTimeout(
  function() {
    clearInterval(runRandom)
    $('.explain .sec3 .changeNum3').html(155869)
  }, 1100);
}


// $('.explain .sec3 .changeNum3').delay(2000).hide()
$(window).scroll(function () {
  // --------napSteps_mobile 卡片翻轉--------
  const card1_mb = $(".napSteps .wrap_mb .cardWrap #num1");
  const card2_mb = $(".napSteps .wrap_mb .cardWrap #num2");
  const card3_mb = $(".napSteps .wrap_mb .cardWrap #num3");
  const card4_mb = $(".napSteps .wrap_mb .cardWrap #num4");

  $(window).scroll(function () {
    const scrHeight = screen.availHeight;

    // 個別卡片與螢幕頂端之距離
    const card1Top =
      ((card1_mb.offset().top - $(window).scrollTop()) / scrHeight) * 100;
    const card2Top =
      ((card2_mb.offset().top - $(window).scrollTop()) / scrHeight) * 100;
    const card3Top =
      ((card3_mb.offset().top - $(window).scrollTop()) / scrHeight) * 100;
    const card4Top =
      ((card4_mb.offset().top - $(window).scrollTop()) / scrHeight) * 100;

    const topPercent = 35;

    if (card1Top < topPercent) {
      card1_mb.css("transform", "rotateY(180deg)");
    } else {
      card1_mb.css("transform", "rotateY(0deg)");
    }

    if (card2Top < topPercent) {
      card2_mb.css("transform", "rotateY(180deg)");
    } else {
      card2_mb.css("transform", "rotateY(0deg)");
    }

    if (card3Top < topPercent) {
      card3_mb.css("transform", "rotateY(180deg)");
    } else {
      card3_mb.css("transform", "rotateY(0deg)");
    }

    if (card4Top < topPercent) {
      card4_mb.css("transform", "rotateY(180deg)");
    } else {
      card4_mb.css("transform", "rotateY(0deg)");
    }
  });

  // --------napSteps_pc 卡片翻轉--------
  // 進場卡片特效
  // 左向右滑入效果
  const card1_pc = $(".napSteps .wrap_pc .cardWrap #num1");
  const card2_pc = $(".napSteps .wrap_pc .cardWrap #num2");
  const card3_pc = $(".napSteps .wrap_pc .cardWrap #num3");
  const card4_pc = $(".napSteps .wrap_pc .cardWrap #num4");
  const card1_pc_napCard = $(".napSteps .wrap_pc .cardWrap #num1 .napCard");
  const card2_pc_napCard = $(".napSteps .wrap_pc .cardWrap #num2 .napCard");
  const card3_pc_napCard = $(".napSteps .wrap_pc .cardWrap #num3 .napCard");
  const card4_pc_napCard = $(".napSteps .wrap_pc .cardWrap #num4 .napCard");

  const cardWrap_pc = $(".napSteps .wrap_pc > .cardWrap");

  $(window).scroll(function () {
    const scrHeight = screen.availHeight;
    const cardWrap_pc_top =
      ((cardWrap_pc.offset().top - $(window).scrollTop()) / scrHeight) * 100;

    const topPercent = 60;

    if (cardWrap_pc_top < topPercent) {
      cardWrap_pc.css("transform", "translateX(0)");
      card1_pc_napCard.css("animation", " flip1-1 2s ");
      card2_pc_napCard.css("animation", " flip2-1 2s ");
      card3_pc_napCard.css("animation", " flip3-1 2s ");
      card4_pc_napCard.css("animation", " flip4-1 2s ");

      setTimeout(function () {
        $(card1_pc).mouseenter(function () {
          card1_pc_napCard.css("transform", "rotateY(180deg)");
        });
        $(card1_pc).mouseleave(function () {
          card1_pc_napCard.css("transform", "rotateY(0deg)");
        });
        $(card2_pc).mouseenter(function () {
          card2_pc_napCard.css("transform", "rotateY(180deg)");
        });
        $(card2_pc).mouseleave(function () {
          card2_pc_napCard.css("transform", "rotateY(0deg)");
        });
        $(card3_pc).mouseenter(function () {
          card3_pc_napCard.css("transform", "rotateY(180deg)");
        });
        $(card3_pc).mouseleave(function () {
          card3_pc_napCard.css("transform", "rotateY(0deg)");
        });
        $(card4_pc).mouseenter(function () {
          card4_pc_napCard.css("transform", "rotateY(180deg)");
        });
        $(card4_pc).mouseleave(function () {
          card4_pc_napCard.css("transform", "rotateY(0deg)");
        });
      }, 2000);
    } else {
      cardWrap_pc.css("transform", "translateX(100vw)");
      card1_pc_napCard.css("animation", " flip1-2 2s ");
      card2_pc_napCard.css("animation", " flip2-2 2s ");
      card3_pc_napCard.css("animation", " flip3-2 2s ");
      card4_pc_napCard.css("animation", " flip4-2 2s ");
      $(card1_pc).unbind();
      $(card2_pc).unbind();
      $(card3_pc).unbind();
      $(card4_pc).unbind();
    }
  });
});

  