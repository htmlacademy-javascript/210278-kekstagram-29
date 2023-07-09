import {generateObjects} from './utils.js';

function viewMiniatures() {
  const pictures = document.querySelector('.pictures');

  let docFragment = document.createDocumentFragment();

  let template = document.querySelector('#picture').content;

  const datas = generateObjects();

  console.log(template);
  console.log(datas);

  for (let i = 0; i < datas.length; i++) {
    const element = template.cloneNode(true);

    let img = element.querySelector('.picture__img');

    img.setAttribute("src", datas[i].url);
    img.setAttribute("alt", datas[i].description);

    let likes = element.querySelector('.picture__likes');
    likes.textContent = datas[i].likes;

    let comments = element.querySelector('.picture__comments');
    comments.textContent = datas[i].comments.length;

    docFragment.appendChild(element);
  }

  pictures.appendChild(docFragment);
}

export {viewMiniatures};
