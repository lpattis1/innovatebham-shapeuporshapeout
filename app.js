// Document Variables:

// Shape Variables
const shapeForm = document.querySelector(".add-shape-form ");
const rectangleHeight = document.querySelector(".rectangle-height");
const rectangleWidth = document.querySelector(".rectangle-width");
const rectangleBtn = document.querySelector(".rectangle-btn");
const squareSideLength = document.querySelector(".square-length");
const squareBtn = document.querySelector(".square-btn");
const circleRadius = document.querySelector(".circle-radius");
const circleBtn = document.querySelector(".circle-btn");
const triangleHeight = document.querySelector(".triangle-height");
const triangleBtn = document.querySelector(".triangle-btn");

// Canvas Variable
const shapeCanvas = document.querySelector(".canvas");

// Canvas Stats Variables
const canvasShape = document.querySelector(".shape-answer");
const canvasHeight = document.querySelector(".height-answer");
const canvasWidth = document.querySelector(".width-answer");
const canvasArea = document.querySelector(".area-answer");
const canvasPerimeter = document.querySelector(".perimeter-answer");
const canvasRadius = document.querySelector(".radius-answer");

// Coordinate Range (minimum and maximum)
const min = 0;
const max = 600;

// Event Handler:
eventHandler();

function eventHandler() {
  shapeForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  rectangleBtn.addEventListener("click", createRectangle);

  squareBtn.addEventListener("click", createSquare);
  circleBtn.addEventListener("click", createCircle);
  triangleBtn.addEventListener("click", createTriangle);
}

// Shape Classes:

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;

    this.shape = document.createElement("div");
    this.shape.className = "new-shape";
    this.shapePlacement();
    shapeCanvas.appendChild(this.shape);

    const shapeDiv = document.querySelectorAll(".new-shape");
    shapeDiv.forEach((div) => {
      div.addEventListener("dblclick", (e) => {
        if (e.target === div) {
          e.target.remove();
          clearStats();
        }
      });
    });
  }

  shapeStats(type) {
    canvasShape.textContent = type;
    canvasHeight.textContent = `${this.height} px`;
    canvasWidth.textContent = `${this.width} px`;
  }

  shapePlacement() {
    let xCord = randomVal(min, max);
    let yCord = randomVal(min, max);
    this.shape.style.left = `${xCord}px`;
    this.shape.style.top = `${yCord}px`;
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);

    this.shape.classList.add("rectangle");
    this.shape.style.height = `${height}px`;
    this.shape.style.width = `${width}px`;
    this.shapeStats();

    // Show stats when clicked
    this.shape.addEventListener("click", () => {
      clearStats();
      this.shapeStats();
    });
  }

  shapeStats() {
    canvasShape.textContent = "Rectangle";
    canvasHeight.textContent = `${this.height} px`;
    canvasWidth.textContent = `${this.width} px`;
    canvasPerimeter.textContent = this.rectanglePerimeter(
      this.height,
      this.width
    );
    canvasArea.textContent = this.rectangleArea(this.height, this.width);

    canvasShape.style.color = "green";
    canvasHeight.style.color = "green";
    canvasWidth.style.color = "green";
    canvasPerimeter.style.color = "green";
    canvasArea.style.color = "green";
  }

  rectanglePerimeter(length, width) {
    let perimeter = Number(length * 2 + width * 2);
    return perimeter;
  }

  rectangleArea(length, width) {
    let area = length * width;
    return area;
  }
}

class Square extends Shape {
  constructor(height) {
    super(height);
    this.shape.classList.add("square");
    this.shape.style.height = `${height}px`;
    this.shape.style.width = `${height}px`;
    this.shapeStats();

    // Show stats when clicked
    this.shape.addEventListener("click", () => {
      clearStats();
      this.shapeStats();
    });
  }

  shapeStats() {
    canvasShape.textContent = "Square";
    canvasHeight.textContent = `${this.height} px`;
    canvasWidth.textContent = `${this.height} px`;
    canvasPerimeter.textContent = this.squarePerimeter(this.height);
    canvasArea.textContent = this.squareArea(this.height);

    canvasShape.style.color = "red";
    canvasHeight.style.color = "red";
    canvasWidth.style.color = "red";
    canvasPerimeter.style.color = "red";
    canvasArea.style.color = "red";
  }

  squarePerimeter(side) {
    let perimeter = 4 * side;
    return perimeter;
  }

  squareArea(side) {
    let area = side * side;
    return area;
  }
}

class Circle extends Shape {
  constructor(height) {
    super(height);
    this.shape.classList.add("circle");
    this.shape.style.height = `${height}px`;
    this.shape.style.width = `${height}px`;
    this.shapeStats();

    // Show stats when clicked
    this.shape.addEventListener("click", () => {
      clearStats();
      this.shapeStats();
    });
  }

  shapeStats() {
    canvasShape.textContent = "Circle";
    canvasHeight.textContent = `${this.height} px`;
    canvasWidth.textContent = `${this.height} px`;
    canvasPerimeter.textContent = this.circlePerimeter(this.height);
    canvasArea.textContent = this.circleArea(this.height);
    canvasRadius.textContent = this.height;

    canvasShape.style.color = "purple";
    canvasHeight.style.color = "purple";
    canvasWidth.style.color = "purple";
    canvasPerimeter.style.color = "purple";
    canvasArea.style.color = "purple";
    canvasRadius.style.color = "purple";
  }

  circlePerimeter(radius) {
    let perimeter = (2 * Math.PI * radius).toFixed(0);
    return perimeter;
  }

  circleArea(radius) {
    let area = (Math.PI * radius * radius).toFixed(0);
    return area;
  }
}

class Triangle extends Shape {
  constructor(height) {
    super(height);

    this.shape.classList.add("triangle");
    this.shape.style.height = `${height}px`;
    this.shape.style.width = `${height}px`;
    this.shape.style.borderBottom = `${height}px solid orange`;
    this.shape.style.borderRight = `${height / 2}px solid transparent`;
    this.shape.style.borderLeft = `${height / 2}px solid transparent`;
    this.shapeStats();

    // Show stats when clicked
    this.shape.addEventListener("click", () => {
      clearStats();
      this.shapeStats();
    });
  }

  shapeStats() {
    canvasShape.textContent = "Triangle";
    canvasHeight.textContent = `${this.height} px`;
    canvasWidth.textContent = `${this.height} px`;
    canvasPerimeter.textContent = this.trianglePerimeter(Number(this.height));
    canvasArea.textContent = this.triangleArea(this.height, this.height);

    canvasShape.style.color = "orange";
    canvasHeight.style.color = "orange";
    canvasWidth.style.color = "orange";
    canvasPerimeter.style.color = "orange";
    canvasArea.style.color = "orange";
  }

  trianglePerimeter(side) {
    let perimeter = side + side + side;
    return perimeter;
  }

  triangleArea(height, base) {
    let area = 0.5 * (height * base);

    return area;
  }
}

// Create rectangle
function createRectangle(e) {
  clearStats();
  let recHeight = rectangleHeight.value;
  let recWidth = rectangleWidth.value;

  if (recHeight > 600) {
    alert("Height exceeds canvas limit");
  } else if (recWidth > 600) {
    alert("Width exceeds canvas limit");
  } else if (recWidth > 600 && recHeight > 600) {
    alert("Height and width exceed canvas limits");
  } else if (recHeight === "") {
    alert("Please input a height");
  } else if (recWidth === "") {
    alert("Please input a width");
  } else if (recHeight === "" && recWidth === "") {
    alert("Please input a height and width");
  } else {
    const newRectangle = new Rectangle(recHeight, recWidth);
    rectangleHeight.value = "";
    rectangleWidth.value = "";
  }
}

// Create square

function createSquare(e) {
  clearStats();
  let squareCalc = squareSideLength.value;

  if (squareCalc > 600) {
    alert("Length exceeds canvas limit");
  } else if (squareCalc === "") {
    alert("Please input a length");
  } else {
    const newSquare = new Square(squareCalc, squareCalc);
    squareSideLength.value = "";
  }
}

// Create circle

function createCircle(e) {
  clearStats();
  let circleCalc = circleRadius.value;

  if (circleCalc > 600) {
    alert("Radius exceeds canvas limit");
  } else if (circleCalc === "") {
    alert("Please input a radius");
  } else {
    const newCircle = new Circle(circleCalc);
    circleRadius.value = "";
  }
}

// Create Triangle

function createTriangle(e) {
  clearStats();
  let triangleCalc = triangleHeight.value;

  if (triangleCalc > 600) {
    alert("Height exceeds canvas limit");
  } else if (triangleCalc === "") {
    alert("Please input a height");
  } else {
    const newTriangle = new Triangle(triangleCalc);
    triangleHeight.value = "";
  }
}

// Random shape placement
function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Clear previous stats

function clearStats() {
  canvasShape.textContent = ``;
  canvasHeight.textContent = ``;
  canvasWidth.textContent = ``;
  canvasPerimeter.textContent = ``;
  canvasArea.textContent = ``;
  canvasRadius.textContent = ``;
}
