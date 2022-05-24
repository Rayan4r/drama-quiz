const Rayanr1 = document.getElementById('start-btn');
const Rayanr2 = document.getElementById('questionandanswer-container');
const Rayanr3 = document.getElementById('question');
const Rayanr4 = document.getElementById('answer-btn');
const Rayanr7 = document.getElementById('next-btn');
const Rayanr13 = document.getElementById('exit-btn');
const Rayanr14 = document.getElementById('RRayan');

// let AQuestion, BQuestionIndex
let Rayanr9

Rayanr1.addEventListener('click', startGame)
Rayanr7.addEventListener('click', () => {
    BQuestionIndex++
    setNextQuestion() 
})

Rayanr13.onclick = function() {
    Rayanr2.classList.add('hide')
    Rayanr13.classList.add('hide')
    Rayanr1.classList.add('hide')
    Rayanr14.classList.remove('RRayan')
}

function startGame() {
  Rayanr1.classList.add('hide');
  Rayanr13.classList.add('hide')
  Rayanr9 = questions
  BQuestionIndex = 0
  Rayanr2.classList.remove('hide');
  setNextQuestion()
}
function setNextQuestion()  {
    resetState()
    showQuestion(Rayanr9[BQuestionIndex])
}

function showQuestion(Rayanr11) {
    Rayanr3.innerText = Rayanr11.question
    Rayanr11.answers.forEach(answer => {
        const Rayanr5 = document.createElement('button')
        Rayanr5.innerText = answer.text
        Rayanr5.classList.add('btn')
        if (answer.correct) {
            Rayanr5.dataset.correct = answer.correct
         }
        Rayanr5.addEventListener('click', selectAnswer)
        Rayanr4.appendChild(Rayanr5)
    })
}
function resetState() {
    clearStatusClass(document.body)
    Rayanr7.classList.add('hide')
    while (Rayanr4.firstChild) {
        Rayanr4.removeChild
        (Rayanr4.firstChild)
}
}
function selectAnswer(Rayanr12) {
    const Rayanr6 = Rayanr12.target
    const correct = Rayanr6.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(Rayanr4.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if  (Rayanr9.length > BQuestionIndex + 1) {
        Rayanr7.classList.remove('hide')
}  else {
    Rayanr1.innerText = "Restart quiz"
    Rayanr1.classList.remove('hide') 
    Rayanr13.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: "1- Medieval period covered the religious and gave _______ to it's audience ",
        answers: [
            { text: 'jokes', correct: false },
            { text: 'morals', correct: true },
            { text: 'miracle play', correct: false },
            { text: 'morality play', correct: false }
        ]
    },
    {
        question: '2- _______ is one of the erliest form of play that developed in europe',
        answers: [
            {text: 'myestery play', correct: true },
            {text: 'miracle play', correct: false },
            {text: 'farce', correct: false},
            {text: 'morality play', correct: false}
        ]
    },
    {
        question: '3- These plays were usually short and had elements of farce ',
        answers: [
            { text: 'mystery play', correct: false },
            { text: 'miracle play', correct: false },
            {text: 'farce', correct: false},
            {text: 'morality play', correct: true}
        ]
    },
    {
        question: '4- Secular groups such as Trade Guilds were also known as _______',
        answers: [
            { text: 'comfraternities', correct: true },
            { text: 'humanism', correct: false },
            {text: 'entertaiment', correct: false},
            {text: 'none of them', correct: false}
        ]
    },
    {
        question: '5- ______ is the action of providing with enjoyment such as religious festivals ',
        answers: [
            { text: 'comfraternities', correct: false },
            { text: 'Bibical', correct: false },
            {text: 'farce', correct: false},
            {text: 'entertaiment', correct: true}
        ]
    },
    {
        question: '6- ______ is a philosophy that focus on human interests and needs ',
        answers: [
            { text: 'comfraternities', correct: false },
            { text: 'humanism', correct: true },
            {text: 'farce', correct: false},
            {text: 'entertaiment', correct: false}
        ]
    },

        {
            question: '7- English Renaissance theatre begin with the opening of _______ ',
            answers: [
                { text: 'Humors', correct: false },
                { text: 'tragedy', correct: false },
                {text: 'the red lion', correct: true},
                {text: 'none of them', correct: false}
            ]
        },
        {
            question: '8- In ______ the first theatre was opened called The Theatre ',
            answers: [
                { text: '1576', correct: false },
                { text: '1576', correct: true },
                {text: '1675', correct: false},
                {text: '1657', correct: false}
            ]
        },
        {
            question: '9- After 1642 a new style of drama rose up in restoration area called _______ ',
            answers: [
                { text: 'sinful drama', correct: false },
                { text: 'immoral drama', correct: false },
                {text: 'comedy drama', correct: false},
                {text: 'restoration drama', correct: true}
            ]
        },
        {
            question: "10- Elizabithan era is considred as a golden age because of it's _______ ",
            answers: [
                { text: 'famous works', correct: true },
                { text: 'tragedy', correct: false },
                {text: 'comedy', correct: false},
                {text: 'supernatural', correct: false}
            ]
        },
   ]

