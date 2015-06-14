/* リサイズ　*/
var portraitWidth, landscapeWidth;
$(window).bind("resize", function() {
	if (Math.abs(window.orientation) === 0) {
		if (/Android/.test(window.navigator.userAgent)) {
			if (!portraitWidth)
				portraitWidth = $(window).width();
		} else {
			portraitWidth = $(window).width();
		}
		$("html").css("zoom", portraitWidth / 320);
	} else {
		if (/Android/.test(window.navigator.userAgent)) {
			if (!landscapeWidth)
				landscapeWidth = $(window).width();
		} else {
			landscapeWidth = $(window).width();
		}
		$("html").css("zoom", landscapeWidth / 320);
	}
}).trigger("resize");

/* menu */
$(function() {
        
        $('body').append('<div class="menu_bg"></div>');
        
        var $allBody = $('body,html'),
            $Body = $('body'),
            $offcanvasMenu = $('.nav_menu'),
            $offcanvasList = $('.nav_menu > ul'),
            $menuBtn = $('#slide_menu'),
            $menuBg = $('.menu_bg'),
            WinTop = $(window).scrollTop();
        
        $menuBtn.on('click',function() {        
            
         if (!$offcanvasMenu.is(':animated')) {
                $(this).toggleClass('btn_close');
            }
            

            if($menuBtn.hasClass('btn_close')) {
                $allBody.css({'overflow':'hidden'});
                //$allBody.css({'pointer-events':'none'});
                $menuBg.fadeIn(300,function() {
                    $menuBg.queue([]).stop();
                });
                $offcanvasMenu.animate(
                    {left:'0'},300,function() {
                    $offcanvasMenu.queue([]).stop();
                    $offcanvasMenu.css({'pointer-events':'visible'})
                    //$allBody.css({'position':'fixed'});
                    });

             /*    $(window).on('touchmove.noScroll',function(event) {
            if (!$.contains($('.offcanvas_menu')[0], event.target)) {
               // event.preventDefault();
 
            }
        });*/ 

                
            } else {
                
                $allBody.css({'overflow':'visible','position':'static'});
                $menuBg.fadeOut(300,function() {
                    $menuBg.queue([]).stop();
                });
                $offcanvasMenu.animate(
                    {left:'-250px'},300,function() {
                    $offcanvasMenu.queue([]).stop();
                    });
                $(window).off('.noScroll');
            
            }
        });
        
        
        $menuBg.on('click',function() {
            if ($(this).css('display') == 'block') {
                $('#slide_menu').click();
                $menuBtn.removeClass('btn_close');
           }
        });
        
        /*アコーディオン */
       var $AccrodButton = $('.accord_button'),
       	  $AccrodAria = $AccrodButton.next('p');
       	  
       	  $AccrodButton.on('click',function() {
       	  	$(this).next('p').slideToggle();
       	  });
 });