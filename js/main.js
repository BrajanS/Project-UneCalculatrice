// Form envisager de la Calculatrice avec JS:

{/* <div class="mainCalc">
        <div class="ResultatZone">
            <div class="ResultatTxt"></div>
        </div>
        <div class="CalcZone">
            <button></button>   0 à 9 et Operateurs
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div> */}

const body = document.querySelector('body');

mainCalc();

function mainCalc(){
    let mainZone = document.createElement('div');
    body.appendChild(mainZone);
    mainZone.appendChild(ResultatZone());
    mainZone.appendChild(CalcZone());
    
    return mainZone;
}

function ResultatZone(){
    let resultatZone = document.createElement('div');
    resultatZone.style.width = "100%";
    resultatZone.style.height = "20%";
    resultatZone.style.border = "1px solid red";
    resultatZone.style.display = "flex";
    resultatZone.style.justifyContent = "Center";
    resultatZone.style.alignItems = "Center";
    resultatZone.appendChild(ResultatTxt());

    return resultatZone;
}

function ResultatTxt() {
    let resultatTxt = document.createElement('div')
    resultatTxt.style.border = "1px solid orange";
    resultatTxt.innerHTML = "125+65-987 = -797";
    resultatTxt.style.height = "60%";
    resultatTxt.style.textAlign = "Right";
    resultatTxt.style.alignContent = "Center";
    resultatTxt.style.fontWeight = "Bold";
    resultatTxt.style.fontSize = "28px";

    return resultatTxt;
}

function CalcZone(){
    let calcZone = document.createElement('div');
    calcZone.style.width = "100%";
    calcZone.style.paddingTop = "20px";
    calcZone.style.height = "300px";
    calcZone.style.border = "1px solid blue";
    calcZone.style.position = "relative";
    calcZone.style.display = "flex";
    calcZone.style.flexWrap = "wrap";
    calcZone.style.justifyContent = "space-evenly";
    calcZone.style.alignItems = "center";
    for(let i=0; i<Buttons().length; i++){
        calcZone.appendChild(Buttons()[i]);
        
    }

    return calcZone;
}

function Buttons() {
    // Numbers
    let one = document.createElement('button');
    let two = document.createElement('button');
    let three = document.createElement('button');
    let four = document.createElement('button');
    let five = document.createElement('button');
    let six = document.createElement('button');
    let seven = document.createElement('button');
    let eight = document.createElement('button');
    let nine = document.createElement('button');
    let zero = document.createElement('button');
    // Operators
    let addition = document.createElement('button');
    let soustraction = document.createElement('button');
    let multiplication = document.createElement('button');
    let division = document.createElement('button');
    let calculatorOP = document.createElement('button');
    let clear = document.createElement('button');

    let innerValues = [1,2,3,"+",4,5,6,"-",7,8,9,"*","=",0,"CE","/"]
    let buttonsForm = [one,two,three,addition,four,five,six,soustraction,seven,eight,nine,multiplication,calculatorOP,zero,clear,division];
    for(let i=0; i<buttonsForm.length; i++){
        buttonsForm[i].innerText = innerValues[i]
        buttonsForm[i].style.textAlign = "Center"
        buttonsForm[i].style.alignContent = "Center"
        buttonsForm[i].style.border = "1px solid black"
        buttonsForm[i].style.width = "75px"
        buttonsForm[i].style.height = "75px"
        buttonsForm[i].style.fontFamily = "liberation-serif"
        buttonsForm[i].style.fontSize = "20px"
    }
    return buttonsForm;
}