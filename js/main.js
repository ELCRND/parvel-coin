const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".header__menu");
const toggleBtns = document.querySelectorAll(".person__btn");
const personsInfo = document.querySelectorAll(".person");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
});

toggleBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const contentType = e.target.parentNode.getAttribute("data-type");
    toggleBtns.forEach((b) => b.classList.remove("active-btn"));
    e.target.parentNode.classList.add("active-btn");

    personsInfo.forEach((el, idx) => {
      idx == contentType
        ? el.classList.remove("hidden")
        : el.classList.add("hidden");
    });
  })
);
