function getCookie(c_name)
{
var cookval = ''; 
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    cookval = unescape(y);
    }
  }
  return cookval; 
}

$(document).ready(function() {
	//test for login 
	logincook = getCookie('nyt-d'); 
	if(logincook=='' || logincook==null) {
	  //$('#link_login').show(); //show link to login
    $('#link_login').css('display','inline'); //show link to login
	}

   

})