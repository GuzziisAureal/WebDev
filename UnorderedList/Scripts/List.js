for(let i =1; i <= 3; i++){
    let liObj = document.createElement("li")
    document.getElementById("lista").appendChild(liObj)
    liObj.textContent = "Item "+i
}