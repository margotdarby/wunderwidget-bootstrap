package app.views.ui
{
	
	import gs.TweenLite;
	import gs.easing.*;

public class TabButton extends SelectionButton
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------


	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function TabButton(label:String, id:uint)
	{
		super(label, id);
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



//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	override public function out():void 
	{
		super.out();
		TweenLite.to(this['labelTxt'], .5, {removeTint: true, ease: Expo.easeOut});
	}
	
	override public function over():void 
	{
		super.over();
		TweenLite.to(this['labelTxt'], .2, {tint: 0xfcf5d5, ease: Expo.easeOut});
	}


//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

