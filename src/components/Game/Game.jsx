import React from 'react'
import { calculateWinner } from '../../helper';
import {useState} from 'react'
import Board from '../Board/Board'


const Game = () =>{
    const [board , setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const [history, setHistory] = useState([ Array(9).fill(null) ])

    const handleClick = (i) =>{
        const boardCopy = [...board];
        if( winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);

    }

    const reset = ()=>{
        const e_board = Array(9).fill(null);
        setBoard(e_board);
    }
    
    return (
        <div>
        <Board squares = {board} onClick={(i) => handleClick(i)}></Board>
        <div>
            <p>
                {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}

            </p>
            <button onClick={reset}>reset</button>
        </div>
        </div>
    )
}

export default Game;