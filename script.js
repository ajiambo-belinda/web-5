// Part 1: Variables, Conditionals, Input/Output
document.getElementById('checkAgeBtn').addEventListener('click', () => {
  const ageInput = document.getElementById('ageInput').value;
  const age = Number(ageInput);
  let message;
  if (isNaN(age) || age <= 0) {
    message = 'Please enter a valid positive age.';
  } else if (age >= 18) {
    message = 'You are an adult.';
  } else {
    message = 'You are a minor.';
  }
  console.log('Age check:', message);
  document.getElementById('ageResult').textContent = message;
});

// Part 2: Functions for reusability - Calculate total of two numbers
function calculateTotal(num1, num2) {
  return num1 + num2;
}
document.getElementById('calcTotalBtn').addEventListener('click', () => {
  const n1 = Number(document.getElementById('num1').value);
  const n2 = Number(document.getElementById('num2').value);
  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById('functionResult').textContent = 'Please enter valid numbers.';
    return;
  }
  const total = calculateTotal(n1, n2);
  document.getElementById('functionResult').textContent = `Total: ${total}`;
  console.log('Function total:', total);
});

// Part 3: Loops - Display list items dynamically
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
document.getElementById('showListBtn').addEventListener('click', () => {
  const list = document.getElementById('itemList');
  list.innerHTML = ''; // Clear previous
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    li.textContent = items[i];
    list.appendChild(li);
  }
});

// Part 4: DOM Interactions - Toggle class on click
document.getElementById('toggleBtn').addEventListener('click', () => {
  const textElem = document.getElementById('domText');
  textElem.classList.toggle('highlight');
});
