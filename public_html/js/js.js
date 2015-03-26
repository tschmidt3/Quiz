/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var answers =[];
var correct = [1, 2, 3, 4];
$( document ).ready(function() {
    //console.log($('#q1 input:radio:checked.val()'));
    $(".controls").on("click",function() {    
        countAnswer();
        countCorrect();
        currentCorrect();
     });
});

function countAnswer(){
    answers[0] = parseInt($('#q1 input:radio:checked').val(),10);
    answers[1] = parseInt($('#q2 input:radio:checked').val(),10);
    answers[2] = parseInt($('#q3 input:radio:checked').val(),10);
    answers[3] = parseInt($('#q4 input:radio:checked').val(),10);
    console.log(answers);
}

function countCorrect(){
    numberCorrect = 0;
    for (var i = 0; i < correct.length; i++) { 
        if(correct[i]=== answers[i]){
            numberCorrect = numberCorrect+1;
        }
    }
    $('#disCount').text(numberCorrect+"/4");
}


function currentCorrect(){
    var activeQuestion = $('.active>form').index('form');
    if (answers[activeQuestion]===correct[activeQuestion]){
        console.log(1);
    } else {
        setTimeout(function (){
            console.log(0);
        },5000);
        
    }
    
}

