const check = document.getElementById("check-btn")
const clear = document.getElementById("clear-btn")
const input = document.getElementById("user-input")
const result = document.getElementById("results-div")


const validatePhoneNumber = (phoneNumber) => 
{
  const validUSPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  const invalidStartRegex = /^(2|0|-|11|\d{2})/;

  if (validUSPhoneRegex.test(phoneNumber)) 
  {
    return { isValid: true, message: `Valid US number: ${phoneNumber}` };
  } 
  else if (invalidStartRegex.test(phoneNumber)) 
  {
    return { isValid: false, message: `Invalid US number: ${phoneNumber}` };
  } 
  else 
  {
    return { isValid: false, message: `Invalid US number: ${phoneNumber}` };
  }
};

const checkFunction = () => 
{
  const phoneNumber = input.value.trim(); 
  if (!phoneNumber) 
  {
    alert("Please provide a phone number");
    return;
  }

  const validation = validatePhoneNumber(phoneNumber);
  result.innerHTML = validation.message;
};

const clearFunction= () => 
{
  result.innerHTML = "";
  input.value = "";
}

check.addEventListener("click", checkFunction)
clear.addEventListener("click", clearFunction)
