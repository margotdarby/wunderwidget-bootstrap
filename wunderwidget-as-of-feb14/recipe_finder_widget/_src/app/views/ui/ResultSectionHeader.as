package app.views.ui
{

import flash.text.TextFormat;
//import org.casalib.util.StringUtil;//??? test

public class ResultSectionHeader extends TabButton 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function ResultSectionHeader(label:String, id:uint)
	{
		super(label.toUpperCase(), id);
		
		buttonMode = false;
		
		adjustTextField();
		
	}
	
//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function adjustTextField():void 
	{
		var dtf:TextFormat = new TextFormat();
		dtf.size = 8;
		this['labelTxt'].x = 10;
		this['labelTxt'].defaultTextFormat = dtf;
		this['labelTxt'].y = Math.round(height * .5 - this['labelTxt'].height * .5);
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------


	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	

	public function set labelText(value:String):void
	{
		this['labelTxt']['label'].text = value.toUpperCase();
	}

//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------



//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

