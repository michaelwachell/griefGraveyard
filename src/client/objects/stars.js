import 'aframe';


AFRAME.registerComponent('star', {
  schema: {
    bar: { type: 'number' },
    baz: { type: 'string' },
  },

  init() {
    // Do something when component first attached.
  },

  update() {
    // Do something when component's data is updated.
  },

  remove() {
    // Do something the component or its entity is detached.
  },

  tick(time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
