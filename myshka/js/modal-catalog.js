var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var openButtonCart1 = document.getElementById("good__buy-1");
var openButtonCart2 = document.getElementById("good__buy-2");
var openButtonCart3 = document.getElementById("good__buy-3");

var openModal = function(event) {
  event.preventDefault();
  modal.classList.add("modal--show");
  overlay.classList.add("overlay--show");
};

openButtonCart1.addEventListener("click", openModal);
openButtonCart2.addEventListener("click", openModal);
openButtonCart3.addEventListener("click", openModal);

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
