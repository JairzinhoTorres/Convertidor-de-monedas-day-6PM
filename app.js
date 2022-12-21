// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 159.875
    return valueInPound;
}
const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};