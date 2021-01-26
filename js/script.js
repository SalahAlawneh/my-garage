'use strict';


// Global variables

var garageForm = document.getElementById('cars-form');
var arrayOfCars = [];
var carPicture = document.getElementById('car-image')
var clearDataButt = document.getElementById('clear-data');
var resultTable = document.getElementById('result-table');



// Functions

function CarsConstructor(name, category, year, url) {
    this.name = name;
    this.category = category;
    this.year = year;
    this.url = url;
    arrayOfCars.push(this);
}

CarsConstructor.prototype.renderCars = function () {

    var firstTableRow = document.createElement('tr');
    resultTable.appendChild(firstTableRow);
    var firstTableData=document.createElement('td')
    firstTableRow.appendChild(firstTableData);
    var secondTableData=document.createElement('td')
    firstTableRow.appendChild(secondTableData);
    var secondTableRow=document.createElement('tr');
    resultTable.appendChild(secondTableRow);
    var firstTableDataForRowTwo=document.createElement('td');
    secondTableRow.appendChild(firstTableDataForRowTwo);
    var secondTableDataForRowTwo=document.createElement('td');
    secondTableRow.appendChild(secondTableDataForRowTwo);
    firstTableData.textContent='Car name: ';
    secondTableData.textContent=`${this.name}`;
    firstTableDataForRowTwo.textContent='ModelYear: ';
    secondTableDataForRowTwo.textContent=`${this.year}`;
    
    // carNameParagraph.textContent = `Car name: ${this.name}`
    // modelNubmerPargrapch.textContent = `ModelYear: ${this.year}`
}

function checkLocalStorage() {
    if (localStorage.getItem('Cars')) {
        var storeLocalStorage = JSON.parse(localStorage.getItem('Cars'));
        for (let index = 0; index < storeLocalStorage.length; index++) {
            var newArrayOfCars = new CarsConstructor(storeLocalStorage[index].name, storeLocalStorage[index].category, storeLocalStorage[index].year, storeLocalStorage[index].url);
            newArrayOfCars.renderCars();
        }
    }
}

function handleTheSubmittion(event) {
    event.preventDefault();
    var carName = event.target.carName.value;
    var carCategoryModel = event.target.categoryModel.value;
    var carYearModel = event.target.modelYear.value;
    var carImage = carPicture.setAttribute('src', CarsConstructor.url);
    var myCars = new CarsConstructor(carName, carCategoryModel, carYearModel, carImage);
    localStorage.setItem('Cars', JSON.stringify(arrayOfCars));
    myCars.renderCars();

}

function handleClearButt(event) {
    event.preventDefault();
    localStorage.clear();
    arrayOfCars = []
}


// Call the functions

garageForm.addEventListener('submit', handleTheSubmittion);
clearDataButt.addEventListener('click', handleClearButt);