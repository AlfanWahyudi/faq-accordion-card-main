const btnQuestions = document.querySelectorAll('#btnQuestion');

const toggleFaqHeight = (currentHeight, actualHeight, answerHeight) => {
  const minHeight = 15;
  return currentHeight !== actualHeight ? `${answerHeight}px` : `${minHeight}px`;
}

const setHeightFaqItem = (faqItem, answerElem) => {
  const paddingFaq = 17;
  const btnQestionHeight = 18;

  const answerHeight = answerElem.offsetHeight + paddingFaq;
  const actualFaqHeight = answerHeight + paddingFaq + btnQestionHeight;

  faqItem.style.height = toggleFaqHeight(faqItem.offsetHeight, actualFaqHeight, answerHeight);
}

const rotatingArrowIcon = (imgArrow) => {
  imgArrow.classList.toggle('faq__arrow--up');
}

const toggleExpandAnswer = (event) => {
  const btn = event.srcElement;
  const imgArrow = btn.lastElementChild;
  const faqItem = btn.parentElement;
  const answerElem = btn.nextElementSibling;

  btn.classList.toggle('faq__btn--clicked');
  setHeightFaqItem(faqItem, answerElem);
  rotatingArrowIcon(imgArrow);
}

btnQuestions.forEach(btn => {
  btn.addEventListener('click', toggleExpandAnswer);
});