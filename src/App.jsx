import { useState } from 'react'
import divider from './assets/divider.svg'
import { useEffect } from 'react'

function App() {
  const [advice, setAdvice] = useState('')

  const conseguirAdvice = async() => {
    const url ='https://api.adviceslip.com/advice'
    const peticion = await fetch(url)
    const {slip: advice} = await peticion.json()
    setAdvice(advice)
  }

  useEffect(()=>{
    conseguirAdvice()
  },[])

  const getAdvice = e =>{
    conseguirAdvice()
  }

  return (
    <div className="wrapper">
      <div className="advice-card">
        <p className="advice-id">Advice {advice.id}</p>
        <p className="advice-msg">{advice.advice}</p>
        <div className="advice-divider"><img src={divider} alt=""/></div>
        <div className="dice" id='dice' onClick={getAdvice}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
        </div>
      </div>
    </div>
  )
}

export default App
