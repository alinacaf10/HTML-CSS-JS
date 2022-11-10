let div=document.querySelector("div")
let p=document.querySelector("p")
let btn=document.createElement("button")
btn.innerText="JOKE!!!"
div.append(btn);
btn.focus()

btn.addEventListener("click", function(){
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then((data) => {
    p.innerText=(data.value);
  })})