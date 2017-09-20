(function ($) {
  $(function () {

    $('.parallax').parallax();
    $("#start").click(function () {
      $('html, body').animate({
        scrollTop: $("#toStart").offset().top
      }, 200);
    });
    $('.modal').modal({
      ready: function (modal, trigger) { $("#vid").get(0).play(); },
      complete: function () { $("#vid").get(0).pause(); }
    });

  });
})(jQuery);