import { condicionActivacionDoVentilador } from "./CONDICIONS.js"


function ActivarMotor(){
    
    if(condicionActivacionDoVentilador){
        console.log("## ACTIVAMOS O VENTILADOR ##")
    }

    let mensaxe = "Condición de activación do motor"

    console.log(mensaxe,condicionActivacionDoVentilador)
}

export {
    ActivarMotor
}
