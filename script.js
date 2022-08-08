const questions = document.querySelectorAll(".question");

console.log(questions);

questions.forEach((question) => {
    question.addEventListener("click", function () {
        question.classList.toggle("active");
  });
});