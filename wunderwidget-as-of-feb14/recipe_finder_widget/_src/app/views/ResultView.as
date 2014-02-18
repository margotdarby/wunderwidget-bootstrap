package app.views
{

import app.events.ModelEvent;
import app.views.ui.*;

import gs.TweenLite;

public class ResultView extends AbstractView 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _resultSection:ResultSection;
	
	private var _searchAgainButton:SearchButton;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function ResultView(model:Object)
	{
		super(model);
		
		model.addEventListener(ModelEvent.SEARCH_RESULT_SET, searchResultSetHandler);
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function displaySearchAgainButton():void 
	{
				
		if (!_searchAgainButton) 
		{
			_searchAgainButton = new SearchButton('search again', 0);
			_searchAgainButton.name = "searchAgain";

			addChild(_searchAgainButton);
		}

		_searchAgainButton.y = _resultSection.height + 1;	
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------
	
	private function searchResultSetHandler(evt:ModelEvent):void 
	{
		if(!_resultSection)
		{
			_resultSection = new ResultSection(_model, 2);
			addChild(_resultSection);
		}
		
		_resultSection.addSelections();
		
		alpha = 0;
		
		visible = true;
		
		TweenLite.to(this, .4, {alpha: 1});
		
		displaySearchAgainButton();
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

