package app.models.items
{

public class Recipe extends AbstractRecipeItem
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _photo:String;
	private var _link:String;
	private var _spec:RecipeSpec;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function Recipe(name:String, id:uint, photo:String, link:String, spec:RecipeSpec)
	{
		super(name.split('-').join(' '), id);
		_photo = photo;
		_link = link;
		_spec = spec;
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
	
	public function get photo():String
	{
		return _photo;
	}
	
	public function get link():String
	{
		return _link;
	}

//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public function getSpec():RecipeSpec
	{
		return _spec;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

