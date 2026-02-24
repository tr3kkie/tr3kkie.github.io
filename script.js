const canvas = document.getElementById('fluid-canvas');
const myFluid = new Fluid(canvas);

myFluid.mapBehaviors({
    paused: false,
    intensity: 0.8,
    background_color: { r: 244, g: 244, b: 249 }
});

myFluid.activate();

// Your interval goes here at the bottom
setInterval(() => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    // Splash with random Red, Green, and Blue values
    myFluid.addSplash(randomX, randomY, Math.random(), Math.random(), Math.random(), 0.08, 0.04);
}, 500);
