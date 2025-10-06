import { gestorTecnicos, gestorTecnicosConFiltro } from "../aplication/CUverTecnicos/gestorTecnicos.js";
import tecnicosCache from "../infrastructure/tecnicosCache.js";
import Filtrar from "../domain/filtrar.js";

class ObtenerTecnicos {
    constructor(gestortecnicos,tecnicosFiltrados) {
        this.gestortecnicos = gestortecnicos;
        this.tecnicosFiltrados = tecnicosFiltrados;
    }
    async ObtenerTodosLosTecnicos(){
        try {
            let result = await this.gestortecnicos.ObtenerTrabajos();
            if(!result) throw new Error("ERROR 500 TODO FALLO");
            if(result.status !== 200) throw new Error(result.message);         
            console.log(tecnicosCache.get()); //cambiar para que retorne poco a poco para la UI
        } catch (error) {
            console.error(error);
        }
    }
    async ObtenerTecnicosFiltrados(filtro){
        try {
            let result = await this.tecnicosFiltrados.ObtenerTecnicosFiltrados(filtro);
            if(!result) throw new Error("ERROR 500 TODO FALLO");
            if(result.status !== 200) throw new Error(result.message);         
            console.log(result.data); //cambiar para que retorne el filtro para la UI
        } catch (error) {
            console.error(error);
        }
    }   
}

//ejemplo de uso del filtrado
let filtro = {"calificacion":4.5,"habilidades":"Fontanería","ubicacion":"Colón"}; //esta linea hay que eliminarla, es solo una prueba
//

//inyecciones de dependencias
const filtrar = new Filtrar();
const gestortecnicos = new gestorTecnicos();
const tecnicosFiltrados = new gestorTecnicosConFiltro(filtrar);
//declarar objetos
const obtenertecnicos = new ObtenerTecnicos(gestortecnicos,tecnicosFiltrados);
//ejecucion de objetos
await obtenertecnicos.ObtenerTodosLosTecnicos();
obtenertecnicos.ObtenerTecnicosFiltrados(filtro);