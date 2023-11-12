const celsius = document.querySelector("#celsius");
const farenheit = document.querySelector("#farenheit");

window.addEventListener("load",() => 
    celsius.focus());

celsius.addEventListener("input", ()=> {
    farenheit.value = (((celsius.value * 9)/5) + 32).toFixed(2);
    if (!celsius.value) farenheit.value = ""
});

farenheit.addEventListener("input", () => {
    celsius.value = (((farenheit.value - 32) * 5) / 9).toFixed(2);

    if(!farenheit.value) celsius.value = ""
});
