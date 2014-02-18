//using jQuery.noConflict()...

jQuery(document).ready(function($) {  
// $(document).ready(function() {

		// When a 'tabu' (tab) link is clicked
		$("a.tabu").click(function () {
		// switch all tabus off
		$(".active").removeClass("active");
		// switch this tabu on
		$(this).addClass("active");	
		// slide content up
		$(".content").slideUp();
		// slide this content up
		var content_show = $(this).attr("title");
		$("#"+content_show).slideDown();
		});

	  });
  
	/* tabu_loader.js    
	uses jq1.2.6 or later
	24 Nov 2010 margot sheehan
	*/


