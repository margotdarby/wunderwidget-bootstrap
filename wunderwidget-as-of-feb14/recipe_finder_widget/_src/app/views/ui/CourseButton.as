package app.views.ui
{

import flash.text.TextFieldAutoSize;
import flash.display.Loader;
import flash.net.URLRequest;
import flash.events.Event;
import gs.TweenLite;
import gs.easing.*;

public class CourseButton extends SelectionButton 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _loader:Loader;

//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function CourseButton(labelText:String, id:uint, photo:String)
	{	
		super(labelText.toUpperCase(), id);
		
		OFF_COLOR = 0xffffff;
		
		labelTxt.label.autoSize = TextFieldAutoSize.LEFT;
		
		labelTxt.y = Math.ceil((bg.height - labelTxt.height) * .5);
		
		loadPhoto(photo);
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
		
		_loader.load(request);
		
		_loader.x = imageMask.x;
		
		_loader.alpha = 0;
		
		addChild(_loader).mask = imageMask;
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	private function imageLoadCompleteHandler(evt:Event):void 
	{
		TweenLite.to(_loader, .5, {alpha: 1});
	}
	
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