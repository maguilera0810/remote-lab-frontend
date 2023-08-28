import { Equipment } from '../../interfaces/SchoolInterfaces'

const equipments: Equipment[] = [
  {
    id: 1,
    name: 'Equipo 1',
    description: 'Descripción del Equipo 1',
    ipCamara: '192.168.1.1',
    ipEquipo: '192.168.1.2',
    state: 'active',
    laboratory: 1,
    settings: {},
    subjects: [],
  },
  {
    id: 2,
    name: 'Equipo 2',
    description: 'Descripción del Equipo 2',
    ipCamara: '192.168.1.1',
    ipEquipo: '192.168.1.2',
    state: 'inactive',
    settings: {},
    laboratory: 2,
    subjects: [],
  },
  {
    id: 3,
    name: 'Equipo 4',
    description: 'Descripción del Equipo 4',
    ipCamara: '192.168.1.1',
    ipEquipo: '192.168.1.2',
    state: 'active',
    laboratory: 3,
    settings: {},
    subjects: [],
  },
];

export default equipments;