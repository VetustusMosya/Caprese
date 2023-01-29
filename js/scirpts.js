"use strict";
window.onload = function () {

  document.querySelector('html').classList.remove('hidden');

  try {
    document.querySelector("#preloader").classList.remove("show");
    document.querySelector(".main__logo").classList.add("animated__logo");
  } catch (error) { }

  let modalTimerId = document.location.pathname === '/' ? setTimeout(openModal, 3000) : "time";

  // !  Modal

  const modalTriggerBtn = document.querySelector("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  modalTriggerBtn.addEventListener("click", () => {
    openModal();
  });

  function closeModal() {
    modal.classList.toggle("show");
    modalTriggerBtn.classList.toggle("show");
    document.body.parentNode.style.overflow = "";
    changeSlide(true);
  }

  function openModal() {
    modal.classList.toggle("show");
    modalTriggerBtn.classList.remove("show");
    document.body.parentNode.style.overflow = "hidden";
    attArr[count].classList.add('show');
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

  // ! Slider

  const attArr = document.querySelectorAll("[data-img]"),
    nextBtn = document.querySelector(".modal__next"),
    backBtn = document.querySelector(".modal__back");
  let count = 0;

  if (attArr.length == 1) {
    nextBtn.remove();
    backBtn.remove();
  }

  nextBtn.addEventListener("click", () => {
    changeSlide(true);
  });

  backBtn.addEventListener("click", () => {
    changeSlide(false);
  });

  function changeSlide(move) {
    attArr[count].classList.remove('show');
    if (move) {
      count = count < attArr.length - 1 ? count + 1 : 0;
    } else {
      count = count > 0 ? count - 1 : attArr.length - 1;
    }
    attArr[count].classList.add('show');
  }
};