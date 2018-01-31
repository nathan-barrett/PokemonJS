// export class Game {
//   private ctx;
//   private _previousElapsed = 0;
//
//   run(context){
//     this.ctx = context;
//     this._previousElapsed = 0;
//   }
// }

//   //   let p = this.load();
//   //   Promise.all(p).then(function (loaded) {
//   //     this.init();
//   //     window.requestAnimationFrame(this.tick);
//   //   }.bind(this));
//   // }//end of run() method
//
//   tick(elapsed) {
//     window.requestAnimationFrame(this.tick);
//
//     // clear previous frame
//     this.ctx.clearRect(0, 0, 512, 512);
//
//     // compute delta time in seconds -- also casp it
//     let delta = (elapsed - this._previousElapsed) / 1000.0;
//     delta = Math.min(delta, 0.25); // maximum delta of 250 ms
//     this._previousElapsed = elapsed;
//
//     this.update(delta);
//     this.render();
//   }//.bind(this);
//
//   // define these methods after establishing main loop logic
//   init(){}
//   update(delta){}
//   render(){}
// }
//
//   // START UP FUNCTION
// //   window.onload = function() {
// //     const context = document.getElementById('areaMap').getContext('2d');
// //     Game.run(context);
// //   }
