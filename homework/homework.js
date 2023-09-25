'use strict';

//     0  1  1  0  0  1
//   (0*2^5) + (1*2^4) + (1*2^3) + (0*2^2) + (0*2^1) + (1*2^0)
//       0    +     16  +  8     +     0     +  0     +  1        = 25

function BinaireDecimal(num) {
   let sum = 0;

   let array = num.split("").reverse()

   for(let i = 0; i < num.length; i++){

   sum = sum + array[i] * 2 ** i;
}
   return sum
}

console.log(BinaireDecimal("011001"))

//Autre façon

function BinaireDecimal(num) {
  let sum = 0;

  let array = num.split("");

  for (let i = 0; i < num.length; i++) {
    sum = sum + array[i] * Math.pow(2, array.length - 1 - i);
  }
  return sum;
}

console.log(BinaireDecimal("1101101"));

// 25/2 = 12.5 =>1
// 12/2 = 6  =>  0
// 6/2 =  3      0
// 3/2 =  1.5    1
// 1/2 =  0.5    1

function DecimalABinaire(num) {
  let binaire = [];

  while (num >= 1) {
    let res = Math.trunc(num % 2);
    num = num / 2;
    binaire.unshift(res);
  }

  return binaire.join("");
}
console.log(DecimalABinaire("25"));

module.exports = {
  BinaireDecimal,
  DecimalABinaire,
};

