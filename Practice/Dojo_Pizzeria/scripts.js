function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}

    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeses = cheeses
    pizza.toppings = toppings

    return pizza
}

console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["peperoni", "sausage"]))
console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]))
console.log(pizzaOven("gluten free thin crust", "marinara", ["mozzarella", "goat"], ["mushrooms", "olives", "onions", "green peppers"]))
console.log(pizzaOven("gluten free thin crust", "marinara", ["mozzarella"], ["proscuitto", "arugala"]))

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomPizza() {
    options = {
        crust: ["deep dish", "thin crust", "gluten free thin crust"],
        sauce: ["marinara", "pesto"],
        cheese: ["mozzarella", "feta", "goat", "cheddar"],
        topping: ["mushrooms", "green peppers", "red peppers", "olives",
            "sausage", "peperoni", "arugala", "onions", "proscuitto"]
    }

    // Pick crust
    let crustType = []
    let choice = options.crust[randomNumber(0, options.crust.length - 1)]
    crustType.push(choice)
    console.log("Crust type: " + crustType)

    // Pick sauce
    let sauceType = []
    for (let i = 0; i < randomNumber(1, options.sauce.length); i++) {
        let choice = options.sauce[randomNumber(0, options.sauce.length - 1)]
        sauceType.push(choice)
    }
    console.log("Sauce type: " + sauceType)

    // Pick cheese
    let cheeseType = []
    for (let i = 0; i < randomNumber(1, options.cheese.length); i++) {
        let choice = options.cheese[randomNumber(0, options.cheese.length - 1)]
        cheeseType.push(choice)
    }
    console.log("Cheese type: " + cheeseType)

    // Pick topping
    let toppingType = []
    for (let i = 0; i < randomNumber(1, options.topping.length); i++) {
        let choice = options.topping[randomNumber(0, options.topping.length - 1)]
        toppingType.push(choice)
    }
    console.log("Topping type: " + toppingType)
}

randomPizza()