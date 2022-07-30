export class Persona {
    
    id?:number;
    nombre:String;
    apellido:String;
    ocupacion:String;
    localidad:String;
    telefono:String;
    email:String;
    acerca:String;
    linkedInUrl: String;
    imgUrl:String;

    constructor(nombre:String,apellido:String,ocupacion:String,localidad:String,telefono:String, email:String, acerca:String,linkedInUrl: String,imgUrl:String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.ocupacion=ocupacion;
        this.localidad=localidad;
        this.telefono=telefono;
        this.email=email;
        this.acerca=acerca;
        this.linkedInUrl=linkedInUrl;
        this.imgUrl=imgUrl;
    }
}
