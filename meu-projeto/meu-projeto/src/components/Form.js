function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("cadastrou o usuario");
    }


    return(


        <div>
            <h1>Meu Cadastro: </h1>

            <form onSubmit={cadastrarUsuario}>
                <div>
                    <p>pq imput não funciona?</p>
                    <input  type="text"placeholder="digite o seu nome" ></input>
                </div>
                <div>
                    <input type="submit" value="cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form