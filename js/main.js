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
let recupNum = [];


mainCalc();
// RecuperateNumber();
// console.log(RecuperateNumber());


// function RecuperateNumber(){
        
    
// }

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
    //resultatZone.style.border = "1px solid red";
    resultatZone.style.display = "flex";
    resultatZone.style.justifyContent = "Center";
    resultatZone.style.alignItems = "Center";
    resultatZone.appendChild(ResultatTxt());

    return resultatZone;
}

function ResultatTxt() {
    let resultatTxt = document.createElement('div')
    resultatTxt.style.border = "1px solid #E0E0E0";
    resultatTxt.innerHTML = "125+65-987 = -797";
    resultatTxt.style.height = "60%";
    resultatTxt.style.textAlign = "Right";
    resultatTxt.style.alignContent = "Center";
    resultatTxt.style.fontWeight = "Bold";
    resultatTxt.style.fontSize = "34px";

    return resultatTxt;
}
console.log("Contenu de la Fonction CalcZone(): ",CalcZone());

function CalcZone(){
    let calcZone = document.createElement('div');
    calcZone.style.width = "100%";
    calcZone.style.paddingTop = "20px";
    calcZone.style.height = "300px";
    //calcZone.style.border = "1px solid blue";
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
    buttonsForm[0].addEventListener('click', function addOne(){recupNum.push(1); return recupNum;});  // Add 1
    buttonsForm[1].addEventListener('click', function addTwo(){recupNum.push(2); return recupNum;});  // Add 2
    buttonsForm[2].addEventListener('click', function addThree(){recupNum.push(3); return recupNum;});  // Add 3
    buttonsForm[4].addEventListener('click', function addFour(){recupNum.push(4); return recupNum;});  // Add 4
    buttonsForm[5].addEventListener('click', function addFive(){recupNum.push(5); return recupNum;});  // Add 5
    buttonsForm[6].addEventListener('click', function addSix(){recupNum.push(6); return recupNum;});  // Add 6
    buttonsForm[8].addEventListener('click', function addSeven(){recupNum.push(7); return recupNum;});  // Add 7
    buttonsForm[9].addEventListener('click', function addEight(){recupNum.push(8); return recupNum;});  // Add 8
    buttonsForm[10].addEventListener('click', function addNine(){recupNum.push(9); return recupNum;});  // Add 9
    buttonsForm[13].addEventListener('click', function addZero(){recupNum.push(0); return recupNum;});  // Add 0
    // Adds "+" operator
    buttonsForm[3].addEventListener('click', function operatorAddition(){recupNum.push("+"); return recupNum;});  
    // Adds "-" operator
    buttonsForm[7].addEventListener('click', function operatorSoustraction(){recupNum.push("-"); return recupNum;});
    // Adds "*" operator
    buttonsForm[11].addEventListener('click', function addZero(){recupNum.push("*"); return recupNum;});
    // Adds "/" operator
    buttonsForm[15].addEventListener('click', function addZero(){recupNum.push("/"); return recupNum;});

    // Saves numbers into "recupNum"
    buttonsForm[12].addEventListener('click', function equalButton(){return recupNum, console.log(recupNum);});

    for(let i=0; i<buttonsForm.length; i++){
        buttonsForm[i].style.cursor = "pointer"
        buttonsForm[i].innerText = innerValues[i]
        buttonsForm[i].style.textAlign = "Center"
        buttonsForm[i].style.alignContent = "Center"
        buttonsForm[i].style.border = "1px solid #696969"
        buttonsForm[i].style.width = "75px"
        buttonsForm[i].style.height = "75px"
        buttonsForm[i].style.fontFamily = "liberation-serif"
        buttonsForm[i].style.fontSize = "20px"
        buttonsForm[i].style.backgroundColor = "#E1EDFF"
    }
    return buttonsForm;
}