var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var openButton = document.querySelector(".product-week__link");

var openModal = function(event) {
  event.preventDefault();
  modal.classList.add("modal--show");
  overlay.classList.add("overlay--show");
};

openButton.addEventListener("click", openModal);

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
});

document.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) {
    modal.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
  }
});
