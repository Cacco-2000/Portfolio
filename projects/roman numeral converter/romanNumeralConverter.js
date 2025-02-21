const convertButton = document.getElementById("convert-btn");
const outputContainer = document.querySelector(".output-container");
const output = document.getElementById("output");

const toRoman = (num) => {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let roman = "";
  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      roman += romanMap[i].symbol;
      num -= romanMap[i].value;
    }
  }
  return roman;
};


const checkInput = () => {
  const inputElement = document.getElementById("number");
  const value = parseInt(inputElement.value, 10);

  outputContainer.classList.remove("error", "warning", "success");

  if (!inputElement.value || isNaN(value)) 
  {
    output.innerHTML = "Please enter a valid number";
    outputContainer.classList.add("error");
  } 
  else if(value <= 0) 
  {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    outputContainer.classList.add("warning");
  }
  else if(value >= 4000)
  {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    outputContainer.classList.add("warning");
  }
  else 
  {
    const romanNumber = toRoman(value);
    output.innerHTML = romanNumber;
    outputContainer.classList.add("success");
  }
};

convertButton.addEventListener("click", checkInput);