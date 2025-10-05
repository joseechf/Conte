
export default class tecnico{
    constructor(data){
        this.ValidarDatos(data);
       // this.calificacion=null;  //no estoy seguro si esto debe ir ya que aqui van los trabajos individuales y la calificacion es el promedio de todos los trabjos, osea que es una por tecnico
    }

    ValidarDatos(data){
        (data.id != null) ? this.id = data.id :  (() => {throw new Error("El id es obligatorio")})();
        (data.nombre != null) ? this.nombre = data.nombre :  (() => {throw new Error("El nombre es obligatorio")})();
        (data.habilidades != null) ? this.habilidades = data.habilidades :  (() => {throw new Error("Las habilidades son obligatorias")})();
        (data.foto != null) ? this.foto = data.foto :  this.foto = "sin foto";
        (data.ubicacion != null) ? this.ubicacion = data.ubicacion :  (() => {throw new Error("La ubicacion es obligatoria")})();
        (data.calificaciones != null) ? this.promedio = this.CalcularCalificacion(data.calificaciones) : this.promedio = 0;
    }
    CalcularCalificacion(calificaciones){
        return calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length;
    }
}
