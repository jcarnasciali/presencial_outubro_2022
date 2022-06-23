window.addEventListener('load',function(){

jQuery (function($) {
  $(document).ready(function(){

    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y >= 1000) {
          $('.pageAnchor').show();
      } else {
          $('.pageAnchor').hide();
      }
  
  });

    // SCROLL PARA O TOPO DA PÁGINA AO CLICAR EM QUALQUER LINK DO MENU
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });

      // TOGGLE DO MENU NO RESPONSIVO
      $(".mobile-menu").bind("click", function(){
          $(".main-menu").slideToggle( "slow" );
      });

      // PARALLAX
      $('.parallax').parallax({speed: 0.7});

      // PLAY DO VÍDEO DO YOUTUBE AO SE CLICAR EM UM BOTÃO

      $('#image_id').click(function() {
        $(".frameVideo").attr('src', $(".frameVideo").attr('src') + '?autoplay=1'); 
    });
      

  });

});

});