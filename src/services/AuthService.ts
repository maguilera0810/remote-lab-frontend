import axios from 'axios';
import { User, Token } from '../interfaces/AuthInterfaces';
import Environment from './../environments/Environment';


const { apiUrl } = Environment;
const { isFake } = Environment;

export class AuthService {

  async login(user: Partial<User>): Promise<string | null> {
    const password = user.password;
    const username = user.username;
    if (isFake) {
      return "123456789";
    }
    return await axios.post<Token>(`${apiUrl}/login`, { username, password }).then((response) => {
      return response.data.token;
      // return this.fetchUser(token);
    }).catch((error) => {
      console.error('Error en el inicio de sesión:', error);
      return error;
    });
  }

  async signup(user: Partial<User>): Promise<string | null> {
    try {
      const response = await axios.post<Token>(`${apiUrl}/signup`, user);
      return response.data.token;
      // return await this.fetchUser(token);
    } catch (error) {
      console.error('Error al registrarse:', error);
      return null;
    }
  }

  async fetchUser(token: string): Promise<User | null> {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get<User>(`${apiUrl}/user`, { headers });
      return response.data;
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      return null;
    }
  }

  async renewToken(token: string): Promise<Token | null> {
    try {
      const response = await axios.post<Token>(
        `${apiUrl}/renew-token`,
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
      await axios.get(`${apiUrl}/verify-token`, { headers: { Authorization: `Bearer ${token}` } });
      return true;
    } catch (error) {
      console.error('El token no es válido:', error);
      return false;
    }
  }
}

export default new AuthService();
