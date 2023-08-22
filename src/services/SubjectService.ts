import axios from 'axios';
import { Environment } from '../environments/Environment';
import { Subject } from '../interfaces/SchoolInterfaces';
import subjects from '../data/fixtures/SubjectData';
const { isFake } = Environment;

class SubjectService {
  private apiUrl: string = Environment.apiUrl;

  constructor() { }

  async createSubject(subject: Partial<Subject>): Promise<Subject | null> {
    try {
      const response = await axios.post<Subject>(`${this.apiUrl}/subjects`, subject);
      return response.data;
    } catch (error) {
      console.error('Error al crear la asignatura:', error);
      return null;
    }
  }

  async getSubjects(): Promise<Subject[] | null> {
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

  async getSubject(id: number | string): Promise<Subject | null> {
    try {
      if (isFake) {
        const parsedId = typeof id === 'number' ? id : parseInt(id, 10);
        const selectedSubject = subjects.find((e: Subject) => e.id === parsedId);
        console.log(selectedSubject);
        return selectedSubject || null;
      }
      const response = await axios.get<Subject>(`${this.apiUrl}/subjects/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la asignatura:', error);
      return null;
    }
  }

  async updateSubject(id: number, updates: Partial<Subject>): Promise<Subject | null> {
    try {
      const response = await axios.put<Subject>(`${this.apiUrl}/subjects/${id}`, updates);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la asignatura:', error);
      return null;
    }
  }

  async deleteSubject(id: number): Promise<boolean> {
    try {
      await axios.delete(`${this.apiUrl}/subjects/${id}`);
      return true;
    } catch (error) {
      console.error('Error al eliminar la asignatura:', error);
      return false;
    }
  }
}

export default SubjectService;
