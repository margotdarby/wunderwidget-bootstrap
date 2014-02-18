package com.etr.layout
{

public class GridHelper
{

//-------------------------------------------------------------
// CLASS CONSTANTS
//-------------------------------------------------------------

	public static const LEFT_RIGHT:String = "Left To Right";
	public static const TOP_BOTTOM:String = "Top To Bottom";

//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _spacingV:int;
	private var _spacingH:int;
	private var _thumbsPerRow:int;
	private var _direction:String;
	private var _resetCount:uint;

//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------

	public function GridHelper(spacingV:int = 2, spacingH:int = 2, thumbsPerRow:int = 2, direction:String = GridHelper.LEFT_RIGHT)
	{
		_spacingV = spacingV;
		_spacingH = spacingH;
		_direction = direction;
		_thumbsPerRow = thumbsPerRow;
		_resetCount = 0;
		trace('GRIDDDD')
	}
	
//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public function setX(thumb:Object, iteration:int):int
	{
		var xPos:int;
		var w:Number = typeof(thumb) == 'number' ? Number(thumb) : thumb.width;
		if(_direction == GridHelper.LEFT_RIGHT)
		{
			xPos = (iteration % _thumbsPerRow) * (w + _spacingH);
		}
		else if(_direction == GridHelper.TOP_BOTTOM)
		{
			if(_resetCount != 0) iteration = iteration % _resetCount;
			xPos = Math.floor(iteration / _thumbsPerRow) * (w + _spacingH); 
		}
		else
		{
			throw new Error("Invalid Grid Flow:  Must be GridHelper.LEFT_RIGHT or GridHelper.TOP_BOTTOM");
		}
		return xPos;
	}
	
//-------------------------------------------------------------

	public function setY(thumb:Object, iteration:int):int
	{
		var yPos:int;
		var h:Number = typeof(thumb) == 'number' ? Number(thumb) : thumb.height;
	
		if(_direction == GridHelper.LEFT_RIGHT)
		{
			if(_resetCount != 0) iteration = iteration % _resetCount;
			yPos = Math.floor(iteration / _thumbsPerRow) * (h + _spacingV);
		}
		else if(_direction == GridHelper.TOP_BOTTOM)
		{
			yPos = (iteration % _thumbsPerRow) * (h + _spacingV);
		}
		else
		{
			throw new Error("Invalid Grid Flow:  Must be GridHelper.LEFT_RIGHT or GridHelper.TOP_BOTTOM");
		}
		return yPos;
	}
	
//-------------------------------------------------------------

	public function toString():String
	{
		var output:String = "*******\nGridHelper: VSpacing: " + _spacingV + " HSpacing: " + _spacingH + " ItemsPerSection: " + _thumbsPerRow + " GridFlow: " + _direction + "\n";
		output +="Use GridHelper to assist in the layout of items in a grid. \nConstructor(spacingV:int, spacingH:int, itemsPerSection:int, direction:String)\n\tFor direction use either:\n\tGridHelper.LEFT_RIGHT or GridHelper.TOP_BOTTOM\n Set resetCount to reset the grid back to 0\n\n*******";
		return output;
	}
	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------

	public function set resetCount(value:uint):void 
	{
		_resetCount = value;
	}
	
	public function set vSpacing(value:int):void
	{
		_spacingV = value;
	}
	
	public function set hSpacing(value:int):void 
	{
		_spacingH = value;
	}
	
	public function set itemsPerRow(value:uint):void 
	{
		_thumbsPerRow = value;
	}

//-------------------------------------------------------------
// END OF CLASS
//-------------------------------------------------------------	
}
}