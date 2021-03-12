var scrollFunc = function (e) { e = e || window.event;
   if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件 
    if (e.wheelDelta > 0) {
       //当滑轮向上滚动时执行的代码段 
       $("#dance-log").animate({top:'71vw'},"fast") 
       } 
      if (e.wheelDelta < 0) {
        //当滑轮向下滚动时执行的代码段 
        $("#dance-log").animate({top:'80vw'},"fast")
        } 
      } else if (e.detail) { //Firefox滑轮事件 
        if (e.detail < 0) 
        { //当滑轮向上滚动时执行的代码段
          $("#dance-log").animate({top:'71vw'},"fast") 
        } if (e.detail > 0) 
        { //当滑轮向下滚动时执行的代码段 
          $("#dance-log").animate({top:'80vw'},"fast") 
        } 
      } 
    } 
    //给页面绑定滑轮滚动事件 Firefox 
    if (document.addEventListener) {//firefox 
      document.addEventListener('DOMMouseScroll', scrollFunc, false); 
    } //滚动滑轮触发scrollFunc方法 ie 谷歌 
    window.onmousewheel = document.onmousewheel = scrollFunc;

$(document).ready(function(){
    $("#music-slidedown").click(function(){
      $("#music-content").slideDown("slow");
    });
  });
  $(document).ready(function(){
    $("#music-slideup").click(function(){
      $("#music-content").slideUp("slow");
    });
  }); /*音乐舞美右下方点击滑出事件 */