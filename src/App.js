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
        try {
          const { artista, cancion } = busquedaInformacion;
          const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

          const resultado = await axios(urlLetra);
          setLetra(resultado.data.lyrics);
        } catch (error) {
          setLetra('No hay resultados');
        }
      }
      const consultarApiInformacionArtista = async () => {
        try {
          const { artista } = busquedaInformacion;
          const urlArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

          const resultado = await axios(urlArtista);
          setInformacionArtista(resultado.data.artists[0]);
        } catch (error) {
          setInformacionArtista('');
        }
      }
      consultarApiLetra();
      consultarApiInformacionArtista();
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
