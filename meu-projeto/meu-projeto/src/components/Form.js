import {useState} from 'react';
import style from './Form.module.css';

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()


        console.log(name)
        console.log(passoword);
    }


    const[name, setName] = useState()
    const[passoword, setPassword] = useState()


    return(


        <div>
            <h1>Meu Cadastro: </h1>

            <form onSubmit={cadastrarUsuario}>


                <div>
                    <label htmlFor="name"> Nome: </label>
                    <input  type="text"placeholder="digite o seu nome" id="name" name="name" ></input>
                </div>
                <div>
                    <label htmlFor="passoword">Senha: </label>
                    <input  type="password"placeholder="digite a sua senha" id="password" name="password" ></input>
                </div>
                <div>
                    <input type="submit" value="cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form