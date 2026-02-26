const canvas = document.querySelector("#glCanvas");
const gl = canvas.getContext("webgl");

// 1. Define the Vertices (x, y coordinates)
const vertices = new Float32Array([
  0.0,  0.5,  // Top
 -0.5, -0.5,  // Bottom Left
  0.5, -0.5   // Bottom Right
]);

// 2. Create a Buffer and upload the vertex data
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// 3. Vertex Shader (Positions the points)
const vsSource = `
  attribute vec2 position;
  void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

// 4. Fragment Shader (Colors the pixels)
const fsSource = `
  void main() { gl_FragColor = vec4(1.0, 0.5, 0.0, 1.0); } // Orange
`;

// Helper to compile shaders
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

// 5. Link Shaders into a Program
const program = gl.createProgram();
gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vsSource));
gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
gl.linkProgram(program);
gl.useProgram(program);

// 6. Connect the Buffer to the Shader Attribute
const posAttrib = gl.getAttribLocation(program, "position");
gl.enableVertexAttribArray(posAttrib);
gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);

// 7. Draw!
gl.clearColor(0, 0, 0, 1); // Black background
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.TRIANGLES, 0, 3);
