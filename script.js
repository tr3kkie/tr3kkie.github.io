const canvas = document.getElementById('fluid-canvas');
const myFluid = new Fluid(canvas);

myFluid.mapBehaviors({
    paused: false,
    intensity: 0.8,
    background_color: { r: 244, g: 244, b: 249 }
});

myFluid.activate();

function triggerRandomSplash() {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    // 1. Randomize Intensity (0.01 to 0.1) and Radius (0.02 to 0.08)
    const randomForce = Math.random() * (0.1 - 0.01) + 0.01;
    const randomSize = Math.random() * (0.08 - 0.02) + 0.02;

    // 2. Apply the splash with random colors and the new random sizes
    // Syntax: addSplash(x, y, r, g, b, force, radius)
    myFluid.addSplash(
        randomX, 
        randomY, 
        Math.random(), Math.random(), Math.random(), 
        randomForce, 
        randomSize
    );

    // 3. Keep the loop going (Random wait between 2-4 seconds)
    const randomDelay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
    setTimeout(triggerRandomSplash, randomDelay);
}

// Kick off the loop
triggerRandomSplash();
