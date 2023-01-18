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
// Local sorage add to array no overide (Advansed local Storage)

var makeInEl = document.querySelector('#makeIn2');
var modelInEl = document.querySelector('#modleIn2');
var colorInEl = document.querySelector('#colorIn2');
var tableBodyEl = document.querySelector('tbody');
var lastTh = document.querySelector('.lastTh')
const sub2Btn = document.querySelector('#sub2Btn');
var vehicalX = []

var vehicalX = JSON.parse(localStorage.getItem('newCarData'));

for (var i = 0; i < vehicalX.length; i++) {
    tableBodyEl.innerHTML += `
<tr>
<td>${vehicalX[i].make}</td>
<td>${vehicalX[i].modle}</td>
<td>${vehicalX[i].color}</td>
<td><button class="deleteBtn">Delete</button></td>
</tr>
`;
}

sub2Btn.addEventListener('click', (e) => {
    e.preventDefault();

    var makeOfCar = makeInEl.value.trim();
    var modelOfCar = modelInEl.value.trim();
    var colorOfCar = colorInEl.value.trim();


    if (!makeOfCar || !modelOfCar || !colorOfCar) {
        return;
    };

    lastTh.classList.remove('hide');

    tableBodyEl.innerHTML += `
    <tr>
    <td>${makeOfCar}</td>
    <td>${modelOfCar}</td>
    <td>${colorOfCar}</td>
    <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `;

    var vehicalInformation = {
        make: makeOfCar,
        modle: modelOfCar,
        color: colorOfCar,
    };

    vehicalX.push(vehicalInformation);

    localStorage.setItem('newCarData', JSON.stringify(vehicalX));

    makeInEl.value = ''
    modelInEl.value = ''
    colorInEl.value = ''

    console.log(vehicalX)
});


function deleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    } else {
        const btn = e.target;
        btn.closest('tr').remove();

    }
}

tableBodyEl.addEventListener('click', deleteRow);

