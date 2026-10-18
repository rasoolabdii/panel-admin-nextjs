const farsiDigits = ["۰" , "۱" , "۲" , "۳" , "۴" , "۵" , "۶" , "۷" , "۸" , "۹"];

export function  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g , ",");
};

export function toPersianNumbers(num) {
    return num.toString().replace(/\d/g , (x) => farsiDigits[parseInt(x)]);
};

function toPersianNumbersWithComma(num) {
    const numberWithComma = numberWithCommas(num);
    const persianNumber = toPersianNumbers(numberWithComma);
    return persianNumber;
};
export default toPersianNumbersWithComma;