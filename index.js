class Ninja {
  constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName() {
    console.log(this.nombre);
  }

  showStats() {
    console.log(
      `Nombre: ${this.nombre}, fuerza: ${this.fuerza}, velocidad:${this.velocidad}, salud:${this.salud}`
    );
  }

  drinkSake() {
    this.salud += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200);
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }

  speakWisdom() {
    super.drinkSake();
    console.log(
      "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
    );
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
