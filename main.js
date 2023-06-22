const container = document.querySelector('.grid-container');
const resetButton = document.querySelector('#reset-button');

function createGrid(numSquares) {
  container.innerHTML = '';
  container.style.display = 'grid';
  container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;

  for (let i = 0; i < numSquares * numSquares; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);

    // Add event listener for hover effect
    div.addEventListener('mouseenter', function() {
      div.style.backgroundColor = 'black';
    });
  }
}

resetButton.addEventListener('click', function() {
  const numSquares = prompt('Enter the number of squares per side (maximum 100):');
  const validatedNumSquares = parseInt(numSquares);

  if (!isNaN(validatedNumSquares) && validatedNumSquares > 0 && validatedNumSquares <= 100) {
    createGrid(validatedNumSquares);
  } else {
    alert('Invalid input! Please enter a number between 1 and 100.');
  }
});

createGrid(16);
