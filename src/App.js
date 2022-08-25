
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  let imagen = "kqXt7Sq2.png";
  let titulo = "Doble Cuarto de Libra con Queso";
  let calorias = "771 kcal";
let descripcion = "Imaginá la sensación del clásico Cuarto de Libra.Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza."
const producto = {id: 1, image:imagen, title:titulo, calories:calorias, description:descripcion}; 

const productos = [
  {id:1, nombre:"Cuarto de Libra", precio:"980"},
  {id:2, nombre:"Triple Bacon", precio:"1230"},
  {id:3, nombre:"Doble Bacon", precio:"1120"},
  {id:4, nombre:"Macnifica", precio:"1400"}
];
  return (
    <div className="container">
      <NavBar />
      <h3>Productos</h3>
      <ul>
      {
        productos.map(item =>(
          <li key={item.id}>{item.nombre} - ${item.precio}</li>
        ))
      }
      </ul>
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
        <Footer /> 
    </div>
  );
}

export default App;

