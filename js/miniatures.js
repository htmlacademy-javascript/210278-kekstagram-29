import {viewPicture} from './picture.js';

const viewMiniatures = (objects) => {
  const onPictureClick = (evt) => {
    const elt = evt.target.closest('.picture')?.querySelector('.picture__img');

    if(elt !== undefined && elt !== null) {
      const currentObject = objects.find((item) => item.id === parseInt(elt.id, 10));

      viewPicture(currentObject);
    }
  };


  const allPictures = document.querySelectorAll('.picture');
  allPictures.forEach(picture => {
    picture.remove();
  });

  const pictures = document.querySelector('.pictures');

  const docFragment = document.createDocumentFragment();

  const template = document.querySelector('#picture').content;

  pictures.removeEventListener('click', onPictureClick);

  for (let i = 0; i < objects.length; i++) {
    const element = template.cloneNode(true);

    const img = element.querySelector('.picture__img');

    img.setAttribute('src', objects[i].url);
    img.setAttribute('alt', objects[i].description);
    img.setAttribute('id', objects[i].id);

    const likes = element.querySelector('.picture__likes');
    likes.textContent = objects[i].likes;

    const comments = element.querySelector('.picture__comments');
    comments.textContent = objects[i].comments.length;

    docFragment.appendChild(element);
  }

  pictures.appendChild(docFragment);

  pictures.addEventListener('click', onPictureClick);
};

export {viewMiniatures};
