const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".header__menu");
const toggleBtns = document.querySelectorAll(".person__btn");
const personsInfo = document.querySelectorAll(".person");
const key = document.querySelector("#key");
const tooltip = document.querySelector(".tokenomics__tooltip");

// открыть/закрыть меню
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
  document.body.classList.toggle("scroll-off");
});

// закрытие меню при нажатии на ссылку
document.querySelectorAll(".menu__link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("visible");
    menuBtn.classList.remove("close");
    document.body.classList.remove("scroll-off");
  })
);

// переключение контента в блоке about
toggleBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
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

// копирование кода в буфер обмена
document.querySelector("#key-copy").addEventListener("click", () => {
  navigator.clipboard.writeText(key.getAttribute("data-key"));
  tooltip.classList.add("visible");
  setTimeout(() => tooltip.classList.remove("visible"), 400);
});
