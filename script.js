const canvas = document.getElementById('fluid-canvas');
const myFluid = new Fluid(canvas);

myFluid.activate();

// --- CONTINUOUS EFFECT LOGIC ---
let time = 0;

function autoSimulate() {
    // 1. Calculate a circular path for the "fake" touch
    const x = window.innerWidth / 2 + Math.cos(time) * (window.innerWidth / 3);
    const y = window.innerHeight / 2 + Math.sin(time) * (window.innerHeight / 3);

    // 2. Inject force at these coordinates
    // 'fluid' or 'myFluid' usually has a method to add splashes or velocity
    // If using the standard fluid-canvas library:
    myFluid.addSplash(x, y, 0.1, 0.1); 

    time += 0.02; // Adjust this to change speed of the "stirring"
    requestAnimationFrame(autoSimulate);
}

autoSimulate();
