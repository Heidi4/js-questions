//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // loop to get one article
  // console.log(question);
  const btn = question.querySelector(".question-btn"); // take the button in an article
  // console.log(btn);
  btn.addEventListener("click", function () {
    // listen for click
    questions.forEach(function (item) {
      // loop agein in all articles
      if (item !== question) {
        // if the current article  is not equal to the newly selected article then remove the class show-text
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text"); // add the newly selected class the class show-text
  });
});

// traversing the dom
/*
const questionBtns = document.querySelectorAll('.question-btn');

questionBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});
*/
