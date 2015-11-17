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


function toggleFullScreen(){
  win.setFullScreen(!(win.isFullScreen()));
}
function toggleMaximized(){
  win.isMaximized() ? win.unmaximize() : win.maximize();
}
function closeWindow() {
  win.close();
}
function minimize(){
  win.minimize();
}

window.onload = function() {


  var remote = require('remote');
  var BrowserWindow = remote.require('browser-window');
  var win = BrowserWindow.getFocusedWindow();

  document.getElementById("close-window-button").onclick = function() {
    closeWindow();
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
    toggleFullScreen();
  }
  document.getElementById("maxmin-window-button").onclick = function() {
    toggleMaximized();
  }

  document.getElementById("min").onclick = function() {
    minimize();
  }
  document.getElementById("max").onclick = function() {
    toggleMaximized();
  }
  document.getElementById("exit").onclick = function() {
    closeWindow();
  }

  updateContentStyle();
}



var keyPressed = {};

document.addEventListener('keydown', function(e) {
  keyPressed[e.keyCode] = true;
}, false);
document.addEventListener('keyup', function(e) {
  keyPressed[e.keyCode] = false;
}, false);

function gameLoop() {
  if (keyPressed["a"]) {
    toggleMaximized();
  }
  // etc
  // update display here
  setTimeout(gameLoop, 10);
}

gameLoop();
