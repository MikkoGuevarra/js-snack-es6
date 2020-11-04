$(document).ready(function() {
    // A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

    const students = [
        {
            'name' : 'Lionel',
            'lastName' : 'Messi',
            'age' : 33
        },
        {
            'name' : 'Cristiano',
            'lastName' : 'Ronaldo',
            'age' : 35
        },
        {
            'name' : ' Zlatan',
            'lastName' : 'Ibrahimovic',
            'age' : 39
        },
    ];

    //creo nuovo array
    // const newStudents = [...students];
    // console.log(newStudents);
    //
    // newStudents.forEach((thisStudent) => {
    //     console.log(thisStudent);
    //     thisStudent.position = stringGen(1);
    //
    // });
    // console.log(newStudents);

    const newStudents = students.map((element, index) => {
        console.log(element);
        let copy = {
            ...element,
            position : stringGen(1)
        };
        return copy;
    });
   //  newStudents.forEach((thisStudent) => {
   //     thisStudent.position = stringGen(1);
   //
   // });
   console.log(newStudents);
   console.log(students);






});
function stringGen(len) {
    var text = " ";
    var charset = "ABCDEFGHIJKLMNOPSTUWZ";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}
