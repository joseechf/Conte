import ObtenerTecnicos from "../../backend/src/CUverTecnicos/interface/ObtenerTecnicos.js";
import CRUDdatabase from "../../backend/src/database/CRUDdatabase.js"; 
import { gestorTecnicos, gestorTecnicosConFiltro } from "../../backend/src/CUverTecnicos/aplication/gestorTecnicos.js";
import tecnicosCache from "../../backend/src/CUVerTecnicos/infrastructure/tecnicosCache.js";

//requerimientos para fs
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ruta = path.join(__dirname, '../dataprueba/bdpruebaTec.json');


//ejemplo de uso del filtrado
let filtro = {"calificacion":4.5,"habilidades":"Fontanería","ubicacion":"Colón"};
//

//inyecciones de dependencias
const crud = new CRUDdatabase(ruta); 
const TecnicosCache = new tecnicosCache();
const gestortecnicos = new gestorTecnicos(crud,TecnicosCache);
const tecnicosFiltrados = new gestorTecnicosConFiltro(TecnicosCache);
//declarar objetos
const obtenertecnicos = new ObtenerTecnicos(gestortecnicos,tecnicosFiltrados,TecnicosCache);
//ejecucion de objetos
await obtenertecnicos.ObtenerTodosLosTecnicos();
obtenertecnicos.ObtenerTecnicosFiltrados(filtro);