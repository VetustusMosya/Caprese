"use strict";
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#preloader").classList.remove("show");

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
  }

  modalCloseBtn.addEventListener("click", closeModal);

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
});