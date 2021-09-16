function increaseLikes(likes) {
    var likeValue = document.querySelector(likes).innerText
    likeValue++
    document.querySelector(likes).innerText = likeValue
    console.log(`Added 1 like to ${likes} for a total of ${likeValue}`)
}