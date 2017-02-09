/**
 * Created by Administrator on 2017/2/9.
 */
/*头部 加载*/
$(function(){
    $("header").load("header.html");
})

$(function(){
    /*放大镜*/
    //鼠标进入，中等图片展示/大图片展示
    $(".smallImg").on("mouseenter",function(){
        //小图片变换背景边框
        $(".smallImg").css({
            backgroundPosition:"-200px -331px"
        })
        $(".smallImg").eq($(this).index()).css({
            backgroundPosition:"0 -187px"
        })
        $("#bpic-list>img").fadeOut(400);
        $("#bpic-list>img").eq($(this).index()).fadeIn(400);
        $("#bigView>img").hide();
        $("#bigView>img").eq($(this).index()).show();
    });
    //小视窗随鼠标移动
    $("#bpic-list").on("mouseenter",function(){//鼠标进入
        $(".smallView").show();
        $("#bigView").show();
        //小视窗岁鼠标移动
        $(window).on("mousemove", function (e) {
            var _left = e.pageX - $(".detailbox").offset().left - $(".smallView").outerWidth() / 2;
            var _top = e.pageY - $(".detailbox").offset().top - $(".smallView").outerHeight() / 2;
            if(_left <0){_left = 0;}
            if(_top < 0){_top = 0;}
            if(_left + $(".smallView").outerWidth() >$("#bpic-list").width()){
                _left = $("#bpic-list").width() - $(".smallView").outerWidth();
            }
            if(_top + $(".smallView").outerHeight() >$("#bpic-list").height()){
                _top =  $("#bpic-list").height() - $(".smallView").outerHeight();
            }
            $(".smallView").css({
                left:_left,top:_top
            });
            //给大视窗设置定位
            var _l=-2*_left;
            var _t=-2*_top;
            $("#bigView img").css({
                left:_l,
                top:_t,
            })
        });
    });
    $("#bpic-list").on("mouseleave",function(){//鼠标移出
        $(".smallView").hide();
        $("#bigView").hide();
    })
})

$(function(){
    //图片加载gif
   setTimeout(function(){
        $("#imgLoading").css("display","none");
    },1000)
})
