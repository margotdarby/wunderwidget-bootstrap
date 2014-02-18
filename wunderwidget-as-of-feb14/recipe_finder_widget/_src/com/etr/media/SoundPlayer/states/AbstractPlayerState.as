package com.etr.media.SoundPlayer.states{

	import com.etr.media.SoundPlayer.utils.*;

	internal class AbstractPlayerState{
	
	//-------------------------------------------------------------
	// PRIVATE VARIABLES
	//-------------------------------------------------------------

		protected var _sound				:SoundPlayerSound;
	
	//-------------------------------------------------------------
	// CONSTRUCTOR
	//-------------------------------------------------------------	
	
		public function AbstractPlayerState($sound:SoundPlayerSound){
			
			_sound				=			$sound;
			
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

		public function play():void{
			throw new Error("AbstractPlayerState.start() is an Abstract method and must be overridden.");
		}
				
		public function pause():void{
			throw new Error("AbstractPlayerState.pause() is an Abstract method and must be overridden.");
		}
		
		public function stop():void{
			
			_sound.stop();
			
		}
		
		public function load($path:String):void{
			
			_sound.load($path);
			
		}

	//-------------------------------------------------------------
	// END OF CLASS	
	//-------------------------------------------------------------
	}
}
