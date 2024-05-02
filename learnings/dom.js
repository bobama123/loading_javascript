// 1. We store a reference to the element into a variable
const headingElement = document.querySelector("h1");

// 2. We can now interact with the element, e.g modify its text content
headingElement.textContent = "🥗 Zoe's Cooking Blog! 🥙";


// Can be shortened to this:
document.querySelector("h1").textContent = "🥗 Zoe's Cooking Blog! 🥙";




const body = document.querySelector("body");
const recipeListEl = document.createElement("ol"); // Create a unordered list element

const stepOneEl = document.createElement("li"); // Create a new list item element
stepOneEl.innerText = "Toast some bread"; // Update the text of the list item
recipeListEl.appendChild(stepOneEl); // Add the item as a child of the recipe list

const stepTwoEl = document.createElement("li"); // Repeat for the second instruction
stepTwoEl.innerText = "Spread butter on the toast";
recipeListEl.appendChild(stepTwoEl);

body.appendChild(recipeListEl); // Add the recipe list onto the body of the page