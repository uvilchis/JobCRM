[![Waffle.io - Columns and their card count](https://badge.waffle.io/TeamAlderaan/JobCRM.png?columns=all)](https://waffle.io/TeamAlderaan/JobCRM?utm_source=badge)
# JobCRM

## Introduction
This is a single-page web application for adding and displaying personal data on job search progress

## Alderaan
- __Scrum Master__: Tommy York
- __Product Owner__: Christine Ma
- __Development Team Members__: Derrick Theodore, Uciel

### Technical Overview
The project can be broken down into 3 major parts:

- client (react-client) : single page application with React ^16.0.0 and utilizes react-router. Client uses Axios in order to 'talk to' the server when its click-handler events go off
- server (express) : serves static assets and API requests
- database (postgres) : stores all persisting data

### Glossary

- *postgres* : database that stores all persistent data
  -*models* :

- *sequelize* : helper library that connects to postgres and facilitates storing and getting data between server and database. Treat it as the middleman between Node server and postgres database.

- *Express* : web server framework for Nodejs. It makes things like defining serving static files and dynamic API requests easier.

- *React* : client-side (code running in a visitor's browser) framework that makes writing a single-page application easier and more organized, following a top-down scheme for passing down static information(props) and information.
  - *React Components*
  - *React-Router*

- *axios* : Promise-based library that talks to the server by directing a request(post, get, ...) and instance of 'state' to the appropriate server endpoint

## Usage
- The navigation bar view should persist while views switch between records, input, login, and news.
- The search bar nested in the nav bar should query and filter from every category in the database.

## Getting Started
```sh
npm install
npm start
```
When finished: 
```sh
npm stop.
```

## Project Architecture

- *package.json* : specifies project dependencies
- *server* : folder containing server related code
  - *server.js* :
    - 1. *Sequelize* establishes a connection to the database *postgres*, 2. defines the 'models' format (what it's called, what type of information will go in it, etc.), 3. then creates the tables if they do not already exist.
    - *Express* *defines the 'endpoints'* that will receive requests from the client side (axios). These endpoints take that request, run it through a promise, *queries the database* if necessary, and responds. This response gets back to Axios in the front end to either finish the promise or catch the error.
    - last but not least, this is where app (an instance of express) listens to the port
  - *index.js* : >>>>>>>>idk what this file does, someone please explain to me???????
  - *schema.sql* : >>>>>>>>>temp file that holds SQL table data???

- React-Client
  - dist : directory that holds all *'static'* files
    - index.html : holds the original plain ol' HTLM file. Everything will render in the app id.
  - src
    - index.jsx : requires our front-end framework React, ReactDOM, the App, and *renders everything through React Dom* and throws it into App in the plain index.html
    - HelperFuncStateStorage
    - components
      - App.jsx
      - other components

### Installing Dependencies

From within the root directory:

```sh
npm install 
```

##Server
- server.js - this is where you require

### Roadmap

See our waffle link above.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
