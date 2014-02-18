package app.events
{

import flash.events.Event;

public class ModelEvent extends Event 
{

//-------------------------------------------------------------
// CLASS CONSTANTS
//-------------------------------------------------------------

	public static const READY:String = "ready";
	public static const CHANGE:String = "change";
	public static const COURSE_SET:String = "course set";
	public static const INGREDIENT_SET:String = "ingredient set";
	public static const ACTIVE_TIME_SET:String = "active time set";
	public static const SEARCH_RESULT_SET:String = "search result set";

//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function ModelEvent(type:String, bubbles:Boolean = false, cancelable:Boolean = false)
	{
		super(type, bubbles, cancelable);
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

	public override function clone():Event 
	{
		return new ModelEvent(type, bubbles, cancelable);
    }
	

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

