import './App.css';

import HelloWord from './components/HellowWord'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Itens from './components/Itens';
import Academia from './components/Academia';


function App() {
  
  var nome = 'Guilherme'

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <Itens/>
      <HelloWord/>  
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="programador" foto="https://via.placeholder.com/150"/>


      <Academia/>
      
    </div>
  );
}

export default App;
