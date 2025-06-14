const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let divEl = document.getElementById("container-genpass")
let counter = 0

function reset(){
    let elements = document.querySelectorAll(".pass-box")
    elements.forEach(el => el.remove())
    divEl.classList.add("hidden")
}

function generatePassword(){
    var passString = ""
    divEl.classList.remove("hidden")
    var pEl = document.createElement("button")
    for(let i = 0; i < 15; i++){
        let randNo = Math.floor(Math.random() * characters.length)
        passString += characters[randNo]
        
    }
    pEl.appendChild(document.createTextNode(passString))
    pEl.classList.add("pass-box")
    pEl.addEventListener('click', async(e) => {
        const clickedButtonText = e.target.innerText
        try{
            await navigator.clipboard.writeText(clickedButtonText)

            alert("Copied to clipboard!")
        } catch (err){
            console.error("Failed to copy", err)
        }
        
    })
    divEl.appendChild(pEl)
    console.log(password)
}

