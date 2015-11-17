window.onfocus = function() {
  console.log("focus");
  focusTitlebars(true);
}

window.onblur = function() {
  console.log("blur");
  focusTitlebars(false);
}

window.onresize = function() {
  updateContentStyle();
}


window.onload = function() {


  var remote = require('remote');
  var BrowserWindow = remote.require('browser-window');
  var win = BrowserWindow.getFocusedWindow();

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

  document.getElementById("min").onclick = function() {
    win.minimize();
  }
  document.getElementById("max").onclick = function() {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  }
  document.getElementById("exit").onclick = function() {
    win.close();
  }
}
