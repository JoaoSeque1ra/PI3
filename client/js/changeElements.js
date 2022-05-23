var checkBox, formControl, inputBox;
var numeroPagina = 1;

function lerCheckBox() {
    checkBox = document.getElementsByClassName("input-js");
    formControl = document.getElementsByClassName("changeFormControl");
    inputBox = document.getElementsByClassName("changeInput");
    console.log("passei aqui");
}

lerCheckBox();

var flag = 0, flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0, flag6 = 0;

var getBody = document.getElementsByTagName("body");
var bgColor = getBody[0].getAttribute("id"); 

function cleanCheckBox() {
    for(let i = 0; i < inputBox.length; i++) {
        inputBox[i].checked = false;
    }
}

cleanCheckBox();

checkBox[0].addEventListener("click", () => {
    if(flag === 0) {
        turnOn(0, bgColor);
        flag++;
    } else {
        turnOff(0, bgColor);
        flag = 0;
    }
});

checkBox[1].addEventListener("click", () => {
    if(flag1 === 0) {
        turnOn(1, bgColor);
        flag1++;
    } else {
        turnOff(1, bgColor);
        flag1 = 0;
    }
});

checkBox[2].addEventListener("click", () => {
    if(flag2 === 0) {
        turnOn(2, bgColor);
        flag2++;
    } else {
        turnOff(2, bgColor);
        flag2 = 0;
    }
});

checkBox[3].addEventListener("click", () => {
    if(flag3 === 0) {
        turnOn(3, bgColor);
        flag3++;
    } else {
        turnOff(3, bgColor);
        flag3 = 0;
    }
});

checkBox[4].addEventListener("click", () => {
    if(flag4 === 0) {
        turnOn(4, bgColor);
        flag4++;
    } else {
        turnOff(4, bgColor);
        flag4 = 0;
    }
});

checkBox[5].addEventListener("click", () => {
    if(flag5 === 0) {
        turnOn(5, bgColor);
        flag5++;
    } else {
        turnOff(5, bgColor);
        flag5 = 0;
    }
});


checkBox[6].addEventListener("click", () => {
    if(flag6 === 0) {
        turnOn(6, bgColor);
        flag6++;
    } else {
        turnOff(6, bgColor);
        flag5 = 0;
    }
});

function turnOn(index, bgColor) {
    checkBox[index].classList.add(bgColor);
    checkBox[index].classList.remove("bg-checkBox");
    formControl[index].classList.add("text-white");
    inputBox[index].checked = true;
}

function turnOff(index, bgColor) {
    checkBox[index].classList.remove(bgColor);
    checkBox[index].classList.add("bg-checkBox");
    formControl[index].classList.remove("text-white");
    inputBox[index].checked = false;
}

var numberTest = 1;
var zoneNumber = document.getElementById("number");

function somar() {
    if(numberTest == 12) {
        alert("Número máximo atingido");
    } else {
        numberTest++;
        zoneNumber.innerHTML = numberTest;
    }
};

function subtrair() {
    if(numberTest == 1) {
        alert("Número mínimo atingido");
    } else {
        numberTest--;
        zoneNumber.innerHTML = numberTest;
    }
};

//--------------------------------

function subtrair() {
    if(numeroPagina < 2)
        alert("Número de pagina máximo atingido");
    else {
        numeroPagina--;
        document.getElementById("number").innerHTML = numeroPagina;
    }
}

function somar() {
    if(numeroPagina > 11)
        alert("Número de pagina mínimo atingido");
    else {
        numeroPagina++;
        document.getElementById("number").innerHTML = numeroPagina;
    }
}

//--------------------------------

//var checkBox = document.getElementsByClassName("input-js");
//var formControl = document.getElementsByClassName("changeFormControl");
//var inputBox = document.getElementsByClassName("changeInput");

function teste() {
    if(inputBox[0].checked === true) {
        //Obrigatórios
        document.getElementById("checkBoxLandingPage").classList.add("input-js"); 
        document.getElementById("formControlLandingPage").classList.add("changeFormControl"); 
        document.getElementById("inputLandingPage").classList.add("changeInput"); 

        //Style
        formControl[1].classList.remove("text-white");
    
        checkBox[1].classList.add("bg-checkBoxPurple");
        checkBox[1].classList.add("bg-checkBox");
        checkBox[1].classList.remove("bg-disable");

        //Input voltar a funcionar
        lerCheckBox();
        inputBox[1].disabled = false;
    } else {
        //Style
        inputBox[1].classList.remove("cursor-pointer");

        formControl[1].classList.add("text-white");

        checkBox[1].classList.remove("bg-checkBoxPurple");
        checkBox[1].classList.remove("bg-checkBox");
        checkBox[1].classList.remove("cursor-pointer");
        checkBox[1].classList.add("bg-disable");

        //Input deixa de funcionar
        inputBox[1].disabled = true;

        //Obrigatórios
        document.getElementById("checkBoxLandingPage").classList.remove("input-js");
        document.getElementById("formControlLandingPage").classList.remove("changeFormControl");
        document.getElementById("inputLandingPage").classList.remove("changeInput");

        lerCheckBox();
    }
}

// function teste2() {
//     if(inputBox[1].checked === true) {
//         //Obrigatórios
//         document.getElementById("checkBoxWebsite").classList.add("input-js"); 
//         document.getElementById("formControlWebsite").classList.add("changeFormControl"); 
//         document.getElementById("inputWebsite").classList.add("changeInput"); 

//         //Style
//         formControl[0].classList.remove("text-white");
    
//         checkBox[0].classList.add("bg-checkBoxPurple");
//         checkBox[0].classList.add("bg-checkBox");
//         checkBox[0].classList.remove("bg-disable");

//         //Input voltar a funcionar
//         lerCheckBox();
//         inputBox[0].disabled = false;
//     } else {
//         //Style
//         checkBox[0].classList.remove("bg-checkBoxPurple");
//         checkBox[0].classList.remove("bg-checkBox");
//         checkBox[0].classList.remove("cursor-pointer");
//         checkBox[0].classList.add("bg-disable");

//         inputBox[0].classList.remove("cursor-pointer");

//         formControl[0].classList.add("text-white");

//         //Input deixa de funcionar
//         inputBox[0].disabled = true;

//         //Obrigatórios
//         document.getElementById("checkBoxWebsite").classList.remove("input-js");
//         document.getElementById("formControlWebsite").classList.remove("changeFormControl");
//         document.getElementById("inputWebsite").classList.remove("changeInput");

//         lerCheckBox();
//     }
// }