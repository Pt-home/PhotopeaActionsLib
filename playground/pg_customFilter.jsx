
function applyCustomFilter() {
  
    form = document.getElementById("customFilter");
    
   //Scale and offset 
    var scale = Number(form.elements.scaleValue.value) * 1.0;
    var offset = Number(form.elements.offsetValue.value);
    
   // Convolution Matrix   (kernel)
    var m = form.elements.matrixValues;
    var kernel = [  
      [m[0].value,  m[1].value,  m[2].value,  m[3].value,  m[4].value],
      [m[5].value,  m[6].value,  m[7].value,  m[8].value,  m[9].value],
      [m[10].value, m[11].value, m[12].value, m[13].value, m[14].value],
      [m[15].value, m[16].value, m[17].value, m[18].value, m[19].value],
      [m[20].value, m[21].value, m[22].value, m[23].value, m[24].value]
    ];

  
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    
    // Image from canvas
    var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var imageData = image.data;
    // Convolution
    var width = canvas.width;
    var height = canvas.height;
    
    var outputData = new Uint8ClampedArray(imageData.length);
    
          for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var outputIndex = (y * width + x) * 4;
    
        var r = 0, g = 0, b = 0;
    
        for (var ky = 0; ky < kernel.length; ky++) {
          for (var kx = 0; kx < kernel[ky].length; kx++) {
            var pixelY = y + ky - Math.floor(kernel.length / 2);
            var pixelX = x + kx - Math.floor(kernel[ky].length / 2);
    
            if (pixelY >= 0 && pixelY < height && pixelX >= 0 && pixelX < width) {
              var inputIndex = (pixelY * width + pixelX) * 4;
    
              var kernelValue = kernel[ky][kx];
    
              r += imageData[inputIndex] * kernelValue;
              g += imageData[inputIndex + 1] * kernelValue;
              b += imageData[inputIndex + 2] * kernelValue;
              
            }
          }
        }
    
        outputData[outputIndex] = r / scale + offset;
        outputData[outputIndex + 1] = g / scale + offset;
        outputData[outputIndex + 2] = b / scale + offset;
        outputData[outputIndex + 3] = imageData[inputIndex + 3];
      }
    }
    
    // Refresh image in canvas
    var outputImage = new ImageData(outputData, width, height);
    ctx.putImageData(outputImage, 0, 0);
}





