let price = 3.26;

let cid = 
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const denominationValues = 
{
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

const canGiveExactChange = (changeNeeded, cid) => 
{
  let remainingChange = changeNeeded;
  for (let i = cid.length - 1; i >= 0; i--) {
    const [denomination, amountAvailable] = cid[i];
    const denominationValue = denominationValues[denomination];
    const maxUsable = Math.min(
      Math.floor(remainingChange / denominationValue) * denominationValue,
      amountAvailable
    );
    remainingChange = parseFloat((remainingChange - maxUsable).toFixed(2));
    if (remainingChange === 0) break;
  }
  return remainingChange === 0;
};


purchaseBtn.addEventListener("click", () => 
{
  const cash = parseFloat(cashInput.value);

  if (isNaN(cash) || cash <= 0) 
  {
    alert("Please enter a valid amount of cash.");
    return;
  }

  if (cash < price) 
  {
    alert("Customer does not have enough money to purchase the item.");
    return;
  }

  if (cash === price) 
  {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const changeNeeded = parseFloat((cash - price).toFixed(2));
  const totalInDrawer = parseFloat(cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2));

  if (changeNeeded > totalInDrawer) 
  {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  if (changeNeeded === totalInDrawer) 
  {
    changeDue.textContent = `Status: CLOSED ${cid
      .filter(([_, amount]) => amount > 0)
      .map(([denomination, amount]) => `${denomination}: $${amount}`)
      .join(" ")}`;
    return;
  }

  if (!canGiveExactChange(changeNeeded, cid)) 
  {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const changeArray = [];
  let remainingChange = changeNeeded;

  for (let i = cid.length - 1; i >= 0; i--) 
  {
    const [denomination, amountAvailable] = cid[i];
    const denominationValue = denominationValues[denomination];
    let amountToUse = 0;

    while (remainingChange >= denominationValue && cid[i][1] > 0) 
    {
      remainingChange = parseFloat((remainingChange - denominationValue).toFixed(2));
      amountToUse += denominationValue;
      cid[i][1] = parseFloat((cid[i][1] - denominationValue).toFixed(2));
    }

    if (amountToUse > 0) 
    {
      changeArray.push([denomination, parseFloat(amountToUse.toFixed(2))]);
    }
  }

  if (remainingChange > 0) 
  {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const isDrawerEmpty = cid.every(([_, amount]) => amount === 0);

  if (isDrawerEmpty) 
  {
    changeDue.textContent = `Status: CLOSED ${changeArray
      .map(([denomination, amount]) => `${denomination}: $${amount}`)
      .join(" ")}`;
    return;
  }

  changeDue.textContent = `Status: OPEN ${changeArray
    .map(([denomination, amount]) => `${denomination}: $${amount}`)
    .join(" ")}`;
});