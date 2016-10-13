jQuery(function($){
    //리스트 드롭앤 드랍
    $(function(){
       
		$('.main_list>li').on('mouseenter',function(){
            $(this).find('ul').stop().slideDown('slow');
            });
         
		$('.main_list>li').on('mouseleave',function(){		
			 $(this).find('ul').stop().slideUp('slow');	
            
		});
		
	});
});
