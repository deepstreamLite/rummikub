function renderWaitingForPlayers({ id, name, isMaster }) {

}

/*
 * gameState: {
 *  master: id
 *  players: Array<id>
 *  playerInfo: { [id]: { name } }
 *  currentPlayer: id
 *  state: STATE
 * }
 * boardState: {
 *  isValid: boolean
 *  groups: Array<Array<Token>>
 *  pile: Array<Token>
 * }
 * playerState: {
 *  id: id,
 *  name: string,
 *  isMaster: boolean,
 *  hand: Array<Token>,
 *  timeRemaining: int,
 *  canTakeFromPile: boolean
 * }
 */
function renderGameView({ gameState, boardState, playerState }) {

}

function addTokenToHand(token) {

}


/*
 * moveTokenOnBoard: ({ token, fromGroupId, toGroupId }) => void
 * moveTokenFromHand: ({ token, toGroupId }) => void
 * takeTokenFromPile: () => void
 * endTurn: () => void
 */
function registerUpdateHooks({
  moveTokenOnBoard,
  moveTokenFromHand,
  takeTokenFromPile,
  endTurn,
  startGame
}) {

}

view = {
  renderWaitingForPlayers,
  renderGameView,
  registerUpdateHooks
}
