(function() {

//Click___Button.
$('.number li').click(function (){
  $('.number li.active').removeClass('active');
  $(this).addClass('active');
});

  $('#da-slider').cslider();

    $(".menu_link").click(function (e) {

      e.preventDefault();

      $(".menu_overlay").toggleClass("open");
      $(".menu").toggleClass("open");


    });
    var $play     =  $('.play'),
        $detail   = $('.detail'),
        $movie    = $('.movie', $detail),
        $close    = $('.close');

    $('.movies .movie').click(function () {
      $movie.html($(this).html());
      $play.appendTo($movie);

     $poster = $('.poster', this).addClass('active');

     $('.poster', $detail).css({
       top: $poster.position().top,
       left: $poster.position().left,
       width: $poster.width(),
       height: $poster.height()

     }).data ({
       top: $poster.position().top,
       left: $poster.position().left,
       width: $poster.width(),
       height: $poster.height()
     })
     $detail.show();

     $('.poster', $detail).delay(10).queue(function(next) {
       $detail.addClass('ready');
       next();
     }).delay(100).queue(function (next) {
       $(this).css({
         top: '-10%',
         left: '-6%',
         width: 266,
         height: 400
       });
       next();
     })
    })

    /* close */
    function close() {
      console.log('asd');
      $p = $('.detail .poster');
      console.log($p)
      $p.css({
        top: $p.data('top'),
        left: $p.data('left'),
        width: $p.data('width'),
        height: $p.data('height'),
      })
      $detail.removeClass('ready').delay(500).queue(function (next) {
        $(this).hide();
        $poster.removeClass('active');
        next();
      });
    }

    $close.click(close);
    $('body').click(function (e) {
      $p = $(e.target).parents();
      if ($p.is('.main__popular__movies')) {
        return false;
      } else {
        close();
      }
    });
    setTimeout(function () {
      $('.movie:eq(0)').click();
    }, 300);

    setTimeout(function () {
      close();
    }, 1700);

    //mixItUp
    var mixer = mixitup('.container');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
      selectors: {
          target: '.blog-item'
      },
      animation: {
          duration: 300
      }
  });



})();
