
let div=document.querySelectorAll("div")
let btn=document.createElement('BUTTON')
btn.innerHTML+="button"
div[0].append(btn)

function changebtnName(event){
    event.target.innerText="Click"
}
btn.addEventListener("click",changebtnName)


