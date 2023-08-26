import axios from 'axios';
import Environment from '../environments/Environment';
import { Subject } from '../interfaces/SchoolInterfaces';
import subjects from '../data/fixtures/SubjectData';
const { isFake } = Environment;

export class SubjectService {
  private apiUrl: string = Environment.apiUrl;

  constructor() { }

  async create(data: Partial<Subject>): Promise<Subject | null> {
    try {
      if (isFake) {
        return data as Subject;
      }
      const response = await axios.post<Subject>(`${this.apiUrl}/subjects`, data);
      return response.data;
    } catch (error) {
      console.error('Error al crear la asignatura:', error);
      return null;
    }
  }

  async getAll(): Promise<Subject[] | null> {
    try {
      if (isFake) {
        return subjects;
      }
      const response = await axios.get<Subject[]>(`${this.apiUrl}/subjects`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener las asignaturas:', error);
      return null;
    }
  }

  async getOne(id: number | string): Promise<Subject | null> {
    try {
      if (isFake) {
        const parsedId = typeof id === 'number' ? id : parseInt(id, 10);
        const selectedSubject = subjects.find((e: Subject) => e.id === parsedId);
        return selectedSubject || null;
      }
      const response = await axios.get<Subject>(`${this.apiUrl}/subjects/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la asignatura:', error);
      return null;
    }
  }

  async update(id: number | string, data: Partial<Subject>): Promise<Subject | null> {
    try {
      if (isFake) {
        return data as Subject;
      }
      const response = await axios.put<Subject>(`${this.apiUrl}/subjects/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la asignatura:', error);
      return null;
    }
  }

  async delete(id: number | string): Promise<boolean> {
    try {
      if (isFake) {
        return true;
      }
      await axios.delete(`${this.apiUrl}/subjects/${id}`);
      return true;
    } catch (error) {
      console.error('Error al eliminar la asignatura:', error);
      return false;
    }
  }
}

export default new SubjectService();
