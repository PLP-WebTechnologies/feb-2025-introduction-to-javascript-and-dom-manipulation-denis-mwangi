function changeText() {
  const title = document.getElementById('title');
  const originalText = '🌈 Welcome to My Colorful Page';
  title.textContent =
    title.textContent === originalText
      ? '🎉 You changed the title!'
      : originalText;
}

function changeStyle() {
  const description = document.getElementById('description');
  const colors = ['#f67280', '#c06c84', '#6c5b7b', '#355c7d'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  description.style.color = randomColor;
  description.style.fontSize = '1.2rem';
}

function toggleBox() {
  const container = document.getElementById('container');
  const existingBox = document.getElementById('dynamicBox');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newDiv = document.createElement('div');
    newDiv.id = 'dynamicBox';
    newDiv.className = 'dynamic-box';
    newDiv.textContent = '🎁 This box was added dynamically!';
    container.appendChild(newDiv);
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
