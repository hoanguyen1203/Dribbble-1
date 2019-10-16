$(document).ready(function(){
    $(".dot").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
    });
  });