// Remove connection requests when either button is clicked and reduce nofication number accordingly
function removeRequest(element, requestID) {
    console.log(element.alt)
    var div = document.querySelector(requestID)

    div.remove() 
    console.log(`element with id ${requestID} was removed from connection requests`)

    var notificationElement = document.querySelector("#connection-notifications")
    var notifications = document.querySelector("#connection-notifications").innerText

    if (notifications > 1) {
        notifications--
        document.querySelector("#connection-notifications").innerText = notifications
    }
    else {
        notificationElement.remove()
    }

    var connection_number = document.querySelector("#connections").innerText

    if (element.alt == "Accept icon") {
        connection_number++
        document.querySelector("#connections").innerText = connection_number
    }
}

// Replace name with user input
function editName() {
    var newName = prompt("Please enter your name", "Type here")
    document.querySelector("#profile-name").innerText = newName
}
