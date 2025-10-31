import { temperaturaMax, sensorTemperatura } from "./CONSTANTES.js"

let condicionActivarSistema = sensorTemperatura > temperaturaMax;// condición co resultado buleano

export {
    condicionActivarSistema
}