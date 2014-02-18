jQuery(document).ready(function() {

//  alert('this thing works');        
  });

  
/************************  
  
TODO as of 6 april 13
After ln 182 (this file):
How can we make the count-backwards date show proper date? 
> Currently if you use the 
"+ da + " " + mo + " " + fy + " 
for the date, as used in the markup (index.html),
it will always give TODAY's day,month,fullyear.

INVESTIGATE: is there a converter function that takes the DOY and gives you the day-month?
These don't look perfect but they are a start:
http://stackoverflow.com/questions/4048688/how-can-i-convert-day-of-year-to-date-in-javascript
Also review this on DOY: http://javascript.about.com/library/bldayyear.htm



ALSO
Can we make a "pretty date" just for show, NOT based on on DOY but local clock time? Use that for the opening page.

*************************************/


 
 // ----------------------------
/*set slideDown/fadeIn times for previous-day and next-day divs
& show/hide messages for prev, next and dummy*/
function ShowPreviousDayWine() {
	jQuery('.daily-wine').hide();
    PreviousDayWine();
    jQuery('.daily-wine').fadeIn(500);
    jQuery('#prevDayMessage').show();
    jQuery('#dummyMessage').show();
    }  

function ShowNextDayWine() {
	jQuery('.daily-wine').hide();
    NextDayWine();
    jQuery('.daily-wine').fadeIn(800);
    jQuery('#nextDayMessage').show();
    }    
    
          
  
//Get basic Day of Year
  
Date.prototype.getDOY = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((this - onejan) / 86400000);
} 
var day = new Date();
var DOY = day.getDOY(); // DOY is day of year 1-366
//alert (DOY); 

//Backup DOY2 because the first one will be incremented/de-incremented
Date.prototype.getDOY2 = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((this - onejan) / 86400000);
} 
var day2 = new Date();
var DOY2 = day2.getDOY();  //
var today = day2.getDOY(); // same as DOY2 but friendlier

//Date Utils: weekday, month, day of month, year
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var wd = weekday[day.getDay()]

var month=new Array(12);
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";
var mo = month[day.getMonth()];


//var da = day.getUTCDate();
var da = day.getDate();
var fy= day.getFullYear();

// default message to appear with opening item; can be rewritten in markup!
var todaysmessage = "<p id='todaysMessage'>Day "+ DOY + " of " + fy +"</p>"  


/*
Day of Year default variables: 
The first var names the first day that is viewable from this year. E.g., 1 = January 1. The second var tells how far backwards into the previous year the viewer is permitted to click. If the viewer should not be able to click backwards to the previous year, then set this number to 367 or higher. 
(You can also set these in the markup.)
*/
var beginwithDOY = 1;
var previousyearstartday = 300;

 
        
/*******************************************************/
/***TIMER: enables an auto-callback after page loads***/
/*******************************************************/
var secs = 0                  //seconds of countdown
var timerID = null
var timerRunning = false
var delay = 0              //delay before countdown


function InitTimer()
{
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

var todiv = document.createElement('div'); //create div called todiv
var divIdName = 'toDiv';                   //id will be toDiv
todiv.setAttribute('id',divIdName); 
var divName = 'MyDailyDiv';                //name will be MyDailyDiv
todiv.setAttribute('name',divName); 


todiv.innerHTML = todaysmessage;

if(!document.getElementById("day" + DOY))
{
alert("There seems to be nothing here for today ("+ wd + ", "+ da + " " + mo + " " + fy + "; day of year "+ DOY + ")!")
NoWineToday();
}


else
{
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

}

function PreviousDayWine() {

day.setDate(day.getDate()-1);
var prevDOY = day.getDOY();  // prev DOY

jQuery('.daily-wine').empty();


var prevdiv = document.createElement('div'); 
var divIdName = 'previousDayWine'; 
prevdiv.setAttribute('id',divIdName); 
var divName = 'MyDailyDiv';              //name of div is MyDailyDiv
prevdiv.setAttribute('name',divName); 

var prevdaymessage = "<p id='prevDayMessage'>Day of Year is "+ prevDOY + " </p>" 
prevdiv.innerHTML = prevdaymessage;


if(!document.getElementById("day" + prevDOY))
{
alert('There is no content here for Day' + prevDOY + '!')
NoWineToday();

}
else
{

if (prevDOY < beginwithDOY)
{
alert(noselectionalert);
NoWineToday();
}
else
{
var wineText = document.getElementById("day" + prevDOY); // get div for day
var winetext_prev = wineText.cloneNode(true);
var wpID = 'wineText_Prev';        //id 
winetext_prev.setAttribute('id',wpID);

prevdiv.appendChild(winetext_prev);   // put text under image for the day

document.getElementById('daily-wine').appendChild(prevdiv); 
jQuery('#goLater').show();
   }
}
}



function NextDayWine() {

day.setDate(day.getDate()+1);
var nextDOY = day.getDOY();  

if (today+1 == nextDOY) 
{
alert(comebacktomorrowalert);
// 1) remove the div
jQuery('.daily-wine').empty();
  
// 2) reset DOY as tomorrow minus one day
day.setDate(day.getDate()-1);
var DOY = day.getDOY();  

// 3) restart the widget at today
WineForToday();
jQuery('.daily-wine').fadeIn(200);
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
if(!document.getElementById("day" + nextDOY))
{
alert('There is no content here for Day' + nextDOY + '!')
NoWineToday();
}


else
{
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


var nextdaymessage = "<p id='nextDayMessage'>Day of Year is "+ nextDOY + "</p>" 
nextdiv.innerHTML = nextdaymessage;


nextdiv.appendChild(winetext_next);   // put text under image

document.getElementById('daily-wine').appendChild(nextdiv); 
}
}
}
}

function NoWineToday() {

var prevDOY = day.getDOY();  // prev DOY

jQuery('.daily-wine').empty();
  
var dummydiv = document.createElement('div'); 
var divIdName = 'dummyWine'; 
dummydiv.setAttribute('id',divIdName); 
var divName = 'MyDailyDiv';              //name of div is MyDailyDiv
dummydiv.setAttribute('name',divName); 

var dummymessage = "<p id='dummyMessage'>Day of Year is "+ prevDOY + "</p>" 
dummydiv.innerHTML = dummymessage;

var wineText = document.getElementById('dummyWine'); // get text div
var winetext_dummy = wineText.cloneNode(true);
var wdID = 'wineText_Dummy';        //id 
winetext_dummy.setAttribute('id',wdID);

dummydiv.appendChild(winetext_dummy);   // put dummy div in 

document.getElementById('daily-wine').appendChild(dummydiv); 
  
}



            // ----------------------------
            
  