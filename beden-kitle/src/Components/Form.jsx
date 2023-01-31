import React from 'react'
import Result from './Result'
import {useState} from 'react'

function Form() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [tot, setTot] =  useState(); // take tot in a state


function handleClick() {
  setTot((Number(num1) / ((Number(num2)/100)*(Number(num2)/100))).toFixed(2)); // set number to the state
}

function handleNum1(event) {
  setNum1(event.target.value); 
}

function handleNum2(event) {
  setNum2(event.target.value); 
}
  return (
    <div class='Form'>
      <div class='formContainer'> 
          <div className='info'>
            <input  id="kilo" type="text" name="num1" class="form-control" onChange={handleNum1} placeholder="Kilo ex:55"></input>
            <p class="form-control">Kilonuz: { num1 }</p>
          </div>

         <div className='info'>
            <input type="text" name="num2"  class="form-control" onChange={handleNum2} placeholder="Kilo ex:170"></input>
            <p class="form-control">Boyunuz: { num2 }</p>
          </div>
          <button onClick={handleClick}  class="btn btn-warning mt-4">Hesapla</button>
      </div>
      <Result text={tot} />
    </div>
  )
}

export default Form
