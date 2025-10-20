import trabajo from "../domain/tecnico.js";
import CRUDtecnicos from "../infrastructure/CRUDtecnicos.js";
import tecnicosCache from "../infrastructure/tecnicosCache.js";
import Filtrar from "../domain/filtrar.js";


export class gestorTecnicos {

    async ObtenerTrabajos() {
        if(!tecnicosCache.isExpired(10) && tecnicosCache.get() != null){
            return {"status":200}; //si aun no ha expirado el cache, no hago nada y retorno el estado 200
        }
        try {
            let data = await CRUDtecnicos.seleccionar();
            if(data == null) throw new Error("No se encontraron trabajos");
            data = data.map((item) => new trabajo(item)); //validar datos
            tecnicosCache.set(data);
            return {"status":200};
        } catch (error) {
            return {"status":500,"message":error.message}
        }
    }
    
}

export class gestorTecnicosConFiltro {

    async ObtenerTecnicosFiltrados(filtro) {
        try {
            let dataFiltrada = await Filtrar.aplicarFiltro(filtro);
            if(dataFiltrada === 0) throw new Error("No se encontraron tecnicos con esos filtros");
            return {"status":200, "data": dataFiltrada};            
        } catch (error) {
            return {"status":500,"message":error.message};
        }
    }
}