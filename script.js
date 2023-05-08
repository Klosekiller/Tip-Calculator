document.getElementById("five").addEventListener("click", () => {
    let tip = (Number(document.getElementById("BillA").value) * 0.05) + Number(document.getElementById("BillA").value);
    document.getElementById("TipAmountValue").value = tip;
});
document.getElementById("ten").addEventListener("click", () => {
    let tip = (Number(document.getElementById("BillA").value) * 0.1) + Number(document.getElementById("BillA").value);
    document.getElementById("TipAmountValue").value = tip;
});
document.getElementById("fifteen").addEventListener("click", () => {
    let tip = (Number(document.getElementById("BillA").value) * 0.15) + Number(document.getElementById("BillA").value);
    document.getElementById("TipAmountValue").value = tip;
});
document.getElementById("twenty").addEventListener("click", () => {
    let tip = (Number(document.getElementById("BillA").value) * 0.2) + Number(document.getElementById("BillA").value);
    document.getElementById("TipAmountValue").value = tip;
});
document.getElementById("custom").addEventListener("change", () => {
    let tip = Number(document.getElementById("BillA").value) + Number(document.getElementById("custom").value);
    document.getElementById("TipAmountValue").value = tip;
});

function Reset() {
    document.getElementById("TipAmountValue").value = "";
    document.getElementById("BillA").value= "";
}