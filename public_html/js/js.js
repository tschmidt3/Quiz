//build questions as objects
function Question(q, answers, correct) {
  this.q = q;
  this.answers = answers;
  this.correct = correct;
  this.answered = false;
  this.userAnswer = NaN;
}
var Q1 = new Question('What is NOT one of the four forces of flight?', 
['Lift', 'Pressure', 'Thrust', 'Weight', 'Drag'], 2);
var Q2 = new Question('What type of plane is a B-52?', 
['Bomber', 'Fighter', 'Glider', 'Cargo', 'Blimp'], 1);
var Q3 = new Question('What is NOT one of the four forces of flight?', 
['Lift', 'Pressure', 'Thrust', 'Weight', 'Drag'], 1);
var Q4 = new Question('What is NOT one of the four forces of flight?', 
['Lift', 'Pressure', 'Thrust', 'Weight', 'Drag'], 1);


lQuestion = [Q1, Q2, Q3, Q4];

var answers =[];
var correct = [Q1.correct, Q2.correct, Q3.correct, Q4.correct];
$( document ).ready(function() {
    $('.glyphicon-chevron-left').on('click', function() {
        previousSlide();
    });
    $('.glyphicon-chevron-right').on('click', function() {
        countAnswer();
        nextSlide();
    });
    $('.carousel-indicators li').on('click', function() {
        countAnswer();
        countCorrect();
        currentCorrect();
        $('#myCarousel').carousel($(this).index());
    });
});

function countAnswer(){
    Q1.userAnswer = parseInt($('#q1 input:radio:checked').val(),10);
    Q2.userAnswer = parseInt($('#q2 input:radio:checked').val(),10);
    Q3.userAnswer = parseInt($('#q3 input:radio:checked').val(),10);
    Q4.userAnswer = parseInt($('#q4 input:radio:checked').val(),10);
    answers = [Q1.userAnswer, Q2.userAnswer, Q3.userAnswer, Q4.userAnswer];
}

function countCorrect(){
    numberCorrect = 0;
    for (var i = 0; i < correct.length; i++) { 
        if(correct[i] === answers[i]){
            numberCorrect = numberCorrect+1;
        }
    }
    $('#disCount').text(numberCorrect+"/4");
}

function currentCorrect(){
    var activeQuestion = $('.active>form').index('form');
    if (answers[activeQuestion]===correct[activeQuestion]){
        //console.log(1);
    } else {
        setTimeout(function (){
            //console.log(0);
        },5000);  
    }
}

function nextSlide(){
    //if slide is on the last slide and all answers are selected, provide score and feedback
    //If slide is on last slide and all answers are not filled out, rotate like normal
    //Score is on slide 5
    countAnswer();
    countCorrect();
    currentCorrect();
    var activeSlide = $('.active>form').index('form');
    if (activeSlide === 3){
        if(allAnswered()){
            finalAnswer();
            $('#myCarousel').carousel(4);
            
        } else {
            $('#myCarousel').carousel(0);
        }
    } else {
        $('#myCarousel').carousel('next');
    }
}

function previousSlide(){
    countAnswer();
    countCorrect();
    currentCorrect();
    //if on slide 1 go to slide 4. Slide 5 is where the answers are shown
    var activeSlide = $('.active>form').index('form');
    if (activeSlide === 0){
        $('#myCarousel').carousel(3);
    } else {
        $('#myCarousel').carousel('prev');
    }
}

function allAnswered(){
    //returns true if all items are answerd
    var ret = true;
    for (var i = 0; i < 4; i++){
        if (isNaN(answers[i])){
            ret = false;
            break;
        }
    }
    return ret;
}

function finalAnswer(){
    //all items to get sheet 5 to show the final answers
    $('#disCount').text("a");
}
