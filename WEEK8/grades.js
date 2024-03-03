let score=prompt("Enter your score");
score=parseFloat(score);

if (isNaN(score)){
    console.log("Invalid input. Enter a real number.");
}
else{
    let grade;
    if (score>=90){
        grade="A";
    }
    if (score>=80){
        grade="B";
    }
    if (score>=70){
        grade="C";
    }
    if (score>=60){
        grade="D";
    }
    else{
        grade="F";
    }
    console.log("Your grade is: " + grade);
}


