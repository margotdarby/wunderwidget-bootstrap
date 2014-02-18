package com.etr.utils
{

import flash.display.DisplayObject;
import flash.display.BitmapData;
import flash.display.Bitmap;
import flash.geom.Rectangle;
import flash.geom.Matrix;

public class Snapshot extends Bitmap
{
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------
	
	public function Snapshot(target:DisplayObject)
	{		
		var boundsRect:Rectangle = determineBounds(target);
		
		super(snapIt(target, boundsRect));

		// reposition to align with target
		x = target.x + boundsRect.x;
		y = target.y + boundsRect.y;
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function determineBounds(target:DisplayObject):Rectangle
	{
		var targetBounds:Rectangle = target.getBounds(target);
		
		var offsetX 	= targetBounds.x < 0 ? targetBounds.x : 0;
		var offsetY 	= targetBounds.y < 0 ? targetBounds.y : 0;
		var w:Number 	= targetBounds.width + Math.abs(targetBounds.x);
		var h:Number 	= targetBounds.height + Math.abs(targetBounds.y);
		 
		return new Rectangle(offsetX, offsetY, w, h);
	}
	
	private function snapIt(target:DisplayObject, targRect:Rectangle):BitmapData
	{
		var transMatrix = new Matrix();
		transMatrix.translate(Math.abs(targRect.x), Math.abs(targRect.y));

		var imageData = new BitmapData(targRect.width, targRect.height, true, 0x00000000);
		imageData.draw(target, transMatrix);
		
		return imageData;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

