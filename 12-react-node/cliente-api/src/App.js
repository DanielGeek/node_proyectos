import { Fragment } from "react";

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Layout
import { Header } from "./componentes/layout/Header";
import { Navegacion } from "./componentes/layout/Navegacion";

// Componentes
import { Clientes } from "./componentes/clientes/Clientes";
import { Pedidos } from "./componentes/pedidos/Pedidos";
import NuevoCliente from "./componentes/clientes/NuevoCliente";
import EditarCliente from "./componentes/clientes/EditarCliente";
import { Productos } from "./componentes/productos/Productos";
import { NuevoProducto } from "./componentes/productos/NuevoProducto";
import { EditarProducto } from "./componentes/productos/EditarProducto";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <div className="grid contenedor contenido-principal">
          <Navegacion />
          <main className="caja-contenido col-9">
            <Switch>
              <Route exact path="/" component={Clientes} />
              <Route exac path="/clientes/nuevo" component={NuevoCliente} />
              <Route exac path="/clientes/editar/:id" component={EditarCliente} />

              <Route exact path="/productos" component={Productos} />
              <Route exac path="/productos/nuevo" component={NuevoProducto} />
              <Route exac path="/productos/editar/:id" component={EditarProducto} />

              <Route exact path="/productos" component={Productos} />

              <Route exact path="/pedidos" component={Pedidos} />
            </Switch>
          </main>
        </div>
      </Fragment>
    </Router>
  )
}
export default App;
