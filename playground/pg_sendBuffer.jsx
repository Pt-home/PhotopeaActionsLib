function sendBuffer(flag) {
       var dataURL = c.toDataURL(); // По умолчанию форматом будет 'image/png'
       // Преобразование base64-строки в ArrayBuffer
       var base64 = dataURL.split(',')[1]; // Удаление префикса 'data:image/png;base64,'
       var binaryString = window.atob(base64);
       var length = binaryString.length;
       var bytes = new Uint8Array(length);
       for (var i = 0; i < length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
       
       bufferCanvas = bytes.buffer; // Получение ArrayBuffer

       if (flag) {
          wnd.postMessage("app.open('" + c.toDataURL('image/png') + "',null, true);", "*");
       } else {
          wnd.postMessage(bufferCanvas,"*");
       }
}