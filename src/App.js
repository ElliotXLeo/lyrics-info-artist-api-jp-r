import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import InformacionArtista from "./components/InformacionArtista";
import Cancion from "./components/Cancion";
import Formulario from "./components/Formulario";

function App() {
  const [busquedaInformacion, setBusquedaInformacion] = useState({});
  const [letra, setLetra] = useState('');
  const [informacionArtista, setInformacionArtista] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaInformacion).length === 0) {
      return;
    } else {
      const consultarApiLetra = async () => {
        const { artista, cancion } = busquedaInformacion;
        const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const urlArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

        const [letra, informacionArtista] = await Promise.all([
          axios(urlLetra),
          axios(urlArtista)
        ]);
        setLetra(letra.data.lyrics);
        setInformacionArtista(informacionArtista.data.artists[0]);
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
            <InformacionArtista
              informacionArtista={informacionArtista}
            />
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
