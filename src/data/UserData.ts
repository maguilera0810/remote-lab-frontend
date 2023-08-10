import { Role, User } from "../interfaces/AuthInterfaces";

export const adminRole: Role = {
  id: 1,
  name: 'admin',
  description: '',
  settings: {},
  menu: []
}

export const userData: User = {
  id: 1,
  email: 'mauricio@gmail.com',
  firstName: 'Mauricio',
  lastName: 'Aguilera',
  password: '123456',
  username: '0704482223',
  cellphone: '+593998695892',
  role: adminRole,
}