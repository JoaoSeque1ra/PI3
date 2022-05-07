var checkBox = document.getElementsByClassName("input-group");
var formControl = document.getElementsByClassName("form-control");
var inputBox = document.getElementsByClassName("changeInput");
var flag = 0, flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0;

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

function turnOn(index, bgColor) {
    checkBox[index].classList.add(bgColor);
    formControl[index].classList.add("text-white");
    inputBox[index].checked = true;
}

function turnOff(index, bgColor) {
    checkBox[index].classList.remove(bgColor);
    formControl[index].classList.remove("text-white");
    inputBox[index].checked = false;
}