const question = document.querySelector('.question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', function() {
  // Здесь можно изменить картинку и текст вопроса по вашему желанию
  question.innerHTML = `
    <img src="image-removebg-preview.png" alt="New Question Image">
    <p>I LOVE YOU TOO!!!</p>
  `;
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
});

noBtn.addEventListener('click', function() {
  const containerRect = document.querySelector('.container').getBoundingClientRect();
  const randomX = Math.random() * (containerRect.width - 100);
  const randomY = Math.random() * (containerRect.height - 100);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
