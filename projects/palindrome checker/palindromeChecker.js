function isPalindrome(str) 
{
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

function checkInput() 
{
  const inputValue = document.getElementById("text-input").value.trim();
  const resultElement = document.getElementById("result");
  if (!inputValue) 
  {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(inputValue)) 
  {
    resultElement.innerHTML = `<h1>${inputValue} is a <span>palindrome</span>!</h1>`;
  } 
  else 
  {
    resultElement.innerHTML = `<h1>${inputValue} is not a <span>palindrome</span></h1>`;
  }
}

document.getElementById("check-btn").addEventListener("click", checkInput);

const explanationBtn = document.getElementById("explanation-btn");
const explanationText = document.getElementById("explanation-text");

explanationBtn.addEventListener("click", () => {
  if (explanationText.textContent === "") {
    explanationText.innerHTML = `<h2>A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.</h2>`;
    explanationBtn.innerHTML = `<strong>Back</strong>`;
  } else {
    explanationText.textContent = "";
    explanationBtn.textContent = "What is a Palindrome?";
  }
});