function addLoadEvent(func) {
    // to handle bootstrap stack and allow for failed handlers individually
    var oldonload = window.onload;
    var fname = String(func).substring("function".length, String(func).indexOf("(")).replace(/\s+/g,"");
        fname = "The window load handler \"" + fname + "\" failed: ";
    if (typeof window.onload != 'function')
	{
        window.onload = function(e){
			if(!e)e = window.event;
			try { func(e); } catch (err) { alert(fname + err.description); }
		}
    }
    else
    {
        window.onload = function(e) {
			if(!e)e = window.event;
            if (oldonload) {
                oldonload(e);
                }
            try { func(e); } catch (err) { alert(fname + err.description); }
        }
    }
}

function popUpLinks() {
  if (!document.getElementsByTagName) return false;
  var links = $$("a.external");
  for (var i=0; i < links.length; i++) {
	 	links[i].onclick = function(e) {
			if(!e)e=window.event;
			if(e.shiftKey || e.ctrlKey || e.altKey) return;
			window.open(this.href);
			return false;
			}
      }
}

//all stuff from old _fw_functions.js , stuff to face out but test

function legacyResizeImg(){
    if (document.getElementById("featured_image")) {
		var imageWidth = document.getElementById("featured_image").width;
		//document.write(imageWidth);
		if (imageWidth < 150) {
			document.getElementById("featured_image_frame").style.padding = "20px 10px";
			document.getElementById("featured_image_frame").style.border = "3px solid #999999";
		}
	}
}

// addLoadEvent(popUpLinks);
addLoadEvent(legacyResizeImg);

/*
// preload the images
	if (document.images) {
		var imagesNormal = new Object();
		imagesNormal["quick"] = new Image(18, 96);
		imagesNormal["quick"].src = "/images/search_quick_blank.gif";
		imagesNormal["advanced"] = new Image(18, 114);
		imagesNormal["advanced"].src = "/images/search_advanced_blank.gif";

		imagesNormal["advsearch_recipes"] = new Image(33, 73);
		imagesNormal["advsearch_recipes"].src = "/images/advsearch_recipes.gif";
		imagesNormal["advsearch_features"] = new Image(33, 73);
		imagesNormal["advsearch_features"].src = "/images/advsearch_articles.gif";
		imagesNormal["advsearch_wines"] = new Image(33, 73);
		imagesNormal["advsearch_wines"].src = "/images/advsearch_wines.gif";

		var imagesHilite = new Object();
		imagesHilite["quick"] = new Image(18, 96);
		imagesHilite["quick"].src = "/images/search_quick.gif";
		imagesHilite["advanced"] = new Image(18, 114);
		imagesHilite["advanced"].src = "/images/search_advanced.gif";

		imagesHilite["advsearch_recipes"] = new Image(33, 73);
		imagesHilite["advsearch_recipes"].src = "/images/advsearch_recipes_over.gif";
		imagesHilite["advsearch_features"] = new Image(33, 73);
		imagesHilite["advsearch_features"].src = "/images/advsearch_articles_over.gif";
		imagesHilite["advsearch_wines"] = new Image(33, 73);
		imagesHilite["advsearch_wines"].src = "/images/advsearch_wines_over.gif";
	}
*/

	// image swapping function
	function swapImage(imgName, type) {
		if (document.images) {
			if (type == "hilite") {
				document.images[imgName].src = imagesHilite[imgName].src;
				return true;
			} else if (type == "normal") {
				document.images[imgName].src = imagesNormal[imgName].src;
				return true;
			}
		}
		return false;
	}

	// image swapping function
	function setImage(imgName, searchDiv) {
		if (document.images) {
			var otherImageName = "";
			var otherSearchDiv = "";

			if (imgName == "advanced") {
				otherImageName = "quick";
				otherSearchDiv = "searchbox";
			} else if (imgName == "quick") {
				otherImageName = "advanced";
				otherSearchDiv = "advsearchbox";
			}
			document.images[imgName].src = imagesHilite[imgName].src;
			document.images[otherImageName].src = imagesNormal[otherImageName].src;
			document.getElementById(searchDiv).style.display = "block";
			document.getElementById(otherSearchDiv).style.display = "none";
			// the focus has to be performed after the form has been made visible
			if (imgName == "quick")
				document.quicksearch.searchterm.focus();
			return true;

		}
		return false;
	}


//legacy code

///////////////////////////////////////////////////////////////////////////////
// FUNCTION: pop_slideshow();
// HISTORY: Created 11/07/2002 [me]
// USAGE: This function pops a slideshow into its own window, and renames the
// parent window
///////////////////////////////////////////////////////////////////////////////

function NavDropDownForIE() {
	var agt=navigator.userAgent.toLowerCase();
	var is_mac=(agt.indexOf("mac")!=-1);
	if (document.all&&document.getElementById&&!is_mac) {
		navRoot = document.getElementById("nav");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}

function emailWin(brand,to,text,referedby,error,diag) {
	//var text = "";
	window.open('http://www.amexpub.com/applications/email.cfm?brand='+brand+'&to='+to+'&text='+text+'&referedby='+referedby+'&error='+error+'&diag='+diag+'&url='+location.href, 'emailwindow', 'width=350,height=350,scrollbars=No,location=Yes,left=50,top=50,menubar=No,alwaysRaised=No,resizable=Yes,toolbar=No,status=No');
}

function blogEmailWin(appUrl) {
	window.open(appUrl,'emailwindow','width=350,height=350,scrollbars=No,location=Yes,left=50,top=50,menubar=No,alwaysRaised=No,resizable=Yes,toolbar=No,status=No');
	return false;
}

///////////////////////////////////////////////////////////////////////////////
// FUNCTION: pop_slideshow();
// HISTORY: Created 11/07/2002 [me]
// USAGE: This function pops a slideshow into its own window, and renames the
// parent window
///////////////////////////////////////////////////////////////////////////////
function pop_slideshow(slideshow_name)
{
	//self.name = "parentWindow";
	//var slideshowWin;
	var sspath = "/slideshows/" + slideshow_name;
	window.location = sspath;
	//slideshowWin = window.open(sspath,"slideshow","toolbar=no,width=528,height=408,status=no,scrollbars=no,resize=no,menubar=no");
	//slideshowWin.focus();
}

///////////////////////////////////////////////////////////////////////////////
// FUNCTION: subscribe_to_fw();
// HISTORY: Created 11/07/2002 [me]
// USAGE: This function parses the fullname into fname and lname for entry
// into the ordering system page.
///////////////////////////////////////////////////////////////////////////////
function subscribe_to_fw(formdata)
{
	var s = formdata.fullname.value;
	// mark where the space is betweem the first and last name
	for(i=0; i < s.length; i++)
	{
		if (s.charAt(i)==" ")
			temp = i;
	}
	// cut it into two strings based on the mark
	formdata.fname.value = s.substring(0, temp);
	formdata.lname.value = s.substring(temp + 1, i);
}

///////////////////////////////////////////////////////////////////////////////
// FUNCTION: formatDate()
// HISTORY: Created 11/12/2002 [me]
// USAGE: This function can take 0, 1 or 2 arguments and return a formatted date
///////////////////////////////////////////////////////////////////////////////
function formatDate(theDate, format) {

	// if no argument is provided to this function, recall the function using Now() as the date
	if (arguments.length == 0) {
		dtNow = new Date();
		return formatDate(dtNow);
	}

	// if no format is provided specify a format of Thursday October 14, 2004
	if (arguments.length < 2) {
		format = "daymmmmdyyyy";
	}

	var aDays = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var aMonths = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

	var day = aDays[theDate.getDay()];
	var month = aMonths[theDate.getMonth()];
	var date = theDate.getDate();
	var year = theDate.getFullYear();
	var formattedDate = "";

	switch(format) {
		case "daymmmdd":
			formattedDate = day.substring(0,3) + ', ' + month.substring(0,3) + ' ' + date;
			break;
		case "daymmmmdyyyy":
			formattedDate = day + ' ' + month + ' ' + date + ', ' + year;
			break;
		default:
			formattedDate = "the format parameter to the formatDate function is incorrect.";
			break;
	}
	return formattedDate;
}

///////////////////////////////////////////////////////////////////////////////
// FUNCTION: check_recipe_form(form)
// HISTORY: Created 11/12/2002 [me]
// USAGE:
// note: Prevents someone from searching by month alone.
///////////////////////////////////////////////////////////////////////////////
function check_recipe_form(form)
{
	if ((form.pub_month.value != "") && (form.pub_year.value == ""))
	{
		window.alert("You have specified a month without selecting a year. Please pick a year.");
		return false;
	}
	LockButton(form,'submitbutton');
	return true;
}

///////////////////////////////////////////////////////////////////////////////
// FUNCTION: LockButton()
// HISTORY: Created 08/20/03 [me]
// USAGE: This disables a form submit button upon being pressed. It's intent
// is to prevent folks from overloading a procpage with too many requests.
// note: keep the submitted variable OUT of the function!
///////////////////////////////////////////////////////////////////////////////
function LockButton (form,element)
{
	if (form.elements[element].disabled==false)
	{
		form.elements[element].disabled=true;
		form.submit();
	}
}

function validateEmailSyntax(str)
{
	var at="@"
	var dot="."
	var lat=str.indexOf(at)
	var lstr=str.length
	var ldot=str.indexOf(dot)
	if (str.indexOf(at)==-1)
		return false;
	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)
		return false;
	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
		return false;
	if (str.indexOf(at,(lat+1))!=-1)
		return false;
	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot)
		return false;
	if (str.indexOf(dot,(lat+2))==-1)
		return false;
	if (str.indexOf(" ")!=-1)
		return false;
	return true;
}

function validateEmail(form) {
	var error = "";

	if (form.e_mail.value == "")
		error = "Please fill in an EMail Address";
	else if (validateEmailSyntax(form.e_mail.value) == false)
		//error = "Invalid EMail Address";
		error = "You have entered an invalid email address.";

	if (error != "")
	{
		window.alert(error);
		return false;
	}
	return true;
}







///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// need to give credit here to ...
// validates that the field value string has one or more characters in it
function isNotEmpty(elem) {
	var str = elem.value;
    var re = /.+/;
    if(!str.match(re)) {
        alert("Please fill in the required field.");
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}
// validates that the field value string has one or more characters in it
function isPassword(elem) {
	var str = elem.value;
	if(str.length > 11) {
        alert("Password must be no longer than 10 characters");
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}
// validates that the entry is formatted as an e-mail address
function isEMailAddr(elem) {
	var str = elem.value;
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!str.match(re)) {
        alert("Please enter a valid e-mail address.");
        setTimeout("focusElement('" + elem.form.name + "', '" + elem.name + "')", 0);
        return false;
    } else {
        return true;
    }
}

function focusElement(formName, elemName) {
    var elem = document.forms[formName].elements[elemName];
    elem.focus();
    elem.select();
}


function checkPassword(form) {
	if (form.password.value != form.password01.value) {
		alert("Passwords do not match");
		return false;
	} else {
		return true;
	}
}

///////////////////////////////////////////////////////////////

/*
// preload the images
	if (document.images) {
		var imagesNormal = new Object();
		imagesNormal["quick"] = new Image(18, 96);
		imagesNormal["quick"].src = "/images/search_quick_blank.gif";
		imagesNormal["advanced"] = new Image(18, 114);
		imagesNormal["advanced"].src = "/images/search_advanced_blank.gif";

		imagesNormal["advsearch_recipes"] = new Image(33, 73);
		imagesNormal["advsearch_recipes"].src = "/images/advsearch_recipes.gif";
		imagesNormal["advsearch_features"] = new Image(33, 73);
		imagesNormal["advsearch_features"].src = "/images/advsearch_articles.gif";
		imagesNormal["advsearch_wines"] = new Image(33, 73);
		imagesNormal["advsearch_wines"].src = "/images/advsearch_wines.gif";

		var imagesHilite = new Object();
		imagesHilite["quick"] = new Image(18, 96);
		imagesHilite["quick"].src = "/images/search_quick.gif";
		imagesHilite["advanced"] = new Image(18, 114);
		imagesHilite["advanced"].src = "/images/search_advanced.gif";

		imagesHilite["advsearch_recipes"] = new Image(33, 73);
		imagesHilite["advsearch_recipes"].src = "/images/advsearch_recipes_over.gif";
		imagesHilite["advsearch_features"] = new Image(33, 73);
		imagesHilite["advsearch_features"].src = "/images/advsearch_articles_over.gif";
		imagesHilite["advsearch_wines"] = new Image(33, 73);
		imagesHilite["advsearch_wines"].src = "/images/advsearch_wines_over.gif";
	}
*/

	// image swapping function
	function swapImage(imgName, type) {
		if (document.images) {
			if (type == "hilite") {
				document.images[imgName].src = imagesHilite[imgName].src;
				return true;
			} else if (type == "normal") {
				document.images[imgName].src = imagesNormal[imgName].src;
				return true;
			}
		}
		return false;
	}

	// image swapping function
	function setImage(imgName, searchDiv) {
		if (document.images) {
			var otherImageName = "";
			var otherSearchDiv = "";

			if (imgName == "advanced") {
				otherImageName = "quick";
				otherSearchDiv = "searchbox";
			} else if (imgName == "quick") {
				otherImageName = "advanced";
				otherSearchDiv = "advsearchbox";
			}
			document.images[imgName].src = imagesHilite[imgName].src;
			document.images[otherImageName].src = imagesNormal[otherImageName].src;
			document.getElementById(searchDiv).style.display = "block";
			document.getElementById(otherSearchDiv).style.display = "none";
			// the focus has to be performed after the form has been made visible
			if (imgName == "quick")
				document.quicksearch.searchterm.focus();
			return true;

		}
		return false;
	}


	function hideLayer(elementId,indicator,topRef,leftRef,widthRef){
		if(indicator == true){
			//hide it
			document.getElementById(elementId).style.display = 'none';
		}else{
			//display it using the other vars to position the element
			document.getElementById(elementId).style.display = 'inline';
			if(topRef == undefined || topRef == null) return;
			document.getElementById(elementId).style.top = topRef;
			if(leftRef == undefined || leftRef == null) return;
			document.getElementById(elementId).style.left = leftRef;
			if(widthRef == undefined || widthRef == null) return;
			document.getElementById(elementId).style.width = widthRef;
		}
	}
	
	function getQueryVariable(variable)
	{
	       var query = window.location.search.substring(1).toLowerCase();
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	}