console.log("Hello");

//window.alert('Hey guys');
//alert("How are you");

if (confirm("Press a button!")){
    txt="You pressed OK";
} else{
    txt="You pressed cancel";
}

var userInput=window.prompt("Please enter your name",);
if (userInput!==null) {
    alert("Hello,"+userInput+"!");
}else{
    alert("You cancelled the prompt.");
}

function openPrompt(){
    var inputValue=prompt("Please just type something","");
    if (inputValue !==null){
        alert("Thank you for your contribution"+inputValue);
    }
}