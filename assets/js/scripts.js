
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .carousel-caption h1').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.section-4-container').backstretch("assets/img/backgrounds/1.jpg");
    
    /*
	    Wow
	*/
	new WOW().init();
	
});

Array.from(document.querySelectorAll('.card-image')).forEach(item=>{
    item.onmouseover=()=>{
        item.parentElement.parentElement.classList.toggle('change');
    };
});
Array.from(document.querySelectorAll('.navigation-button')).forEach(item=>{
    item.onclick=()=>{
        item.parentElement.parentElement.classList.toggle('change');
    };
});


// Dynamic year

var date =new Date()
var year =date.getFullYear();
document.getElementById('year').innerHTML= year;


// Form Validation 
 // contact form validation

 function validateForm() {
    var name =document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var message=document.getElementById('message').value;
    var answer=document.getElementById('errorMessage');
    
    if (name =="" || message=="" || email=="" || phone=="") {
            answer.innerHTML="Fill All fields Correctly";
            return false;
    }
  }
