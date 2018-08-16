import DuelController from "./app/components/duel-controller.js";

class App {
  constructor() {
    this.controllers = {
      duel: new DuelController
    }
  }
}

window.app = new App()