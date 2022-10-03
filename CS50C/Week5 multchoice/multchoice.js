const data = [
    {
      number: 1,
      question: "What is the capital of California?",
      points: 5,
      answers:["Santa Rosa", "San Francisco", "Fresno", "Sacramento"],
      correct_choice: 3
    },
    {
      number: 2,
      question: "How many states border California?",
      points: 5,
      answers:[2, 4, 3, 5],
      correct_choice: 2
    },
    {
      number: 3,
      question: "Which state is west of California?",
      points: 5,
      answers:["Nevada", "Hawaii", " Oregon", "Mexico"],
      correct_choice: 1
    },
    {
      number: 4,
      question: "What is the tallest mountin in California?",
      points: 5,
      answers:["Mt.Whitney", "Mt.Everest", "Mt.Denali", "Mt.Hood"],
      correct_choice: 0
    },
    {
      number: 5,
      question: "What year did California become a state?",
      points: 5,
      answers:[1848, 1849, 1850, 1851],
      correct_choice: 2
    }
  ];
  
  var turn = 0;
  
  showQuestion();
  
  function showQuestion() {
  
    $('#counterText').text("Question:");
    $('#counter').text(turn + 1);
  
    $('#question').text(data[turn].question);
  
    $('#answers').empty();
  
    for ( let index in data[turn].answers) {
      
      var button = $("<button>");
      button.text(data[turn].answers[index]);
    
      $('#answers').append(button);
  
      button.click(
        function() {
          checkAnswer(index);
        }
      );
    }
  }
  
  function checkAnswer(choice) {
    if (choice == data[turn].correct_choice) {
      $('#wrong').empty();
      $('#right').text("Correct answer!");
      nextQuestion();
    } else {
      $('#wrong').text("Wrong answer!");
      $('#right').empty();
    }
  }
  
  function nextQuestion() {
    turn++;
    if ( turn < data.length) {
      showQuestion();
    } else {
      $('body').html("<h1>Thank you for playing!</h1>");
    }
  }
  
  
  