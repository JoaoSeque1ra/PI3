var checkBox, formControl, inputBox;

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

//var checkBox = document.getElementsByClassName("input-js");
//var formControl = document.getElementsByClassName("changeFormControl");
//var inputBox = document.getElementsByClassName("changeInput");

function teste() {
    if(inputBox[0].checked === true) {

        document.getElementById("checkBoxLandingPage").classList.add("input-js"); 
        document.getElementById("formControlLandingPage").classList.add("changeFormControl"); 
        document.getElementById("inputLandingPage").classList.add("changeInput"); 

        lerCheckBox();

        inputBox[1].disabled = false;

        formControl[1].classList.remove("text-white");
    
        checkBox[1].classList.add("bg-checkBoxPurple");
        checkBox[1].classList.add("bg-checkBox");
        checkBox[1].classList.remove("bg-disable");
    } else {
        inputBox[1].disabled = true;
        inputBox[1].classList.remove("cursor-pointer");

        inputBox[1].classList.remove("changeInput");

        formControl[1].classList.add("text-white");

        formControl[1].classList.remove("changeFormControl");
    
        checkBox[1].classList.remove("bg-checkBoxPurple");
        checkBox[1].classList.remove("bg-checkBox");
        checkBox[1].classList.remove("cursor-pointer");
        checkBox[1].classList.add("bg-disable");

        checkBox[1].classList.remove("input-js");    
        
        lerCheckBox();
    }
}