var link = document.querySelector(".login-link");

var popup = document.querySelector(".modal-login");
var close = document.querySelector(".popup-close");

var form = popup.querySelector("form");/*валидация формы*/
var login = document.querySelector("[name=feedback-name]");/*фокус на логин при открытии модального окна*/
var email = popup.querySelector("[name=feedback-email]");
var text = document.querySelector("[name=feedback-text]");


var isStorageSupport = true;/*включили поддержку localStorage во всех браузерах*/
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {/*сохранили email в поле*/
    email.value = storage;
    login.focus();
  } else {
    text.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин, пароль и комментарий");
  }  else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
