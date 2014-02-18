package app.views.ui
{

import flash.display.Sprite;
import flash.events.MouseEvent;

public class TimeTabSection extends AbstractTabSection  
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function TimeTabSection(model:Object, id:uint)
	{
		super(model, id);
		
		_paginationLabel = 'more types';
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	override public function addSelections():void
	{	
		if (_selectionContainer.numChildren) clearSelections();
		
		super.addSelections();
	}

	override protected function getSelectionLength():uint 
	{
		return _model.activeTimes.length;
	}

	override protected function getItemsPerSection():uint
	{
		return 3;
	}

	override protected function getSelectionButton(i:uint):AbstractButton 
	{
		var tb:TimeButton = new TimeButton(_model.activeTimes[i].name, _model.activeTimes[i].id);
		tb.y = (tb.height + 2) * (i % getItemsPerSection()) + (getSelectionLength() > getItemsPerSection() ? 30 : 6);

		return tb;
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

