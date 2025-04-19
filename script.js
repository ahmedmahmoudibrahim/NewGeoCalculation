
function calculateSquare() {
  const side = parseFloat(document.getElementById("square-side").value);
  if (isNaN(side)) return alert("Please enter a valid number");
  const area = side * side;
  const perimeter = 4 * side;
  const resultBox = document.getElementById("square-result");
  resultBox.innerHTML = `Area: ${area} cm²<br>Perimeter: ${perimeter} cm`;
  resultBox.style.display = "block";
}

function calculateRectangle() {
  const length = parseFloat(document.getElementById("rect-length").value);
  const width = parseFloat(document.getElementById("rect-width").value);
  if (isNaN(length) || isNaN(width)) return alert("Please enter valid numbers");
  const area = length * width;
  const perimeter = 2 * (length + width);
  const resultBox = document.getElementById("rectangle-result");
  resultBox.innerHTML = `Area: ${area} cm²<br>Perimeter: ${perimeter} cm`;
  resultBox.style.display = "block";
}

function toggleTriangleInputs(method) {
  document.getElementById("triangle-base-height").style.display = method === 'base-height' ? 'block' : 'none';
  document.getElementById("triangle-heron").style.display = method === 'heron' ? 'block' : 'none';
  const resultBox = document.getElementById("triangle-result");
  resultBox.innerHTML = '';
  resultBox.style.display = "none";
}

function calculateTriangleBaseHeight() {
  const base = parseFloat(document.getElementById("tri-base").value);
  const height = parseFloat(document.getElementById("tri-height").value);
  if (isNaN(base) || isNaN(height)) return alert("Please enter valid numbers");
  const area = 0.5 * base * height;
  const resultBox = document.getElementById("triangle-result");
  resultBox.innerHTML = `Area: ${area} cm²`;
  resultBox.style.display = "block";
}

function calculateTriangleHeron() {
  const a = parseFloat(document.getElementById("tri-a").value);
  const b = parseFloat(document.getElementById("tri-b").value);
  const c = parseFloat(document.getElementById("tri-c").value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) return alert("Please enter valid numbers");
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const perimeter = a + b + c;
  const resultBox = document.getElementById("triangle-result");
  resultBox.innerHTML = `Area: ${area.toFixed(2)} cm²<br>Perimeter: ${perimeter} cm`;
  resultBox.style.display = "block";
}

function calculateCircle() {
  const radius = parseFloat(document.getElementById("circle-radius").value);
  if (isNaN(radius)) return alert("Please enter a valid number");
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  const resultBox = document.getElementById("circle-result");
  resultBox.innerHTML = `Area: ${area.toFixed(2)} cm²<br>Circumference: ${circumference.toFixed(2)} cm`;
  resultBox.style.display = "block";
}

function calculateCube() {
  const side = parseFloat(document.getElementById("cube-side").value);
  if (isNaN(side)) return alert("Please enter a valid number");

  const surfaceArea = 6 * side * side;
  const perimeter = 12 * side;
  const volume = side * side * side;

  const resultBox = document.getElementById("cube-result"); // ✅ تعريف العنصر
  resultBox.innerHTML = `
    Surface Area: ${surfaceArea} cm²<br>
    Perimeter: ${perimeter} cm<br>
    Volume: ${volume} cm³
  `;
  resultBox.style.display = "block"; // 
}


