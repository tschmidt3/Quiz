/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {
    //console.log($('#q1 input:radio:checked.val()'));
    answers=[1,2,3,4];
    $(".controls").on("click",function() {    
        countAnswer();
        countCorrect();
     });
});

function countAnswer(){
    
    answers[0] = Number($('#q1 input:radio:checked').val());
    answers[1] = Number($('#q2 input:radio:checked').val());
    answers[2] = Number($('#q3 input:radio:checked').val());
    answers[3] = Number($('#q4 input:radio:checked').val());
    console.log(answers);
}

function countCorrect(){
    numberCorrect = 0;
    correct= [1,2,3,4];
    for (i = 0; i < correct.length; i++) { 
        if(correct[i]=== answers[i]){
            numberCorrect = numberCorrect+1;
        }
    }
    console.log(numberCorrect);
}

