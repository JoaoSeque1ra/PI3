var checkBox = document.getElementsByClassName("input-group");
var formControl = document.getElementsByClassName("form-control");
var inputBox = document.getElementsByClassName("changeInput");
var flag = 0;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;

function cleanCheckBox() {
    for(let i = 0; i < inputBox.length; i++) {
        inputBox[i].checked = false;
    }
}

cleanCheckBox();

checkBox[0].addEventListener("click", () => {
    if(flag === 0) {
        turnOn(0, "bg-yellow");
        flag++;
    } else {
        turnOff(0, "bg-yellow");
        flag = 0;
    }
});

checkBox[1].addEventListener("click", () => {
    if(flag1 === 0) {
        turnOn(1, "bg-yellow");
        flag1++;
    } else {
        turnOff(1, "bg-yellow");
        flag1 = 0;
    }
});

checkBox[2].addEventListener("click", () => {
    if(flag2 === 0) {
        turnOn(2, "bg-yellow");
        flag2++;
    } else {
        turnOff(2, "bg-yellow");
        flag2 = 0;
    }
});

checkBox[3].addEventListener("click", () => {
    if(flag3 === 0) {
        turnOn(3, "bg-yellow");
        flag3++;
    } else {
        turnOff(3, "bg-yellow");
        flag3 = 0;
    }
});

checkBox[4].addEventListener("click", () => {
    if(flag4 === 0) {
        turnOn(4, "bg-yellow");
        flag4++;
    } else {
        turnOff(4, "bg-yellow");
        flag4 = 0;
    }
});

function turnOn(index, bgColor) {
    checkBox[index].classList.add(bgColor);
    checkBox[index].classList.remove("bg-checkBox");
    formControl[index].classList.add("text-white");
    inputBox[index].checked = true;
}

function turnOff(index, bgColor) {
    checkBox[index].classList.add(bgColor);
    checkBox[index].classList.remove("bg-yellow");
    formControl[index].classList.remove("text-white");
    inputBox[index].checked = false;
}