import './App.css';

/* 
import HelloWord from './components/HellowWord'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Academia from './components/Academia';
import List from './components/List';

*/

import Evento from './components/Evento'
import Form from './components/Form'


function App() {
  
  var nome = 'Guilherme'

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <Evento numero={1}/>
      <Evento numero={2}/>

      <Form/>

      {/* 
      <HelloWord/>  
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="programador" foto="https://via.placeholder.com/150"/>
      <Academia/>
      <List/>
      */}






    </div>
  );
}

export default App;
