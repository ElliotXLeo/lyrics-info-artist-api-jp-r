import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Cancion from "./components/Cancion";
import Formulario from "./components/Formulario";

function App() {
  const [busquedaInformacion, setBusquedaInformacion] = useState({});
  const [letra, setLetra] = useState('');

  useEffect(() => {
    if (Object.keys(busquedaInformacion).length === 0) {
      return;
    } else {
      const consultarApiLetra = async () => {
        const { artista, cancion } = busquedaInformacion;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const resultado = await axios(url);
        setLetra(resultado.data.lyrics);
      }
      consultarApiLetra();
    }
  }, [busquedaInformacion])

  return (
    <Fragment>
      <Formulario
        setBusquedaInformacion={setBusquedaInformacion}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
