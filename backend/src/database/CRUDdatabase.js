
import {formato} from "../util/Formato.js";

//import de prueba
import fs from "fs";
import {promises as fp } from "fs";

export default class CRUDdatabase {
    constructor(ruta){
        this.conectar(ruta);
    }

    conectar = async (ruta) => {
        this.conexion = ruta; 
    }
    insert = async (data) => {
        let dataFormateada = formato.ObjectToBD(data); //cambiar ruta cuando se haga BD
        try {
            await fp.writeFile(this.conexion,dataFormateada);
            return {status: "200", message: "insercion correcta"};        
        } catch (error) {
            return {status: "400", message: "error en la insercion"};
        }
    }
    seleccionar = async () => {
        let data = fs.readFileSync(this.conexion, 'utf8');
        let dataFormateada = formato.BDToObject(data);
        return dataFormateada;
    }
    seleccionarFiltrado = async (filtros) => {}
}