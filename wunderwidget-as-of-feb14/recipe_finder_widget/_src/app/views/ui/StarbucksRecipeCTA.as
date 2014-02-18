package app.views.ui
{
import flash.display.MovieClip;
import flash.events.MouseEvent;

public class StarbucksRecipeCTA extends MovieClip 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function StarbucksRecipeCTA()
	{
		
		mouseChildren = false;
		buttonMode = true;
		
		//cacheAsBitmap = true;
	
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

	public function set btnLabel($label:String):void {
		_txt.text = $label.toUpperCase();
	}
	
	public function get btnLabel():String {
		return _txt.text;
	}
	
	public function set arrowRotation($angle:Number):void {
		arrow.rotation = $angle;
	}

//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------


//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

