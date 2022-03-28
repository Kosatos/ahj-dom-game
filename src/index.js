import Randomize from './js/app';
import './css/main.css';

window.onload = () => {
  const randomize = new Randomize('field', 'cell');
  randomize.showEnemyInterval(1000);
};
