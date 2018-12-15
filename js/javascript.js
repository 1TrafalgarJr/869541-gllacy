var link = document.querySelector('.login-link');

var popup = document.querySelector('.modal-login');
var close = popup.querySelector('.popup-close');

var form = popup.querySelector('form');/*валидация формы*/
var login = popup.querySelector('[name=feedback-name]');/*фокус на логин при открытии модального окна*/
var email = popup.querySelector('[name=feedback-email]');
var text = popup.querySelector('[name=feedback-text]');


var isStorageSupport = true;

try {
  localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');

  if (isStorageSupport) {/*сохранили email в поле*/
    login.value = localStorage.getItem('login');
    email.value = localStorage.getItem('email');
    text.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function (evt) {
  //evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
      localStorage.setItem('email', email.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});
