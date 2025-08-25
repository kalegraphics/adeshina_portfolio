// Simple interactivity (you can expand later)

// Example: Show an alert when clicking "See More"
document.querySelectorAll(".skill a").forEach(button => {
  button.addEventListener("click", (event) => {
    console.log(`Navigating to: ${event.target.getAttribute("href")}`);
  });
});
