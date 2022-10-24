const chevron = document.querySelectorAll(".fa-circle-chevron-left");
const job = document.querySelectorAll(".job");
const education = document.querySelectorAll(".education");
const abilities = document.querySelector(".abilities");

chevron.forEach((ch) => {
  ch.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "rotate-chev"
    );
    className = e.target.parentElement.parentElement.parentElement.classList[0];
    if (className == "job-resume") {
      job.forEach((item) => {
        item.classList.toggle("show");
      });
    } else if (className == "education-resume") {
      education.forEach((item) => {
        item.classList.toggle("show");
      });
    } else if (className == "abilities-resume") {
      abilities.classList.toggle("show");
    }
  });
});
