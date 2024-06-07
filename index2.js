// nomor 1
function findThreeNumbers(array) {
  let combinations = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) {
          combinations.push([array[i], array[j], array[k]]);
        }
      }
    }
  }

  // Mengembalikan hasil
  if (combinations.length > 0) {
    return combinations[0];
  } else {
    return "Not Found";
  }
}

// Contoh penggunaan
const arrayNumbers = [2, 1, 5, 7, 4, -8, -3, -1];
const result = findThreeNumbers(arrayNumbers);
console.log(result); // Output: [-3, 1, 2]

// nomor 2
function removeDuplicate(numbers) {
    let array = [];
    for (let index = 0; index < numbers.length; index++) {
        if (index == 0) {
            array.push(numbers[index]);
        } else {
            if (!array.includes(numbers[index])) {
                array.push(numbers[index]);
            }
        }
    }
    return array;
}

const array = [1, 1, 4, 4, 4, 5, 5, 6, 8, 9, 10, 10, 12, 13, 13, 17];
console.log(removeDuplicate(array));

// nomor 4
function isPalindrome(str) {
    str = str.toLowerCase();
    const strLength = str.length;
    for (let i = 0; i < strLength / 2; i++) {
        if (str[i] !== str[strLength - 1 - i]) {
            return false;
        }
    }
    return true;
}
