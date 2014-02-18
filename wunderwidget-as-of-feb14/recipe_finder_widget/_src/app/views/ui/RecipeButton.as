package app.views.ui
{

import gs.TweenLite;
import flash.net.*;
import app.utils.TitleCaseChange;

public class RecipeButton extends SelectionButton 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _url:String;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function RecipeButton(labelText:String, id:uint, url:String)
	{
	//	super(labelText.toUpperCase(), id);
		super(labelText.valueOf(), id);
	
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
		TweenLite.to(gotoRecipeText, 0, {removeTint: true});
	}
	
	override public function over():void 
	{
		super.over();
		TweenLite.to(gotoRecipeText, 0, {tint: 0xfcf5d5});
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

