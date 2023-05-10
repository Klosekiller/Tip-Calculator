document.querySelectorAll(".addTip").forEach( function CalculateTip (button) {
    button.addEventListener('click', () => {
        let theValue = Number(button.value);
        let theBill = Number(document.getElementById("bill").value);
        let theTotal = (Number(theBill+(theBill*theValue))).toFixed(2);
        document.getElementById("total").innerHTML = `$${theTotal}`;
    })  
});
document.getElementById("add").addEventListener("click", function CustomTip () {
    let theBill = Number(document.getElementById("bill").value);
    let theCustomTip = Number(document.getElementById("custom").value);
    let theTotal = (Number(theBill+theCustomTip)).toFixed(2);
    document.getElementById("total").innerHTML = `$${theTotal}`;
});
document.getElementById("reset").addEventListener("click", function Reset () {
    document.getElementById("bill").value = 0;
    document.getElementById("custom").value = 0;
    document.getElementById("total").innerHTML = "$0.00"; 
});