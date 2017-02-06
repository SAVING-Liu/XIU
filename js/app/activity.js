/**
 * Created by Administrator on 2017/2/6.
 */
$(function(){
    $(window).scroll(function(){//吸顶菜单
        var $distance = $(window).scrollTop();
        if($distance>136){
            $(".top-downbg").css({
                background:"rgba(3,3,3,0.8)",
                position:"fixed",
                top:0,
                zIndex:99
            });
            $(".nav").css({
                background:"rgba(247,247,247,0.95)",
                position:"fixed",
                top:"45px",
                zIndex:99
            });
        }else{
            $(".top-downbg").css({
                opacity:1,
                position:"static",
            });
            $(".nav").css({
                opacity:1,
                position:"static"
            })
        }
    })
})
/*
var _goodslist =new Array (
    {gid:"good1",gimg:"images/1727_thumb_G_1442518988799.jpg",gname:"好酒网 北京牛栏山52度清香型二",gprice:"￥49元"},
    {gid:"good2",gimg:"images/1622_thumb_G_1426445538183.jpg" ,gname:"好酒网 52度泸州老窖头曲珍3",gprice:"￥79元"},
    {gid:"good3",gimg:"images/1622_thumb_G_1426445538183.jpg",gname:"好酒网 郎酒52度郎酒珍品佳酿",gprice:"￥68元"},
    {gid:"good4",gimg:"images/1637_thumb_G_1426445882674.jpg",gname:"好酒网 郎酒 52度郎酒珍品佳酿",gprice:"￥88元"},
    {gid:"good5",gimg:"images/1518_thumb_G_1431020967800.jpg",gname:"好酒网 50度 五粮液 小尖庄贰",gprice:"￥98元"},
    {gid:"good6",gimg:"images/1172_thumb_G_1426793607428.jpg",gname:"好酒网 53度 茅台飞天 500",gprice:"￥1188元"},
    {gid:"good7",gimg:"images/1235_thumb_G_1426457985879.jpg",gname:"好酒网 白云边 53度五星陈酿",gprice:"￥158元"},
    {gid:"good8",gimg:"images/1653_thumb_G_1426460108840.jpg",gname:"国台 好酒1号茅台镇酱香型53度",gprice:"￥480元"}
)

function loadJson(_goodlist){

    var $ul = $("#wang")
    $.each(_goodslist,function(index,value){

        var $li = $("<li></li>");
        var $a= $("<a>");
        $a.attr({href:"#"})
        var $img = $("<img>");
        $img.attr({src:value.gimg});

        var $span = $("<span></span>");
        $span.text(value.gname);
        var $em =$("<em></em>");
        $em.text(value.gprice) ;
        //添加到页面中
        $ul.append($li);
        $li.append($a);
        $a.append($img).append($span).append($em);
    })

}
loadJson();
*/
