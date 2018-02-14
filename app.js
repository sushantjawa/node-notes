//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions={
    describe:'title of note',
    demand:true,
    alias:'t'
  };
const bodyOptions={
    describe:'body of the note',
    demand:true,
    alias:'b'
  };

const argv = yargs
.command('add','Add a new note',{
  title:titleOptions,
  body:bodyOptions
})
.command('list','list all notes')
.command('read','read a note',{
   title:titleOptions
})
.command('remove','remove a note',{
   title:titleOptions
})
.help()
.argv;
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
  var message = noteRemoved ? "Note was removed" : "Note not found";
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