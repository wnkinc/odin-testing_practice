const capitalize = (str) => {
  if (typeof str === "number") return false;
  else return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

export { capitalize, reverseString };
