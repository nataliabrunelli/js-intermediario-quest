const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  inputs.forEach((i) => {
    i.classList.remove("vermelho", "verde");

    if (i.value === "") {
      e.preventDefault();
      i.classList.add("vermelho");
    } else {
      i.classList.add("verde");
    }
  });
});