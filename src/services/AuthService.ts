import axios from 'axios';
import { User, Token } from '../interfaces/AuthInterface';


import { Environment } from './../environments/Environment';
// const API_BASE_URL = 'https://api.example.com';

class AuthService {

  apiUrl = Environment.apiUrl;
  
  
  async login(username: string, password: string): Promise<User | null> {
    try {
      const response = await axios.post<Token>(`${this.apiUrl}/login`, { username, password });
      const token = response.data.token;
      const user = await this.fetchUser(token);
      return user;
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      return null;
    }
  }

  async signup(newUser: Partial<User>): Promise<User | null> {
    try {
      const response = await axios.post<Token>(`${this.apiUrl}/signup`, newUser);
      const token = response.data.token;
      const user = await this.fetchUser(token);
      return user;
    } catch (error) {
      console.error('Error al registrarse:', error);
      return null;
    }
  }

  async fetchUser(token: string): Promise<User | null> {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get<User>(`${this.apiUrl}/user`, { headers });
      return response.data;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      return null;
    }
  }

  async renewToken(token: string): Promise<Token | null> {
    try {
      const response = await axios.post<Token>(
        `${this.apiUrl}/renew-token`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      console.error('Error al renovar el token:', error);
      return null;
    }
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      await axios.get(`${this.apiUrl}/verify-token`, { headers: { Authorization: `Bearer ${token}` } });
      return true;
    } catch (error) {
      console.error('El token no es válido:', error);
      return false;
    }
  }


  // servicio para obtener menu
  // servicio para obtener permisos por rol
}

export default new AuthService();
