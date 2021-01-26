const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const amountOne = document.querySelector('#amount1');
const amountTwo = document.querySelector('#amount2');
const small= document.querySelector('.rate');

function convert(){
    const currency1=currencyOne.value;
    const currency2=currencyTwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then(res=>res.json())
    .then(data=>{
     const rate=   data.rates[currency2];
     small.innerText=`1${currency1}= ${rate}${currency2}`;
     amountTwo.value = (amountOne.value * rate).toFixed(2);


    })
}
currencyOne.addEventListener('change',convert);
currencyTwo.addEventListener('change',convert);
amountOne.addEventListener('change',convert);
amountTwo.addEventListener('change',convert);

const button = document.querySelector('.swap');
button.addEventListener('click',()=>{
    const temp = currencyOne.value;
    currencyOne.value =currencyTwo.value;
    currencyTwo.value=temp;
})