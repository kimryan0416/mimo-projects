export const Box = (props) => {
 const box = props.box;
 var c = "box";
 if (box.isRevealed) {
  c = "box revealed";
 }
 if (box.isMine) {
  c += " mine";
 }

 return (
  <button
   className={c}
   box={box}
   onClick={()=>{
    props.clickHandler(box.x, box.y)
   }}
  >
   {box.neighbors}
  </button>
 );
}