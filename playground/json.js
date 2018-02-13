// // var obj={
// //   name:'andrew'
// // };
// // var stringObj=JSON.stringify(obj);
// // console.log(typeof stringObj,stringObj);


// var personString='{"name":"Andrew","age":"25"}';
// var person=JSON.parse(personString);
// console.log(typeof person,person);

var fs=require('fs');
var originalNote={
  title:'some',
  body:'body'
}
var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note,note.title);
