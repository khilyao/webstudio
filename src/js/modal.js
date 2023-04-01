(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    svgIcon: document.querySelector(".close-modal__icon"),
    iconSrc: document.querySelector(".close-modal__icon-src"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.modal.addEventListener("click", closeModal);

  function openModal() {
    document.body.classList.add("modal-open");
    refs.modal.classList.remove("is-hidden");
  }

  function closeModal(event) {
    if (
      event.target === refs.modal ||
      event.target === refs.closeModalBtn ||
      event.target === refs.svgIcon ||
      event.target === refs.iconSrc
    ) {
      document.body.classList.remove("modal-open");
      refs.modal.classList.add("is-hidden");
    }
    console.log(event.target);
  }
})();
