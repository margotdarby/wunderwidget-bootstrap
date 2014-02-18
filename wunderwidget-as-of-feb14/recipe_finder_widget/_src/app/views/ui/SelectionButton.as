package app.views.ui
{

import app.interfaces.SelectionSystemItem;
import gs.TweenLite;
import gs.easing.*;

public class SelectionButton extends AbstractButton implements SelectionSystemItem
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function SelectionButton(label:String, id:uint)
	{
		super(label, id)
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



//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public function out():void 
	{
		TweenLite.to(this['bg'], .2, {removeTint: true, ease: Expo.easeOut});
	}
	
	public function over():void 
	{
		TweenLite.to(this['bg'], .3, {tint: ON_COLOR, alpha: .81, ease: Expo.easeOut});
		
	
		
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

