/** @format */
function setFormMessage(formElement, type, message) {
	const messageElement = formElement.querySelector('.form-msg');

	messageElement.textContent = message;
	messageElement.classList.remove('msg-success', 'msg-error');
	messageElement.classList.add(`input-${type}-msg`);
}

function setInputError(inputElement, message) {
	inputElement.classList.add('form-input-err');
	inputElement.parentElement.querySelector('.input-err-msg').textContent =
		message;
}
function clearInputError(inputElement) {
	inputElement.classList.remove('form-input-err');
	inputElement.parentElement.querySelector('.input-err-msg').textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
	let signInForm = document.querySelector('#signIn');
	let signUpForm = document.querySelector('#signUp');

	document.querySelector('#linkSignUp').addEventListener('click', (e) => {
		e.preventDefault();
		signInForm.classList.add('toggle--hide');
		signUpForm.classList.remove('toggle--hide');
	});
	document.querySelector('#linkSignIn').addEventListener('click', (e) => {
		e.preventDefault();
		signInForm.classList.remove('toggle--hide');
		signUpForm.classList.add('toggle--hide');
	});

	signInForm.addEventListener('submit', (e) => {
		e.preventDefault();

		setFormMessage(
			signInForm,
			'error',
			'Invalid username/password combination'
		);
	});
	document.querySelectorAll('.form-input').forEach((inputElement) => {
		inputElement.addEventListener('blur', (e) => {
			if (
				e.target.id === 'signUpUsername' &&
				e.target.value.length > 0 &&
				e.target.value.length < 6
			)
				setInputError(inputElement, 'A minimum of 6 characters is required');
		});
		inputElement.addEventListener('input', (e) => {
			clearInputError(inputElement);
		});
	});
});
