
function ceaserCipher(str,shift) {
  let answer = [];
  let chars = str.split('');

  chars.forEach(function (el) {
    let charCode = el.charCodeAt(0);

    if (charCode === 32) {
      answer.push(" ");
      return;
    }
      charCode = charCode + shift;
    if (charCode > 122){
      charCode = charCode - 26;
      answer.push(String.fromCharCode(charCode));
    }
     else {
      answer.push(String.fromCharCode(charCode));
    }
  });
  return answer.join('');
}


console.log(ceaserCipher("apples and bannanyyyyy",6));
console.log(ceaserCipher("zzzz",1));
console.log(ceaserCipher("aaaaa",6));
