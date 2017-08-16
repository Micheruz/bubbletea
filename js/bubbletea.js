$(document).ready(function() {
  $(".navbar-brand").fadeIn("slow");
  // run test on initial page load
  checkSize();



  // run test on resize of the window
  $(window).resize(checkSize);

  function checkSize() {
    var floatCheck = $(".navbar-header").css("float");


    //Home page
    if (floatCheck == "left" && $("li.active a").text() == 'Home') {
      $(".image").html('<img class="display img-responsive" src="images/interior3.jpeg" alt="Bubble tea house interior"/>');

    } else if ($("li.active a").text() == 'Home' && floatCheck != "left") {

      $(".image").html('<img class="display img-responsive" src="images/interior2.jpeg" alt="Bubble tea house interior"/>');


    }

    //About Page
    if (floatCheck == "left" && $("li.active a").text() == "About") {
      $(".image").html('');
    } else if ($("li.active a").text() == "About") {

      $(".image").html('<img class="display img-responsive" src="images/strawtopmini.jpeg" alt="Bubble tea straws"/>');
    }

    //Menu Page
    if (floatCheck == "left" && $("li.active a").text() == "Menu") {

      $(".image").html('<img class="display img-responsive" src="images/threebubbleteamini.jpg" alt="Bubble tea house" />');

    } else if ($("li.active a").text() == "Menu") {

      $(".image").html('<img class="display img-responsive" src="images/threebubbletea2.jpeg" alt="Bubble tea house" />');

    }

    //Contact Page
    if (floatCheck == "left" && $("li.active a").text() == "Contact") {
      $(".image").html('');

    } else if ($("li.active a").text() == "Contact") {

      $(".image").html('<img class="display img-responsive" src="images/interior2.jpeg" alt="Bubble tea house interior"/>');

    }

  }

});
