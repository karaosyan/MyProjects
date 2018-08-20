  var link = document.querySelector(".map__contacts-link");
  var popup = document.querySelector(".modal-feedback");
  var form = popup.querySelector(".modal-feedback__form");
  var login = popup.querySelector("[name=feedback-name]");
  var email = popup.querySelector("[name=feedback-email]");
  var text = popup.querySelector("[name=feedback-text]");
  var overlay = document.querySelector(".modal-overlay");
  var close = document.querySelector(".modal-close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show");
  }); 

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !text.value || (text.value == "Напишите что нибудь...")) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } 
  });
