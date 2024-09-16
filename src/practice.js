const capitalize = (str) => {
  if (typeof str === "number") return false;
  else return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  },
};

function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

// Helper function to shift a single character
function shiftChar(char, shift) {
  if (isLetter(char)) {
    const charCode = char.charCodeAt(0);
    const base = char === char.toUpperCase() ? 65 : 97;
    // Shift the character, wrapping around if necessary
    return String.fromCharCode(((charCode - base + shift) % 26) + base);
  }
  return char; // Return unchanged if it's not a letter
}

// Helper function to check if a character is a letter
function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

function analyzeArray(arr) {
  const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
