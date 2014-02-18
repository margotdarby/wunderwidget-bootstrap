package app.views.ui
{

import app.interfaces.AccordianSection;

public class AccordianHelper  
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _currentSection:AccordianSection;
	private var _sections:Array;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function AccordianHelper()
	{
		
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function extend():void 
	{
		
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

	public function clicked(target:AccordianSection):void 
	{
		if (_currentSection) _currentSection.close();
		target.open();
	}
	
	public function addSections(sections:Array):void
	{
		_sections = sections;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

