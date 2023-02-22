
let fName = document.getElementById('fname');

fName.onfocus = function() {
    fName.style.backgroundColor = 'yellow';
}

fName.onblur = function() {
    fName.style.backgroundColor = 'white';
}
let lName = document.getElementById('lname');

lName.onfocus = function() {
    lName.style.backgroundColor = 'yellow';
}

lName.onblur = function() {
    lName.style.backgroundColor = 'white';
}


let h1 = document.querySelector('#registration');
h1.onmouseover = function() {
    h1.style.color ='red';
}

h1.onmouseout = function() {
    h1.style.color ='black';
}



document.getElementById('email').addEventListener(
    'focus', function() {
        // document.getElementById('email').style.backgroundColor = 'yellow';
        this.style.backgroundColor = 'yellow';
})

    document.getElementById('email').addEventListener(
        'blur', function() {
            // document.getElementById('email').style.backgroundColor = 'white';
            this.style.backgroundColor = 'white';

})

//Custom Modal Windows
//1.Alert

let btnAlert = document.getElementById('btn-alert');
let alertEl = document.querySelector('.alert');
let overlayEl = document.querySelector('.overlay');
let alertOK = document.getElementById('alertOK');
let i =0;

function showAlert() {
    alertEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}

 function hideAlert() {
     alertEl.classList.add('hidden');
     overlayEl.classList.add('hidden');
}

btnAlert.addEventListener('click',showAlert);
alertOK.addEventListener('click',hideAlert);

let promptBtn = document.getElementById('btn-prompt');
let promptEl = document.querySelector('.prompt');
let promptOK = document.getElementById('promptOK');
let promptCancel = document.getElementById('promptCancel');
let input = document.getElementById('input');


function showPrompt() {
    promptEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}

function hidePrompt(event) {
    promptEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
    let value;
    if(event.target.textContent === 'OK'){
        value = input.value;
    }else {
        value = null;
    }

 }
promptBtn.addEventListener('click',showPrompt);
promptOK.addEventListener('click',hidePrompt);
promptCancel.addEventListener('click',hidePrompt);

document.addEventListener('keydown',function(event){
    if(event.key === 'Enter') {
        if(!alertEl.classList.contains('hidden')){
            hideAlert();
        }
        if(!promptEl.classList.contains('hidden')){
            hidePrompt();
        }
    }
})


//Adding elements dynamically to webpage

//1.Create a DIV element
let div = document.createElement('div');
div.classList.add('impor-update');
div.style.marginTop = "30px";

//2.Create a text Content
// let textNode = document.createTextNode("This is Dynamically Added");
// div.appendChild(textNode);

//Create a H2 element
let h2 = document.createElement('h2');
h2.textContent = "Important!";
div.appendChild(h2);
let p = `<p>The last date for Registration is 22nd June 2023.Apply before Last date.</p>`;

div.insertAdjacentHTML('beforeend',p);


//Add DIV element to webpage
let maincontainerDiv = document.querySelector('.main-container');
let containerDiv = document.querySelector('.container');
maincontainerDiv.insertBefore(div,containerDiv);


//Form Details-Adding webpage element on click
//1.Create a div and add it to Webpage
let div1 =document.createElement('div');
div1.classList.add('person-list');
let maincontainerDiv1 = document.querySelector('.container');
maincontainerDiv.appendChild(div1);

//2.Add event listner on submit button
let submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click', displaydetails);

//3.Create Displaydetails function
function displaydetails() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let country = document.querySelector('#country').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let source = gender === 'Male' ? 'male.jpg' : 'female.png';

    let html = `<div class="card">
        <img src="${source}">
        <div class="details">
            <div class="name">${fname} ${lname}</div>
            <div class="y-email">${email}</div>
            <div class="y-country">${country}</div>
        </div>
        <div class="div-remove-card">
            <button type="button" class="remove-card" id="remove-card-${i}">X</button>
        </div>
    </div>
</div>`;

div1.insertAdjacentHTML('beforeend',html);
document.querySelector('#remove-card-'+i).addEventListener
('click',function() {
    console.log(this);
    let removeEl  = this.parentNode.parentNode;
    let confrm = confirm('Do you really want to delete Details?');
    // console.log(removeEl);
    if(confrm) 
    div1.removeChild(removeEl);
    
});
i++;
}

// let gender = document.querySelector('input[name="gender"]:checked');
// console.log(gender)



