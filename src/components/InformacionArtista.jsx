import { Fragment } from "react";

const Biografia = ({ informacionArtista }) => {

  if (informacionArtista === '') {
    return (
      <Fragment>
        <h2>Información del Artista</h2>
        <p>No hay resultados</p>
      </Fragment>
    );
  }

  if (Object.keys(informacionArtista).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strWebsite } = informacionArtista;

  return (
    <Fragment>
      <div className="card border-light">
        <div className="card-header bg-primary text-light">
          Información del Artista
        </div>
        <div className="card-body">
          <img src={strArtistThumb} alt="Imagen del Artista" />
          <p className="card-text">Género: {strGenre}</p>
          <h2 className="card-text">Biografía:</h2>
          <p className="card-text">{strBiographyES}</p>
          <p className="card-text">
            <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={`https://${strWebsite}`} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Biografia;