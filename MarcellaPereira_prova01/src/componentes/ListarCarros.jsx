
import './ListarCarros.css'
// definição do componente que recebe como 'valor' o array de carros
export default function ListarCarros({ carros }){

    //varivel que receberá a lsita de carros filtrados apartir da função filter e map, ou seja, eu pego a lista de carros normal, uso o filtro e retorno um novo array de carros filtrados por ano >2019
    const carrosFiltrados = carros.filter(carro => carro.ano > 2019)

    return(
        <div className="div_listar">
        
            <div>
                <h3>Lista de Carros</h3>
                <ul>
                    {/* listando os carros - na lsita de carros ele irá retornar cada vez um dos carros, podenedo mostarr seus atributos, como o modeloi a cor  */}
                    {carros.map(carro => (
                        <li style={{fontSize: '24px'}}>Modelo: {carro.modelo} - Cor {carro.cor}</li>
                    ))}
                </ul>
            </div>


            <div>
                <h3>Filtrar Carros - Apartir de 2020</h3>
                <ul>
                    {/* listanbdo os carros filtrados */}
                    {carrosFiltrados.map(carro => (
                        <li style={{fontSize: '24px'}}>
                            Modelo: {carro.modelo} - {carro.ano}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    
    )
}