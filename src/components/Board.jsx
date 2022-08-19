import React , {useState} from 'react'
import square from './square'
import Square from './square'

const Board = () => {
  let [board, setBoard] = useState(Array(9).fill(null))
  let [isXnext, setIsNext] = useState(false)

  const handleSquareClick =(position) =>{
    if(board[position]  ){
      return;
    }
 
    setBoard(prev =>{
      return prev.map((square,pos) =>{
        if(pos === position){
          return isXnext ? "X" : "O"
        }
        return square
      })
    })
    setIsNext(prev => !prev)
  }
  const renderSquare = (position) =>{
    return  <Square value={board[position]} onclick={() => {
      handleSquareClick(position)
    }}/>
  }
  return (
    <div className='board'>
        <div className='board-row'>
           {renderSquare(0)}
           {renderSquare(1)}
           {renderSquare(2)}
        </div>
        <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
     
     
    </div>
  )
}

export default Board