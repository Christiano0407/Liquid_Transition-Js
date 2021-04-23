new hoverEffect({
   parent: document.querySelector(`.div-video`),
   image1: `../assets/img/video.mp4`, 
   image2: `../assets/img/video2.mp4`, 
   displacementImage: `../assets/img/strip.png`,
   video: true
}); 

new hoverEffect({
    parent: document.querySelector(`.div`),
    intensity1: 0.1, 
    intensity2: 0.1, 
    angle2: Math.PI / 2, 
    image1: `../assets/img/one.jpg`, 
    image2: '../assets/img/two.jpg', 
    imagesRatio: 512 / 512, 
    displacementImage: '../assets/img/fluid.jpg',
}); 