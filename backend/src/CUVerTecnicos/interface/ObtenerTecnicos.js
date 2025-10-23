
export default class ObtenerTecnicos { 
    constructor(gestortecnicos,tecnicosFiltrados,TecnicosCache) {
        this.gestortecnicos = gestortecnicos;
        this.tecnicosFiltrados = tecnicosFiltrados;
        this.tecnicosCache = TecnicosCache; 
    }
    async ObtenerTodosLosTecnicos(){
        try {
            let result = await this.gestortecnicos.ObtenerTrabajos();
            if(!result) throw new Error("ERROR 500 TODO FALLO");
            if(result.status !== 200) throw new Error(result.message);         
            console.log(this.tecnicosCache.get()); //cambiar para que retorne poco a poco para la UI
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

