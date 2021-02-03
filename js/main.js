
$(document).ready(function(){
    
	$(".loader_inner").delay(2000).fadeOut();
    $(".loader").delay(500).fadeOut("slow");
    
    //SCROLLING THE WINDOW, KEEP THE MENU BAR
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('#prof1').hover(function(){
        $('.prof-info').show().text("Professor Abedalrahman");
    }, function(){
        $('.prof-info').hide();
    });
    $('#prof2').hover(function(){
        $('.prof-info').show().text("Professor Sherif Saad");
    }, function(){
        $('.prof-info').hide();
    });
    $('#prof3').hover(function(){
        $('.prof-info').show().text("Professor Dima Alhadidi");
    }, function(){
        $('.prof-info').hide();
    });

    //COOKIES BUTTON
    $('#cookies-btn').click(function(){
        $('.cookies').hide();
    })

    //TOGGLE THE MENU BAR
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.menu li a').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    

    //TYPING ANIMATION
    $('#helloMessage').text("<Hello, my name is/>");
    var typed = new Typed(".typing",{
        strings: ["Student.", "Developer.", "Freelancer.", "Designer.", "Software Engineer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
        
    //SMOOTH AND SLOW SCROLLER
    $('a[href*="#"]') //Select whatever hash it is referring to
    // Remove links that don't actually link to anything
    .not('[href="#"]')
   .not('[href="#0"]')
   .click(function(event){
        // On-page links
           if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
           // Figure out element to scroll to
           var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           // Does a scroll target exist?
           if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
               $('html, body').animate({
                scrollTop: target.offset().top
               }, 750, function() {
                   // Callback after animation
                   // Must change focus!
                var $target = $(target);
               $target.focus();
               if ($target.is(":focus")) { // Checking if the target was focused
                   return false;
               } else {
                   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                   $target.focus(); // Set focus again
               };
               });
            }
        }
    });
});