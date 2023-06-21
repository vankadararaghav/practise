
import {useState} from "react";

function App(){
   const [open,setOpen] = useState(true);
   function handleClick(){
       setOpen(!open);
   }
  return (

      <div onClick={handleClick} > 
        <h1>Click Me</h1>
        {open && <div>Opened</div>}
      </div>

  );
  
}
export default App;