package com.etr.utils
{

// static class do not instantiate

public class FormValidator  
{
		
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function FormValidator()
	{
		throw new Error("FormValidator is a static class and should not be instantiated");
	}

//-------------------------------------------------------------
// PUBLIC STATIC METHODS
//-------------------------------------------------------------

	public static function validateEmail(email:String):Boolean
	{
		var pattern:RegExp = /(\w|[_.\-])+@((\w|-)+\.)+\w{2,4}+/;
		var result:Object = pattern.exec(email);
		if(result == null) return false;
		return true;
	}

	public static function validatePhone(pn:String):Boolean
	{
		var pattern:RegExp = /^\d{3}-\d{3}-\d{4}$/;
		var result:Object = pattern.exec(pn);
		if(result == null) return false;
		return true;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

