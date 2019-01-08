const View = require("./ttt-view");
const Game = require("./game");// require appropriate file

$(() => {
  const game = new Game();
  const $grid = $('ul');
  const view = new View(game, $grid);
});
