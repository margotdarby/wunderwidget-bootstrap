package app.utils
{

import flash.net.*;
import flash.xml.*;
import flash.events.*;

public class XMLLoader extends URLLoader 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------
	
	private var _isLoading:Boolean;

//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function XMLLoader() {}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	public function loadXML(file:String):void
	{
		var request:URLRequest = new URLRequest(file);
		addEventListener(Event.COMPLETE, xmlCompleteHandler, false, 0, true);
		addEventListener(Event.OPEN, xmlLoadStartedHandler);
		load(request);
	}
	
	private function cleanUp():void
	{
		removeEventListener(Event.COMPLETE, xmlCompleteHandler, false);
		removeEventListener(Event.OPEN, xmlLoadStartedHandler);
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	private function xmlCompleteHandler(evt:Event):void
	{
		_isLoading = false;
		cleanUp();
	}
	
	private function xmlLoadStartedHandler(evt:Event):void
	{
		_isLoading = true;
	}
	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	
	
	public function get isLoading():Boolean
	{
		return _isLoading;
	}


//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	override public function close():void
	{
		if (!_isLoading)
		{
			super.close();
			cleanUp();
		}
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

