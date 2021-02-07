import React from "react";
import satocare from "../../assets/img/LOGO3.png";
import satocare1 from "../../assets/img/LOGO1.png";

const Kategori = () => {
  return (
    <>
      <div className="container-grid">
        <div className="grid-item">
          <a href="/">
            <img className="sato-care" src={satocare1} alt="Sato Care" />
          </a>
        </div>
        <div className="grid-item">
          <div className="container-sato">
            <h1>Butuh Layanan Service ?</h1>
            <h3>
              Seperti Grooming dan Salon <br />
              Kunjung Sato Care Mobile
            </h3>
            <br />
            <a href="/">
              <button className="btn-click">Click Here</button>
            </a>
          </div>
        </div>
        <div className="grid-item">
          <a href="/">
            <img className="sato-care" src={satocare} alt="Sato Care" />
          </a>
        </div>
      </div>
      <div className="container-kategori">
        <div className="kategori">
          <div className="card-item">
            <img src="../../src/assets/img/anjing.png" alt="" />
          </div>
        </div>
        <div className="kategori"></div>
        <div className="kategori"></div>
        <div className="kategori"></div>
      </div>
    </>
  );
};

export default Kategori;
