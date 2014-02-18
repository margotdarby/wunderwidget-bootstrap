package app.models.items
{



public class Course extends AbstractRecipeItem	
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _ingredients:Array;
	private var _photo:String;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function Course(name:String, id:uint, ingredients:String, photo:String)
	{
		super(name, id);
		parseIngredients(ingredients);
		_photo = photo;
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function parseIngredients(ingredients:String):void 
	{
		_ingredients = ingredients.split(',');
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------


	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	

	public function get ingredients():Array
	{
		return _ingredients;
	}
	
	public function get photo():String
	{
		return _photo;
	}
	
//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------



//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}