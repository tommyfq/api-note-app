# Express API Note App

API Note App is a web api for manage note app, built with Node, Express, Mongoose.

## Dependencies

This code using dependecies

- npm 8.1.2
- nodejs v16.13.1
- Express v4.18.2
- Mongoose v7.0.3
- Nodemon v2.0.22

## Setup

```bash
git clone https://github.com/tommyfq/api-note-app
cd api-note-app
npm install
```

inside `app/config` make file `db.config.js` and write code below

```javascript
module.exports = {
   url: "mongodb://localhost:27017/notes_app_db"
};
```

## Running Program

```bash
cd api-note-app
npm start
```

## Usage
Start the server: `npm start`
Use the API to perform CRUD operations on notes. See the API documentation for details.

## API Documentation
### Create a new note
Creates a new note.

#### Request

- Method : `POST`
- URL: `/api/notes`
- Headers: `Content-Type: application/json`
- Body: `{ "title": "Note title", "description": "Note description" }`

#### Response
```BASH
Status code: 201 Created
Body: { "id": "note ID", "title": "Note title", "description": "Note description", "createdAt": "Timestamp", "updatedAt": "Timestamp" }
```

### Get all notes
Retrieves all notes.

#### Request

- Method: `GET`
- URL: `/api/notes`

### Response
```BASH 
Status code: 200 OK, 
Body: [{ "id": "note ID", "title": "Note title", "description": "Note description", "createdAt": "Timestamp", "updatedAt": "Timestamp" }]
```

### Get a note by ID
Retrieves a note by its ID.

#### Request

- Method: `GET`
- URL: `/api/notes/:id`

#### Response
```BASH 
Status code: 200 OK
Body: { "id": "note ID", "title": "Note title", "description": "Note description", "createdAt": "Timestamp", "updatedAt": "Timestamp" }
```

### Update a note
Updates a note by its ID.

#### Request
- Method: `PUT`
- URL: `/api/notes/:id`
- Headers: `Content-Type: application/json`
- Body: `{ "title": "New note title", "description": "New note description" }`

#### Response
```BASH 
Status code: 200 OK
Body: { message: "Note was updated successfully." }
```

### Delete a note
Deletes a note by its ID.

#### Request

- Method: `DELETE`
- URL: `/api/notes/:id`

#### Response: 
```BASH 
Status code: 200 Ok 
Body: { message: "Note was deleted successfully!" }
```

### Delete all notes
Deletes all notes.

#### Request

- Method: `DELETE`
- URL: `/api/notes`

#### Response 
```BASH 
Status code: 200 Ok 
Body : {message: `[NumberDeletedDataCount] Notes were deleted successfully!`}
```

## High Level Overview
there's a high-level overview of how the program flow works from file to file in the `api-note-app` repository:

- The `server.js` file is the entry point of the application. It imports the necessary dependencies, connects to the MongoDB database using Mongoose, and sets up a basic HTTP server using Express.
- The `server.js` file then sets up a few middleware functions using `app.use()` to handle CORS, BASH parsing, and URL-encoded data.
- The `server.js` file defines a basic route using `app.get()` to serve a welcome message at the root URL.
- The `server.js` file requires the note.routes.js file and passes the app object to it, allowing the routes defined in `note.routes.js` to be registered with the Express application.
- The `note.routes.js` file requires the note.controller.js file and sets up several HTTP routes using router.post(), `router.get()`, `router.put()`, and `router.delete()`. Each route maps to a specific function in the note.controller.js file.
- The `note.controller.js` file defines functions for handling each of the HTTP routes defined in note.routes.js. These functions interact with the database using the Mongoose model defined in note.model.js to create, read, update, or delete notes as necessary.
- The `note.model.js` file defines the Mongoose schema for the Note model and exports a function that creates and returns the Note model.
- Finally, the config directory contains a `db.config.js` file that exports the URL for the MongoDB database.

In summary, the flow of the program is as follows: `server.js` -> `note.routes.js` -> `note.controller.js` -> `note.model.js`. The `server.js` file sets up the basic server and middleware, and then passes control to the `note.routes.js` file to register the routes. The routes are defined in `note.routes.js` and map to functions in `note.controller.js`, which interacts with the database using the Mongoose model defined in `note.model.js`.


## Notes

This code using extension Better Comments (<https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments>) for better experience reading documentation code