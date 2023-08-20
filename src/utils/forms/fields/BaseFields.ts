import { FieldConfig } from '../../../interfaces/GlobalInterfaces'

const SchoolFields: FieldConfig[] = [
  {
    key: 'id',
    label: 'ID',
    type: 'number'
  },
  {
    key: 'name',
    label: 'Name',
    type: 'text'
  },
  {
    key: 'apellido',
    label: 'Apellido',
    type: 'text'
  },
  {
    key: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    key: 'date',
    label: 'Date',
    type: 'date'
  },
  {
    key: 'opciones',
    label: 'Opciones',
    type: 'select',
    options: [
      {
        label: 'opcion 1',
        value: 1
      },
      {
        label: 'opcion 2',
        value: 2
      },
      {
        label: 'opcion 3',
        value: 2
      }
    ]
  },
  {
    key: 'comentarios',
    label: 'Comentarios',
    type: 'textarea'
  },
]

export default SchoolFields;;