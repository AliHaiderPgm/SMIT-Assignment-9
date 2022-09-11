// import { default as Swal } from "sweetalert2";  

let input = document.querySelector('.input');
let output = document.querySelector('.output');
let orignalString = document.getElementById('orignalString').innerText;
let clrInput = document.querySelector('.clrInput');
let clrOutput = document.querySelector('.clrOutput');

// Clear
clrInput.addEventListener('click', ()=>{
    input.value='';
});
clrOutput.addEventListener('click',()=>{
    output.innerText='Your output';
});

// Round a number
function round(){
    output.innerText = Math.round(orignalString);
}

// Ceil a number
function ceil(){
    output.innerText = Math.ceil(orignalString);
}

// Floor a number 
function floor(){
    output.innerText = Math.floor(orignalString);
}

// Random Number
function random(){
    output.innerText = Math.random();
}

// Dice 
function dice(){
    output.innerText = Math.floor(Math.random()*6+1)
}


// Generate a strong password
let smallalphabet = 'abcdefghiklmnopqrstuvwxyz';
let capAlphabet = 'ABCDEFGHIKLMNOPQRTUVWXYZ';
let symbols = `!@#$%^&*()_+-="?/>.<,:;|`;
let num = '1234567890'


function password(){ 
    let length = input.value;
    if(length==null||length==''){
        Swal.fire(
            'Enter length of password first',
            '',
            'error'
        )
        return
    }
    let string = smallalphabet + capAlphabet + symbols + num;
    let genPass ='';
    for (let i=0;i<length;i++){
        genPass += string.charAt(Math.floor(Math.random()*83+1))
    }
    output.innerText = genPass;
}

// To number from a string of input
function string(){
    let newVal = input.value;
    if(newVal==''){
        Swal.fire(
            'Error!',
            'Enter number at input feild',
            'error'
          )
        }
    if(newVal!==''){
        
        Swal.fire({
            html:'Converting your string...',
            timer:2500,
            timerProgressBar: true,
        },
        output.innerHTML=`Your entered value is "${newVal}" which is a "String" by default. <br> Now by using parseInt() it is now a number ${newVal}.`  
        )
    
    }
}

// Controlling length
function length(){
    let newVal = input.value;
    if(newVal==''){
        Swal.fire(
            'Error! Invalid Amount',
            '',
            'error'
          )
        }
    if(newVal!==''){
        Swal.fire({
            title:'Tax!',
            text:'Enter percentage of sales tax',
            input:'text',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                  return 'You need to write something!'
                }
                else{
                    newVal = parseInt(newVal);
                    let totalTax = (newVal/100)*value;
                    let totalPrice;
                    totalPrice  = totalTax + newVal;
                    let pay;
                    pay = totalPrice.toFixed(0);
                    output.innerHTML=`Your total tax will be Rs${totalTax} and your total price will be Rs.${totalPrice} and you will pay an amount of Rs.${pay}.`
                }
            }
        }

        )
    }
}


// GST
function gst(){
    let newVal = input.value;
    if(newVal==''){
        Swal.fire(
            'Error! Invalid Amount',
            'Enter some amount in input feild',
            'error'
          )
    } 
    if(newVal!==''){
        Swal.fire({
            title:'Tax!',
            text:'Enter percentage of sales tax',
            input:'text',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                  return 'You need to write something!'
                }
                else{
                    newVal = parseInt(newVal);
                    totalTax = (newVal/100)*value;
                    totalAmount = totalTax+newVal;
                    output.innerHTML = `Your tax will be Rs.${totalTax}<br>and your total amount will be Rs.${totalAmount}. `
                }
            }
    })

    // let amount = input.value;
    // if(amount==null||amount==''){
    //     Swal.fire(
    //         'Error! Invalid Amount',
    //         'Enter some amount',
    //         'error'
    //       )
    //     input.setAttribute('placeholder','Enter your amount here')
    //     return
    // }
    // else{
    //     amount = parseInt(amount)
    //     let taxRate = +prompt('Enter Sales Tax percentage');
    //     totaltax = (amount/100)*taxRate;
    //     totalAmount = totaltax+amount;
    //     output.innerHTML = `Your total tax will be: <br> Rs.${totaltax} <br> and your total amount including tax will be: <br> Rs.${totalAmount}.`;
    //     input.value='';
    //     input.setAttribute('placeholder','Enter your text here')
    // }
}
}