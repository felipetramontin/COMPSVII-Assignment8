const questionBlocks = document.querySelectorAll('.question-block');
console.log(questionBlocks);

const userAnswers = {};

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll('.answer-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('selected'));

      btn.classList.add('selected');

      userAnswers[index + 1] = btn.dataset.answer;

      console.log(`Question ${index+1}: ${btn.dataset.answer}`);
      console.log(userAnswers);
    });
  });
});