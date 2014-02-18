/*
schedule_index2011.js
Nov 24 2010
rev up to 30 dec
27 jan
(tried different all-in-one solutions, but none worked for this project)
margot sheehan
*/

/*---Instructions--------------27 jan 2011*****
Each 'party' div has its own javascript node below. This enables each 'party' and its clone to stay tied to each other. It also provides a quick lookup resource for troubleshooting and editing. 

Each js node below shows: a unique index [as eq(n)]; unique id for the 'party' div; unique id for the cloned dupe; timeblock id.

TIMEBLOCKS: These are invisible divs, A through G. When you clone a 'party', the clone goes into an appropriate timeblock in the itinerary. This way the itinerary is sorted chronologically, and the ConflictCatcher js can locate schedule conflicts.

EDITING: If you add or remove seminars from the markup, edit the schedule nodes below so that the party id and index counter match the edited version. Note that most seminars appear in more than one schedule.

MAIN SCHEDULE vs COOKING, WINE, RESERVE schedules: These all work the same way. The only differences are that MAIN schedule div classes are called 'party' while the others are called 'cookingparty', 'wineparty', and 'reserveparty'; and their toggle buttons are called 'buttons' in the MAIN schedule but cookingbtns, winebtns, reservebtns in the others. 
************************************/

//using jQuery.noConflict()...

jQuery(document).ready(function($) {  
// $(document).ready(function() {

//main schedule
$('.buttons:eq(0)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(0)').clone(true).attr('id','p0d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(0)').removeClass('hover'); $('#p0d').remove(); } );
$('.buttons:eq(1)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(1)').clone(true).attr('id','p1d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(1)').removeClass('hover'); $('#p1d').remove(); } );
$('.buttons:eq(2)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(2)').clone(true).attr('id','p2d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(2)').removeClass('hover'); $('#p2d').remove(); } );
$('.buttons:eq(3)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(3)').clone(true).attr('id','p3d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(3)').removeClass('hover'); $('#p3d').remove(); } );
$('.buttons:eq(4)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(4)').clone(true).attr('id','p4d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(4)').removeClass('hover'); $('#p4d').remove(); } );
$('.buttons:eq(5)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(5)').clone(true).attr('id','p5d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(5)').removeClass('hover'); $('#p5d').remove(); } );
$('.buttons:eq(6)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(6)').clone(true).attr('id','p6d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(6)').removeClass('hover'); $('#p6d').remove(); } );
$('.buttons:eq(7)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(7)').clone(true).attr('id','p7d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(7)').removeClass('hover'); $('#p7d').remove(); } );
$('.buttons:eq(8)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(8)').clone(true).attr('id','p8d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(8)').removeClass('hover');$('#p8d').remove(); } );
$('.buttons:eq(9)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(9)').clone(true).attr('id','p9d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.buttons:eq(9)').removeClass('hover');$('#p9d').remove(); } );      

$('.buttons:eq(10)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(10)').clone(true).attr('id','p10d').appendTo('#A1timeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(10)').removeClass('hover'); $('#p10d').remove(); } );   
$('.buttons:eq(11)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(11)').clone(true).attr('id','p11d').appendTo('#A2timeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(11)').removeClass('hover');$('#p11d').remove(); } );
$('.buttons:eq(12)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(12)').clone(true).attr('id','p12d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(12)').removeClass('hover');$('#p12d').remove(); } );          
$('.buttons:eq(13)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(13)').clone(true).attr('id','p13d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(13)').removeClass('hover');$('#p13d').remove(); } );       
$('.buttons:eq(14)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(14)').clone(true).attr('id','p14d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(14)').removeClass('hover');$('#p14d').remove(); } );
$('.buttons:eq(15)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(15)').clone(true).attr('id','p15d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(15)').removeClass('hover');$('#p15d').remove(); } );
$('.buttons:eq(16)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(16)').clone(true).attr('id','p16d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(16)').removeClass('hover');$('#p16d').remove(); } );
$('.buttons:eq(17)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(17)').clone(true).attr('id','p17d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(17)').removeClass('hover');$('#p17d').remove(); } );                       
$('.buttons:eq(18)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(18)').clone(true).attr('id','p18d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(18)').removeClass('hover');$('#p18d').remove(); } );   
$('.buttons:eq(19)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(19)').clone(true).attr('id','p19d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(19)').removeClass('hover');$('#p19d').remove(); } );  

$('.buttons:eq(20)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(20)').clone(true).attr('id','p20d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(20)').removeClass('hover');$('#p20d').remove(); } );
$('.buttons:eq(21)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(21)').clone(true).attr('id','p21d').appendTo('#Btimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(21)').removeClass('hover');$('#p21d').remove(); } );
$('.buttons:eq(22)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(22)').clone(true).attr('id','p22d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(22)').removeClass('hover');$('#p22d').remove(); } );
$('.buttons:eq(23)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(23)').clone(true).attr('id','p23d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(23)').removeClass('hover');$('#p23d').remove(); } );
$('.buttons:eq(24)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(24)').clone(true).attr('id','p24d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(24)').removeClass('hover');$('#p24d').remove(); } );
$('.buttons:eq(25)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(25)').clone(true).attr('id','p25d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(25)').removeClass('hover');$('#p25d').remove(); } );
$('.buttons:eq(26)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(26)').clone(true).attr('id','p26d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(26)').removeClass('hover');$('#p26d').remove(); } );
$('.buttons:eq(27)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(27)').clone(true).attr('id','p27d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(27)').removeClass('hover');$('#p27d').remove(); } );
$('.buttons:eq(28)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(28)').clone(true).attr('id','p28d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(28)').removeClass('hover');$('#p28d').remove(); } );
$('.buttons:eq(29)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(29)').clone(true).attr('id','p29d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(29)').removeClass('hover');$('.buttons:eq(23)').removeClass('hover');$('#p29d').remove(); } );

$('.buttons:eq(30)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(30)').clone(true).attr('id','p30d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(30)').removeClass('hover');$('#p30d').remove(); } );
$('.buttons:eq(31)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(31)').clone(true).attr('id','p31d').appendTo('#Ctimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(31)').removeClass('hover');$('#p31d').remove(); } );
$('.buttons:eq(32)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(32)').clone(true).attr('id','p32d').appendTo('#C1timeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(32)').removeClass('hover');$('#p32d').remove(); } );
$('.buttons:eq(33)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(33)').clone(true).attr('id','p33d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(33)').removeClass('hover');$('#p33d').remove(); } );
$('.buttons:eq(34)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(34)').clone(true).attr('id','p34d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(34)').removeClass('hover');$('#p34d').remove(); } );
$('.buttons:eq(35)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(35)').clone(true).attr('id','p35d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(35)').removeClass('hover');$('#p35d').remove(); } );
$('.buttons:eq(36)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(36)').clone(true).attr('id','p36d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(36)').removeClass('hover');$('#p36d').remove(); } );
$('.buttons:eq(37)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(37)').clone(true).attr('id','p37d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(37)').removeClass('hover');$('#p37d').remove(); } );
$('.buttons:eq(38)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(38)').clone(true).attr('id','p38d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(38)').removeClass('hover');$('#p38d').remove(); } );
$('.buttons:eq(39)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(39)').clone(true).attr('id','p39d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(39)').removeClass('hover');$('#p39d').remove(); } );

$('.buttons:eq(40)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(40)').clone(true).attr('id','p40d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(40)').removeClass('hover');$('#p40d').remove(); } );
$('.buttons:eq(41)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(41)').clone(true).attr('id','p41d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(41)').removeClass('hover');$('#p41d').remove(); } );     	
$('.buttons:eq(42)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(42)').clone(true).attr('id','p42d').appendTo('#Dtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(42)').removeClass('hover');$('#p42d').remove(); } );	
$('.buttons:eq(43)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(43)').clone(true).attr('id','p43d').appendTo('#D1timeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(43)').removeClass('hover');$('#p43d').remove(); } );
$('.buttons:eq(44)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(44)').clone(true).attr('id','p44d').appendTo('#D2timeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(44)').removeClass('hover');$('#p44d').remove(); } );
$('.buttons:eq(45)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(45)').clone(true).attr('id','p45d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(45)').removeClass('hover');$('#p45d').remove(); } );
$('.buttons:eq(46)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(46)').clone(true).attr('id','p46d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(46)').removeClass('hover');$('#p46d').remove(); } );
$('.buttons:eq(47)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(47)').clone(true).attr('id','p47d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(47)').removeClass('hover');$('#p47d').remove(); } );

$('.buttons:eq(48)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(48)').clone(true).attr('id','p48d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(48)').removeClass('hover');$('#p48d').remove(); } );

$('.buttons:eq(49)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(49)').clone(true).attr('id','p49d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(49)').removeClass('hover');$('#p49d').remove(); } );

$('.buttons:eq(50)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(50)').clone(true).attr('id','p50d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(50)').removeClass('hover');$('#p50d').remove(); } );
$('.buttons:eq(51)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(51)').clone(true).attr('id','p51d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(51)').removeClass('hover');$('#p51d').remove(); } );
$('.buttons:eq(52)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(52)').clone(true).attr('id','p52d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(52)').removeClass('hover');$('#p52d').remove(); } );
$('.buttons:eq(53)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(53)').clone(true).attr('id','p53d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(53)').removeClass('hover');$('#p53d').remove(); } );
$('.buttons:eq(54)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(54)').clone(true).attr('id','p54d').appendTo('#Etimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(54)').removeClass('hover');$('#p54d').remove(); } );
$('.buttons:eq(55)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(55)').clone(true).attr('id','p55d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(55)').removeClass('hover');$('#p55d').remove(); } );
$('.buttons:eq(56)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(56)').clone(true).attr('id','p56d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(56)').removeClass('hover');$('#p56d').remove(); } );
$('.buttons:eq(57)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(57)').clone(true).attr('id','p57d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(57)').removeClass('hover');$('#p57d').remove(); } );
$('.buttons:eq(58)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(58)').clone(true).attr('id','p58d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(58)').removeClass('hover');$('#p58d').remove(); } );
$('.buttons:eq(59)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(59)').clone(true).attr('id','p59d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(59)').removeClass('hover');$('#p59d').remove(); } );

$('.buttons:eq(60)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(60)').clone(true).attr('id','p60d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(60)').removeClass('hover');$('#p60d').remove(); } );
$('.buttons:eq(61)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(61)').clone(true).attr('id','p61d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(61)').removeClass('hover');$('#p61d').remove(); } );
$('.buttons:eq(62)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(62)').clone(true).attr('id','p62d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(62)').removeClass('hover');$('#p62d').remove(); } );
$('.buttons:eq(63)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(63)').clone(true).attr('id','p63d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(63)').removeClass('hover');$('#p63d').remove(); } );
$('.buttons:eq(64)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(64)').clone(true).attr('id','p64d').appendTo('#Ftimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(64)').removeClass('hover');$('#p64d').remove(); } );
$('.buttons:eq(65)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(65)').clone(true).attr('id','p65d').appendTo('#F1timeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(65)').removeClass('hover');$('#p65d').remove(); } );
$('.buttons:eq(66)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(66)').clone(true).attr('id','p66d').appendTo('#Gtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(66)').removeClass('hover');$('#p66d').remove(); } );
$('.buttons:eq(67)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(67)').clone(true).attr('id','p67d').appendTo('#Gtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(67)').removeClass('hover');$('#p67d').remove(); } );
$('.buttons:eq(68)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(68)').clone(true).attr('id','p68d').appendTo('#Gtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(68)').removeClass('hover');$('#p68d').remove(); } );
$('.buttons:eq(69)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(69)').clone(true).attr('id','p69d').appendTo('#Gtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(69)').removeClass('hover');$('#p69d').remove(); } );

$('.buttons:eq(70)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(70)').clone(true).attr('id','p70d').appendTo('#Gtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(70)').removeClass('hover');$('#p70d').remove(); } );
$('.buttons:eq(71)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(71)').clone(true).attr('id','p71d').appendTo('#Gtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(71)').removeClass('hover');$('#p71d').remove(); } );
$('.buttons:eq(72)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(72)').clone(true).attr('id','p72d').appendTo('#Gtimeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(72)').removeClass('hover');$('#p72d').remove(); } );
$('.buttons:eq(73)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(73)').clone(true).attr('id','p73d').appendTo('#G1timeblock'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(73)').removeClass('hover');$('#p73d').remove(); } );
$('.buttons:eq(74)').toggle( function(){ $(this).addClass('hover');
//empty nodes to be used if needed
$('.party:eq(74)').clone(true).attr('id','p74d').appendTo('.sat'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(74)').removeClass('hover');$('#p74d').remove(); } );
$('.buttons:eq(75)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(75)').clone(true).attr('id','p75d').appendTo('.sat'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(75)').removeClass('hover');$('#p75d').remove(); } );
$('.buttons:eq(76)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(76)').clone(true).attr('id','p76d').appendTo('.sat'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(76)').removeClass('hover');$('#p76d').remove(); } );
$('.buttons:eq(77)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(77)').clone(true).attr('id','p77d').appendTo('.sat'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(77)').removeClass('hover');$('#p77d').remove(); } );
$('.buttons:eq(78)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(78)').clone(true).attr('id','p78d').appendTo('.sat'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(78)').removeClass('hover');$('#p78d').remove(); } );
$('.buttons:eq(79)').toggle( function(){ $(this).addClass('hover'); $('.party:eq(79)').clone(true).attr('id','p79d').appendTo('.sat'); }, function(){ $(this).removeClass('hover'); $('.buttons:eq(79)').removeClass('hover');$('#p79d').remove(); } );

// cooking demos
// eq[n] counter begins again with c0, c1...

$('.cookingbtns:eq(0)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(0)').clone(true).attr('id','c0d').appendTo('#Atimeblock'); }, function(){ $(this).removeClass('hover'); $('.cookingbtns:eq(0)').removeClass('hover'); $('#c0d').remove(); } );
$('.cookingbtns:eq(1)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(1)').clone(true).attr('id','c1d').appendTo('#Atimeblock'); }, function(){ $(this).removeClass('hover'); $('.cookingbtns:eq(1)').removeClass('hover'); $('#c1d').remove(); } );
$('.cookingbtns:eq(2)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(2)').clone(true).attr('id','c2d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(2)').removeClass('hover'); $('#c2d').remove(); } );
$('.cookingbtns:eq(3)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(3)').clone(true).attr('id','c3d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(3)').removeClass('hover'); $('#c3d').remove(); } );
$('.cookingbtns:eq(4)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(4)').clone(true).attr('id','c4d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(4)').removeClass('hover'); $('#c4d').remove(); } );
$('.cookingbtns:eq(5)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(5)').clone(true).attr('id','c5d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(5)').removeClass('hover'); $('#c5d').remove(); } );
$('.cookingbtns:eq(6)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(6)').clone(true).attr('id','c6d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(6)').removeClass('hover'); $('#c6d').remove(); } );
$('.cookingbtns:eq(7)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(7)').clone(true).attr('id','c7d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(7)').removeClass('hover'); $('#c7d').remove(); } );
$('.cookingbtns:eq(8)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(8)').clone(true).attr('id','c8d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(8)').removeClass('hover'); $('#c8d').remove(); } );
$('.cookingbtns:eq(9)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(9)').clone(true).attr('id','c9d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(9)').removeClass('hover'); $('#c9d').remove(); } );

//c10-c12 are extras
$('.cookingbtns:eq(10)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(10)').clone(true).attr('id','c10d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(10)').removeClass('hover'); $('#c10d').remove(); } );
$('.cookingbtns:eq(11)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(11)').clone(true).attr('id','c11d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(11)').removeClass('hover'); $('#c11d').remove(); } );
$('.cookingbtns:eq(12)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(12)').clone(true).attr('id','c12d').appendTo('.Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(12)').removeClass('hover'); $('#c12d').remove(); } );
//

$('.cookingbtns:eq(13)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(13)').clone(true).attr('id','c13d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(13)').removeClass('hover'); $('#c13d').remove(); } );
$('.cookingbtns:eq(14)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(14)').clone(true).attr('id','c14d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(14)').removeClass('hover'); $('#c14d').remove(); } );
$('.cookingbtns:eq(15)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(15)').clone(true).attr('id','c15d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(15)').removeClass('hover'); $('#c15d').remove(); } );
$('.cookingbtns:eq(16)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(16)').clone(true).attr('id','c16d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(16)').removeClass('hover'); $('#c16d').remove(); } );
$('.cookingbtns:eq(17)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(17)').clone(true).attr('id','c17d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(17)').removeClass('hover'); $('#c17d').remove(); } );
$('.cookingbtns:eq(18)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(18)').clone(true).attr('id','c18d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(18)').removeClass('hover'); $('#c18d').remove(); } );
$('.cookingbtns:eq(19)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(19)').clone(true).attr('id','c19d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(19)').removeClass('hover'); $('#c19d').remove(); } );
$('.cookingbtns:eq(20)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(20)').clone(true).attr('id','c20d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(20)').removeClass('hover'); $('#c20d').remove(); } );
$('.cookingbtns:eq(21)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(21)').clone(true).attr('id','c21d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(21)').removeClass('hover'); $('#c21d').remove(); } );
$('.cookingbtns:eq(22)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(22)').clone(true).attr('id','c22d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(22)').removeClass('hover'); $('#c22d').remove(); } );

//c23-25 are extras
$('.cookingbtns:eq(23)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(23)').clone(true).attr('id','c23d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(23)').removeClass('hover'); $('#c23d').remove(); } );
$('.cookingbtns:eq(24)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(24)').clone(true).attr('id','c24d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(24)').removeClass('hover'); $('#c24d').remove(); } );
$('.cookingbtns:eq(25)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(25)').clone(true).attr('id','c25d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(25)').removeClass('hover'); $('#c25d').remove(); } );

$('.cookingbtns:eq(26)').toggle( function(){ $(this).addClass('hover'); $('.cookingparty:eq(26)').clone(true).attr('id','c26d').appendTo('#Gtimeblock'); }, function(){
$(this).removeClass('hover'); $('.cookingbtns:eq(26)').removeClass('hover'); $('#c26d').remove(); } );



// wine tastings
// eq[n] counter begins again with w0, w1...

$('.winebtns:eq(0)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(0)').clone(true).attr('id','w0d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(0)').removeClass('hover'); $('#w0d').remove(); } );
$('.winebtns:eq(1)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(1)').clone(true).attr('id','w1d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(1)').removeClass('hover'); $('#w1d').remove(); } );
$('.winebtns:eq(2)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(2)').clone(true).attr('id','w2d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(2)').removeClass('hover'); $('#w2d').remove(); } );
$('.winebtns:eq(3)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(3)').clone(true).attr('id','w3d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(3)').removeClass('hover'); $('#w3d').remove(); } );
$('.winebtns:eq(4)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(4)').clone(true).attr('id','w4d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(4)').removeClass('hover'); $('#w4d').remove(); } );
$('.winebtns:eq(5)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(5)').clone(true).attr('id','w5d').appendTo('#Atimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(5)').removeClass('hover'); $('#w5d').remove(); } );
$('.winebtns:eq(6)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(6)').clone(true).attr('id','w6d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(6)').removeClass('hover'); $('#w6d').remove(); } );
$('.winebtns:eq(7)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(7)').clone(true).attr('id','w7d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(7)').removeClass('hover'); $('#w7d').remove(); } );
$('.winebtns:eq(8)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(8)').clone(true).attr('id','w8d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(8)').removeClass('hover'); $('#w8d').remove(); } );
$('.winebtns:eq(9)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(9)').clone(true).attr('id','w9d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(9)').removeClass('hover'); $('#w9d').remove(); } );
$('.winebtns:eq(10)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(10)').clone(true).attr('id','w10d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(10)').removeClass('hover'); $('#w10d').remove(); } );
$('.winebtns:eq(11)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(11)').clone(true).attr('id','w11d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(11)').removeClass('hover'); $('#w11d').remove(); } );

$('.winebtns:eq(12)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(12)').clone(true).attr('id','w12d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(12)').removeClass('hover'); $('#w12d').remove(); } );
$('.winebtns:eq(13)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(13)').clone(true).attr('id','w13d').appendTo('#Btimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(13)').removeClass('hover'); $('#w13d').remove(); } );
$('.winebtns:eq(14)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(14)').clone(true).attr('id','w14d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(14)').removeClass('hover'); $('#w14d').remove(); } );
$('.winebtns:eq(15)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(15)').clone(true).attr('id','w15d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(15)').removeClass('hover'); $('#w15d').remove(); } );
$('.winebtns:eq(16)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(16)').clone(true).attr('id','w16d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(16)').removeClass('hover'); $('#w16d').remove(); } );
$('.winebtns:eq(17)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(17)').clone(true).attr('id','w17d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(17)').removeClass('hover'); $('#w17d').remove(); } );
$('.winebtns:eq(18)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(18)').clone(true).attr('id','w18d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(18)').removeClass('hover'); $('#w18d').remove(); } );
$('.winebtns:eq(19)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(19)').clone(true).attr('id','w19d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(19)').removeClass('hover'); $('#w19d').remove(); } );

//w20-22 are extras
$('.winebtns:eq(20)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(20)').clone(true).attr('id','w20d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(20)').removeClass('hover'); $('#w20d').remove(); } );
$('.winebtns:eq(21)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(21)').clone(true).attr('id','w21d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(21)').removeClass('hover'); $('#w21d').remove(); } );
$('.winebtns:eq(22)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(22)').clone(true).attr('id','w22d').appendTo('#Ctimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(22)').removeClass('hover'); $('#w22d').remove(); } );
//

$('.winebtns:eq(23)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(23)').clone(true).attr('id','w23d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(23)').removeClass('hover'); $('#w23d').remove(); } );
$('.winebtns:eq(24)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(24)').clone(true).attr('id','w24d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(24)').removeClass('hover'); $('#w24d').remove(); } );
$('.winebtns:eq(25)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(25)').clone(true).attr('id','w25d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(25)').removeClass('hover'); $('#w25d').remove(); } );
$('.winebtns:eq(26)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(26)').clone(true).attr('id','w26d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(26)').removeClass('hover'); $('#w26d').remove(); } );
$('.winebtns:eq(27)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(27)').clone(true).attr('id','w27d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(27)').removeClass('hover'); $('#w27d').remove(); } );
$('.winebtns:eq(28)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(28)').clone(true).attr('id','w28d').appendTo('#Dtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(28)').removeClass('hover'); $('#w28d').remove(); } );
$('.winebtns:eq(29)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(29)').clone(true).attr('id','w29d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(29)').removeClass('hover'); $('#w29d').remove(); } );

$('.winebtns:eq(30)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(30)').clone(true).attr('id','w30d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(30)').removeClass('hover'); $('#w30d').remove(); } );

$('.winebtns:eq(31)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(31)').clone(true).attr('id','w31d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(31)').removeClass('hover'); $('#w31d').remove(); } );

$('.winebtns:eq(32)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(32)').clone(true).attr('id','w32d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(32)').removeClass('hover'); $('#w32d').remove(); } );

$('.winebtns:eq(33)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(33)').clone(true).attr('id','w33d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(33)').removeClass('hover'); $('#w33d').remove(); } );

$('.winebtns:eq(34)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(34)').clone(true).attr('id','w34d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(34)').removeClass('hover'); $('#w34d').remove(); } );

$('.winebtns:eq(35)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(35)').clone(true).attr('id','w35d').appendTo('#Etimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(35)').removeClass('hover'); $('#w35d').remove(); } );

$('.winebtns:eq(36)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(36)').clone(true).attr('id','w36d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(36)').removeClass('hover'); $('#w36d').remove(); } );

$('.winebtns:eq(37)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(37)').clone(true).attr('id','w37d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(37)').removeClass('hover'); $('#w37d').remove(); } );

$('.winebtns:eq(38)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(38)').clone(true).attr('id','w38d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(38)').removeClass('hover'); $('#w38d').remove(); } );

$('.winebtns:eq(39)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(39)').clone(true).attr('id','w39d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(39)').removeClass('hover'); $('#w39d').remove(); } );

$('.winebtns:eq(40)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(40)').clone(true).attr('id','w40d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(40)').removeClass('hover'); $('#w40d').remove(); } );

$('.winebtns:eq(41)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(41)').clone(true).attr('id','w41d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(41)').removeClass('hover'); $('#w41d').remove(); } );

$('.winebtns:eq(42)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(42)').clone(true).attr('id','w42d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(42)').removeClass('hover'); $('#w42d').remove(); } );

//w43-46 are extras
$('.winebtns:eq(43)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(43)').clone(true).attr('id','w43d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(43)').removeClass('hover'); $('#w43d').remove(); } );

$('.winebtns:eq(44)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(44)').clone(true).attr('id','w44d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(44)').removeClass('hover'); $('#w44d').remove(); } );

$('.winebtns:eq(45)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(45)').clone(true).attr('id','w45d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(45)').removeClass('hover'); $('#w45d').remove(); } );

$('.winebtns:eq(46)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(46)').clone(true).attr('id','w46d').appendTo('#Ftimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(46)').removeClass('hover'); $('#w46d').remove(); } );
//

$('.winebtns:eq(47)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(47)').clone(true).attr('id','w47d').appendTo('#Gtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(47)').removeClass('hover'); $('#w47d').remove(); } );

$('.winebtns:eq(48)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(48)').clone(true).attr('id','w48d').appendTo('#Gtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(48)').removeClass('hover'); $('#w48d').remove(); } );

$('.winebtns:eq(49)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(49)').clone(true).attr('id','w49d').appendTo('#Gtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(49)').removeClass('hover'); $('#w49d').remove(); } );

$('.winebtns:eq(50)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(50)').clone(true).attr('id','w50d').appendTo('#Gtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(50)').removeClass('hover'); $('#w50d').remove(); } );

$('.winebtns:eq(51)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(51)').clone(true).attr('id','w51d').appendTo('#Gtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(51)').removeClass('hover'); $('#w51d').remove(); } );

//extras
$('.winebtns:eq(52)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(52)').clone(true).attr('id','w52d').appendTo('#Gtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(52)').removeClass('hover'); $('#w52d').remove(); } );

$('.winebtns:eq(53)').toggle( function(){ $(this).addClass('hover'); $('.wineparty:eq(53)').clone(true).attr('id','w53d').appendTo('#Gtimeblock'); }, function(){
$(this).removeClass('hover'); $('.winebtns:eq(53)').removeClass('hover'); $('#w53d').remove(); } );
//


/*-- Reserve Tastings --*/
$('.reservebtns:eq(0)').toggle( function(){ $(this).addClass('hover'); $('.reserveparty:eq(0)').clone(true).attr('id','r0d').appendTo('#A1timeblock'); }, function(){
$(this).removeClass('hover'); $('.reservebtns:eq(0)').removeClass('hover'); $('#r0d').remove(); } );

$('.reservebtns:eq(1)').toggle( function(){ $(this).addClass('hover'); $('.reserveparty:eq(1)').clone(true).attr('id','r1d').appendTo('#A2timeblock'); }, function(){
$(this).removeClass('hover'); $('.reservebtns:eq(1)').removeClass('hover'); $('#r1d').remove(); } );

$('.reservebtns:eq(2)').toggle( function(){ $(this).addClass('hover'); $('.reserveparty:eq(2)').clone(true).attr('id','r2d').appendTo('#C1timeblock'); }, function(){
$(this).removeClass('hover'); $('.reservebtns:eq(2)').removeClass('hover'); $('#r2d').remove(); } );

$('.reservebtns:eq(3)').toggle( function(){ $(this).addClass('hover'); $('.reserveparty:eq(3)').clone(true).attr('id','r3d').appendTo('#D1timeblock'); }, function(){
$(this).removeClass('hover'); $('.reservebtns:eq(3)').removeClass('hover'); $('#r3d').remove(); } );

$('.reservebtns:eq(4)').toggle( function(){ $(this).addClass('hover'); $('.reserveparty:eq(4)').clone(true).attr('id','r4d').appendTo('#D2timeblock'); }, function(){
$(this).removeClass('hover'); $('.reservebtns:eq(4)').removeClass('hover'); $('#r4d').remove(); } );

$('.reservebtns:eq(5)').toggle( function(){ $(this).addClass('hover'); $('.reserveparty:eq(5)').clone(true).attr('id','r5d').appendTo('#F1timeblock'); }, function(){
$(this).removeClass('hover'); $('.reservebtns:eq(5)').removeClass('hover'); $('#r5d').remove(); } );

$('.reservebtns:eq(6)').toggle( function(){ $(this).addClass('hover'); $('.reserveparty:eq(6)').clone(true).attr('id','r6d').appendTo('#G1timeblock'); }, function(){
$(this).removeClass('hover'); $('.reservebtns:eq(6)').removeClass('hover'); $('#r6d').remove(); } );




/*--- ConflictCatcher: inspects each timeblock to see if you're overscheduled. Long working doggy version on top. ---*/
             					 
 				$("#conflictCheck").click(function(){            		
					//window.alert($('#Atimeblock > div').length + "divs are in Atimeblock");   
 					//window.alert($('#A1timeblock > div').length + "divs are in A1timeblock"); 
 					 //window.alert($('#A2timeblock > div').length + "divs are in A2timeblock"); 
 					//window.alert($('#Btimeblock > div').length + "divs are in Btimeblock"); 
 					//window.alert($('#Ctimeblock > div').length + "divs are in Ctimeblock"); 
 					 // window.alert($('#Dtimeblock > div').length + "divs are in Dtimeblock"); 
 					 // window.alert($('#D1timeblock > div').length + "divs are in D1timeblock"); 
 					 //window.alert($('#D2timeblock > div').length + "divs are in D2timeblock"); 
 					 //window.alert($('#Etimeblock > div').length + "divs are in Etimeblock");
         			 //window.alert($('#Ftimeblock > div').length + "divs are in Ftimeblock");
					//window.alert($('#Gtimeblock > div').length + "divs are in Gtimeblock");
					
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
  
if (na > 1) {$("#Atimeblock > div").css("background-image", "url(images/madclock.gif)");}
	else {$("#Atimeblock > div").css("background-image", "url(images/happyclock.gif)");};	
if (na1 > 1) {$("#A1timeblock > div").css("background-image", "url(images/madclock.gif)");}
	else {$("#A1timeblock > div").css("background-image", "url(images/happyclock.gif)");}
if (na2 > 1) {$("#A2timeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#A2timeblock > div").css("background-image", "url(images/happyclock.gif)");}	
if (nb > 1) {	$("#Btimeblock > div").css("background-image", "url(images/madclock.gif)");}
	else {$("#Btimeblock > div").css("background-image", "url(images/happyclock.gif)");}
if (nc > 1) {$("#Ctimeblock > div").css("background-image", "url(images/madclock.gif)");}
	else {$("#Ctimeblock > div").css("background-image", "url(images/happyclock.gif)");}
if (nc1 > 1) {$("#C1timeblock > div").css("background-image", "url(images/madclock.gif)");}
	else {$("#C1timeblock > div").css("background-image", "url(images/happyclock.gif)");}
if (nd > 1) {$("#Dtimeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#Dtimeblock > div").css("background-image", "url(images/happyclock.gif)");}	
if (nd1 > 1) {$("#D1timeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#D1timeblock > div").css("background-image", "url(images/happyclock.gif)");}	
if (nd2 > 1) {$("#D2timeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#D2timeblock > div").css("background-image", "url(images/happyclock.gif)");}    
if (ne > 1) {$("#Etimeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#Etimeblock > div").css("background-image", "url(images/happyclock.gif)");}   
if (nf > 1) {$("#Ftimeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#Ftimeblock > div").css("background-image", "url(images/happyclock.gif)");}   
if (nf1 > 1) {$("#F1timeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#F1timeblock > div").css("background-image", "url(images/happyclock.gif)");}   
if (ng > 1) {$("#Gtimeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#Gtimeblock > div").css("background-image", "url(images/happyclock.gif)");}   
if (ng1 > 1) {$("#G1timeblock > div").css("background-image", "url(images/madclock.gif)");}
  else {$("#G1timeblock > div").css("background-image", "url(images/happyclock.gif)");}   



//simplified version 1; needs to be iterative; currently counts total number of divs, not per timeblock; FIX?
  /* 	
$(".timeblock").each(function (i) {
var nt = $(".timeblock > div").length;
  if (nt > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
 });

 */ 

//simplified version 2; same thing but without var...needs an iteration loop
 /* 	 
$(".timeblock").each(function () {
//window.alert($('#Atimeblock > div').length + "divs are in Atimeblock");   
//window.alert($('#A1timeblock > div').length + "divs are in A1timeblock");   
  if ($(".timeblock > div").length > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
 });
*/ 

//simplified version 3; using ids as parents...no workee
/*
  if ($("#Atimeblock > div").length > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
if ($("#Btimeblock > div").length > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
  if ($("#Ctimeblock > div").length > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
 if ($("#Dtimeblock > div").length > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
 if ($("#Etimeblock > div").length > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
 if ($("#Ftimeblock > div").length > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
 if ($("#Gtimeblock > div").length > 1) {
    $(this).css("background-image", "url(images/madclock.gif)");
  } else {
    $(this).css("background-image", "url(images/happyclock.gif)");
  }
*/ 



                          });
                       
 	
	
  });

   