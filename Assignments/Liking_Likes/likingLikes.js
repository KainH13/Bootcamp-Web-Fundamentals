

function increaseLikes(likes) {
    var likes = document.querySelector("#likes1").innerText
    likes++
    document.querySelector("#likes1").innerText = likes
    console.log(`Added 1 like for a total of ${likes}`)
}