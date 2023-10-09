
const numbers = [];

while (true) {
  const userInput = printf('Enter a number (or leave empty to finish):');

  if (userInput === '' || userInput === null) {
    break;
  }
  
  const number = parseFloat(userInput);
  
  if (!isNaN(number)) {
    numbers.push(number);
  } else {
    alert('Invalid input. Please enter a valid number.');
  }
}


numbers.sort((a, b) => b - a);

printf('Sorted in descending order:', numbers);
