/**
 * Created by Administrator on 2017/2/4.
 */
/*头部加载*/
$(function(){
    $("header").load("header.html");
})
/*--吸顶菜单&楼层效果--*/
$(function(){
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        /*if($top>600){
            $("#menu").fadeIn(500);
            $("#right_nav").fadeIn(500);
        }else{
            $("#menu").fadeOut(500);
            $("#right_nav").fadeOut(500);
        }*/
        $("#right_nav").on("click",function(){
            $("html,body").stop().animate({scrollTop:0},500);
        });
    })
})
/*--轮播图--*/
$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        pagination : '.swiper-pagination',
        paginationClickable :true,
        loop:true,
        direction:"horizontal",
        paginationElement : 'li',
        autoplay: 3000,//可选选项，自动滑动
    });
    $(".swiper-container").on("mouseenter",function(){
        $(".swiper-container").css("cursor","pointer");
    })
})
/*--json加载图片--*/
/*--_homeGoods Json加载6个ul--*/
$(function(){
    var $h3 = $("<h3>");
    $(".home_goods").append($h3.append($("<img>").attr("src","images/goods_t.jpg")));
    var _homeGoods1 =[
        {gimg:"images/0207goods_a1.jpg"},
        {gimg:"images/0207goods_a2.jpg"},
        {gimg:"images/0207goods_a3.jpg"},
        {gimg:"images/0206goods_a4.jpg"},
        {gimg:"images/0206goods_a5.jpg"},
        {gimg:"images/0206goods_a6.jpg"}
    ];
    var _homeGoods2 =[
        {gimg:"images/0207goods_b1.jpg"},
        {gimg:"images/0207goods_b2.jpg"},
        {gimg:"images/0207goods_b3.jpg"},
        {gimg:"images/0207goods_b4.jpg"},
        {gimg:"images/0207goods_b5.jpg"},
        {gimg:"images/0207goods_b6.jpg"}
    ];
    var _homeGoods3 =[
        {gimg:"images/0207goods_c1.jpg"},
        {gimg:"images/0207goods_c2.jpg"},
        {gimg:"images/0207goods_c3.jpg"},
        {gimg:"images/0207goods_c4.jpg"},
        {gimg:"images/0207goods_c5.jpg"},
        {gimg:"images/0207goods_c6.jpg"}
    ];
    var _homeGoods4 =[
        {gimg:"images/0207goods_d1.jpg"},
        {gimg:"images/0207goods_d2.jpg"},
        {gimg:"images/0207goods_d3.jpg"},
        {gimg:"images/0207goods_d4.jpg"},
        {gimg:"images/0207goods_d5.jpg"},
        {gimg:"images/0207goods_d6.jpg"}
    ];
    var _homeGoods5 =[
        {gimg:"images/0206goods_e1.jpg"},
        {gimg:"images/0207goods_e2.jpg"},
        {gimg:"images/0207goods_e3.jpg"},
        {gimg:"images/0207goods_e4.jpg"},
        {gimg:"images/0207goods_e5.jpg"},
        {gimg:"images/0206goods_e6.jpg"}
    ];
    var _homeGoods6 =[
        {gimg:"images/0207goods_f1.jpg"},
        {gimg:"images/0207goods_f2.jpg"},
        {gimg:"images/0207goods_f3.jpg"},
        {gimg:"images/0207goods_f4.jpg"},
        {gimg:"images/0207goods_f5.jpg"},
        {gimg:"images/0207goods_f6.jpg"}
    ];
    //封装函数
    function loadPage(homeClass,_array){
        function loadJson(_array){
            var $ul = $("<ul>");
            $(homeClass).append($ul);
            $.each(_array,function(index,value){
                    var $li = $("<li>");
                    var $a = $("<a></a>");
                    $a.attr("href","#");
                    var $img = $("<img>");
                    $img.attr("src",value.gimg);
                    //追加标签
                    $a.append($img);
                    $li.append($a);
                    $ul.append($li);
            })
        };
        loadJson(_array);
    }

    loadPage(".home_goods",_homeGoods1);
    loadPage(".home_goods",_homeGoods2);
    loadPage(".home_goods",_homeGoods3);
    loadPage(".home_goods",_homeGoods4);
    loadPage(".home_goods",_homeGoods5);
    loadPage(".home_goods",_homeGoods6);
})
/*--_homeBeats Json加载6个li--*/
$(function(){
    var _homeBeats =[
        {gimg:"images/0110beats_06.jpg",gimg2:"images/0116beats_06.png"},
        {gimg:"images/0110beats_01.jpg",gimg2:"images/0116beats_01.png"},
        {gimg:"images/0119beats_02.jpg",gimg2:"images/0119beats_02.png"},
        {gimg:"images/0119beats_03.jpg",gimg2:"images/0119beats_03.png"},
        {gimg:"images/0205beats_04.jpg",gimg2:"images/0205beats_04.png"},
        {gimg:"images/0205beats_05.jpg",gimg2:"images/0205beats_05.png"}
    ];
    //封装函数
    function loadPage(homeClass,_array){
        function loadJson(_array){
            var $ul = $("<ul>");
            $(homeClass).append($ul);
            $.each(_array,function(index,value){
                var $li = $("<li>");
                var $a = $("<a></a>");
                $a.attr("href","#");
                var $img = $("<img>");
                $img.attr("src",value.gimg);
                var $p = $("<p>").append($("<img>").attr("src",value.gimg2));
                //追加标签
                $a.append($img);
                $a.append($p);
                $li.append($a);
                $ul.append($li);
            })
        };
        loadJson(_array);
    }

    $h3 = $("<h3>");
    $(".home_beats").append($h3.append($("<img>").attr("src","images/topic_t.jpg")));
    loadPage(".home_beats",_homeBeats);
    $h3 = $("<h3>");
    $(".home_beats").append($h3.append($("<a>").attr("href","#").append($("<img>").attr("src","images/topic_m.jpg"))));
})
/*--home_auto--*/
$(function(){
    $(".home_auto").append($("<a>").attr("href","#").append($("<img>").attr("src","images/0105auto.jpg")));
})
/*--home_find--*/
$(function(){
    var _homeFind =[
        {gimg:"images/20170105_001.jpg"},
        {gimg:"images/20170105_002.jpg"},
        {gimg:"images/20170105_003.jpg"},
        {gimg:"images/20170105_004.jpg"},
        {gimg:"images/20170105_005.jpg"},
        {gimg:"images/20170112_006.jpg"},
        {gimg:"images/20170105_007.jpg"},
        {gimg:"images/20170105_008.jpg"},
        {gimg:"images/20170105_009.jpg"},
        {gimg:"images/20170105_010.jpg"},
        {gimg:"images/20170105_011.jpg"},
        {gimg:"images/20170105_012.jpg"},
        {gimg:"images/20170105_013.jpg"},
        {gimg:"images/20170105_014.jpg"},
        {gimg:"images/20170105_015.jpg"},
        {gimg:"images/20170105_016.jpg"}
    ];
    //封装函数
    function loadPage(homeClass,_array){
        function loadJson(_array){
            var $ul = $("<ul>");
            $(homeClass).append($ul);
            $.each(_array,function(index,value){
                var $li = $("<li>");
                var $a = $("<a></a>");
                $a.attr("href","#");
                var $img = $("<img>");
                $img.attr("src",value.gimg);
                var $p = $("<p>");
                //追加标签
                $a.append($img);
                $a.append($p);
                $li.append($a);
                $ul.append($li);
            })
        };
        loadJson(_array);
    }

    $h3 = $("<h3>");
    $(".home_find").append($h3.append($("<img>").attr("src","images/found_t.jpg")));
    loadPage(".home_find",_homeFind);
    $h3 = $("<h3>");
    $(".home_find").append($h3.append($("<a>").attr("href","#").append($("<img>").attr("src","images/fonud_m.jpg"))));
})
/*底部加载*/
$(function(){
    $("footer").load("footer.html");
})