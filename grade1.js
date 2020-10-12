var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, stringFinalGrade, intGradeOption, floatTotalPts;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    intGradeOption = parseInt($("grade_option").value);
    floatTotalPts = parseFloat(floatFinPts+floatMidPts+floatHwPts);
   
if (intGradeOption == 1){
    
    if(floatTotalPts >= 80){
        stringFinalGrade = "pass";
         $("final_grade").value = stringFinalGrade;
    }
    else {
        stringFinalGrade = "fail";
         $("final_grade").value = stringFinalGrade;
    }
}
else if (intGradeOption ==2){
    if(floatTotalPts >= 90){
        stringFinalGrade = "A";
         $("final_grade").value = stringFinalGrade;
            }
    else if(floatTotalPts >= 80 && floatTotalPts< 90){
        stringFinalGrade = "B";
         $("final_grade").value = stringFinalGrade;
        }
    else if(floatTotalPts >= 70 && floatTotalPts< 80){
        stringFinalGrade = "C";
         $("final_grade").value = stringFinalGrade;
        }
    else if(floatTotalPts >= 60 && floatTotalPts<70){
        stringFinalGrade = "D";
         $("final_grade").value = stringFinalGrade;
        }

   else{
        stringFinalGrade = "F";
         $("final_grade").value = stringFinalGrade;
        } 
}


};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};