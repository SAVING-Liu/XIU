/**
 * Created by Administrator on 2017/2/6.
 */
/*头部加载*/
$(function(){
   $("header").load("header.html");
});

/*图片加载*/
angular.module("myApp",["eunne","shezglobal","lavidione","aeannelog","fagire","marc"]);

/*底部加载*/
$(function(){
   $("footer").load("footer.html");
});
/*backtop*/
$(function(){
   //回到顶部
   $(".changebg").eq(3).on("click",function(){
      $("html,body").stop().animate({scrollTop:0},500);
   })
   //点击span div消失
   $(".closemenu").on("click",function(){
      $("#backtop").css("display","none");
   })
   //hover 变换背景
   $(".changebg").hover(function(){
      $(this).css({
         backgroundPosition:"-68px "+(-1-58*($(this).index()-1))+"px"
      })
   },function(){
      $(this).css({
         backgroundPosition:"0px "+(-1-58*($(this).index()-1))+"px"
      })
   })
})
