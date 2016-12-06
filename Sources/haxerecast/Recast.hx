// Recast Navigation for Haxe
// https://github.com/recastnavigation/recastnavigation
// https://github.com/vincent/recast.js

package haxerecast;

#if js
@:native('recast')
extern class Recast {
	// untyped recast.cb()
	public function OBJDataLoader(data:String, done:Void->Void):Void;
	public function buildSolo():Void;
	public function buildTiled():Void;
	public function getRandomPoint(callback:Dynamic):Void;
	// callback:Float->Float->Float
	public function findPath(from_x:Float, from_y:Float, from_z:Float, to_x:Float, to_y:Float, to_z:Float, max:Int, callback:Dynamic):Void;
	// callback:Array<{x, y, z}>
	public function addAgent(options:Dynamic):Void;
}
#end

typedef RecastWaypoint = {
	public var x:Float;
	public var y:Float;
	public var z:Float;
}
