import React from 'react';

const Menu = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="pb-4 pb-md-0 collapse navbar-collapse d-lg-flex justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav menu">
                <li className="nav-item active">
                    <a className="nav-link" href="">Bio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Série Ducarmo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Série Paisagem Inventada</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Série Pipa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Outras Séries</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Outras Coisas</a>
                </li>
                </ul>
            </div>
        </nav> 
    </div>
)

export default Menu;