'use strict'
// set initial count

let count = 0;

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// functionning all the buttons as a class
// trageting buttons by the text

btns.forEach (function (btn) {
    btn.addEventListener('click', function(e){const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){count --;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
count = 0;

        }

        //reactive colors 

        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count == 0){
            value.style.color = 'black';
        }
        value.textContent = count;


    })
});
