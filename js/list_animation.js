jQuery(function($){
    //리스트 드롭앤 드랍
    $(function(){
       
		$('.main_list>li').on('mouseenter',function(){
            var $img = $(this).find('img');	
            $('.under_inner').stop().slideDown();
            $(this).find('ul').show();
            $img.attr('src',$img.attr('src').replace('_off','_on'));
           
            });
        
         
		$('.main_list>li').on('mouseleave',function(){
            var $img = $(this).find('img');	
			 $('.under_inner').stop().slideUp();	
           $(this).find('ul').hide(); $img.attr('src',$img.attr('src').replace('_on','_off'));

		});
		
	});

//    스크롤 내리면 위에메뉴 없애기
    $(function(){
        $(document).scroll(function(){
            var winPos = $(document).scrollTop();
        if(winPos>0){
            $('header').css({'margin-top':'-39px','position':'fixed'});
            $('header h1').css({'padding-top':'30px'});
            $('header h1 img').css({'width':'80px'});
            $('header .main_list').css({'padding':'2px 3px 0'});
            
        }else{
             $('header').css({'margin-top':'0px','position':'relative'});
            $('header h1').css({'padding-top':'0px'});
            $('header h1 img').css({'width':'118px'});
            $('header .main_list').css({'padding':'0px'});
            
        }
        });
        
    });
 //카테고리의 변화
       $(function(){
           
           var $act = ($('.marketing_place >article'));
           $act.click(function(event){
	event.preventDefault();
              console.log($(this).find('>div:last')); 
   if($(this).find('>div:first').hasClass('category_on')){
		$(this).find('>div:first').removeClass('category_on').addClass('category_off');
       $(this).find('>div:last').addClass('txt_none');
       $(this).find('>div>a').removeClass('btn_minus').addClass('btn_plus');
   }else if($(this).find('>div:first').hasClass('category_off')){
      $(this).find('>div:first').removeClass('category_off').addClass('category_on');
       $(this).find('>div:last').removeClass('txt_none');
       $(this).find('>div>a').removeClass('btn_plus').addClass('btn_minus');
	}
                     
     });
       });
       //marketing.html 애니메이션        
    $(function(){
           
           var $btn = ($('.cashbag_btn'));
   $btn.click(function(event){
	       event.preventDefault();
   if($(this).hasClass('cashbag_on')){
		$(this).removeClass('cashbag_on').addClass('cashbag_off');
       $(this).parent('.cashbag_box').find('.cashbag_txt').addClass('txt_none');
       $(this).find('>a').removeClass('cashbag_minus').addClass('cashbag_plus');
   }else if($(this).hasClass('cashbag_off')){
      $(this).removeClass('cashbag_off').addClass('cashbag_on');
       $(this).parent('.cashbag_box').find('.cashbag_txt').removeClass('txt_none');
       $(this).find('>a').removeClass('cashbag_plus').addClass('cashbag_minus');
	}
           
     });
       });
//       //질문게시판 애니메이션
       $(function(){
           
           var $btn = $('.question_box');
   $btn.click(function(event){
	       event.preventDefault();
   if($(this).find('>a').hasClass('btn_minus')){
		$(this).find('>a>span').removeClass('ico_on').addClass('ico_off');
       $(this).parent('.tip_box').find('.answer_box').addClass('txt_none');
       $(this).find('>a').removeClass('btn_minus').addClass('btn_plus');
   }else if($(this).find('>a').hasClass('btn_plus')){
      $(this).find('>a>span').removeClass('ico_off').addClass('ico_on');
       $(this).parent('.tip_box').find('.answer_box').removeClass('txt_none');
       $(this).find('>a').removeClass('btn_plus').addClass('btn_minus');
	}
           
     });
       });
    //이미지 슬라이드
   (function(){
       var $carousel = $('.slide_img');
       var $first = $carousel.find('>ul>li:first');
       var $start = $carousel.find('>ul');
       var DURATION = 200, INTERVAL = 2000;
       var index = 0, maxIndex=$carousel.find('li').length;
       var timerId = null, entered = false;

       
      
       
       
       
      $('.circle_list span:first').addClass('red'); $carousel.find('li').appendTo($carousel.find('>ul'));
       //마우스 효과
       $carousel
           .on('mouseenter',function(event){
           entered = true;
           clearTimeout(timerId);

       })
           .on('mouseleave',function(event){
           entered = false;
           clearTimeout(timerId);
           timerId = setTimeout(move,INTERVAL);
       });
       $('main')
           .on('click','a.prev',function(event){
           console.log($('.slide_img > ul >li:first').css('margin-left'));
           event.preventDefault();
           move(-1);
       })
            .on('click','a.next',function(event){
           console.log($('.slide_img > ul >li:first').css('margin-left'));
           event.preventDefault();
           move(1);
       });

     //배경

       $(function(){
        var $li = $('.slide_img').find('li');
       for(var i=0, j=1; i<$li.length+1; i++,j++)
        {
           
           $li.eq(i).css('background-image','url(http://www.skplanet.com/images/kor/main/bg_visual'+j+'.jpg)') ;
                          }
    });
       
      
       //시간에 따른 움직임
       function move(step){
           index = index +(step || 1);
           if(index === maxIndex){
               index=0;
           } else if (index<0){
               index = maxIndex - 1;
           }
        //버튼애니메이션
            $('.circle_list span').removeClass('red');
            $('.circle_list span').eq(index).addClass('red');
           
           $first.animate(
            {marginLeft:-(index*$start.width())},
               DURATION,
            function(){
                if(entered) return;
                clearTimeout(timerId);
                timerId = setTimeout(move,INTERVAL);
       });
       

       }
       
       timerId = setTimeout(move,INTERVAL*2);
       
    
   })();
   
});
