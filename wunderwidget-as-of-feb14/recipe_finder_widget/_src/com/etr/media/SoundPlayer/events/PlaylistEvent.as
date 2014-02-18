package com.etr.media.SoundPlayer.events{

	import flash.events.Event;

	public class PlaylistEvent extends Event{
	
	//-------------------------------------------------------------
	// STATIC VARIABLES
	//-------------------------------------------------------------
		
		public static const READY					:String				=		"onReady";	
	
	//-------------------------------------------------------------
	// PUBLIC VARIABLES
	//-------------------------------------------------------------

		public var data								:Object;
	
	//-------------------------------------------------------------
	// CONSTRUCTOR
	//-------------------------------------------------------------	
	
		public function PlaylistEvent($type:String, $data:Object= null, $bubbles:Boolean = false, $cancelable:Boolean = false){
			super($type, $bubbles, $cancelable);
			data = $data;
		}

	//-------------------------------------------------------------
	// INIT
	//-------------------------------------------------------------



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

		public override function clone():Event{
			return new PlaylistEvent(type, data, bubbles, cancelable);
		}
		
		public override function toString():String{
			return formatToString("PlaylistEvent", "data", "type", "bubbles", "cancelable");
		}

	//-------------------------------------------------------------
	// END OF CLASS	
	//-------------------------------------------------------------
	}
}
