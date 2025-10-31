import { temperaturaMax, sensorTemperatura } from "./CONSTANTES.js"

let condicionActivacionDoVentilador = sensorTemperatura > temperaturaMax;// condición co resultado buleano

export {
    condicionActivacionDoVentilador
}