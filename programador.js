const EventEmitter = require("events");
// Clase programador.
// Programar temperatura segun la hora. (Simula la programación de la temperatura de una habitación a una hora determinada.)
class Programador extends EventEmitter {

  constructor(program) {
    super();

    
  }

  programarTermostato() {
    const later = require("later");
    later.date.localTime();
    const sched = later.parse.text("at "+program.hora);
    later.setInterval(() => this.emit(console.log(`${program.temperatura.toFixed(1)}ºC`)), sched);
  }

  

}

exports = module.exports = Programador;
