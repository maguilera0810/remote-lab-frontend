import axios from 'axios';
import Environment from '../environments/Environment';
import { School } from '../interfaces/SchoolInterfaces';
import { schools } from '../data/fixtures/SchoolData';
const { isFake } = Environment;

export class SchoolService {
  apiUrl: string = Environment.apiUrl;

  async create(data: Partial<School>): Promise<School | null> {
    try {
      if (isFake) {
        return data as School;
      }
      const response = await axios.post<School>(`${this.apiUrl}/schools`, data);
      return response.data;
    } catch (error) {
      console.error('Error al crear la escuela:', error);
      return null;
    }
  }

  async getAll(): Promise<School[] | null> {
    try {
      if (isFake) {
        return schools;
      }
      const response = await axios.get<School[]>(`${this.apiUrl}/schools`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener las escuelas:', error);
      return null;
    }
  }

  async getOne(id: number | string): Promise<School | null> {
    try {
      if (isFake) {
        const parsedId = typeof id === 'number' ? id : parseInt(id, 10);
        const selectedSchool = schools.find((e: School) => e.id === parsedId);
        console.log(selectedSchool);
        return selectedSchool ?? null;
      }
      const response = await axios.get<School>(`${this.apiUrl}/schools/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la escuela:', error);
      return null;
    }
  }

  async update(id: number | string, data: Partial<School>): Promise<School | null> {
    try {
      if (isFake) {
        return data as School;
      }
      const response = await axios.put<School>(`${this.apiUrl}/schools/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la escuela:', error);
      return null;
    }
  }

  async delete(id: number | string): Promise<boolean> {
    try {
      if (isFake) {
        return true;
      }
      await axios.delete(`${this.apiUrl}/schools/${id}`);
      return true;
    } catch (error) {
      console.error('Error al eliminar la escuela:', error);
      return false;
    }
  }
}

export default new SchoolService();
