import Itens  from "./Itens";

function List (){
    return(
        <>
        <h1> minha Lista</h1>
        <ul>
            <item marca="ferrari" ano_lancamento={1985} />
            <item marca="fiat" ano_lancamento={1964} />
            <item marca="Renault" ano_lancamento={876} />
        </ul>
        </>
    )
}

export default List