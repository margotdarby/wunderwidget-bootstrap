package com.etr.utils
{

import flash.external.ExternalInterface;

public class RhapXPlayer  
{
	
//-------------------------------------------------------------
// PRIVATE VARIABLES
//-------------------------------------------------------------

	
	
//-------------------------------------------------------------
// CONSTRUCTOR
//-------------------------------------------------------------	
	
	public function RhapXPlayer(){}

//-------------------------------------------------------------
// PUBLIC STATIC METHODS
//-------------------------------------------------------------

	public static function playTrack(trackId:String):void
	{
		ExternalInterface.call("RhapsodyPlayer.playRcid", 'tra.' + trackId);
	}
	
	public static function playAlbum(albumId:String):void
	{
		ExternalInterface.call("RhapsodyPlayer.playRcid", 'alb.' + albumId);
	}
	
	public static function playPlaylist(playlistId:String):void
	{
		ExternalInterface.call("RhapsodyPlayer.playRcid", 'ply.' + playlistId);
	}
	
	public static function playChannel(playlistId:String):void
	{
		ExternalInterface.call("RhapsodyPlayer.playRcid", 'sta.' + playlistId);
	}

//-------------------------------------------------------------
// END OF CLASS	
//-------------------------------------------------------------
}
}

