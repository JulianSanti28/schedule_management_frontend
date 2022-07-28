export class Periodo{
    id: number;
    nombre: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    estado: boolean;
    constructor(){
        this.id = 0;
        this.nombre = "";
        this.estado = false;
    }
}