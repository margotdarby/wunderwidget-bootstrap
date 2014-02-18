//Desk Button Hover JS
// 4 box buttons

//preload the images
var images = [
    'img/icon_lg_over_HD.jpg',
    'img/icon_lg_over_DS.jpg',
    'img/icon_sm_over_HD.jpg',
    'img/icon_sm_over_HD-26.jpg',
    'img/icon_sm_over_DS.jpg',
    'img/icon_sm_over_ED.jpg',
    'img/icon_sm_over_CP.jpg',
    'img/icon_sm_non_HD.jpg',
    'img/icon_sm_non_HD-26.jpg',
    'img/icon_sm_non_DS.jpg',
    'img/icon_sm_non_ED.jpg',
    'img/icon_sm_non_CP.jpg'
];

// if lp3HLK8/3-button page, preload those images
if ($('#smallIcons').hasClass('intl-3') || $('#smallIcons').hasClass('lp3HLK8')) {
  var images = [
    'img/lp3HLK8/icon_sm_over_DS.jpg',
    'img/lp3HLK8/icon_sm_over_ED.jpg',
    'img/lp3HLK8/icon_sm_over_CP.jpg',
    'img/lp3HLK8/icon_sm_non_DS.jpg',
    'img/lp3HLK8/icon_sm_non_ED.jpg',
    'img/lp3HLK8/icon_sm_non_CP.jpg'
  ];
}

function getParameterByName(name) 
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}


$(document).ready(function() {

    // ADDED 5/14/13 - QS; should ideally move to a separate file (possibly with or in login_test.js?) at some point.
    // set member tools login link URI attribute to current url (including inbound campaignID, etc) for redirect back to correct LP after login
    $('#login_dig').attr('href', 'https://www.nytimes.com/auth/login?URI='+window.location.href);

    //i have a feeling they are going to want a rule where when mouse is not on any of the icons, then they go to default state... be prepared
    //we'll use a hover event on the div:largeIcons
    $("#largeIcons").hover(function() {
        ///this is the hover function for the wrapper div. 
    }, function() { //the hover off function for Icon div
        //set all images to default. 
      $('#largeIcons img').each(function() {
              var defImg = "img/icon_lg_def_"+$(this).attr('class')+".jpg"; 
              $(this).attr("src",defImg); 
          });       
    }); //end of function hover, end of hover bindage

    $("#smallIcons").hover(function() {
        ///this is the hover function for the wrapper div. 
    }, function() { //the hover off function for Icon div
        //set all images to default. 
      $('#smallIcons img').each(function() {
              var defImg = "img/icon_sm_def_"+$(this).attr('class')+".jpg"; 
              $(this).attr("src",defImg); 
          });
      // specific to lp3HLK8 / 3-button page: we are now using name intl-3 for this class as it pertains to other LPs
      $('#smallIcons.intl-3 img, #smallIcons.lp3HLK8 img').each(function() {
              var defImg = "img/lp3HLK8/icon_sm_def_"+$(this).attr('class')+".jpg"; 
              $(this).attr("src",defImg); 
          });  
    }); //end of function hover, end of hover bindage   
    
    
    //
    $('#largeIcons img').bind("mouseover",
      function() {
          //set each of the imgs to dark
          $('#largeIcons img').each(function() {
              var darkImg = "img/icon_lg_non_"+$(this).attr('class')+".jpg"; 
              $(this).attr("src",darkImg); 
          }); 
          //show the over version of thIs image. 
          var overImg = "img/icon_lg_over_"+$(this).attr('class')+".jpg"; 
          $(this).attr("src",overImg); 
      }
    ); //end of the mouseover of large icons
    
    $('#smallIcons img').bind("mouseover",
      function() {
          //set each of the imgs to dark
          $('#smallIcons img').each(function() {
              var darkImg = "img/icon_sm_non_"+$(this).attr('class')+".jpg"; 
              $(this).attr("src",darkImg); 
          });
          // specific to lp3HLK8 / 3-button page:
          $('#smallIcons.intl-3 img, #smallIcons.lp3HLK8 img').each(function() {
              var darkImg = "img/lp3HLK8/icon_sm_non_"+$(this).attr('class')+".jpg"; 
              $(this).attr("src",darkImg); 
          }); 
          //show the over version of thIs image. 
          var overImg = "img/icon_sm_over_"+$(this).attr('class')+".jpg";
          // specific to lp3HLK8 / 3-button page:
          if ($(this).parent().hasClass('intl-3') || $(this).parent().hasClass('lp3HLK8')) overImg = "img/lp3HLK8/icon_sm_over_"+$(this).attr('class')+".jpg";
          $(this).attr("src",overImg);
      }
    ); //end of the mouseover of large icons    


// HD links

$(".HD").click(function() {
    var url = "https://nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3FQ49"; 
    jumpTo(url); 
}); 

$(".HD-two").click(function() {  
    var campaignId = getParameterByName('campaignId'); 
    if(campaignId=='') {
      campaignId = getParameterByName('campaignID')
    }
    var url = "http://www.nytimes.com/subscriptions/iht/Multiproduct/lp2243.html?campaignId="+campaignId; 
    jumpTo(url); 
});

$(".lp3HY68 .HD").click(function() {  
    var campaignId = getParameterByName('campaignId'); 
    if(campaignId=='') {
      campaignId = getParameterByName('campaignID')
    }
    var url = "https://nytimesathome.com/hd/246?MediaCode=DSIEB7&CMP=3JQ9R"; 
    jumpTo(url); 
});

    //this sets the click through for 26 week offer 
$(".lp3HY68 .HD-26").click(function() {  
    var campaignId = getParameterByName('campaignId'); 
    if(campaignId=='') {
      campaignId = getParameterByName('campaignID')
    }
    var url = "https://nytimesathome.com/hd/246?MediaCode=DSIEB7&CMP=3JQ9R"; 
    jumpTo(url); 
});

$(".lp3JH6R .HD").click(function() {  
    var url = "https://nytimesathome.com/hd/263?MediaCode=W22EJ&CMP=3JWK9"; 
    jumpTo(url); 
});

$(".lp3353 .HD").click(function() {  
    var url = "https://www.nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3FQ3L"; 
    jumpTo(url); 
});

$(".lp0422 .HD").click(function() {  
    var url = "https://nytimesathome.com/hd/261?MediaCode=W22EJ&CMP=3FQ4F"; 
    jumpTo(url); 
});


$(".lp7635 .HD").click(function() {  
    var url = "https://nytimesathome.com/hd/261?MediaCode=W22EJ&CMP=3FQ47"; 
    jumpTo(url); 
});


$(".lp3HFJF .HD").click(function() {  
    var url = "https://www.nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3HH89"; 
    jumpTo(url); 
});

$(".lp3826 .HD").click(function() {  
    var url = "https://www.nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3FQ4Q"; 
    jumpTo(url); 
});


$(".lp39YYF .HD").click(function() {  
    var url = "https://www.nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3FQ4H"; 
    jumpTo(url); 
});


$(".lp39UU8 .HD").click(function() {  
    var url = "https://www.nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3FQ4L"; 
    jumpTo(url); 
});


$(".lp0227 .HD").click(function() {  
    var url = "https://www.nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3FQ48"; 
    jumpTo(url); 
});


$(".lp1715 .HD").click(function() {  
    var url = "https://www.nytimesathome.com/hd/205?MediaCode=W22EJ&CMP=3FQ4J"; 
    jumpTo(url); 
});


//DS links

$(".DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ4Y"; 
    jumpTo(url); 
}); 
$("#ds4-two").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3J64X"; 
    jumpTo(url); 
});

$(".lp3HY68 .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3JQFH"; 
    jumpTo(url); 
});

$(".lp3JH6R .DS").click(function() {
    var campaignId = getParameterByName('campaignId'); 
    if(campaignId=='') {
      campaignId = getParameterByName('campaignID')
    }
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId="+campaignId; 
    jumpTo(url); 
});  

$(".lp3353 .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ6F"; 
    jumpTo(url); 
});

$(".lp0422 .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ63"; 
    jumpTo(url); 
});

$(".lp7635 .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ4R"; 
    jumpTo(url); 
});


$(".lp3HLJW .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3J64W"; 
    jumpTo(url); 
});


$(".lp3HFJF .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3HH8F"; 
    jumpTo(url); 
});


$(".lp3826 .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ69"; 
    jumpTo(url); 
});


$(".lp39YYF .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ64"; 
    jumpTo(url); 
});


$(".lp39UU8 .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ68"; 
    jumpTo(url); 
});


$(".lp0227 .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ4X"; 
    jumpTo(url); 
});

$(".lp1715 .DS").click(function() {
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3FQ66"; 
    jumpTo(url); 
});


//// Australian LP digital sub Button ///// 
$("#ds-oz").click(function() {
    var campaignId = '3J64W'; 
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId="+campaignId; 
    jumpTo(url); 
});

//// Canada LP digital sub Button ///// 
$("#ds-ca").click(function() {
    var campaignId = '3J64X'; 
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId="+campaignId; 
    jumpTo(url); 
});

//// UK LP digital sub Button ///// 
$("#ds-uk").click(function() {
    var campaignId = '3J64Y'; 
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId="+campaignId; 
    jumpTo(url); 
});

//international Dig Gift Subs //
$('#dg-intl-12week').on("click",function() {
    var url = 'http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3KHUF'; 
    jumpTo(url); 
})

$('#dg-intl-8free').on("click",function() {
    var url = 'http://www.nytimes.com/subscriptions/Multiproduct/lp4021.html?campaignId=3KHUH'; 
    jumpTo(url); 
})

// end of international Dig Gift Subs //


// ED links

$(".ED").click(function() {
    var url = "http://www.nytimes.com/subscriptions/edu/lp1474.html?campaignId=3KLL9"; 
    jumpTo(url); 
});

// international pages
$(".lp3HLK8 .ED, .lp3HY63 .ED, .lp3HY64 .ED, .lp3HLJW .ED").click(function() {
    var url = "http://www.nytimes.com/subscriptions/edu/lp3FR49.html?campaignId=3JU3W"; 
    jumpTo(url); 
});

$("#ed-intl-12week").click(function() {
    var url = "http://www.nytimes.com/subscriptions/edu/lp3FR49.html?campaignId=3JU3R"; 
    jumpTo(url); 
});

$("#ed-intl-8free").click(function() {
    var url = "http://www.nytimes.com/subscriptions/edu/lp3FR49.html?campaignId=3JU3U"; 
    jumpTo(url); 
});






// CP links

$(".CP").click(function() { // Corporate Subs .. 

    var campaignId = getParameterByName('campaignId'); 
    if(campaignId=='') {
      campaignId = getParameterByName('campaignID')
    }  
    var url = "http://www.nytimes.com/subscriptions/Multiproduct/lp4371.html?campaignId="+campaignId;  
    jumpTo(url); 
});
    

// CROSSWORD //

$('.CW').on('click',function() {

  var url = 'http://www.nytimes.com/subscriptions/games/lp3FUQQ.html'; 
  var campaignId = getParameterByName('campaignId'); 
  if(campaignId!='') {
      url += "?campaignId="+campaignId; 
  }

  jumpTo(url); 
})

// END OF CROSSWORD //
     

function jumpTo(url) { //might add campaign id etc.. 
 window.location = url;     
}


//FAQs Funtionality
  var i = 0;
  $(".ctrl").addClass('collapsed');
  $(".faqlinks").click(function ( event ) {

    if(i == 0)
    {
      $(this).children(".content").show("slow");
      $(this).children(".ctrl").removeClass('collapsed');
      $(this).children(".ctrl").addClass('expanded');
      i++;
    }
    else if(i == 1 && $(this).children(".ctrl").hasClass('expanded'))
    {
      $(this).children(".content").hide("fast");
      $(this).children(".ctrl").removeClass('expanded');
      $(this).children(".ctrl").addClass('collapsed');
        i = 0;
    }
    else{
      $(".content").hide("slow");
      $(this).children(".content").show("fast");
      $(".ctrl").removeClass('expanded');
      $(".ctrl").addClass('collapsed');
      $(this).children(".ctrl").removeClass('collapsed');
      $(this).children(".ctrl").addClass('expanded');
    }
  });

  $(".i").click(function ( event ) {
    $(".i").toggle();
  });
  $(".ii").click(function ( event ) {
    $(".ii").toggle();
  });
  $(".iii").click(function ( event ) {
    $(".iii").toggle();
  });
}); //end of doc ready