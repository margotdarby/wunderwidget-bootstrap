package app.views.ui
{

import flash.display.Sprite;
import flash.events.MouseEvent;

public class CourseTabSection extends AbstractTabSection 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------


	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function CourseTabSection(model:Object, id:uint)
	{
		super(model, id);
		
		_paginationLabel = 'more courses';
		
		addSelections();
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	override public function addSelections():void
	{	
		super.addSelections();
	}
	
	override protected function getSelectionLength():uint 
	{
		return _model.courses.length;
	}
	
	override protected function getSelectionButton(i:uint):AbstractButton 
	{
		var cb:CourseButton = new CourseButton(_model.courses[i].name, _model.courses[i].id, _model.courses[i].photo);
		cb.y = (cb.height + 1) * (i % _numItemsPerSection) + (getSelectionLength() > getItemsPerSection() ? 30 : 6);
		
		return cb;
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

