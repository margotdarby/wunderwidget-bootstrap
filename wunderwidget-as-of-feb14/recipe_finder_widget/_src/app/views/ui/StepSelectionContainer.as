package app.views.ui
{

import app.utils.SelectionSystem;
import flash.events.MouseEvent;

public class StepSelectionContainer extends SelectionSystem 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _model:Object;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function StepSelectionContainer(model:Object)
	{
		_model = model;
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------



//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	override protected function clickHandler(evt:MouseEvent):void
	{
		if (evt.target is CourseButton) _model.course = evt.target.id;

		if (evt.target is IngredientButton) _model.ingredient = evt.target.id;

		if (evt.target is TimeButton) _model.activeTime = evt.target.id;	
	}
	
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

