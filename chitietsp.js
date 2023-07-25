let amountElement = document.getElementById('mount');
// console.log(amountElement);
let amount = amountElement.value;
// let handlePlus = () =>{
//     console.log(amount);
// }
function render(amount) {
    amountElement.value = amount;
}
function handlePlus() {
    // console.log(amount);
    amount++;
    render(amount);
}

function handleMinus() {
    if (amount > 1) {
        amount--;
        render(amount);
    }
}

amountElement.addEventListener('input', () =>{
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount) || amount == 0) ?1 : amount;
    render(amount);
    // console.log(amount);
});