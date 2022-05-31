const playButton = document.getElementById("playButon");
const cardContainer = document.querySelector(".row");
let mainArray = [];
function createGrid(livelloDifficoltà) {
    cardContainer.innerHTML = ""

    for (let i = 0; i < livelloDifficoltà; i++) {
        let x = document.createElement("div")
        let y = document.createElement("h1")
        x.classList.add("col")

        mainArray[i] = Math.floor(Math.random() * 100)
        x.append(y)
        y.innerText = "" + mainArray[i] + ""
        cardContainer.append(x)
    }

}

function arrayControl(ArrayControllo, array2) {
    let punteggio = 0;
    let newArray = [];
    for (let i = 0; i < ArrayControllo.length; i++) {
        if (ArrayControllo.includes(array2[i])) {
            punteggio++
            newArray.push(array2[i])
        }
    }
    console.log(newArray);
    return newArray
    
}


playButton.addEventListener("click", function () {
    createGrid(5)
    let time = 30;
    let userValue = []
    let timer = setInterval(() => {
        time--
        console.log(time);
        if (time === 0) {
            createGrid(0)
            clearInterval(timer)
            return
        }
    }, 1000);
    setTimeout(() => {


        while (userValue.length < 5) {
            let x = prompt("Che numeri ricordi?")
            userValue.push(x)
        }
        let showArray = arrayControl(mainArray, userValue);
        
        console.log(mainArray);
        console.log(userValue);
    }, 1000 * 31);

})

