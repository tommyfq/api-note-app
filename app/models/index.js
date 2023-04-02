/**
 * @description This module exports the database connection and note model.
 * @module db
*/

const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

/**
 * The database object which contains the mongoose instance, database url and note model.
 * @typedef {Object} DatabaseObject
 * @property {Object} mongoose - The mongoose instance
 * @property {string} url - The database url
 * @property {Object} notes - The note model
*/

/**
 * The database object which contains the mongoose instance, database url and note model.
 * @type {DatabaseObject}
*/
const db = {};

// Set the mongoose instance and database url
db.mongoose = mongoose;
db.url = dbConfig.url;

// Import and set the note model
db.notes = require("./note.model.js")(mongoose);

module.exports = db;