const quizForm = document.querySelector(".quiz-form")
const submitBtn = document.querySelector('#Submit-btn').addEventListener('click',calculateScore)
const outputBox = document.querySelector('#output')


const correctAnswer = ["90°","right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;

    const formData = new FormData(quizForm);

    for(let value of formData.values()){
       if(value == correctAnswer[index]){
       score+=1
    }
       index+=1;
    }
    outputBox.style.display = "block";
    outputBox.innerText = `your score is ${score}`;
}
     
