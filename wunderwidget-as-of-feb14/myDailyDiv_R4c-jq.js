(function($){
$.fn.dailydiv = function(options) {

var defaults= {
'secs'  :'0',
'delay' :'500',
'openingFadeIn' :'1000',
};

var opt = $.extend({}, defaults, options);
    	
    	return this.each(function(){
    		$this = $(this);
            
    		$this({
    			'secs'				: opt.secs,
    			'delay'             : opt.delay,
                'openingFadeIn'     : opt.openingFadeIn

    		});
    	});
    };
})(jQuery);
            


//Get basic Day of Year
Date.prototype.getDOY = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((this - onejan) / 86400000);
} 
var day = new Date();
var DOY = day.getDOY(); // DOY is day of year 1-365
//alert (DOY); 

//Make a backup DOY2 because the first one will change
Date.prototype.getDOY2 = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((this - onejan) / 86400000);
} 
var day2 = new Date();
var DOY2 = day2.getDOY();  //
var today = day2.getDOY(); // same as DOY2 but 'today' is friendlier


/*******************************************************/
/***TIMER: enables an auto-callback after page loads***/
/*******************************************************/
var secs = 0                  //seconds till first div loads
var timerID = null
var timerRunning = false
var delay = 500


function InitTimer()
{
    // Set length of the timer, in seconds
    secs = 0
    StopCountdown()
    StartTimer()
}

function StopCountdown()
{
    if(timerRunning)
        clearTimeout(timerID)
    timerRunning = false
}

function StartTimer()
{
    if (secs==0)
    {   
        StopCountdown()
        //set fadeIn for today's div
        jQuery('.daily-wine').hide();
        WineForToday();
        jQuery('.daily-wine').fadeIn(openingFadeIn);
        
    }
    else
    {
        self.status = secs
        secs = secs - 1
        timerRunning = true
        timerID = self.setTimeout("StartTimer()", delay)
    }
    
}

function WineForToday() {
//alert (DOY);
var todiv = document.createElement('div'); //create div called todiv
var divIdName = 'toDiv';                   //id will be toDiv
todiv.setAttribute('id',divIdName); 
var divName = 'MyDailyDiv';                //name will be MyDailyDiv
todiv.setAttribute('name',divName); 

// todaysmessage is in above script
todiv.innerHTML = todaysmessage;

var wineText = document.getElementById("day" + DOY); // get text for the day
var winetext_today = wineText.cloneNode(true);
var wtID = 'wineText_Today';        //id 
winetext_today.setAttribute('id',wtID);

todiv.appendChild(winetext_today);   // put text 
document.getElementById('daily-wine').appendChild(todiv); 
jQuery('#goLater').hide();
jQuery('#goEarlier').hide();
jQuery('#goEarlier').fadeIn(openingFadeIn);

}

function PreviousDayWine() {

day.setDate(day.getDate()-1);
var prevDOY = day.getDOY();  // prev DOY

prevdaymessage = "<p id='prevDayMessage'>Day of Year is "+ prevDOY + "</p>" 

//remove all 
var allMDD = document.getElementsByName('MyDailyDiv');  
while(allMDD.length > 0) {
    allMDD[0].parentNode.removeChild(allMDD[0]);
} 
//in case browser (IE) does not removeChild
jQuery('.daily-wine').empty();


var prevdiv = document.createElement('div'); 
var divIdName = 'previousDayWine'; 
prevdiv.setAttribute('id',divIdName); 
var divName = 'MyDailyDiv';              //name of div is MyDailyDiv
prevdiv.setAttribute('name',divName); 

prevdiv.innerHTML = prevdaymessage;

var wineText = document.getElementById("day" + prevDOY); // get text for the day

//alert("day" + prevDOY);

//beginwithDOY var set above
if (prevDOY < beginwithDOY)
{
alert(noselectionalert);
NoWineToday();
}
else
{
var winetext_prev = wineText.cloneNode(true);
var wpID = 'wineText_Prev';        //id 
winetext_prev.setAttribute('id',wpID);

prevdiv.appendChild(winetext_prev);   // put text under image for the day

document.getElementById('daily-wine').appendChild(prevdiv); 
jQuery('#goLater').show();
   }
}

function NextDayWine() {

day.setDate(day.getDate()+1);
var nextDOY = day.getDOY();  
nextdaymessage = "<p id='nextDayMessage'>Day of Year is "+ nextDOY + "</p>" 

if (today < nextDOY)
{
alert(comebacktomorrowalert);
// 1) remove the div
var allMDD = document.getElementsByName('MyDailyDiv');  //remove all
while(allMDD.length > 0) {
    allMDD[0].parentNode.removeChild(allMDD[0]);
} 
  //in case browser (IE) does not removeChild
  jQuery('.daily-wine').empty();
  
// 2) reset DOY as tomorrow minus one day
day.setDate(day.getDate()-1);
var DOY = day.getDOY();  

// 3) restart the widget at today
WineForToday();
jQuery('.daily-wine').fadeIn(openingFadeIn);
}

else
{
if (nextDOY < beginwithDOY)
{
alert(noselectionalert_next);
NoWineToday();
}
else
{

var allDumbo = document.getElementsByName('Dumbo');  //remove all
while(allDumbo.length > 0) {
   allDumbo[0].parentNode.removeChild(allDumbo[0]);
} 

var allMDD = document.getElementsByName('MyDailyDiv');  //remove all
while(allMDD.length > 0) {
    allMDD[0].parentNode.removeChild(allMDD[0]);
} 

  //in case browser (IE) does not removeChild
  jQuery('.daily-wine').empty();
  

var nextdiv = document.createElement('div'); 
var divIdName = 'nextDayWine';        //id is nextDayWine
nextdiv.setAttribute('id',divIdName); 
var divName = 'MyDailyDiv';        //name is MyDailyDiv
nextdiv.setAttribute('name',divName); 

var wineText = document.getElementById("day" + nextDOY); // get text for the day
var winetext_next = wineText.cloneNode(true);
var wnID = 'wineText_Next';        //id 
winetext_next.setAttribute('id',wnID);

nextdiv.innerHTML = nextdaymessage;


nextdiv.appendChild(winetext_next);   // put text under image

document.getElementById('daily-wine').appendChild(nextdiv); 
}
}
}

function NoWineToday() {

delete divIdName;
delete divName;
delete todiv;
delete nextdiv;


var prevDOY = day.getDOY();  // prev DOY
dummymessage = "<p id='dummyMessage'>Day of Year is "+ prevDOY + "</p>" 

var allMDD = document.getElementsByName('MyDailyDiv');  //remove all
while(allMDD.length > 0) {
    allMDD[0].parentNode.removeChild(allMDD[0]);
} 
//in case browser (IE) does not removeChild
jQuery('.daily-wine').empty();
  


var dummydiv = document.createElement('div'); 
var divIdName = 'dummyWine'; 
dummydiv.setAttribute('id',divIdName); 
var divName = 'MyDailyDiv';              //name of div is MyDailyDiv
dummydiv.setAttribute('name',divName); 
dummydiv.innerHTML = dummymessage;


var wineText = document.getElementById('dummyWine'); // get text div
var winetext_dummy = wineText.cloneNode(true);
var wdID = 'wineText_Dummy';        //id 
winetext_dummy.setAttribute('id',wdID);



dummydiv.appendChild(winetext_dummy);   // put dummy div in 

document.getElementById('daily-wine').appendChild(dummydiv); 
  
}

