package com.etr.media.SoundPlayer.states{

	import com.etr.media.SoundPlayer.utils.*;	

	public class PausedState extends AbstractPlayerState{
	
	//-------------------------------------------------------------
	// STATIC VARIABLES
	//-------------------------------------------------------------



	//-------------------------------------------------------------
	// PRIVATE VARIABLES
	//-------------------------------------------------------------

	 
	
	//-------------------------------------------------------------
	// CONSTRUCTOR
	//-------------------------------------------------------------	
	
		public function PausedState($sound:SoundPlayerSound){
			
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
			_sound.play();
		}
		
		public override function pause():void{
			
		}

	//-------------------------------------------------------------
	// END OF CLASS	
	//-------------------------------------------------------------
	}
}
