const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');


const showBill = () => {
    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display = 'none'; 
    } else {
        error.textContent = '';
        countBill();
    }
};

const countBill = () => {
    const newPrice = parseFloat(price.value); //parseFloat - odpowiada zeby liczba byla po przecinku
    const newPeople = parseInt(people.value); //parseInt - typ string zostanie przerobiony na liczbe
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + (newPrice * newTip)) / newPeople;

    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2); //metoda toFixed zaookragla liczbe do wkazanej w nawiasie (w tym przypadku do 2 miejsc po przecinku czyli groszy)
};


countBtn.addEventListener('click', showBill);
