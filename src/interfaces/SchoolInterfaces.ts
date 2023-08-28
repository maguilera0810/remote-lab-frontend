export interface University {
  id: number;
  name: string;
}

export interface School {
  id: number;
  name: string;
  university?: number;
}

export interface Subject {
  id: number;
  name: string;
  description: string;
  school: number
}

export interface Laboratory {
  id: number;
  name: string;
  description: string;
  subjects: number[];
}

export interface Equipment {
  id: number
  name: string;
  description: string;
  ipCamara: string; /// coneccion a la camara ?? tiene una o varias
  ipEquipo: string; // coneccion a equipo???
  state: string;
  settings: object;
  laboratory?: number;
  subjects?: number[];

}

export interface Schedule {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  equipment: number;
}

export interface Reservation {
  id: number;
  user: number;
  url: string; // url to shared the current streaming
  visibility: string; // private, subject
  status: string;
  comment: string;
  updatedAt: string;
  createdAt: string;
}

export interface LaboratoryTemplate {
  id: number;
  subject: number;
  laboratory: number;
  setting: object; // depends on the laboratory tools available
}