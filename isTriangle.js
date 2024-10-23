const input = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#submit-btn').addEventListener('click',sumOfAngles)
const output = document.querySelector('#output');

hideMessage()

function sumOfAngles(){


const angle1 = Number(input[0].value);
const angle2 = Number(input[1].value);
const angle3 = Number(input[2].value)

if(angle1,angle2,angle3){
let addInput  = angle1 + angle2 + angle3;

 if (addInput == 180){
  output.style.display = "block";
  output.innerText = "Yay,The angle form a triangle."; 
 }else{
  output.style.display = "block";
  output.innerText = "Oh Oh! the angles don't form a triangle."; 
}
}else{
  output.style.display = "block";
  output.innerText = "Please enter the value in all field";
}

}

function hideMessage(){
  output.style.display = "none";
} 