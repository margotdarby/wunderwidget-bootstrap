package com.etr.utils{

	import flash.external.ExternalInterface;
	
	import flash.display.*;

	public class Useful{
	
	//-------------------------------------------------------------
	// STATIC FUNCTIONS
	//-------------------------------------------------------------

	
		public static function fireTrace($str:*):void{
			
			ExternalInterface.call( "console.log" , $str);
			
			trace($str);
			
		}
		
		public static function drawSimpleRectangle($mc:DisplayObject, $width:uint, $height:uint, $fill:Boolean = true, $fillColor:uint = 0x000000, $stroke:Boolean = true, $strokeColor:uint = 0x000000, $strokeWidth:uint = 1):void{
		
			var g			:Graphics			=		Object($mc).graphics;
			
			var toStroke	:Boolean			=		$stroke && Boolean($strokeWidth > 0);
			
			if(!$fill && !toStroke) throw new Error("You must have a fill or a stroke to draw a rectangle on: " + $mc);
									
			g.clear();
			
			if(toStroke) g.lineStyle($strokeWidth, $strokeColor, 1, true, "none", "square", "miter");
			
			if($fill) g.beginFill($fillColor);	
			
			g.drawRect(0, 0, $width, $height);
			
			if($fill) g.endFill();
		
		}
		
		public static function print_r($obj:Object, $it:uint = 0):String{
			
			var s:String			=			"";
			var t:String			=			"";
			
			for (var p:String in $obj)
			{
				for (var i:int = 0; i < $it; i++)
				{
					s += "\t";
				}
				
				t = typeof($obj[p]);
				
				if(t == "object" && $obj[p].length >= 0) t = "array";
				
				s += p + " : (" + t + ") :: ";
								
				if(Useful.numChildren($obj[p])){
										
					s += "\n" + Useful.print_r($obj[p], ($it+1));
				
				}else{
					
					s += "" +  $obj[p] + "\n";
				}
													
			}
			
			return s;
			
		}
		
		public static function numChildren($obj:Object):uint{
			
			var nc		:uint			=		0;
			
			for (var p:String in $obj)
			{
				nc++;
			}
			
			return nc;
			
		}
		
	}
}
