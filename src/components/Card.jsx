//importamos una card de bootstrap con los estilos predeterminados
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//importamos el componente Link para redireccionar a una ruta específica
import { Link } from "react-router-dom";

//este componente solo contiene los estilos de las cards que se mostrarán en home, recibe del home las 4 props que necesita, img, title, mensaje, y id.
const card = ({ title, mensaje, id, img }) => {
  return (
    <Card id={id} style={{ width: "18rem", margin: "2%" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{mensaje}</Card.Text>
        <Link to={`/formulario/${title.replace(/(\w+)\s(\w+)/, "$1-$2")}`}>
          <Button variant="primary">Reservar Vuelo</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

//se exporta el componente para usarlo en el home
export default card;
