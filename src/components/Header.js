import React, { Component } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Logo from "../images/logo.png";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container">
          <div className="float-left">
            <Link to="/" className="navbar-brand">
              <LazyLoad offset={100} once>
                <img src={Logo} width="90" height="40" alt="logo" />
              </LazyLoad>
            </Link>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-sm"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Respon cepat! <small>klik salah satu</small>
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6">
                        <a
                          href="https://wa.me/6281284168409?text=Halo%20kak..%20Saya%20ingin%20mengetahui%20simulasi%20pencairan%20kendaraan%20saya%20sebagai%20berikut%20%3A%0A%0ANama%20%3A%0AAlamat%20%3A%0AKota%20%3A%0ANo%20Hp%20%3A%0AMerk%2C%20type%20%26%20tahun%20kendaraan%20%3A%0A%0ATerima%20kasih."
                          role="button"
                          className="btn btn-success btn-block"
                          style={{ color: "white" }}
                        >
                          <i
                            className="fas fa-motorcycle"
                            style={{
                              fontSize: 50,
                              display: "block"
                            }}
                          />
                          Motorku
                        </a>
                      </div>
                      <div className="col-6">
                        <a
                          href="https://wa.me/6281288788836?text=Halo%20kak..%20Saya%20ingin%20mengetahui%20simulasi%20pencairan%20kendaraan%20saya%20sebagai%20berikut%20%3A%0A%0ANama%20%3A%0AAlamat%20%3A%0AKota%20%3A%0ANo%20Hp%20%3A%0AMerk%2C%20type%20%26%20tahun%20kendaraan%20%3A%0A%0ATerima%20kasih."
                          role="button"
                          className="btn btn-success btn-block"
                          style={{ color: "white" }}
                        >
                          <i
                            className="fas fa-car"
                            style={{
                              fontSize: 50,
                              display: "block"
                            }}
                          />
                          Mobilku
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Modal */}

          <div className="float-right d-md-none">
            <button
              type="button"
              className="btn btn-sm btn-whatsapp"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i
                className="fab fa-whatsapp"
                style={{
                  color: "white",
                  marginRight: 5
                }}
              />
              Hubungi Kami
            </button>

            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/simulasi/mobil">
                  Simulasi Mobil
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/simulasi/motor">
                  Simulasi Motor
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item d-none d-md-block" role="presentation">
                <button
                  type="button"
                  className="btn btn-whatsapp"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{
                      color: "white",
                      marginRight: 5
                    }}
                  />
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
