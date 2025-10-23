import gestorFormulario from "../../backend/src/CUsolicitarTrabajo/interface/gestorFormulario.js";
import gestorSolicitud from "../../backend/src/CUsolicitarTrabajo/aplication/gestorSolicitud.js";
import CRUDdatabase from "../../backend/src/database/CRUDdatabase.js";

//requerimientos para fs
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ruta = path.join(__dirname, '../dataprueba/bdpruebaSol.json');

// datos del formulario
const formData = {id:"2", idtec:"3",idcli:"4", descripcion: "alguien que haga algo", ubicacion: "los santos", estado: "pendiente"}; 

// inyecciones de dependencias
const CRUDInstance = new CRUDdatabase(ruta); 
const GestorS = new gestorSolicitud(CRUDInstance);

const GF = new gestorFormulario(GestorS);
GF.enviarFormulario(formData);