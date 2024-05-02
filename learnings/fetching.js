const URL = "https://jsonplaceholder.typicode.com/todos/3";
fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    });



// jsonplaceholder is a website that returns placeholder JSON responses.

const newURL = "https://official-joke-api.appspot.com/random_joke";
fetch(newURL)
    .then((response) => response.json()) // Get JSON data out of Response object so it's readable
    .then((joke) => {
        // Use the returned data in some way
        const data = {
            setup: joke.setup,
            punchline: joke.punchline
        }
        const message = `Setup: ${data.setup} \n\n Punchline: ${data.punchline}`;
        alert(message)
    });

