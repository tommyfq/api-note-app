/**
 * Defines the Note model schema and creates the Note model.
 * @param {object} mongoose - The mongoose object.
 * @returns {object} The Note model.
*/

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String
      },
      { timestamps: true }
    );
  
    // Converts the _id field to id and removes __v and _id fields when returning the 
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Note = mongoose.model("note", schema);
    return Note;
  };