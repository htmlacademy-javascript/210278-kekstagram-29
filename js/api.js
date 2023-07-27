import {showErrorNotification} from './notification.js';

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные',
  SEND_DATA: 'Не удалось отправить форму',
};

const getPosts = (onSuccess) =>
  fetch('https://29.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showErrorNotification(ErrorText.GET_DATA);
    });

const setPost = (data, onSuccess) =>
  fetch('https://29.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: data
    })
    .then((response) => {
      if (response.ok) {
        showSuccessNotification();
      } else {
        showErrorNotification(ErrorText.SEND_DATA);
      }
    })
    .catch((err) => {
      showErrorNotification(ErrorText.SEND_DATA);
    });

export {getPosts, setPost};
