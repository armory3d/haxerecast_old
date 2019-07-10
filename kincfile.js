let project = new Project('haxerecast', __dirname);

project.addFile('cpp/Recast/**');
project.addIncludeDir('cpp/Recast/Include');

project.addFile('cpp/Detour/**');
project.addIncludeDir('cpp/Detour/Include');

project.addFile('cpp/DetourCrowd/**');
project.addIncludeDir('cpp/DetourCrowd/Include');

project.addFile('cpp/DetourTileCache/**');
project.addIncludeDir('cpp/DetourTileCache/Include');

project.addFile('cpp/HaxeRecast/**');
project.addIncludeDir('cpp/HaxeRecast');

resolve(project);
