//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	if (intCount < 2 || intCount > 100 || isNaN(intCount)){
        $("total_fib").value = ""; //this will blank out the entry box 
        alert("Try Again. Enter a number between 2 and 100.");
    }
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 
while(intCount > 0){
    k = i + j;
    i = j;
    j = k;
    stringOutput = (stringOutput + k + " "); //this will add the next number in the sequence to the stringOutput
    intCount--; //decrement the counter untul it reaches 0
}
$("output").value = stringOutput; //displays the string of the sequence from the loop
} ;

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  ;