import gestorFormulario from "../backend/src/CUsolicitarTrabajo/interface/gestorFormulario.js";
import gestorSolicitud from "../backend/src/CUsolicitarTrabajo/aplication/gestorSolicitud.js";
import CRUDsolicitud from "../backend/src/CUsolicitarTrabajo/infrastructure/CRUDsolicitud.js";

//requerimientos para fs
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ruta = path.join(__dirname, '../backend/src/util/bdpruebaSol.json');

// datos del formulario
const formData = {id:"1", idtec:"3",idcli:"4", descripcion: "soldar un barco que tengo", ubicacion: "los santos", estado: "pendiente"}; 

// inyecciones de dependencias
const CRUDInstance = new CRUDsolicitud(ruta); 
const GestorS = new gestorSolicitud(CRUDInstance);

const GF = new gestorFormulario(GestorS);
GF.enviarFormulario(formData);