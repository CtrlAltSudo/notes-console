let command = prompt("what would you like to do?");
const array = ["starter string", "another string"];

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
    }
    else {
        alert("Sorry I don't know what you want to do.");
    }
    command = prompt("what would you like to do?");
}