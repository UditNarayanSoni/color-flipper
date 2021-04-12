// Below color will work with any color value:
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  // get Random Number between (0 - 3): 
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = color[randomNumber];
  color.textContent = color[randomNumber];
});

function getRandomNumber(){
  // getting unique number within colors.length:
  return Math.floor(Math.random() * colors.length);
}