package app.views.ui
{

import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.system.System;
import app.config.Config;

import gs.TweenLite;
import gs.easing.*;

public class EmbedCodeWindow extends Sprite 
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------


	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function EmbedCodeWindow()
	{
		embedText.text = Config.EMBED_CODE;
		embedText.wordWrap = true;

		closeButton.addEventListener(MouseEvent.CLICK, closeClickHandler);
		closeButton.buttonMode = true;
				
		copyButton.addEventListener(MouseEvent.CLICK, copyClickHandler);
		copyButton.buttonMode = true;
		
		confirmTip.visible = false;
		confirmTip.alpha = 0;
	}

//-------------------------------------------------------------
// PRIVATE METHODS	
//-------------------------------------------------------------



//-------------------------------------------------------------
// EVENT HANDLERS
//-------------------------------------------------------------

	private function closeClickHandler(evt:MouseEvent):void 
	{
		TweenLite.to(this, .5, {autoAlpha: 0, ease: Expo.easeOut});
	}
	
	private function copyClickHandler(evt:MouseEvent):void 
	{
		System.setClipboard(Config.EMBED_CODE);
		
		TweenLite.to(confirmTip, .4, {autoAlpha: 1});
		TweenLite.to(confirmTip, .4, {autoAlpha: 0, delay: 2.5, overwrite: 0});
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

