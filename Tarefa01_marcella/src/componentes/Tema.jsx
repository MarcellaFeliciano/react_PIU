

import { useState } from "react";

function Tema(){

    let [isDark, setIsDark] = useState(false)


    if(isDark){
    document.body.style.backgroundColor = "black";
    
    } else {
    document.body.style.backgroundColor = "white";
    }

    return(
         <>
            <button onClick={() => setIsDark(!isDark)}>Mudar Tema</button>
         </>
     )
 }

export default Tema
