
if





if (timeLeft > 0 && userAnswer !== questions[counter].correctAnswer) {
            clearInterval(intervalId);
            $(".display").html(questions[counter].incorrectAnswerMessage);
            
             setTimeout(questionCounter, 8000);
             
        } else if (userAnswer === questions[counter].correctAnswer) {
            clearInterval(intervalId);
            $(".display").html(questions[counter].correctAnswerMessage);
            setTimeout(questionCounter, 8000);
           
        } else {
            $(".display").html(questions[counter].outOfTimeCorrectAnswerMessage);
            clearInterval(intervalId);
          
            setTimeout(questionCounter, 8000);
            
        }

    
        console.log(questions[counter].outOfTimeCorrectAnswerMessage);