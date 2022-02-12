//se importan los datos para alimentar las cards
import { item } from "../data";

//se importa el componente Card con los estilos
import Card from "./Card";

//se importan los estilos adicionales del home
import "../css/home.scss";

const Home = () => {
  return (
    <div className="w-100 home">
      <h2 className="text-dark fw-bold w-100 bg-light text-center opacity-100">
        Bienvenido a Tu Vuelo Ya
      </h2>

      <div className="container">
        {item.data.map((el) => {
          return (
            <Card
              key={el.id}
              img={el.img}
              title={el.name}
              mensaje={el.descripcion}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
