import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import Header from '../Header';
import { useState } from 'react';
 
function Home() {
  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador + 1);
    console.log(contador);
  }
  return (
    <div className="App">
      <Header title="Header Param"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      <input type="button" value="Clique" onClick={increment} />
      </p>
      <Link to="/cadastro">Acessar cadastro</Link>
        <p>{contador}</p> cliques!
    </div>
  );
}

export default Home;
