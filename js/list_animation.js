jQuery(function($){
    //리스트 드롭앤 드랍
    $(function(){
       
		$('.main_list>li').on('mouseenter',function(){	 
            $(this).find('ul').slideDown('slow');
        });
		$('.main_list>li').on('mouseleave',function(){		
			 $(this).find('ul').slideUp('slow');	
            
		});
		
	});
});
