import React from 'react';

function StatusMessage({ winner, current }) {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <>
      <div className="status-message">
        {' '}
        {winner && (
          <>
            winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner}
            </span>
          </>
        )}
        {!winner && !noMovesLeft && (
          <>
            next player is <span className={current.isXnext ? 'text-green' : 'text-orange'}> {current.isXnext ? 'X' : 'O'}</span>
          </>
        )}
        {!winner && noMovesLeft && <>
          <span className='text-green'>X</span> and <span className='text-orange'>O</span>
        </>}
      </div>
    </>
    // const massage = winner ? `winner is ${winner}` :
    // `Next player is ${current.isXnext ? "X" : "O"}`
  );
}

export default StatusMessage;
