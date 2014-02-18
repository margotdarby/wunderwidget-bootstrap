/*--- EMAIL BUTTON SCRIPT ----*/
//using jQuery.noConflict()...

jQuery(document).ready(function($) {  
// $(document).ready(function() {
	
$("#emailsched-button").click(function(){
   if ($("#itinEmailFormContainer").is(":hidden")){                                               
      $('.textitin').clone().appendTo('#styledItinerary');
       	//alert($('#styledItinerary').text());
		//#itinEmailFormContainer is *here* in markup; #itinEmailForm is remote, in iframe
      $("#itinEmailFormContainer").slideDown(1500);
	  $("#itinEmailForm").fadeIn(3000); 
	  $("#styledItinerary").fadeIn(3000);                            
           }
       else{
           $("#itinEmailFormContainer").slideUp("slow");
           }
        });

$("#closePanel").click(function(){
	//alert('thank you for clicking!')
	$("#thankYou").show(500);
	//empty the #styledItinerary in case we wish to revise
	$("#styledItinerary").empty();
	$("#itinEmailFormContainer").slideUp(2200);
 });


$("#printsched-button").click(function(){
	//alert('thank you for clicking!')
	$("#journeysend").addClass("printable");
	window.print();
	return false;
	 });

    });




