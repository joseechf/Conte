import mensajero from '../../mensajeria/mensajero.js';

export default class eventPendiente {

    constructor(CRUDInstance){
        this.CRUDsolicitud = CRUDInstance;
    }
    
    async notificarPendiente(){
        mensajero.enviarMensajeTec("Notificacion: Hola tecnico, tienes una nueva solicitud pendiente.");
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