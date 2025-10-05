import trabajo from "../../domain/tecnico.js";
import CRUDtecnicos from "../../infrastructure/CRUDtecnicos.js";

export class gestorTecnicos {
    __tecnicos = []; // Array para almacenar los trabajos
    constructor() {
        //this.crudtrabajos = crudtrabajos;
    }
    async ObtenerTrabajos() {
        try {
            let data = await CRUDtecnicos.seleccionar();
            if(data == null) throw new Error("No se encontraron trabajos");
            this.__tecnicos = data.map((row) => {
                return new trabajo(row);
            });
            return {"status":200,"tecnicos":this.__tecnicos};
        } catch (error) {
            return {"status":500,"message":error.message}
        }
    }
    
}