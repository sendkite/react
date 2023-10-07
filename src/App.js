import { useState } from "react";

function Square({value, onSquareClick}) {

  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    /*
    * 원본 데이터 불변하게 유지하면 좋은 점
    * 1. 특정 동작 실행 취소, 재실행 같은 동작을 쉽게 구현할 수 있음
    * 2. 컴포턴트가 데이터 변경 감지하고 재렌더링 시점 파악하기 쉬움
    * */
    const nextSquares = squares.slice(); // immutability is important
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => {handleClick(0)}} />
        <Square value={squares[1]} onSquareClick={() => {handleClick(1)}} />
        <Square value={squares[2]} onSquareClick={() => {handleClick(2)}} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => {handleClick(3)}} />
        <Square value={squares[4]} onSquareClick={() => {handleClick(4)}} />
        <Square value={squares[5]} onSquareClick={() => {handleClick(5)}} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => {handleClick(6)}} />
        <Square value={squares[7]} onSquareClick={() => {handleClick(7)}} />
        <Square value={squares[8]} onSquareClick={() => {handleClick(8)}} />
      </div>
    </>
  );
}
