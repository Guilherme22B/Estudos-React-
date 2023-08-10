import './App.css';
import HelloWord from './components/HellowWord'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  
  var nome = 'Guilherme'

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <HelloWord/>  
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="programador" foto="https://via.placeholder.com/150"/>
      <List/>    
    </div>
  );
}

export default App;
