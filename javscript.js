//login

$(document).ready(function () {
    $('.forgot-pass').click(function(event) {
      $(".pr-wrap").toggleClass("show-pass-reset");
    }); 
    
    $('.pass-reset-submit').click(function(event) {
      $(".pr-wrap").removeClass("show-pass-reset");
    }); 
});


//sfondo
$(document).ready(function() { 
    $("img.source-image").hide();
    var $source = $("img.source-image").attr("src");
    $('#page-body').css({
      'backgroundImage': 'url(' + $source +')',
      'backgroundRepeat': 'no-repeat',
      'backgroundPosition': 'top center'
    });
  }); 
