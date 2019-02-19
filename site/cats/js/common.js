// scroll
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});


// slide-one
$(document).ready(function(){
	$(".slide-one").owlCarousel({
		loop:true,
		center:true,
		autoplay:true,
		autoWidth:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		items:5,
		responsiveClass:true,
		responsive:{
			420:{
				tems:1,
				},
			768:{
				items:3,
				},
			1024:{
				items:5,         
				}
				   }
	})
});


// slide-two
$(document).ready(function(){
	$('.slide-two').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		items:1
	})
});


// send mail
$(document).ready(function(){
    $(".form-send").submit(function() { 
            var form_data = $(this).serialize(); 
            $.ajax({
            type: "POST", 
            url: "sendmail.php", 
            data: form_data,
            success: function() {
                   
                   alert("Ваше сообщение отпрвлено!");
                }
            });
    });
}); 