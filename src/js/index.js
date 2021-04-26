
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
    image1: `../assets/img/image.jpg`, 
    image2: '../assets/img/louis-hansel-shotsoflouis-e96ST3p7tn4-unsplash.jpg', 
    imagesRatio: 512 / 512, 
    displacementImage: '../assets/img/fluid.jpg',
}); 

new hoverEffect({
    parent: document.querySelector(`.div2`),
    intensity1: 0.25, 
    intensity2: 0.25, 
    angle1: Math.PI / 2,
    angle2: -Math.PI / 2, 
    image1: `../assets/img/image.jpg`, 
    image2: '../assets/img/jorge-dominguez-dAaeth0Je-k-unsplash.jpg',
    imagesRatio: 512 / 512, 
    displacementImage:'../assets/img/fluid.jpg',
}); 

new hoverEffect({
    parent: document.querySelector(`.div3`),
    intensity1: 0.25, 
    intensity2: 0.25, 
    angle1: Math.PI / 2,
    angle2: -Math.PI / 2, 
    image1: `../assets/img/louis-hansel-shotsoflouis-e96ST3p7tn4-unsplash.jpg`, 
    image2: `../assets/img/jorge-dominguez-dAaeth0Je-k-unsplash.jpg`,
    imagesRatio: 512 / 512, 
    displacementImage:'../assets/img/fluid.jpg',
}); 

new hoverEffect({
    parent: document.querySelector(`.div4`),
    intensity1: 0.1, 
    image1: `../assets/img/louis-hansel-shotsoflouis-e96ST3p7tn4-unsplash.jpg`, 
    image2: `../assets/img/jorge-dominguez-dAaeth0Je-k-unsplash.jpg`,
    displacementImage:'../assets/img/strip.png',
 });

 let button5 = new hoverEffect({
    parent: document.querySelector(`.div5`),
    intensity:0.2,  
    image1: `../assets/img/louis-hansel-shotsoflouis-e96ST3p7tn4-unsplash.jpg`, 
    image2: `../assets/img/jorge-dominguez-dAaeth0Je-k-unsplash.jpg`,
    imagesRatio: 512 / 768, 
    displacementImage:'../assets/img/fluid.jpg',
    hover: false
}); 

document.querySelector('.next').addEventListener('click', button5.next);
document.querySelector('.previous').addEventListener('click', button5.previous);

new hoverEffect({
    parent: document.querySelector(`.div6`), 
    intensity: 0.2, 
    image1: '../assets/img/jorge-dominguez-dAaeth0Je-k-unsplash.jpg',
    image2: '../assets/img/jakob-owens-0Xl9HAf0RyE-unsplash.jpg',
    displacementImage: `../assets/img/fluid.jpg`,
})