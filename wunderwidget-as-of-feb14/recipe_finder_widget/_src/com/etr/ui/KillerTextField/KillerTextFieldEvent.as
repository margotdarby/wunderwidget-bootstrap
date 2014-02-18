package com.etr.ui.KillerTextField{

	import flash.events.Event;

	public class KillerTextFieldEvent extends Event{
	
	//-------------------------------------------------------------
	// STATIC VARIABLES
	//-------------------------------------------------------------
		
		public static const BUFFERED				:String				=		"onBuffered";
			
	//-------------------------------------------------------------
	// PUBLIC VARIABLES
	//-------------------------------------------------------------

		public var data								:Object;
	
	//-------------------------------------------------------------
	// CONSTRUCTOR
	//-------------------------------------------------------------	
	
		public function KillerTextFieldEvent($type:String, $data:Object= null, $bubbles:Boolean = false, $cancelable:Boolean = false){
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
			return new KillerTextFieldEvent(type, data, bubbles, cancelable);
		}
		
		public override function toString():String{
			return formatToString("KillerTextFieldEvent", "data", "type", "bubbles", "cancelable");
		}

	//-------------------------------------------------------------
	// END OF CLASS	
	//-------------------------------------------------------------
	}
}
