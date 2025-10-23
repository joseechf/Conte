
import {formato} from "../../util/Formato.js";

export default class gestorFormulario {
  constructor(GestorS) {
        this.gestorSolicitud = GestorS;
    }
    async enviarFormulario(formData) {
        let data = formato.FormularioToObject(formData);
        try {
            let result = await this.gestorSolicitud.gestionEstados(data);
            if(result.status == "200"){
                console.log("status: ", result.status, "message: ", result.message);
            }else{
                console.log("status: ", result.status, "message: ", result.message);
            }
        } catch (error) {
            console.log("hubo un error: ", error.message);
        }
    }
}


