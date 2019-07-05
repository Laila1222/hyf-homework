/**
 * Student manager
 *
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Lilla Kőrösi
 */

const class07Students = ["ri", "laile", "banos", "hello"];
function addStudentToClass(studentName){
    let status = "Not exist";
    if (class07Students.length >= 6 && studentName !== "Queen") {
        console.log("Cannot add more students to Class.");
    } else {
        for(let i=0; i < class07Students.length; i++){
        let name = class07Students[i];
        if(name === studentName){
            status = studentName + " already in the class, cannot add.";
            console.log(status);
            break;
        }
    }
        
    if (status === "Not exist" && studentName !== "") {
        class07Students.push(studentName);
        console.log(studentName + " has been added to the class.");
        }
    }
  }
console.log(class07Students);


function getNumberOfStudents() {
    console.log(class07Students.length);
}
getNumberOfStudents();