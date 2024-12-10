let listaElements = document.getElementById("lista-elements")
let elementsLi = listaElements.getElementsByTagName("li")

for(let i = 0; i < elementsLi.length; i++){
    elementsLi[i].classList.add("evidenziato")
}