$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function(){
		$('.post').show(500);
	});
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        420:{
            items:3,
        },
        768:{
            items:5,
        },
        1024:{
            items:8,         
        }
    }
  })
});