import Card from './Card'
import Detalhes from './Detalhes'
import './Galeria.css'
import {useState} from 'react';

//importar componentes Card e Detalhes
// definir variavel para monitorar se a imagem está selecionada 
// mostrar os 6 cards apartir das informações presentes no array



export default function Galeria({informacoes}) {

    const [selectedCharacter, setSelected] = useState(null)

    const handleSelectedCharacter = (character) => {setSelected(character)} 

    return (
        <>
            <div className="galeria">

                {informacoes.map((info) => (
                    <Card 
                    key={info.id} 
                    name={info.name} 
                    image={info.image} 
                    onClick={()=> handleSelectedCharacter(info)}
                    />
                ))}

                <Detalhes informacoes={selectedCharacter}/>
            </div>
        </>
    );
}