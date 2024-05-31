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
let recupNum = "";
let calcResultat = null;
let opAdd = null;
let opSous = null;
let opMult = null;
let opDivi = null;
let resultUpdate = null;

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
    //resultatZone.style.border = "1px solid red";
    resultatZone.style.display = "flex";
    resultatZone.style.justifyContent = "Center";
    resultatZone.style.alignItems = "Center";
    resultatZone.appendChild(ResultatTxt());

    return resultatZone;
}

function ResultatTxt(a = ""){
    let resultatTxt = document.createElement('div')
    resultatTxt.style.border = "1px solid #E0E0E0";
    resultatTxt.style.backgroundColor = "white";
    resultatTxt.style.borderRadius = "5px";
    resultatTxt.innerHTML = a;
    resultatTxt.style.height = "60%";
    resultatTxt.style.textAlign = "Right";
    resultatTxt.style.alignContent = "Center";
    resultatTxt.style.fontWeight = "Bold";
    resultatTxt.style.fontSize = "34px";
    resultatTxt.style.width = "90%";
    resultUpdate = resultatTxt; // Sauvegarde de la référence à la zone de résultat
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
    buttonsForm[0].addEventListener('click', function addOne(){errorMsgClear(); recupNum += "1"; updater(); return recupNum;});// Adds 1
    buttonsForm[1].addEventListener('click', function addTwo(){errorMsgClear(); recupNum += "2"; updater(); return recupNum;});    // Adds 2
    buttonsForm[2].addEventListener('click', function addThree(){errorMsgClear(); recupNum += "3"; updater(); return recupNum;});  // Adds 3
    buttonsForm[4].addEventListener('click', function addFour(){errorMsgClear(); recupNum += "4"; updater(); return recupNum;});   // Adds 4
    buttonsForm[5].addEventListener('click', function addFive(){errorMsgClear(); recupNum += "5"; updater(); return recupNum;});   // Adds 5
    buttonsForm[6].addEventListener('click', function addSix(){errorMsgClear(); recupNum += "6"; updater(); return recupNum;});    // Adds 6
    buttonsForm[8].addEventListener('click', function addSeven(){errorMsgClear(); recupNum += "7"; updater(); return recupNum;});  // Adds 7
    buttonsForm[9].addEventListener('click', function addEight(){errorMsgClear(); recupNum += "8"; updater(); return recupNum;});  // Adds 8
    buttonsForm[10].addEventListener('click', function addNine(){errorMsgClear(); recupNum += "9"; updater(); return recupNum;});  // Adds 9
    buttonsForm[13].addEventListener('click', function addZero(){errorMsgClear(); recupNum += "0"; updater(); return recupNum;});  // Adds 0
    buttonsForm[3].addEventListener('click', function operatorAddition(){errorMsgClear(); recupNum += "+"; updater(); return recupNum;});  
    buttonsForm[7].addEventListener('click', function operatorSoustraction(){errorMsgClear(); recupNum += "-"; updater(); return recupNum;});
    buttonsForm[11].addEventListener('click', function operatorMultiplication(){errorMsgClear(); recupNum += "*"; updater(); return recupNum;});
    buttonsForm[15].addEventListener('click', function operatorDivision(){errorMsgClear(); recupNum += "/"; updater(); return recupNum;});
    buttonsForm[12].addEventListener('click', function equalButton(){
    errorMsgClear();
    let result = "";
    try {
        if(recupNum !== "" && recupNum !== null){result = eval(recupNum);}
        else {result = "";}
        recupNum = result.toString();
    }
    catch (error) {
        recupNum = "Something went wrong";
    }
        updater();
    });
    buttonsForm[14].addEventListener('click', function clearTxt(){
        recupNum = "";
        updater();
    });

    for(let i=0; i<buttonsForm.length; i++){
        buttonsForm[i].style.cursor = "pointer"
        buttonsForm[i].innerText = innerValues[i]
        buttonsForm[i].style.textAlign = "Center"
        buttonsForm[i].style.alignContent = "Center"
        buttonsForm[i].style.border = "1px solid #696969"
        buttonsForm[i].style.borderRadius = "5px"
        buttonsForm[i].style.width = "75px"
        buttonsForm[i].style.height = "75px"
        buttonsForm[i].style.fontFamily = "liberation-serif"
        buttonsForm[i].style.fontSize = "20px"
        buttonsForm[i].style.backgroundColor = "#E1EDFF"
    }
    return buttonsForm;
}

function updater(){
    if(resultUpdate){
        resultUpdate.innerHTML = recupNum;
    }
}

function errorMsgClear(){
    if (recupNum === "Something went wrong") {
        recupNum = "";
    }
}