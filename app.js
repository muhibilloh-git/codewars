{
  // 1
  //   function twoSort(s) {
  //     return s.sort()[0].split("").join("***");
  //   }
}
{
  // 2
  //   function isValidWalk(walk) {
  //     if (walk.length !== 10) return false;
  //     let x = 0;
  //     let y = 0;
  //     for (let dir of walk) {
  //       if (dir === "n") y++;
  //       if (dir === "s") y--;
  //       if (dir === "e") x++;
  //       if (dir === "w") x--;
  //     }
  //     return x === 0 && y === 0;
  //   }
}
{
  // 3
  //   function getCount(str) {
  //     let count = 0;
  //     for (let char of str) {
  //       if ("aeiou".includes(char)) {
  //         count++;
  //       }
  //     }
  //     return count;
  //   }
}
{
  // 4
  //   function countPositivesSumNegatives(input) {
  //     if (!input || input.length === 0) return [];
  //     let countPos = 0;
  //     let sumNeg = 0;
  //     for (let i = 0; i < input.length; i++) {
  //       if (input[i] > 0) countPos++;
  //       else if (input[i] < 0) sumNeg += input[i];
  //     }
  //     return [countPos, sumNeg];
  //   }
}

{
  // 5
  //   function friend(friends) {
  //     return friends.filter((name) => name.length === 4);
  //   }
}

{
  // 6
  //   function findEvenIndex(arr) {
  //     for (let i = 0; i < arr.length; i++) {
  //       const leftSum = arr.slice(0, i).reduce((sum, num) => sum + num, 0);
  //       const rightSum = arr.slice(i + 1).reduce((sum, num) => sum + num, 0);
  //       if (leftSum === rightSum) {
  //         return i;
  //       }
  //     }
  //     return -1;
  //   }
}

{
  // 7
  //   function reverseWords(str) {
  //     return str
  //       .split(" ") // So‘zlar bo‘yicha ajratamiz
  //       .map((word) => word.split("").reverse().join("")) // Har bir so‘zni teskari qilamiz
  //       .join(" "); // So‘zlarni yana bo‘sh joy bilan birlashtiramiz
  //   }
}
{
  // 8
  //   function descendingOrder(n) {
  //     return parseInt(
  //       n
  //         .toString() // Sonni stringga aylantiramiz
  //         .split("") // Har bir raqamni massivga ajratamiz
  //         .sort((a, b) => b - a) // Katta raqamlar avval keladigan qilib saralaymiz
  //         .join("") // Massivni stringga birlashtiramiz
  //     );
  //   }
}
{
  // 9
  //   var isSquare = function (n) {
  //     return n >= 0 && Number.isInteger(Math.sqrt(n));
  //   };
}

{
  // 10
//   function dnaStrand(dna) {
//     return dna
//       .split("")
//       .map(function (char) {
//         if (char === "A") return "T";
//         if (char === "T") return "A";
//         if (char === "C") return "G";
//         if (char === "G") return "C";
//       })
//       .join("");
//   }
}
