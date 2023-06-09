
$("#menu").click(function() {

  console.log("menu clicked");

       $("#nav").removeClass("hidden");
       $("#close").removeClass("hidden");
       $("#menu").addClass("hidden");
  })

  $("#close").click(function() {

    console.log("close clicked");
         $("#nav").addClass("hidden");
         $("#close").addClass("hidden");
         $("#menu").removeClass("hidden");
    })
