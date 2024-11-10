// Track Page - Adding Workout
function addWorkout() {
  const date = document.getElementById("date").value;
  const exercise = document.getElementById("exercise").value;
  const duration = document.getElementById("duration").value;

  if (date && exercise && duration) {
    const workoutList = document.getElementById("workout-list");
    const workoutItem = document.createElement("li");
    workoutItem.textContent = `${date} - ${exercise} for ${duration} minutes`;
    workoutList.appendChild(workoutItem);

    document.getElementById("track-form").reset();
  }
}

// Slideshow for Workout Images
const images = [
  "images/running.jpg",
  "images/cycling.jpg",
  "images/yoga.jpg",
  "images/weightlifting.jpg",
];
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slider-img").src = images[currentIndex];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("slider-img").src = images[currentIndex];
}

// Goals Page - Adding Goals
function addGoal() {
  const goal = document.getElementById("goal").value;

  if (goal) {
    const goalList = document.getElementById("goal-list");
    const goalItem = document.createElement("li");
    goalItem.textContent = goal;
    goalList.appendChild(goalItem);

    document.getElementById("goals-form").reset();
  }
}
document
  .getElementById("activity-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form values
    const activityType = document.getElementById("activity").value;
    const duration = document.getElementById("duration").value;
    const date = document.getElementById("date").value;

    // Create an activity entry
    const activityEntry = document.createElement("div");
    activityEntry.classList.add("activity-entry");
    activityEntry.innerHTML = `
        <p><strong>Activity:</strong> ${activityType}</p>
        <p><strong>Duration:</strong> ${duration} minutes</p>
        <p><strong>Date:</strong> ${date}</p>
        <hr>
    `;

    // Append activity entry to activity list
    const activityList = document.getElementById("activity-list");
    if (
      activityList.firstElementChild &&
      activityList.firstElementChild.tagName === "P"
    ) {
      activityList.innerHTML = "";
    }
    activityList.appendChild(activityEntry);

    // Clear form inputs
    document.getElementById("activity-form").reset();
  });
document
  .getElementById("goal-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form values
    const goalDescription = document.getElementById("goal").value;
    const targetDate = document.getElementById("target-date").value;

    // Create a goal entry
    const goalEntry = document.createElement("div");
    goalEntry.classList.add("goal-entry");
    goalEntry.innerHTML = `
        <p><strong>Goal:</strong> ${goalDescription} <br> <strong>Target Date:</strong> ${targetDate}</p>
        <button class="btn-complete">Complete</button>
    `;

    // Mark goal as complete
    goalEntry
      .querySelector(".btn-complete")
      .addEventListener("click", function () {
        goalEntry.style.textDecoration = "line-through";
        goalEntry.style.opacity = "0.6";
        this.disabled = true;
        this.textContent = "Completed";
      });

    // Append goal entry to goal items
    const goalItems = document.getElementById("goal-items");
    if (
      goalItems.firstElementChild &&
      goalItems.firstElementChild.tagName === "P"
    ) {
      goalItems.innerHTML = "";
    }
    goalItems.appendChild(goalEntry);

    // Clear form inputs
    document.getElementById("goal-form").reset();
  });
