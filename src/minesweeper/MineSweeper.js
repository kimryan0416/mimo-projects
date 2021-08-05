import "./MineSweeper.css";
import { Board } from "./Board";

const MineSweeper = () => {
 
 const width = 10;
 const height = 10;
 const mines = 15;

 return (
  <Board 
   width={width}
   height={height}
   mines={mines}
  />
 );
}

export default MineSweeper;