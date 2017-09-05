#ifndef HAXERECAST_H
#define HAXERECAST_H

class HaxeRecast {
public:
    HaxeRecast();

    static void OBJDataLoader(const char* data);
    static void buildSolo();
    static void findPath(float from_x, float from_y, float from_z, float to_x, float to_y, float to_z, int max);

    static int pathLen;
    static float pathData[300];
};

#endif // HAXERECAST_H
