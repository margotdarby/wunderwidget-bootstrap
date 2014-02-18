package com.etr.media.SoundPlayer.states{

	import com.etr.media.SoundPlayer.utils.*;	

	public class PlayingState extends AbstractPlayerState{
	
	//-------------------------------------------------------------
	// STATIC VARIABLES
	//-------------------------------------------------------------



	//-------------------------------------------------------------
	// PRIVATE VARIABLES
	//-------------------------------------------------------------

		 
	
	//-------------------------------------------------------------
	// CONSTRUCTOR
	//-------------------------------------------------------------	
	
		public function PlayingState($sound:SoundPlayerSound){
			
			super($sound);
				
			init();			

		}

	//-------------------------------------------------------------
	// INIT
	//-------------------------------------------------------------

		private function init():void{
			
			initVars();
			initProperties();
			initListeners();
			
		}
		
		private function initVars():void{
		
		}
		
		private function initProperties():void{
			
		}
		
		private function initListeners():void{
			
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

		public override function play():void{
			
		}
		
		public override function pause():void{
			_sound.pause();
		}

	//-------------------------------------------------------------
	// END OF CLASS	
	//-------------------------------------------------------------
	}
}
