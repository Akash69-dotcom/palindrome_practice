function convertToBinary (number, bin) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

window.onload = function () {
    console.log(convertToBinary(25));
    console.log(convertToBinary(8));
}