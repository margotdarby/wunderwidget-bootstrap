package app.views.ui
{

import flash.display.Sprite;
import flash.events.MouseEvent;
import gs.TweenLite;
import gs.easing.*;
import app.interfaces.SelectionSystemItem;
//import app.utils.TitleCaseChange;

public class AbstractButton extends Sprite
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	protected var OFF_COLOR:Number = 0xbc3e87; //purple
	protected var ON_COLOR:Number = 0xbe0a0a;

	//protected var ON_COLOR:Number = 0xdd3333; //red

	//protected var OFF_COLOR:Number = 0xD65F0F;//orange
	//protected var ON_COLOR:Number = 0x10c210; //med-lt green
	//protected var ON_COLOR:Number = 0x2a5616; //med-dk green
	
	protected var _id:uint;
	protected var _label:String;
	protected var _origYPos:int;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function AbstractButton(label:String, id:uint = 0)
	{
		_label = label;
		_id = id;
		
		mouseChildren = false;
		buttonMode = true;
		
	//	this['labelTxt']['label'].htmlText = _label.toUpperCase();
		this['labelTxt']['label'].htmlText = _label;
		
		_origYPos = -999;
		
		cacheAsBitmap = true;
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

	public function get id():uint
	{
		return _id;
	}

//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------
	
	override public function set y(value:Number):void
	{
		super.y = value;
		
		if (_origYPos == -999) _origYPos = value;
	}
	
	public function resetY():void 
	{
		super.y = _origYPos;
	}
	

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

