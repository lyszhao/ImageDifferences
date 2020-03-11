// let firstImage = document.getElementById('imageA');
// let secondImage = document.getElementById('imageB');

// const imgLoad = () => {
//   // generate img with differences
//   const differencesInImages = imageDiff.diff(
//     firstImage,
//     secondImage
//   );
//   // generate canvas
//   const canvas = imageDiff.createCanvas(
//     differencesInImages.width,
//     differencesInImages.height
//   );
//   const context = canvas.getContext(
//     '2d'
//   );
//   context.putImageData(
//     differencesInImages,
//     0,
//     0
//   );
//   document
//     .getElementById('results')
//     .appendChild(canvas);

//   alert('done');
// };

// imgLoad();
const ImageA = document.getElementById("imageA");
const ImageB = document.getElementById("imageB");

const differences = imagediff.diff(ImageA, ImageB);
const canvas = imagediff.createCanvas(differences.width, differences.height);

const context = canvas.getContext('2d');

context.putImageData(differences, 0, 0);

document.getElementById("results").appendChild(canvas);
