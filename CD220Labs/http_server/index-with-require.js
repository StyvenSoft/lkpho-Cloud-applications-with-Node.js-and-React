 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the status code to 200 (OK)
    // Get the current time from the server using the 'today' module
    const now = today.getDate();
    const hour = now.getHours();
    let greeting;

    // Determine the greeting based on local time
    if (hour >= 6 && hour < 12) {
        greeting = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon!";
    } else if (hour >= 18 && hour < 21) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }

    // Send the response with the greeting and the current date (optional)
    res.end(`Hello, ${greeting} The date today is ${now.toDateString()}`);
};

// Define the port number
const port = 8080;
const url = `http://localhost:${port}`;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server listening on port: ${url}`);
});