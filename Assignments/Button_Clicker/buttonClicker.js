// Change text on login to logout when clicked
function changeText(element) {
    if (element.innerText == "login") {
        element.innerText = "logout"
    }
    else {
        element.innerText = "login"
    }
}

// Remove add definition button when it is clicked
function remove(element) {
    element.remove()
}

// Alert "Ninja was liked" when clicking a like button
function likeAlert() {
    alert("Ninja was liked");
}