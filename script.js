// 1. Find the canvas element from your HTML
const canvas = document.getElementById('fluid-canvas');

// 2. Initialize the fluid simulation
// Note: If using the 'fluid-canvas' library, it uses the 'Fluid' constructor
const myFluid = new Fluid(canvas);

// 3. (Optional) Customize the look
myFluid.mapBehaviors({
    sim_resolution: 128,
    dye_resolution: 512,
    paused: false,
    intensity: 0.8,
    force: 0.2,
    background_color: { r: 244, g: 244, b: 249 } // Matches your CSS body background
});

// 4. Start the simulation
myFluid.activate();
