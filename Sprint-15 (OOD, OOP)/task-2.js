const privateSpeed = new WeakMap();
const privateWarning = new WeakMap();

class SpeedLimiter {
  constructor(speed, warningFunc) {
    privateSpeed.set(this, speed);
    privateWarning.set(this, warningFunc);
  }

  get speed() {
    return privateSpeed.get(this);
  }

  get warningFunc() {
    return privateWarning.get(this);
  }

  accelerate(value) {
    const state = privateSpeed.get(this) + value;

    privateSpeed.set(this, state);
    console.log(`Current speed: ${this.speed} km/h`);

    if (state > 200) {
      this.warningFunc();
      console.log(`Current speed: 200 km/h`);
      privateSpeed.set(this, 200);
    }
  }
}

const s = new SpeedLimiter(130, () => console.log('You are driving too fast! Your speed is reduced.'));
s.accelerate(30);
s.accelerate(22);
console.log(privateSpeed.get(s));
s.accelerate(20);
console.log(privateSpeed.get(s));







class SpeedLimiter {
  constructor(speed, warningFunc) {
    /* only typecheck. */
    if (!(typeof speed === 'number' && speed >= 0)) {
      throw new TypeError('Wrong input to class.');
    }

    /* props and methods to hidden. */
    const secrets = {
      speed,
      /* method in private because
       * it's inside of WeakMap.
       */
      warning: () => {
        console.log('You are driving too fast! Your speed is reduced.');
      }
    };

    /* put speed in WeakMap. */
    privateSpeed.set(this, secrets);
  }

  /* you can't set speed, only get. */
  get speed() {
    const { speed } = privateSpeed.get(this);
    return speed;
  }

  accelerate(value) {

    const state = privateSpeed.get(this);
    state.speed = this.speed + value;
    privateSpeed.set(this, state);
    console.log(`Current speed: ${this.speed} km/h`)

    if (state.speed > 200) {
      /* call a method in private. */
      state.warning();
      console.log(`Current speed: 200 km/h`)
    }
  }

  decelerate() {
    this.accelerate(-5);
  }
}