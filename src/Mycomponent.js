import React from 'react'
import { useState } from 'react'
const Mycomponent = () => {
  const[Value,Setvalue]=useState("");
  const[result,setResult]=useState(0);
 const handler=e=>{
Setvalue(e.target.value);
 }
  return (
    <div><center>
      <input type='text' placeholder='enter the value' value={Value} onChange={handler}/><br/>
      
      <h1>the result:{result}</h1>
      <button onClick={()=>Setvalue(Value+1)}>1</button>
      <button onClick={()=>Setvalue(Value+2)}>2</button>
      <button onClick={()=>Setvalue(Value+3)}>3</button><br/>

      <button onClick={()=>Setvalue(Value+4)}>4</button>
      <button onClick={()=>Setvalue(Value+5)}>5</button>
      <button onClick={()=>Setvalue(Value+6)}>6</button><br/>

      <button onClick={()=>Setvalue(Value+7)}>7</button>
      <button onClick={()=>Setvalue(Value+8)}>8</button>
      <button onClick={()=>Setvalue(Value+9)}>9</button><br/>

      <button onClick={()=>Setvalue(Value+0)}>0</button>
      <button onClick={()=>Setvalue(Value+"+")}>+</button>
      <button onClick={()=>Setvalue(Value+"-")}>-</button><br/>

      <button onClick={()=>Setvalue(Value+"*")}>*</button>
      <button onClick={()=>Setvalue(Value+"/")}>/</button>
      <button onClick={()=>setResult(eval(Value))}>=</button>
      </center>
    </div>
  )
}

export default Mycomponent
