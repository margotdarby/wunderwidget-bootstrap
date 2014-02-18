package com.etr.ui
{

import flash.display.Sprite;
import flash.display.Shape;
import flash.events.Event;
import flash.events.MouseEvent;
import flash.display.DisplayObjectContainer;

/** 
 *	@langversion ActionScript 3.0
 *	@playerversion Flash 9.0
 *
 *	@author Ryan Ogden
 *	@since  25.06.2009
 */

public class MouseHoverScroller extends Sprite 
{

//-------------------------------------------------------------
// CLASS CONSTANTS
//-------------------------------------------------------------

	public static const HORIZONTAL:String = 'x';
	public static const VERTICAL:String = 'y';
	
//-------------------------------------------------------------
// PRIVATE & PROTECTED VARIABLES
//-------------------------------------------------------------

	private var _orientation:String;
	private var _dimension:String;
	private var _mouseProp:String;
	
	private var _target:DisplayObjectContainer;
	private var _mask:Sprite;
	private var _maskHeight:uint;
	private var _maskWidth:uint;
	
	private var _speed:uint;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------
	
	public function MouseHoverScroller(target:DisplayObjectContainer, args:Object = null)
	{	
		// set defaults
		_speed = 10;
		
		_target = target;
		
		// set default mask width and mask height
		_maskWidth = _target.width;
		_maskHeight = _target.height;

		setProps(args);
		init();
	}

//-------------------------------------------------------------
// PRIVATE & PROTECTED METHODS	
//-------------------------------------------------------------
	
	private function setProps(props:Object):void 
	{
		for (var item:String in props)
		{
			try
			{
				this['_' + item] = props[item];
			}
			catch(e:Error)
			{
				throw new Error('The properties that can be set during instantiation are orientation, speed, maskWidth and maskHeight')
			}
		}
	}
	
	private function setOrientation():void
	{
		if (_orientation == HORIZONTAL)
		{
			_dimension = "width";
			_mouseProp = "mouseX";
		}
		else if (_orientation == VERTICAL)
		{
			_dimension = "height";
			_mouseProp = "mouseY";
		}
		else
		{
			throw new Error("Orientation must either be MouseHoverScroller.HORIZONTAL or MouseHoverScroller.VERTICAL");
		}
	}
	
	protected function init():void
	{
		_target.addEventListener(MouseEvent.MOUSE_OVER, scrollOn, false, 0, true);
		_target.addEventListener(MouseEvent.MOUSE_OUT, scrollOff, false, 0, true);
		
		setOrientation();
		createMask();
		createBgHitArea();
	}
	
	private function createMask():void
	{		
		_mask = new Sprite();
		_mask.x = _target.x;
		_mask.y = _target.y;
		
		var maskX:int = _orientation == HORIZONTAL ? Math.ceil(- _maskWidth * .5) : 0;
		var maskY:int = _orientation == VERTICAL ? Math.ceil(- _maskHeight * .5) : 0;
		
		with (_mask.graphics)
		{
			beginFill(0xffffff);
			drawRect(maskX, maskY, _maskWidth, _maskHeight);
			endFill();
		}
		
		var maskOffset:int = _orientation == HORIZONTAL ? maskX : maskY;
		_mask[_orientation] -= maskOffset;
	
		_target.parent.addChild(_mask);
		_target.mask = _mask;
	}
	
	private function createBgHitArea():void 
	{
		var bg:Shape = new Shape();
		
		with (bg.graphics)
		{
			beginFill(0xFFFFFF, 0);
			drawRect(0, 0, _target.width, _target.height);
			endFill();
		}
		
		_target.addChildAt(bg, 0);
	}
	
	private function scrollOn(evt:Event) 
	{
		addEventListener(Event.ENTER_FRAME, scrollMagic);
	}

	private function scrollOff(evt:Event) 
	{
		removeEventListener(Event.ENTER_FRAME, scrollMagic);
	}

	private function scrollMagic(evt:Event) 
	{
		_target[_orientation] += -(_mask[_mouseProp] / _speed);
		
		if (_target[_orientation] > _mask[_orientation] - _mask[_dimension] * .5)
		{
			_target[_orientation] = (_mask[_orientation] - _mask[_dimension] * .5);
		}

		if (_target[_orientation] < (_mask[_orientation] - _mask[_dimension] * .5) - ((_target[_dimension]) - _mask[_dimension]))
		{
			_target[_orientation] = ((_mask[_orientation] - _mask[_dimension] * .5) - ((_target[_dimension]) - _mask[_dimension]));
		}
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------


	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	
	

	
//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------



//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}