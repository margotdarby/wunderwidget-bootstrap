	/* speaker_index2011.js    
	uses jq1.2.6 or later
	24 Nov 2010  - 4 Feb 2011  margot sheehan
**********************************************
** NOTES ** 

This works the same way as schedules_index2011.js. The session divs that appear under the pictures and bios in the 'speakers' html use similar IDs as the seminars in the main schedule, with an extra 'p' at the beginning. 

Example: Main Schedule: ID #p23   ***is the same seminar as***  Speaker Schedule ID #p23   .

There is only one minor functional difference between schedules_index2011.js and speaker_index2011.js. When you click the ADD button and clone a div into the Itinerary, the Speakers schedule gives the cloned div a unique ID based on the original div's index position--sp+(index). 

Example: the first three Speakers sessions here have the ids #p23, #p56, and #p12 in the html. Their Itinerary clones here will have ids #sp0, #sp1, #sp2. 

EDITING: the speakers' names appear in comments before each speaker's nodes. If you change the html by adding or deleting seminars, corresponding edits should be made in the javascript and comments.

*/

//using jQuery.noConflict()...

jQuery(document).ready(function($) {  
// $(document).ready(function() {
	
		
// Andrés

  	$('.speakerbtns:eq(0)').toggle(
  		function(){
  			$(this).addClass('hover');
  				$('.speakerparty:eq(0)').clone(true).attr('id','sp'+ '0').appendTo('#Ctimeblock');
  		},
  		function(){
  			$(this).removeClass('hover');
  			    $('#'  + 'sp' + '0').remove();
                $('.speakerbtns:eq(0)').removeClass('hover');              
  		}	
  	);
 

  	$('.speakerbtns:eq(1)').toggle(
  		function(){
  			$(this).addClass('hover');
  				$('.speakerparty:eq(1)').clone(true).attr('id','sp'+ '1').appendTo('#Ftimeblock');
  		},
  		function(){
  			$(this).removeClass('hover');
  			    $('#'  + 'sp' + '1').remove();
                $('.speakerbtns:eq(1)').removeClass('hover');              
  		}	
  	);
 
//Battali
  	$('.speakerbtns:eq(2)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(2)').clone(true).attr('id','sp2').appendTo('#Btimeblock'); },
    function(){ $(this).removeClass('hover'); $('#sp2').remove(); $('.speakerbtns:eq(2)').removeClass('hover');
  	 } );
   	$('.speakerbtns:eq(3)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(3)').clone(true).attr('id','sp3').appendTo('#Ctimeblock'); },
    function(){ $(this).removeClass('hover'); $('#sp3').remove(); $('.speakerbtns:eq(3)').removeClass('hover');
   	 } );

//Besh
  	$('.speakerbtns:eq(4)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(4)').clone(true).attr('id','sp4').appendTo('#Dtimeblock'); },
    function(){ $(this).removeClass('hover'); $('#sp4').remove(); $('.speakerbtns:eq(4)').removeClass('hover');
  	 } );

//Betts
   	$('.speakerbtns:eq(5)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(5)').clone(true).attr('id','sp5').appendTo('#Gtimeblock'); },
    function(){ $(this).removeClass('hover'); $('#sp5').remove(); $('.speakerbtns:eq(5)').removeClass('hover');
   	 } );
 
//Biggers
	$('.speakerbtns:eq(6)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(6)').clone(true).attr('id','sp6').appendTo('#Gtimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp6').remove(); $('.speakerbtns:eq(6)').removeClass('hover');
	 } );

//Bohr
	$('.speakerbtns:eq(7)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(7)').clone(true).attr('id','sp7').appendTo('#Gtimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp7').remove(); $('.speakerbtns:eq(7)').removeClass('hover');
	 } );
	
//Chang
	$('.speakerbtns:eq(8)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(8)').clone(true).attr('id','sp8').appendTo('#Btimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp8').remove(); $('.speakerbtns:eq(8)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(9)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(9)').clone(true).attr('id','sp9').appendTo('#Ctimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp9').remove(); $('.speakerbtns:eq(9)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(10)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(10)').clone(true).attr('id','sp10').appendTo('#Etimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp10').remove(); $('.speakerbtns:eq(10)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(11)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(11)').clone(true).attr('id','sp11').appendTo('#Ftimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp11').remove(); $('.speakerbtns:eq(11)').removeClass('hover');
	 } );
	
//Chiarello
	$('.speakerbtns:eq(12)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(12)').clone(true).attr('id','sp12').appendTo('#Gtimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp12').remove(); $('.speakerbtns:eq(12)').removeClass('hover');
	 } );
	
//Colicchio
	$('.speakerbtns:eq(13)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(13)').clone(true).attr('id','sp13').appendTo('#Btimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp13').remove(); $('.speakerbtns:eq(13)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(14)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(14)').clone(true).attr('id','sp14').appendTo('#Etimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp14').remove(); $('.speakerbtns:eq(14)').removeClass('hover');
	 } );
	
//Donnelly	
	$('.speakerbtns:eq(15)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(15)').clone(true).attr('id','sp15').appendTo('#Ctimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp15').remove(); $('.speakerbtns:eq(15)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(16)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(16)').clone(true).attr('id','sp16').appendTo('#Ftimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp16').remove(); $('.speakerbtns:eq(16)').removeClass('hover');
	 } );

//Feniger
	$('.speakerbtns:eq(17)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(17)').clone(true).attr('id','sp17').appendTo('#Btimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp17').remove(); $('.speakerbtns:eq(17)').removeClass('hover');
	 } );
	
//Flay	
	$('.speakerbtns:eq(18)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(18)').clone(true).attr('id','sp18').appendTo('#Etimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp18').remove(); $('.speakerbtns:eq(18)').removeClass('hover');
	 } );  	
	$('.speakerbtns:eq(19)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(19)').clone(true).attr('id','sp19').appendTo('#Ftimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp19').remove(); $('.speakerbtns:eq(19)').removeClass('hover');
	 } );

//Giglio
	$('.speakerbtns:eq(20)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(20)').clone(true).attr('id','sp20').appendTo('#Btimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp20').remove(); $('.speakerbtns:eq(20)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(21)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(21)').clone(true).attr('id','sp21').appendTo('#Ctimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp21').remove(); $('.speakerbtns:eq(21)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(22)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(22)').clone(true).attr('id','sp22').appendTo('#Etimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp22').remove(); $('.speakerbtns:eq(22)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(23)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(23)').clone(true).attr('id','sp23').appendTo('#Ftimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp23').remove(); $('.speakerbtns:eq(23)').removeClass('hover');
	 } );
  	
//Grieco
	$('.speakerbtns:eq(24)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(24)').clone(true).attr('id','sp24').appendTo('#Btimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp24').remove(); $('.speakerbtns:eq(24)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(25)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(25)').clone(true).attr('id','sp25').appendTo('#Dtimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp25').remove(); $('.speakerbtns:eq(25)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(26)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(26)').clone(true).attr('id','sp26').appendTo('#Gtimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp26').remove(); $('.speakerbtns:eq(26)').removeClass('hover');
	 } );
	
//Isle	
	$('.speakerbtns:eq(27)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(27)').clone(true).attr('id','sp27').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp27').remove(); $('.speakerbtns:eq(27)').removeClass('hover');
	 } );
	
//Krader
	$('.speakerbtns:eq(28)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(28)').clone(true).attr('id','sp28').appendTo('#Btimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp28').remove(); $('.speakerbtns:eq(28)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(29)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(29)').clone(true).attr('id','sp29').appendTo('#Ctimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp29').remove(); $('.speakerbtns:eq(29)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(30)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(30)').clone(true).attr('id','sp30').appendTo('#Etimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp30').remove(); $('.speakerbtns:eq(30)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(31)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(31)').clone(true).attr('id','sp31').appendTo('#Ftimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp31').remove(); $('.speakerbtns:eq(31)').removeClass('hover');
	 } );

//Love	
	$('.speakerbtns:eq(32)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(32)').clone(true).attr('id','sp32').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp32').remove(); $('.speakerbtns:eq(32)').removeClass('hover');
	 } );	
	$('.speakerbtns:eq(33)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(33)').clone(true).attr('id','sp33').appendTo('#Etimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp33').remove(); $('.speakerbtns:eq(33)').removeClass('hover');
	 } );	

//Lynch	
	$('.speakerbtns:eq(34)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(34)').clone(true).attr('id','sp34').appendTo('#Atimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp34').remove(); $('.speakerbtns:eq(34)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(35)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(35)').clone(true).attr('id','sp35').appendTo('#Ctimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp35').remove(); $('.speakerbtns:eq(35)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(36)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(36)').clone(true).attr('id','sp36').appendTo('#Ftimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp36').remove(); $('.speakerbtns:eq(36)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(37)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(37)').clone(true).attr('id','sp37').appendTo('#Gtimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp37').remove(); $('.speakerbtns:eq(37)').removeClass('hover');
	 } );
	
//Meehan
	$('.speakerbtns:eq(38)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(38)').clone(true).attr('id','sp38').appendTo('#Btimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp38').remove(); $('.speakerbtns:eq(38)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(39)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(39)').clone(true).attr('id','sp39').appendTo('#Ctimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp39').remove(); $('.speakerbtns:eq(39)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(40)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(40)').clone(true).attr('id','sp40').appendTo('#Etimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp40').remove(); $('.speakerbtns:eq(40)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(41)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(41)').clone(true).attr('id','sp41').appendTo('#Ftimeblock'); },
	 function(){ $(this).removeClass('hover'); $('#sp41').remove(); $('.speakerbtns:eq(41)').removeClass('hover');
	 } );

//Meyer	
	$('.speakerbtns:eq(42)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(42)').clone(true).attr('id','sp42').appendTo('#Btimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp42').remove(); $('.speakerbtns:eq(42)').removeClass('hover');
	 } );	
	$('.speakerbtns:eq(43)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(43)').clone(true).attr('id','sp43').appendTo('#Etimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp43').remove(); $('.speakerbtns:eq(43)').removeClass('hover');
	 } );	

//Nischan	
	$('.speakerbtns:eq(44)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(44)').clone(true).attr('id','sp44').appendTo('#Dtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp44').remove(); $('.speakerbtns:eq(44)').removeClass('hover');
	 } );	
		
//Old		
	$('.speakerbtns:eq(45)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(45)').clone(true).attr('id','sp45').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp45').remove(); $('.speakerbtns:eq(45)').removeClass('hover');
	 } );	
	$('.speakerbtns:eq(46)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(46)').clone(true).attr('id','sp46').appendTo('#Ctimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp46').remove(); $('.speakerbtns:eq(46)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(47)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(47)').clone(true).attr('id','sp47').appendTo('#Dtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp47').remove(); $('.speakerbtns:eq(47)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(48)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(48)').clone(true).attr('id','sp48').appendTo('#Ftimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp48').remove(); $('.speakerbtns:eq(48)').removeClass('hover');
	 } );
	
//Oldman	
	$('.speakerbtns:eq(49)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(49)').clone(true).attr('id','sp49').appendTo('#Ctimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp49').remove(); $('.speakerbtns:eq(49)').removeClass('hover');
	 } );	
	$('.speakerbtns:eq(50)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(50)').clone(true).attr('id','sp50').appendTo('#Etimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp50').remove(); $('.speakerbtns:eq(50)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(51)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(51)').clone(true).attr('id','sp51').appendTo('#Ftimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp51').remove(); $('.speakerbtns:eq(51)').removeClass('hover');
	 } );	

//C Pepin	
	$('.speakerbtns:eq(52)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(52)').clone(true).attr('id','sp52').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp52').remove(); $('.speakerbtns:eq(52)').removeClass('hover');
	 } );
//J Pepin	
	$('.speakerbtns:eq(53)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(53)').clone(true).attr('id','sp53').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp53').remove(); $('.speakerbtns:eq(53)').removeClass('hover');
	 } );	
	
//spares (wiggle-room for editing)		
	$('.speakerbtns:eq(54)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(54)').clone(true).attr('id','sp54').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp54').remove(); $('.speakerbtns:eq(54)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(55)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(55)').clone(true).attr('id','sp55').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp55').remove(); $('.speakerbtns:eq(55)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(56)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(56)').clone(true).attr('id','sp56').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp56').remove(); $('.speakerbtns:eq(56)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(57)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(57)').clone(true).attr('id','sp57').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp57').remove(); $('.speakerbtns:eq(57)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(58)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(58)').clone(true).attr('id','sp58').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp58').remove(); $('.speakerbtns:eq(58)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(59)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(59)').clone(true).attr('id','sp59').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp59').remove(); $('.speakerbtns:eq(59)').removeClass('hover');
	 } );	
	$('.speakerbtns:eq(60)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(60)').clone(true).attr('id','sp60').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp60').remove(); $('.speakerbtns:eq(60)').removeClass('hover');
	 } );	
	

//Roberts
	$('.speakerbtns:eq(61)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(61)').clone(true).attr('id','sp61').appendTo('#Btimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp61').remove(); $('.speakerbtns:eq(61)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(62)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(62)').clone(true).attr('id','sp62').appendTo('#Dtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp62').remove(); $('.speakerbtns:eq(62)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(63)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(63)').clone(true).attr('id','sp63').appendTo('#Etimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp63').remove(); $('.speakerbtns:eq(63)').removeClass('hover');
	 } );
	
//Robinson	
	$('.speakerbtns:eq(64)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(64)').clone(true).attr('id','sp64').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp64').remove(); $('.speakerbtns:eq(64)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(65)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(65)').clone(true).attr('id','sp65').appendTo('#Btimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp65').remove(); $('.speakerbtns:eq(65)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(66)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(66)').clone(true).attr('id','sp66').appendTo('#Dtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp66').remove(); $('.speakerbtns:eq(66)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(67)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(67)').clone(true).attr('id','sp67').appendTo('#Etimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp67').remove(); $('.speakerbtns:eq(67)').removeClass('hover');
	 } );
	
//Sbraga	
	$('.speakerbtns:eq(68)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(68)').clone(true).attr('id','sp68').appendTo('#Gtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp68').remove(); $('.speakerbtns:eq(68)').removeClass('hover');
	 } );	
//Sbrocco	
	$('.speakerbtns:eq(69)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(69)').clone(true).attr('id','sp69').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp69').remove(); $('.speakerbtns:eq(69)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(70)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(70)').clone(true).attr('id','sp70').appendTo('#Dtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp70').remove(); $('.speakerbtns:eq(70)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(71)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(71)').clone(true).attr('id','sp71').appendTo('#Gtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp71').remove(); $('.speakerbtns:eq(71)').removeClass('hover');
	 } );
	
//Simmons	
	$('.speakerbtns:eq(72)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(72)').clone(true).attr('id','sp72').appendTo('#Btimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp72').remove(); $('.speakerbtns:eq(72)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(73)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(73)').clone(true).attr('id','sp73').appendTo('#Etimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp73').remove(); $('.speakerbtns:eq(73)').removeClass('hover');
	 } );
	
//Symon	
	$('.speakerbtns:eq(74)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(74)').clone(true).attr('id','sp74').appendTo('#Ctimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp74').remove(); $('.speakerbtns:eq(74)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(75)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(75)').clone(true).attr('id','sp75').appendTo('#Ftimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp75').remove(); $('.speakerbtns:eq(75)').removeClass('hover');
	 } );
	
//Tsai	
	$('.speakerbtns:eq(76)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(76)').clone(true).attr('id','sp76').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp76').remove(); $('.speakerbtns:eq(76)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(77)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(77)').clone(true).attr('id','sp77').appendTo('#Dtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp77').remove(); $('.speakerbtns:eq(77)').removeClass('hover');
	 } );	
	
//Werlin	
	$('.speakerbtns:eq(78)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(78)').clone(true).attr('id','sp78').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp78').remove(); $('.speakerbtns:eq(78)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(79)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(79)').clone(true).attr('id','sp79').appendTo('#Ctimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp79').remove(); $('.speakerbtns:eq(79)').removeClass('hover');
	 } );
	$('.speakerbtns:eq(80)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(80)').clone(true).attr('id','sp80').appendTo('#Dtimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp80').remove(); $('.speakerbtns:eq(80)').removeClass('hover');
	 } );
	
//	
	$('.speakerbtns:eq(81)').toggle( function(){ $(this).addClass('hover'); $('.speakerparty:eq(81)').clone(true).attr('id','sp81').appendTo('#Atimeblock'); },
	function(){ $(this).removeClass('hover'); $('#sp81').remove(); $('.speakerbtns:eq(81)').removeClass('hover');
	 } );
	
	
	
	
/*----- ConflictCatcher: sees if any timeblocks have more than one item ---*/	
	
								 				$("#conflictCheck-speakers").click(function(){

								             	//	window.alert($('#Atimeblock > div').length + "divs are in Atimeblock");   
								 				//	window.alert($('#Btimeblock > div').length + "divs are in Btimeblock"); 
												//	window.alert($('#A1timeblock > div').length + "divs are in A1timeblock"); 
												//	window.alert($('#A2timeblock > div').length + "divs are in A2timeblock");
												//	window.alert($('#Ctimeblock > div').length + "divs are in Ctimeblock"); 
								 				//	window.alert($('#Dtimeblock > div').length + "divs are in Dtimeblock"); 
								 				//	window.alert($('#Etimeblock > div').length + "divs are in Etimeblock");
												//	window.alert($('#Ftimeblock > div').length + "divs are in Ftimeblock");

								                     var na = $("#Atimeblock > div").length;
								                     var na1 = $("#A1timeblock > div").length;
								                     var na2 = $("#A2timeblock > div").length;
								                     var nb = $("#Btimeblock > div").length;
								                     var nc = $("#Ctimeblock > div").length;
								                     var nc1 = $("#C1timeblock > div").length;
								                     var nd = $("#Dtimeblock > div").length;
								                     var nd1 = $("#D1timeblock > div").length;
								                     var nd2 = $("#D2timeblock > div").length;
								                     var ne = $("#Etimeblock > div").length;
								                     var nf = $("#Ftimeblock > div").length;
								                     var nf1 = $("#F1timeblock > div").length;
								                     var ng = $("#Gtimeblock > div").length;
								                     var ng1 = $("#G1timeblock > div").length;

								if (na > 1) {$("#Atimeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
									else {$("#Atimeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");};	
								if (na1 > 1) {$("#A1timeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
									else {$("#A1timeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}
								if (na2 > 1) {$("#A2timeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#A2timeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}	
								if (nb > 1) {	$("#Btimeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
									else {$("#Btimeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}
								if (nc > 1) {$("#Ctimeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
									else {$("#Ctimeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}
								if (nc1 > 1) {$("#C1timeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
									else {$("#C1timeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}
								if (nd > 1) {$("#Dtimeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#Dtimeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}	
								if (nd1 > 1) {$("#D1timeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#D1timeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}	
								if (nd2 > 1) {$("#D2timeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#D2timeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}    
								if (ne > 1) {$("#Etimeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#Etimeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}   
								if (nf > 1) {$("#Ftimeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#Ftimeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}   
								if (nf1 > 1) {$("#F1timeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#F1timeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}   
								if (ng > 1) {$("#Gtimeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#Gtimeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}   
								if (ng1 > 1) {$("#G1timeblock > div").css("background-image", "url(images/madclock_speaker.gif)");}
								  else {$("#G1timeblock > div").css("background-image", "url(images/happyclock_speaker.gif)");}   


								                          });
	
	
  });
  
   
  
   