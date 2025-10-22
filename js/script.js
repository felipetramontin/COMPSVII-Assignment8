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

                        console.log(`Question ${index + 1}: ${btn.dataset.answer}`);
                        console.log(userAnswers);
                });
        });
});

const showResultButton = document.getElementById('show-result');
showResultButton.addEventListener('click', () => {
        console.log('Final Answers:', userAnswers);
});

document.getElementById('show-result').addEventListener('click', displayResult);

function displayResult() {
        const counts = { A: 0, B: 0, C: 0, D: 0 };

        Object.values(userAnswers).forEach(answer => {
                counts[answer]++;
        });

        // Determine which answer was chosen most
        const topAnswer = Object.keys(counts).reduce((a, b) =>
                counts[a] > counts[b] ? a : b
        );

        let resultText = '';

        // Simple personality outcomes
        switch (topAnswer) {
                case 'A':
                        resultText =
                                "You're outgoing, energetic, and love being around people! You bring fun wherever you go.";
                        break;
                case 'B':
                        resultText =
                                "You're loyal, dependable, and value deep connections. Friends can always count on you.";
                        break;
                case 'C':
                        resultText =
                                "You're caring, empathetic, and love making others feel appreciated. You’re a true team player!";
                        break;
                case 'D':
                        resultText =
                                "You’re calm, thoughtful, and enjoy your alone time. You’re reflective and grounded.";
                        break;
                default:
                        resultText =
                                "Please answer all the questions before viewing your result!";
        }

        // Show the result
        const resultContainer = document.getElementById('result-container');
        const resultTextElement = document.getElementById('result-text');

        resultTextElement.textContent = resultText;
        resultContainer.style.display = 'block';
}