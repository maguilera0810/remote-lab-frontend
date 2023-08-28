import axios from 'axios';
import Environment from '../environments/Environment';
import { Equipment } from '../interfaces/SchoolInterfaces';
import equipments from '../data/fixtures/EquipmentData';

const { isFake } = Environment;

export class EquipmentService {
  private apiUrl: string = Environment.apiUrl;

  constructor() { }

  async create(data: Partial<Equipment>): Promise<Equipment | null> {
    try {
      if (isFake) {
        return data as Equipment;
      }
      const response = await axios.post<Equipment>(
        `${this.apiUrl}/equipment`,
        data
      );
      return response.data;
    } catch (error) {
      console.error('Error al crear el equipo:', error);
      return null;
    }
  }

  async getAll(): Promise<Equipment[] | null> {
    try {
      if (isFake) {
        return equipments;
      }
      const response = await axios.get<Equipment[]>(`${this.apiUrl}/equipment`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los equipos:', error);
      return null;
    }
  }

  async getOne(id: number | string): Promise<Equipment | null> {
    try {
      if (isFake) {
        const parsedId = typeof id === 'number' ? id : parseInt(id, 10);
        const selectedEquipment = equipments.find(
          (e: Equipment) => e.id === parsedId
        );
        return selectedEquipment || null;
      }
      const response = await axios.get<Equipment>(
        `${this.apiUrl}/equipment/${id}`
      );
      return response.data;
    } catch (error) {
      console.error('Error al obtener el equipo:', error);
      return null;
    }
  }

  async update(id: number | string, data: Partial<Equipment>): Promise<Equipment | null> {
    try {
      if (isFake) {
        return data as Equipment;
      }
      const response = await axios.put<Equipment>(
        `${this.apiUrl}/equipment/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el equipo:', error);
      return null;
    }
  }

  async delete(id: number | string): Promise<boolean> {
    try {
      if (isFake) {
        return true;
      }
      await axios.delete(`${this.apiUrl}/equipment/${id}`);
      return true;
    } catch (error) {
      console.error('Error al eliminar el equipo:', error);
      return false;
    }
  }
}

export default new EquipmentService();
