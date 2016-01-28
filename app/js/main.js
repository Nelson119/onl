'use strict';
/*eslint-disable new-cap, no-unused-vars, 
  no-use-before-define, no-trailing-spaces, 
  no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,
  comma-spacing,no-spaced-func,space-infix-ops,
  key-spacing */
/*global  $ */


$(document).ready(function(){
  // set up hover panels
  // although this can be done without JavaScript, we've attached these events
  // because it causes the hover to be triggered when the element is tapped on a touch device
  $('.hover').hover(function(){
      $(this).addClass('flip');
  },function(){
      $(this).removeClass('flip');
  });
  // $(".content").mCustomScrollbar();
  $('.mCustomScrollbar ul').slick({
    infinite: true,
    dots: false,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 2000,
    cssEase: 'ease-out'
  });

  var ch = location.href.replace(/(http[:])?\/\/((.*)\/)+\/?([?]ch[=])*[&]?/i,'');
  ch = ch || 1;
  var characters = [
    '天菜海賊船長',
    '小餿水鱷魚',
    '黑鋼聖堂教父',
    '龍聖徒',
    '大桃游泳隊員',
    '桃弟排球隊員',
    '羅大廚主廚',
    '阿胖廚師學徒',
    '？？？狼人',
    '？？？人型犬'
  ];
  // console.log(ch);
  push (characters[ch-1], ch);
  $('.List ul li').on('click', function(){
    var index = $(this).attr('data-chara') * 1;
    push(characters[index-1], index);
  });
  $('.btn.BtnShare:eq(0)').on('click',function(){
    window.open('https://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href)+'&t='+encodeURIComponent(document.title));
  });
});
function toggleCodes(on) {
    var obj = document.getElementById('icons');
    if (on) {
      obj.className += ' codesOn';
    } else {
      obj.className = obj.className.replace(' codesOn', '');
    }
}

function push(target, index){
  var siteUrl = $('h1 a').attr('href');
  var state = {
      title: document.title,
      url: location.href
  };
  // index++;
  var pan = index < 10 ? '0' + index : '' + index;
  document.title = target + ' - 《一夜 · 情人》 / 簡單 X 好玩 X 會不會閃光剛好是我的菜的性奮感！';
  $('.Character.C' + pan)
    .removeClass('bounceOutRight').addClass('bounceInLeft')
    .siblings().addClass('bounceOutRight').removeClass('bounceInLeft');
  $('.LineB')
    .removeClass('C01 C02 C03 C04 C05 C06 C07 C08 C09 C10')
    .addClass('C' + pan);




  window.history.pushState(state, target, siteUrl + '角色/' + target +'/');

  $(window).on('resize', function(){
    var ratio = 1920 / 1080;
    var iframe = $('#movie-wrap iframe');
    var wrap = $('#movie-wrap');
    wrap.css('padding-top', $(window).height() / $(window).width() * 100 + '%');
    var currentRation =  $(window).width() / $(window).height();
    if(currentRation > ratio){

      iframe.css('width','100%');
      var h = iframe.width() / ratio;
      var top = (h - $(window).height()) / -2;
      iframe.css('height', h + 'px')
        .css('margin-top', top +'px')
        .css('margin-left', 0);

    }else{

      iframe.css('height','100%');
      var w = iframe.height() * ratio;
      var left = (w - wrap.width()) / -2;
      iframe.css('width', w + 'px')
        .css('margin-top', 0)
        .css('margin-left', left + 'px');
    }
  }).trigger('resize');
}
