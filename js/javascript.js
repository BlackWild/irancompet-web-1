(function ($) {
  $(function () {

    $('.parallax').parallax();
    $("#start").click(function () {
      $('html, body').animate({
        scrollTop: $("#toStart").offset().top
      }, 200);
    });
    $('.modal').modal({
      ready: function (modal, trigger) { $("#vid") },
      complete: function () { }
    });

  });
})(jQuery);