import {viewMiniatures} from './miniatures.js';
import {viewBigPicture} from './big-picture.js';
import {viewModal} from './modal.js';
import {generateObjects} from './utils.js';

const objects = generateObjects();

viewMiniatures(objects);
viewModal();
viewBigPicture(objects);
