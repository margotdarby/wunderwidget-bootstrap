package app.models.items
{



public class RecipeSpec  
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _courseID:uint;
	private var _timeID:Array;
	private var _ingredientIDs:Array;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function RecipeSpec(courseID:uint, timeID:String, ingredientsIDs:String)
	{
		_courseID = courseID;
		_timeID = timeID.split(',');
		_ingredientIDs = ingredientsIDs.split(',');
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------



//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------


	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	

	public function get courseID():uint
	{ 
		return _courseID; 
	}
	
	public function get timeID():Array
	{ 
		return _timeID; 
	}

	public function get ingredientIDs():Array
	{ 
		return _ingredientIDs; 
	}

//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public function matches(spec:RecipeSpec):Boolean 
	{
		
		if (_courseID != spec.courseID) return false;
		
		if (_timeID.indexOf(spec.timeID[0]) == -1) return false;
		
		if (_ingredientIDs.indexOf(spec.ingredientIDs[0]) == -1) return false;
		
		//if (_ingredientIDs != spec.ingredientIDs) return false;
		
		return true;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

