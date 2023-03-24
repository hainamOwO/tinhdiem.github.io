let score = document.getElementById("score");
let plus1 = document.getElementById("plus1");
let plus3 = document.getElementById("plus3");
let plus4 = document.getElementById("plus4");
let plus5 = document.getElementById("plus5");
let minus5 = document.getElementById("minus5");
let minus2 = document.getElementById("minus2");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3")
let reset = document.getElementById("reset")
let sum=0;

plus1.addEventListener('click',()=>{
  sum = sum+1;
  score.textContent = sum;
});

plus3.addEventListener('click',()=>{
  sum = sum+3;
  score.textContent = sum;
});

plus4.addEventListener('click',()=>{
  sum = sum+4;
  score.textContent = sum;
});

plus5.addEventListener('click',()=>{
  sum = sum+5;
  score.textContent = sum;
});

minus5.addEventListener('click',()=>{
  sum = sum-5;
  score.textContent = sum;
});

minus2.addEventListener('click',()=>{
  sum = sum-2;
  score.textContent = sum;
});

div2.addEventListener('click',()=>{
  sum = sum/2;
  score.textContent = sum;
});

div3.addEventListener('click',()=>{
  sum = sum/3;
  score.textContent = sum;
});

reset.addEventListener('click',()=>{
  sum=0;
  score.textContent = sum;
})