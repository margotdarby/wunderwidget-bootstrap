package app.views.ui
{

import flash.events.MouseEvent;

public class IngredientTabSection extends AbstractTabSection  
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function IngredientTabSection(model:Object, id:uint)
	{
		super(model, id);
		
		_paginationLabel = 'more ingredients';
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
		return _model.ingredients.length;
	}
	
	override protected function getItemsPerSection():uint
	{
		return 10;
	}
	
	override protected function getSelectionButton(i:uint):AbstractButton 
	{
		var ib:IngredientButton = new IngredientButton(_model.ingredients[i].name, _model.ingredients[i].id, _model.ingredients[i].photo);
		ib.y = (ib.height + 3) * Math.floor((i % _numItemsPerSection) / 2) + (getSelectionLength() > getItemsPerSection() ? 30 : 6);
		ib.x = (ib.width + 6) * (i % 2);
		trace((ib.height + 2) * Math.floor((i % _numItemsPerSection) / 2));
		
		return ib;
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

