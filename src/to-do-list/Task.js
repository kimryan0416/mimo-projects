export const Task = (props) => {
 return (
  <li className="task">
   <input 
    type="checkbox"
    value={props.i}
    onClick={props.handler}
    checked={false}
   />
   <span>{props.t}</span>
  </li>
 );
}