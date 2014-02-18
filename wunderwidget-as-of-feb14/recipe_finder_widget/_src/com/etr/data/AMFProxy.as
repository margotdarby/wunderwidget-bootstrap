package com.etr.data
{

import flash.events.EventDispatcher;
import flash.net.*;
import flash.errors.*;
import flash.utils.Proxy;
import flash.utils.flash_proxy;


public dynamic class AMFProxy extends Proxy
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _gatewayURL:String;
	private var _service:String;
	private var _gateway:NetConnection;
	private var _responder:Responder;
	private var _handler:Function;
	private var _callStack:Array;
	private var _debug:Boolean;
	private var _lastCallFuncName:String;
	private var _busy:Boolean;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function AMFProxy(gatewayURL:String, service:String)
	{
		_gatewayURL = gatewayURL;
		_service = service;
		_gateway = new NetConnection();
		_responder = new Responder(onResult, onFail);
		_callStack = new Array();
		_debug = false;
		_busy = false;
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	override flash_proxy function callProperty(name:*, ... rest):*
	{
		var remoteCall:String = _service + '.' + name;
		var handler = rest.shift();
		_lastCallFuncName = name;
		
		var conn:Array = new Array(remoteCall, _responder);
		var sig:Array = conn.concat(rest);
		
		_callStack.push({callback: handler, sig: sig});
		
		if (_debug) trace('calling: ' , remoteCall + '(' + rest + ')');
	
		if(!_busy) // no calls in the queue, call method 
		{
			makeCall();
		}
	}
	
	private function onResult(response:Object):void
	{
		var data:Object = {error: false, result: response, call: _lastCallFuncName};
		_handler(data);
		
		if (_callStack.length)
		{
			makeCall();
		}
		else
		{
			_busy = false;
			_gateway.close();
			_handler = null;
		} 
	}
	
	private function onFail(response:Object):void
	{	
		var error:Object = {error:response, result: false};
		_handler(error);
		
		if (_callStack.length)
		{
			makeCall();
		}
		else
		{
			_gateway.close();
			_handler = null;
			_busy = false;
		}
	}
	
	private function makeCall():void
	{
		if(!_gateway.connected) _gateway.connect(_gatewayURL);
		
		try {
			var call:Object = _callStack.shift();
			_handler = call.callback;
			_gateway.call.apply(_gateway, call.sig);
			
			_busy = true;
		}
		catch (e:Error)
		{
			trace(e);
		}
	}
	
	public function debug():void
	{
		_debug = true;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

