package com.etr.data
{

import flash.events.EventDispatcher;
import flash.net.*;
import flash.events.Event;

public class DataSender extends EventDispatcher
{

//--------------------------------------------------
// CLASS CONSTANTS
//--------------------------------------------------

	public static const POST:String = 'POST';
	public static const GET:String = 'GET';

//--------------------------------------------------
// PRIVATE & PROTECTED VARIABLES
//--------------------------------------------------
	
	private var _url:String;
	private var _vars:Object;
	private var _method:String;
	private var _receivedData:String;

//--------------------------------------------------
// CONSTRUCTOR
//--------------------------------------------------

	public function DataSender(url:String, method:String = DataSender.POST)
	{
		_url = url;
		_method = method;
	}

//--------------------------------------------------
// PRIVATE & PROTECTED METHODS
//--------------------------------------------------

	public function send():void
	{
		var request:URLRequest = new URLRequest(_url);
		var loader:URLLoader = new URLLoader();
		var vars:URLVariables = getVars();
		
		request.data = vars;
		request.method = _method;
		
		loader.addEventListener(Event.COMPLETE, dataLoadedHandler);
		loader.load(request);
	}
	
	private function getVars():URLVariables
	{
		var vars:URLVariables = new URLVariables();
		
		for (var item in _vars)
		{
			vars[item] = _vars[item];
		}
		
		return vars;
	}

//--------------------------------------------------
// EVENT HANDLERS
//--------------------------------------------------

	private function dataLoadedHandler(evt:Event):void
	{
		_receivedData = evt.target.data;
		dispatchEvent(evt);
		evt.target.removeEventListener(Event.COMPLETE, dataLoadedHandler);
	}

//--------------------------------------------------
// GETTER / SETTERS
//--------------------------------------------------

	public function set vars(vars:Object):void 
	{
		_vars = vars;
	}
	
	public function get data():String
	{
		return _receivedData;
	}
	
	public function get vars():Object
	{
		var vars:URLVariables = new URLVariables(_receivedData);
		
		return vars;
	}

//--------------------------------------------------
// END OF CLASS
//--------------------------------------------------
}
}