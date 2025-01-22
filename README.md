# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a server hangs due to a long-running task in a request handler without proper asynchronous handling.  The server becomes unresponsive until the task completes.

## Problem

The `server.js` file contains a simple HTTP server.  A request handler simulates a computationally intensive task (a large loop). This blocks the event loop, preventing the server from responding to further requests and potentially exhausting resources.

## Solution

The `serverSolution.js` file demonstrates a solution using asynchronous techniques such as `setTimeout` to handle long-running tasks without blocking the event loop.  The solution will send a response to the user and continue processing the request in a separate thread or process.