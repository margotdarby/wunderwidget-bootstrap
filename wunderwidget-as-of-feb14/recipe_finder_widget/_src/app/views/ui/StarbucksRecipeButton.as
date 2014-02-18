package app.views.ui
{

import gs.TweenLite;
import flash.net.*;

public class StarbucksRecipeButton extends SelectionButton 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _url:String;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function StarbucksRecipeButton(labelText:String, id:uint, url:String)
	{
		super(labelText, id);
		
		OFF_COLOR = 0x88B1E9;
		
		labelTxt.label.wordWrap = true;
		labelTxt.label.autoSize = "left";
		
		_url = url;
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------



//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------


	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	

	public function get url():String
	{
		return _url;
	}

	public function get buttonLabel():String
	{
		return labelTxt.label.text;
	}
//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	override public function out():void 
	{
		super.out();
		TweenLite.to(gotoRecipeText, 0, {tint: 0xe9bd8b});
	}
	
	override public function over():void 
	{
		super.over();
		TweenLite.to(gotoRecipeText, 0, {tint: 0x7d99a9});
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

