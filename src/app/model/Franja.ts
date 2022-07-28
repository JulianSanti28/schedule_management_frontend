import { Docente } from "./Docente";

export class Franja {
    idHorario?: number;
    paaId?: number; //id de periodoAcademicoAmbiente
    codigoCompetencia?: number;
    idDocente?: Docente;
    horaInicio?: string;
    horaFin?: string;
    dia?: string;
    ambienteCod?: string;
    paId?: number;//id periodo academico
    message?: string;
}

