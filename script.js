const grid = document.getElementById("grid");
const resetBtn = document.getElementById("resetBtn");
const selectedColorText = document.getElementById("selectedColorText");
const colorBoxes = document.querySelectorAll(".color-box");

let activeColor = colorBoxes[0].dataset.color;
let selectedIndex = 0;

const gridWidth = 20;
const gridHeight = 20;

function createGrid() {
  grid.innerHTML = "";

  for (let i = 0; i < gridWidth * gridHeight; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("click", function () {
      cell.style.backgroundColor = activeColor;
    });

    cell.addEventListener("dblclick", function () {
      cell.style.backgroundColor = "white";
    });

    grid.appendChild(cell);
  }
}

function updateSelectedBox() {
  colorBoxes.forEach(function (box) {
    box.classList.remove("selected");
  });

  colorBoxes[selectedIndex].classList.add("selected");
}

function updateSelectedColorText() {
  selectedColorText.textContent = "Aktivní barva: " + activeColor;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    selectedIndex++;

    if (selectedIndex >= colorBoxes.length) {
      selectedIndex = 0;
    }

    updateSelectedBox();
  }

  if (event.key === "ArrowLeft") {
    selectedIndex--;

    if (selectedIndex < 0) {
      selectedIndex = colorBoxes.length - 1;
    }

    updateSelectedBox();
  }

  if (event.key === "Enter") {
    activeColor = colorBoxes[selectedIndex].dataset.color;
    updateSelectedColorText();
  }
});

colorBoxes.forEach(function (box, index) {
  box.addEventListener("click", function () {
    selectedIndex = index;
    updateSelectedBox();
    activeColor = box.dataset.color;
    updateSelectedColorText();
  });
});

resetBtn.addEventListener("click", function () {
  createGrid();
});

createGrid();
updateSelectedColorText();