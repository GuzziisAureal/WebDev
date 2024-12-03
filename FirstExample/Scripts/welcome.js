alert("Welcome!")

let username=prompt("Tell me your name: ")

if(username !== ""){
    alert("Hello " + username+"!")
    document.getElementById("username").innerHTML = "Hello, "+username+"!"
    //document.getElementsByClassName
    let newPar = document.createElement("p")
    document.body.appendChild(newPar)
    newPar.textContent = "You are my user!"
}
else{
    document.getElementById("username").innerHTML = "You are a stranger, go away!"
}

/*let i =0
while(i<3){
    document.getElementById("counter").textContent = i+" "
    i++
}
//let val = prompt("Give ya boy a number: ", 0)*/