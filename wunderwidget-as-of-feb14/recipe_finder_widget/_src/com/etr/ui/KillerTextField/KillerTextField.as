package com.etr.ui.KillerTextField{

	import flash.text.TextField;
	import flash.text.StyleSheet;
	import flash.text.TextFormat;
	import flash.text.TextFieldType;
	
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	public class KillerTextField extends TextField{
	
	//-------------------------------------------------------------
	// STATIC VARIABLES
	//-------------------------------------------------------------

		public static const INPUT				:String					=				TextFieldType.INPUT;
		public static const DYNAMIC				:String					=				TextFieldType.DYNAMIC;

	//-------------------------------------------------------------
	// PRIVATE VARIABLES
	//-------------------------------------------------------------
	
		private var _type						:String;
		
		private var _styleSheet					:StyleSheet;
		
		private var _textFormat					:TextFormat;
		private var _defaultTextFormat			:TextFormat;
		private var _currTextFormat				:TextFormat;
		
		private var _appliedFormats				:Object;
		
		private var _style						:Object;
		
		private var _styled						:Boolean;
		
		private var _styledText					:String;		
		
	
	//-------------------------------------------------------------
	// CONSTRUCTOR
	//-------------------------------------------------------------	
	
		public function KillerTextField($type:String=DYNAMIC){
			
			_type				=			$type;
			
			init();	
			
			type				=			_type;
			
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
		
			_styleSheet				=				new StyleSheet();
			
			_textFormat				=				new TextFormat();
			_defaultTextFormat		=				new TextFormat();
			
			_appliedFormats			=				new Object();
					
			_style					=				new Object();
			
			_styled					=				false;
					
		
		}
		
		private function initProperties():void{
						
			with(_defaultTextFormat){
				align				=				"left";
				blockIndent 		= 				0;
				bold 				= 				false;
				bullet 				= 				false;
				color 				= 				0x000000;
				font 				= 				"Arial";
				indent 				= 				0;
				italic 				= 				false;
				kerning 			= 				false;
				leading 			= 				0;
				leftMargin 			= 				0;
				letterSpacing		= 				0;
				rightMargin 		= 				0;
				size 				= 				12;
				tabStops 			= 				[];
				target 				= 				"";
				underline			= 				false;
				url 				= 				""; 
			}
			
			selectable				=				(_type==INPUT);
			defaultTextFormat		=				_defaultTextFormat;
		
		}
		
		private function initListeners():void{
		
		}

	//-------------------------------------------------------------
	// PRIVATE METHODS	
	//-------------------------------------------------------------

		private function parseStyle():void{
			
			_styleSheet.clear();
			
			for(var s in _style){
				_styleSheet.setStyle(String(s), _style[s]);
			}
			
		}
		
		private function applyTextFormat($format:TextFormat):void{
			
			trace("APPLYING FORMAT WITH FONT-SIZE: " + $format.size + ", STYLED: " + _styled);
			
			_currTextFormat = $format;
			
			if(_styled){
				clearCSS();
				if(_styledText==null){
					defaultTextFormat = $format;
				}else{
					setTextFormat($format);
				}	
				showCSS();
			}else{
				if(_styledText==null){
					defaultTextFormat = $format;
				}else{
					setTextFormat($format);
				}
			}
			
			trace(size);
		}
		
		private function removeCSS():void{
			
			if(_styled){
				styleSheet.clear();
				styleSheet		=		null;
				_styled			=		false;
			}
		}

	//-------------------------------------------------------------
	// EVENT HANDLERS
	//-------------------------------------------------------------

	
	
	//-------------------------------------------------------------
	// GETTER / SETTERS
	//-------------------------------------------------------------	
	
	
		/*--------- Custom ---------*/
	
		public function set styledText(value:String):void{
			_styledText = value;
			
			htmlText = _styledText;
		}
	
	
		/*--------- Style Sheet ---------*/

		public function set style(value:Object):void{
			_style = value;
			
			if(type==DYNAMIC){
				parseStyle();
				
				styleSheet 	= 		_styleSheet;
				_styled		=		true;
				
				if(_styledText!=null) htmlText = _styledText;
				
			}else{
				throw new Error("You cannot apply CSS Styles to an Input text field.");
			}			
		}


		/*--------- Text Format ---------*/
		
		public function get align():String{
			return getTextFormat().align;
		}
		
		public function set align(value:String):void{
			removeCSS();
			
			_textFormat.align = value;
			//_appliedFormats["align"] = {value:value, prop:_textFormat.align};
			applyTextFormat(_textFormat);	
		}
		
		public function get blockIndent():Object{
			return getTextFormat().blockIndent;
		}
		
		public function set blockIndent(value:Object):void{
			removeCSS();
			
			_textFormat.blockIndent = value;
			//_appliedFormats["blockIndent"] = {value:value, prop:_textFormat.blockIndent};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get bold():Object{
			return getTextFormat().bold;
		}
		
		public function set bold(value:Object):void{
			removeCSS();

			_textFormat.bold = value;
			//_appliedFormats["bold"] = {value:value, prop:_textFormat.bold};

			applyTextFormat(_textFormat);	
		}
		
		public function get bullet():Object{
			return getTextFormat().bullet;
		}
		
		public function set bullet(value:Object):void{
			removeCSS();
			
			_textFormat.bullet = value;
			//_appliedFormats["bullet"] = {value:value, prop:_textFormat.bullet};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get color():Object{
			return getTextFormat().color;
		}
		
		public function set color(value:Object):void{
			removeCSS();
			
			_textFormat.color = value;
			//_appliedFormats["color"] = {value:value, prop:_textFormat.color};

			applyTextFormat(_textFormat);	
		}
		
		public function get font():String{
			return getTextFormat().font;
		}
		
		public function set font(value:String):void{
			removeCSS();

			_textFormat.font = value;
			//_appliedFormats["font"] = {value:value, prop:_textFormat.font};

			applyTextFormat(_textFormat);	
		}
		
		public function get indent():Object{
			return getTextFormat().indent;
		}
		
		public function set indent(value:Object):void{
			removeCSS();
			
			_textFormat.indent = value;
			//_appliedFormats["indent"] = {value:value, prop:_textFormat.indent};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get italic():Object{
			return getTextFormat().italic;
		}
		
		public function set italic(value:Object):void{
			removeCSS();
		
			_textFormat.italic = value;
			//_appliedFormats["italic"] = {value:value, prop:_textFormat.italic};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get kerning():Object{
			return getTextFormat().kerning;
		}
		
		public function set kerning(value:Object):void{
			removeCSS();
			
			_textFormat.kerning = value;
			//_appliedFormats["kerning"] = {value:value, prop:_textFormat.kerning};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get leading():Object{
			return getTextFormat().leading;
		}
		
		public function set leading(value:Object):void{
			removeCSS();
			
			_textFormat.leading = value;
			//_appliedFormats["leading"] = {value:value, prop:_textFormat.leading};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get leftMargin():Object{
			return getTextFormat().leftMargin;
		}
		
		public function set leftMargin(value:Object):void{
			removeCSS();
			
			_textFormat.leftMargin = value;
			//_appliedFormats["leftMargin"] = {value:value, prop:_textFormat.leftMargin};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get letterSpacing():Object{
			return getTextFormat().letterSpacing;
		}
		
		public function set letterSpacing(value:Object):void{
			removeCSS();
			
			_textFormat.letterSpacing = value;
			//_appliedFormats["letterSpacing"] = {value:value, prop:_textFormat.letterSpacing};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get rightMargin():Object{
			return getTextFormat().rightMargin;
		}
		
		public function set rightMargin(value:Object):void{
			removeCSS();
			
			_textFormat.rightMargin = value;
			//_appliedFormats["rightMargin"] = {value:value, prop:_textFormat.rightMargin};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get size():Object{
			return getTextFormat().size;
		}
		
		public function set size(value:Object):void{
			removeCSS();
			
			_textFormat.size = value;
			//_appliedFormats["size"] = {value:value, prop:_textFormat.size};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get tabStops():Array{
			return getTextFormat().tabStops;
		}
		
		public function set tabStops(value:Array):void{
			removeCSS();
		
			_textFormat.tabStops = value;
			//_appliedFormats["tabStops"] = {value:value, prop:_textFormat.tabStops};
		
			applyTextFormat(_textFormat);	
		}
		
		public function get target():String{
			return getTextFormat().target;
		}
		
		public function set target(value:String):void{
			removeCSS();
			
			_textFormat.target = value;
			//_appliedFormats["target"] = {value:value, prop:_textFormat.target};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get underline():Object{
			return getTextFormat().underline;
		}
		
		public function set underline(value:Object):void{
			removeCSS();
			
			_textFormat.underline = value;
			//_appliedFormats["underline"] = {value:value, prop:_textFormat.underline};
			
			applyTextFormat(_textFormat);	
		}
		
		public function get url():String{
			return getTextFormat().url;
		}
		
		public function set url(value:String):void{
			removeCSS()
			
			_textFormat.url = value;
			//_appliedFormats["url"] = {value:value, prop:_textFormat.url};
			
			applyTextFormat(_textFormat);	
		}
			
	//-------------------------------------------------------------
	// PUBLIC METHODS
	//-------------------------------------------------------------

		public function clearTextFormatting():void{	
			trace("clearTextFormatting");					
			applyTextFormat(_defaultTextFormat);
		}
		
		public function showTextFormatting():void{
			
			trace("showTextFormatting");
						
			applyTextFormat(_textFormat);		
		}

		public function clearCSS():void{
			
			trace("clearCSS");
			
			removeCSS();
			
			if(_currTextFormat!=null)applyTextFormat(_currTextFormat);
			
			if(_styledText!=null) htmlText = _styledText;
		}
		
		public function showCSS():void{
			
			trace("showCSS");
			
			if(type==DYNAMIC){
				style = _style;
			}else{
				throw new Error("You cannot apply CSS Styles to an Input text field.");
			}
					
		}

	//-------------------------------------------------------------
	// END OF CLASS	
	//-------------------------------------------------------------
	}
}