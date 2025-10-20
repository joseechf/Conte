
export default formato = {
    BDToObject(data){
        return JSON.parse(data);
    },
    ObjectToBD(data){
        //esto es solo para fs, cambiar cuando se haga BD
        return JSON.stringify(data); //cambiar por la logica de formateo a BD
    },
    FormularioToObject(data){
        return data; //aqui va la logica para formatear a un formulario
    }
}