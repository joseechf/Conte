
import formato from "../../util/Formato.js";

//import de prueba
import fs from "fs";

export default class CRUDtecnicos { 
    conectar = async () => {}
    seleccionar = async () => {
        let data = fs.readFileSync("../aplication/util/bdprueba.json", 'utf8');
        let dataFormateada = formato.BDToObject(data);
        return dataFormateada;
    }
    seleccionarFiltrado = async (filtros) => {}
} 