let form = document.getElementById("loginForm")

form.addEventListener("submit", (event) => {
    
    event.preventDefault()

    let username = document.querySelector("#username")

    let usernameValue = username.value

    let errorMsgElem = document.querySelector("#errorMsg")

    let isValid = true

    if (usernameValue.length < 3 || usernameValue.length > 20)  {
        isValid = false
    }

    for (let char of usernameValue) {
        if(!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))){
            isValid = false
            break
        }
    }
    if(!isValid) {
        //alert("Invalid username")
        username.focus()
        username.value = ""
        errorMsgElem.style.display = "block"
    } else {
        errorMsgElem.style.display = "none"
        sessionStorage.setItem('usern', username)
        window.location.href = "PrivateArea.html"
        //alert("Session started.")
        //document.body.innerHTML = "<h1>Welcome, " + usernameValue + "</h1>"
    }

})