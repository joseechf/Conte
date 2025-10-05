import { gestorTecnicos } from "../aplication/CUverTecnicos/gestorTecnicos.js";

class ObtenerTecnicos {
    constructor(gestortecnicos) {
        this.gestortecnicos = gestortecnicos;
    }
    async ObtenerTodosLosTrabajos(){
        try {
            let result = await this.gestortecnicos.ObtenerTrabajos();
            if(!result) throw new Error("ERROR 500 TODO FALLO");
            if(result.status !== 200) throw new Error(result.message);         
            console.log(result.tecnicos[0].nombre);
        } catch (error) {
            console.error(error);
        }
    }
    ObtenerTrabajosFiltrados(){}   
}

//inyecciones
const gestortecnicos = new gestorTecnicos();
//declarar objetos
const obtenertecnicos = new ObtenerTecnicos(gestortecnicos);
obtenertecnicos.ObtenerTodosLosTrabajos();