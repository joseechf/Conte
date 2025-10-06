export default class tecnicosCache {
    
    static tecnicosInstancia = null;
    
    constructor() {
        if(tecnicosCache.tecnicosInstancia != null){
            return tecnicosCache.tecnicosInstancia;
        }
        this.tecnicosInstancia = this;
        this.tecnicos = null, 
        this.timestamp = null
    }
    static set(tecnicos){
        this.tecnicos = tecnicos;
        this.timestamp = Date.now();
    }
    static get(){
        return this.tecnicos;
    }
    static isExpired(limite){
        if(!this.timestamp) return true;
        let tiempoTrasncurrido = (Date.now() - this.timestamp) / 1000 / 60; 
        return tiempoTrasncurrido > limite; //si el limite es mayor al tiempo transcurrido, no ha expirado
    }
    static clear(){
        this.tecnicos = null;
        this.timestamp = null;
    }
}