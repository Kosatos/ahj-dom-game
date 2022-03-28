import enemyImg from '../img/bensolo.png';

export default class Randomize {
  constructor(field, cell) {
    this.field = document.getElementById(`${field}`);
    this.boxes = [...this.field.querySelectorAll(`.${cell}`)];
    this.activeBox = null;
  }

  getRandom() {
    const random = Math.floor(Math.random() * this.boxes.length);
    if (random === this.activeBox) {
      this.getRandom();
    } else {
      this.activeBox = random;
    }
  }

  showEnemy() {
    if (document.getElementById('enemy')) {
      document.getElementById('enemy').remove();
    }

    this.getRandom();
    const enemy = new Image();
    enemy.src = enemyImg;
    enemy.id = 'enemy';
    enemy.classList.add('enemy');
    this.boxes[this.activeBox].appendChild(enemy);
  }

  showEnemyInterval(speed) {
    setInterval(() => {
      this.showEnemy();
    }, speed);
  }
}
