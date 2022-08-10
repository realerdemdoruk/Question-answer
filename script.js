const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", function () {
        question.classList.toggle("active");
  });
});