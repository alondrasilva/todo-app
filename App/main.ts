// Función para transformar el id de firebase en un array

export const mapToArray = (object: any) => {
  const array = [];


  for (const elem in object) {
    array.push({
      ...object[elem],
      idDB: elem,
    });
  }

  return array;
};

// Formularios
// Función login que recibe 2 parametros(email, pass)
// Va a firebase a revisar si alguna coincide

