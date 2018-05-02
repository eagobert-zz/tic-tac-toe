import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Note: The square class is a controlled component, because it does not keep it's own state.  It receives its' value from the parent (the Board class)
class Square extends React.Component {

  // Below I changed Square's render method to show the square's state value by using (Example: {this.state.value})

    render() {
      return (

        //When a square is clicked it calls the onClick event handler that was defined in the Board's render() method.
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {

    //Create a constructor that sets an initial state of the board's nine squares and fills with a value = null.

    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }

    //method defined in Board's renderSquare method.  The onClick event handler is passed to the square class

    handleClick(i){
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }

    // Below Board's renderSquare method passes a value prop (parameter)to the square's array index position (Example: value={this.state.squares[i]}) AND a event handler function called when a square is clicked. 

    renderSquare(i) {
      return (<Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} 
      />
      );
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