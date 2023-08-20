import { FieldConfig } from '../../../interfaces/GlobalInterfaces'

const SchoolFields: FieldConfig[] = [
  {
    key: 'name',
    label: 'Name',
    type: 'text',
    cssProps: {
      xs: 12,
      md: 6,
    }
  },

  {
    key: 'school',
    label: 'School',
    type: 'select',
    cssProps: {
      xs: 12,
      md: 6,
    },
    options: [
      {
        label: 'School 1',
        value: 1
      },
      {
        label: 'School 2',
        value: 2
      },
      {
        label: 'School 3',
        value: 3
      }
    ]
  },
  {
    key: 'description',
    label: 'Description',
    type: 'text',
    cssProps: {
      xs: 12,
    },
  },
]

export default SchoolFields;;