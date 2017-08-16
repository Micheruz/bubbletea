$(document).ready( function() {
$(".navbar-brand").fadeIn("slow");
// run test on initial page load
    checkSize();



    // run test on resize of the window
    $(window).resize(checkSize);
function checkSize() {
  var floatCheck = $(".navbar-header").css("float");
  var page = $("li.active a").text();

//Home page
  if (floatCheck=="left" && $("li.active a").text()=='Home') {
//  $(".display").attr('src', "images/interior3.jpeg");
  //$( ".cover" ).prepend( "<div class='logo'></div>" );
$(".image").html('<img class="display img-responsive" src="images/interior3.jpeg" alt="Bubble tea house interior"/>');

} else if ($("li.active a").text()=='Home' && floatCheck!="left") {
//  $(".display").attr('src', "images/interior2.jpeg");
  $(".image").html('<img class="display img-responsive" src="images/interior2.jpeg" alt="Bubble tea house interior"/>');
  //$( ".cover div.logo" ).remove();

}

//About Page
if (floatCheck=="left" && $("li.active a").text() == "About") {
  $(".image").html('');
} else if ( $("li.active a").text() == "About" ) {
    $(".image").html('<img class="display img-responsive" src="images/strawtopmini.jpeg" alt="Bubble tea straws"/>');
//$(".display").attr('src', "images/strawtopmini.jpeg");
}

//Menu Page
  if (floatCheck=="left" && $("li.active a").text() == "Menu") {
//  $(".display").attr('src', "images/threebubbleteamini.jpg");
  $(".image").html('<img class="display img-responsive" src="images/threebubbleteamini.jpg" alt="Bubble tea house" />');

} else if ( $("li.active a").text() == "Menu") {
//  $(".display").attr('src', "images/threebubbletea2.jpeg");
  $(".image").html('<img class="display img-responsive" src="images/threebubbletea2.jpeg" alt="Bubble tea house" />');

}

//Contact Page
if (floatCheck=="left" && $("li.active a").text() == "Contact") {
  $(".image").html('');

} else if ( $("li.active a").text() == "Contact") {
$(".image").html('<img class="display img-responsive" src="images/interior2.jpeg" alt="Bubble tea house interior"/>');

}

}

});
