/*
just for the  course  

*****

multiply *
plus +
minus -
mode %
divide /

*****
*/

//for(let i=0;i<10 ;i++){

//    if (i%2==0){
//        console.log(i)
//    }

//    else if (i==5){
//        console.log("this is the half")
//        break;
//    }
//   else {
//    console.log("this is odd number")
//   }
//}

/* --- example one --- */

//let UserName = prompt("enter your name");

//function OddNumber(FirstNumber, SecounedNumber) {
//  for (let i = FirstNumber; i < SecounedNumber; i++) {
//    if (i % 2 == 1) {
//        console.log("this is odd number wich is " + " " + i + " " + UserName)
//  }

//}
//}

//OddNumber(200, 210)

/*---example two---*/

let Students = ["yasmeen", "sara", "asoom", "noor", "sally"];

//length = latsindex + 1

// last index = length - 1

let studentsMarks = [44, 30, 40, 50, 60];

function MarksCalculate(params) {
    //for (let i = 0; i < Students.length; i++) {
    //  console.log(Students[i]);




    for (let k = 0; k < studentsMarks.length; k++) {
        //  console.log(studentsMarks[k]);
        if (studentsMarks[k] < 40) {
            console.log("sorry" + "  " + Students[k] + "  " + "your scored" + "  " + studentsMarks[k] + "  " + "and you have failed");

        }
else{
    console .log("congrat"+"  "+Students[k]+"  "+"youre scored" +"  "+studentsMarks[k]+"  "+"and you have passed" );
}

    }

}


MarksCalculate();