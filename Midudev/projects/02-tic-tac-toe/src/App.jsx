import './App.css'
import { useState } from 'react'

const TURNS = {
  X: 'X',
  O: 'O'
}

const WINNING_COMBINATIONS = [
  // Horizontal
  [0, 1, 2], // Top
  [3, 4, 5], // Middle
  [6, 7, 8], // Bottom
  // Vertical
  [0, 3, 6], // Left
  [1, 4, 7], // Center
  [2, 5, 8], // Right
  // Diagonal
  [0, 4, 8], // Top left to bottom right
  [2, 4, 6] // Top right to bottom left
]



const Square = ({ isSelected, children ,updateBoard ,index}) => {
  console.log(isSelected)
  const className = `square ${isSelected ? 'is-selected' : ''}`

const handleClick = () => {
  updateBoard(index)
} 
 return (
  <div className={className} onClick={handleClick}>
    {children}
  </div>
 )
 }

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner= (board)=>{
    for(const combination of WINNING_COMBINATIONS){
      const [a,b,c] = combination
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a]
      }
    }
    return null
  }

  const checkEndGame = (board) => {
    return board.every(cell => cell !== null)
  }

  const updateBoard =(index)=>{
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    } else if( checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  return (
    <>
    <main className="board">
      <h1>
        Tic Tac Toe
      </h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
      {
        board.map((cell, index) => (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {board[index]}
          </Square>
        ))
      }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className="text">
              <h2>
              { !winner ? 'Empate': 'Gano'}
              </h2>
              <header className="win">
                {
                  winner && <Square>{winner}</Square>
                }
              </header>
              <footer>
                <button onClick={resetGame}>Reset Game</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>

    </>
  )
}

export default App
