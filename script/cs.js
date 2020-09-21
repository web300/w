$(function(){
    var winr=$(window); 
    var surl = location.href;
    var surl2 = $(".place a:eq(1)").attr("href");
    
    $(".nav li a").each(function() {
        if ($(this).attr("href")==surl || $(this).attr("href")==surl2) $(this).parent().addClass("on");
    });
    
    $(".nav-on").click(function () {
        $(".nav").slideToggle();
        $(this).find("i").toggleClass("fa-bars");
    });
    $(".search-on").click(function () {
        $(".search").slideToggle();
        $(this).find("i").toggleClass("fa-times");
    });
    
    $(".gotop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
    });
    
    var bodystyle = $("body").attr("data-style");
    if (bodystyle == 'timeon' || bodystyle == 'timeoff'){}else{
        $("body").on("click", ".style-on", function () {
            $('body').toggleClass("tx-night");
            $(this).find("i").toggleClass("fa-moon-o");
            if ($(this).find("p").html() == '关灯'){$(this).find("p").html('开灯');}else{$(this).find("p").html('关灯');}
            if(zbp.cookie.get("bgstyle") == null || zbp.cookie.get("bgstyle") == 'off'){
                zbp.cookie.set("bgstyle", "on" , 365);
            }else if(zbp.cookie.get("bgstyle") == 'on'){
                zbp.cookie.set("bgstyle", "off" , 365);
            }else{
                zbp.cookie.set("bgstyle", "on" , 365);
            }
        });
        if($("body").hasClass("tx-night")){
            zbp.cookie.set("bgstyle", "on" , 365);
            $(".style-on").find("p").html('开灯');
        }
        if (zbp.cookie.get("bgstyle") !== null){
            if (zbp.cookie.get("bgstyle") == "on") {
                $('body').addClass("tx-night");
                $(".style-on").find("i").removeClass("fa-moon-o");
                $(".style-on").find("p").html('开灯');
            }else if(zbp.cookie.get("bgstyle") == 'off'){
                $('body').removeClass("tx-night");
            }
        }else{
            zbp.cookie.set("bgstyle", "off" , 365);
        }
    }
    
});

function tabs(tabTit,on,tabCon){
    $(tabTit).children().hover(function(){
        $(this).addClass(on).siblings().removeClass(on);
        var index = $(tabTit).children().index(this);
        $(tabCon).children().eq(index).show().siblings().hide();
    });
};
tabs(".tab-hd","on",".tab-bd");

zbp.plugin.unbind("comment.reply.start", "system-default");
zbp.plugin.on("comment.reply.start", "tx_freecms", function(id) {
    var i = id;
    $("#inpRevID").val(i);
    var frm = $('#divCommentPost'),
        cancel = $("#cancel-reply");

    frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm");
    $('#AjaxComment' + i).before(frm);

    cancel.show().click(function() {
        var temp = $('#temp-frm');
        $("#inpRevID").val(0);
        if (!temp.length || !frm.length) return;
        temp.before(frm);
        temp.remove();
        $(this).hide();
        frm.removeClass("reply-frm");
        return false;
    });
    try {
        $('#txaArticle').focus();
    } catch (e) {}
    return false;
});

zbp.plugin.on("comment.get", "tx_freecms", function (logid, page) {
    $('span.commentspage').html("提交中...");
});
zbp.plugin.on("comment.got", "tx_freecms", function (logid, page) {
    $("#cancel-reply").click();
});
zbp.plugin.on("comment.post.success", "tx_freecms", function () {
    $("#cancel-reply").click();
});
if(window.console && window.console.log){
    console.log('\n %c \u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0074\u0078\u0063\u0073\u0074\u0078\u002e\u0063\u006e\u002f  %c \u5929\u5174\u5de5\u4f5c\u5ba4\u4f5c\u54c1 \n', 'color: #fadfa3; background: #030307; padding:3px 0;', 'background: #fadfa3; padding:3px 0;');
}