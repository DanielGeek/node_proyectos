import { Fragment } from "react";
import { Header } from "./componentes/layout/Header";
import { Navegacion } from "./componentes/layout/Navegacion";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="grid contenedor contenido-principal">
        <Navegacion />
        <main class="caja-contenido col-9">
          {/* TODO: Routing a los diferentes componentes */}
        </main>
      </div>
    </Fragment>
  )
}
export default App;
