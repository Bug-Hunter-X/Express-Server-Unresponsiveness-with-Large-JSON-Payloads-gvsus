# Express Server Unresponsiveness with Large JSON Payloads

This repository demonstrates a common issue in Express.js applications: unresponsiveness when handling large JSON payloads due to synchronous data processing within request handlers.  The synchronous nature of `processData` blocks the event loop, preventing other requests from being processed.

## Bug

The `bug.js` file contains an Express.js server that receives JSON data, performs a computationally expensive operation (`processData`), and returns the result.  If a large JSON payload is sent, the server becomes unresponsive because `processData` blocks the event loop, and other incoming requests are ignored until `processData` finishes.

## Solution

The `bugSolution.js` file provides a solution by using asynchronous processing with promises or async/await. This allows the event loop to remain responsive while `processData` executes in the background, handling other requests concurrently.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to start the server.
5. Send a large JSON payload (you can use a tool like Postman) to the `/data` endpoint.
6. Observe that the server becomes unresponsive for a long time.
7. Repeat steps 4-6 with `node bugSolution.js` to see how the asynchronous solution avoids unresponsiveness.

## Technologies Used

* Express.js
* Node.js