package com.etr.ui
{

import flash.display.*;
import flash.events.*;
import flash.text.*;
import flash.geom.*;
import flash.utils.Timer;	

public class Scroller extends Sprite
{
//-------------------------------------------------------------
// CLASS CONSTANTS
//-------------------------------------------------------------

	public static const TIMER_MODE:String = 'timer mode';
	public static const FRAME_MODE:String = 'frame mode';
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	// display objects
	private var scrollFace:Sprite;
	private var scrollTrack:Sprite;
	private var scrollUpBtn:Sprite;
	private var scrollDownBtn:Sprite;
	private var contentMask:DisplayObject;
	private var content:DisplayObject;
	
	// properties
	private var _speed:int;
	private var _bottomPadding:uint;
	private var _autoSize:Boolean;
	private var _contentHeight:int;
	private var _sFaceHeight:int;
	private var _sTrackHeight:int;
	private var _maskHeight:int;
	private var _maskWidth:int;
	private var _initScrollFacePos:int;
	private var _moveVal:Number;
	private var _easing:Number;
	private var _targetPos:Number;
	private var _mouseUp:Boolean;
	private var _dragging:Boolean;
	private var _loopRunning:Boolean;
	private var _updateTargetPos:Function;
	private var _contentToMaskRatio:Number;
	private var _timer:Timer;
	private var _mode:String;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function Scroller(args:Object)
	{	
		_speed 				= 7;
		_easing				= 0;
		_bottomPadding		= 0;
		_autoSize			= false;
		
		_mode				= FRAME_MODE;
		
		if (args.scrollFace) 		scrollFace 			= args.scrollFace;
		if (args.scrollTrack) 		scrollTrack 		= args.scrollTrack;
		if (args.scrollUpBtn) 		scrollUpBtn 		= args.scrollUpBtn;
		if (args.scrollDownBtn) 	scrollDownBtn 		= args.scrollDownBtn;
		if (args.contentMask) 		contentMask 		= args.contentMask;
		if (args.content) 			content 			= args.content;
		
		if (args.maskWidth) 		_maskWidth 			= args.maskWidth;
		if (args.maskHeight) 		_maskHeight 		= args.maskHeight;
		if (args.easing) 			easing				= args.easing;
		if (args.speed) 			_speed 				= args.speed;
		if (args.bottomPadding)		_bottomPadding		= args.bottomPadding;
		if (args.autoSize)			_autoSize			= args.autoSize;
		if (args.mode)				mode				= args.mode;
					
		
		for (var prop in args)
		{	
			switch (prop)
			{
				case 'scrollFace':
				case 'scrollTrack':
				case 'scrollUpBtn':
				case 'scrollDownBtn':
					addListener(this[prop])
				break;
			}
		}
				
		init();
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function init():void
	{
		// set properties
		if (content != null) _contentHeight = (content is TextField ? TextField(content).textHeight : getFullBounds(content).height) + _bottomPadding;			

		if (!_maskHeight) _maskHeight 	= contentMask.height;
		if (!_maskWidth)  _maskWidth	= contentMask.width;
		
		_contentToMaskRatio = _maskHeight / _contentHeight;
		
		if (_autoSize) scrollFace.height = Math.floor(scrollTrack.height * _contentToMaskRatio);
		
		_sFaceHeight 		= scrollFace.height;
		
		_sTrackHeight 		= scrollTrack.height;
				
		_initScrollFacePos 	= scrollFace.y = scrollTrack.y;
		
		_moveVal 			= (_contentHeight - _maskHeight) / (_sTrackHeight - _sFaceHeight);
		
		_mouseUp 			= true;
		
		_targetPos 			= 0;
		
		_loopRunning 		= false;
				
		_contentHeight < _maskHeight ? toggleScroller(false) : toggleScroller(true);
		
		// set content mask (using scrollRect here for better performance)
		if (content != null) content.scrollRect = new Rectangle(0, 0, _maskWidth, _maskHeight);
		
		if (contentMask) 
		{
			contentMask.parent.removeChild(contentMask);
			contentMask = null;
		}
		
		if (content != null) content.cacheAsBitmap = true;
	}

//-------------------------------------------------------------
	
	private function addListener(target:Sprite):void
	{
		switch (target)
		{
			case scrollUpBtn:
			case scrollDownBtn:
			case scrollFace:
				target.cacheAsBitmap = true;
				target.addEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler);
				target.addEventListener(MouseEvent.MOUSE_UP, mouseUpHandler);
				target.buttonMode = true;
			break;
			
			case scrollTrack:
				target.addEventListener(MouseEvent.MOUSE_DOWN, mouseClickHandler);
			break;
		}
	}

//-------------------------------------------------------------

	public function getFullBounds(displayObject:DisplayObject):Rectangle
	{
		var bounds:Rectangle, transform:Transform, toGlobalMatrix:Matrix, currentMatrix:Matrix;

		transform 				= displayObject.transform;
		
		currentMatrix 			= transform.matrix;
		
		toGlobalMatrix 			= transform.concatenatedMatrix;
		
		toGlobalMatrix.invert();
		
		transform.matrix 		= toGlobalMatrix;

		bounds 					= transform.pixelBounds.clone();

		transform.matrix 		= currentMatrix;

		return bounds;
	}
	
//-------------------------------------------------------------

	private function enterFrameHandler(evt:Event):void
	{			
		// calling dynamically set function here to save some process power rather than if statements in enterFrame loop
		if (_updateTargetPos != null) _updateTargetPos();
		
		// update content area
		updateRect();		
	}
	
	private function onTimerEvent(evt:TimerEvent):void
	{
		if (_updateTargetPos != null) _updateTargetPos();
		
		// update content area
		updateRect();
		
		evt.updateAfterEvent();
	}
	
//-------------------------------------------------------------

	private function updateRect():void
	{	
		var rect:Rectangle = content.scrollRect;
		if (_easing > 0)
		{
			if (_targetPos < rect.y) 
			{
				rect.y += Math.floor((_targetPos - rect.y) * _easing);
			}
			else
			{
				rect.y += Math.ceil((_targetPos - rect.y) * _easing);
			}
			
			// check if content has reached its position
			if (Math.abs(_targetPos - rect.y) < 1 && !_dragging)
			{
				killLoop();
			}
		}
		else
		{
			rect.y = _targetPos;
		}
		
		// update content position
		content.scrollRect = rect;
	}

//-------------------------------------------------------------

	private function killDrag():void
	{
		_dragging = false;
		
		if (_easing == 0) killLoop(); 
		
		scrollFace.stopDrag();
	}	
	
//-------------------------------------------------------------

	private function scrollTrackHandler(clickLoc:int):void
	{	
		if (clickLoc < (_sFaceHeight + scrollFace.y) - scrollTrack.y)
		{
			scrollFace.y -= Math.floor(_maskHeight / _moveVal);
			if (scrollFace.y < scrollTrack.y) scrollFace.y = scrollTrack.y;
		}
		else
		{
			scrollFace.y += Math.floor(_maskHeight / _moveVal);
			if (scrollFace.y > (scrollTrack.y + _sTrackHeight) - _sFaceHeight) scrollFace.y = (scrollTrack.y + _sTrackHeight) - _sFaceHeight;
		}
		
		var dist:Number = Math.abs(_initScrollFacePos - scrollFace.y) * _moveVal;
		_targetPos = dist;
		
		if (_easing == 0) updateRect();
	}

//-------------------------------------------------------------

	private function startLoop():void
	{
		if (!_loopRunning) 
		{
			switch (_mode)
			{
				case TIMER_MODE:
				_timer.start();
				break;
				
				case FRAME_MODE:
				addEventListener(Event.ENTER_FRAME, enterFrameHandler);
				break;
			}
		
			_loopRunning = true;
		}
	}
	
//-------------------------------------------------------------

	private function killLoop():void
	{
		if (_loopRunning)
		{
			switch (_mode)
			{
				case TIMER_MODE:
					_timer.stop();
				break;
				
				case FRAME_MODE:
					removeEventListener(Event.ENTER_FRAME, enterFrameHandler);
				break;
			}
			
			_loopRunning = false;
		}
	}

//-------------------------------------------------------------

	private function scrollUpPressed():void
	{
		if (!_mouseUp && scrollFace.y != _initScrollFacePos)
		{
			 _targetPos -= _speed;
			
			scrollFace.y = Math.round(_targetPos / _moveVal) + _initScrollFacePos;
			
			if (scrollFace.y < _initScrollFacePos)
			{
				scrollFace.y = _initScrollFacePos;
				_targetPos = 0;
				if (_easing == 0) killLoop();
			}
		}
	}
	
//-------------------------------------------------------------

	private function scrollDownPressed():void
	{
		if (!_mouseUp && scrollFace.y != (_sTrackHeight + _initScrollFacePos) - _sFaceHeight)
		{
			_targetPos += _speed;
			
			scrollFace.y = Math.round(_targetPos / _moveVal) + _initScrollFacePos;
			
			if (scrollFace.y > (_sTrackHeight + _initScrollFacePos) - _sFaceHeight)
			{
				scrollFace.y = (_sTrackHeight + _initScrollFacePos) - _sFaceHeight;
				_targetPos = (_sTrackHeight - _sFaceHeight) * _moveVal;
				if (_easing == 0) killLoop();
			}
		}
	}
	
//-------------------------------------------------------------

	private function scrollFacePressed():void
	{
		_targetPos = Math.abs(Math.round(_moveVal * (_initScrollFacePos - scrollFace.y)));
	}

//-------------------------------------------------------------

	private function toggleScroller(toggle:Boolean):void
	{
		if (scrollFace != null) 		scrollFace.visible 	= toggle;
		if (scrollTrack != null) 	scrollTrack.visible 	= toggle;
		if (scrollUpBtn != null) 	scrollUpBtn.visible		= toggle;
		if (scrollDownBtn != null) 	scrollDownBtn.visible 	= toggle;
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	private function mouseDownHandler(evt:MouseEvent):void
	{
		switch(evt.target)
		{
			case scrollUpBtn:
				_mouseUp = false;
				_updateTargetPos = scrollUpPressed;
				if (content.scrollRect.y != 0) startLoop();
				scrollTrack.stage.addEventListener(MouseEvent.MOUSE_UP, scrollBtnsReleaseOutside);
			break;
			
			case scrollDownBtn:
				_mouseUp = false;
				_updateTargetPos = scrollDownPressed;
				if (content.scrollRect.y != _contentHeight - content.scrollRect.height) startLoop();
				scrollTrack.stage.addEventListener(MouseEvent.MOUSE_UP, scrollBtnsReleaseOutside);
			break;
			
			case scrollFace:
				scrollFace.startDrag(false, new Rectangle(scrollTrack.x, scrollTrack.y, 0, _sTrackHeight - _sFaceHeight));
				_dragging = true;
				_updateTargetPos = scrollFacePressed;
				startLoop();
				scrollFace.stage.addEventListener(MouseEvent.MOUSE_UP, scrollFaceReleaseOutside);
			break;
		}
		
		
	}

//-------------------------------------------------------------

	private function mouseUpHandler(evt:MouseEvent):void
	{
		switch(evt.target)
		{
			case scrollUpBtn:
			case scrollDownBtn:
				_mouseUp = true;
				if(_easing == 0) killLoop(); 
			break;
			
			case scrollFace:
				killDrag();
			break;
		}
	}
	
//-------------------------------------------------------------

	// this is assigned to the scroll track
	private function mouseClickHandler(evt:MouseEvent):void
	{
		var scaleRatio:Number = Math.round(scrollTrack.scaleY * 100) / 100; 
		var clickLocation:int = evt.localY * scaleRatio;
		
		if (_easing != 0) startLoop();
		
		scrollTrackHandler(clickLocation);
	}

//-------------------------------------------------------------

	private function scrollFaceReleaseOutside(evt:MouseEvent):void
	{
		if (evt.target != scrollFace) killDrag();
		
		scrollFace.stage.removeEventListener(MouseEvent.MOUSE_UP, scrollFaceReleaseOutside);
	}
	
//-------------------------------------------------------------

	private function scrollBtnsReleaseOutside(evt:MouseEvent):void
	{
		if(evt.target != scrollUpBtn && evt.target != scrollDownBtn)
		{
			_mouseUp = true;
			if(_easing == 0) killLoop();
		}
				
		scrollTrack.stage.removeEventListener(MouseEvent.MOUSE_UP, scrollBtnsReleaseOutside);
	}
	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	

	public function set easing(value:Number):void
	{
		if (value > 5) value == 5;
		_easing = value * .1;
	}

//-------------------------------------------------------------
	
	public function get easing():Number
	{
		return _easing;
	}
	
//-------------------------------------------------------------

	public function set autoSize(value:Boolean):void
	{
		_autoSize = value;
		init();
	}
	
//-------------------------------------------------------------

	public function set speed(value:uint):void 
	{
		_speed = value;
		init();
	}
	
//-------------------------------------------------------------

	public function get isDragging():Boolean
	{
		return _dragging;
	}
	
//-------------------------------------------------------------

	public function set bottomPadding(value:uint):void 
	{
		_bottomPadding = value;
		init();
	}
	
//-------------------------------------------------------------

	public function set scrollContent(value:DisplayObject):void 
	{
		content = value;		
		init();
	}
	
//-------------------------------------------------------------

	public function set maskHeight(value:uint):void 
	{
		_maskHeight = value;
		init();
	}
	
//-------------------------------------------------------------

	public function set maskWidth(value:uint):void
	{
		_maskWidth = value;
		init();
	}

//-------------------------------------------------------------
	
	public function set mode(value:String):void 
	{
		if (value == FRAME_MODE || value == TIMER_MODE)
		{
			_mode = value
			if (value == TIMER_MODE && _timer == null)
			{
				_timer 				= new Timer(10);
				_timer.addEventListener(TimerEvent.TIMER, onTimerEvent);
			}
		}
		else
		{
			throw(new Error('mode must be Scroller.FRAME_MODE or Scroller.TIMER_MODE'));
		}
	}
	
//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public function disableScrollTrack():void
	{
		scrollTrack.removeEventListener(MouseEvent.MOUSE_DOWN, mouseClickHandler);
	}


//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

