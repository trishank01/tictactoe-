import React from 'react';

function History({ history, moveTo , currentMove }) {
  return (
    <>
    <div className='history-wrapper'>
      <ul className='history'>
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                // style={{
                //     fontWeight:move === currentMove ? 'bold' : 'normal'
                // }}
                className={`btn-move ${move === currentMove ? 'active' : '' } ` }
                onClick={() => {
                  moveTo(move);
                }}
                type="button"
              >
                {move === 0 ? 'Go to game start' : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
}

export default History;
