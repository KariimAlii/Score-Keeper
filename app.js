let element1 = document.querySelector('#element1')
let element2 = document.querySelector('#element2')
let element3 = document.querySelector('#element3')
const element4 = document.querySelector('#element4')
const element5 = document.querySelector('#element5')
const element6 = document.querySelector('#element6')
const opt = document.querySelector('#opt')
element1.value = 0;
element2.value = 0;

// adding 1 to player one
element4.addEventListener('click', function () {
    if (element1.value < parseInt(element3.value)) {        
        element1.value += 1;
        element1.innerText = `${element1.value}`
    }
    if (element1.value === parseInt(element3.value) ) {
        element4.setAttribute("disabled", "");
        element5.setAttribute("disabled", "");
        element1.classList.add('has-text-success');
        element2.classList.add('has-text-danger');  
    }
})

// adding 1 to player two
element5.addEventListener('click', function () {
    if (element2.value < parseInt(element3.value)) {        
        element2.value += 1;
        element2.innerText = `${element2.value}`
    }
    if (element2.value === parseInt(element3.value) ) {
        element4.setAttribute("disabled", "");
        element5.setAttribute("disabled", "");
        element2.classList.add('has-text-success');
        element1.classList.add('has-text-danger');   
    }
})

// RESET
element6.addEventListener('click', function () {
    element1.value = 0;
    element1.innerText = `${element1.value}`
    element2.value = 0;
    element2.innerText = `${element2.value}`
    element4.removeAttribute("disabled");
    element5.removeAttribute("disabled");
    element2.classList.remove('has-text-success','has-text-danger');
    element1.classList.remove('has-text-success','has-text-danger');
    element1.classList.add('has-text-black');
    element2.classList.add('has-text-black');  
})

//select an option
// it will reset game
element3.addEventListener('change' , function() {
    element6.click();
})