import { useState } from "react";
import { imagesGallery } from "./images";
import "./styles.css";

const Card = ({ url, title }) => (
  <div className="image-card">
    <img className="card-img" src={url} alt={title} />
    <div className="card-img-overlay">
      <h5>{title}</h5>
    </div>
  </div>
);

const ImageGallery = ({ images = [] }) => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="gallery-container">
      <button
        type="button"
        className="btn"
        onClick={() => setShowGallery((prevState) => !prevState)}
      >
        {showGallery ? "Ocultar Imagenes" : "Mostrar Imagenes"}
      </button>
      {showGallery &&
        images.map(({ url, title }, index) => (
          <Card url={url} title={title} key={`${title}-${index}`} />
        ))}
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <header className="header">
        <h1>Galería de imágenes</h1>
        <button className="btn-theme" onClick={toggleTheme}>
          {`MODO ${isDark ? "LIGHT" : "DARK"}`}
        </button>
      </header>
      <ImageGallery images={imagesGallery} />
    </div>
  );
}
