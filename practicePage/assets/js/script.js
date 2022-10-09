//Local storage saving, override previous in put 
var makeInputEl = document.querySelector('#make')
var modleInputEl = document.querySelector('#modle')
var colorInputEl = document.querySelector('#color')
const submitBtn = document.querySelector('#subBtn');

// checking local storage for car data
var carinfo = JSON.parse(localStorage.getItem('carData'));

if (carinfo) {
    makeInputEl.value = carinfo.make;
    modleInputEl.value = carinfo.modle;
    colorInputEl.value = carinfo.color;
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var carMake = makeInputEl.value.trim();
    var carModle = modleInputEl.value.trim();
    var carColor = colorInputEl.value.trim();

    if (!carMake || !carModle || !carColor) {
        return;
    }

    var carinfo = {

        make: carMake,
        modle: carModle,
        color: carColor,
    }

    localStorage.setItem('carData', JSON.stringify(carinfo));
});
//-----------------------------------------------------------------
// Local sorage add to array no overide 

