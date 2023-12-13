function getBuffer() {
       bufferCanvas = 0;       
       wnd.postMessage("activeDocument.saveToOE(\"png\");","*");
}