import './App.css';
import HelloWord from './components/HellowWord'

function App() {
  
  var nome = 'Guilherme'

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">



      <h2>Alterando o jsx</h2>

      <p>olá, {nome}</p>

      <p>soma: {sum(3 , 5)} </p>

      <img src={url} alt="Miha imagem"/>

      <HelloWord/>
    </div>
  );
}

export default App;
