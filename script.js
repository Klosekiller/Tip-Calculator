let yourBill = {
    billBeforeTip: 0,
    tipPercentage: 15,
    tipAmount: 0,
    billAfterTip: 0
};

function reset() {
    yourBill.billBeforeTip = 0;
    yourBill.tipPercentage = 15;
    yourBill.tipAmount = 0;
    yourBill.billAfterTip = 0;
    document.getElementById("beforeTip").value = yourBill.billBeforeTip;
    document.getElementById("percentage").value = `${yourBill.tipPercentage}%`;
    document.getElementById("tipAmount").innerHTML = "";
    document.getElementById("afterTip").innerHTML = `$${yourBill.billAfterTip}`;
}

reset();

document.getElementById("beforeTip").addEventListener("change", () => {
    let numberCheck = Number(document.getElementById("beforeTip").value)
    yourBill.billBeforeTip = Number(document.getElementById("beforeTip").value);
    document.getElementById("beforeTip").value = yourBill.billBeforeTip;
    totalAmount();
});
document.getElementById("add").addEventListener("click", () => {
    yourBill.tipPercentage++;
    document.getElementById("percentage").value = `${yourBill.tipPercentage}%`;
    totalAmount();
});
document.getElementById("subtract").addEventListener("click", () => {
    if (yourBill.tipPercentage < 1) {
        document.getElementById("percentage").value = `${yourBill.tipPercentage}%`;
        totalAmount();
    } else {
        yourBill.tipPercentage--;
        document.getElementById("percentage").value = `${yourBill.tipPercentage}%`;
        totalAmount();
    }
});
function totalAmount() {
    yourBill.tipAmount = (Number(Number(yourBill.billBeforeTip) * Number(yourBill.tipPercentage/100))).toFixed(2);
    document.getElementById("tipAmount").innerHTML = `Tip Amount: $${yourBill.tipAmount}`;
    yourBill.billAfterTip = (Number(yourBill.billBeforeTip) + Number(yourBill.tipAmount)).toFixed(2);
    document.getElementById("afterTip").innerHTML = `$${yourBill.billAfterTip}`;
};

document.getElementById("reset").addEventListener("click", () => {
    reset();
});