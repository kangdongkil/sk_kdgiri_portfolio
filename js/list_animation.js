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
    //이미지 슬라이드
   (function(){
       var $carousel = $('.slide_img');
       var $first = $carousel.find('>ul>li:first');
       var $start = $carousel.find('>ul');
       var DURATION = 200, INTERVAL = 2000;
       var index = 0, maxIndex=$carousel.find('li').length;
       var timerId = null, entered = false;
       //연습
//       $('.circle_list i:first').addClass('red');
       
      
       
       
       
       $carousel.find('li').appendTo($carousel.find('>ul'));
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
           
             

           event.preventDefault();
           move(-1);
       })
            .on('click','a.next',function(event){
           event.preventDefault();
           move(1);
       });
       //  배경바꾸기기
//           $(function(){
//            var $li = $('.slide_img').find('li');
//             var $img = $li.css('background-image');
//              var num = /[1234]/gi;
//              var result = $img.match(num);
//               var str = Number(result);
//            console.log($img.replace(str,str+1));
//
//           });
       //시간에 따른 움직임
       function move(step){
           index = index +(step || 1);
           if(index === maxIndex){
               index=0;
           } else if (index<0){
               index = maxIndex - 1;
           }
           //연습
            
      
       
         
//             $('.circle_list i').removeClass('red');
//             $('.circle_list i:eq('+(step+1)+')').addClass('red');
//         
           
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
