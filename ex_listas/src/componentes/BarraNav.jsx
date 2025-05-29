
import {jogos} from './dados'
import {useState} from 'react'
import './BarraNav.css'

export default function BarraNav(){
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    return (

        <div className='header'>
            <div className='logo_nav'>FunMath</div>
            <nav className='navegation'>
                <button>Inicio</button>
                <button>Contatos</button>
                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Jogos</button>

                {dropdownVisible && (            
                    <div className='dropdown'> 
                        <ul>
                        {jogos.map((jogo) => (
                            <li>{jogo}</li>
                        ))}
                        </ul>
                    </div>
                    )}
               
            </nav>
        </div>
    )
}