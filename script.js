const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultForm = document.getElementById('form-result');

let countRightAnswers = 0; //1. let's count the right answers
let shuffledQuestions, currentQuestionIndex;
let currentQuestion = 1;


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
  document.getElementById('answer-buttons').classList.remove('no-click'); 

  currentQuestionIndex++; 
  setNextQuestion();

  currentQuestion++; 
  document.getElementById('current-question').innerHTML = currentQuestion;
})


function startGame() {
  console.log('started');

  document.getElementById('answer-buttons').classList.remove('no-click'); 

  startButton.classList.add('hide');
  resultForm.classList.add('hide');

  shuffledQuestions = questions.sort (() => Math.random() - 0.5) 
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();

  currentQuestion = 1;
  document.getElementById('current-question').innerHTML = currentQuestion;

  //3.  reset the counter after the test started 
  countRightAnswers = 0;

  document.getElementById('all-questions2').innerHTML = questions.length;
  document.getElementById('all-questions').innerHTML = questions.length; 
}


function setNextQuestion() {
  resetState(); 
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question; 
  question.answers.forEach(answer => {
    const button = document.createElement('button'); 
    button.innerText = answer.text;  
    button.classList.add('btn'); 
    if (answer.correct){ 
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button); 
  });
}


function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    alert('This is the last question...Checking answers');
    resultForm.classList.remove('hide');
    questionContainerElement.classList.add('hide');

    startButton.innerText = 'Try again'; 
    startButton.classList.remove('hide'); 
  }


  //2. if the answer is correct
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
  }

  //5. to show the score inside <span>
  document.getElementById('right-answers').innerHTML = countRightAnswers; 
  document.getElementById('answers-percent').innerHTML = ((100 * countRightAnswers)/questions.length).toFixed(0);
  //prevent multiclicking 
  document.getElementById('answer-buttons').classList.add('no-click'); 
}


function setStatusClass(element, correct) { 
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong')
  }
}


function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}


const questions = [
  {
    question: 'A system of interconnected computers and computerized peripherals',
    answers: [
      { text: 'LAN Cable', correct: false },
      { text: 'Computer Lab', correct: false },
      { text: 'Web server', correct: false },
      { text: 'Computer Networks', correct: true },
    ]
  },

    {
    question: 'The physical media over which communication takes place in computer networks. A computer network spanned inside a building and operated under single administrative system',
    answers: [
      { text: 'Social Media', correct: false },
      { text: 'Transmission Media', correct: true },
      { text: 'TV Media', correct: false },
      { text: 'All of the above', correct: false },
    ]
  },

  {
    question: 'The cable that is made of two plastic insulated copper wires twisted together to form a single media',
    answers: [
      { text: 'Twisted Fate', correct: false },
      { text: 'Twisted Cable', correct: false },
      { text: 'Coaxial Cable', correct: false },
      { text: 'Twisted Pair Cable', correct: true },
    ]
  },

  {
    question: 'A network structure whose design contains more than one topology',
    answers: [
      { text: 'Star Topology', correct: false },
      { text: 'Bus Topology', correct: false },
      { text: 'Daisy Chain', correct: false },
      { text: 'Hybrid Topology', correct: true },
    ]
  },

  {
    question: 'WWW means',
    answers: [
      { text: 'World World World', correct: false },
      { text: 'World Wide World', correct: false },
      { text: 'Hello World', correct: false },
      { text: 'World Wide Web', correct: true },
    ]
  },

  {
    question: 'PHP stands for',
    answers: [
      { text: 'Practice, practice, practice', correct: false },
      { text: 'Pahinging Lumpia', correct: false },
      { text: 'Pass, next question!', correct: false },
      { text: 'Hypertext Preprocessor', correct: true },
    ]
  },

  {
    question: 'HTML stands for',
    answers: [
      { text: 'How to make Lumpia', correct: false },
      { text: 'Haha I dunno', correct: false },
      { text: 'Basta naturo sa amin yun e', correct: false },
      { text: 'Hypertext Markup Language', correct: true },
    ]
  },

  {
    question: '1+1=?',
    answers: [
      { text: '2', correct: true },
      { text: '3', correct: false },
      { text: '4', correct: false },
      { text: '11', correct: false },
    ]
  },


  {
    question: 'It is showing how the data is processed at different stages.',
    answers: [
      { text: 'Composition model', correct: false },
      { text: 'Data processing model', correct: true },
      { text: 'Architectural model', correct: false },
      { text: 'Classification model', correct: false },
    ]
  },

  {
    question: 'Papasa ba ako this sem?',
    answers: [
      { text: 'Ewan', correct: false },
      { text: 'Siguro', correct: false },
      { text: 'Maybe', correct: false },
      { text: 'Tanong mo kay Maam', correct: true },
    ]
  },

  
]


