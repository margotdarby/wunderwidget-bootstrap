package app.config
{

import flash.utils.Proxy;
import flash.utils.flash_proxy;

public dynamic class Config extends Proxy	
{

//-------------------------------------------------------------
// CLASS CONSTANTS
//-------------------------------------------------------------

public static const SOURCE_XML:String = "th2010rev.xml";

//	public static const RECIPE_XML:String = "starbucks_recipe.xml";
	public static const EMBED_CODE:String = '<object type="application/x-shockwave-flash" data="http://www.foodandwine.com/images/thanksgiving/swf/recipe_finder_widget.swf" id="W49c7b2b12354550949c7df4f108ea542" width="185" height="472"><param name="movie" value="http://www.foodandwine.com/images/thanksgiving/swf/recipe_finder_widget.swf" /></object>';


//-------------------------------------------------------------
/* 
	DECLARE YOUR CONFIG PROPERTIES HERE
	* each property should be delcared as private and the name should start with an '_' 
*/
//-------------------------------------------------------------
	
	// used for storing dynamic passed vars
	private var _storage	:Object;
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private static var _instance:Config;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function Config(enforcer:SingletonEnforcer)
	{
		_storage = new Object();
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------
	
	override flash_proxy function getProperty(name:*)
	{
		try
		{
			if (_storage[name]) return _storage[name];
			
			return this['_' + name]; 
		}
		catch(e:Error){}
	}
	
	override flash_proxy function setProperty(name:*, value:*):void
	{	
		_storage[name] = value;
	}

//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public static function get instance():Config
	{
		if (_instance == null) _instance = new Config(new SingletonEnforcer());
		
		return _instance;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

class SingletonEnforcer{};