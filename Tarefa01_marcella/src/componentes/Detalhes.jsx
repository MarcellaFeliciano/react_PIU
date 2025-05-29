import './Detalhes.css'


export default function Detalhes({informacoes}){

    if(!informacoes){
        return null;
    }

    return(
        <div className='detalhes'>
            <h2>Detalhes da foto</h2>
            <img src={informacoes.image} alt={informacoes.name} />
            <h3>{informacoes.name}</h3>
            <p>{informacoes.description}</p>
        </div>
    )

}