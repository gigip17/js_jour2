const content = document.querySelector("div");

// Initialize a counter to keep track of how many elements have been added
let counter = 0;

// Add the scroll event listener to the window object
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPos = window.scrollY + window.innerHeight;

  // Get the total height of the document
  const totalHeight = document.body.offsetHeight;

  // Check if the user has scrolled to the bottom of the page
  if (scrollPos >= totalHeight) {
    // Add a new <p> element to the content div
    const p = document.createElement("p");
    const date = new Date().toUTCString();
    p.textContent = `Element ${counter} added at ${date}`;
    content.appendChild(p);
    counter++;
    // Create a new height for the document
    document.body.style.height = `${totalHeight + 100}px`;
  }
});