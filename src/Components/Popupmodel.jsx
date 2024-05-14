import React from 'react'

const Popupmodel = ({btn,setBtn}) => {
  return (
    <div>
      <button onClick={() => setBtn(false)} className=' ' >close</button>
      <p className={btn == false ? 'hidden' : 'block'}  >madesh</p>
    </div>
  )
}

export default Popupmodel
