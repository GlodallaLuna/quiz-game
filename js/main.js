let questionArray = [{
    question: "How many hearts does an octopus have?",
    optionOne: "One",
    optionTwo: "Three",
    optionThree: "Five",
    correctAnswer: 2
  },

  {
    question: "What is the hottest planet in the solar system (460 °C)?",
    optionOne: "Mercury",
    optionTwo: "Mars",
    optionThree: "Venus",
    correctAnswer: 3
  },

  {
    question: "Which artist is considered the pioneer of abstract art?",
    optionOne: "Pablo Picasso",
    optionTwo: "Wassily Kandinsky",
    optionThree: "Jackson Pollock",
    correctAnswer: 2
  },

  {
    question: "What was the name of the research ship Charles Darwin traveled on?",
    optionOne: "The Beagle",
    optionTwo: "The Penguin",
    optionThree: "The Dolphin",
    correctAnswer: 1
  },

  {
    question: "The Incan Empire is located in which modern-day country?",
    optionOne: "Peru",
    optionTwo: "Mexico",
    optionThree: "Chile",
    correctAnswer: 1
  },

  {
    question: "Claude Monet is most known for his paintings of what?",
    optionOne: "Sunflowers",
    optionTwo: "Water lilies",
    optionThree: "Tulips",
    correctAnswer: 2
  },

  {
    question: "About how old is the Earth?",
    optionOne: "3 billion years",
    optionTwo: "4.5 billion years",
    optionThree: "5 billion years",
    correctAnswer: 2
  },

  {
    question: "What is the calm centre of a hurricane called?",
    optionOne: "Mouth",
    optionTwo: "Eye",
    optionThree: "Heart",
    correctAnswer: 2
  },

  {
    question: "Optics is the study of what?",
    optionOne: "Ligth",
    optionTwo: "Human Eye",
    optionThree: "Clouds",
    correctAnswer: 1
  },

  {
    question: "What type of animal was Dolly, the first ever clone?",
    optionOne: "Dog",
    optionTwo: "Monkey",
    optionThree: "Sheep",
    correctAnswer: 3
  },

  {
    question: "Which one of these countries doesn't have a monarchy?",
    optionOne: "Norway",
    optionTwo: "Thailand",
    optionThree: "Switzerland",
    correctAnswer: 3
  },

  {
    question: "Which famous actress was also known to be the 'Mother of Wi-fi'?",
    optionOne: "Hedy Lamarr",
    optionTwo: "Lauren Bacall",
    optionThree: "Marlene Dietrich",
    correctAnswer: 1
  },

  {
    question: "Which famous scientist invented the cat flap?",
    optionOne: "Galileo Galilei",
    optionTwo: "Isaac Newton",
    optionThree: "Albert Einstein",
    correctAnswer: 2
  },

  {
    question: "Which one of these animals is a programming language?",
    optionOne: "Koala",
    optionTwo: "Panda",
    optionThree: "Python",
    correctAnswer: 3
  },

  {
    question: "Which Chinese province is famous for its spicy food?",
    optionOne: "Sichuan",
    optionTwo: "Shanghai",
    optionThree: "Guang Dong",
    correctAnswer: 1
  },

  {
    question: "In Snooker what is the highest possible break?",
    optionOne: "137",
    optionTwo: "147",
    optionThree: "157",
    correctAnswer: 2
  },

  {
    question: "Which city was the Italian author Dante Alighieri From?",
    optionOne: "Florence",
    optionTwo: "Venice",
    optionThree: "Rome",
    correctAnswer: 1
  },

  {
    question: "What was Coco Chanel real name?",
    optionOne: "Marie Bourgeois",
    optionTwo: "Lucile Dupin",
    optionThree: "Gabrielle Bonheur",
    correctAnswer: 3
  },

  {
    question: "What is a group of crows called?",
    optionOne: "Pack",
    optionTwo: "Murder",
    optionThree: "Flock",
    correctAnswer: 2
  },

  {
    question: "Which country did chess come from?",
    optionOne: "India",
    optionTwo: "China",
    optionThree: "Russia",
    correctAnswer: 1
  }
];




// counter variables starting from 0
let scorePoints = 0;
let numberOfQuestions = 0;

const MAX_QUESTIONS = 12;

//empity array where to store the used questions
let usedQuestions = [];

//variable for when none of the answers is selected at the beginning
let answered = false;


setUpGame()

/*to select the continue button */
let continueButton = document.querySelector(".btn--continue")



/* FUNCTION TO SET UP THE GAME */

function setUpGame() {

  answered = false;


  /* variables to set a random question in the html */
  let randomIndex;
  let usedQuestion

  while(true) {
    //to generate  a random index
    randomIndex = Math.floor(Math.random() * questionArray.length);
    usedQuestion = usedQuestions.includes(randomIndex)
    //if the question is already in the array
    if(usedQuestion) {
      //this start the loop again
      //because we want to generate another question
      continue
    } else {
      //this is when the question wasn't in the array(aka new one)
      //so we want to exit the loop
      break
    }
  }


    /*to push inside the empty array all the used questions */
    usedQuestions.push(randomIndex);


  let question = questionArray[randomIndex].question;
  let optionOne = questionArray[randomIndex].optionOne;
  let optionTwo = questionArray[randomIndex].optionTwo;
  let optionThree = questionArray[randomIndex].optionThree;
  let correctAnswer = questionArray[randomIndex].correctAnswer;



  // This is the array index for the correct option in optionElements
  let correctAnswerIndex = correctAnswer - 1

  //QUESTIONS
  /*using the variables we created above in the html for the question and the options*/
  let questions = ` <h2 class="question__title">${question}</h2>
                    <p class="question__text first"><span class="letter"> a.</span> <span>${optionOne} </span></p>
                    <p class="question__text second"><span class="letter">b.</span> <span >${optionTwo}</span></p>
                    <p class="question__text third"><span class="letter">c.</span> <span >${optionThree}</span></p>`;

  /* to put the html above in question.html (questions) */
  let questionContainer = document.querySelector(".container");
  questionContainer.innerHTML = questions;

  /*to selet all the option elements from the html above (array of elements)*/
  let optionElements = document.querySelectorAll(".question__text");



  //COUNTER
  /*html for the counter */
  let infos = `<p class="question-number">${numberOfQuestions} of ${MAX_QUESTIONS}</p>
               <p class="score-number">Score: ${scorePoints}</p>`


  /* to put the html above in question.html (counter) */
  let boxInfos = document.querySelector(".counter")
  boxInfos.innerHTML = infos;



  /*going through the html array to check if the answer is correct or not */
  optionElements.forEach((element, index) => {

    element.addEventListener('click', () => {
      if (!answered) {
        if (index === correctAnswerIndex) {
          element.classList.add("correct");
          scorePoints += 1

        } else {
          element.classList.add("wrong");
          optionElements[correctAnswerIndex].classList.add("show-correct")
        }
        numberOfQuestions += 1;
        infos = `<p class="question-number">${numberOfQuestions} of ${MAX_QUESTIONS}</p>
                 <p class="score-number">Score: ${scorePoints}</p>`
        boxInfos.innerHTML = infos;


        answered = true;
      }


      //Show continue button
      continueButton.classList.add("show-btn")
      
    })


  });



}




/*add event listener to the continue button */
continueButton.addEventListener("click", () => {
  if (numberOfQuestions === MAX_QUESTIONS) {
    //Save score 
    sessionStorage.setItem("score", scorePoints)

    window.location.href = "score.html"
  } else {
    continueButton.classList.remove("show-btn")
    setUpGame();
  }
  
})