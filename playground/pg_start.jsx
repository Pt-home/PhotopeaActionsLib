var n = 0, wnd, bufferCanvas, libPP;

function iframeLoaded(pp) {
   wnd = pp.contentWindow;
   window.addEventListener("message", ppReady);
}

function ppReady(e) {        
  if (e.data == "done") {          
      n++;
      if(n==1) {
        var request = new XMLHttpRequest();
        request.open("GET", "img/pug.png", true);
        request.responseType = "arraybuffer";
        request.onload = loaded;
        request.send();
      }
      //if(n==2) wnd.postMessage("activeDocument.saveToOE(\"jpg\")","*");
   }
 
  if (e.data instanceof ArrayBuffer) {
      bufferCanvas = e.data;
      var ctx = c.getContext("2d");
      var blob = new Blob([bufferCanvas], { type: 'image/png' });
      
      var url = URL.createObjectURL(blob);
      var image = new Image();
      image.src = url;
            
      image.onload = function() {
      c.width = image.width;
      c.height = image.height;
      ctx.drawImage(image, 0, 0);
      // You can now use the canvas with the PNG image
      };  
  }
}

function loaded(e) {
     var ab = e.target.response;  // ArrayBuffer
     wnd.postMessage(ab, "*");
     bufferCanvas = ab;
  }

function runScript() {
  var script = document.getElementById("script").value;
	wnd.postMessage(libPP+script, "*");
}