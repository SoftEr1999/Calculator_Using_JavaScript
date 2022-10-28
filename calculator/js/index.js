
var text="";

//Funtion to add operands and operations in text variable
function perform(val){
    text = text + val;
    //This condition will prevent to enter the operand at a very first position
    if(text.charAt(0)=='+'||text.charAt(0)=='-'||text.charAt(0)=='*'||text.charAt(0)=='/')
    {
        text="";
        document.getElementById("entry").value=text;
        document.getElementById("entry").placeholder=0;
    }
    //showing value of text into input box
    document.getElementById("entry").value=text;
}

//This function will work on clicking on = button and evaluate whatever inside the text string
function evaluateFun(){
    var m = eval(text);
    //showing evaluated value in input box
    document.getElementById("entry").value=m;
    text = m;
}

//This fucntion will handle of clearing the input box so that user doesn't need to refresh the page
function clearInputBox(){
    text="";
    document.getElementById("entry").value=text;
    document.getElementById("entry").placeholder=0;
}