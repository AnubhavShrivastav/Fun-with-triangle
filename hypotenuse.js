const inputA = document.querySelector('.input-value-A');
const inputB = document.querySelector('.input-value-B');
const submit = document.querySelector('#check').addEventListener('click',calculateHypotenuse);
const outputBox = document.querySelector('#output');

function calculateHypotenuse(){
    if(inputA.value,inputB.value){
    let length1 = inputA.value ** 2;
    let length2 = inputB.value ** 2;
    let hypotenuseLength = Math.sqrt(length1 + length2);
    outputBox.innerText = "The length of a hypotenuse is " + hypotenuseLength + " cm";
}else{
    outputBox.innerText = "Please enter the value in both field";
}
}
