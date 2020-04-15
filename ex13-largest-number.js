function sorting(arrNumber) {
    let sortedArr = [];
    for (let i = 0; i < arrNumber.length; i++) {
        let temp = 0;
        for (let j = 0; j < arrNumber.length - i; j++) {
            temp = arrNumber[j]
            if (arrNumber[j] > arrNumber[j+1]) {
                temp = arrNumber[j+1];
                arrNumber[j+1] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
        sortedArr.push(temp);
    }
    return sortedArr;
}

function getTotal(arrNumber) {
   let sortedArr = sorting(arrNumber);
   let counter = 0;
   let angkaTerbesar = sortedArr[0];

   for (let i = 0; i < sortedArr.length; i++) {
       if (sortedArr[0] == sortedArr[i]) {
           counter += 1;
       }
   }
   return `angka paling besar adalah ${angkaTerbesar} dan jumlah kemunculan sebanyak ${counter} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''