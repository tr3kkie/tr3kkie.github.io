// STEP 1: Setup & Identification
const canvas = document.getElementById('fluid-canvas');
const myFluid = new Fluid(canvas);

// STEP 2: Settings
myFluid.mapBehaviors({
    paused: false,
    intensity: 0.8,
    background_color: { r: 244, g: 244, b: 249 }
});

// STEP 3: Activation
myFluid.activate();

// STEP 4: The Loop Function (The "Driver")
function triggerRandomSplash() {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    const randomForce = Math.random() * (0.1 - 0.01) + 0.01;
    const randomSize = Math.random() * (0.08 - 0.02) + 0.02;

    // Use the activated myFluid here

    const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 300;
    setTimeout(triggerRandomSplash, randomDelay);
}

// STEP 5: Start the Loop
triggerRandomSplash();
