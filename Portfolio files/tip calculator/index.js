'use strict';

const amount = document.getElementById('amount');
const guests = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

const calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
  amount.value = '';
  guests.value = '';
  quality.value = '';

  if (isNaN(tip)) {
    tipAmount.innerHTML = 'Tip ₪0 each';
    showTipAmount();
  } else {
    tipAmount.innerHTML = 'Tip ₪' + tip + ' each';
    showTipAmount();
  }
};

const showTipAmount = () => {
  var x = tipAmount;
  x.className = 'show';
  setTimeout(function () {
    x.className = x.className.replace('show', '');
  }, 5000);
};