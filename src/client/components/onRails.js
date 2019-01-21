import 'aframe';

AFRAME.registerComponent('on-rails', {

  init: () => {

  },

  tick: () => {

  },

  update: () => {

  },


});


AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init() {
    const me = this.el;
    this.el.addEventListener('raycaster-intersected', (e) => {
      console.log('Player hit something!', e);
      me.object3D.position.x += 1;
    });
  },
});
