function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
    }

    function showResults(questions, quizContainer, resultsContainer){
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

let  questions = [
    {question: "HTL  steht für...",
        answers: [
            "Hier  total  leiwand",
            "Hurra  Technik  leben",
            "Hotels , Taxis , Lehrer",
            "Höhere  technische  Lehranstalt"
        },
    correctAnswer: 1},
    },
    {
        {question: "...",
            answers: [],
            correctAnswer: X},
];

