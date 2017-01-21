/**
 * Created by Administrator on 2017/1/20.
 */
$(function(){
    //点击换背景
    $(".changebg").on("click",function(){
        $(".changebg").css("background","url(images/login_sprite.png) no-repeat -160px 7px")
    });
    //选项卡
    $(".form-top li").click(function(){
        $(".form-top li").removeClass("btn-on");
        $(".form-top li").eq($(this).index()).addClass("btn-on");
        $(".forms").hide();
        $(".forms").eq($(this).index()).show();
    });
    //切换页面
    $(".changetocode").on("click",function(){
        $(".code-page").css("display","block");
        $("form").css("height","264px");
        $(".login-enter").css("background","url(images/login_sprite.png) -100px -360px no-repeat")
        $(".code-enter").css("background","url(images/login_sprite.png) -70px -400px no-repeat")
        $(".login-enter").click(function(){
            $(".code-page").css("display","none");
            $(".login-enter").css("background","url(images/login_sprite.png) 0px -360px no-repeat")
            $(".code-enter").css("background","url(images/login_sprite.png) 0px -400px no-repeat")
            $("form").css("height","366px");
        })
    });
    //短信登录--验证
    $("#phone").on("keyup",function(){
        $(".formbox-1 li:first i").show();
        $(".formbox-1 li:first span").show();
    });
    $("#validate").on("keyup",function(){
        $(".formbox-1 li").eq(2).find("i").show();
        $(".formbox-1 li").eq(2).find("span").show();
    });
})