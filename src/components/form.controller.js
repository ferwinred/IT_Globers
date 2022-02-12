//Esta función sera el controlador del formulario para no recibir datos vacíos e información en formato incorrecto
const validateForm = (data) => {
  let error = {};

  //if para verificar si nombre esta vacío o si esta incorrecto el formato; si alguna de las dos se cumple agregara una propiedad nombre al objeto error con el detalle del error
  if (!data.nombre) {
    error.nombre = "debes ingresar un nombre";
  } else if (!/[^0-9]/.test(data.nombre)) {
    error.nombre = "su nombre no debe contener números";
  }

   //if para verificar si email esta vacío o si esta incorrecto el formato; si alguna de las dos se cumple agregara una propiedad email al objeto error con el detalle del error
  if (!data.email) {
    error.email = "debes ingresar un correo";
  } else if (!/^\S+[@]\w+\.\w{2,3}/.test(data.email)) {
    error.email = "debes ingresar un correo válido";
  }

  //if para verificar si email esta vacío o si esta incorrecto el formato; si alguna de las dos se cumple agregara una propiedad email al objeto error con el detalle del error
  if (!data.celular) {
    error.celular = "debes ingresar un celular de contacto";
  } else if (!/^[+]\d{2}\s{1}\d{10}/.test(data.celular)) {
    error.celular =
      "debes ingresar celular en el formato 'indicativo país + espacio + número";
  }

  //if para verificar que el usuario halla seleccionado un valor en el select Rango de Edad; si no seleccionó valor alguno se agrega propiedad edad al objeto error con el detalle del error
  if (!data.edad) {
    error.edad = "debes seleccionar tu rango de edad";
  }

  //al final retornamos el objeto error
  return error;
};

//exportamos el controlador para ser usado en el componente form
export default validateForm;
