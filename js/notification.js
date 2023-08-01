const onWindowClick = (evt, closeNotification) => {
  if (!evt.target.closest('div')) {
    closeNotification();
  }
};

const onEscClick = (evt, closeNotification) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
    closeNotification();
  }
};

const showSuccessNotification = () => {
  const template = document.querySelector('#success').content;
  const element = template.cloneNode(true);

  const successButton = element.querySelector('.success__button');
  const successElement = element.querySelector('.success');

  const onCloseSuccessNotificationClick = () => {
    closeSuccessNotification();
  };

  const closeSuccessNotification = () => {
    successButton.removeEventListener('click', onCloseSuccessNotificationClick);
    successElement.removeEventListener('click', onCloseSuccessNotificationClick);
    document.addEventListener('keydown', onEscClick);

    successElement.remove();
  };

  successButton.addEventListener('click', onCloseSuccessNotificationClick);
  window.addEventListener('click', (evt) => onWindowClick(evt, closeSuccessNotification));
  document.addEventListener('keydown', (evt) => onEscClick(evt, closeSuccessNotification));

  const docFragment = document.createDocumentFragment();
  docFragment.appendChild(element);
  document.querySelector('body').appendChild(docFragment);
};

const showErrorNotification = (err) => {
  const template = document.querySelector('#error').content;
  const element = template.cloneNode(true);

  const errorButton = element.querySelector('.error__button');
  const errorElement = element.querySelector('.error');

  const errorTitle = element.querySelector('.error__title');
  errorTitle.textContent = err;

  const onCloseErrorNotificationClick = () => {
    closeErrorNotification();
  };

  const closeErrorNotification = () => {
    errorButton.removeEventListener('click', onCloseErrorNotificationClick);
    errorElement.removeEventListener('click', onCloseErrorNotificationClick);
    document.addEventListener('keydown', onEscClick, {capture: true});

    errorElement.remove();
  };

  errorButton.addEventListener('click', onCloseErrorNotificationClick);
  window.addEventListener('click', (evt) => onWindowClick(evt, closeErrorNotification));
  document.addEventListener('keydown', (evt) => onEscClick(evt, closeErrorNotification), {capture: true});

  const docFragment = document.createDocumentFragment();
  docFragment.appendChild(element);
  document.querySelector('body').appendChild(docFragment);
};

export {showSuccessNotification, showErrorNotification};
