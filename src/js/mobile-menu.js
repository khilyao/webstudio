(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyRef = document.querySelector("body");

  const body = document.querySelector("body");
  const menuContainer = document.querySelector(".menu-container");

  const footerScroll = document.querySelector("#footer-scroll");

  footerScroll.addEventListener("click", function () {
    body.classList.remove("menu-open");
    menuContainer.classList.remove("is-open");
    menuBtnRef.classList.remove("is-open");
  });

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();
