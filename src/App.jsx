import { useState } from "react";

const App = () =>{

  let [time,setTime] = useState('')

  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }


setInterval(UpdateTime)
  return (
    <div className="container">
      <h1 className="title">Everthing</h1>
      <h1 className="time ">{time}</h1>
      <h1 className="title">has its time</h1>
    </div>
  )

}
export default App
