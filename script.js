const canvas = document.getElementById('fluid-canvas');
const myFluid = new Fluid(canvas);

myFluid.mapBehaviors({
    paused: false,
    intensity: 0.8,
    background_color: { r: 244, g: 244, b: 249 }
});

myFluid.activate();

function triggerRandomSplash() {
    // 1. Generate random coordinates
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    // 2. Add the splash (Random RGB colors)
    myFluid.addSplash(randomX, randomY, Math.random(), Math.random(), Math.random(), 0.08, 0.04);

    // 3. Calculate a random delay between 2000ms (2s) and 4000ms (4s)
    const randomDelay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;

    // 4. Schedule the NEXT splash using the new random delay
    setTimeout(triggerRandomSplash, randomDelay);
}

// Start the first loop
triggerRandomSplash();

