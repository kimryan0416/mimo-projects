import React from "react";
import { Box } from "./Box";
import {
  generateArray,
  plantMines,
  getNeighbors,
  getHidden,
  revealEmpty,
  revealAll,
} from "./helpers"

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board:null,
      initialized:false,
      status:0,
    }
  }

  componentDidMount() {
    this.initializeBoard();
  }

  initializeBoard = () => {
    var board = generateArray(
      this.props.width, 
      this.props.height
    );
    this.setState({
      board:board,
      status:0,
      initialized:false,
    });
  }

  populateBoard = (startWith) => {
    var board = [...this.state.board];
    const width = this.props.width;
    const height = this.props.height;
    const mines = this.props.mines;
  
    board = plantMines(board, width, height, mines, startWith);
    board = getNeighbors(board, width, height);

    this.setState({
      board:board,
      initialized:true,
      status:0,
    },()=>{
      this.handleBoxClick(startWith.x, startWith.y);
    });
  }

  handleBoxClick = (x, y) => {
    const width = this.props.width;
    const height = this.props.height;
    const mines = this.props.mines;

    var board = [...this.state.board];
    var initialized = this.state.initialized;
    var status = this.state.status;

    var box = board[x][y];

    if (!initialized) {
      this.populateBoard(box);
      return;
    }

    if (box.isRevealed) return;
    if (box.isMine) {
      board = revealAll(board, width, height);
      this.setState({
        board:board,
        status:-1
      });
      return;
    }

    box.isRevealed = true;
    if (box.isEmpty) {
      board = revealEmpty(board, width, height, x, y);
    }

    const hidden = getHidden(board, width, height);

    if (hidden.length == mines) {
      status = 1;
      board = revealAll(board, width, height);
    }

    this.setState({
      board:board,
      status:status
    });
  }

  render() {
    const width = this.props.width;
    const height = this.props.height;
    const mines = this.props.mines;

    const board = this.state.board;
    const status = this.state.status;

    if (board == null) return (
      <p>Loading...</p>
    );

    const hidden = getHidden(board, width, height);
    var remaining = hidden.length - mines;
    if (remaining < 0) remaining = 0;

    var statusPrint = null;
    if (status == 1) {
      statusPrint = (
        <p>You've won! Congratulations!</p>
      );
    } else if (status == -1) {
      statusPrint = (
        <p>You've lost... Try again?</p>
      );
    }

    return (
      <main>
        <header>
          <button onClick={this.initializeBoard}>New Game</button>
          <span>{remaining} boxes remaining</span>
        </header>
        <div className="board">
          {
            board.map(col=>{
              return (
                <div className="column">
                  {
                    col.map(box=>{
                      return (
                        <Box 
                          box={box} 
                          clickHandler={this.handleBoxClick}
                        />
                      );
                    })
                  }
                </div>
              )
            })
          }
        </div>
        {statusPrint}
      </main>
    );
  }
}