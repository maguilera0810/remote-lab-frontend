const generateDefaultValue = (value: any): any => {
  // Función auxiliar para generar valores por defecto basados en el tipo
  if (typeof value === 'string') {
    return '';
  } else if (typeof value === 'number') {
    return 0;
  } else if (typeof value === 'boolean') {
    return false;
  } else if (Array.isArray(value)) {
    return [];
  } else if (typeof value === 'object' && value !== null) {
    return generateDefaultObject(value);
  }
  return undefined;
};

export const generateDefaultObject = <T extends Record<string, any>>(interfaceObj: T): T => {
  // Función para generar un objeto JSON con valores por defecto
  // Ejemplo: Generar objeto por defecto para la interfaz User
  // const defaultUser: User = generateDefaultObject<User>({} as User);
  const defaultObject: any = {};
  for (const [key, value] of Object.entries(interfaceObj)) {
    const defaultValue = generateDefaultValue(value);
    defaultObject[key] = defaultValue;
  }
  return defaultObject as T;
};


export default generateDefaultObject;



