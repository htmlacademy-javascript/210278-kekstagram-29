const allMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const allNames = [
  'Артём',
  'Алексей',
  'Мария',
  'Светлана'
];

const descriptions = [
  'Бассейн',
  'Указатель',
  'Лазурная вода',
  'Не твоя',
  'Еда',
  'Авто',
  'Клубника',
  'Компот',
  'Самолёт',
  'Бархатные тяги',
  'Дорога к морю',
  'Авто поменьше',
  'Салат',
  'Живодёрство',
  'Подкрадули',
  'Вид из иллюминатора',
  'Хор',
  'Кучерявое ретро',
  'Подглядули',
  'Пальмы',
  'Еда посытнее',
  'Закат',
  'Членистоногое',
  'Концерт',
  'Что-то происходит'
];

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

generateObjects();
