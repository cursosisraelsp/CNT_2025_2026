import { ActivarMotor } from "./ActivarMotor.js";
import { ActivarPersianas } from "./ActivarPersianas.js";
import { condicionActivarSistema } from "./CONDICIONS.js";


function Sistema(){
    if(condicionActivarSistema){
        ActivarMotor()
    }else{
        ActivarPersianas()
    }
}

export {
    Sistema
}