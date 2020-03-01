var writeBtn = document.querySelector('.write-btn');
var popupWrite = document.querySelector('.write');
var writeCloseBtn = document.querySelector('.close-btn');
var nameInput = popupWrite.querySelector('[name=user-name]');
var mailInput = popupWrite.querySelector('[name=user-email]');
var messageInput = popupWrite.querySelector('[name=user-message]');
var writeForm = document.querySelector('.write-form');
var mapLink = document.querySelector('.contacts-map-link');
var mapBig = document.querySelector('.map-big');
var mapCloseBtn = mapBig.querySelector('.close-btn');
var isStorageSupport = true;
var storageName = '';
var storageMail = '';

try {
	storageName = localStorage.getItem('user-name');
	storageMail = localStorage.getItem('user-mail');
} catch(err) {
	isStorageSupport = false;
}
writeBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	popupWrite.classList.add('popup-show');
	if(storageName) {
		nameInput.value = storageName;
		mailInput.focus();
		if(storageMail) {
			mailInput.value = storageMail;
			messageInput.focus();
		} else {
			mailInput.focus();
		}
	} else {
		nameInput.focus();
	}
});
writeCloseBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	popupWrite.classList.remove('popup-show');
	popupWrite.classList.remove('popup-error');
});
writeForm.addEventListener('submit', function(evt) {
	if(!nameInput.value || !mailInput.value || !messageInput.value) {
		evt.preventDefault();
		popupWrite.classList.remove('popup-error');
		popupWrite.offsetWidth = popupWrite.offsetWidth;
		popupWrite.classList.add('popup-error');
	} else {
		if(isStorageSupport) {
			localStorage.setItem('user-name', nameInput.value);
			localStorage.setItem('user-mail', mailInput.value);
		}
	}
});
window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		if(popupWrite.classList.contains('popup-show')) {
			popupWrite.classList.remove('popup-show');
			popupWrite.classList.remove('popup-error');
		}
	}
});
mapLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapBig.classList.add('popup-show');
});
mapCloseBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapBig.classList.remove('popup-show');
});
window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		if(mapBig.classList.contains('popup-show')) {
			mapBig.classList.remove('popup-show');
		}
	}
});