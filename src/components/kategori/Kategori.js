import React from "react";
import satocare from "../../assets/img/LOGO3.png";
import satocare1 from "../../assets/img/LOGO1.png";
import anjing from "../../assets/img/anjing.png";
import kucing from "../../assets/img/kucing.png";
import ikan from "../../assets/img/ikan.png";
import reptil from "../../assets/img/reptil.png";

const Kategori = () => {
  return (
    <>
      <div className="d-flex border mt-5 justify-content-center">
        <div className="card-item">
          <a href="/">
            <img className="sato-care" src={satocare1} alt="Sato Care" />
          </a>
        </div>
        <div className="card-item p-4 mt-5">
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
        <div className="card-item">
          <a href="/">
            <img className="sato-care" src={satocare} alt="Sato Care" />
          </a>
        </div>
      </div>
      <div className="container-kategori d-flex mt-5 justify-content-center">
        <div className="kategori">
          <div className="card-item">
            <img src={anjing} alt="" />
            <br />
            Anjing
          </div>
        </div>
        <div className="kategori">
          <div className="card-item">
            <img src={kucing} alt="" />
            <br />
            Kucing
          </div>
        </div>
        <div className="kategori">
          <div className="card-item">
            <img src={ikan} alt="" />
            <br />
            Ikan
          </div>
        </div>
        <div className="kategori">
          <div className="card-item">
            <img src={reptil} alt="" />
            <br />
            Reptil
          </div>
        </div>
      </div>
    </>
  );
};

export default Kategori;
