document.querySelectorAll(".addTip").forEach( function CalculateTip (button) {
    button.addEventListener('click', () => {
        let theTip = Number(button.value);
        let theBill = Number(document.getElementById("bill").value);
        let theTotal = (Number(theBill+(theBill*theTip))).toFixed(2);
        document.getElementById("total").innerHTML = `$${theTotal}`;
    })  
});
document.getElementById("apply").addEventListener("click", function CustomTip () {
    let theBill = parseInt(document.getElementById("bill").value);
    let theTip = Number(document.getElementById("custom").value)/100;
    let theTotal = Number(theBill+(theBill*theTip)).toFixed(2);
    document.getElementById("total").innerHTML = `$${theTotal}`;
});
document.getElementById("reset").addEventListener("click", function Reset () {
    document.getElementById("bill").value = 0;
    document.getElementById("custom").value = 0;
    document.getElementById("total").innerHTML = "$0.00"; 
});
document.querySelectorAll("input").forEach( (selected) => {
    selected.addEventListener('click', () => {
        selected.value = "";
    });
});