import tecnicosCache from "../infrastructure/tecnicosCache.js";

export default class Filtrar {
    static aplicarFiltro(filtro){
        if(!tecnicosCache.get() || tecnicosCache.get().length === 0){
            throw new Error("No hay tecnicos en cache para filtrar");
        }
        let resultFiltrado = tecnicosCache.tecnicos.filter(tecnico => {
            const calificacion = filtro.calificacion ? tecnico.calificaciones >= filtro.calificacion : true;
            const habilidades = filtro.habilidades ? tecnico.habilidades.some(h => filtro.habilidades.includes(h)) : true;
            const ubicacion = filtro.ubicacion ? tecnico.ubicacion === filtro.ubicacion : true;
            const favorito = filtro.favorito ? tecnico.favorito === filtro.favorito : true;
            return calificacion && habilidades && ubicacion && favorito;
        });
        if(resultFiltrado.length === 0){
            return 0;
        }else{
            return resultFiltrado;
        }
    }
}