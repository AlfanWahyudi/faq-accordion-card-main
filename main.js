const btnQuestions = document.querySelectorAll('#btnQuestion');

btnQuestions.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const answerELem = btn.nextElementSibling;
    answerELem.toggleAttribute('hidden');
    btn.classList.toggle('btn-clicked');

    const imgArrow = btn.lastElementChild;
    imgArrow.classList.toggle('arrow-up')
  });
});