import Dragon from "../models/Dragon.js"

import Champion from "../models/Champion.js"

const dragonsApi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/dragons/',
  timeout: 3000
})

const championsApi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/champions/',
  timeout: 3000
})

const gameApi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/games/',
  timeout: 3000
})

export default class DuelService {
  constructor() {

  }

  getDragons(draw) {
    dragonsApi.get()
      .then(res => {
        let dragons = res.data.map(rawDragon => {
          return new Dragon(rawDragon)
        })
        draw(dragons)
      })
  }

  getChampions(draw) {
    championsApi.get()
      .then(res => {
        let champions = res.data.map(rawChampion => {
          return new Champion(rawChampion)
        })
        draw(champions)
      })
  }

  newGame(game, callback) {
    gameApi.post('', game)
      .then(res => {
        console.log(res)
        // let champion = res.data.game._champion.set(rawChampion => {
        // return new Champion(rawChampion)

        callback(res)
      })
  }

  attack(attStr, gameId, callback) {

  }
}