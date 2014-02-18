package app.views.ui
{
	
import flash.text.TextFieldAutoSize;
import flash.events.MouseEvent;

public class PaginationButton extends AbstractButton 
{
//-------------------------------------------------------------
// CLASS CONSTANTS
//-------------------------------------------------------------

	public static const BACK:String = "back";
	public static const FORWARD:String = "forward";
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function PaginationButton(labelText:String, id:uint, direction:String)
	{
		super(labelText.toUpperCase(), id);
		
		labelTxt.label.autoSize = TextFieldAutoSize.LEFT;
		
		initButton(direction);
		
		cacheAsBitmap = true;
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function initButton(direction:String):void 
	{
		bg.width = labelTxt.width + labelTxt.x * 2 + 12;
		
		if (direction == BACK)
		{
			arrow.x = 12
			arrow.scaleX = -1;
			labelTxt.x = 16;	
		}
		else
		{
			bg.width = labelTxt.width + labelTxt.x * 2 + 12;
			arrow.x = labelTxt.width + labelTxt.x + 4;
		}
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	



//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------



//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}