package com.etr.ui
{

import flash.display.Sprite;
import flash.events.MouseEvent;

public class SelectionSystem extends Sprite 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	protected var _items:Array;
	protected var _currentItem:int;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function SelectionSystem()
	{
		_items = new Array();
		_currentItem = -1;
		addEventListeners();
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function addEventListeners():void
	{
		addEventListener(MouseEvent.CLICK, clickHandler, false, 0, true);
		addEventListener(MouseEvent.MOUSE_OVER, mouseOverHandler, false, 0, true);
		addEventListener(MouseEvent.MOUSE_OUT, mouseOutHandler, false, 0, true);
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	protected function clickHandler(evt:MouseEvent):void
	{
		//trace(this);
		if(evt.target != this)
		{
			execute(evt);
			evt.target.mouseEnabled = false;
			evt.target.buttonMode = false;
			if(_currentItem != -1) 
			{
				_items[_currentItem].mouseEnabled = true;
				_items[_currentItem].buttonMode = true;
				_items[_currentItem].out();
			}
			_currentItem = evt.target.id;
		}	
	}

//-------------------------------------------------------------
	
	protected function mouseOverHandler(evt:MouseEvent):void
	{
		if(evt.target != this) evt.target.over();
	}

//-------------------------------------------------------------
	
	protected function mouseOutHandler(evt:MouseEvent):void
	{
		if(evt.target != this && evt.target.mouseEnabled) evt.target.out();
	}
	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	

	public function get currentId():int{
	        return _currentItem;
	    }


//-------------------------------------------------------------
// PROTECTED METHODS
//-------------------------------------------------------------

	protected function execute(evt:MouseEvent):void {}; // override


//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public function showInitialItem(id:uint):void {
		_items[id].dispatchEvent(new MouseEvent(MouseEvent.MOUSE_OVER));
		_items[id].dispatchEvent(new MouseEvent(MouseEvent.CLICK));
	}
	
	public function destroy():void {
		removeEventListener(MouseEvent.CLICK, clickHandler, false);
		removeEventListener(MouseEvent.MOUSE_OVER, mouseOverHandler, false);
		removeEventListener(MouseEvent.MOUSE_OUT, mouseOutHandler, false);
	}
	
	public function clearItems():void {
		_items[_currentItem].mouseEnabled = true;
		_items[_currentItem].buttonMode = true;
		_items[_currentItem].out();
		_currentItem = -1;
	}	

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

