//using jQuery.noConflict()...

jQuery(document).ready(function($) {  
// $(document).ready(function() {

  		// When a name link is clicked
  		$("a.name").click(function () {
		//make name column bold when clicked on
		//$("ul.namelinks").addClass("namelinks-strong");
  		// slide up and fade out last choice
  		$(".biopic").fadeOut().slideUp('slow');		
  		// slide speaker content up
  		var biopic_show = $(this).attr("title");
  		$("#"+biopic_show).fadeIn('slow').slideDown();
  		});
        
        //dim out speaker names when itinerary tab is on
        $("#spitintabu").click(function () {
        $("ul.namelinks").removeClass("namelinks-strong");
        $("ul.namelinks").addClass("namelinks-dim");
  	  });
      
       //make name list bold when speaker schedule tab is on
        $("#speakertabu").click(function () {
        $("ul.namelinks").removeClass("namelinks-dim");
        $("ul.namelinks").addClass("namelinks-strong");
  	  });

    });


	/* biopic_loader.js    
	uses jq1.2.6 or later
	24 Nov 2010 margot sheehan
    4 feb 2011
	*/
