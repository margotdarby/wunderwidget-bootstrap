package app.views.ui
{

import flash.events.MouseEvent;
import gs.TweenLite;
import gs.easing.*;

public class SearchButton extends AbstractButton 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function SearchButton(label:String, id:uint)
	{
		super(label.toUpperCase(), id);
		
		//tab.y = -17;
		//labelTxt.y = -13;
		//bg.visible = false;
		//bg.alpha = 0;
		
		//visible = false;
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

	public function animateIn():void {
		visible = true;
		TweenLite.to(bg, .2, {autoAlpha: 1});
		TweenLite.to(tab, .3, {y:0, ease:Expo.easeOut, delay:.1});
		TweenLite.to(labelTxt, .3, {y:4, ease:Expo.easeOut, delay:.1});
		
	}
	
	public function animateOut():void {
		TweenLite.to(tab, .3, {y:-17, ease:Expo.easeOut});
		TweenLite.to(labelTxt, .3, {y:-13, ease:Expo.easeOut});
		TweenLite.to(bg, .3, {autoAlpha: 0, delay: .3, onComplete:function(){visible = false}});
	}


//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

