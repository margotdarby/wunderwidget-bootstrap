package app.views.ui
{

import flash.display.Sprite;
import flash.display.Shape;
import flash.events.Event;
import app.interfaces.AccordianSection;
import gs.TweenLite;
import gs.easing.*;

public class AccordianContainer extends Sprite 
{

//-------------------------------------------------------------
// CLASS CONSTANTS
//-------------------------------------------------------------

	private static const ITEM_SPACING:uint = 4;
	private static const SHOW_INITIAL_ITEM:Boolean = true;
	private static const EXTEND_SPEED:Number = .9;
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	private var _sections:Array;
	private var _currentSection:uint;
	private var _currentItem:Object;
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function AccordianContainer()
	{
		_sections = new Array();
		addEventListener("AccordianClick", accordianClickHandler);
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------

	private function drawMask(target:Sprite):uint 
	{
		var _mask:Shape = new Shape();
		
		with (_mask.graphics)
		{
			beginFill(0xFFFFFF);
			// change drawRect height parameter to explicit value if expanded height should be constant
			drawRect(0, 0, target.width, target.getRect(AccordianSection(target).subSection).height - target.accordianButton.height + ITEM_SPACING);
			endFill();
		}
		
		_mask.y = AccordianSection(target).subSection.y;
		
		target.addChild(_mask);
		
		
		
		
		var maskHeight:uint = _mask.height;

		_mask.height = 0;
		
		AccordianSection(target).subSection.mask = _mask;
		
		return maskHeight;
	}
	
	public function extend(id:uint):void
	{
		// activate extended section for interactivity
		_sections[id].section.mouseChildren = true;
		
		TweenLite.to(_sections[_currentSection].section.subSection.mask, EXTEND_SPEED, {height: 0, ease:Expo.easeOut});
		
		for (var i:int = 0; i < _sections.length; i++)
		{
			if (i <= id)
			{
				TweenLite.to(_sections[i].section, EXTEND_SPEED, {y: _sections[i].origY, ease: Expo.easeOut});
			}
			else if (i == id + 1)
			{
				_sections[i].extPos = _sections[id].origY + _sections[id].sectionHeight;
				
				TweenLite.to(_sections[i].section, EXTEND_SPEED, {y: _sections[i].extPos, ease: Expo.easeOut});
			}
			else
			{
				_sections[i].extPos = _sections[i - 1].extPos + _sections[i].section.accordianButton.height + ITEM_SPACING;

				TweenLite.to(_sections[i].section, EXTEND_SPEED, {y: _sections[i].extPos, ease: Expo.easeOut});
			}
		}
		
		_currentSection = id;
		
		TweenLite.to(_sections[_currentSection].section.subSection.mask, EXTEND_SPEED, {height: _sections[id].maskHeight, ease:Expo.easeOut});
		
		_sections[_currentSection].section.accordianButton.mouseEnabled = false;
		_sections[_currentSection].section.accordianButton.buttonMode = false;
		_sections[_currentSection].section.accordianButton.over();
		
		if(_currentItem) 
		{
			Sprite(_currentItem).mouseEnabled = true;
			Sprite(_currentItem).buttonMode = true;
			_currentItem.out();
		}
		
		_currentItem = _sections[_currentSection].section.accordianButton;
	}

//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	private function accordianClickHandler(evt:Event):void 
	{
		extend(evt.target.id);
	}
	
//-------------------------------------------------------------
// GETTER / SETTERS
//-------------------------------------------------------------	

	public function getSectionHeight(sectionId:uint):Number 
	{
		return _sections[sectionId].origY + _sections[sectionId].sectionHeight;
	}
	
	public function get currentSection():uint
	{
		return _currentSection;
	}

//-------------------------------------------------------------
// PUBLIC METHODS
//-------------------------------------------------------------

	public function addSection(section:AccordianSection):void
	{
		addChild(Sprite(section)).y = (section.accordianButton.height + ITEM_SPACING) * (_sections.length != 0 ? _sections.length : 0) ;	
		Sprite(section).mouseChildren = false;		
		_sections.push({section: section, maskHeight: drawMask(Sprite(section)), sectionHeight: Sprite(section).height + ITEM_SPACING, origY: Sprite(section).y});
	}
	
	public function updateSection(section:AccordianSection):void 
	{
		for (var i:int = 0; i < _sections.length; i++)
		{
			if (_sections[i].section == section)
			{
				_sections[i].maskHeight = drawMask(Sprite(section));
				_sections[i].sectionHeight = Sprite(section).height + ITEM_SPACING;
				trace('')
				break;
			}
		}
	}
	
	public function reset():void 
	{
		extend(0);
		_sections[1].section.mouseChildren = false;
		_sections[2].section.mouseChildren = false;
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

