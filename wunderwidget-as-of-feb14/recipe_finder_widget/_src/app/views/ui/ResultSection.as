package app.views.ui
{

import flash.events.MouseEvent;
import flash.display.Sprite;
import app.utils.SelectionSystem;

public class ResultSection extends AbstractTabSection 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function ResultSection(model:Object, id:uint)
	{
		super(model, id);
		
		_paginationLabel = 'more recipes';
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	override public function addSelections():void
	{	
		if (_selectionContainer.numChildren) clearSelections();
		
		super.addSelections();
		
		ResultSectionHeader(_tabButton).labelText = _model.courseName + '  >  ' + _model.ingredientName + '  >  ' + _model.activeTimeName;
	}

	override protected function getSelectionLength():uint 
	{
		return _model.results.length;
	}
	
	override protected function getItemsPerSection():uint
	{
		return 5;
	}
	
	override protected function getSelectionButton(i:uint):AbstractButton 
	{
		var rb:RecipeButton = new RecipeButton(_model.results[i].name, _model.results[i].id, _model.results[i].link);
		rb.y = (rb.height + 4) * (i % _numItemsPerSection) + (getSelectionLength() > getItemsPerSection() ? 25 : 4);
	
		return rb;
	}
	
	override protected function getTabButton():AbstractButton
	{
		return new ResultSectionHeader(_model.courseName + '  >  ' + _model.ingredientName + '  >  ' + _model.activeTimeName, 4);
	}
	
	override protected function getSelectionContainer():SelectionSystem 
	{
		return new RecipeSelectionContainer();
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

