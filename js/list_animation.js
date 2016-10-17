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
//글에 올리면 색깔변하기 
//    $(function(){
//        
//        $('.on_list>li').on('mouseenter',function(){
//           var $col = $(this).find('img'); $col.attr('src',$col.attr('src').replace('_off','_on'));
//        });
//        $('.on_list>li').on('mouseleave',function(){
//           var $col = $(this).find('img'); $col.attr('src',$col.attr('src').replace('_on','_off'));
//        });
//    });
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
     //배경

       $(function(){
        var $li = $('.slide_img').find('li');
       for(var i=0, j=1; i<$li.length+1; i++,j++)
        {
           
           $li.eq(i).css('background-image','url(http://www.skplanet.com/images/kor/main/bg_visual'+j+'.jpg)') ;
                          }
    });
       
       //카테고리의 변화
//       $(function(){
//           
//           var $act = ($('.marketing_place >article'));
//           $act.click(function(event){
//	event.preventDefault();
//              console.log($(this).find('>div:last')); 
//   if($(this).find('>div:first').hasClass('category_on')){
//		$(this).find('>div:first').removeClass('category_on').addClass('category_off');
//       $(this).find('>div:last').addClass('txt_none');
//       $(this).find('>div>a').removeClass('btn_minus').addClass('btn_plus');
//   }else if($(this).find('>div:first').hasClass('category_off')){
//		$act.find('>div:first').removeClass('category_on').addClass('category_off');
//       $(this).find('>div:first').removeClass('category_off').addClass('category_on');
//       $act.find('>div:last').addClass('txt_none');
//      $(this).find('>div:last').removeClass('txt_none'); $act.find('>div>a').removeClass('btn_plus').addClass('btn_minus');
//       $(this).addClass('btn_minus');
//	}
//           
//     });
//       });
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
