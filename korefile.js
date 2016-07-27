var project = new Project('haxerecast');

project.addFile('cpp/Recast/**');
project.addIncludeDir('cpp/Recast');

project.addFile('cpp/Detour/**');
project.addIncludeDir('cpp/Detour');

project.addFile('cpp/DetourCrowd/**');
project.addIncludeDir('cpp/DetourCrowd');

project.addFile('cpp/DetourTileCache/**');
project.addIncludeDir('cpp/DetourTileCache');

return project;
