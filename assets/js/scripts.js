let count = 0;

var CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    CURRENT_NUMBER.style.color = 'blue'
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
    CURRENT_NUMBER.style.color = 'red'
}

