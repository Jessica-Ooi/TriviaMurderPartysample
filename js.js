(function(){
    // Functions
    function buildQuiz(quizContainer){
      // variable to store the HTML output
      const output = [];
      console.log("aaaaaaaaaaaaaa")
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What was the name of author F. Scott Fitzgerald's famous wife?",
        answers: {
          a: "Evelyn",
          b: "Sheila",
          c: "Diana",
          d: "Zelda"
        },
        correctAnswer: "d"
      },
      {
        question: "What flavor are the purple Skittles in Ireland?",
        answers: {
          a: "Grape",
          b: "Black currant",
          c: "Taro",
          d: "Plum"
        },
        correctAnswer: "b"
      },
      {
        question: "Which of the following is NOT in an egg cream?",
        answers: {
          a: "egg",
          b: "ice club soda",
          c: "chocolate syrup",
          d: "whole milk"
        },
        correctAnswer: "a"
      },
      {
        question: "What is a fungal disease that attacks corn?",
        answers: {
          a: "ringworm",
          b: "athletes foot",
          c: "cordyceps",
          d: "corn smut"
        },
        correctAnswer: "d"
      },
      {
        question: "Which of the following is an odd-toed ungulate?",
        answers: {
          a: "Walia Ibex",
          b: "European Bison",
          c: "Horse",
          d: "Four Horned Antelope"
        },
        correctAnswer: "c"
      },
      {
        question: "How many years are you celebrating at a semicentennial anniversary?",
        answers: {
          a: "125",
          b: "75",
          c: "150",
          d: "50"
        },
        correctAnswer: "d"
      },
      {
        question: "What is NaCl?",
        answers: {
          a: "sodium choride",
          b: "carbon monoxide",
          c: "ammonia",
          d: "carbonic acid"
        },
        correctAnswer: "a"
      },
      {
        question: "Besides a bloody surprise why would I be seeing red in a Black Forest cake?",
        answers: {
          a: "red sprinkles",
          b: "red frosting",
          c: "strawberries",
          d: "cherries"
        },
        correctAnswer: "d"
      },
      {
        question: "Which instrument is Kenny G best known for playing?",
        answers: {
          a: "bass",
          b: "saxophone",
          c: "piano",
          d: "drums"
        },
        correctAnswer: "b"
      },
      {
        question: "What do you call a group of alligators?",
        answers: {
          a: "a gang",
          b: "a flink",
          c: "a congregation",
          d: "a school"
        },
        correctAnswer: "c"
      }
    ];
  
    // Kick things off
    buildQuiz(quizContainer);
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  