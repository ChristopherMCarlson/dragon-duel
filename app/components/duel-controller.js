import DuelService from "./duel-service.js";

let ds = new DuelService

function draw(champions) {
  let template = ''
  document.getElementById('app').innerHTML = `
  <div class="row">
  <div class="col-sm-12 text-center">
  <h1>Dragon Duel</h1>
  <button onclick="app.controllers.duel.newGame()">Play</button>
  </div>
  </div>
  `
  champions.forEach(champion => {
    template += `
    <div class="col-sm-4 m-4 border border-primary rounded" onclick='app.controllers.duel.declareChampion(${champion.id})'>
    <img src='${champion.imgUrl}' class="img-fluid" />
    </div>
    `
  });
  document.getElementById("champions").innerHTML = template
}

function drawDragons(dragons) {
  let template = ''
  dragons.forEach(dragon => {
    template += `
    <div class="col-sm-4 m-4 border border-danger rounded" onclick='app.controllers.duel.declareDragon(${dragon.id})'>
    <img src='${dragon.imgUrl}' class="img-fluid" />
    </div>
    `
  });
  document.getElementById("dragons").innerHTML = template
}

function drawGame(champion) {
  document.getElementById('app').innerHTML = `
  <div class="row">
  <div class="col-sm-12 text-center">
  <h1>Dragon Duel</h1>
  </div>
  </div>
  `
  document.getElementById('champions').innerHTML = `
  <div class="col-sm-12">
  <h3>Name: ${champion.name}</h3>
  <h3>HP: ${champion.hp}<h3>
  <img src='${champion.imgURL}' class="img-fluid" />
  </div>
  `
}

export default class DuelController {
  constructor() {
    ds.getChampions(draw);
    ds.getDragons(drawDragons)
    this.newGameId = {
      dragonId: '',
      championId: ''
    }


  }
  declareChampion(id) {
    console.log('champ', id)
    this.newGameId.championId = id
  }

  declareDragon(id) {
    console.log('drag', id)
    this.newGameId.dragonId = id
  }

  newGame() {
    // if(id == {}){
    //   return
    // }
    console.log('game', this.newGameId)
    ds.newGame(this.newGameId)
  }


}