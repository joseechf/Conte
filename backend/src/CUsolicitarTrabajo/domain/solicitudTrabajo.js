export default class solicitudTrabajo {
    
    static solicitudInstancia = null;

    constructor(data = {}){
        if(solicitudTrabajo.solicitudInstancia){
            return solicitudTrabajo.singleton(data);
        }
        this.ValidarDatos(data);
        solicitudTrabajo.solicitudInstancia = this; //por si alugien hace new solicitudTrabajo()
    }

    static singleton(data = {}){
        if(!solicitudTrabajo.solicitudInstancia){
            solicitudTrabajo.solicitudInstancia = new solicitudTrabajo(data);
            return solicitudTrabajo.solicitudInstancia;
        }else{
            return solicitudTrabajo.solicitudInstancia;
        }
    }

    ValidarDatos(data){
            (data.id) ? this.id = data.id : (() => {throw new Error("Falta id")})();
            (data.idtec) ? this.idtec = data.idtec : (() => {throw new Error("Falta idtec")})();
            (data.idcli) ? this.idcli = data.idcli : (() => {throw new Error("Falta idcli")})();
            (data.descripcion) ? this.descripcion = data.descripcion : (() => {throw new Error("Falta descripcion")})();
            (data.ubicacion) ? this.ubicacion = data.ubicacion : (() => {throw new Error("Falta ubicacion")})();
            (data.estado) ? this.estado = data.estado : "pendiente";
    }

    getData(){
        return {
            id: this.id,
            idtec: this.idtec,
            idcli: this.idcli,
            descripcion: this.descripcion,
            ubicacion: this.ubicacion,
            estado: this.estado
        }
    }

    setEstado(estado){
        if((this.estado === "pendiente") && ((estado === "aprobado") || (estado === "negado"))){
            this.estado = estado;
            return true;
        }
        if(estado === "terminado" && this.estado === "aprobado"){
            this.estado = estado;
            return true;
        }
        return false;
    }
}