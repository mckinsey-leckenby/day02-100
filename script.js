// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
// const generate = document.querySelector
const btn = document.querySelector(".generate")
const num = document.querySelector(".number")


function generateNum(){
  const randNum = Math.floor(Math.random() * 10 + 1)
   num.innerHTML = randNum 
}

btn.addEventListener("click", generateNum)



