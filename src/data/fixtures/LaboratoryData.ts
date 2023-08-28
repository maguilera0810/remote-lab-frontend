import { Laboratory } from '../../interfaces/SchoolInterfaces'

const laboratories: Laboratory[] = [
  {
    id: 1,
    name: 'Fisica Lab',
    description: "Fisica Lab Description",
    subjects: [1, 2, 7],
  },
  {
    id: 2,
    name: 'Informatica Lab',
    description: "Informatica Lab Description",
    subjects: [2, 4, 5, 9],
  },
  {
    id: 3,
    name: 'Biologia Lab',
    description: "Biologia Lab Description",
    subjects: [3, 6, 8],
  },
];

export default laboratories;