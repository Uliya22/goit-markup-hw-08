(() => {
  const refs = {
    openMenuBtn: document.querySelector(".open-mob-btn"),
    closeMenuBtn: document.querySelector(".close-mob-btn"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body")
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle("modal-open");
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll")
  }
})();