//console.log('Starting notes.js');
var fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
    //  console.log(notes);
  } catch (e) {
    // console.log(e);
    return []
  }

};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}


var addNote = (title, body) => {

  //console.log('adding note',title,body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    //  console.log('yes its zero');
    notes.push(note);
    saveNotes(notes);
    //console.log(notes);
    return note;
  }
};

  var removeNote = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title != title);
  saveNotes(filterNotes);
  return notes.length != filterNotes.length;
};
var getAll = () => {
 // console.log('getting all');
  return fetchNotes();

};
var getNote = (title) => {
var notes=fetchNotes();
  var filterNotes=notes.filter((note)=>note.title==title);
   return filterNotes[0];                           
};

var logNote=(note)=>{
    console.log('-------');
    console.log();
    console.log(`Title: ${note.title} , Body:${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};