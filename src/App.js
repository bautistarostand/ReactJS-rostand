import './App.css';
import NavBar from './Assets/NavBar';

function App() {
  let imagen = "kqXt7Sq2.png";
  let titulo = "Doble Cuarto de Libra con Queso";
  let calorias = "771 kcal";
let descripcion = "Imaginá la sensación del clásico Cuarto de Libra.Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza."
const producto = {id: 1, image:imagen, title:titulo, calories:calorias, description:descripcion}; 


  return (
    <div className="container-fluid fondo_amarillo">
      <NavBar />
      <hr />
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <img src={imagen} alt={titulo} className="img-fluid"/>
        </div>
        <div className="col-md-4">
          <h1>{producto.title}</h1>
          <p>{producto.calories}</p>
          <p>{producto.description}</p>
          </div>
        </div>
       
    </div>
  );
}

export default App;

