
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unansweredCount = 0;
var timeLeft = 30;
var userClick = 0;
var startClick = 0;
var counter = -1;
var intervalId;
var userAnswer = "";
var gameRunning = true;

var questionOne = {
    "displayImg": "assets/images/tiberius.gif",
    "question": "What is Captain Kirk's middle name?",
    "Answers": ["Sam", "Timmothy", "Tiberius", "Solen"],
    "correctAnswer": "Tiberius",
    "outOfTimeCorrectAnswerMessage": "Time's up. Have you watched the show at all? The correct answer was Tiberius",
    "correctAnswerMessage": "That's right the correct answer was Tiberius",
    "incorrectAnswerMessage": "That's wrong. It's Tiberius."

};
var questionTwo = {
    "displayImg": "assets/images/amandaGrayson.gif",
    "question": "What is Spock's mother's name?",
    "Answers": ["T'Pau Sayek", "Amanda Grayson", "Tasha Yar", "Beverly Crusher"],
    "correctAnswer": "Amanda Grayson",
    "outOfTimeCorrectAnswerMessage": "Too slow! Time ran out. The correct answer was Amanda Grayson",
    "correctAnswerMessage": "That's right the correct answer was Amanda Grayson",
    "incorrectAnswerMessage": "Nope. It's Amanda Grayson."

};
var questionThree = {
    "displayImg": "assets/images/enterprise.gif",
    "question": "What class is the ship Enterprise",
    "Answers": ["Nimitz", "Constitution", "Nebula", "A-class"],
    "correctAnswer": "Constitution",
    "outofTimeCorrectAnswerMessage": "I'm betting you aren't a Trekkie. You ran out of time. The correct answer was Constitution",
    "correctAnswerMessage": "You know your ships! The correct answer was Constitution",
    "incorrectAnswerMessage": "Not a Trekkie huh!?. The answer is Constitution."

};
var questionFour = {
    "displayImg": "assets/images/carltonDance.gif",
    "question": "Around what year is the Next Generation set in?",
    "Answers": ["12,397", "17,100", "2364", "2001"],
    "correctAnswer": "2364",
    "outOfTimeCorrectAnswerMessage": "Uh oh, you werew too slow. The correct answer is 2364, and beyond",
    "correctAnswerMessage": "Yup, the correct answer is 2364, and beyond",
    "incorrectAnswerMessage": "That's wrong. It's 2364 and beyond."

};
var questionFive = {
    "displayImg": "assets/images/noonienSoong.gif",
    "question": "Who created data?",
    "Answers": ["Noonien Soong", "Isaac Asimov", "Elon Musk", "Joseph Engelberger"],
    "correctAnswer": "Noonien Soong",
    "outOfTimeCorrectAnswerMessage": "You ran out of time, the correct answer is Noonien Soong",
    "correctAnswerMessage": "You're good! The correct answer is Noonien Soong",
    "incorrectAnswerMessage": "Uuuh, no. It's Noonien Soong."

};
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
$(document).ready(function () {

    function resetGame() {
        // setTimeout(function(){ $(".triviacontent").empty(); }, 8000);
        counter = 0;
        correctAnswerCount = 0;
        incorrectAnswerCount = 0;
        unansweredCount = 0;
        timeLeft = 30;
        startGame();

    }

    function disPlayTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(seconds, 1000);
        function seconds() {
            if (timeLeft === 0) {
                clearInterval(intervalId);
                console.log("disPlaytimer " +timeLeft);
                // displayAnswer();
            } else if (timeLeft > 0) {
                timeLeft--;
            }
            $("#displayTime").text("Time left: " + timeLeft + " seconds");
        }


        // return timeLeft;
    }
    function startGame() {
        var startpage = $("<div>");
        startpage.attr({

            "data-click": startClick,
            "id": 'startpage'
        });
        $(".display").text("Welcome to my Star Trek Triva Game");
        $(".display").append(startpage);
        $("#startpage").html("Start");
        $("#startpage").click(function () {
            // displayQuestion();
            questionCounter();
         

        });
    }
    startGame();

    function displayQuestion() {
        
        disPlayTimer();
        console.log("disquestion " +timeLeft);
        $(".display").html(questions[counter].question);
        console.log(questions[counter].question);
        console.log(counter);
        //think about to using id instead
        for (var i = 0; i < 4; i++) {
            var id = "answerDiv" + i;
            var answerDisplay = $("<div>");
            answerDisplay.attr({
                "class": 'answerDisplay',
                "data-click": questions[counter].Answers[i],
                "id": id
            })
            $(".display").append(answerDisplay);
            // $(".answerDisplay").html(questionOne.Answers[i]);
            $("#" + id).html(questions[counter].Answers[i]);
            // console.log(questions[counter].Answers[i]);
        }
      
         setTimeout(displayAnswer, 30000);
        
        $(".answerDisplay").click(
            function () {
                userAnswer = ($(this).attr('data-click'));
                // console.log(userAnswer);
                
            displayAnswer();
            }
           
        );
       
    }

    function displayAnswer() {
        console.log("disPlayanswer " +timeLeft);
        // $(".displayTime").empty();

        if (timeLeft > 0 && userAnswer !== questions[counter].correctAnswer) {
            clearInterval(intervalId);
            $(".display").html(questions[counter].incorrectAnswerMessage);
            incorrectAnswerCount++;
            setTimeout(questionCounter, 8000);

        } else if(timeLeft > 0 && userAnswer === questions[counter].correctAnswer) {
            clearInterval(intervalId);
            correctAnswerCount++;
            $(".display").html(questions[counter].correctAnswerMessage);
            setTimeout(questionCounter, 8000);

        } else {
            clearInterval(intervalId);
            $(".display").html(questions[counter].outOfTimeCorrectAnswerMessage);
           
            unansweredCount++;
            setTimeout(questionCounter, 8000);

        }
        var displayImage = $("<div>");
        displayImage.attr({
            "class": 'displayImage',
            "data-click": userClick,
            "id": 'displayPicture'
        })
        displayImage.css({
            "background-image": "url('" + questions[counter].displayImg + "')",
            "background-size": "cover"
        });
        $(".display").append(displayImage);

    }
    function endofGame() {
        clearInterval(intervalId);
        console.log("I am in the end game");
        console.log("disendofgame " +timeLeft);
        // $(".display, .triviacontent, .displayTime").empty();
        $(".trviacontent").html("That's the end. Let's see how you scored.");
        for (var k = 0; k < 3; k++) {
            var id = "totalsDiv" + k;
            var displayTotals = $("<div>");
            displayTotals.attr({
                "data-click": 5,
                "id": id
            })
            $(".display").append(displayTotals);
        }
        var startpage = $("<div>");
        startpage.attr({
            "data-click": startClick,
            "id": 'startpage'
        });
        $(".display").append(displayTotals);
        $("#totalsDiv0").html("Correct " + correctAnswerCount);
        $("#totalsDiv1").html("Incorrecct " + incorrectAnswerCount);
        $("#totalsDiv2").html("Unanswered " + unansweredCount);
        $(".display").append(startpage);
        $("#startpage").html("Start Over?");
        $("#startpage").click(function () {
            gameRunning =false;
            setTimeout(resetGame, 8000);
            clearInterval(intervalId);
           
        });
      
      
        
    }
    function questionCounter() {
      
        if (counter < questions.length) {
            // console.log(questions.length);
            // console.log(counter);
            counter++;
            clearInterval(intervalId);
            timeLeft = 30;
           
            displayQuestion()

        } else {
            timeLeft =0;
            clearInterval(intervalId);
            setTimeout(endofGame, 8000);
             
        }
    }

});
