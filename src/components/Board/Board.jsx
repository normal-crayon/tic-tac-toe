import React from 'react'
import Square from '../Square/Square'
import '../Board/Board.css'


const Board = ({squares, onClick}) => (
    <div className='board'>
        {
                squares && squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => onClick(i)} />
                ))}
    </div>
);

export default Board;   
