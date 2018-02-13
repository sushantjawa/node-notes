//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
//console.log(command);

if (command === 'add') {
 // console.log('adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
      console.log('Successfully created');
notes.logNote(note);
  } else {
    console.log('Already exists');
  }
} else if (command === 'list') {
 // console.log('lisitng all notes');
  var allNotes=notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note)=> {notes.logNote(note);});
} else if (command === 'remove') {
  //console.log('remove note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Node was removed" : "Node not found";
  console.log(message);
} else if (command === 'read') {
  //console.log('reading note');
  var note=notes.getNote(argv.title);
  if(note) 
    {
      console.log('Successfully read');
    notes.logNote(note);
    }else{
      console.log('note not found');
    }
} else {
  console.log('command not recognized');
}