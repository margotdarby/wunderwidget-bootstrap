(function(){
    var fbomb = flickrhack();
    
    var currentValue = false,
    el = $('#demo-content span');
    el.focus(function(){
        currentValue = $(this).text();
    });
    el.keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            updateIMG($(this));
        }
    });
    el.focusout(function() {
        updateIMG($(this));
    });
    function updateIMG(argu) {
        if (argu.text() !== currentValue) {
            var keywords = $('#keywords').text();
            $('#demo-splash').html('<img src="kw://' + keywords + '" width="940px" height="250px" style="display:none"><span>Loading New Demo Content</span>');
            fbomb.dealapic();
        } else {
            return false;
        }
    }
})();