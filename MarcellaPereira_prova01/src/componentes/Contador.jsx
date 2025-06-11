
// importação do css para alterar configuraçõe dos botoes
import './Contador.css'
// importação do useState
import { useState } from 'react'

// definição e exportação do componete Conatdor
export default function Contador(){

    // definição da variavel e da função de manipulação Cont e setCont por meio do useSatet - responsável por garantir qqu eo stado da varivel irá poermanecer mesmo apos o proprio react "atuzalizar"
    const [cont,setCont] = useState(0)

    // definição de variaveis auxiliares para as condições - por padrao o nome para o css é 'normal'
    let btMaior = 'normal'
    let btMenor = 'normal'

    // Lógica - definição de varoieves para serem utilizadas comom nome de classes no css
    //se o contador for maior que 10 irá alterar a variavel do Maior para 'maior'
    // se o contador for menor qu e 0 o valor da varievcel menor será 'menor'
    //por padrao são da classe 'normal'
    if (cont > 10) {
        btMaior = 'maior';
    } else if (cont < 0) {
        btMenor = 'menor';
    } else {
        btMaior = 'normal';
        btMenor = 'normal'
    }
    return(
        <div>
            {/* mostrar o contador */}
            <h3>Contador = {cont}</h3>
            {/* botão que utiliza a funç~çao onCçlick para chamar a função setCont, ultizanso a varievl 'auxiliar' cont que recebe o valor já defidino no Cont do useState, e assim acrescentando +1 ou diminuindo -1 */}
            <button className={btMaior} onClick={() => setCont((cont) => cont + 1)}>Acrescentar</button>
            <button className={btMenor} onClick={() => setCont((cont) => cont - 1)}>Diminuir</button>

            {/* as classes alteram o tamanho do botão de acordo com o seu valor */}
        
        </div>

    )
}