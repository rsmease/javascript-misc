function boxBlur(image) {
    
    var blurredImage = [];
    
    for (var i = 1; i < image.length - 1; i++) {
        var newRow = [];
        for (var j = 1; j < image[0].length - 1; j++) {

            var totalPixels = (image[i-1][j-1]+image[i-1][j]+image[i-1][j+1]+image[i][j-1]+image[i][j]+image[i][j+1]+image[i+1][j-1]+image[i+1][j]+image[i+1][j+1]);

            console.log(totalPixels);

            var newPixel = Math.floor(totalPixels / 9);

            newRow.push(newPixel);

        }
        blurredImage.push(newRow);
    }
    
    return blurredImage;

}

var test = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]];

console.log(boxBlur(test));