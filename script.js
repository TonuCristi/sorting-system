const input = document.querySelector(".list__item-input");
const gnrBtn = document.querySelector(".list__item-gnr-btn");
const resetBtn = document.querySelector(".list__item-rst-btn");
const bar = document.getElementsByClassName("bar");
const barsBox = document.querySelector(".container__display-sort-box");
const state = document.querySelector(".state");
const bubbleSort = document.querySelector(".bubble--sort");
const insertionSort = document.querySelector(".insertion--sort");
const selectionSort = document.querySelector(".selection--sort");
const mergeSort = document.querySelector(".merge--sort");
const quickSort = document.querySelector(".quick--sort");

let inputValue = 0;

let counter = 0;

let barEl;

barsBox.innerHTML = "";

// ----------------Generate section----------------

gnrBtn.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * 99) + 1;
  let isGnr = true;
  inputValue = input.value - 1;

  if (isGnr === true) {
    barsBox.innerHTML = "";
    isGnr = false;
  }
  for (let i = 0; i <= inputValue; i++) {
    rand = Math.floor(Math.random() * 99) + 1;
    barEl = document.createElement("div");
    barEl.classList.add("bar");
    barsBox.appendChild(barEl);
    barEl.setAttribute("style", `height: ${rand}%`);
  }
  isGnr = true;
  state.style.color = "#047857";
  if (barsBox.innerHTML === "") {
    state.innerHTML = "Waiting to generate...";
  } else {
    state.innerHTML = "Generation completed, ready to sort!";
  }
});

// ----------------Reset section----------------

resetBtn.addEventListener("click", () => {
  counter = 0;
  barsBox.innerHTML = "";
  input.value = 1;
  state.style.color = "#dc2626";
  state.innerHTML = "Waiting to generate...";
});

// ----------------Sort section----------------

// *****Bubble Sort*****

bubbleSort.addEventListener("click", bubbleSorter);

let getHeight = function (bar) {
  return Number(bar.getAttribute("style").split("").slice(-3, -1).join(""));
};

function bubbleSorter() {
  const arr = [];
  for (let i = 0; i <= inputValue; i++) {
    bigBar = getHeight(bar[i]);
    arr.push(bigBar);
  }

  let now = arr[0];
  for (let i = 0; i <= inputValue; i++) {
    for (let j = i + 1; j <= inputValue; j++) {
      if (arr[i] > arr[j]) {
        now = arr[i];
        arr[i] = arr[j];
        arr[j] = now;
      }
    }
  }

  for (let i = 0; i <= inputValue; i++) {
    bar[i].setAttribute("style", `height: ${arr[i]}%`);
  }
  state.style.color = "#581c87";
  state.innerHTML = "Sorting completed!";
}

// *****Insertion Sort*****

insertionSort.addEventListener("click", insertionSorter);

function insertionSorter() {
  const arr = [];
  for (let i = 0; i <= inputValue; i++) {
    bigBar = getHeight(bar[i]);
    arr.push(bigBar);
  }

  let now = arr[0];
  for (let i = 0; i <= inputValue; i++) {
    for (let j = i; j <= inputValue; j++) {
      if (arr[i + 1] > arr[j]) {
        now = arr[i + 1];
        arr[i + 1] = arr[j];
        arr[j] = now;
      }
      console.log(`j=${j}`);
    }
  }

  // for (let i = 1; i < arr.length; i++) {
  //   //Go through the elements behind it.
  //   for (let j = i - 1; j > -1; j--) {
  //     //value comparison using ascending order.
  //     if (arr[j + 1] < arr[j]) {
  //       //swap
  //       [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
  //     }
  //     console.log(`j=${j}`);
  //   }
  // }

  console.log(arr);
}

// *****Selection Sort*****

selectionSort.addEventListener("click", selectionSorter);

function selectionSorter() {
  const arr = [];
  for (let i = 0; i <= inputValue; i++) {
    bigBar = getHeight(bar[i]);
    arr.push(bigBar);
  }

  for (let i = 0; i <= inputValue; i++) {
    for (let j = i; j <= inputValue; j++) {
      if (arr[i] > arr[j]) {
        now = arr[i];
        arr[i] = arr[j];
        arr[j] = now;
      }
    }
  }

  for (let i = 0; i <= inputValue; i++) {
    bar[i].setAttribute("style", `height: ${arr[i]}%`);
  }
  state.style.color = "#581c87";
  state.innerHTML = "Sorting completed!";
}
