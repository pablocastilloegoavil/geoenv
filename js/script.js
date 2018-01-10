$(document).ready(function(){
        $('.menu li a').click(function(){
		  $('.menu li a').removeClass("active");
        $(this).addClass("active");
				if($('#toggle-menu').css('display') == 'block'){
					  $('.menu').hide();	 
					 }	
			
        });
		  });
		
			
/*
$(document).ready(function(){
	$('.icon-menu').click(function(){
	$('nav ul').css('display','block');	
			
		  });
		  });

*/



	$(document).ready(function(){
		$("#toggle-menu").on( "click", function() {
			if($('.menu').css('display') == 'block'){
				$('.menu').hide();
			}else{
				$('.menu').show();
			}
		 });
	
	});



$(function(){
		var foo = $('.gallery');
				foo.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				popupLoaderText: false,
				windowMargin: 0,
				usePopupNav: false,
				usePopupCaption: true,
	});  
});

			var linksParent = $('.tab_links');
			var links = linksParent.find('a');
			var items =$('.item_tab');
			links.eq(0).add(items.eq(0)).addClass('tab_active');
			linksParent.on('click','a',function(){
				var t = $(this);
				var i = t.index();
				t.addClass('tab_active').siblings().removeClass('tab_active');
				items.eq(i).addClass('tab_active').siblings().removeClass('tab_active');
			});