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
//图片加载gif
$(function(){
   setTimeout(function(){
        $("#imgLoading").css("display","none");
    },1000)
})
/*选项卡*/
$(function(){
    $(".changeC").click(function(){
        //nav 点击时，背景和字体颜色变换
        $(".changeC a").removeClass("changeC_on");
        $(".changeC a").eq($(this).index()).addClass("changeC_on");
        //选项卡
        $(".d-options>div").hide();
        $(".d-options>div").eq($(this).index()).show();
        var $height = $(".d-options>div").eq($(this).index()).outerHeight();
        $(".d-options").css("height",$height);
    });
    //吸顶菜单
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        if($top>742){
            $(".message_nav").css({
                position:"fixed",
                top:"50px",
                zIndex:"100"
            })
        }else{
            $(".message_nav").css({
                position:"static"
            })
        }
    })
    //图片加载
    var _imgLoad =[
        {gimg:"images/e0.jpg"},
        {gimg:"images/e1.jpg"},
        {gimg:"images/e2.jpg"},
        {gimg:"images/e3.jpg"}
    ];
    function loadImg(){
        $.each(_imgLoad,function(index,value){
            console.log(value);
            var $img = $("<img>").attr("src",value.gimg);
            $(".conlist").append($img);
        })
    }
    loadImg(_imgLoad);
    $(".d-options").css("height",$(".d-optfirst").outerHeight())
})
angular.module("myApp",["r_right"]);







/*底部加载*/
$(function(){
    $("footer").load("footer.html");
})