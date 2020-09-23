(function(){
    var tags_a = $("#divhottag a"); 
    var tags_a1 = $("#divrandtag a"); 
    tags_a.each(function(){ 
        var x = 6; 
        var y = 0; 
        var rand = parseInt(Math.random() * (x - y + 1) + y); 
        $(this).addClass("tags"+rand); 
    }); 
    
    tags_a1.each(function(){ 
        var x = 6; 
        var y = 0; 
        var rand = parseInt(Math.random() * (x - y + 1) + y); 
        $(this).addClass("tags"+rand); 
    }); 
    
    $('.tx-tab-hd li').click(function(){
        $(this).addClass('tx-on').siblings().removeClass('tx-on');
        $('.tx-tab-bd ul').hide().eq($(this).index()).show();
    })
})