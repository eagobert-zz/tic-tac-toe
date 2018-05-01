import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {

  // Below I changed Square's render method to show the square value by using (Example: {this.props.value})
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {

    // Below I changed Board's renderSquare method to pass (return) a value prop to the square (Example: value={i}). 

    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';

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
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );