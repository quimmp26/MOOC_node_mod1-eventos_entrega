const EventEmitter = require("events");
// Clase programador.
// Programar temperatura segun la hora. (Simula la programación de la temperatura de una habitación a una hora determinada.)
class Programador extends EventEmitter {

  constructor() {
    super();
  }

  programarTermostato(program) {
    const later = require("later");
    later.date.localTime();
    const sched = later.parse.text("at "+program.hora);
    later.setInterval(() => this.emit(program.temperatura), sched);
  }

  

}

exports = module.exports = Programador;
