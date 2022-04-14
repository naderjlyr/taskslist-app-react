<h1 align="center">
  React To-Do App
</h1>

<div align="center">
  <p>A simple to-do list application made in react.js</p>

</div>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)

---

## Overview

Just a simple application to show my knowledge in react.

a simple Api and database are added for testing. (Node+MongoDB)

Make sure you installed MongoDB,Node.js on your machine.

## Getting Started

1. Clone the repository and `cd` into api and client direcotry respectively and install packages(npm install)
2. run backend server by going to api directory and execute npm start
3. run frontend by going to client directory and execute npm start

The application backend is served at [http://localhost:3001] by default you can change the port in simpleServer.js file under api folder
The database port is MongoDB default which is 27017, and it also can be changed in simpleServer.js


## Usage

It's so simple, just enter the task name and press enter or click on the icon in the text field to add your task.
You can set the task to "completed" by checking the checkbox provided for each task in the list.

**Note:** Because of there is no database storage etc, tasks will be gone on page refresh.
