var remote = require('remote');
var BrowserWindow = remote.require('browser-window');
var win = BrowserWindow.getFocusedWindow();



<<<<<<< HEAD

=======
>>>>>>> 9c1318a2cebde55b68c8b869a09ba93906551fbf
window.onload = function() {

  document.getElementById("close-window-button").onclick = function() {
    win.close();
  }
  document.getElementById("minimize-window-button").onclick = function() {
    win.minimize();
  }
  document.getElementById("maximize-window-button").onclick = function() {
    win.maximize();
  }
  document.getElementById("unmaximize-window-button").onclick = function() {
    win.unmaximize();
  }
  document.getElementById("toggle-window-button").onclick = function() {
    win.setFullScreen(!(win.isFullScreen()));
  }
  document.getElementById("maxmin-window-button").onclick = function() {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  }

  document.getElementById("dev").onclick = function() {
    win.toggleDevTools();
  }
  document.getElementById("min").onclick = function() {
    win.minimize();
  }
  document.getElementById("max").onclick = function() {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  }
  document.getElementById("exit").onclick = function() {
    win.close();
  }
<<<<<<< HEAD

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init();
    }
  };
}


/*
var archive = require('./lib/archive-zip');
var tar = require('./lib/tar-fs');
var fs = require('fs');
*/


var key = require('./lib/keymaster');
key("a+s", function(){
        win.toggleDevTools();
});
=======
}
>>>>>>> 9c1318a2cebde55b68c8b869a09ba93906551fbf
