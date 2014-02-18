package com.etr.ui{

	import flash.display.Sprite;
	import flash.display.Loader;
		
	import flash.events.Event;
	import flash.events.ProgressEvent;

	public class LoadHandler extends Sprite{
	
	//-------------------------------------------------------------
	// STATIC VARIABLES
	//-------------------------------------------------------------



	//-------------------------------------------------------------
	// PRIVATE VARIABLES
	//-------------------------------------------------------------

		private var _loader					:Loader;
		
		protected var _bytesLoaded			:Number;
		protected var _bytesTotal			:Number;
		protected var _percentLoaded		:Number;
	
	//-------------------------------------------------------------
	// CONSTRUCTOR
	//-------------------------------------------------------------	
	
		public function LoadHandler(){
			

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
		
			_bytesLoaded			=			0;
			_bytesTotal				=			0;
			_percentLoaded			=			0;
		
		}
		
		private function initProperties():void{
			
		}
		
		private function initListeners():void{
			
		}

	//-------------------------------------------------------------
	// PRIVATE METHODS	
	//-------------------------------------------------------------

		private function loadComplete($e:Event):void{
			
			try{
				_loader.contentLoaderInfo.removeEventListener(Event.COMPLETE, loadComplete);
				_loader.contentLoaderInfo.removeEventListener(ProgressEvent.PROGRESS, loadProgress);
			}catch(e:Error){}
			
			onLoadComplete();
		}
		
		private function loadProgress($e:ProgressEvent):void{
			
			_bytesLoaded		=		$e.bytesLoaded;
			_bytesTotal			=		$e.bytesTotal;
			_percentLoaded		=		(_bytesLoaded/_bytesTotal);
			
			onLoadProgress($e.bytesLoaded, $e.bytesTotal);
		}
		
		protected function onWatchStart():void{
			
		}
		
		protected function onUnwatch():void{
		
		}
		
		protected function onLoadComplete():void{
		
		}
		
		protected function onLoadProgress($bytesLoaded:Number, $bytesTotal:Number):void{
		
		}

	//-------------------------------------------------------------
	// EVENT HANDLERS
	//-------------------------------------------------------------


	
	//-------------------------------------------------------------
	// GETTER / SETTERS
	//-------------------------------------------------------------	

		public function get bytesLoaded():Number{
			return _bytesLoaded;
		}
		
		public function get bytesTotal():Number{
			return _bytesTotal;
		}
		
		public function get percentLoaded():Number{
			return _percentLoaded;
		}

	//-------------------------------------------------------------
	// PUBLIC METHODS
	//-------------------------------------------------------------

		public function watch($loader:Loader):void{
			
			_loader				=			$loader;
			
			_loader.contentLoaderInfo.addEventListener(Event.COMPLETE, loadComplete);
			_loader.contentLoaderInfo.addEventListener(ProgressEvent.PROGRESS, loadProgress);
			
			onWatchStart();
			
		}
		
		public function unwatch():void{
			try{
				_loader.contentLoaderInfo.removeEventListener(Event.COMPLETE, loadComplete);
				_loader.contentLoaderInfo.removeEventListener(ProgressEvent.PROGRESS, loadProgress);
			}catch(e:Error){}
			
			onUnwatch();
			
		}

	//-------------------------------------------------------------
	// END OF CLASS	
	//-------------------------------------------------------------
	}
}
