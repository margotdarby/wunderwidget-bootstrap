function goToURL() {
    var params = unescape(window.location.search.replace('?','&').replace(/OC=\d+&/,'')),
        offerChain = $('[name="bundle"]:checked').val() || "373674";

        // QS 4/19/13 - removed old AB test cookie stuff
        /*,
        orderFormCookie = NYTD.wto.getCookie('abTest_orderForm');*/

    /*if(NYTD.wto && orderFormCookie !== undefined) {
        if(orderFormCookie === "ta_growl_copy_June2012") {
            NYTD.wto.setOrderFormCookie(orderFormCookie + ":qs:1", 1/48);
        }
    }*/

    setTimeout(function() {
        window.location.href = "https://myaccount.nytimes.com/mem/purchase/gateway/checkout.html?OC=" + offerChain + params;
    },0); 

    return false;
}

function makeTabs() {
    //Tabs
    $(".infoContent").hide();
    $("ul.nav-dig li:first").addClass("active").show();
    $(".infoContent:first").show();

    $("ul.nav-dig li").click(function() {
        $("ul.nav-dig li").removeClass("active");
        $(this).addClass("active");
        $(".infoContent").hide();
        var activeTab= $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });    
}

function getParamByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function(){  


    /* this replaces the radio.js code regarding radiobutton */ 
    $('input.radiobutton.first').attr('checked', true); //set the first radio to selected
    //for those pages that use a 'highlightable' row ...
    $('.highlights .radiobutton.first').attr('checked', true).parent('.row').addClass('selected');
    //only for special cases do we give a highlight to Row of bundle. for 3 pages the div 'payform', have class 'highlights'
    $('#payform.highlights .radiobutton').change(function() { //when user chooses diff..
        $('.row').removeClass('selected'); //remove selected from all BUNDLE rows
        $(this).parents('.row').addClass('selected'); //give selected class to this row
    });

    // set default checked radiobutton if highlightBundle parameter is set in query string
    var defaultHighlight = getParamByName('highlightBundle');
    if (defaultHighlight == 'smart' || defaultHighlight == 'tab' || defaultHighlight == 'dig') {
        // if page is a 'highlights' page, highlight the correct row
        $('.highlights .row').removeClass('selected');
        $('.highlights #radio_'+defaultHighlight).parent('.row').addClass('selected');
        // check the requested radiobutton
        $('#radio_'+defaultHighlight).attr('checked', true);
    }

 /* end of radio */ 

    //Tabs
    $(".infoContent").hide();
    $("ul.nav-dig li:first").addClass("active").show();
    $(".infoContent:first").show();

    $("ul.nav-dig li").click(function() {
        $("ul.nav-dig li").removeClass("active");
        $(this).addClass("active");
        $(".infoContent").hide();
        var activeTab= $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });

    //New window overlays

    $('.boxNYT').hide();
    $('#payform a').click(function(){
        $("div.boxNYT").hide();
        $('div.' + this.className).show();  
    });
    $('a.close').click(function(){
        $('.boxNYT').hide();
    });

    $("#subscribe").click(goToURL);
});
