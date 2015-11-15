

# Planned / Unsolved (Yet)

<br/>- I need only the "tag_name" from the JSON array... and find a way to parse JSON in JS
<br/>- I'm thinking of using electron itself, for deploying the app on the 3 supported platforms... 
<br/>- the tags Electron supports, in package.json...
<br/>- The interface is pretty easy, since there are tutorials... 

# Solved
___
###### get the list of versions be up to date, no matter when a new version pops up....
<code>
     var filename = 'electron-v' + version + '-' + platform + '-' + arch + (symbols ? '-symbols' : '') + '.zip'
       var url = process.env.ELECTRON_MIRROR || opts.mirror || 'https://github.com/atom/electron/releases/download/v'
       url += version + '/electron-v' + version + '-' + platform + '-' + arch + (symbols ? '-symbols' : '') + '.zip'
</code> <br/>
https://api.github.com/repos/atom/electron/releases <br/>
https://api.github.com/repos/mafintosh/electron-prebuilt/releases <br/>
___
###### find how to get the user navigate to and choose a folder (to be packed)
https://github.com/atom/electron/blob/master/docs/api/dialog.md <br/>
http://www.mylifeforthecode.com/getting-started-with-standard-dialogs-in-electron/ <br/>
___
###### make a tar archive with node/js
<code>
var archive = require("../lib/archive-zip");<br/>
console.log(appPath + ".zip");<br/>
return archive(appPath, appPath + ".zip");
</code>
