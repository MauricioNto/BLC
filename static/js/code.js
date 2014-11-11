$( document ).ready(function() {


    function animation(){

        $(".Title").toggleClass('TitleE');
        $(".Avatar-image").toggleClass("Avatar-animation");

            
              
    }


    $( ".Title" ).load(function() {

        $(".Title").toggleClass('TitleE');
        $(".Avatar-image").toggleClass("Avatar-animation");
        setInterval(function(){ animation() }, 4000);

    });



    $( '.MainMenu-link[href^="#"]' ).on('click', function(e) {

        e.preventDefault();

        var target = this.hash,
        $target = $(target);

       $('html, body').stop().animate({

          'scrollTop': $target.offset().top - 45

       }, 900, 'swing');

      
    });


    $('.Social-link').on('click', function(e) {

        e.preventDefault();

        $('.SocialMenu').slideToggle('slow');

    });

 
    $(window).scroll(function() {

    	

	    if ($(this).scrollTop()>210 )
    	{

          $(".MainMenu").addClass('Fixed');
          $(".SocialMenu").addClass('FixedSocial');
                   
        	
     	}
    	else
     	{

          $(".MainMenu").removeClass('Fixed');
          $(".SocialMenu").removeClass('FixedSocial');

                
     	}

	   });

 
});





