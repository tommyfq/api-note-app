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

## Notes

This code using extension Better Comments (<https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments>) for better experience reading documentation code