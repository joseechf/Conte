import CRUDsolicitud from "../backend/src/CUsolicitarTrabajo/infrastructure/CRUDsolicitud.js";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ruta = path.join(__dirname, "../backend/src/util/bdpruebaSol.json");

const CRUDso = new CRUDsolicitud(ruta);
try {
    let res = await CRUDso.insert({id:"1", idtec:"",idcli:"4", descripcion: "soldar un barco que tengo", ubicacion: "herrera", estado: "pendiente"});
    console.log(res);
} catch (error) {
    console.log(error.message);
}