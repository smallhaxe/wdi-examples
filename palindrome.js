exports.pal = isPal;

console.log(process.argv);

function isPal(str) {
    var ostr = str;
    check(str);
    function check(str) {
        if (str.length >= 2) {
            // determine whether each head/tail char pair is a match, until 2 or
            // fewer chars are left
            if (str.charAt(0) === str.charAt(str.length - 1)) {
                // if first head/tail pair match, then continue recursively 
                var substr = str.slice((str.length - (str.length - 1)), (str.length
                - 1));
                console.log('Head/Tail pair (' + str.charAt(0) + ', ' +
                str.charAt(str.length - 1) + ') matches.');
                return isPal(substr);
            } else {
                // if they don't match, it's a FAILindrome
                console.log('Head/Tail pair (' + str.charAt(0) + ', ' + str.charAt(str.length - 1) + ') is a FAILindrome');
            }
        } else if (str.length === 2) {
            // if last two chars match, it's a palindrome
            if (str.charAt(0) === str.charAt(str.length - 1)) {
                console.log('Head/Tail pair (' + str.charAt(0) + ') matches.');
                console.log(ostr + ' is a palindrome!');
            } else {
                // if they don't match, it's a FAILindrome
                console.log('Head/Tail pair (' + str.charAt(0) + ', ' +
                str.charAt(str.length - 1) + ') does NOT match.\nWomp womp.');
                console.log('The word is a FAILindrome.\nHa!');
            }
        } else if (str.length === 1) {
            console.log('Matches confirmed through all the Head/Tail pairs.');
            console.log('That means ' + ostr + ' the word is a palindrome!');
        }
    }
}
