import {useRef, useState} from 'react'
import './App.css'

function App() {
  const [imc, setImc] = useState()
  const tailleRef = useRef(0);
  const poidsRef = useRef(0);
  const readData = async (e) => {
    e.preventDefault();
      const taille = tailleRef.current.value;
      const poids = tailleRef.current.value;

      const result = await fetch('/imc', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({taille, poids})
      })
     const infos = await result.json();
      setImc(infos);

  }
  return (
    <section className='ligne container'>
      <div className="logo column">
        IMC
      </div>
      <div className="column form">
        <form onSubmit={readData}>
          <p>
            <label htmlFor='taille'>Taille</label> <br />
          <input type="number" name="taille" id="taille" style={{fontSize: 20}} ref={tailleRef} />
          </p>
          <p>
            <label htmlFor='poids'>Poids</label> <br />
          <input type="number" name="poids" id="poids" style={{fontSize: 20}} ref={poidsRef}/>
          </p>
          <button type="submit" >Calculer</button>
        </form>
        <pre>
          {JSON.stringify(imc)}
        </pre>
       </div>
    </section>
  )
}

export default App
