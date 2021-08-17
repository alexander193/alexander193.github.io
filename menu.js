function animate() {
  $.fn.animate_Text = function () {
    var string = this.text();
    return this.each(function () {
      var $this = $(this);
      $this.html(string.replace(/./g, '<span class="new">$&</span>'));
      $this.find('span.new').each(function (i, el) {
        setTimeout(function () { $(el).addClass('div_opacity'); }, 20 * i);
      });
    });
  };
    $('#example').show();
    $('#example').animate_Text();
    $('#example4').show();
    $('#example4').animate_Text();
    $('#example3').show();
    $('#example3').animate_Text();
}

$(document).ready(function() {
  animate();
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});

$(function () {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });
});
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});

$(window).on('load', function() {
  $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
});
