const items = document.querySelectorAll(".feature-item");
const mainImg = document.getElementById("main-feature-img");
let currentIndex = 0;
let progress = 0;
let interval;

// Add the progress bar div to each item via JS
items.forEach(item => {
  const bar = document.createElement('div');
  bar.classList.add('progress-bar');
  item.appendChild(bar);
});

function updateDisplay(index) {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
    item.querySelector('.progress-bar').style.height = "0%";
  });
  
  mainImg.style.opacity = 0.5;
  setTimeout(() => {
    mainImg.src = items[index].getAttribute("data-img");
    mainImg.style.opacity = 1;
  }, 200);
  
  progress = 0;
  currentIndex = index;
}

function runTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    progress += 1;
    const activeBar = items[currentIndex].querySelector('.progress-bar');
    if (activeBar) activeBar.style.height = progress + "%";

    if (progress >= 100) {
      let nextIndex = (currentIndex + 1) % items.length;
      updateDisplay(nextIndex);
    }
  }, 50); // Adjust this speed (50ms * 100 = 5 seconds)
}

// Click to Jump
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateDisplay(index);
    runTimer(); // Restarts the timer from 0 for the clicked item
  });
});

// Start
updateDisplay(0);
runTimer();