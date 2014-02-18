package app.views.ui
{

import flash.display.Sprite;
import gs.TweenLite;
import gs.easing.*;

public class SelectionSet extends Sprite
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function SelectionSet() {}

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

	public function animateIn():void 
	{
		for (var i:uint = 0; i < numChildren; i++)
		{
			AbstractButton(getChildAt(i)).resetY();
			getChildAt(i).y -= 10;
			TweenLite.to(getChildAt(i), .3, {autoAlpha: 1, y: getChildAt(i).y + 10, delay: i * .07 + .25, ease: Quad.easeInOut});
		}
	}
	
	public function animateOut():void 
	{
		for (var i:uint = 0; i < numChildren; i++)
		{
			TweenLite.to(getChildAt(i), .3, {autoAlpha: 0, y: '10', delay: i * .07, ease: Quad.easeInOut});
		}
	}

	public function showChildren():void
	{
		for (var i:uint = 0; i < numChildren; i++)
		{
			getChildAt(i).visible = true;
			getChildAt(i).alpha = 1;
		}
	}
	
	public function hideChildren():void
	{
		for (var i:uint = 0; i < numChildren; i++)
		{
			getChildAt(i).visible = false;
			getChildAt(i).alpha = 0
		//	getChildAt(i);
		}
	}
	
	public function destroy():void 
	{
		while(numChildren > 0)
		{
			//AbstractButton(getChildAt(0)).destroy();
			removeChildAt(0);
		}
	}
	
//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}