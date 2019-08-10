#ifndef HAXERECAST_H
#define HAXERECAST_H

class HaxeRecast {
public:
    HaxeRecast();

    static void OBJDataLoader(const char* data);
    static void settings(const char* s);
    static void set_cellSize(float val);
    static void set_cellHeight(float val);
    static void set_agentHeight(float val);
    static void set_agentRadius(float val);
    static void set_agentMaxClimb(float val);
    static void set_agentMaxSlope(float val);
    static void buildSolo();
    static void findPath(float from_x, float from_y, float from_z, float to_x, float to_y, float to_z, int max);

    static int pathLen;
    static float pathData[300];
};

#endif // HAXERECAST_H
