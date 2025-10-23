
//cambiar por una implementacion de mensaje real 
import readline from "readline";

class lector{
    constructor(){
        if(!lector.rd){
            lector.rd = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
        }
        return lector.rd;
    }
    static pregunta(mensaje){
        return new Promise((resolve)=>{
            lector.rd.question(mensaje,(estado)=>resolve(estado));
        });
    } 
    static cerrar(){
        if(lector.rd){
            lector.rd.close();
            lector.rd = null;
        }
    }
}

export class mensajero {
    constructor(){
        new lector();
    }
    async enviarSolicitudTecnico(mensaje){ 
        let correcto;
        while (!correcto) {
            let res = await lector.pregunta(mensaje);
            if(res === "si"){
                return "aprobado";
            }else if(res === "no"){
                return "negado";
            }else{
                correcto = false;
            }   
        }
    }
    close(){
        lector.cerrar();
    }
}


