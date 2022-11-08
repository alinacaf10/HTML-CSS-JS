let first=Number(prompt("Add first Number"))
let sec=Number(prompt("Add second Num"))
let div=document.querySelector("div")
let conf=confirm("Do you multiple this numbers")

if(conf==true){
div.innerText=(first+sec)
}
else{
div.innerText=("First number: "+first+"\n"+"Second number: "+sec)
}
