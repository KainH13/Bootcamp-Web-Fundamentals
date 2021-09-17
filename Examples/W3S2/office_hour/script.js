const content = document.getElementById("content")

// Chuck Norris Facts
async function getChuckNorrisJoke(num) {
    for(let i = 0; i<num; i++){
        var response = await fetch("https://api.chucknorris.io/jokes/random")
        var coderData = await response.json()
        let div = document.createElement('div')
        div.innerHTML = (`
            <div class="joke">
                <img src="${coderData.icon_url}">
                <p>${coderData.value}</p>
            </div>
        `)
        content.appendChild(div)
    }
}

// getChuckNorrisJoke()
function doThingOne(){
    return
}

function doThingTwo(){
    return
}

function multiFunctionButton(x,y){
    doThingOne(x)
    doThingTwo(y)
}

multiFunctionButton("mermaids", "bigfoot")


// document.querySelector('h1').remove()
















































































































































































































































// Players

const jessica = {
    name: "Jessica",
    race: "Elf",
    weapon: "bow",
    power: "negotiation",
}

const davie = {
    name: "Davie",
    race: "Red-Neck",
    weapon: "shotgun",
    power: "immortality",
}

const chad = {
    name: "Chad",
    race: "White Collar",
    weapon: "pen",
    power: "litigation",
}

const grok = {
    name: "Grok",
    race: "Ork",
    weapon: "The last guy's skull.",
    power: "Bull like strength"
}

const rossie = {
    name: "Rossi",
    race: "Moto GP Racer",
    weapon: "Ducati Panigale",
    power: "Reflexes of lightening"
}

const gamePlayers = [jessica, davie, chad, grok, rossie]

// for(let i = gamePlayers.length-1; i >= 0; i--){
//     content.innerHTML += (`
//     <div class='player'>
//         <h2>${gamePlayers[i].name}</h2>
//         <p>Race: ${gamePlayers[i].race}</p>
//         <p>Weapon: ${gamePlayers[i].weapon}</p>
//         <p>Power: ${gamePlayers[i].power}</p>
//     </div>
//     `)
// }

// for(let i = 0; i < gamePlayers.length; i++){
//     content.innerHTML = (`
//     <div class='player'>
//         <h2>${gamePlayers[i].name}</h2>
//         <p>Race: ${gamePlayers[i].race}</p>
//         <p>Weapon: ${gamePlayers[i].weapon}</p>
//         <p>Power: ${gamePlayers[i].power}</p>
//     </div>
//     ${content.innerHTML}
//     `)
// }

