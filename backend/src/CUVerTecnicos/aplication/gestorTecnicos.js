import trabajo from "../domain/tecnico.js";
import {Filtrar} from "../domain/filtrar.js";


export class gestorTecnicos {
    constructor(CRUDtecnicos,TecnicosCache){
        this.CRUDtecnicos = CRUDtecnicos;
        this.tecnicosCache = TecnicosCache;
    }
    async ObtenerTrabajos() {
        if(!this.tecnicosCache.isExpired(10) && this.tecnicosCache.get() != null){
            return {"status":200}; //si aun no ha expirado el cache, no hago nada y retorno el estado 200
        }
        try {
            let data = await this.CRUDtecnicos.seleccionar();
            if(data == null) throw new Error("No se encontraron trabajos");
            data = data.map((item) => new trabajo(item)); //validar datos
            this.tecnicosCache.set(data);
            return {"status":200};
        } catch (error) {
            return {"status":500,"message":error.message}
        }
    }
    
}

export class gestorTecnicosConFiltro {
    constructor(TecnicosCache){
        this.tecnicosCache = TecnicosCache;
    }
    async ObtenerTecnicosFiltrados(filtro) {
        try {
            let dataFiltrada = await Filtrar.aplicarFiltro(filtro,this.tecnicosCache);
            if(dataFiltrada === 0) throw new Error("No se encontraron tecnicos con esos filtros");
            return {"status":200, "data": dataFiltrada};            
        } catch (error) {
            return {"status":500,"message":error.message};
        }
    }
}