import React from 'react'

function Result(props) {
  return (
    <div class='resultContainer'>
        <div className='info'>
            <label>Beden Kitle İndeksi</label>
            <p  class="form-control">{ props.text }</p>      
          </div>
    </div>
  )
}

export default Result
