import propTypes from 'prop-types'

function Itens({marca, ano_lancamento}){
    return(
        <>
        <li>
            {marca}-{ano_lancamento}
        </li>
        </>

    )
}

Itens.propTypes = {
    marca: propTypes.string,
    ano_lancamento: propTypes.number
}

export default Itens