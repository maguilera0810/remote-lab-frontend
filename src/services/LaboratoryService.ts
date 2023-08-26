import axios from 'axios';
import Environment from '../environments/Environment';
import { Laboratory } from '../interfaces/SchoolInterfaces';
import laboratories from '../data/fixtures/LaboratoryData';
const { isFake } = Environment;

export class LaboratoryService {
  private apiUrl: string = Environment.apiUrl;

  constructor() { }

  async create(data: Partial<Laboratory>): Promise<Laboratory | null> {
    try {
      if (isFake) {
        return data as Laboratory;
      }
      const response = await axios.post<Laboratory>(`${this.apiUrl}/laboratory`, data);
      return response.data;
    } catch (error) {
      console.error('Error al crear el laboratorio:', error);
      return null;
    }
  }

  async getAll(): Promise<Laboratory[] | null> {
    try {
      if (isFake) {
        return laboratories;
      }
      const response = await axios.get<Laboratory[]>(`${this.apiUrl}/laboratory`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los laboratorios:', error);
      return null;
    }
  }

  async getOne(id: number | string): Promise<Laboratory | null> {
    try {
      if (isFake) {
        const parsedId = typeof id === 'number' ? id : parseInt(id, 10);
        const selectedLaboratory = laboratories.find((e: Laboratory) => e.id === parsedId);
        return selectedLaboratory || null;
      }
      const response = await axios.get<Laboratory>(`${this.apiUrl}/laboratory/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener el laboratorio:', error);
      return null;
    }
  }

  async update(id: number | string, data: Partial<Laboratory>): Promise<Laboratory | null> {
    try {
      if (isFake) {
        return data as Laboratory;
      }
      const response = await axios.put<Laboratory>(`${this.apiUrl}/laboratory/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el laboratorio:', error);
      return null;
    }
  }

  async delete(id: number | string): Promise<boolean> {
    try {
      if (isFake) {
        return true;
      }
      await axios.delete(`${this.apiUrl}/laboratory/${id}`);
      return true;
    } catch (error) {
      console.error('Error al eliminar el laboratorio:', error);
      return false;
    }
  }
}

export default new LaboratoryService();
