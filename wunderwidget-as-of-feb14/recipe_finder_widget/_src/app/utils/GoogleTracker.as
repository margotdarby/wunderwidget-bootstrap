package app.utils
{

import com.google.analytics.AnalyticsTracker; 
import com.google.analytics.GATracker; 
import flash.display.DisplayObject;

public class GoogleTracker  
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private static var _instance:GoogleTracker;
	private var _tracker:AnalyticsTracker;
	private var _stage:DisplayObject;
	private var _disabled:Boolean;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function GoogleTracker(se:SingletonEnforcer)
	{
		_disabled = false;
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

	public static function getInstance():GoogleTracker
	{
		if(_instance == null) _instance = new GoogleTracker(new SingletonEnforcer());
		
		return _instance;
	}

//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public function trackPageview(tEvent:String):void
	{
		if (!_disabled) _tracker.trackPageview(tEvent);
	}
	
	public function setStage(stage:DisplayObject):void
	{
		_stage = stage;
		_tracker = new GATracker(_stage, "UA-3516775-2", "AS3", false);
	}
	
	public function disable():void
	{
		_disabled = true;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

class SingletonEnforcer{}
