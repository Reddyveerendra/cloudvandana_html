/* constants */
const numbers = document.querySelectorAll(".number");
const symbols = document.querySelectorAll(".symbols");
const ans = document.querySelector(".ans");
const clear = document.querySelector(".clear");
var nb = "";
var sb = "";
var all = [];
var sy = true;
/* functions */
var res = []
var resString = "";

function handleResult(e) {
    const temp = e.target.id;
    res.push(temp);
    resString += temp;
    document.querySelector(".result").textContent = resString;
}

function handleNum(e) {
    sy = true;
    nb += e.target.id;
    handleResult(e);
}

function handleSymbol(e) {
    if (!sy) {
        document.querySelector(".error").textContent = "Invalid click!";
        setTimeout(() => {
            document.querySelector(".error").textContent = "";
        }, 5000);
    } else {
        sy = false;
        sb = e.target.id;
        all.push(nb);
        all.push(sb);
        nb = "";
        handleResult(e);
    }
}

function finalAns() {
    if (!sy) {
        document.querySelector(".error").textContent = "Invalid click!";
        setTimeout(() => {
            document.querySelector(".error").textContent = "";
        }, 5000);
    } else {
        all.push(nb);
        nb = "";
        var total = 0;
        var s = "+"; // Default operator
        all.forEach(element => {
            if (!isNaN(parseFloat(element))) {
                total = eval(total + s + element);
                s = ""; // Reset operator
            } else {
                s = element;
            }
        });
        all = []; // Clear the array
        all.push(total);
        document.querySelector(".result").textContent = total;
        resString = "" + total
    }
}



function clearResult() {
    location.reload();
}
/* events */
ans.addEventListener("click", finalAns);
numbers.forEach((number) => {
    number.addEventListener("click", handleNum);
});
symbols.forEach((symbol) => {
    symbol.addEventListener("click", handleSymbol);
});
clear.addEventListener("click", clearResult)