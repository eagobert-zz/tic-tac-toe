import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Note: The square class is a controlled component, because it does not keep it's own state.  It receives its' value from the parent (the Board class)

function Square(props) {

  //When a square is clicked it calls the onClick event handler that is defined in the Board's render() method.
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );

  }
  
  class Board extends React.Component {

    //Create a constructor that sets an initial state of the board's nine squares and fills with a value = null.  It also sets the turn state to 'X'

    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    //method defined in Board's renderSquare method.  The onClick event handler is passed to the square class as well as setting a new turn state

    handleClick(i){
      const squares = this.state.squares.slice();
      if(calculateWinner(squares) || squares[i]){
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    // Below Board's renderSquare method passes a value prop (parameter)to the square's array index position (Example: value={this.state.squares[i]}) AND a event handler function called when a square is clicked. 

    renderSquare(i) {
      return (<Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} 
      />
      );
    }
  
    //The Board class's render changes the status based upon the who is the winner or whether "X" is next or not

    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

    // The renderSquare method defined in the board class and used below passes the value indicated into the individual squares (Example: {this.renderSquare(0)}).

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );