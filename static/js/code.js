$( document ).ready(function() {


    function animation(){

         $(".Title").toggleClass('TitleE');
            
              
    }


    $( ".Title" ).load(function() {

        $(".Title").toggleClass('TitleE');
        setInterval(function(){ animation() }, 4000);

    });



    $( '.MainMenu-link[href^="#"]' ).on('click', function(e) {

        e.preventDefault();

        var target = this.hash,
        $target = $(target);

       $('html, body').stop().animate({
          'scrollTop': $target.offset().top
       }, 900, 'swing');

    });

 
    $(window).scroll(function() {

    	

	    if ($(this).scrollTop()>210 )
    	{
        	$(".Title").fadeOut(300);
            $(".MainMenu").addClass('Fixed');
                   
        	
     	}
    	else
     	{

      		$(".Title").fadeIn(500);
          $(".MainMenu").removeClass('Fixed');
                
     	}

	 });

 
});





