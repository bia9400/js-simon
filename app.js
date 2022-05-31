const playButton = document.getElementById("playButon");
const cardContainer = document.querySelector(".row");
const mytimer=document.getElementById("timer")
let myContainer=document.querySelector(".my-cotainer")
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
    
    let newArray = [];
    for (let i = 0; i < ArrayControllo.length; i++) {
        if (ArrayControllo.includes(array2[i])) {
            
            newArray.push(array2[i])
        }
    }
    console.log(newArray);
    return newArray
    
    
}


playButton.addEventListener("click", function () {
    createGrid(5)
    let time = 30;
    let punteggio=0
    let userValue = []
    
    let timer = setInterval(() => {
        mytimer.innerHTML=`Il tuo tempo a disposizione è: ${time } secondi`
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
            let x = parseInt(prompt("Che numeri ricordi?"))
            userValue.push(x)
        }
        let showArray = arrayControl(mainArray, userValue);
        punteggio=showArray.length
        if(punteggio==showArray.length){
            myContainer.innerHTML +=`<h1>Hai indovinato tutti i numeri. ${showArray}`
        }else if(punteggio==0){
            myContainer.innerHTML +=`<h1>Non hai indovinato nemmeno un numero`
        }
        else{
            myContainer.innerHTML +=`<h1>Hai indovinato ${punteggio } numeri: ${showArray}</h1>`
        }
        
        
    }, 1000 * 31);

})

