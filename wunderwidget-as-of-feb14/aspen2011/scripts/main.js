$(document).ready(function(){
	$('#press-photo').click(function(){
		var $_this=$(this).parent();
		$_this.hide();
		$_this.after('<div id="pw-prompt" style="float:right;"></div>');
		$_this.next().hide().append('<form id="pw-form">Please enter your password:<br /><input type="password" name="pw" /> <input type="submit" value="Login" /><p id="invalid-pw" style="display:none;font-size:11px;color:red">* invalid password</p></form>').fadeIn();
		
		$('#pw-form').children('input:password').keyup(function(){
			$('#invalid-pw').fadeOut();
		});
		
		$('#pw-form').submit(function(){
			$('#pw-form').children('input:password').blur();
			if($.trim($(this).children('input:password').val())==='password'){	
				window.location="press_photos.html";
				}else{	
					$('#invalid-pw').fadeIn();
					$(this).children('input:password').val('');
				}
			return false;
		});
		return false;
	});

});