
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



  
// 01
// $(document).ready(function () {
// 02
//   $('#collection-date input').on('change', function() { 
// 03
//     var datearray = $('#collection-date input').val().split("-");
// 04
//     var montharray = ["Jan", "Feb", "Mar","Apr", "May", "Jun","Jul", "Aug", "Sep","Oct", "Nov", "Dec"];
// 05
//     var year = "20" + datearray[2];
// 06
//     var month = montharray.indexOf(datearray[1])+1;
// 07
//     var day = datearray[0];
// 08
//     var minDate = (year +"-"+ month +"-"+ day);
// 09
//     $('#delivery-date input').attr('min',minDate); 
// 10
//   });
// 11
// });


// Collection Date picker 

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
  console.log(dd);
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;

document.getElementById("collection-date").setAttribute("min", today);

// Delivery Date Picker 

var deliveryDate = new Date(+ new Date() + 86400000*2);
var ccc = deliveryDate.getDate();
var mmm = deliveryDate.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyy = deliveryDate.getFullYear();

if(ccc<=10){
    ccc='0'+ccc
  } 
  if(mm<10){
    mmm='0'+mmm
  } 
  
deliveryDate = yyy+'-'+mmm+'-'+ccc;
document.getElementById("delivery-date").setAttribute("min", deliveryDate);


// FAQ DROP DOWN 
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
