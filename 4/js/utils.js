import {allMessages, allNames, descriptions} from './data.js';

function generateObjects() {
  const objects = [];

  for(let i = 0; i <= 24; i++) {
    const currentId = i + 1;

    objects[i] = {
      id: currentId,
      url: `photos/${currentId}.jpg`,
      description: descriptions[i],
      likes: getRandom(15, 200),
      comments: getRandomComments(getRandom(0, 30))
    };
  }

  return objects;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomComments(length) {
  const comments = [];

  for(let i = 0; i < length; i++) {
    comments[i] = {
      id: i + 1,
      avatar: `img/avatar-${getRandom(1, 6)}.svg`,
      message: allMessages[getRandom(0, 5)],
      name: allNames[getRandom(0, 3)],
    };
  }

  return comments;
}

export {generateObjects};
