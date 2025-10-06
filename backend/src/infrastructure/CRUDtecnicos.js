
import { Formato } from "../aplication/util/Formato.js";

//import de prueba
import fs from "fs";

export default class CRUDtecnicos {
    static conectar = async () => {}
    static seleccionar = async () => {
        let data = fs.readFileSync("../aplication/util/bdprueba.json", 'utf8');
        let dataFormateada = Formato.BDToObject(data);
        return dataFormateada;
    }
    static seleccionarFiltrado = async (filtros) => {}
}