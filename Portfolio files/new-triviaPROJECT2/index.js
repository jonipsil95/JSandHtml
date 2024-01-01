'use strict'

const questions = [
  /*
  {
    question: 'שאלון הטריויה שיסעיר אתכם! מוכנים להתחיל?',
    answer: ['חד מש', 'לגמרי', 'כן', 'אם אין ברירה, אז בסדר..'],
    correctAnswer: ['חד מש', 'לגמרי', 'כן', 'אם אין ברירה, אז בסדר..']
  },
  */
  {
    question: 'מה מהבאים אינו מוצר ישראלי?',
    answer: ['גולות','טילון','במבה','טאקי'],
    correctAnswer: 'גולות'
  },
  {
    question: 'מי מהבאים לא היה ראש ממשלת ישראל?',
    answer: ['אהוד אולמרט', 'בני גנץ','יאיר לפיד','ישראל בנט'],
    correctAnswer: 'בני גנץ'
  },
  {
    question: 'אילו מהמדינות הבאות אינה נמצאת ביבשת אירופה?',
    answer: ['אוסטרה', 'גאנה', 'סרביה', 'בלגיה'],
    correctAnswer: 'גאנה'
  },
  {
    question: 'מי מהמאמנים לא לקח אליפות עם מכבי חיפה?',
    answer: ['אליניב ברדה', 'אריק בנאדו', 'ברק בכר', 'רוני לוי'],
    correctAnswer: 'אליניב ברדה'
  },
  {
    question: 'מהו המאכל הלאומי שתוכל למצוא בקרבת הקוליסאום?',
    answer: ['פאד תאי', 'סושי', 'ניוקי', 'מק אנד ציז'],
    correctAnswer: 'ניוקי'
  },
  {
    question: 'מהו הגיל החוקי להוצאת רישיון נהיגה בישראל?',
    answer: ['21', '16.9', '16 וחצי', '17'],
    correctAnswer: '16.9'
  }
];

let score = 0;
let currentQuestionIndex = 0;

const elmProgress = document.querySelector('#questionNum');
const elmScore = document.querySelector('#totalScore');
const elmQuestion = document.querySelector('#question');
const elmAnswers = document.querySelector('#answers');

function userChoose(answerButton) {

  const answer = answerButton.innerText;

  // 1. is the answer correct ? if yes: add 10 points to score
  if (answer === questions[currentQuestionIndex].correctAnswer) {
    score += 10;
  }

  // 2. advance one question (currentQuestionIndex++)
  currentQuestionIndex++;

  // 3. get rid of previous answer elements
  elmAnswers.innerHTML = '';

  // 4. update the UI (html)
  updateDisplay();
}

function updateDisplay() {

  elmScore.innerText = `${score} נקודות`;
  const answerElementsArray = document.querySelectorAll('.answer');

  // is game over ?
  if (questions.length === currentQuestionIndex) {
    elmProgress.innerText = `שאלה ${currentQuestionIndex} מתוך ${questions.length}`;
    elmQuestion.innerHTML = 
    `
      המשחק הסתיים
      </br></br>
      צברת ${score} נקודות
      </br>
      מתוך סך הכל ${questions.length*10} אפשריות
    `;
    for (let i=0; i<answerElementsArray.length; i++) {
      answerElementsArray[i].remove();
    };
    return;
  }

  elmProgress.innerText = `שאלה ${currentQuestionIndex+1} מתוך ${questions.length}`;

  elmQuestion.innerText = questions[currentQuestionIndex].question;

  // create answer elements ...
  const numberOfAnswers = questions[currentQuestionIndex].answer.length

  for (let i=0; i<numberOfAnswers; i++) {
    const answerElement = document.createElement('button');
    answerElement.classList.add('answer');
    answerElement.onclick = function() {userChoose(this)};
    answerElement.innerText = questions[currentQuestionIndex].answer[i]
    elmAnswers.appendChild(answerElement);
  };

}

updateDisplay();