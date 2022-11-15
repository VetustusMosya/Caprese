"use strict";
window.onload = function () {
  try {
    document.querySelector("#preloader").classList.remove("show");
    document.querySelector(".main__logo").classList.add("animated__logo");
  } catch (error) { }

  const modalTimerId = document.location.pathname !== '/index.html' ? "9" : setTimeout(openModal, 5000);

  document.querySelector('html').classList.remove('hidden');

  const modalTrigger = document.querySelector("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  modalTrigger.addEventListener("click", openModal);

  function closeModal() {
    modal.classList.toggle("show");
    modalTrigger.classList.toggle("show");
    document.body.parentNode.style.overflow = "";
  }

  function openModal() {
    modal.classList.toggle("show");
    modalTrigger.classList.remove("show");
    document.body.parentNode.style.overflow = "hidden";
    clearInterval(modalTimerId); // ! time
  }

  modalCloseBtn.addEventListener("click", closeModal); // ! time

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

};