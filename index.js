
// Author: Bec Braughton
// Filename: inquirer-beckton\index.js
// Date: 9.25.17
//
// The program repeats the order back to the user, and asks 
// them if it is correct. If not, it apologizes for the inconvenience and 
// quits the program. If its correct, it says "It's on it's way!" and quits 
// the program.
//


// Instantiate the chalk and inquirer methods
const chalk = require('chalk')
var inquirer = require('inquirer');

// Question params
let questions = 
[   
    {
        type: "list",
        name: "deliveryORpickup",
        message: (chalk.blue("Is this order for Delivery or Pick-up?")),
        choices: ["Delivery", "Pick-up"],
        default: "Pick-up"

    },
    {
        type: 'input',
        name: "address",
        message: "Please enter your street address: ",
        when: ({deliveryORpickup}) => deliveryORpickup == "Delivery"
    },
    {
        type: "list",
        name: "sizeChoice",
        message: (chalk.blue("What size pizza?")),
        choices: ["S", "M", "L", "XL"],
        default: "L"
    },
    {
        type: "list",
        name: "crustChoice",
        message: (chalk.blue("What type of crust would you like?")),
        choices: ["Pan Pizza", "Hand Tossed", "Thin Crust", "Stuffed Crust", "Gluten Free"],
        default: "Hand Tossed"
    },
    {
        type: "confirm",
        name: "moreCheese",
        message: (chalk.blue("Extra Cheese?")),
        default: "y"
    },
    {
        type: "list",
        name: "sauceChoice",
        message: chalk.blue("What kind of sauce?"),
        choices: ["Marinara", "Garlic & Olive Oil", "Alfredo"],
        default: "Marinara"        
    },
    {
        type: "checkbox",
        name: "meatChoices",
        message: (chalk.blue("Which toppings?")),
        choices: ["Pepperoni", "Sausage", "Ham", ],
        default: "Cheese"        
    },
    {
        type: "checkbox",
        name: "otherChoices",
        message: (chalk.blue("Which toppings?")),
        choices: ["Feta Cheese", "Margarita", "Spinach", "Mushrooms", "Sun-Dried Tomatoes", "Onions", "Black Olives", "Pineapple", "Jalapenos"],
        default: "Cheese"        
    },
    {
        type: "list",
        name: "slicedHow",
        message: (chalk.blue("How do you want it cut?")),
        choices: ["Triangles", "Not Sliced", "Party Squares"],
        default: "Triangles"        
    },
]

// Confirmation params
let confirmations =
[   
    {
        type: 'confirm',
        name: "confirmOrder",
        message: (chalk.blue("\n\nIs your order correct? ")),
        default: "y",
     }
]

// Output the intro and instructions and then prompt
// questions and confirmation to complete their pizza order
console.log(
    // line 1
    (chalk.white("\n\n\t\t             ")), 
    (chalk.yellow(chalk.bgBlue("\\|\/"))),
    // line 2
    (chalk.white("\n\t\t             ")), 
    (chalk.yellow(chalk.bgBlue("AXA" + "\n"))), 
    // line 3
    (chalk.blue(chalk.bgYellow("\t\t Welcome to "))), 
    (chalk.yellow(chalk.bgBlue("/XXX\\"))), 
    (chalk.blue(chalk.bgYellow(" Pizza Co.\n"))), 
    // line 4
    (chalk.white("\t\t            ")),
    (chalk.yellow(chalk.bgBlue("\\XXX/"))), 
    // line 5
    (chalk.white("\n\t\t             ")), 
    (chalk.yellow(chalk.bgBlue("`^'\n\n"))), 
    // lines 6-9
    (chalk.yellow("\t    ")), (chalk.bgBlue("417-555-7777 | Park Central Square\n")),
    (chalk.yellow( "\n\n\tPlease fill out the check boxes to pick your \npizza and toppings,(Press <space> to select, <a> to toggle all," + 
                "\n\t<i> to inverse selection) to complete your order!\n\n"))
    )

// Begin program    
inquirer.prompt(questions).then(function (answers) 
{
    // Use user feedback for... whatever!!
    console.log(chalk.blue("Delivery or Pick-up: "), (chalk.green(answers.deliveryORpickup))),
    console.log(chalk.blue("Delivery Address: "), (chalk.yellow(answers.address)))
    console.log(chalk.blue("Size: "), (chalk.magenta(answers.sizeChoice))),
    console.log(chalk.blue("Size: "), (chalk.magenta(answers.crustChoice))),
    console.log(chalk.blue("Extra Cheese: "), (chalk.yellow(answers.moreCheese))),
    console.log(chalk.blue("Sauce: "), (chalk.red(answers.sauceChoice))),
    console.log(chalk.blue("Toppings: "), (chalk.green(answers.meatChoices))),   
    console.log(chalk.blue("Toppings: "), (chalk.green(answers.otherChoices))),
    console.log(chalk.blue("Sliced: "), (chalk.white(answers.slicedHow))),

    //confirm the order
    inquirer.prompt(confirmations).then(function(answers2)
    {
        // if/else statement to confirm order or end program so they 
        // can start again
        if (answers2.confirmOrder === true)
        {
            console.log("\n\nYour pizza will be ready in 30 minutes");
        }
        else
        {
            console.log("\n\nSorry for the mix-up. Let's try it again.");
        }
    })

});