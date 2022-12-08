'use strict';


const currencyOne = document.getElementById('currency-one')
const currencyTwo = document.getElementById('currency-two')
const amountOne = document.getElementById('amount-one')
const amountTwo = document.getElementById('amount-two')
const rateEl = document.getElementById('rate')
const swapBtn = document.getElementById('swap')


function exchange() {
    fetch('https://v6.exchangerate-api.com/v6/b35e607e04ed3dfa0ec49c2f/latest/USD')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const exchangeRate = data.conversion_rates[currencyTwo.value] / data.conversion_rates[currencyOne.value]
        rateEl.innerText= `1 ${currencyOne.value} = ${exchangeRate.toFixed(2)} ${currencyTwo.value}`
        amountTwo.value = (amountOne.value * (exchangeRate)).toFixed(2)
    })
}


currencyOne.addEventListener('change', exchange)
currencyTwo.addEventListener('change', exchange)
amountOne.addEventListener('input', exchange)
amountTwo.addEventListener('input', exchange)


//Swap
swapBtn.addEventListener('click', swapExchangeValues)

function swapExchangeValues() {
    const values = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = values
    exchange()
}

exchange()
