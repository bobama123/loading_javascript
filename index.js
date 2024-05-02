console.log("Hello from JavaScript");

// 1. We store a reference to the element into a variable
const headingElement = document.querySelector("h1");

// 2. We can now interact with the element, e.g modify its text content
headingElement.textContent = "🥗 Zoe's Cooking Blog! 🥙";




const body = document.querySelector("body");
const recipeListEl = document.createElement("ol"); // Create a unordered list element

const stepOneEl = document.createElement("li"); // Create a new list item element
stepOneEl.innerText = "Toast some bread"; // Update the text of the list item
recipeListEl.appendChild(stepOneEl); // Add the item as a child of the recipe list

const stepTwoEl = document.createElement("li"); // Repeat for the second instruction
stepTwoEl.innerText = "Spread butter on the toast";
recipeListEl.appendChild(stepTwoEl);

body.appendChild(recipeListEl); // Add the recipe list onto the body of the page


const recipeTwo = document.createElement("p");
recipeTwo.innerText = "Cake";
document.body.appendChild(recipeTwo);



const paragraphs = document.querySelectorAll("p");
const secondParagraph = paragraphs[1]; // Selects the second <p> tag (index 1)

const recipeListTwo = document.createElement("ol");

const stepOne = document.createElement("li"); 
stepOne.innerText = "Add flour";
recipeListTwo.appendChild(stepOne); 

const stepTwo = document.createElement("li"); 
stepTwo.innerText = "Add sugar";
recipeListTwo.appendChild(stepTwo);

secondParagraph.appendChild(recipeListTwo); 








// This function will attach the event listener when called 
const URL = "https://jsonplaceholder.typicode.com/todos/3";

const attachListener = () => {
    document.querySelector('#my-button').addEventListener('click', () => {
        console.log('clicked!');
        fetch(URL)
            .then((response) => response.json()) // Get JSON data out of Response object so it's readable
            .then((todo) => {
                // Use the returned data in some way
                const data = {
                    title: todo.title,
                    completed: todo.completed
                }
                const message = `Title: ${data.title} \n\n Completed: ${data.completed}`;
                alert(message)
            });
        });
    }
    
    // If the user clicks on the button now, nothing will happen (yet)
    
    // ...
    
    // Later, we call the function defined previously
    attachListener();
    
    // The click is now handled
    
    


