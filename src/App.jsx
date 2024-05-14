import { useState } from "react";

const App = () =>{

  let [time,setTime] = useState('')

  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }


setInterval(UpdateTime)
  return (
    <div className="min-h-screen flex justify-center items-center text-6xl bg-black ">
      <h1 className="bg-white px-10 py-4 rounded-md hover:bg-red-400 duration-1000 ">{time}</h1>
    </div>
  )

}
export default App
