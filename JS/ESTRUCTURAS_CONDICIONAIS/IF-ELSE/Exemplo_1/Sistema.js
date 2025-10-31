import { ActivarMotor } from "./ActivarMotor.js";
import { condicionActivacionDoVentilador } from "./CONDICIONS.js";
import { SubirPersianas } from "./SubirPersianas.js";

function Sistema(){
    if(condicionActivacionDoVentilador){
        ActivarMotor()
    }else{
        SubirPersianas()
    }
}

export {
    Sistema
}