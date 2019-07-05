// Note exercise

const notes = [];

// Add note
function addNote(id, content) {
    notes.push({id, content})
};

addNote(1, "hellohallo");
addNote(2, "Hi, this is a note.");
console.log(notes);

// Get a note
function getNoteFromId(id) {
    for (let i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            return "Your id has the following content: " +  notes[i].content;
        } 
            
    }
    return "Your id is not found."
}

console.log(getNoteFromId(3));

//Get all notes
function getAllNotes() {
    return notes;
};

console.log(getAllNotes());

// // Log out notes

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log("The note with id " + notes[i].id + " has the following text: " + notes[i].content);
        
    }
};

logOutNotesFormatted();

// Extra feature - check if id number already exists.
function addNoteAndCheckId(id, content) {
    let status = "notExist";
    for (let i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            status = "exist";
            console.log("Id already exists.")
        }
    }
    if (status === "notExist"){
        notes.push(id, content);
        console.log("Id has been added.")
    }  
    
}

addNoteAndCheckId(3, "this is number 3");
console.log(notes);