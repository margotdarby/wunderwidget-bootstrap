package app.views.ui
{

import flash.text.TextFieldAutoSize;
import flash.display.Loader;
import flash.net.URLRequest;
import flash.events.Event;

import gs.TweenLite;
import gs.easing.*;

public class IngredientButton extends SelectionButton 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------
	
	private var _loader:Loader;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function IngredientButton(labelText:String, id:uint, photo:String)
	{
		super(labelText.toUpperCase(), id);
		
		labelTxt.label.autoSize = TextFieldAutoSize.CENTER;
		
		labelTxt.y = height * .5 - labelTxt.height * .5;
		
		loadPhoto(photo);
		
		bg.alpha = .90;
		
		cacheAsBitmap = true;
		
		blendMode = "layer";
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function loadPhoto(photo:String):void 
	{
		var url:String = photo;
		var request:URLRequest = new URLRequest(url);
		
		_loader = new Loader();
		
		_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, imageLoadCompleteHandler);
		
		_loader.alpha = 0;
				
		_loader.load(request);	
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	private function imageLoadCompleteHandler(evt:Event):void 
	{
		//_loader.x -= Math.round(width * .5);
		//_loader.y -= Math.round(height * .5);
		
		TweenLite.to(_loader, .5, {alpha: 1});
				
		addChildAt(_loader, 0).mask = imageMask;
	}
	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	



//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	override public function out():void 
	{
		TweenLite.to(this['bg'], .3, {alpha: .90, ease: Quad.easeOut});
	}
	
	override public function over():void 
	{
		TweenLite.to(this['bg'], .25, {alpha: 0});
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}