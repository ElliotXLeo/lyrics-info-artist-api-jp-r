import { useState } from "react";

const Formulario = ({ setBusquedaInformacion }) => {

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  });
  
  const [error, setError] = useState(false);
  const { artista, cancion } = busqueda;

  const actualizarState = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  const buscarInformacion = (e) => {
    e.preventDefault();
    if (artista.trim() === '' || cancion.trim() === '') {
      setError(true);
    } else {
      setError(false);
      setBusquedaInformacion(busqueda);
      setBusqueda({
        artista: '',
        cancion: ''
      });
    }
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <fieldset>
              <legend className="text-center">Letras e Información del Artista </legend>

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="artista">Artista</label>
                  <input
                    type="text"
                    id="artista"
                    name="artista"
                    className="form-control"
                    placeholder="Nombre del artista"
                    onChange={actualizarState}
                    value={artista}
                    required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="cancion">Canción</label>
                  <input
                    type="text"
                    id="cancion"
                    name="cancion"
                    className="form-control"
                    placeholder="Nombre de la canción"
                    onChange={actualizarState}
                    value={cancion}
                    required />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right my-2"
              >Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;