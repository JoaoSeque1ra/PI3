var checkBox1 = document.getElementById("checkBox1");
var formControl1 = document.getElementById("formControl1");
var inputBox = document.querySelectorAll(".changeInput");
var flag = 0;


checkBox1.addEventListener("click", () => {
    if(flag === 0) {
        checkBox1.classList.add("bg-yellow");
        checkBox1.classList.remove("bg-checkBox");
        formControl1.classList.add("text-white");
        inputBox[0].checked = true;
        flag++;
    } else {
        flag = 0;
        checkBox1.classList.add("bg-checkBox");
        checkBox1.classList.remove("bg-yellow");
        formControl1.classList.remove("text-white");
        inputBox[0].checked = false;
    }
});