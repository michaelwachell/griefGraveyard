import 'aframe';

function setAttributes(el, attrs) {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


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


    this.el.addEventListener('raycaster-intersected', (e) => {
      console.log('Player hit something!', e);
      const animation = document.createElement('a-animation');

      const me = this.el;
      const x = me.object3D.position.x;
      const y = me.object3D.position.y;
      const z = me.object3D.position.z;
      const newX = x + 2;
      const newY = y + 2;
      const newZ = z + 2;
  
      setAttributes(animation, {
        duration: '4000',
        attribute: 'position',
        from: `${x} ${y} ${z}`,
        to: `${newX} ${newY} ${newZ}`,
      });
  
  
      me.appendChild(animation);
      // me.object3D.position.x += 1;
    });
  },
});


// private helpers