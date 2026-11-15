const layout = [
    "Q","W","E","R","T","Y","U","I","O","P",
    "A","S","D","F","G","H","J","K","L",
    "Z","X","C","V","B","N","M",
    "BACKSPACE", "CONFIRM"
];

let keyboardElement = document.getElementById("keyboard")

function drawKeyboard() {
    for (let i = 0; i < layout.length; i++) {
        const btn = document.createElement("button")
        const btnValue = layout[i];
        btn.value = btnValue
        btn.textContent = btnValue
        keyboardElement.appendChild(btn)

        btn.addEventListener("click", function(e) {
           handleKey(btnValue)
        })

        
        
    }
}

drawKeyboard()