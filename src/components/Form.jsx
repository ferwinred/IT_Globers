//importamos los hooks que vamos a necesitar
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//importamos sweetalert para las alertas personalizadas
import Sweet from "sweetalert2";

//importamos la función que hará las validaciones del formulario para controlarlo
import validator from "./form.controller";

import {item} from '../data';

//importamos los estilos adicionales del formulario
import "../css/form.scss";

//componente del formulario controlado
const Form = () => {
  //creamos dos variables en el estado, data y error; data tendrá la información que el usuario ingrese en el formulario actualizada y en error se guardará el error especifico que hay en el formulario.
  const [data, setData] = useState({
    nombre: "",
    email: "",
    celular: "",
    edad: "",
  });
  const [error, setError] = useState({});

  //usamos el useParams para acceder al nombre de la aerolinea a la cual se le esta llenando el formulario
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const is = item.data.find((e) => {
      return e.name === name.replace(
        /(\w+)[-](\w+)/,
        "$1 $2"
      )
    })
    if(!is) navigate('/', {replace:true})
  }, [name, navigate])

  //esta función manejará el evento onChange de los imput y modificará las variables data y error del estado
  const handleChange = (e) => {
    //esta dunción modifica en el estado la variable data
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    //esta dunción modifica en el estado la variable data
    setError(
      validator({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };

  //esta función maneja el evento onFocus para verificar si el usuario ha seleccionado o no algún dato
  const handleFocus = (e) => {
    setError(
      validator({
        ...data,
        [e.target.value]: e.target.value,
      })
    );
  };

  //esta función maneja el evento onSubmit para controlar lo que el usuario esta enviando, se verifica que todos los campos esten llenos y sin errores; si identifica algun error no permite el envío; si hay algún campo vacío lanza una alerta para que el usuario llene los datos
  const handleSubmit = (e) => {
    e.preventDefault();

    //si pasa el if quiere decir que hay campos vacíos por lo tanto lanza la alerta personalizada
    if (!(data.nombre || data.email || data.celular || data.edad)) {
      setError(validator(data));
      Sweet.fire({
        title: "Tu Vuelo Ya",
        text: "faltan datos necesarios en el formulario",
        icon: "error",
        timer: 5000,
        confirmButtonText: "aceptar",
      });
      return
    }
    //ya que cumple el if se hace el envio de la info a la consola y se lanza la alerta personalizada
    console.log(name, data);
    Sweet.fire({
      title: "Tu Vuelo Ya",
      text: "Tu información fue enviada con éxito, estaremos en contacto contigo",
      icon: "success",
      timer: 5000,
      confirmButtonText: "aceptar",
    });
    setData({
      nombre: "",
      email: "",
      celular: "",
      edad: "",
    });
  };

  return (
    <div className="wrapper">
      <h2 className="text-dark fw-bold w-100 bg-light text-center opacity-100">
        {name.replace(
        /(\w+)[-](\w+)/,
        "$1 $2"
      )}
      </h2>
      <p>
        Hola, bienvenido, sabemos que quieres viajar con {name.replace(
        /(\w+)[-](\w+)/,
        "$1 $2"
      )}, por favor
        diligencia el siguiente formulario:
      </p>
      <form className="form-control bg-brown" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            name="nombre"
            className="form-label w-100 text-white text-center"
          >
            NOMBRE
          </label>
          <input
            type="text"
            className={error.nombre ? "form-control danger" : "form-control"}
            id="nombre"
            name="nombre"
            value={data.nombre}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
          {error.nombre ? <span className="error">{error.nombre}</span> : ""}
        </div>
        <div className="mb-3">
          <label
            name="email"
            className="form-label w-100 text-white text-center"
          >
            EMAIL
          </label>
          <input
            type="email"
            className={error.email ? "form-control danger" : "form-control"}
            name="email"
            value={data.email}
            id="email"
            onChange={handleChange}
            placeholder="name@example.com"
          />
          {error.email ? <span className="error">{error.email}</span> : ""}
        </div>
        <div className="mb-3">
          <label
            name="celular"
            className="form-label w-100 text-white text-center"
          >
            CELULAR
          </label>
          <input
            type="phone"
            className={error.celular ? "form-control danger" : "form-control"}
            name="celular"
            id="celular"
            value={data.celular}
            onChange={handleChange}
            placeholder="Ingrese su celular"
          />
          {error.celular ? <span className="error">{error.celular}</span> : ""}
        </div>
        <div className="mb-3">
          <label name="edad" className="w-100 text-white text-center">
            RANGO DE EDAD
          </label>
          <div className="list">
            <select
              value={data.edad}
              name="edad"
              id="edad"
              className={error.edad ? "form-control danger" : "form-control"}
              onFocus={handleFocus}
              onChange={handleChange}
            >
              <option disabled value="">
                Seleccione su rango de edad
              </option>
              <option value="18-30">18-30</option>
              <option value="31-50">31-45</option>
              <option value="46-60">46-60</option>
              <option value="61-75">61-75</option>
              <option value="76-90">76-90</option>
              <option value="90-100">90-100</option>
            </select>
          </div>
          {error.edad ? <span className="error">{error.edad}</span> : ""}
        </div>
        <div className="mb-3 w-100 d-flex justify-content-center">
          <button
            disabled={
              error.nombre || error.email || error.celular || error.edad
                ? true
                : false
            }
            type="submit"
            className="btn btn-light isDisable"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
