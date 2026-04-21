import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ red: 0, blue: 0, green: 0, yellow: 0 });

    let updateRed = () => {
        console.log(`moves.red = ${moves}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 }
        });
    };

    let updateBlue = () => {
        console.log(`moves.blue = ${moves}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 }
        });
    };

    let updateGreen = () => {
        console.log(`moves.green = ${moves}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 }
        });
    };

    let updateYellow = () => {
        console.log(`moves.yellow = ${moves}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 }
        });
    };


    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Red Moves = {moves.red}</p>
                <button style={{ backgroundColor: "red", color: "black" }} onClick={updateRed}>
                    +1
                </button>
                <p>Blue Moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue", color: "black" }} onClick={updateBlue}>
                    +1
                </button>
                <p>Green Moves = {moves.green}</p>
                <button style={{ backgroundColor: "green", color: "black" }} onClick={updateGreen}>
                    +1
                </button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>
                    +1
                </button>
            </div>
        </div>
    )
}