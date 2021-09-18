// load weather for city
function loadReport(element) {
    alert(`Loading weather for ${element.innerText}...`)
}

// hide cookie alert on accept
function hideCookie() {
    cookie = document.querySelector("#cookie")
    cookie.remove()
    console.log(`Removing element with id of ${cookie.id}`)
}

// convert temperature when selector is changed
function convertTemp(element) {
    console.log(element.value)
    let tempArray = document.querySelectorAll(".temp")

    for (let i = 0; i < tempArray.length; i++) {
        let tempElement = tempArray[i]
        let temp = tempElement.innerText.slice(0, -1)
        console.log(temp)

        if (element.value == "Fahrenheit") {
            temp = Math.round((temp * 1.8) + 32)
            console.log(`Converted to ${temp}° Fahrenheit`)   
        }
        else if (element.value == "Celcius") {
            temp = Math.round((temp - 32) * .5556)
            console.log(`Converted to ${temp}° Celcius`)
        }
        tempElement.innerText = `${temp}°`
    }
}