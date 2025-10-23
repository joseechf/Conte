import {mensajero} from '../../util/mensajero.js';

export default class eventPendiente {

    constructor(CRUDInstance){
        this.CRUDsolicitud = CRUDInstance;
        this.mensaje = new mensajero();
    }
    
    async notificarPendiente(descripcion){
        try {
            let mensaje = descripcion+"\n aceptar trabajo: si o no : ";
            let respuesta = await this.mensaje.enviarSolicitudTecnico(mensaje);
            this.mensaje.close();
            return respuesta;
        } catch (error) {
            throw error;
        }
    }
    async insertarSolicitud(data = {}){
        try {
            let result = await this.CRUDsolicitud.insert(data);
            if(result.status == "200"){
                return {status: "200", message: "insercion correcta"};
            }else{
                throw result;
            }
        } catch (error) {
            return {status: "500", message: error};
        }
    }
}