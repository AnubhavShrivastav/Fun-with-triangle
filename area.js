const base = document.querySelector("#base");
const height = document.querySelector("#height");
const checkBtn = document.querySelector("#check").addEventListener('click',calculateArea);
const outputBox = document.querySelector("#output");

function calculateArea(){
  if(base.value,height.value){
    let area = (base.value * height.value)/2;
    outputBox.innerText = "The area of triangle is " + area + " cm²";
  }else{
    outputBox.innerText = "Please enter the value in both field";
}}


