let project = new Project('haxerecast', __dirname);

project.addFile('cpp/Recast/**');
project.addIncludeDir('cpp/Recast/include');

project.addFile('cpp/Detour/**');
project.addIncludeDir('cpp/Detour/include');

project.addFile('cpp/DetourCrowd/**');
project.addIncludeDir('cpp/DetourCrowd/include');

project.addFile('cpp/DetourTileCache/**');
project.addIncludeDir('cpp/DetourTileCache/include');

project.addFile('cpp/HaxeRecast/**');
project.addIncludeDir('cpp/HaxeRecast');

resolve(project);
