import React from 'react';

const Square = ({ value, onclick, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={onclick}
      // style={{
      //   fontWeight: isWinningSquare ? 'bold' : 'normal',
      // }}
      className= {`square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}`}
    >
      {value}
    </button>
  );
};

export default Square;
