function ShowPreviousDayWine(){jQuery(".daily-wine").hide(),PreviousDayWine(),jQuery(".daily-wine").slideDown(600),jQuery("#prevDayMessage").show(),jQuery("#dummyMessage").show()}function ShowNextDayWine(){jQuery(".daily-wine").hide(),NextDayWine(),jQuery(".daily-wine").fadeIn(800),jQuery("#nextDayMessage").show()}function InitTimer(){secs=0,StopCountdown(),StartTimer()}function StopCountdown(){timerRunning&&clearTimeout(timerID),timerRunning=!1}function StartTimer(){secs==0?(StopCountdown(),jQuery(".daily-wine").hide(),WineForToday(),jQuery(".daily-wine").fadeIn(openingFadeIn)):(self.status=secs,secs-=1,timerRunning=!0,timerID=self.setTimeout("StartTimer()",delay))}function WineForToday(){var a=document.createElement("div"),b="toDiv";a.setAttribute("id",b);var c="MyDailyDiv";a.setAttribute("name",c),a.innerHTML=todaysmessage;if(!document.getElementById("day"+DOY))alert("There seems to be nothing here for today ("+wd+", "+da+" "+mo+" "+fy+"; day of year "+DOY+")!"),NoWineToday();else{var d=document.getElementById("day"+DOY),e=d.cloneNode(!0),f="wineText_Today";e.setAttribute("id",f),a.appendChild(e),document.getElementById("daily-wine").appendChild(a),jQuery("#goLater").hide(),jQuery("#goEarlier").hide(),jQuery("#goEarlier").fadeIn(openingFadeIn)}}function PreviousDayWine(){day.setDate(day.getDate()-1);var a=day.getDOY();jQuery(".daily-wine").empty();var b=document.createElement("div"),c="previousDayWine";b.setAttribute("id",c);var d="MyDailyDiv";b.setAttribute("name",d);var e="<p id='prevDayMessage'>Day of Year is "+a+"</p>";b.innerHTML=e;if(!document.getElementById("day"+a))alert("There is no content here for Day"+a+"!"),NoWineToday();else if(a<beginwithDOY)alert(noselectionalert),NoWineToday();else{var f=document.getElementById("day"+a),g=f.cloneNode(!0),h="wineText_Prev";g.setAttribute("id",h),b.appendChild(g),document.getElementById("daily-wine").appendChild(b),jQuery("#goLater").show()}}function NextDayWine(){day.setDate(day.getDate()+1);var a=day.getDOY();if(today+1==a){alert(comebacktomorrowalert),jQuery(".daily-wine").empty(),day.setDate(day.getDate()-1);var b=day.getDOY();WineForToday(),jQuery(".daily-wine").fadeIn(200)}else if(a<beginwithDOY)alert(noselectionalert_next),NoWineToday();else if(!document.getElementById("day"+a))alert("There is no content here for Day"+a+"!"),NoWineToday();else{jQuery(".daily-wine").empty();var c=document.createElement("div"),d="nextDayWine";c.setAttribute("id",d);var e="MyDailyDiv";c.setAttribute("name",e);var f=document.getElementById("day"+a),g=f.cloneNode(!0),h="wineText_Next";g.setAttribute("id",h);var i="<p id='nextDayMessage'>Day of Year is "+a+"</p>";c.innerHTML=i,c.appendChild(g),document.getElementById("daily-wine").appendChild(c)}}function NoWineToday(){var a=day.getDOY();jQuery(".daily-wine").empty();var b=document.createElement("div"),c="dummyWine";b.setAttribute("id",c);var d="MyDailyDiv";b.setAttribute("name",d);var e="<p id='dummyMessage'>Day of Year is "+a+"</p>";b.innerHTML=e;var f=document.getElementById("dummyWine"),g=f.cloneNode(!0),h="wineText_Dummy";g.setAttribute("id",h),b.appendChild(g),document.getElementById("daily-wine").appendChild(b)}jQuery(document).ready(function(){}),Date.prototype.getDOY=function(){var a=new Date(this.getFullYear(),0,1);return Math.ceil((this-a)/864e5)};var day=new Date,DOY=day.getDOY();Date.prototype.getDOY2=function(){var a=new Date(this.getFullYear(),0,1);return Math.ceil((this-a)/864e5)};var day2=new Date,DOY2=day2.getDOY(),today=day2.getDOY(),weekday=Array(7);weekday[0]="Sunday",weekday[1]="Monday",weekday[2]="Tuesday",weekday[3]="Wednesday",weekday[4]="Thursday",weekday[5]="Friday",weekday[6]="Saturday";var wd=weekday[day.getDay()],month=Array(12);month[0]="January",month[1]="February",month[2]="March",month[3]="April",month[4]="May",month[5]="June",month[6]="July",month[7]="August",month[8]="September",month[9]="October",month[10]="November",month[11]="December";var mo=month[day.getMonth()],da=day.getUTCDate(),fy=day.getFullYear(),todaysmessage="<p id='todaysMessage'>Day "+DOY+" of "+fy+"</p>",beginwithDOY=1,previousyearstartday=300,secs=0,timerID=null,timerRunning=!1,delay=0