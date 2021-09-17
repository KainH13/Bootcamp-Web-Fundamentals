let people = [
    {name: "Bob",
    height: 5.8,
    gender: "male",
    money: 100,
    age:24,
    },
    {name: "Stacy",
    height: 5,
    gender: "female",
    money: 10,
    age:30,
    },
    {name: "Jessica",
    height: 4.6,
    gender: "female",
    money: 90,
    age:52,
    },
    {name: "Billy",
    height: 6.1,
    gender: "male",
    money: 120,
    age:43,
    },
    {name: "Davey",
    height: 5.9,
    gender: "male",
    money: 50,
    age:19,
    },
    {name: "Heather",
    height: 5,
    gender: "female",
    money: 10,
    age:46,
    },
    {name: "Jennie",
    height: 5.1,
    gender: "female",
    money: 40,
    age:18,
    },
    {name: "Sara",
    height: 5.2,
    gender: "female",
    money: 80,
    age:35,
    },
    {name: "David",
    height: 5.6,
    gender: "male",
    money: 35,
    age:28,
    },
]

let container = document.getElementById("people")
for (let i = 0; i<people.length; i++){
    let person = people[i]
    container.innerHTML += (`
        <div class="person">
            <h3>${person.name}</h3>
            <p>Height: ${person.height}</p>
            <p>Gender: ${person.gender}</p>
            <p>Age: ${person.age}</P>
            <p>Money: ${person.money}</p>
        </div>
    `)
}

// function refinePeople(event){
//     event.preventDefault()
//     let minHeight = document.getElementById('minHeight').value
//     let maxHeight = document.getElementById('maxHeight').value
//     let minAge = document.getElementById('minAge').value
//     let maxAge = document.getElementById('maxAge').value
//     console.log(maxAge > 0)
//     container.innerHTML = ""
//     for (let i = 0; i<people.length; i++){
//         let person = people[i]
//         if(minAge > 0 && person.age < minAge){continue}
//         if(maxAge > 0 && person.age > maxAge){continue}
//         if(minHeight > 0 && person.height < minHeight){continue}
//         if(maxHeight > 0 && person.height > maxHeight){continue}
//         container.innerHTML += (`
//             <div class="person">
//                 <h3>${person.name}</h3>
//                 <p>Height: ${person.height}</p>
//                 <p>Gender: ${person.gender}</p>
//                 <p>Age: ${person.age}</P>
//                 <p>Money: ${person.money}</p>
//             </div>
//         `)
//     }
// }

function refinePeople(event){
    event.preventDefault()
    let minMoney = document.getElementById('minMoney').value
    let minHeight = document.getElementById('minHeight').value
    let maxHeight = document.getElementById('maxHeight').value
    let minAge = document.getElementById('minAge').value
    let maxAge = document.getElementById('maxAge').value
    console.log(minMoney > 0)
    container.innerHTML = ""
    for (let i = 0; i<people.length; i++){
        let person = people[i]
        if(minAge > 0 && person.age < minAge){continue}
        if(maxAge > 0 && person.age > maxAge){continue}
        if(minHeight > 0 && person.height < minHeight){continue}
        if(maxHeight > 0 && person.height > maxHeight){continue}
        if(minMoney > 0 && person.money < minMoney){continue}
        container.innerHTML += (`
            <div class="person">
                <h3>${person.name}</h3>
                <p>Height: ${person.height}</p>
                <p>Gender: ${person.gender}</p>
                <p>Age: ${person.age}</P>
                <p>Money: ${person.money}</p>
            </div>
        `)
    }
}














// for(let i = 0; i < fizzy.length; i++){
//     if(fizzy[i] % 3 == 0 ){
//         console.log("divisible by three", fizzy[i])
//     } else {
//         console.log("not divisible by three", fizzy[i])
//     }
// }

// let groupOfNums = [123, 3, 150, 80, 50, 12, 45, 65, 0, 75, 90, 60]
// If number is divisible by five console log fizz
// If number is divisible by ten console log buzz
// If number is divisible by twenty console log fizzBuzz

// let fizzy = [5, 6, 3, 90, 15, 10, 20, 45, 4]

// for(let i = 0; i < fizzy.length; i++){
//     if(fizzy[i] % 2 == 0 || fizzy[i] % 3 == 0){
//         console.log("divisible by three or two")
//     } else {
//         console.log(fizzy[i])
//     }
// }

// for(let i = 0; i < groupOfNums.length; i++){
//     if(groupOfNums[i] % 20 == 0 ){
//         console.log("fizzBuzz")
//     }
//     else if(groupOfNums[i] % 10 == 0 ){
//         console.log("buzz")
//     }
//     else if(groupOfNums[i] % 5 == 0 ){
//         console.log("fizz")
//     }
//     else {
//         console.log(groupOfNums[i])
//     }
// }




// for(let i = 0; i < groupOfNums.length; i++){
//     console.log(groupOfNums[i])
// }

// let i = 0

// while(i<5){
//     console.log(i)
//     i++
// }
// console.log("final value ", i)