class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $ul = $('ul');
    // e.target is a dom element
    $ul.on("click", "li", (e) => (this.makeMove($(e.target))));

  }

  makeMove($square) {
    let squareId = $square.attr('id');
    let row = Math.floor(squareId / 3);
    let col = squareId % 3;
    
    if (!this.game.board.isEmptyPos([row, col])) {
      alert("NOT A VALID MOVE");
      // this.game.swapTurn();
    } else {
      $square.addClass(this.game.currentPlayer);
      this.game.playMove([row, col]);
    }


    if (this.game.winner()) {
      alert(`${$square.attr('class')} wins!!`);
    } else if (this.game.isOver()) {
      alert("NOBODY WINS YA IDIOTS");
    }
  }

  setupBoard() {
    for (let i = 0; i < 9; i++) {
      this.el.append(`<li id="${i}"></li>`);
    }
  }
}

module.exports = View;
