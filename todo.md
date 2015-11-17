

# Planned / Unsolved (Yet)

<br/>- I need only the "tag_name" from the JSON array... and find a way to parse JSON in JS
<br/>- I'm thinking of using electron itself, for deploying the app on the 3 supported platforms... 
<br/>- the tags Electron supports, in package.json...
<br/>- The interface is pretty easy, since there are tutorials... 

# Solved
___
###### get the list of versions be up to date, no matter when a new version pops up....
```javascript
var filename = 'electron-v' + version + '-' + platform + '-' + arch + (symbols ? '-symbols' : '') + '.zip';
var url = process.env.ELECTRON_MIRROR || opts.mirror || 'https://github.com/atom/electron/releases/download/v';
url += version + '/electron-v' + version + '-' + platform + '-' + arch + (symbols ? '-symbols' : '') + '.zip';
```
https://api.github.com/repos/atom/electron/releases <br/>
https://api.github.com/repos/mafintosh/electron-prebuilt/releases <br/>
___
###### find how to get the user navigate to and choose a folder (to be packed)
https://github.com/atom/electron/blob/master/docs/api/dialog.md <br/>
http://www.mylifeforthecode.com/getting-started-with-standard-dialogs-in-electron/ <br/>
___
###### make a tar archive with node/js
https://github.com/mafintosh/tar-fs <br/>
```javascript
var tar = require('lib/tar-fs')
var fs = require('fs')

// packing a directory
tar.pack('./my-directory').pipe(fs.createWriteStream('my-tarball.tar'))

// extracting a directory
fs.createReadStream('my-other-tarball.tar').pipe(tar.extract('./my-other-directory'))

//Copying a directory with permissions and mtime intact is as simple as
tar.pack('source-directory').pipe(tar.extract('dest-directory'))
```
```javascript
var archive = require("../lib/archive-zip"); <br/>
console.log(appPath + ".zip"); <br/>
return archive(appPath, appPath + ".zip"); <br/>
```

___
###### Key(s) pressed

Include `keymaster.js` in your web app*, by loading it as usual:

```html
<script src="keymaster.js"></script>
```

[<b>Usage</b>](lib/keymaster.markdown)

___
###### <s>key(s) pressed</s>

1.  Include mousetrap on your page before the closing ``</body>`` tag

    ```html
    <script src="/path/to/mousetrap.min.js"></script>
    ```

2.  Add some keyboard events to listen for

    ```html
    <script>
        // single keys
        Mousetrap.bind('4', function() { console.log('4'); });
        Mousetrap.bind("?", function() { console.log('show shortcuts!'); });
        Mousetrap.bind('esc', function() { console.log('escape'); }, 'keyup');

        // combinations
        Mousetrap.bind('command+shift+k', function() { console.log('command shift k'); });

        // map multiple combinations to the same callback
        Mousetrap.bind(['command+k', 'ctrl+k'], function() {
            console.log('command k or control k');

            // return false to prevent default browser behavior
            // and stop event from bubbling
            return false;
        });

        // gmail style sequences
        Mousetrap.bind('g i', function() { console.log('go to inbox'); });
        Mousetrap.bind('* a', function() { console.log('select all'); });

        // konami code!
        Mousetrap.bind('up up down down left right left right b a enter', function() {
            console.log('konami code');
        });
    </script>
    ```
