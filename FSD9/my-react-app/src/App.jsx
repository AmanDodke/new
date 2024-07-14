
import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  let [count ,SetCount]=useState(0)
  let  [time , SetTime] =useState()
  let  [city , SetCity] =useState('bhopal')
  function fun1(){
    SetCount(++count)
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },[count])
function fun2(){
SetCity('delhi')
}

  setInterval(()=>{
    let date=new Date().toLocaleTimeString()
    SetTime(date)
  })

  return (
    <div>
      <p>{count}</p>
      <button onClick={fun1}>add</button>

     <p> heheheeheh</p>
      <p>Time : {time}</p>

      <p >City : {city}</p>
      <button onClick={fun2}>City</button>
    </div>
  )
}

export default App