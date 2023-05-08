let command = prompt("Welcome to notes! What would you like to do?");
const array = ["Buy Bananas", "Study tonight", "Don't panic" ];

while (command !== 'q' && command !== 'quit') {
    if (command === "list") {
        for (let i = 0; i < array.length; i++){
            console.log(i + (" ") +`${array[i]}`)
        }
    }
     else if (command === "add") {
        const newItem =  prompt(("okay, what do you want to add?"))
        if (newItem !== null && newItem !== "") {
            array.push(newItem)
            alert("okay, that's been added.")
        } 
    } else if (command === "delete") {
        for (let i = 0; i < array.length; i++){
            console.log(i + (" ") +`${array[i]}`)
        }
        index = parseInt(prompt("okay, what is the index of the item you wish to delete?"))
        array.splice(index)
        alert("Okay, that's been deleted.")
    }
    else {
        alert("Sorry I don't know what you want to do.");
    }
    command = prompt("what would you like to do?");
}