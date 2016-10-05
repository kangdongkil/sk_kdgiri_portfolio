jQuery(function($){
//    $('.on_list> li').on('click',function(event){event.preventDefault();
//    var src = $(this).find('a>img').attr('src');
//    var filename = src.match(/[^\/]+$/)[0];
//    $('.on_list>li').attr('src',bigSrc);
//                                            });
    $('.cashbag_btn > a').on('click',function(event){
        $(this).find('>a').attr('background','url(/images/business_areas/marketing_platform/btn_plus.gif');
        $('.cashbag_txt').toggleClass('none');
        

    })
    
});
