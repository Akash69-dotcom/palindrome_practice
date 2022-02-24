
function checkPalindrome(str) {

    const arr = string.split('');

    const rev_Arr = arr.reverse();

    const rev_String = rev_Arr.join('');

    if(string == rev_String) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string = prompt('Enter a string: ');

checkPalindrome(string);