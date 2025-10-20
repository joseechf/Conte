
import solicitudTrabajo from "../domain/solicitudTrabajo.js";
import eventPendiente from "./EventPendiente.js";

export default class gestorSolicitud {
    constructor(CRUDInstance){
        this.eventPendiente = new eventPendiente(CRUDInstance);
    }

    async gestionEstados(data){
        try {
            const entidad = solicitudTrabajo.singleton(data); 
            switch (entidad.estado) {
                case "pendiente":
                    await this.eventPendiente.notificarPendiente();
                    try {
                        let result = await this.eventPendiente.insertarSolicitud(entidad.getData());
                        return result;
                    } catch (error) {
                        return error;
                    }
                    break;
                case "negado":
                    
                    break;
                case "aprobado":
                    
                    break;
                case "finalizado":
                    
                    break;
            }    
        } catch (error) {
            return {status: "400", message: error.message};
        }
    }
    //aqui evalua estado
    //aqui si accion = pendiente
}