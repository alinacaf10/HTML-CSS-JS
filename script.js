let div=document.querySelector("div")
let p=document.querySelector("p")
let btn=document.createElement("button")
btn.innerText="JOKE!!!"
div.append(btn);
btn.focus()

btn.addEventListener("click", function(){
fetch("https://acb-api.algoritmika.org/api/transaction?from=AZER&to=ORXAN")
  .then(response => response.json())
  .then((data) => {
    p.innerText=Object.values(data[1])
    console.log(data)
  })})