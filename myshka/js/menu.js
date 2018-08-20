var button = document.querySelector(".site-header__toggler");
var navigation = document.querySelector(".main-nav");
var search = document.querySelector(".site-header__list");


button.classList.toggle("site-header__toggler--open");
navigation.classList.remove("main-nav--no-js");
search.classList.remove("site-header__list--no-js");

button.addEventListener("click", function() {

  button.classList.toggle("site-header__toggler--open");

  if (navigation.classList.contains("main-nav--no-js") && search.classList.contains("site-header__list--no-js")) {
      navigation.classList.remove("main-nav--no-js");
      search.classList.remove("site-header__list--no-js");
  } else {
    navigation.classList.add("main-nav--no-js");
    search.classList.add("site-header__list--no-js");
  }
});
