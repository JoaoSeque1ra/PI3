var checkBox = document.getElementsByClassName("input-group");
var formControl = document.getElementsByClassName("form-control");
var inputBox = document.getElementsByClassName("changeInput");
var flag = 0;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;

checkBox[0].addEventListener("click", () => {
    if(flag === 0) {
        checkBox[0].classList.add("bg-yellow");
        checkBox[0].classList.remove("bg-checkBox");
        formControl[0].classList.add("text-white");
        inputBox[0].checked = true;
        flag++;
    } else {
        flag = 0;
        checkBox[0].classList.add("bg-checkBox");
        checkBox[0].classList.remove("bg-yellow");
        formControl[0].classList.remove("text-white");
        inputBox[0].checked = false;
    }
});

checkBox[1].addEventListener("click", () => {
    if(flag1 === 0) {
        checkBox[1].classList.add("bg-yellow");
        checkBox[1].classList.remove("bg-checkBox");
        formControl[1].classList.add("text-white");
        inputBox[1].checked = true;
        flag1++;
    } else {
        flag1 = 0;
        checkBox[1].classList.add("bg-checkBox");
        checkBox[1].classList.remove("bg-yellow");
        formControl[1].classList.remove("text-white");
        inputBox[1].checked = false;
    }
});

checkBox[2].addEventListener("click", () => {
    if(flag2 === 0) {
        checkBox[2].classList.add("bg-yellow");
        checkBox[2].classList.remove("bg-checkBox");
        formControl[2].classList.add("text-white");
        inputBox[2].checked = true;
        flag2++;
    } else {
        flag2 = 0;
        checkBox[2].classList.add("bg-checkBox");
        checkBox[2].classList.remove("bg-yellow");
        formControl[2].classList.remove("text-white");
        inputBox[2].checked = false;
    }
});

checkBox[3].addEventListener("click", () => {
    if(flag3 === 0) {
        checkBox[3].classList.add("bg-yellow");
        checkBox[3].classList.remove("bg-checkBox");
        formControl[3].classList.add("text-white");
        inputBox[3].checked = true;
        flag3++;
    } else {
        flag3 = 0;
        checkBox[3].classList.add("bg-checkBox");
        checkBox[3].classList.remove("bg-yellow");
        formControl[3].classList.remove("text-white");
        inputBox[3].checked = false;
    }
});