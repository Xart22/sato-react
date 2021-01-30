import React from 'react';
import sato from "../../assets/img/sato.png"
import iconsearch from "../../assets/img/3.png"
import iconphone from "../../assets/img/1.png"
import iconshop from "../../assets/img/4.png"
import {Container } from "semantic-ui-react"

const Navbar = () =>{
    return(
        <div className="header">
            <div className="item-header-1 d-flex justify-content-betwen align-items-center">
                <div className="d-flex align-items-center">
                    <img className="mr-2" src={iconphone} alt=""/>
                    <span>Download Sato App</span>
                </div>
            
                <div className="d-flex">
                    <span className="mr-4">Tentang Sato</span>
                    <span className="mr-4">Tentang Sato</span>
                    <span className="mr-4">Tentang Sato</span>
                    <span className="mr-4">Tentang Sato</span>
                </div>
            </div>
            <Container>
            <div className="item-header-2 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                    <img className="img-sato mr-3" src={sato} alt="Sato"/>
                        <div className="wrap-search">
                            <input className="form-control" type="text" placeholder="Cari Kesekuan Anabulmu"/>
                                <div className="wrap-icon-search"> 
                                    <img className="img-search" src={iconsearch} alt="Sato"/>
                                </div>
                        </div>
                        <div className="wrap-img-shop mx-3">
                    <img className="img-shop" src={iconshop} alt=""/>
                </div>
                <span className="mr-3 line">|</span>
                </div>
            </div>
                </Container>
      </div>
      )

}

export default Navbar;