import { ActivarMotor } from "./ActivarMotor.js";
import { ActivarPersianas } from "./ActivarPersianas.js";
import { condicionActivacionDoVentilador } from "./CONDICIONS.js";


function Sistema(){
    if(condicionActivacionDoVentilador){
        ActivarMotor()
    }else{
        ActivarPersianas()
    }
}

export {
    Sistema
}