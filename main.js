const btnQuestions = document.querySelectorAll('#btnQuestion');

btnQuestions.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const answerELem = document.querySelector(`#${e.target.value}`);
    answerELem.toggleAttribute('hidden');
  });
});